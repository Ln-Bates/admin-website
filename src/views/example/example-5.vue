<template>
  <form-container v-model="formModel"
                  :form-list="formList" :submit-handler="submitHandler">
    <template v-slot:slot>
      插槽测试~~
    </template>
  </form-container>
</template>

<script>
  import FormContainer from 'components/form-container';
  import formHelper from 'utils/form-helper';

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
          formHelper.input('普通输入框', 's1', true, {
            placeholder: '测试'
          }),
          formHelper.inputFloat('浮点输入框', 's2', true),
          formHelper.inputInt('整数输入框', 's3', true),
          formHelper.inputPassword('密码输入框', 's4'),
          formHelper.datePicker('时间选择', 'a', true),
          formHelper.dateRange('时间区间', 'b'),
          formHelper.radio('单选', 'c', false, options),
          formHelper.checkbox('多选', 'd', false, options),
          formHelper.select('下拉', 'e', false, options),
          {type: 'form-switch', prop: 'f', label: '开关', disabled: true},
          {type: 'show', prop: 'show', label: '显示测试'},
          {type: 'slot', prop: 'slot', label: '插槽测试', question: '测试提示文案'}
        ],
        formModel: {
          a: '',
          b: [],
          c: '',
          d: [],
          e: '',
          f: true,
          show: '纯文本显示'
        },
        activeName: '1',
        options: [
          {label: '选项1', value: 1},
          {label: '选项2', value: 2},
          {label: '选项3', value: 3},
        ],
      };
    },
    methods: {
      submitHandler() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      }
    },
  };
</script>

<style lang="scss">
  .el-collapse-item__header,
  .el-collapse-item__wrap {
    padding-left: $inner-size;
  }
</style>
