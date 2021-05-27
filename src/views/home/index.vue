<template>
  <div id="inhome">
    <header class="myheader">
      <i
        :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        class="header-icon hand"
        @click="change"
      ></i>
      <nav class="nav-list">
        <div class="nav-item hand">处理中心</div>
        <div class="nav-item hand">订单</div>
        <div class="nav-item hand">
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus"
                  >狮子头</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-plus-outline"
                  >螺蛳粉</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check"
                  >蚵仔煎</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </nav>
    </header>
    <div class="home-main">
      <carousel :imgList="carouselList"></carousel>
      <div class="home-title">
        <p class="main-title">网站快速成型工具</p>
        <p class="sub-title">
          Element
          Plus，一套为开发者、设计师和产品经理准备的基于Vue3.0的桌面端组件库
        </p>
      </div>
      <div class="sponsor-box f-r-c-c">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzVweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMzUgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sb2dvX2JpdDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSI5OS4wMjkwODI0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzMzOThEIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM1OTRBOTUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPHBhdGggZD0iTTI2LjYxOTYzNjEsMTguMjA2OTQ3NiBDMjYuNjE5NjM2MSwyMi42NjcwMzg4IDIzLjkzMjk2NzUsMjUuNTM4NjA0NCAxOS4xMTU0OTI3LDI1LjUzODYwNDQgQzE3LjM4NjE0MjgsMjUuNTM4NjA0NCAxNS43ODAzMTc5LDI1LjIwMjU3MDEgMTQuNTQ1MDY4LDI0LjQ5OTk1MyBDMTMuMTI0NTMwNiwyMy43MDU2OTAyIDEzLjEyNDUzMDYsMjIuNjk3NTg3NCAxMy4xMjQ1MzA2LDIxLjY1ODkzNiBMMTMuMTI0NTMwNiw2LjIzMTkwODI0IEMxMy4xMjQ1MzA2LDUuMTMyMTU5NzMgMTMuODAzOTE4LDQuNTgyMjg1NDcgMTUuMTkzNTc0Miw0LjU4MjI4NTQ3IEMxNi41ODMyMzA0LDQuNTgyMjg1NDcgMTcuMjYyNjE3OCw1LjEzMjE1OTczIDE3LjI2MjYxNzgsNi4yMzE5MDgyNCBMMTcuMjYyNjE3OCwxMi4wOTcyMzM2IEMxOC4wMzQ2NDksMTEuNTc3OTA4IDE5LjA1MzczMDIsMTEuMzMzNTE5NCAyMC4yMjcyMTc3LDExLjMzMzUxOTQgQzIzLjk5NDczLDExLjMzMzUxOTQgMjYuNjE5NjM2MSwxMy44MDc5NTM2IDI2LjYxOTYzNjEsMTguMjA2OTQ3NiBaIE0xNy4yNjI2MTc4LDIxLjc4MTEzMDMgQzE3Ljc4NzU5OTEsMjIuMDg2NjE2IDE4LjQzNjEwNTMsMjIuMjM5MzU4OCAxOS4xNDYzNzQsMjIuMjM5MzU4OCBDMjEuMTUzNjU1MSwyMi4yMzkzNTg4IDIyLjM4ODkwNTEsMjAuODk1MjIxOCAyMi4zODg5MDUxLDE4LjQ4MTg4NDcgQzIyLjM4ODkwNTEsMTYuMDM3OTk5MiAyMS4xMjI3NzM5LDE0LjYzMjc2NDkgMTkuMjA4MTM2NSwxNC42MzI3NjQ5IEMxOC40NjY5ODY1LDE0LjYzMjc2NDkgMTcuNzg3NTk5MSwxNC44NDY2MDQ5IDE3LjI2MjYxNzgsMTUuMjQzNzM2MyBMMTcuMjYyNjE3OCwyMS43ODExMzAzIFogTTMzLjk2OTM3MzIsNy4zMDExMDgxOCBDMzMuOTY5MzczMiw4LjcwNjM0MjQgMzIuOTUwMjkyLDkuNjgzODk2NjMgMzEuNTI5NzU0Niw5LjY4Mzg5NjYzIEMzMC4xMDkyMTcyLDkuNjgzODk2NjMgMjkuMDkwMTM2LDguNzA2MzQyNCAyOS4wOTAxMzYsNy4zMDExMDgxOCBDMjkuMDkwMTM2LDUuODk1ODczOTcgMzAuMTA5MjE3Miw0Ljk0ODg2ODMxIDMxLjUyOTc1NDYsNC45NDg4NjgzMSBDMzIuOTUwMjkyLDQuOTQ4ODY4MzEgMzMuOTY5MzczMiw1Ljg5NTg3Mzk3IDMzLjk2OTM3MzIsNy4zMDExMDgxOCBaIE0zMy41OTg3OTgyLDEyLjk4MzE0MjIgTDMzLjU5ODc5ODIsMjMuODI3ODg0NSBDMzMuNTk4Nzk4MiwyNC45Mjc2MzMgMzIuOTE5NDEwOCwyNS40Nzc1MDcyIDMxLjUyOTc1NDYsMjUuNDc3NTA3MiBDMzAuMTQwMDk4NCwyNS40Nzc1MDcyIDI5LjQ2MDcxMDksMjQuOTI3NjMzIDI5LjQ2MDcxMDksMjMuODI3ODg0NSBMMjkuNDYwNzEwOSwxMi45ODMxNDIyIEMyOS40NjA3MTA5LDExLjg4MzM5MzcgMzAuMTQwMDk4NCwxMS4zMzM1MTk0IDMxLjUyOTc1NDYsMTEuMzMzNTE5NCBDMzIuOTE5NDEwOCwxMS4zMzM1MTk0IDMzLjU5ODc5ODIsMTEuODgzMzkzNyAzMy41OTg3OTgyLDEyLjk4MzE0MjIgWiBNNDUuNzM1MTI4OCwyMS44MTE2Nzg4IEM0Ni44Nzc3MzUsMjEuODExNjc4OCA0Ny4yMTc0Mjg3LDIzLjAwMzA3MzEgNDcuMjE3NDI4NywyMy42NzUxNDE2IEM0Ny4yMTc0Mjg3LDI0LjEwMjgyMTYgNDcuMDYzMDIyNSwyNC41MzA1MDE2IDQ2LjQ3NjI3ODgsMjQuODY2NTM1OCBDNDUuNzk2ODkxMywyNS4yNjM2NjcyIDQ0LjYyMzQwMzksMjUuNTM4NjA0NCA0My40MTkwMzUyLDI1LjUzODYwNDQgQzQxLjE5NTU4NTMsMjUuNTM4NjA0NCAzOS44Njc2OTE2LDI0LjY1MjY5NTggMzkuMTg4MzA0MiwyMy40MzA3NTMgQzM4LjU3MDY3OTIsMjIuMzMxMDA0NSAzOC41MDg5MTY3LDIxLjAxNzQxNiAzOC41MDg5MTY3LDE5LjYxMjE4MTggTDM4LjUwODkxNjcsMTUuMDI5ODk2MyBMMzcuNDI4MDczLDE1LjAyOTg5NjMgQzM2LjMxNjM0ODEsMTUuMDI5ODk2MyAzNS43NjA0ODU2LDE0LjQ4MDAyMjEgMzUuNzYwNDg1NiwxMy4zMTkxNzY0IEMzNS43NjA0ODU2LDEyLjE1ODMzMDggMzYuMzE2MzQ4MSwxMS42MDg0NTY1IDM3LjQyODA3MywxMS42MDg0NTY1IEwzOC41MDg5MTY3LDExLjYwODQ1NjUgTDM4LjUwODkxNjcsOC45MjAxODIzOCBDMzguNTA4OTE2Nyw3LjgyMDQzMzg3IDM5LjE4ODMwNDIsNy4yNzA1NTk2MSA0MC41Nzc5NjA0LDcuMjcwNTU5NjEgQzQxLjk2NzYxNjUsNy4yNzA1NTk2MSA0Mi42NDcwMDQsNy44MjA0MzM4NyA0Mi42NDcwMDQsOC45MjAxODIzOCBMNDIuNjQ3MDA0LDExLjYwODQ1NjUgTDQ1LjI0MTAyODksMTEuNjA4NDU2NSBDNDYuMzUyNzUzOCwxMS42MDg0NTY1IDQ2LjkwODYxNjMsMTIuMTU4MzMwOCA0Ni45MDg2MTYzLDEzLjMxOTE3NjQgQzQ2LjkwODYxNjMsMTQuNDgwMDIyMSA0Ni4zNTI3NTM4LDE1LjAyOTg5NjMgNDUuMjQxMDI4OSwxNS4wMjk4OTYzIEw0Mi42NDcwMDQsMTUuMDI5ODk2MyBMNDIuNjQ3MDA0LDE5LjYxMjE4MTggQzQyLjY0NzAwNCwyMC4xNjIwNTYxIDQyLjY0NzAwNCwyMC45NTYzMTg5IDQyLjkyNDkzNTIsMjEuNDc1NjQ0NiBDNDMuMTQxMTA0LDIxLjkwMzMyNDYgNDMuNTQyNTYwMiwyMi4wODY2MTYgNDQuMDY3NTQxNCwyMi4wODY2MTYgQzQ0LjQwNzIzNTEsMjIuMDg2NjE2IDQ0Ljc0NjkyODksMjEuOTk0OTcwMyA0NS4wMjQ4NjAxLDIxLjkzMzg3MzEgQzQ1LjI3MTkxMDEsMjEuODcyNzc2IDQ1LjQ4ODA3ODgsMjEuODExNjc4OCA0NS43MzUxMjg4LDIxLjgxMTY3ODggWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkRlc2lnbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlN0YXRlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjEuMDAwMDAwLCAtMjYwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0ibmF2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NjguMDAwMDAwLCAyMjQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ny4wMDAwMDAsIDMyLjAwMDAwMCkiIGlkPSJMb2dvcy0vLWJpdF9sb2dvLXByZXNzZWQiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMzMy4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJiaXQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjMTEyMjJEIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iYmxhY2siIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
          alt=""
        />
        <div class="sponsor-right">
          <div class="sponsor-top">赞助商<span>bit</span></div>
          <div class="sponsor-top">Share Code</div>
        </div>
      </div>
      <div class="big-img f-c-t-c">
        <img src="@/assets/image/home/bigimg.png" alt="" />
      </div>
      <div class="card-box">
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
        </ul>
      </div>
      <div style="height: 500px"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

