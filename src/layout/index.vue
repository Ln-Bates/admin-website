<template>
    <el-container class="container">
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <menu-container />
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

    import MenuContainer from './menu-container';
    export default {
        components: {
            MenuContainer
        },
    }
</script>

<style>
    .container {
        height: 100%;
    }
    .el-header,
    .el-footer {
        background-color: #b3c0d1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #d3dce6;
        color: #333;
    }

    .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>