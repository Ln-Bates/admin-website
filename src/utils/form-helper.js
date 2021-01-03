/**
 * 公共部分
 * @param {*} type 类型
 * @param {*} label 名称
 * @param {*} prop 表单属性
 * @param {*} disabled 禁用
 * @param {*} config 自定义
 */
export function defaultConstruction(type, label, prop, disabled = false, config) {
  return {
    type, label, prop, disabled, config
  };
}

export function groupConstruction(type, label, prop, disabled = false, options = [], config = {}) {
  return {
    ...defaultConstruction(type, label, prop, disabled, config),
    options
  };
}

const formHelper = {
  /**
   * @param {*} label 名称
   * @param {*} prop 表单属性
   * @param {*} disabled 禁用
   * @param config
   */
  input(label, prop, disabled = false, config = {placeholder: '请输入'}) {
    return {
      ...defaultConstruction('form-input-default', label, prop, disabled, config)
    };
  },
  inputFloat(label, prop, disabled = false, config = {placeholder: '请输入'}) {
    return {
      ...defaultConstruction('form-input-float', label, prop, disabled, config)
    };
  },
  inputInt(label, prop, disabled = false, config = {placeholder: '请输入'}) {
    return {
      ...defaultConstruction('form-input-int', label, prop, disabled, config)
    };
  },
  inputPassword(label, prop, disabled = false, config = {placeholder: '请输入'}) {
    return {
      ...defaultConstruction('form-input-password', label, prop, disabled, config)
    };
  },
  inputSearch(label, prop, disabled = false, config = {placeholder: '请输入'}) {
    return {
      ...defaultConstruction('form-input-search', label, prop, disabled, config)
    };
  },
  datePicker(label, prop, disabled = false, config = {}) {
    return {
      ...defaultConstruction('date-picker', label, prop, disabled, config)
    };
  },
  dateRange(label, prop, disabled = false, config = {}) {
    return {
      ...defaultConstruction('date-range', label, prop, disabled, config)
    };
  },
  switch(label, prop, disabled = false, config = {}) {
    return {
      ...defaultConstruction('form-switch', label, prop, disabled, config)
    };
  },
  radio(label, prop, disabled = false, options = [], config = {}) {
    return {
      ...groupConstruction('form-radio', label, prop, disabled, options, config)
    };
  },
  checkbox(label, prop, disabled = false, options = [], config = {}) {
    return {
      ...groupConstruction('form-checkbox', label, prop, disabled, options, config)
    };
  },
  select(label, prop, disabled = false, options = [], config = {}) {
    return {
      ...groupConstruction('form-select-default', label, prop, disabled, options, config)
    };
  },
  selectSearch(label, prop, disabled = false, options = [], config = {}) {
    return {
      ...groupConstruction('form-select-search', label, prop, disabled, options, config)
    };
  },
};

export default formHelper;
