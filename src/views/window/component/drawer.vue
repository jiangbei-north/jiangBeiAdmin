<template>
  <div class="drawer" ref="draw" v-drag>
    <div class="title">
      <div class="title-left">画图</div>
      <div class="title-right">
        <div class="title-item" @click="foldMe">
          <i class="el-icon-minus"></i>
        </div>

        <div class="title-item" @click="bigMe">
          <i
            :class="
              showBox == 'small'
                ? 'el-icon-folder-add'
                : 'el-icon-folder-remove'
            "
          ></i>
        </div>

        <div class="title-item" @click="closeDraw">
          <i class="el-icon-close"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="mycanvas">
        <canvas ref="canvasBox" id="canvas" width="720" height="400"></canvas>
        <div class="tool f-r-l-c">
          
          <div class="tool-item f-r-c-c">
            <p>画笔颜色：</p>
            <el-color-picker
              v-model="writeColor"
              show-alpha
              :predefine="predefineColors"
              @change="changeWriteColor"
            >
            </el-color-picker>
          </div>
          <div class="tool-item f-r-c-c">
            <p>画板颜色：</p>
            <el-color-picker
              v-model="backColor"
              show-alpha
              :predefine="predefineColors"
              @change="changeBackColor"
            >
            </el-color-picker>
          </div>
          <div class="tool-item f-r-c-c">
            <el-button @click="clear">清空</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  
  data() {
    return {
      canvaDom: {},
      context: {},
      showBox: "small",
      writeColor: "rgba(255, 69, 0, 0.68)",
      backColor:"#ffffff",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ],
    };
  },
  computed: {
    ...mapState({
      foldList: (state) => state.window.foldList,
    }),
  },
  watch: {
    foldList(n){
      console.log('监听',n)
    }
  },
  mounted() {
    console.log("取值", this.foldList);
    this.do();
  },
  methods: {
    ...mapMutations("window", ["addFold", "delFold", "changeFold"]),
    closeDraw() {
      this.$emit("closeDraw", false);
      this.delFold({ name: "画画" });
      console.log("取值", this.foldList);
    },
    bigMe() {
      if (this.showBox == "small") {
        this.$refs.draw.style.width = "inherit";
        this.$refs.draw.style.height = "inherit";
        this.$refs.draw.style.top = 0;
        this.$refs.draw.style.left = 0;
        document.getElementById("canvas").setAttribute("width",this.$refs.draw.offsetWidth.toString()*0.9);
        this.changeDo();
        this.showBox = "big";
      } else {
        this.$refs.draw.style.width = "800px";
        this.$refs.draw.style.height = "500px";
        this.$refs.draw.style.top = "150px";
        this.$refs.draw.style.left = "250px";
        document.getElementById("canvas").setAttribute("width","720");
        this.changeDo();
        this.showBox = "small";
      }
      // this.canvasX = this.canvaDom.getBoundingClientRect().left;
      // this.canvasY = this.canvaDom.getBoundingClientRect().top;
      

      console.log(this.$refs.draw.offsetWidth,this.$refs.canvasBox.offsetWidth);
    },
    foldMe() {
      this.changeFold({ name: "画画", isFold: true });
    },
    do() {
      let that = this;
      this.canvaDom = document.querySelector("canvas");
      that.context = this.canvaDom.getContext("2d");
      that.canvasX = this.canvaDom.getBoundingClientRect().left;
      that.canvasY = this.canvaDom.getBoundingClientRect().top;
      console.log(that.canvasX, that.canvasY);
      that.context.fillStyle = this.backColor; // 画布背景色
      that.context.lineWidth = 4; // 线的宽度
      that.context.strokeStyle = this.writeColor; // 线的颜色
      that.context.fillRect(0, 0, this.canvaDom.width, this.canvaDom.height); // 画板的范围
      this.canvaDom.addEventListener("mousedown", down, false); // 鼠标按下去的事件
      this.canvaDom.addEventListener("mousemove", draw, false); // 鼠标移动事件
      this.canvaDom.addEventListener("mouseup", up, false); // 鼠标松开事件

      var onoff = false; // 锁定开关
      var oldx = that.canvasX; // 起始坐标x
      var oldy = that.canvasY; // 起始坐标y
      var newx; // 结束坐标x
      var newy; // 结束坐标y

      // 鼠标按下
      function down(event) {
        onoff = true; // 打开开关
        oldx = event.clientX - that.canvasX; // 鼠标在画板中点击的X的坐标
        oldy = event.clientY - that.canvasY; // 鼠标在画板中点击的Y的坐标
        that.context.beginPath(); // 开始路径
      }

      // 鼠标移动
      function draw(event) {
        // 开关
        if (onoff) {
          newx = event.clientX - that.canvasX;
          newy = event.clientY - that.canvasY;
          that.context.moveTo(oldx, oldy); // 线的起点坐标
          that.context.lineTo(newx, newy); // 线的始点坐标
          that.context.stroke(); // 初始化到画布中
          oldx = newx;
          oldy = newy;
        }
      }
      // 鼠标离开
      function up() {
        onoff = false; // 关闭开关
        that.context.closePath(); // 关闭路径
      }
    },
    changeDo(){
      let that = this;
      that.canvasX = this.canvaDom.getBoundingClientRect().left;
      that.canvasY = this.canvaDom.getBoundingClientRect().top;
      that.context.fillStyle = this.backColor; // 画布背景色
      that.context.lineWidth = 4; // 线的宽度
      that.context.strokeStyle = this.writeColor; // 线的颜色
      that.context.fillRect(0, 0, this.canvaDom.width, this.canvaDom.height); // 画板的范围
    },
    changeWriteColor(n){
      this.context.strokeStyle = n; // 线的颜色
    },
    changeBackColor(n){
      this.context.fillStyle = n; // 画布背景色
      console.log(this.context)
      this.changeDo();
    },
    clear() {
      document
        .querySelector("canvas")
        .getContext("2d")
        .clearRect(0, 0, 800, 600);
    },
    toImg() {
      var image = new Image();
      image.src = this.canvas.toDataURL("image/png");
      return image;
    },
  },
};
</script>
<style lang="scss" scoped>
.drawer {
  width: 800px;
  height: 500px;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  position: fixed;
  top: 120px;
  left: 250px;
  background-color: #ffffff;
  .title {
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #000000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .title-left {
      padding-left: 20px;
    }
    .title-right {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }

    .title-item {
      width: 50px;
      height: 100%;
      border-left: 1px solid #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        background-color: #f56c6c;
      }
    }
  }
  .content {
    width: 100%;
    height: 100%;
    .mycanvas {
      border: 1px solid #000;
      width: 91%;
      height: 400px;
      margin: 0 auto;
      .tool{
        margin-top: 10px;
        .tool-item{
          margin-left: 10px;
        }

      }
    }
  }
}
</style>