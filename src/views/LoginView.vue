<template>
  <div class="login-box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <h2 class="title">后台管理系统</h2>
      <el-form-item label="账号：" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item>
        <div class="botton-area">
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
          <el-button @click="resetForm">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import { RuleFormInterface } from "../type/login";
import { ElMessage, FormInstance } from "element-plus";
import { login } from "@/request/api";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    // 表单内容
    const ruleForm: RuleFormInterface = {
      username: "",
      password: "",
    };

    const data = reactive({
      ruleForm,
    });

    // 规则：不需要动态响应
    const rules = {
      username: [{ required: true, message: "请输入账号", trigger: "blur" }],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        // {
        //   min: 6,
        //   max: 12,
        //   message: "长度在 6 到 12 个字符",
        //   trigger: "blur",
        // },
      ],
    };

    const ruleFormRef = ref<FormInstance>();
    console.log(ruleFormRef);

    // 登录
    // Vue2 $router => Vue3 useRouter
    const router = useRouter();
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      // 验证
      formEl.validate((valid) => {
        if (valid) {
          // console.log("submit!");
          login(ruleForm).then(
            (res) => {
              console.log("请求成功", res);
              // 保存token
              localStorage.setItem("token", res.token);
              // 路由跳转
              router.push("/home");
            },
            (err) => {
              ElMessage.error("登录失败，请检查您的账号和密码");
              console.log("请求失败", err);
            }
          );
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };
    // 重置
    const resetForm = () => {
      data.ruleForm.username = "";
      data.ruleForm.password = "";
    };
    return { ...toRefs(data), rules, ruleFormRef, submitForm, resetForm };
  },
});
</script>

<style scoped lang="scss">
.login-box {
  width: 100%;
  height: 100%;
  background: #000 url("../assets/login-background.jpg") no-repeat center;
  overflow: hidden;
  // background-image: url("../assets/login-background.jpg");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-attachment: fixed;
  .demo-ruleForm {
    width: 400px;
    margin: 200px auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 30px;
    h2 {
      text-align: center;
      margin-bottom: 10px;
    }
    .botton-area {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      button {
        width: 45%;
      }
    }
  }
}
</style>