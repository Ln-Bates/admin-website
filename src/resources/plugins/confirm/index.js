import { PREPOSITION, CONFIRM_BUTTON_TEXT } from 'utils/constant';
const confirm = {
    install(Vue) {
        Vue.prototype[`${PREPOSITION}Confirm`] = function (confirmMsg, confirmText = CONFIRM_BUTTON_TEXT) {
            let confirmButtonText = confirmText;
            if (typeof confirmButtonText !== 'string') {
                confirmButtonText = CONFIRM_BUTTON_TEXT;
            }
            return this.$confirm(confirmMsg, '提示', {
                confirmButtonText,
                cancelButtonText: '取消',
                type: 'warning'
            }).catch(() => {
                this.$message.info('已取消操作');
            });
        };
    },
};

export default confirm;