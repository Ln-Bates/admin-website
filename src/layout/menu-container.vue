<template>
    <el-menu>
        <menu-item :routes="routes" />
    </el-menu>
</template>

<script>
    import MenuItem from './menu-item';
    export default {
        components: {
            MenuItem
        },
        props: ['routes']
    }
</script>

<style>
</style>