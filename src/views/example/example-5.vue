<template>
  <form-container v-model="formModel" :form-list="formList"></form-container>
</template>

<script>
  import FormContainer from 'components/form-container';
  import {formHelper} from 'utils/form-helper';

  const options = [
    {label: '选项1', value: 1},
    {label: '选项2', value: 2},
    {label: '选项3', value: 3},
  ];

  export default {
    components: {
      FormContainer
    },
    data() {
      return {
        formList: [
          formHelper.datePicker('时间选择', 'a', true),
          formHelper.dateRange('时间区间', 'b', true),
          formHelper.radio('单选', 'c', false, options),
          formHelper.checkbox('多选', 'd', false, options),
          formHelper.select('下拉', 'e', false, options),
          {type: 'switch', prop: 'f', label: '开关', disabled: true},
        ],
        formModel: {
          a: '',
          b: [],
          c: '',
          d: [],
          e: '',
          f: true
        },
        activeName: '1',
        options: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2},
          {label: '选项3', value: 3},
        ],
      };
    },
  };
</script>

<style lang="scss">
  .el-collapse-item__header,
  .el-collapse-item__wrap {
    padding-left: $inner-size;
  }
</style>
