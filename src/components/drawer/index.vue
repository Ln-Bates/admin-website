<template>
  <el-drawer :append-to-body="true"
             :visible.sync="val"
             :size="size">
    <template v-slot:title>
      <h2 class="drawer-title">{{title}}</h2>
    </template>
    <div v-loading="loading" class="content">
      <slot/>
      <div class="drawer-footer">
        <el-button v-if="submitHandler" type="primary" @click="close">保存</el-button>
        <slot name="footer"></slot>
      </div>
    </div>
  </el-drawer>
</template>

<script>
  import TwoWay from 'mixins/two-way';

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      size: {
        type: [String, Number],
        default: '50%'
      },
      submitHandler: {
        type: [Function],
        default: undefined
      },
    },
    mixins: [TwoWay],
    data() {
      return {
        loading: false
      };
    },
    methods: {
      close() {
        if (this.submitHandler) {
          this.loading = true;
          this.submitHandler().finally(() => {
            this.loading = false;
            this.val = false;
          });
        } else {
          this.val = false;
        }
      }
    },
  };
</script>

<style lang="scss" scoped>
  ::v-deep {
    :focus {
      outline: 0;
    }

    .el-drawer__header {
      padding: $inner-size $inner-size 0;
    }
  }

  .content {
    position: relative;
    padding: $inner-size;
    height: 100%;
  }

  .drawer-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: $inner-size;
    width: 100%;
    text-align: right;
  }
</style>
