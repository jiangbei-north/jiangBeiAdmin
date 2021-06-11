<template>
  <div>
    <el-dialog title="修改权限" v-model="inTreeShow" width="628px">
      <div class="treeContent">
        <el-tree
          :data="data"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
          :default-checked-keys="defaultList"
          @check="treeCheck"
          :props="defaultProps"
        >
        </el-tree>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="inTreeShow = false">取 消</el-button>
          <el-button type="primary" @click="inTreeYes"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
//import router from "@/router";
//import {OasyncRoutes} from "@/moke.ts";//临时模拟数据
export default {
  data() {
    return {
      inTreeShow: false,
      data: [
        {
          id: 1,
          label: "视频",
          name:"video",
          children: [
            {
              id: 4,
              label: "视频列表",
              name:"video-list",
              children: [
                
              ],
            },
            {
              id: 5,
              label: "视频详情",
              name:"video-desc",
              children: [
                
              ],
            },
          ],
        },
        {
          id: 2,
          label: "音频",
          name:"audio",
          children: [
            {
              id: 7,
              label: "音频列表",
              name:"audio-list",
              children: [
                
              ],
            },
            {
              id: 8,
              label: "音频详情",
              name:"audio-desc",
              children: [
                
              ],
            },
          ],
        },
        
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      defaultList: [],
      allList:[],//当前选择的全部权限id
    };
  },
  props: [],
  watch: {},
  mounted() {},
  methods: {
    treeCheck(el, list) {
      console.log(el, list);
      this.allList = list.checkedNodes.concat(list.halfCheckedNodes);
      console.log(this.allList)
    },
    inTreeYes(){
      
      // let mylist = [];
      // this.allList.forEach(element => {
      //   mylist.push(element.name)
      // });
      // console.log(mylist)
      // OasyncRoutes.forEach(element => {
      //   if(mylist.includes(element.name)){
      //      router.addRoute(element);
      //   }
      // });
      
    }
  },
};
</script>
<style lang="scss" scoped>
</style>