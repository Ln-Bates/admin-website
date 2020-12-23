export default {
    methods: {
        singleMsg(type, errMsg) {
            const dom = document.getElementsByClassName('el-message')[0]
            if (!dom) {
                this.$message[type](errMsg);
            }
        }
    }
}