<template>
	<drawer
		v-model="val"
		:handle-click="submitHandler"
		:size="size"
		:title="title"
		class="drawer-detail"
	>
		<detail
			:data="data"
			:detail-model="detailModel"
		>
			<template
				v-for="slot in slots"
				v-slot:[slot]
			>
				<slot :name="slot"></slot>
			</template>
		</detail>
	</drawer>
</template>

<script>
	import TwoWay from 'mixins/two-way';

	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			size: {
				type: [String, Number],
				default: '50%'
			},
			submitHandler: {
				type: [Function],
				default: undefined
			},
			data: {
				type: Object,
				default() {
					return {};
				}
			},
			detailModel: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		mixins: [TwoWay],
		data() {
			return {
				slots: []
			};
		},
		created() {
			this.detailModel.forEach(item => {
				item.list.forEach(subItem => {
					const type = subItem.type;
					if (type === 'slot') {
						this.slots.push(type);
					}
				});
			});
		}
	};
</script>

<style lang="scss" scoped>
	.drawer-detail ::v-deep {
		.title-wrapper .title {
			background: #fff;
		}
	}
</style>

