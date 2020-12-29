/**
 * 公共部分
 * @param {*} type 类型
 * @param {*} label 名称
 * @param {*} prop 表单属性
 * @param {*} disabled 禁用
 */
export function defaultConstruction(type, label, prop, disabled = false) {
  return {
    type, label, prop, disabled
  };
}

export function groupConstruction(type, label, prop, disabled = false, options = []) {
  return {
    ...defaultConstruction(type, label, prop, disabled),
    options
  };
}

export const formHelper = {
  /**
   * arg为默认项每个表单都有
   * @param  {...any} arg
   * @param {*} type 类型
   * @param {*} label 名称
   * @param {*} prop 表单属性
   * @param {*} disabled 禁用
   */
  input(label, prop, disabled = false) {
    return {
      ...defaultConstruction('form-input-default', label, prop, disabled)
    }
  },
  inputFloat(label, prop, disabled = false) {
    return {
      ...defaultConstruction('form-input-float', label, prop, disabled)
    }
  },
  inputInt(label, prop, disabled = false) {
    return {
      ...defaultConstruction('form-input-int', label, prop, disabled)
    }
  },
  inputPassword(label, prop, disabled = false) {
    return {
      ...defaultConstruction('form-input-password', label, prop, disabled)
    }
  },
  inputSearch(label, prop, disabled = false) {
    return {
      ...defaultConstruction('form-input-search', label, prop, disabled)
    }
  },
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
  radio(label, prop, disabled = false, options = []) {
    return {
      ...groupConstruction('form-radio', label, prop, disabled, options)
    };
  },
  checkbox(label, prop, disabled = false, options = []) {
    return {
      ...groupConstruction('form-checkbox', label, prop, disabled, options)
    };
  },
  select(label, prop, disabled = false, options = []) {
    return {
      ...groupConstruction('form-select-default', label, prop, disabled, options)
    };
  },
  selectSearch(label, prop, disabled = false, options = []) {
    return {
      ...groupConstruction('form-select-search', label, prop, disabled, options)
    };
  },
};
