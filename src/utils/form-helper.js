/**
 * 公共部分
 * @param {*} type 类型
 * @param {*} label 名称
 * @param {*} prop 表单属性
 * @param {*} disabled 禁用
 * @param show 是否渲染
 * @param {*} config 自定义
 */
export function defaultConstruction(type, label, prop, disabled = false, show = true, config) {
  return {
    type, label, prop, disabled, show, config
  };
}

export function groupConstruction(type, label, prop, disabled = false, show = true, options = [], config = {}) {
  let args = [
    type, label, prop, disabled, show, config
  ];
  if (typeof show === 'object') {
    args = [
      type, label, prop, disabled, true, {options: show}
    ];
  }
  return {
    ...defaultConstruction.apply(this, args),
    options
  };
}

/* eslint-disable */
const formHelper = {
  /**
   * @param {*} label 名称
   * @param {*} prop 表单属性
   * @param {*} disabled 禁用
   * @param show
   * @param config
   */
  input(label, prop, disabled = false, show = true, config = {placeholder: '请输入'}) {
    return defaultConstruction.apply(this, ['form-input-default', ...arguments]);
  },
  inputFloat(label, prop, disabled = false, show = true, config = {placeholder: '请输入'}) {
    return defaultConstruction.apply(this, ['form-input-float', ...arguments]);
  },
  inputInt(label, prop, disabled = false, show = true, config = {placeholder: '请输入'}) {
    return defaultConstruction.apply(this, ['form-input-int', ...arguments]);
  },
  inputPassword(label, prop, disabled = false, show = true, config = {placeholder: '请输入'}) {
    return defaultConstruction.apply(this, ['form-input-password', ...arguments]);
  },
  inputSearch(label, prop, disabled = false, show = true, config = {placeholder: '请输入'}) {
    return defaultConstruction.apply(this, ['form-input-search', ...arguments]);
  },
  datePicker(label, prop, disabled = false, show = true, config = {}) {
    return defaultConstruction.apply(this, ['date-picker', ...arguments]);
  },
  dateRange(label, prop, disabled = false, show = true, config = {}) {
    return defaultConstruction.apply(this, ['date-range', ...arguments]);
  },
  switch(label, prop, disabled = false, show = true, config = {}) {
    return defaultConstruction.apply(this, ['form-switch', ...arguments]);
  },
  radio(label, prop, disabled = false, show = true, options = [], config = {}) {
    return groupConstruction.apply(this, ['form-radio', ...arguments]);
  },
  checkbox(label, prop, disabled = false, show = true, options = [], config = {}) {
    return groupConstruction.apply(this, ['form-checkbox', ...arguments]);
  },
  select(label, prop, disabled = false, show = true, options = [], config = {}) {
    return groupConstruction.apply(this, ['form-select-default', ...arguments]);
  },
  selectSearch(label, prop, disabled = false, show = true, options = [], config = {}) {
    return groupConstruction.apply(this, ['form-select-search', ...arguments]);
  },
};

export default formHelper;
