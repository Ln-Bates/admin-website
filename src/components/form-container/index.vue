<template>
	<simple-view>
		<el-form
			v-loading="loading"
			:label-position="labelPosition"
			:label-width="labelWidth"
			class="form"
		>
			<template v-for="item in formList">
				<template v-if="item.hide !== true">
					<el-form-item
						v-if="itemType(item).isComponent"
						:key="item.prop"
					>
						<template v-slot:label>
							<form-label :item="item" />
						</template>
						<keep-alive>
							<component
								v-model="val[item.prop]"
								v-bind="dynamicProp(item)"
								:is="item.type"
							/>
						</keep-alive>
					</el-form-item>
					<el-form-item
						v-else-if="itemType(item).isJustText"
						:key="item.prop"
					>
						<template v-slot:label>
							<form-label :item="item" />
						</template>
						{{text(item)}}
					</el-form-item>
					<el-form-item
						v-else-if="itemType(item).isSlot"
						:key="item.prop"
					>
						<template v-slot:label>
							<form-label :item="item" />
						</template>
						<slot :name="item.prop" />
					</el-form-item>
				</template>
			</template>
		</el-form>
		<template #footer-bar>
			<el-button
				v-if="submitHandler"
				:disabled="loading"
				@click="$router.back()"
			>
				{{cancelText}}
			</el-button>
			<el-button
				v-if="submitHandler"
				:loading="loading"
				type="primary"
				@click="submitHandlerConfirm"
			>
				{{confirmText}}
			</el-button>
			<slot name="footer-bar"></slot>
		</template>
	</simple-view>
</template>

<script>
	import DatePicker from 'components/form-date/date-picker';
	import DateRange from 'components/form-date/date-range';
	import FormRadio from 'components/form-radio/index';
	import FormSelectDefault from 'components/form-select/select-default';
	// import FormSelectSearch from 'components/form-select/select-search';
	import FormCheckbox from 'components/form-checkbox/index';
	import FormSwitch from 'components/form-switch/index';
	import FormInputDefault from 'components/form-input/input-default';
	import FormInputFloat from 'components/form-input/input-float';
	import FormInputInt from 'components/form-input/input-int';
	import FormInputPassword from 'components/form-input/input-password';
	// import FormInputSearch from 'components/form-input/input-search';
	import FormLabel from './label';
	import TwoWay from 'mixins/two-way';
	import { EMPTY_PLACEHOLDER } from 'utils/constant';

	export default {
		name: 'form-container',
		components: {
			DatePicker,
			DateRange,
			FormRadio,
			FormSelectDefault,
			// FormSelectSearch,
			FormCheckbox,
			FormSwitch,
			FormInputDefault,
			FormInputFloat,
			FormInputInt,
			FormInputPassword,
			// FormInputSearch,
			FormLabel
		},
		props: {
			formList: {
				type: Array,
				default() {
					return [];
				}
			},
			labelPosition: {
				type: String,
				default: 'right'
			},
			labelWidth: {
				type: String,
				default: 'auto'
			},
			submitHandler: {
				type: Function,
				default: undefined
			},
			confirmText: {
				type: String,
				default: '确认'
			},
			cancelText: {
				type: String,
				default: '取消'
			}
		},
		mixins: [TwoWay],
		data() {
			return {
				loading: false
			};
		},
		methods: {
			/**
			 * 动态组合属性
			 * @param item
			 * @return {{disabled}}
			 */
			dynamicProp(item) {
				const { type, disabled } = item;
				const commonProps = {
					disabled
				};
				const propsMap = {
					'date-picker': {},
					'date-range': {},
					'form-switch': {},
					'form-radio': {
						options: item.options
					},
					'form-checkbox': {
						options: item.options
					},
					'form-select-default': {
						options: item.options
					}
				};
				return {
					...commonProps,
					...propsMap[type],
					...item.config
				};
			},
			/**
			 * 表单类型
			 * @param item
			 * @return {{isSlot: *, isJustText: *, isComponent: boolean}}
			 */
			itemType(item) {
				const notComponent = ['show', 'slot'];
				const show = item.show !== false;
				const isType = type => {
					return item.type === type && show;
				};
				return {
					isComponent: !notComponent.includes(item.type) && show,
					isJustText: isType('show'),
					isSlot: isType('slot')
				};
			},
			/**
			 * 文案处理
			 * @param item
			 * @return {*}
			 */
			text(item) {
				let text = this.val[item.prop];
				if (!text && text !== 0) {
					text = EMPTY_PLACEHOLDER;
				}
				return text;
			},
			/**
			 * 提交方法
			 */
			submitHandlerConfirm() {
				if (this.submitHandler) {
					this.loading = true;
					this.submitHandler().finally(() => {
						this.loading = false;
					});
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.form {
		height: 100%;
	}
</style>
