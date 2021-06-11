<template>
  <div id="jurisdistion">
    <div class="nav">
      <el-form :inline="true" :model="navList" class="formInline">
        <el-form-item label="姓名：">
          <el-input v-model="navList.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="changeJurisdistion(scope.row)">修改权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <PowerTree :treeShow="true" ref="poserTree"></PowerTree>
  </div>
</template>
<script>
import PowerTree from './component/powerTree';
export default {
  components:{
     PowerTree
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      navList: {
        name: "",
      },
    };
  },
  mounted() {},
  methods: {
    changeJurisdistion(el) {
      console.log(el);
      this.$refs.poserTree.inTreeShow = true;
    },
  },
};
</script>
<style lang="scss" scoped>
#jurisdistion {
  width: 100%;
  height: 100%;
  margin-left: 20px;
  .nav {
    margin-top: 20px;
    .formInline {
      .el-form-item {
        &:last-of-type {
          float: right;
        }
      }
    }
  }
}
</style>