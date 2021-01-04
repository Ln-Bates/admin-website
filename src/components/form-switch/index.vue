<template>
	<el-switch
		v-model="val"
		:disabled="disabled"
		@change="handleChange"
	>
	</el-switch>
</template>

<script>
	import FormCommonProps from 'mixins/form-common-props';

	export default {
		name: 'form-switch',
		props: {
			activeActive: {
				type: [Boolean, String, Number],
				default: true
			},
			inactiveActive: {
				type: [Boolean, String, Number],
				default: false
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
