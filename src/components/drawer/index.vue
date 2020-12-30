<template>
    <el-drawer :append-to-body="true"
               :before-close="beforeClose"
               :visible.sync="val"
               :size="size">
        <template v-slot:title>
            <h2 class="drawer-title">{{title}}</h2>
        </template>
        <div class="contant">
            <slot />
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
            beforeClose: {
                type: [Function],
                default: undefined
            },
        },
        mixins: [TwoWay],
    }
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
    .contant {
        padding: $inner-size;
    }
</style>
