<template>
	<simple-view>
		<el-collapse
			v-model="activeName"
			accordion
		>
			<el-collapse-item
				title="注入全局scss变量"
				name="1"
			>
				<div>全局变量写再styles/_variable.scss里</div>
				<div>任意文件内可直接访问无需引用</div>
			</el-collapse-item>
			<el-collapse-item
				title="全局插件测试"
				name="2"
			>
				<el-button
					type="primary"
					@click="confirmTest"
				>
					confirm
				</el-button>
				<el-button
					type="primary"
					@click="confirmTest('保存')"
				>
					confirm通过按钮文本更改
				</el-button>
			</el-collapse-item>
			<el-collapse-item
				title="修改菜单高亮定位"
				name="3"
			>
				<div>
					<el-button
						type="primary"
						@click="changeRouteHighlight('1')"
					>
						example - 1
					</el-button>
					<el-button
						type="primary"
						@click="changeRouteHighlight('2')"
					>
						example - 2
					</el-button>
				</div>
				<div>
					仅修改样式 不进行路由跳转
				</div>
			</el-collapse-item>
			<el-collapse-item
				title="输入框整数及浮点"
				name="4"
			>
				<div>
					<p>整数</p>
					<el-input
						v-model="int"
						v-input:int
						style="width: 400px;"
					/>
				</div>
				<div>
					<p>浮点数</p>
					<el-input
						v-model="float"
						v-input:float
						style="width: 400px;"
					/>
				</div>
			</el-collapse-item>
			<el-collapse-item
				title="防抖指令（ 有问题 ）"
				name="5"
			>
				<el-button
					v-click="debounce"
					type="primary"
				>
					防抖测试
				</el-button>
			</el-collapse-item>
			<el-collapse-item
				title="侧滑"
				name="6"
			>
				<el-button
					type="primary"
					@click="showDrawer = true"
				>
					Drawer
				</el-button>
				<el-button
					type="primary"
					@click="showDrawerDetail = true"
				>
					DrawerDetail
				</el-button>
			</el-collapse-item>
			<el-collapse-item
				title="dialog"
				name="7"
			>
				<el-button
					type="primary"
					@click="showDialog = true"
				>
					Dialog
				</el-button>
				{{showDialog}}
			</el-collapse-item>
		</el-collapse>

		<drawer
			v-model="showDrawer"
			title="title"
		>
			content
			<template v-slot:slot>
				slot 测试1111
			</template>
		</drawer>
		<drawer-detail
			v-model="showDrawerDetail"
			:data="data"
			:detail-model="detailModel"
			:handle-click="timeoutClose"
			title="title"
		>
			content
			<template v-slot:slot>
				slot 测试1111
			</template>
			<template v-slot:slot2>
				slot 测试1111
			</template>
		</drawer-detail>
		<simple-dialog
			v-model="showDialog"
			:handle-click="dialogClick"
		>
			<div>
				这是主题
			</div>
		</simple-dialog>
	</simple-view>
</template>

<script>
	import { detailHelper } from 'utils/detail-helper';

	export default {
		data() {
			return {
				showDialog: false,
				activeName: '',
				int: '',
				float: '',
				showDrawer: false,
				showDrawerDetail: false,
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
		},
		methods: {
			confirmTest(text) {
				this.elConfirm('confirm内容测试', text).then(() => {
					this.$message.success('进行后续操作');
				});
			},
			changeRouteHighlight(type) {
				const routesMap = {
					'1': '/example/view-simple',
					'2': '/example/view-table'
				};
				this.$eventBus.$emit('changeActive', routesMap[type]);
			},
			debounce() {
				console.log(123);
			},
			timeoutClose() {
				return new Promise(resolve => {
					setTimeout(() => {
						resolve();
					}, 1000);
				});
			},
			dialogClick() {
				return new Promise(resolve => {
					setTimeout(() => {
						resolve();
					}, 1000);
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	::v-deep {
		.el-collapse-item__header {
			color: $color;
		}

		.el-collapse-item__header,
		.el-collapse-item__wrap {
			padding-left: $inner-size;
		}
	}
</style>
