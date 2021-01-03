<template>
  <el-dialog
    :title="title"
    :visible.sync="val"
    :width="width">
    <div class="content">
      <slot></slot>
    </div>
    <template v-slot:footer>
      <el-button v-if="submitHandler" @click="val = false">取消</el-button>
      <el-button v-if="submitHandler" :loading="btnLoading" type="primary" @click="submitHandlerConfirm">
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
      submitHandler: {
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
      submitHandlerConfirm() {
        this.btnLoading = true;
        this.submitHandler().finally(() => {
          this.btnLoading = false;
          this.val = false;
        });
      }
    },
  };
</script>

<style scoped>

</style>
