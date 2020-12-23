export default {
    model: {
        prop: 'currentVal',
        event: 'valChange'
    },
    props: ['currentVal'],
    computed: {
        val: {
            get() {
                return this.currentVal;
            },
            set(val) {
                this.$emit('valChange', val)
            }
        }
    }
}