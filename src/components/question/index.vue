<template>
    <el-tooltip :effect="effect"
                :content="content"
                :placement="placement">
        <i class="el-icon-question"></i>
    </el-tooltip>
</template>

<script>
    export default {
        props: {
            effect: {
                type: String,
                default: 'dark'
            },
            content: {
                type: String,
                default: ''
            },
            placement: {
                type: String,
                default: 'right'
            },
        }
    }
</script>

<style>
</style>
