import { KEY, VALUE } from './constant.js';
export default function (key, val) {
  return {
    [KEY]: key,
    [VALUE]: val
  }
}
