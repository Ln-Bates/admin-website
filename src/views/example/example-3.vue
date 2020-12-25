<template>
    <table-view v-bind="{ total, tableData, tableOptions, tabs, filters }"
                v-model="model"
                @get-data="getData">
        <template #slot-left>
            <el-button type="primary">
                左侧
            </el-button>
        </template>
        <template #slot-right>
            <el-button type="primary">
                右侧
            </el-button>
        </template>
        <template v-slot:test="{row, index}">
            插槽测试{{index}} - {{row.name}}
        </template>
    </table-view>
</template>

<script>
    import { tableHepler } from 'utils/table-helper';
    export default {
        name: 'example-3',
        data() {
            const tableData = new Array(10);
            tableData.fill({
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                btn: 'test'
            });
            return {
                loading: false,
                total: 100,
                tableOptions: {
                    index: true,
                    columns: [
                        tableHepler.image('图片', 'image'),
                        tableHepler.default('日期', 'date', '提示文案'),
                        tableHepler.default('姓名', 'name', '提示文案'),
                        tableHepler.default('地址', 'date'),
                        tableHepler.slot('插槽测试', 'test'),
                        tableHepler.btn('单按钮', 'btn', '按钮名', (row, index) => {
                            console.log(row, index);
                        }),
                        tableHepler.btnGroup('按钮组', [
                            {
                                label: '按钮1', handler: (row, index) => {
                                    console.log(row, index)
                                }
                            },
                            {
                                label: '按钮2', handler: (row, index) => {
                                    console.log(row, index)
                                }
                            },
                        ])
                    ]
                },
                tableData,
                tabs: [
                    { label: '全部', value: 1 },
                    { label: '上架', value: 2 },
                    { label: '下架', value: 3 },
                ],
                filters: [
                    { type: 'input', label: '姓名', prop: 'name' },
                    { type: 'input', label: '类型', prop: 'type' },
                ],
                model: {
                    filter: {},
                    tabActive: 1
                },
            };
        },
        methods: {
            getData({ page, size }, cb) {
                console.log('get data', page, size);
                console.log(this.model.filter);
                setTimeout(() => {
                    cb();
                }, 1000);
            },
        },
    };
</script>

<style scoped>
</style>
