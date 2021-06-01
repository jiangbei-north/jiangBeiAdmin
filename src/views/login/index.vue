<template>
  <div id="login">
    <div class="box positionA">
      <p class="title">登录</p>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" style="width:200px"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password:""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password:[
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ]
      },
    };
  },
  mounted() {},
  methods: {
    ...mapActions("user", ["login", "changeRoles"]),

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login(this.ruleForm.name);
          this.changeRoles(this.ruleForm.name);
          this.$router.push({ name: "Home" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  background-image: url("../../assets/Unprocessed/2.jpg");
  background-size: 100% 100%;
  position: relative;
  .box {
    width: 350px;
    height: 300px;
    border: 1px solid #dcdfe6;
    background-color: #ffffff60;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 20px;
    right: 50px;
    top: 100px;
    .title {
      font-size: 25px;
      font-weight: 600;
      text-align: center;
      letter-spacing: 20px;
      margin-bottom: 50px;
    }
  }
}
</style>