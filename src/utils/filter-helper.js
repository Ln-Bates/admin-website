import {defaultConstruction} from './form-helper';

const filterHelper = {
  input(label, prop) {
    return {
      ...defaultConstruction('form-input-default', label, prop, false)
    };
  },
  int(label, prop) {
    return {
      ...defaultConstruction('form-input-int', label, prop, false)
    };
  },
  float(label, prop) {
    return {
      ...defaultConstruction('form-input-float', label, prop, false)
    };
  },
  select(label, prop, options) {
    return {
      ...defaultConstruction('form-select-default', label, prop, false),
      options
    };
  },
  datePicker(label, prop) {
    return {
      ...defaultConstruction('date-picker', label, prop, false)
    };
  },
  dateRange(label, prop) {
    return {
      ...defaultConstruction('date-range', label, prop, false)
    };
  },
};

export default filterHelper;
