<template>
    <el-date-picker v-model="val"
                    align="right"
                    type="date"
                    placeholder="选择日期"
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
                            text: '今天',
                            onClick(picker) {
                                picker.$emit('pick', new Date());
                            }
                        },
                        {
                            text: '昨天',
                            onClick(picker) {
                                this.setPicker(picker, 1);
                            }
                        }
                    ] */
                }
            }
        },
        methods: {
            /**
             * 设置快捷时间方法
             * @param {*} picker 选择器
             * @param {*} day 天数
             * @param {*} isBefore 是否向前选择
             */
            setPicker(picker, day = 1, isBefore = true) {
                const date = new Date();
                const dayTime = MS_TO_DAY * day;
                if (isBefore) {
                    date.setTime(date.getTime() - dayTime);
                } else {
                    date.setTime(date.getTime() + dayTime);
                }
                picker.$emit('pick', date);
            }
        },
    }
</script>

<style>
</style>
