<template>
	<div class="table-view view-container">
		<div
			class="content-container"
			:class="{'has-footer': hasFooter}"
		>
			<!-- 过滤 -->
			<filters
				v-model="val.filter"
				:filters="filters.list"
				:label-width="filters.labelWidth"
				:span="filters.span"
			/>
			<!-- 过滤 -->
			<!-- 按钮组 -->
			<div class="btn-group component-container">
				<div class="left">
					<tabs
						v-model="val.tabActive"
						:tabs="tabs"
					/>
					<slot name="slot-left" />
				</div>
				<div class="right">
					<slot name="slot-right" />
				</div>
			</div>
			<!-- 按钮组 -->
			<!-- 表格 -->
			<data-table
				v-loading="loading || customLoading"
				:table-data="tableData"
				:table-options="tableOptions"
			>
				<template
					v-for="column of tableOptions.columns"
					v-slot:[column.prop]="{row, index}"
				>
					<slot
						:name="column.prop"
						:row="row"
						:index="index"
					/>
				</template>
			</data-table>
			<!-- 表格 -->
		</div>
		<div
			v-if="hasFooter"
			class="footer-bar"
		>
			<pagination
				:total="total"
				:page-data="pageData"
				@change-size="onSizeChange"
				@change-page="onPageChange"
			/>
		</div>
	</div>
</template>

<script>
	import Filters from '../filters/index';
	import Tabs from '../tabs/index';
	import DataTable from '../data-table/index';
	import Pagination from '../pagination/index';
	import TwoWay from 'mixins/two-way';
	import { PAGE_SIZES } from 'utils/constant';

	export default {
		components: {
			Filters,
			Tabs,
			DataTable,
			Pagination
		},
		mixins: [TwoWay],
		props: {
			total: {
				type: Number,
				default: 0
			},
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
			filters: {
				type: Object,
				default() {
					return {};
				}
			},
			tabs: {
				type: Array,
				default() {
					return [];
				}
			},
			customLoading: {
				type: [Boolean, undefined],
				default: undefined
			}
		},
		data() {
			return {
				loading: false,
				timer: null,
				pageData: {
					page: 1,
					size: PAGE_SIZES[0]
				}
			};
		},
		computed: {
			hasFooter() {
				return true;
			}
		},
		watch: {
			'val.filter': {
				deep: true,
				handler() {
					clearTimeout(this.timer);
					this.timer = setTimeout(() => {
						this.getData();
					}, 800);
				}
			},
			'val.tabActive'() {
				this.onSizeChange(this.pageData.size);
			}
		},
		methods: {
			onSizeChange(size) {
				const pageData = this.pageData;
				pageData.size = size;
				pageData.page = 1;
				this.getData();
			},
			onPageChange(page) {
				this.pageData.page = page;
				this.getData();
			},
			getData() {
				if (this.customLoading === undefined) {
					this.loading = true;
				}
				this.$emit('get-data', this.pageData, () => {
					this.loading = false;
				});
			}
		},
		mounted() {
			this.getData();
		}
	};
</script>

<style lang="scss" scoped>
	@import '~@/styles/view.scss';

	.btn-group {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
