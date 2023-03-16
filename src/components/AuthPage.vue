<template>
  <el-row :gutter="10">
    <el-col :span="24">
      <el-card shadow="hover">
        <template #header>
          <div class="card-header">
            <span>Currency Exchange</span>
            <div>5454</div>
          </div>
        </template>
        <div>
            <span>1$=554</span>
            <span>1$</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row style="margin-top:10px">
    <el-col><div class="text">这是需要用户名为admin的用户才能进入的!!! </div></el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text{
    font-size: 1.5em;
    text-align: center;

}
</style>