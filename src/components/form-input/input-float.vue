<template>
    <el-input v-model="val"></el-input>
</template>

<script>
    import FormCommonProps from 'mixins/form-common-props';

    export default {
        name: 'form-input-float',
        mixins: [FormCommonProps],
    };
</script>

<style scoped>
</style>
