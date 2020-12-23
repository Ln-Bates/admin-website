<template>
  <simple-view>
    <el-collapse v-model="activeName"
                 accordion>
      <el-collapse-item title="注入全局scss变量"
                        name="1">
        <div>全局变量写再styles/_variable.scss里</div>
        <div>任意文件内可直接访问无需引用</div>
      </el-collapse-item>
      <el-collapse-item title="全局插件测试"
                        name="2">
        <el-button type="primary"
                   @click="confirmTest">confirm
        </el-button>
        <el-button type="primary"
                   @click="confirmTest('保存')">confirm通过按钮文本更改
        </el-button>
      </el-collapse-item>
      <el-collapse-item title="修改菜单高亮定位"
                        name="3">
        <div>
          <el-button type="primary"
                     @click="changeRouteHighlight('1')">example - 1
          </el-button>
          <el-button type="primary"
                     @click="changeRouteHighlight('2')">example - 2
          </el-button>
        </div>
        <div>
          仅修改样式 不进行路由跳转
        </div>
      </el-collapse-item>
      <el-collapse-item title="输入框整数及浮点"
                        name="4">
        <div>
          <p>整数</p>
          <el-input v-model="int"
                    style="width: 400px;"
                    v-input:int></el-input>
        </div>
        <div>
          <p>浮点数</p>
          <el-input v-model="float"
                    style="width: 400px;"
                    v-input:float></el-input>
        </div>
      </el-collapse-item>
      <el-collapse-item title="防抖指令（ 有问题 ）"
                        name="5">
        <el-button type="primary"
                   v-click="debounce">防抖测试
        </el-button>
      </el-collapse-item>
    </el-collapse>
  </simple-view>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '',
        int: '',
        float: '',
      };
    },
    methods: {
      confirmTest(text) {
        this.elConfirm('confirm内容测试', text).then(() => {
          this.$message.success('进行后续操作');
        });
      },
      changeRouteHighlight(type) {
        const routesMap = {
          '1': '/example1',
          '2': '/example2/'
        };
        this.$eventBus.$emit('changeActive', routesMap[type]);
      },
      debounce() {
        console.log(123);
      }
    }
  };
</script>

<style lang="scss" scoped>
  ::v-deep {
    .el-collapse-item__header {
      color: $color;
    }

    .el-collapse-item__header,
    .el-collapse-item__wrap {
      padding-left: $inner-size;
    }
  }
</style>
