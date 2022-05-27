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
          昨日遗留
          <el-progress :percentage="50" />
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
      <el-space wrap :fill="true" :size="20">
        <el-row :gutter="15">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: 0 }">
              <el-row>
                <el-col :span="12">
                  <div class="wrap">
                    <el-icon color="white" :size="8 * 8"><Avatar /></el-icon>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="content">
                    <span>昨日游戏时间</span>
                    <span>24h</span>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: 0 }">
              <el-row>
                <el-col :span="12">
                  <div class="wrap">
                    <el-icon color="white" :size="8 * 8"><ForkSpoon /></el-icon>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="content">
                    <span>昨日工作时间</span>
                    <span>0h</span>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: 0 }">
              <el-row>
                <el-col :span="12">
                  <div class="wrap">
                    <el-icon color="white" :size="8 * 8"><Warning /></el-icon>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="content">
                    <span>昨日偷懒时间</span>
                    <span>12h</span>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-card shadow="hover">
              <template #header>
                items of today
              </template>
            </el-card>
          </el-col>
        </el-row>
      </el-space>
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
.wrap {
  background: skyblue;
  padding: 1vh;
  text-align: center;
}
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
}
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
