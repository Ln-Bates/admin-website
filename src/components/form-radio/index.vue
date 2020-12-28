<template>
    <el-radio-group v-model="val"
                    @change="handleChange"
                    :disabled="disabled">
        <el-radio v-for="item in options"
                  :disabled="item.disabled"
                  :label="item[value]"
                  :key="item[value]">
            {{item[label]}}
        </el-radio>
    </el-radio-group>
</template>

<script>
    import TwoWay from 'mixins/two-way';

    export default {
        name: 'form-radio',
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            placeholder: {
                type: String,
                default: '请选择'
            },
            label: {
                type: String,
                default: 'label'
            },
            value: {
                type: String,
                default: 'value'
            },
            disabled: {
                type: Boolean,
                default: false
            }
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
