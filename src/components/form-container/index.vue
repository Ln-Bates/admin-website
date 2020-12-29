<template>
    <simple-view>
        <el-form>
            <template v-for="item in formList">
                <el-form-item v-if="item.hide !== true && item.type !== 'slot'"
                              :label="item.label"
                              :key="item.prop">
                    <component v-model="val[item.prop]"
                               v-bind="dynamicProp(item)"
                               :is="item.type"></component>
                    <!-- <template v-if="isSomeType(item, 'date-picker')">
                        <date-picker v-model="val[item.prop]"
                                     :disabled="item.disabled" />
                    </template>
                    <template v-else-if="isSomeType(item, 'date-range')">
                        <date-range v-model="val[item.prop]"
                                    :disabled="item.disabled" />
                    </template>
                    <template v-else-if="isSomeType(item, 'radio')">
                        <form-radio v-model="val[item.prop]"
                                    :disabled="item.disabled"
                                    :options="item.options" />
                    </template>
                    <template v-else-if="isSomeType(item, 'checkbox')">
                        <form-checkbox v-model="val[item.prop]"
                                       :disabled="item.disabled"
                                       :options="item.options" />
                    </template>
                    <template v-else-if="isSomeType(item, 'select')">
                        <form-select v-model="val[item.prop]"
                                     :disabled="item.disabled"
                                     :options="item.options" />
                    </template>
                    <template v-else-if="isSomeType(item, 'switch')">
                        <form-switch v-model="val[item.prop]"
                                     :disabled="item.disabled" />
                    </template> -->
                </el-form-item>
                <el-form-item v-else-if="item.type === 'slot'"
                              :label="item.label"
                              :key="item.prop">
                    插槽占位
                </el-form-item>
            </template>
        </el-form>
        <template #footer-bar>
            <el-button>底部按钮</el-button>
            <el-button type="primary">底部按钮</el-button>
        </template>
    </simple-view>
</template>

<script>
    import DatePicker from 'components/form-date/date-picker';
    import DateRange from 'components/form-date/date-range';
    import FormRadio from 'components/form-radio/index';
    import FormSelectDefault from 'components/form-select/select-default';
    // import FormSelectSearch from 'components/form-select/select-search';
    import FormCheckbox from 'components/form-checkbox/index';
    import FormSwitch from 'components/form-switch/index';
    import FormInputDefault from 'components/form-input/input-default';
    import FormInputFloat from 'components/form-input/input-float';
    import FormInputInt from 'components/form-input/input-int';
    import FormInputPassword from 'components/form-input/input-password';
    // import FormInputSearch from 'components/form-input/input-search';
    import TwoWay from 'mixins/two-way';

    export default {
        name: 'form-container',
        components: {
            DatePicker,
            DateRange,
            FormRadio,
            FormSelectDefault,
            // FormSelectSearch,
            FormCheckbox,
            FormSwitch,
            FormInputDefault,
            FormInputFloat,
            FormInputInt,
            FormInputPassword,
            // FormInputSearch,
        },
        props: {
            formList: {
                type: Array,
                default() {
                    return [];
                }
            },
        },
        mixins: [TwoWay],
        methods: {
            isSomeType(item, type) {
                return item.type === type && item.hide !== true;
            },
            dynamicProp(item) {
                const { type, disabled } = item;
                const commmonProps = {
                    disabled
                }
                const propsMap = {
                    'date-picker': {
                    },
                    'date-range': {
                    },
                    'form-switch': {
                    },
                    'form-radio': {
                        options: item.options
                    },
                    'form-checkbox': {
                        options: item.options
                    },
                    'form-select-default': {
                        options: item.options
                    },
                }
                return {
                    ...commmonProps,
                    ...propsMap[type]
                };
            }
        },
    };
</script>

<style scoped>
</style>
