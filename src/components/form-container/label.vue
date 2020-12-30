<template>
    <div ref="hook-form-label"
         class="form-label">
        {{item.label}}
        <question v-if="item.question"
                  :content="item.question" />
        ：
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .has-question {
        margin-left: -18px;
    }
</style>
