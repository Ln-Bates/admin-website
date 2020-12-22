<template>
    <div>
        <div v-for="(item) in menuList"
             :key="item.path">
            <template v-if="showItem(item)">
                <el-submenu :index="item.path"
                            v-if="item.children">
                    <template slot="title">
                        <span>{{item.meta.title}}</span>
                    </template>
                    <MenuItem :routes="item.children">
                    </MenuItem>
                </el-submenu>
                <el-menu-item :index="item.path"
                              v-else>
                    <span>{{item.meta.title}}</span>
                </el-menu-item>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'MenuItem',
        props: ['routes'],
        computed: {
            menuList() {
                return this.routes;
            }
        },
        methods: {
            showItem(item) {
                if (!item.meta) return true;
                if (item.meta && item.meta.hide) return false;
                return true;
            }
        }
    }
</script>

<style>
</style>