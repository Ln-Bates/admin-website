<template>
	<div class="filters component-container">
		<el-form>
			<el-row class="row">
				<el-col
					v-for="item in filters"
					:span="span"
					:key="item.prop"
				>
					<el-form-item
						:label="`${item.label}：`"
						:label-width="labelWidth"
					>
						<component
							v-model="val[item.prop]"
							v-bind="dynamicProp(item)"
							:is="item.type"
						/>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script>
	import TwoWay from 'mixins/two-way';
	import DatePicker from 'components/form-date/date-picker';
	import DateRange from 'components/form-date/date-range';
	import FormSelectDefault from 'components/form-select/select-default';
	import FormInputDefault from 'components/form-input/input-default';
	import FormInputFloat from 'components/form-input/input-float';
	import FormInputInt from 'components/form-input/input-int';

	export default {
		name: 'filters',
		components: {
			DatePicker,
			DateRange,
			FormSelectDefault,
			FormInputDefault,
			FormInputFloat,
			FormInputInt
		},
		mixins: [TwoWay],
		props: {
			filters: {
				type: Array,
				default() {
					return [];
				}
			},
			labelWidth: {
				type: String,
				default: '100px'
			},
			span: {
				type: Number,
				default: 8
			}
		},
		methods: {
			dynamicProp(item) {
				if (item.options) {
					return {
						options: item.options
					};
				}
				return {};
			}
		}
	};
</script>

<style lang="scss" scoped>
	::v-deep {
		.el-input--mini,
		.el-date-editor {
			width: 260px;
		}
	}

	.row {
		margin-bottom: -18px;
	}
</style>
