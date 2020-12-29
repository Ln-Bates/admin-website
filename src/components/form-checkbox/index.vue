<template>
    <el-checkbox-group v-model="val"
                       :disabled="disabled">
        <el-checkbox v-for="item in options"
                     :key="item[value]"
                     :label="item[value]"
                     :disabled="item.disabled">{{item[label]}}
        </el-checkbox>
    </el-checkbox-group>
</template>

<script>
    import FormCommonProps from 'mixins/form-common-props';

    export default {
        name: 'form-checkbox',
        props: {
            options: {
                type: Array,
                default() {
                    return [];
                }
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
        mixins: [FormCommonProps],
        methods: {
            handleChange(val) {
                this.$emit('changed', val);
            }
        }
    };
</script>

<style>
</style>
