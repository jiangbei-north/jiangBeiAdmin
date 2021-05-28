<template>
  <div id="video-header">
    <el-page-header @back="goBack" title="返回" content="详情页面" style="margin-left:20px"> </el-page-header>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  },
};
</script>
<style lang="scss" scoped>
#video-header{
  height: 80px;
  width: 100%;
  
  border-bottom: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>