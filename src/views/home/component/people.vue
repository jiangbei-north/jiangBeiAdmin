<template>
  <div id="people">
    <p>演员风采</p>
    <ul class="container f-r-sb-c">
      <li>
        <div class="card-item f-c-t-c">
          <img src="@/assets/image/home/element.png" alt="" />
          <p class="card-name">指南</p>
          <p class="card-subname">
            了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。
          </p>
          <div class="card-btn f-c-c-c">查看详情</div>
        </div>
      </li>
      <li>
        <div class="card-item f-c-t-c">
          <img src="@/assets/image/home/component.png" alt="" />
          <p class="card-name">组件</p>
          <p class="card-subname">
            使用组件Demo快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。
          </p>
          <div class="card-btn f-c-c-c">查看详情</div>
        </div>
      </li>
      <li>
        <div class="card-item f-c-t-c">
          <img src="@/assets/image/home/resource.png" alt="" />
          <p class="card-name">资源</p>
          <p class="card-subname">
            下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率
          </p>
          <div class="card-btn f-c-c-c">查看详情</div>
        </div>
      </li>
      <li>
        <div class="card-item f-c-t-c">
          <img src="@/assets/image/home/resource.png" alt="" />
          <p class="card-name">资源</p>
          <p class="card-subname">
            下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率
          </p>
          <div class="card-btn f-c-c-c">查看详情</div>
        </div>
      </li>
    </ul>
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
#people {
  margin-top: 50px;
  text-align: center;
  p {
    font-size: 30px;
    color: #555555;
    font-weight: 600;
    text-align: center;
  }
  .container {
    width: 100%;
    height: 330px;
    margin-top: 40px;
    li {
      width: 22%;
      padding: 0 40px;
      .card-item {
        width: 100%;
        height: 330px;
        border: 1px solid #eaeefb;
        border-radius: 5px;
        position: relative;
        bottom: 0;
        transition: all 0.5s;
        &:hover {
          bottom: 10px;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
        img {
          width: 160px;
          height: 120px;
          margin-top: 10px;
        }
        .card-name {
          font-size: 18px;
          color: #1f2f3d;
          font-weight: 400;
          margin-top: 50px;
        }
        .card-subname {
          font-size: 14px;
          color: #99a9bf;
          padding: 0 25px;
          margin-top: 20px;
        }
        .card-btn {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 53px;
          font-size: 14px;
          border-top: 1px solid #eaeefb;
          color: #409eff;
          cursor: pointer;
          transition: all 0.5s;
          border-radius: 0 0 5px 5px;
          &:hover {
            background-color: #409eff;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>