<template>
  <div id="home">
    <div class="home-content">
      <div class="left f-c-b-c">
        <div class="item f-c-c-c">
          <i class="el-icon-user-solid"></i>
          <p>信息</p>
        </div>
        <div class="item f-c-c-c" @click="toWindow">
          <i class="el-icon-star-on"></i>
          <p>星星</p>
        </div>
        <div class="item f-c-c-c" @click="toSetting">
          <i class="el-icon-s-grid"></i>
          <p>设置</p>
        </div>
      </div>
      <router-view to="/home/index"></router-view>
    </div>
   
  </div>
</template>
<script>


export default {
  
  data() {
    return {};
  },

  methods: {
    toSetting(){
      this.$router.push("/setting")
    },
    toWindow(){
      this.$router.push("/window")
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/common.scss";
#home {
  .home-content {
    display: flex;
    flex-direction: row;
    height: 100vh;
    .left {
      height: inherit;
      width: 150px;
      //background-color: lightcoral;
      border-right: 1px solid #dcdfe6;
      transition: all 0.5s;
      overflow: hidden;
      .item {
        height: 100px;
        width: 150px;
        i {
          font-size: 20px;
        }
        &:hover {
          background-color: $hoverBack;
          color: $hoverFont;
        }
      }
    }
  }
}
</style>

