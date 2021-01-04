import { KEY, VALUE } from './constant.js';

export default function (key, val, disabled = false) {
  return {
    [KEY]: key,
    [VALUE]: val,
    disabled,
  };
}
