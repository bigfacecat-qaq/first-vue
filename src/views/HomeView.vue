<template>
  <div class="layout">
    <el-container class="all">
      <el-header class="header"><HomeHeader></HomeHeader></el-header>
      <el-container class="demo">
        <el-aside width="200px">
          <HomeSider></HomeSider>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import HomeSider from "../components/HomeSider.vue";
export default {
  name: "HomeView",
  components: { HomeSider, HomeHeader },
};
</script>

<style scoped>
.all{
    height: 100vh;
}
.demo{
    height: 100%;
}
.header{
  background: #E4E7ED;
}

</style>
