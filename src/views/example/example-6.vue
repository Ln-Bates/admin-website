<template>
	<simple-view>
		<detail
			:data="data"
			:detail-model="detailModel"
		>
			<template v-slot:slot>
				slot 测试
			</template>
		</detail>
		<template #footer-bar>
			<el-button>底部按钮</el-button>
			<el-button type="primary">底部按钮</el-button>
		</template>
	</simple-view>
</template>

<script>
	import { detailHelper } from 'utils/detail-helper';
	export default {
		data() {
			return {
				detailModel: [
					{
						title: '普通详情1',
						list: [detailHelper.default('联系人', 'prop1')],
						span: 24
					},
					{
						title: '普通详情2',
						list: [
							detailHelper.default('联系人', 'prop21', 6),
							detailHelper.default('联系人', 'prop22')
						],
						span: 12
					},
					{
						title: '金额信息',
						list: [{ label: '插槽', type: 'slot', prop: 'slot' }],
						span: 24
					}
				],
				data: {
					prop1: '测试1',
					prop21: '测试21',
					prop22: '测试22'
				}
			};
		}
	};
</script>

<style>
</style>
