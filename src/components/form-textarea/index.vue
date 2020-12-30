<template>
    <el-input v-model="val"
              :disabled="disabled === true"
              type="textarea"></el-input>
</template>

<script>
    import FormCommonProps from 'mixins/form-common-props';

    export default {
        name: 'form-textarea',
        mixins: [FormCommonProps],
    };
</script>

<style scoped>
</style>

