<template>
  <div class="taskbar f-r-sb-c">
    <div class="left f-r-l-c">
      <div
        class="setting f-r-c-c positionR"
        @mouseenter="boxShow = true"
        @mouseleave="boxShow = false"
      >
        <i class="el-icon-setting"></i>
        <div
          class="setting-box positionA f-r-c-c"
          v-show="boxShow"
          @click="goback"
        >
          <i class="el-icon-s-home"></i>
          <p>退出</p>
        </div>
      </div>
      <div
        class="item positionR"
        v-for="(item, index) of foldList"
        :key="index"
      >
        <p>{{ item.name }}</p>
        <div class="line positionA"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      boxShow: false,
    };
  },
  computed: {
    ...mapState({
      foldList: (state) => state.window.foldList,
    }),
  },
  mounted() {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/common.scss";
@keyframes setShow {
  0% {
    left: -100px;
    opacity: 0;
  }
  100% {
    left: 0px;
    opacity: 1;
  }
}
.taskbar {
  width: 100%;
  height: 50px;
  background-color: #dcdfe6;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;

  .left {
    width: 80%;
    height: 100%;
    .setting {
      width: 50px;
      height: 50px;
      font-size: 25px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      transition: all 0.5s;
      &:hover {
        background-color: $hoverBack;
        color: $hoverFont;
      }
      .setting-box {
        height: 50px;
        width: 100px;
        bottom: 50px;
        left: 0px;
        font-size: 16px;
        background-color: #dcdfe6;
        animation: setShow 1s;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        cursor: pointer;
        &::after {
          content: "";
          width: 100%;
          height: 50px;
          border-radius: 30px;
          background-color: #e6a23c;
          transition: all 0.5s;
          position: absolute;
          left: 0;

          opacity: 0;
          z-index: -1;
          transform: scaleX(0.2);
        }
        &:hover::after {
          transform: scale(1);
          opacity: 1;
          border-radius: 0;
        }
      }
    }

    .item {
      padding: 0 20px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .line {
        width: 80%;
        height: 5px;
        background-color: #409eff;
        bottom: 0;
        transition: all 0.5s;
      }

      &:hover {
        background-color: #ffffff;
        .line {
          width: 100%;
        }
      }
    }
  }
}
</style>