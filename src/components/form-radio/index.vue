<template>
	<el-radio-group
		v-model="val"
		:disabled="disabled"
		@change="handleChange"
	>
		<el-radio
			v-for="item in options"
			:disabled="item.disabled"
			:label="item[value]"
			:key="item[value]"
		>
			{{item[label]}}
		</el-radio>
	</el-radio-group>
</template>

<script>
	import FormCommonProps from 'mixins/form-common-props';

	export default {
		name: 'form-radio',
		props: {
			options: {
				type: Array,
				default() {
					return [];
				}
			},
			placeholder: {
				type: String,
				default: '请选择'
			},
			label: {
				type: String,
				default: 'label'
			},
			value: {
				type: String,
				default: 'value'
			}
		},
		mixins: [FormCommonProps],
		methods: {
			handleChange(val) {
				this.$emit('changed', val);
			}
		}
	};
</script>

<style>
</style>
