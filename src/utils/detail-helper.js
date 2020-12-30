/**
 * 公共部分
 * @param {*} type 类型
 * @param {*} label 表头
 * @param {*} prop 列属性
 * @param {*} question 提示
 */
function defaultConstruction(type, label, prop, span) {
  if (!prop) throw new Error('Prop为必填项');
  return {
    type, label, prop, span
  };
}

export const detailHelper = {
  /**
   * 默认列
   * @param {*} label
   * @param {*} prop
   * @param {*} span
   */
  default(label, prop, span) {
    return defaultConstruction('default', label, prop, span);
  },
  /**
   * 图片列
   * @param {*} label
   * @param {*} prop
   * @param {*} span
   */
  image(label, prop, span) {
    return defaultConstruction('image', label, prop, span);
  },
  /**
   * 插槽列
   * @param {*} label
   * @param {*} prop
   * @param {*} span
   */
  slot(label, prop, span) {
    return defaultConstruction('slot', label, prop, span);
  },
};
