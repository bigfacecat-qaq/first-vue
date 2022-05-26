<template>
  <el-row justify="center">
    <el-col :span="12">
      <div class="error">404</div>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-col :span="12">
      <div class="detail">404</div>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-col :span="4">
      <div class="btn">
        <el-button type="primary" @click="toHome">Home</el-button>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="btn">
        <el-button type="primary" @click="pre">previous</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "MainPrivacy",
  setup() {
    const router = useRouter();
    function toHome() {
      router.push("/home");
    }
    function pre() {
      router.back();
    }
    return { toHome, pre };
  },
};
</script>

<style scoped>
.error {
  height: 20rem;
  text-align: center;
  line-height: 20rem;
  font-size: 10rem;
}
.detail {
  height: 5rem;
  font-size: 2rem;
  text-align: center;
}
.btn {
  text-align: center;
}
</style>