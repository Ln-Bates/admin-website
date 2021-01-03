<template>
  <el-dialog
    :title="title"
    :visible.sync="val"
    :width="width">
    <div class="content">
      <slot></slot>
    </div>
    <template v-slot:footer>
      <el-button v-if="handleClick" @click="val = false">取消</el-button>
      <el-button v-if="handleClick" :loading="btnLoading" type="primary" @click="handleClickConfirm">
        确认
      </el-button>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
  import TwoWay from 'mixins/two-way';

  export default {
    name: 'simple-dialog',
    mixins: [TwoWay],
    props: {
      title: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '50%'
      },
      handleClick: {
        type: Function,
        default: undefined
      },
    },
    data() {
      return {
        btnLoading: false
      };
    },
    methods: {
      handleClickConfirm() {
        this.btnLoading = true;
        this.handleClick().finally(() => {
          this.btnLoading = false;
          this.val = false;
        });
      }
    },
  };
</script>

<style scoped>

</style>
