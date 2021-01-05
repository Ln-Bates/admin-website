import { PREPOSITION, SUCCESS_MESSAGE } from 'utils/constant';

const Message = {
  install(Vue) {
    const types = [
      'success',
      'warning',
      'danger'
    ]
    types.forEach(type => {
      const upperCaseType = type.replace(type[0], type[0].toUpperCase());
      Vue.prototype[`${PREPOSITION}Message${upperCaseType}`] = function (message) {
        let msg = message;
        if (type === 'success') {
          msg = message || SUCCESS_MESSAGE;
        }
        this.$message[type](msg);
      };
    });
  },
};

export default Message;
