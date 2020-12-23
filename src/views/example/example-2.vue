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
                           @click="confirmTest">confirm</el-button>
                <el-button type="primary"
                           @click="confirmTest('保存')">confirm通过按钮文本更改</el-button>
            </el-collapse-item>
        </el-collapse>
    </simple-view>
</template>

<script>
    export default {
        data() {
            return {
                activeName: ''
            };
        },
        methods: {
            confirmTest(text) {
                this.elConfirm('confirm内容测试', text).then(() => {
                    this.$message.success('进行后续操作');
                });
            }
        }
    }
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