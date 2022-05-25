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
      <span>Navigator One</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Briefcase /></el-icon>
        <span>Navigator Two</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><Promotion /></el-icon>
        <span>Navigator Four</span>
      </template>
      <el-menu-item index="4-1">item four</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="5">
      <el-icon><setting /></el-icon>
      <span>Navigator Five</span>
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
