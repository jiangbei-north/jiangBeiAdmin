<template>
  <div id="home">
    <div class="left f-c-b-c">
      <div class="item f-c-c-c">
        <i class="el-icon-user-solid"></i>
        <p>信息</p>
      </div>
      <div class="item f-c-c-c">
        <i class="el-icon-star-on"></i>
        <p>星星</p>
      </div>
      <div class="item f-c-c-c">
        <i class="el-icon-s-grid"></i>
        <p>设置</p>
      </div>
    </div>
    <router-view to="/home/index"></router-view>
  </div>
</template>
<script>

export default {
  data() {
    return {
      
    };
  },
  
  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/common.scss";
#home {
  display: flex;
  flex-direction: row;
  height: 100vh;
  .left {
    height: inherit;
    width: 200px;
    background-color: lightcoral;
    transition: all 0.5s;
    overflow: hidden;
    .item{
      height: 100px;
      width: 150px;
      i{
        font-size: 20px;
      }
      &:hover{
        background-color: $info;
      }
    }
  }
}
</style>

