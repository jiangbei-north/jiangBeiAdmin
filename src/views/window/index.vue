<template>
  <div class="home">
    <div class="app-item f-c-c-c" @click="openDraw">
      <img src="@/assets/image/home/write.jpg" alt="">
      <p>画板</p>
    </div>
    <div class="app-item"></div>
    <!-- <div class="app-item">画画</div>
    <div class="app-item"></div>
    <div class="app-item">画画</div>
    <div class="app-item"></div>
    <div class="app-item">画画</div>
    <div class="app-item"></div>
    <div class="app-item">画画</div>
    <div class="app-item"></div> -->
    <Drawer v-if="drawShow" @closeDraw="closeDraw()"></Drawer>
    <taskbar></taskbar>
  </div>
</template>
<script>
import {mapMutations } from "vuex";
import Drawer from './component/drawer.vue'
import Taskbar from './component/taskbar.vue';

export default {
  components:{Drawer, Taskbar},
  data() {
    return {
      drawShow:false
    };
  },
  mounted() {
    
  },
  methods: {
    ...mapMutations('window',["addFold"]),
    closeDraw(){
      this.drawShow = false;
      
    },
    openDraw(){
      
      if(this.drawShow == true){
        return
      }
      this.addFold({name:'画画',isFold:false});
      this.drawShow = true;

    }
  },
};
</script>
<style lang="scss" scoped>
.home{
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/image/home/back.jpg");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  .app-item{
    width: 100px;
    height: 100px;
    //border: 1px solid #000000;
    //display: inline-block;
    margin: 10px;
    border-radius: 10px;
    //background-color: aqua;
    cursor: pointer;
    &:hover{
      border: 1px solid #F2F6FC;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    img{
      width: 70%;
      height: 70%;
      border-radius: 10px;
    }
    p{
      font-size: 16px;
    }
  }
}
</style>