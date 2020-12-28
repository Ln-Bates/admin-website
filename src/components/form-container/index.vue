<template>
  <simple-view>
    <el-form>
      <template v-for="item in formList">
        <el-form-item
          v-if="item.hide !== true"
          :label="item.label"
          :key="item.prop">
          <template v-if="isSomeType(item, 'date-picker')">
            <date-picker
              v-model="val[item.prop]"
              :disabled="item.disabled"/>
          </template>
          <template v-else-if="isSomeType(item, 'date-range')">
            <date-range
              v-model="val[item.prop]"
              :disabled="item.disabled"/>
          </template>
          <template v-else-if="isSomeType(item, 'radio')">
            <form-radio
              v-model="val[item.prop]"
              :disabled="item.disabled"
              :options="item.options"/>
          </template>
          <template v-else-if="isSomeType(item, 'checkbox')">
            <form-checkbox
              v-model="val[item.prop]"
              :disabled="item.disabled"
              :options="item.options"/>
          </template>
          <template v-else-if="isSomeType(item, 'select')">
            <form-select
              v-model="val[item.prop]"
              :disabled="item.disabled"
              :options="item.options"/>
          </template>
          <template v-else-if="isSomeType(item, 'switch')">
            <form-switch
              v-model="val[item.prop]"
              :disabled="item.disabled"/>
          </template>
        </el-form-item>
      </template>
    </el-form>
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
  import TwoWay from 'mixins/two-way';

  export default {
    name: 'form-container',
    components: {
      DatePicker,
      DateRange,
      FormRadio,
      FormSelect,
      FormCheckbox,
      FormSwitch,
    },
    props: {
      formList: {
        type: Array,
        default() {
          return [];
        }
      },
    },
    mixins: [TwoWay],
    methods: {
      isSomeType(item, type) {
        return item.type === type && item.hide !== true;
      }
    },
  };
</script>

<style scoped>

</style>
