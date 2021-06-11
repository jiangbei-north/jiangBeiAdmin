<template>
  <div id="videoList">
    <div class="top">
      
    </div>
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
      // this.$router.push({path:"/video/desc/1"})
       this.$router.push({name:"video-desc",params:{id:2}})
      
    }
  },
};
</script>
<style lang="scss" scoped>
#videoList{
  width: 800px;
  .top{
    width: 100%;
    height: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
}
</style>