<template>
  <div id="carousel">
    <el-carousel :interval="5000" arrow="hover" height="350px">
      <el-carousel-item v-for="(item, index) of imgList" :key="index">
        <el-image :src="item.img" alt="" fit="fit" style="height:350px"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    imgList: Array,
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
#carousel {
  width: 100%;
  height: 350px;
  
}
</style>