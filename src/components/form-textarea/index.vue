<template>
	<el-input
		v-model="val"
		:disabled="disabled === true"
		type="textarea"
	/>
</template>

<script>
	import FormCommonProps from 'mixins/form-common-props';

	export default {
		name: 'form-textarea',
		mixins: [FormCommonProps]
	};
</script>

<style scoped>
</style>

