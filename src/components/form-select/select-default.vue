<template>
    <el-select v-model="val"
               @change="handleChange"
               :multiple="multiple"
               :multiple-limit="limit"
               :clearable="clearable"
               :disabled="disabled === true"
               :placeholder="placeholder">
        <el-option v-for="item in options"
                   :key="item[value]"
                   :label="item[label]"
                   :value="item[value]">
            <slot :item="item"
                  name="custom" />
        </el-option>
    </el-select>
</template>

<script>
    import FormCommonProps from 'mixins/form-common-props';

    export default {
        name: 'form-select-default',
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
            multiple: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: true
            },
            limit: {
                type: Number,
                default: 0
            }
        },
        mixins: [FormCommonProps],
        methods: {
            handleChange(val) {
                this.$emit('changed', val);
            }
        }
    }
</script>

<style>
</style>
