<template>
  <el-row justify="space-between" class="header">
    <el-col :span="10">
      <el-row>
        <el-col :span="6"
          ><el-image style="height: 60px" :src="imgUrl" :fit="'cover'"
        /></el-col>
        <el-col :span="18">
          <div class="title">Big Vip Manage</div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="4">
      <el-row style="height: 60px">
        <el-col :span="6">
          <el-dropdown @command="handleCommand">
            <div class="avatar"><el-avatar :src="userImg" /></div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="a">Action 1</el-dropdown-item>
                <el-dropdown-item command="b">Action 2</el-dropdown-item>
                <el-dropdown-item command="c">Action 3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
        <el-col :span="18">
          <div class="id">TomTom</div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeHeader",
  setup() {
    const imgUrl = ref(
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170802%2Ff65b79abbfae40eea0c74ebf4fbf1776_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655965988&t=dc0819b95d1df7f478a4cd87ca3ce10a"
    );
    const userImg = ref("");
    function handleCommand(command) {
      console.log(command);
    }
    return { imgUrl, userImg, handleCommand };
  },
};
</script>

<style scoped>
.title {
  line-height: 60px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #a0cfff;
  font-weight: bold;
  font-size: x-large;
}
.avatar {
  margin-top: 10px;
}
.id {
  line-height: 60px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-weight: bold;
}
</style>
