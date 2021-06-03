<template>
  <div id="setting">
    <div class="setting-content f-r-l-t">
      <div class="left f-c-c-c">
        <div class="left-item f-c-c-c hand">
          <i class="el-icon-setting"></i>
          权限设置
        </div>
        <el-button @click="goback">返回</el-button>
      </div>
      <router-view></router-view>
    </div>
    
  </div>
</template>
<script>

export default {
  data() {
    return {};
  },
  mounted() {
    
  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/common.scss";
#setting{
  height: 100vh;
  .setting-content{
    height: 100%;
    .left{
      width: 150px;
      height: 100%;
      border-radius: 0 20px 20px 0;
      border-right: 1px solid #DCDFE6;
      //background-color: aqua;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      .left-item{
        width: 100%;
        height: 100px;
        line-height: 50px;
        text-align: center;
        //background-color: aqua;
        &:hover{
          background-color: $hoverBack;
          color: $hoverFont;
        }
      }
    }
  }
}
</style>