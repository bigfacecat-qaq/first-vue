<template>
  <el-row>
    <el-col :span="24" class="form">
      <div class="wrap">
        <el-row justify="center" align="middle">
          <el-col :span="6" class="login">
            <el-card shadow="hover">
              <template #header>
                <div class="login-header">欢迎登录</div>
              </template>
              <el-form
                label-position="top"
                label-width="100px"
                :model="formLabelAlign"
                style="max-width: 460px"
              >
                <el-form-item label="User Name">
                  <el-input v-model="formLabelAlign.user" />
                </el-form-item>
                <el-form-item label="Password">
                  <el-input v-model="formLabelAlign.password" show-password />
                </el-form-item>
                <el-row justify="space-evenly">
                  <el-col :span="6">
                    <el-button type="primary" @click="onSubmit"
                      >Create</el-button
                    >
                  </el-col>
                  <el-col :span="6">
                    <el-button>Sign up</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "LoginView",
  setup() {
    const formLabelAlign = reactive({
      user: "",
      password: "",
    });
    const router = useRouter();
    const onSubmit = () => {
      router.push({ path: "/home" });
    };
    return { formLabelAlign, onSubmit };
  },
};
</script>

<style scoped>
.item {
  height: 10px;
  background-color: red;
}
.form {
  background-image: url(../assets/bg.jpeg);
  position: fixed;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.login-header {
  text-align: center;
}
.wrap {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
