export default {
  props: {
    max: {
      type: Number,
    },
    min: {
      type: Number,
    },
    maxlength: {
      type: Number,
    },
    minlength: {
      type: Number,
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    prepend: {
      type: String,
      default: ''
    },
    append: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    prefixIcon: {
      type: String
    },
    suffixIcon: {
      type: String
    },
    clearable: {
      type: Boolean,
      default: true
    },
    showWordLimit: {
      type: Boolean,
      default: true
    }
  },
};

