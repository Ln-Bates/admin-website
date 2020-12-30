<template>
    <div class="table-container component-container">
        <el-table :data="tableData">
            <el-table-column v-if="tableOptions.index"
                             type="index"
                             width="50" />
            <el-table-column v-for="(column, index) in tableOptions.columns"
                             :key="index">
                <template v-slot:header>
                    {{column.label}}
                    <question v-if="column.question"
                              :content="column.question" />
                </template>
                <template v-slot:default="{row, $index}">
                    <template v-if="!column.type || column.type === 'default'">
                        {{row[column.prop]}}
                    </template>
                    <template v-else-if="column.type === 'image'">
                        <el-tooltip placement="right"
                                    effect="light">
                            <div slot="content">
                                <el-image class="img-big"
                                          :src="row[column.prop]"
                                          fit="cover"></el-image>
                            </div>
                            <el-image class="img-small"
                                      :src="row[column.prop]"
                                      fit="cover"></el-image>
                        </el-tooltip>
                    </template>
                    <template v-else-if="column.type === 'btn'">
                        <el-button type="text"
                                   @click="handleClick(row, $index, column.handler)">
                            {{column.btnText}}
                        </el-button>
                    </template>
                    <template v-else-if="column.type === 'btn-group'">
                        <el-button type="text"
                                   v-for="(btn, index) in column.btns"
                                   :key="index"
                                   @click="handleClick(row, $index, btn.handler)">
                            {{btn.label}}
                        </el-button>
                    </template>
                    <template v-else-if="column.type === 'slot'">
                        <slot :name="column.prop"
                              :row="row"
                              :index="$index" />
                    </template>
                </template>
            </el-table-column>
            <template #empty>
                <empty />
            </template>
        </el-table>
    </div>
</template>

<script>
    import Empty from '../empty/index';

    export default {
        components: {
            Empty
        },
        name: 'dataTable',
        props: {
            tableData: {
                type: Array,
                default() {
                    return [];
                }
            },
            tableOptions: {
                type: Object,
                default() {
                    return {
                        columns: []
                    };
                }
            },
        },
        data() {
            return {};
        },
        methods: {
            handleClick(row, index, handler) {
                if (handler && typeof handler === 'function') {
                    handler(row, index);
                } else {
                    throw new Error('handler is not a function');
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .img-big {
        width: 100px;
        height: 100px;
        border-radius: $radius;
    }
    .img-small {
        width: 30px;
        height: 30px;
        border-radius: $radius;
    }
</style>
