<template>
    <el-date-picker v-model="val"
                    type="daterange"
                    align="right"
                    unlink-panels
                    :range-separator="rangeSeparator"
                    :start-placeholder="startPlaceholder"
                    :end-placeholder="endPlaceholder"
                    :picker-options="options">
    </el-date-picker>
</template>

<script>
    import TwoWay from 'mixins/two-way';
    const MS_TO_DAY = 3600 * 1000 * 24;
    export default {
        name: 'date-picker',
        mixins: [TwoWay],
        props: {
            rangeSeparator: {
                type: String,
                default: '至'
            },
            startPlaceholder: {
                type: String,
                default: '开始日期'
            },
            endPlaceholder: {
                type: String,
                default: '结束日期'
            },
            hasOptions: {
                type: Boolean,
                default: false
            },
            disabledBefore: {
                type: Boolean,
                default: false,
            },
            disabledAfter: {
                type: Boolean,
                default: false,
            },
            pickerOptions: {
                type: Object,
                default() {
                    return {}
                }
            },
        },
        computed: {
            options() {
                if (this.hasOptions) {
                    return {
                        disabledDate(time) {
                            // 今天前禁用
                            if (this.disabledBefore) {
                                return time.getTime() < Date.now();
                            }
                            // 今天后禁用
                            if (this.disabledAfter) {
                                return time.getTime() > Date.now();
                            }
                            // 不禁用
                            return false;
                        },
                        ...this.pickerOptions
                        /* shortcuts: [
                            {
                                text: '最近一周',
                                onClick(picker) {
                                    this.setPicker(setPicker);
                                }
                            }
                        ] */
                    }
                } else {
                    return {}
                }
            }
        },
        methods: {
            setPicker(picker, day = 7, isBefore = true) {
                const end = new Date();
                const start = new Date();
                if (isBefore) {
                    date.setTime(start.getTime() - dayTime);
                } else {
                    date.setTime(start.getTime() + dayTime);
                }
                picker.$emit('pick', [start, end]);
            }
        },
    }
</script>

<style>
</style>
