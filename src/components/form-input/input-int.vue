<template>
    <el-input v-model="val"></el-input>
</template>

<script>
    import FormCommonProps from 'mixins/form-common-props';
    export default {
        name: 'form-input-int',
        mixins: [FormCommonProps],
    };
</script>

<style scoped>
</style>

