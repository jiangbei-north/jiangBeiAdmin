<template>
  <div>
    <p>视频列表</p>
    <el-button @click="toDesc">进入详情</el-button>
    
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
    toDesc(){
      this.$router.push("/video/desc")
    }
  },
};
</script>
<style lang="scss" scoped>
</style>