/**
 * 公共部分
 * @param {*} type 类型
 * @param {*} label 表头
 * @param {*} prop 列属性
 * @param {*} question 提示
 */
function defaultConstruction(type, label, prop, question) {
  return {
    type, label, prop, question
  }
}

export const tableHepler = {
  /**
   * 默认列
   * @param {*} label
   * @param {*} prop
   * @param {*} question
   */
  default(label, prop, question) {
    return defaultConstruction('default', label, prop, question);
  },
  /**
   * 图片列
   * @param {*} label
   * @param {*} prop
   * @param {*} question
   */
  image(label, prop, question) {
    return defaultConstruction('image', label, prop, question);
  },
  /**
   * 插槽列
   * @param {*} label
   * @param {*} prop
   * @param {*} question
   */
  slot(label, prop, question) {
    return defaultConstruction('slot', label, prop, question);
  },
  /**
   * 按钮列
   * @param {*} label
   * @param {*} prop
   * @param {*} btnText
   * @param {*} handler 回调方法
   * @param {*} question
   */
  btn(label, prop, btnText, handler, question) {
    return {
      ...defaultConstruction('btn', label, prop, question),
      btnText,
      handler
    };
  },
  /**
   * 按钮组列
   * @param {*} label
   * @param {*} question
   * @param {*} btns 按钮组列表
   */
  btnGroup(label, btns, question) {
    return {
      ...defaultConstruction('btn-group', label, undefined, question),
      btns
    };
  },
}
