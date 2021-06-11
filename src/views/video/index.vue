<template>
  <div id="video">
    <Header></Header>

    <!-- <video src="@/assets/image/video/summer.mp4" controls></video> -->
    <div class="video-content f-r-c-t">
      <div class="content-left positionR">
        
        <video
          class="myvideo"
          ref="video"
          src="@/assets/image/video/summer.mp4"
          controls
          defaultPlaybackRate
        ></video>
        
      </div>
      <div class="content-right">
        <div class="author">
          <div class="author-title">表演团队（2）</div>
          <div class="auther-list f-r-w-l-c">
            <div
              class="auther-item f-c-c-c"
              v-for="(item, index) of autherList"
              :key="index"
            >
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="author-title">演出时间</div>
          <p class="content">2005年10月1日</p>
        </div>
        <div class="author">
          <div class="author-title">视频详情</div>
          <p class="content">这是详情</p>
          <el-button @click="toUs">跳转本页</el-button>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import Header from "./component/header";

export default {
  components: {
    Header,
  },
  data() {
    return {
      autherList: [
        {
          name: "郭德纲",
          img: "../../assets/Unprocessed/guodegang.jpg",
        },
        {
          name: "于谦",
          img: "@/assets/Unprocessed/yuqian.jpg",
        },
      ],
      see_btn:false,
      videoPlay:false,
      id:0,
    };
  },
  watch:{
    id(n,o){
      console.log('id改变',n,o)
    }
  },
  mounted() {
    let params = this.$route.params;
    this.id = params.id;
    console.log('参数',this.id)
  },
  methods: {
    toUs(){
      this.$router.push({name:"video-desc",params:{id:3}})
    }
   
  },
};
</script>
<style lang="scss" scoped>
#video {
  .video-content {
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    //background-color: rosybrown;
    padding: 20px;
    .content-left {
      width: 550px;
      height: 400px;
      background-color: royalblue;
      margin-right: 40px;
      .myvideo {
        width: 100%;
        height: 100%;
      }
      .video-btn{
        background-color: aqua;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        i{
          font-size: 30px;
        }
      }
    }
    .content-right {
      width: 550px;
      height: 400px;
      //background-color: rgb(194, 160, 9);
      .author {
        width: 100%;
        //height: 44px;
        margin-bottom: 20px;
        font-size: 16px;
        color: #212121;
        .author-title {
          width: 100%;
          //margin-left: 20px;
          padding-left: 20px;
          line-height: 44px;
          cursor: pointer;
          background-color: #f4f4f4;
        }
        .auther-list {
          width: 100%;
          margin-top: 5px;
          .auther-item {
            margin-left: 20px;
            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
          }
        }
        .content{
          padding: 10px;
        }
      }
    }
  }
}
</style>