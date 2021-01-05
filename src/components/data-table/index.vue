<template>
	<div class="table-container component-container">
		<el-table
			:data="tableData"
			ref="table-hook"
			@select="handleSelect"
			@select-all="handleSelectAll"
			@selection-change="handleSelectionChange"
		>
			<el-table-column
				v-if="tableOptions.index"
				type="index"
				width="50"
			/>
			<el-table-column
				v-if="tableOptions.selection"
				type="selection"
				width="55"
			/>
			<el-table-column
				v-for="(column, index) in tableOptions.columns"
				:key="index"
			>
				<template v-slot:header>
					{{column.label}}
					<question
						v-if="column.question"
						:content="column.question"
					/>
				</template>
				<template v-slot:default="{row, $index}">
					<template v-if="!column.type || column.type === 'default'">
						{{row[column.prop]}}
					</template>
					<template v-else-if="column.type === 'image'">
						<el-tooltip
							placement="right"
							effect="light"
						>
							<div slot="content">
								<el-image
									:src="row[column.prop]"
									class="img-big"
									fit="cover"
								/>
							</div>
							<el-image
								:src="row[column.prop]"
								class="img-small"
								fit="cover"
							/>
						</el-tooltip>
					</template>
					<template v-else-if="column.type === 'btn'">
						<el-button
							type="text"
							@click="handleClick(row, $index, column.handler)"
						>
							{{column.btnText}}
						</el-button>
					</template>
					<template v-else-if="column.type === 'btn-group'">
						<el-button
							v-for="(btn, index) in column.btns"
							:key="index"
							type="text"
							@click="handleClick(row, $index, btn.handler)"
						>
							{{btn.label}}
						</el-button>
					</template>
					<template v-else-if="column.type === 'slot'">
						<slot
							:name="column.prop"
							:row="row"
							:index="$index"
						/>
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
	const SELECTION_EVENT = 'selection';

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
						columns: [],
						memory: false,
						selectionKeyword: 'id',
						defaultSelection: []
					};
				}
			}
		},
		computed: {
			/**
			 * 是否开启记忆
			 */
			memory() {
				return !!this.tableOptions.memory;
			},
			/**
			 * 记忆关键字 默认为id
			 */
			selectionKeyword() {
				return this.tableOptions.selectionKeyword;
			},
			/**
			 * 默认选中项
			 */
			defaultSelection() {
				return this.tableOptions.defaultSelection;
			}
		},
		data() {
			return {
				multipleSelection: {},
				unwatch: null
			};
		},
		methods: {
			/**
			 * 触发选中事件 记忆模式专用
			 */
			emitSelection() {
				const multipleSelection = this.multipleSelection;
				const selection = [];
				Object.keys(multipleSelection).forEach(key => {
					selection.push(multipleSelection[key]);
				});
				this.$emit(SELECTION_EVENT, selection);
			},
			/**
			 * 单选 记忆模式专用
			 */
			handleSelect(selection, row) {
				if (this.memory) {
					// 避免和记忆触发冲突( 选中先后顺序冲突 )
					setTimeout(() => {
						const { multipleSelection, selectionKeyword } = this;
						const prop = row[selectionKeyword];
						if (multipleSelection[prop]) {
							delete multipleSelection[prop];
						} else {
							multipleSelection[prop] = row;
						}
						this.emitSelection();
					}, 200);
				}
			},
			/**
			 * 全选 记忆模式专用
			 */
			handleSelectAll(selection) {
				if (this.memory) {
					const { multipleSelection, selectionKeyword } = this;

					if (selection.length) {
						selection.forEach(
							row => (multipleSelection[row[selectionKeyword]] = row)
						);
					} else {
						this.tableData.forEach(row => {
							const prop = row[selectionKeyword];
							if (multipleSelection[prop]) {
								delete multipleSelection[prop];
							}
						});
					}
					this.emitSelection();
				}
			},
			/**
			 * 表格选中状态切换 非记忆模式
			 */
			handleSelectionChange(selection) {
				if (!this.memory) {
					this.$emit(SELECTION_EVENT, selection);
				}
			},
			/**
			 * 触发选中 记忆模式专用
			 */
			triggerSelect() {
				this.$nextTick(() => {
					const multipleSelection = this.multipleSelection;
					const prop = this.selectionKeyword;
					const keys = Object.keys(multipleSelection);
					const hasSelection = row => {
						return keys.find(key => key === row[prop]);
					};
					if (keys.length) {
						this.tableData.forEach(row => {
							if (hasSelection(row)) {
								this.$refs['table-hook'].toggleRowSelection(
									row,
									true
								);
							}
						});
					}
				});
			},
			/**
			 * 初始化选中数据 记忆模式专用
			 */
			initSelection() {
				const { defaultSelection, multipleSelection } = this;
				const isInit =
					defaultSelection.length &&
					!Object.keys(multipleSelection).length;
				if (isInit) {
					defaultSelection.forEach(item => {
						const prop = item[this.selectionKeyword];
						multipleSelection[prop] = item;
					});
				}
			},
			/**
			 * 按钮点击
			 * @param row
			 * @param index
			 * @param handler
			 */
			handleClick(row, index, handler) {
				if (handler && typeof handler === 'function') {
					handler(row, index);
				} else {
					throw new Error('handler is not a function');
				}
			}
		},
		mounted() {
			if (this.memory) {
				this.initSelection();
				this.triggerSelect();
				setTimeout(() => {
					this.unwatch = this.$watch(
						'tableData',
						() => {
							this.triggerSelect();
						},
						{
							deep: true
						}
					);
				}, 500);
			}
		},
		beforeDestroy() {
			if (this.unwatch) {
				this.unwatch();
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
