<template>
  <div>
    <p>音频列表</p>
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
      this.$router.push("/audio/desc")
    }
  },
};
</script>
<style lang="scss" scoped>
</style>