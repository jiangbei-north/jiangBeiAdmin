<template>
  <div class="message">
    <p>此处为内容提示</p>
  </div>
</template>
<script>
export default {
  name: "message",
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      //wait后通过父级移除子元素的方式移除该组件的实例和DOM节点
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }, wait);
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.message {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: transparent;
  z-index: 9999;
  p {
    padding: 10px 20px;
    font-size: 22px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>