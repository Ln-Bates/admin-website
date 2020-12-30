/**
 * 公共部分
 * @param {*} type 类型
 * @param {*} label 名称
 * @param {*} prop 表单属性
 * @param {*} disabled 禁用
 * @param {*} custom 自定义
 */
export function defaultConstruction(type, label, prop, disabled = false, custom) {
  return {
    type, label, prop, disabled, custom
  };
}

export function groupConstruction(type, label, prop, disabled = false, options = [], custom = {}) {
  return {
    ...defaultConstruction(type, label, prop, disabled, custom),
    options
  };
}

export const formHelper = {
  /**
   * @param {*} label 名称
   * @param {*} prop 表单属性
   * @param {*} disabled 禁用
   * @param custom
   */
  input(label, prop, disabled = false, custom = {placeholder: '请输入'}) {
    return {
      ...defaultConstruction('form-input-default', label, prop, disabled, custom)
    };
  },
  inputFloat(label, prop, disabled = false, custom = {placeholder: '请输入'}) {
    return {
      ...defaultConstruction('form-input-float', label, prop, disabled, custom)
    };
  },
  inputInt(label, prop, disabled = false, custom = {placeholder: '请输入'}) {
    return {
      ...defaultConstruction('form-input-int', label, prop, disabled, custom)
    };
  },
  inputPassword(label, prop, disabled = false, custom = {placeholder: '请输入'}) {
    return {
      ...defaultConstruction('form-input-password', label, prop, disabled, custom)
    };
  },
  inputSearch(label, prop, disabled = false, custom = {placeholder: '请输入'}) {
    return {
      ...defaultConstruction('form-input-search', label, prop, disabled, custom)
    };
  },
  datePicker(label, prop, disabled = false, custom = {}) {
    return {
      ...defaultConstruction('date-picker', label, prop, disabled, custom)
    };
  },
  dateRange(label, prop, disabled = false, custom = {}) {
    return {
      ...defaultConstruction('date-range', label, prop, disabled, custom)
    };
  },
  switch(label, prop, disabled = false, custom = {}) {
    return {
      ...defaultConstruction('form-switch', label, prop, disabled, custom)
    };
  },
  radio(label, prop, disabled = false, options = [], custom = {}) {
    return {
      ...groupConstruction('form-radio', label, prop, disabled, options, custom)
    };
  },
  checkbox(label, prop, disabled = false, options = [], custom = {}) {
    return {
      ...groupConstruction('form-checkbox', label, prop, disabled, options, custom)
    };
  },
  select(label, prop, disabled = false, options = [], custom = {}) {
    return {
      ...groupConstruction('form-select-default', label, prop, disabled, options, custom)
    };
  },
  selectSearch(label, prop, disabled = false, options = [], custom = {}) {
    return {
      ...groupConstruction('form-select-search', label, prop, disabled, options, custom)
    };
  },
};
