<template>
    <div>
        <h1>
            全局注入的scss变量
            全局变量写再styles/_variable.scss里
        </h1>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    h1 {
        color: $color;
    }
</style>