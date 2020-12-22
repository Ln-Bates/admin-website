<template>
    <div class="simple-view">
        <div class="content-container"
             :class="{'has-footer': hasFooter}">
            <slot />
        </div>
        <div class="footer-bar"
             v-if="hasFooter">
            <slot name="footer-bar" />
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            hasFooter() {
                return !!this.$slots['footer-bar'];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .simple-view {
        position: relative;
        box-sizing: border-box;
        padding: $inner-size;
        height: 100%;
        max-height: 100%;

        .content-container {
            overflow: auto;
            height: 100%;

            &.has-footer {
                height: calc(100% - 45px);
            }
        }

        .footer-bar {
            position: absolute;
            right: 15px;
            bottom: 0;
            left: 15px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            // background: #ccc;
        }
    }
</style>