import Carousel from './component/carousel.vue';
//import { WOW } from "wowjs";
export default {
  components:{
    
    Carousel
  },
  data() {
    return {
      carouselList:[
        {
          img:'http://www.guodegang.org/files/deyunshe_new/tc_hp_slide/img/1/1.jpg'
        },
        {
          img:'http://www.guodegang.org/files/deyunshe_new/tc_hp_slide/img/1/2.jpg'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.home.isCollapse,
    }),
  },
  mounted() {
    
  },
  methods: {
    ...mapMutations("home", ["changeCollapse"]),
    change() {
      let leftEle = document.getElementsByClassName("left");
      if (this.isCollapse) {
        leftEle[0].style.width = "150px";
        this.changeCollapse(false);
      } else {
        leftEle[0].style.width = "0px";
        this.changeCollapse(true);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/common.scss";
#inhome {
  width: 100%;
  height: 100vh;
  //background-color: lightseagreen;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .myheader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: inherit;
    border-bottom: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    .header-icon {
      font-size: 25px;
    }
    .nav-list {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      height: inherit;
      .nav-item {
        width: 100px;
        text-align: center;
        line-height: 80px;
        height: inherit;
        color: $font;
        .el-dropdown-link {
          color: $font;
        }
        &:hover {
          background-color: $info;
          color: $primary !important;
        }
      }
    }
  }
  .home-main {
    width: inherit;
    overflow-y: scroll;
    .home-title {
      margin-top: 80px;
      .main-title {
        font-size: 34px;
        color: #555555;
        font-weight: 600;
        text-align: center;
        margin-top: 30px;
      }
      .sub-title {
        font-size: 18px;
        color: #888888;
        text-align: center;
        margin-top: 20px;
      }
    }
    .sponsor-box {
      margin-top: 40px;
      color: #999999;
      font-size: 14px;
      span {
        color: #666666;
        font-weight: 700;
        margin-left: 5px;
      }
      .sponsor-right {
        margin-left: 10px;
      }
    }
    .big-img {
      margin-top: 30px;
      img {
        width: 890px;
        height: 530px;
      }
    }
    .card-box {
      margin-top: 50px;
      .container {
        width: 100%;
        height: 430px;
        li {
          width: 33%;
          padding: 0 40px;
          .card-item {
            width: 100%;
            height: 430px;
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
              margin-top: 50px;
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
  }
}
</style>