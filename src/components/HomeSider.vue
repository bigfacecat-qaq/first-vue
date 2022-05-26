<template>
  <el-menu
    active-text-color="#ffd04b"
    class="home-sider"
    background-color="#545c64"
    default-active="1"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :default-openeds="['4']"
  >
    <el-menu-item index="1">
      <el-icon><HomeFilled /></el-icon>
      <span>Home</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Briefcase /></el-icon>
        <span>二刺猿</span>
      </template>
      <el-menu-item-group title="不会动">
        <el-menu-item index="2-1">纸片人</el-menu-item>
        <el-menu-item index="2-2">手办</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="会动">
        <el-menu-item index="2-3">动漫</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <span>好好学习</span>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><Promotion /></el-icon>
        <span>我不好说</span>
      </template>
      <el-menu-item index="4-1">权限测试</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="5">
      <el-icon><setting /></el-icon>
      <span>天天向上</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "HomeSider",
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return { handleOpen, handleClose };
  },
};
</script>

<style scoped>
.home-sider{
  height: 100%;
}
</style>
