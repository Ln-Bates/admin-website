<template>
  <div class="filters component-container">
    <el-form>
      <el-row class="row">
        <el-col :span="12">
          <el-form-item label="姓名：">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="姓名：">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="姓名：">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="姓名：">
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'filters'
  };
</script>

<style lang="scss" scoped>
  .el-input {
    width: 200px;
  }

  .row {
    margin-bottom: -18px;
  }
</style>
