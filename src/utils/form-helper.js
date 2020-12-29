/**
 * 公共部分
 * @param {*} type 类型
 * @param {*} label 名称
 * @param {*} prop 表单属性
 * @param {*} disabled 禁用
 */
function defaultConstruction(type, label, prop, disabled = false) {
  return {
    type, label, prop, disabled
  };
}

function groupConstruction(type, label, prop, disabled = false, options = []) {
  return {
    ...defaultConstruction(type, label, prop, disabled),
    options
  };
}

export const formHelper = {
  datePicker(label, prop, disabled = false) {
    return {
      ...defaultConstruction('date-picker', label, prop, disabled)
    };
  },
  dateRange(label, prop, disabled = false) {
    return {
      ...defaultConstruction('date-range', label, prop, disabled)
    };
  },
  switch(label, prop, disabled = false) {
    return {
      ...defaultConstruction('form-switch', label, prop, disabled)
    };
  },
  radio(label, prop, disabled = false, options) {
    return {
      ...groupConstruction('form-radio', label, prop, disabled, options)
    };
  },
  checkbox(label, prop, disabled = false, options) {
    return {
      ...groupConstruction('form-checkbox', label, prop, disabled, options)
    };
  },
  select(label, prop, disabled = false, options) {
    return {
      ...groupConstruction('form-select-default', label, prop, disabled, options)
    };
  },
};
