<template>
    <el-menu :default-active="defaultActive"
             :router="true">
        <menu-item :routes="routes" />
    </el-menu>
</template>

<script>
    import { children } from '@/router/routes';
    import MenuItem from './menu-item';
    export default {
        components: {
            MenuItem
        },
        data() {
            return {
                routes: children,
                defaultActive: children[0].path
            }
        },
        mounted() {
            this.$eventBus.$on('changeActive', path => {
                this.defaultActive = path;
            });
        }
    }
</script>

<style>
</style>