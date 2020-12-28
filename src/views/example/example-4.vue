<template>
  <simple-view>
    <el-collapse v-model="activeName"
                 accordion>
      <el-collapse-item title="时间选择"
                        name="1">
        <date-picker v-model="datePickerModel"/>
        {{datePickerModel}}
      </el-collapse-item>
      <el-collapse-item title="时间区间"
                        name="2">
        <date-range v-model="dateRangeModel"/>
        {{dateRangeModel}}
      </el-collapse-item>
      <el-collapse-item title="单选"
                        name="3">
        <form-radio :options="options" v-model="formRadioModel"/>
      </el-collapse-item>
      <el-collapse-item title="下拉"
                        name="4">
        <form-select :options="options" v-model="formSelectModel"/>
      </el-collapse-item>
      <el-collapse-item title="多选"
                        name="5">
        <form-checkbox v-model="formCheckboxModel" :options="options"/>
        {{formCheckboxModel}}
      </el-collapse-item>
      <el-collapse-item title="开关"
                        name="6">
        <form-switch v-model="formSwitchModel"/>
        {{formSwitchModel}}
      </el-collapse-item>
    </el-collapse>
    <template #footer-bar>
      <el-button>底部按钮</el-button>
      <el-button type="primary">底部按钮</el-button>
    </template>
  </simple-view>
</template>

<script>
  import DatePicker from 'components/form-date/date-picker';
  import DateRange from 'components/form-date/date-range';
  import FormRadio from 'components/form-radio/index';
  import FormSelect from 'components/form-select/index';
  import FormCheckbox from 'components/form-checkbox/index';
  import FormSwitch from 'components/form-switch/index';

  export default {
    components: {
      DatePicker,
      DateRange,
      FormRadio,
      FormSelect,
      FormCheckbox,
      FormSwitch,
    },
    data() {
      return {
        activeName: '1',
        datePickerModel: '',
        dateRangeModel: [],
        formRadioModel: '',
        formSelectModel: '',
        formCheckboxModel: [],
        formSwitchModel: true,
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
