import TwoWay from '../two-way';

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
  },
  mixins: [TwoWay],
}
