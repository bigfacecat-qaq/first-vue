<template>
  <el-menu
    active-text-color="#ffd04b"
    class="home-sider"
    background-color="#545c64"
    :default-active="this.$route.path"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :default-openeds="['/nosay']"
    router
  >
    <el-menu-item index="/home" :route="{path:'/home'}">
      <el-icon><HomeFilled /></el-icon>
      <span>Home</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Briefcase /></el-icon>
        <span>二刺猿</span>
      </template>
      <el-menu-item-group title="不会动">
        <el-menu-item index="/home/papertiger" :route="{path:'/home/papertiger'}">纸片人</el-menu-item>
        <el-menu-item index="/home/model" :route="{path:'/home/model'}">手办</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="会动">
        <el-menu-item index="/home/commic" :route="{path:'/home/commic'}">动漫</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="/home/study" :route="{path:'/home/study'}">
      <el-icon><document /></el-icon>
      <span>好好学习</span>
    </el-menu-item>
    <el-sub-menu index="4" :route="{path:'/nosay'}">
      <template #title>
        <el-icon><Promotion /></el-icon>
        <span>我不好说</span>
      </template>
      <el-menu-item index="/home/auth" :route="{path:'/home/auth'}">权限测试</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/home/up" :route="{path:'/home/up'}">
      <el-icon><setting /></el-icon>
      <span>天天向上</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "HomeSider",
  setup() {
  },
};
</script>

<style scoped>
.home-sider{
  height: 100%;
}
</style>
