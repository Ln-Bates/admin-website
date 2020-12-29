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

export function groupConstruction(type, options = [], ...arg) {
  return {
    ...defaultConstruction(type, ...arg),
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
  input(...arg) {
    return {
      ...defaultConstruction('form-input-default', ...arg)
    }
  },
  inputFloat(...arg) {
    return {
      ...defaultConstruction('form-input-float', ...arg)
    }
  },
  inputInt(...arg) {
    return {
      ...defaultConstruction('form-input-int', ...arg)
    }
  },
  inputPassword(...arg) {
    return {
      ...defaultConstruction('form-input-password', ...arg)
    }
  },
  inputSearch(...arg) {
    return {
      ...defaultConstruction('form-input-search', ...arg)
    }
  },
  datePicker(...arg) {
    return {
      ...defaultConstruction('date-picker', ...arg)
    };
  },
  dateRange(...arg) {
    return {
      ...defaultConstruction('date-range', ...arg)
    };
  },
  switch(...arg) {
    return {
      ...defaultConstruction('form-switch', ...arg)
    };
  },
  radio(options, ...arg) {
    return {
      ...groupConstruction('form-radio', options, ...arg)
    };
  },
  checkbox(options, ...arg) {
    return {
      ...groupConstruction('form-checkbox', options, ...arg)
    };
  },
  select(options, ...arg) {
    return {
      ...groupConstruction('form-select-default', options, ...arg)
    };
  },
  selectSearch(options, ...arg) {
    return {
      ...groupConstruction('form-select-search', options, ...arg)
    };
  },
};
