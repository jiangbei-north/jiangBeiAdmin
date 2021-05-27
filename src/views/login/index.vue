<template>
  <div>
    <p>登录</p>
    <el-button type="primary" @click="login">登录</el-button>
    
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
    login() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>