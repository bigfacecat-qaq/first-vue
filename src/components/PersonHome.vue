//
其实个人中心中的每块内容可以单独做一个组件减少代码量，但开始并没分开之后有时间再拆分。
<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" class="info">
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
          <el-col :span="12">上次登录时间:</el-col>
          <el-col :span="12">85-52-52</el-col>
        </el-row>
        <el-row :gutter="10" class="bottom">
          <el-col :span="12">上次登录地点:</el-col>
          <el-col :span="12">召唤师峡谷</el-col>
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
      <el-card shadow="hover" class="items">
        <template #header> items of today </template>
        <el-button @click="add">Add Item</el-button>
        <el-scrollbar  max-height="280px" style="margin-top:10px" >
          <el-input placeholder="Please input" v-for="tip in tips" :key="tip"/>
        </el-scrollbar>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
  name: "PersonHome",
  setup() {
    const format = (percentage) =>
      percentage === 100 ? "Over" : `${percentage}%`;
    const store = useStore()
    const tips = computed(() => store.state.tips)
    function add(){
      store.commit("add")
    }
    return { format , tips,add};
  },
};
</script>

<style scoped>
.items {
  margin-top: 10px;
  height: 365px;
}
.time {
  height: 80px;
}
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
.info {
  height: 200px;
}
.jindu {
  height: 250px;
  margin-top: 10px;
}
.demo-progress {
  display: flex;
  flex-direction: column;
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
