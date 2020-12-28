<template>
    <el-switch v-model="val"
               @change="handleChange"
               :disabled="disabled">
    </el-switch>
</template>

<script>
    import TwoWay from 'mixins/two-way';

    export default {
        name: 'form-switch',
        props: {
            activeActive: {
                type: [Boolean, String, Number],
                default: true
            },
            inactiveActive: {
                type: [Boolean, String, Number],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        mixins: [TwoWay],
        methods: {
            handleChange(val) {
                this.$emit('changed', val);
            }
        }
    }
</script>

<style>
</style>
