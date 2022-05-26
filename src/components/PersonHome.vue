<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <template #header>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-avatar
                :size="'large'"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            /></el-col>
            <el-col :span="16" class="user-name">
              <span>Tom Tom</span>
            </el-col>
          </el-row>
        </template>
        <el-row :gutter="10">
          <el-col :span="8">上次登录时间:</el-col>
          <el-col :span="16">85-52-52</el-col>
        </el-row>
        <el-row :gutter="10" class="bottom">
          <el-col :span="8">上次登录地点:</el-col>
          <el-col :span="16">召唤师峡谷</el-col>
        </el-row>
      </el-card>
      <el-card class="jindu" shadow="hover">
        <template #header>
          <div>今天你完成了多少呢?</div>
        </template>
        <div class="demo-progress">
          <div>昨日遗留 <el-progress :percentage="50" /></div>

          今日任务
          <el-progress :percentage="100" :format="format" />
          代办事项
          <el-progress :percentage="100" status="success" />
          今日学习
          <el-progress :percentage="100" status="warning" />
          Tips
          <el-progress :percentage="50" status="exception" />
        </div>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="test"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "PersonHome",
  setup() {
    const format = (percentage) =>
      percentage === 100 ? "Over" : `${percentage}%`;
    return { format };
  },
};
</script>

<style scoped>
.demo-progress {
  display: flex;
  flex-direction: column;
}
.jindu {
  margin-top: 30px;
}
.bottom {
  margin-top: 20px;
}
.test {
  min-height: 500px;
  background: #009c9c;
}
.in {
  background: skyblue;
}
.card-header {
  display: flex;
  align-items: center;
}
.user-name {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}
.login-info {
  padding: 5px 0;
  color: #c7c7c7;
}
</style>
