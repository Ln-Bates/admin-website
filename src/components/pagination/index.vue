<template>
	<el-pagination
		:page-sizes="PAGE_SIZES"
		:current-page="pageData.page"
		:layout="layout"
		:total="total"
		:hide-on-single-page="true"
		background
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange"
	/>
</template>

<script>
	import { PAGE_SIZES } from 'utils/constant';

	export default {
		name: 'pagination',
		props: {
			total: {
				type: Number,
				default: 0
			},
			pageData: {
				type: Object,
				default() {
					return {
						page: 1,
						size: PAGE_SIZES[0]
					};
				}
			}
		},
		data() {
			return {
				PAGE_SIZES,
				layout: 'total, sizes, prev, pager, next'
			};
		},
		methods: {
			handleSizeChange(size) {
				this.$emit('change-size', size);
			},
			handleCurrentChange(current) {
				this.$emit('change-page', current);
			}
		}
	};
</script>

<style scoped>
</style>
