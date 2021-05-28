<template>
  <div id="footer">
    <div class="footer-left f-r-l-t">
      <div class="left-one f-c-t-l">
        <p>链接</p>
        <a href="#">代码仓库</a>
        <a href="#">更新日志</a>
        <a href="#">常见问题</a>
        <a href="#">脚手架</a>
        <a href="#">在线主题编辑器</a>
        <a href="#">Element-React</a>
        <a href="#">Element-Angular</a>
      </div>
      <div class="left-two f-c-t-l">
        <p>社区</p>
        <a href="#">在线讨论</a>
        <a href="#">反馈建议</a>
        <a href="#">贡献指南</a>
        <a href="#">SegmentFault</a>
        <a href="#">Awesome Element</a>
      </div>
    </div>
    <div class="footer-right">
      <p>Element 2.1 Fullerene</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "@/styles/common.scss";
#footer {
  width: 100%;
  //height: 200px;
  background-color: #f7fbfd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 100px;

  .footer-left {
    padding: 30px 50px;
    p {
      font-size: 18px;
      color: #333;
      line-height: 1;
      margin: 0 0 15px;
      font-weight: 600;
    }
    a{
      color: $info;
      font-size: 14px;
      line-height: 2;
      &:hover{
        color: $primary;
      }
    }
    .left-two{
      margin-left: 50px;
    }
    
  }
  .footer-right{
    padding: 30px 50px;
    p {
      font-size: 18px;
      color: #333;
      line-height: 1;
      margin: 0 0 15px;
      font-weight: 600;
    }
  }
}
</style>