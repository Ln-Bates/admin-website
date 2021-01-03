<template>
  <simple-view>
    <el-form :label-position="labelPosition"
             :label-width="labelWidth">
      <template v-for="item in formList">
        <template v-if="item.hide !== true">
          <el-form-item v-if="itemType(item).isComponent"
                        :key="item.prop">
            <template v-slot:label>
              <form-label :item="item"/>
            </template>
            <component v-model="val[item.prop]"
                       v-bind="dynamicProp(item)"
                       :is="item.type"></component>
          </el-form-item>
          <el-form-item v-else-if="itemType(item).isJustText"
                        :key="item.prop">
            <template v-slot:label>
              <form-label :item="item"/>
            </template>
            {{text(item)}}
          </el-form-item>
          <el-form-item v-else-if="itemType(item).isSlot"
                        :key="item.prop">
            <template v-slot:label>
              <form-label :item="item"/>
            </template>
            <slot :name="item.prop"/>
          </el-form-item>
        </template>
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
  import FormSelectDefault from 'components/form-select/select-default';
  // import FormSelectSearch from 'components/form-select/select-search';
  import FormCheckbox from 'components/form-checkbox/index';
  import FormSwitch from 'components/form-switch/index';
  import FormInputDefault from 'components/form-input/input-default';
  import FormInputFloat from 'components/form-input/input-float';
  import FormInputInt from 'components/form-input/input-int';
  import FormInputPassword from 'components/form-input/input-password';
  // import FormInputSearch from 'components/form-input/input-search';
  import FormLabel from './label';
  import TwoWay from 'mixins/two-way';
  import {EMPTY_PLACEHOLDER} from 'utils/constant';

  export default {
    name: 'form-container',
    components: {
      DatePicker,
      DateRange,
      FormRadio,
      FormSelectDefault,
      // FormSelectSearch,
      FormCheckbox,
      FormSwitch,
      FormInputDefault,
      FormInputFloat,
      FormInputInt,
      FormInputPassword,
      // FormInputSearch,
      FormLabel
    },
    props: {
      formList: {
        type: Array,
        default() {
          return [];
        }
      },
      labelPosition: {
        type: String,
        default: 'right'
      },
      labelWidth: {
        type: String,
        default: 'auto'
      }
    },
    mixins: [TwoWay],
    methods: {
      isSomeType(item, type) {
        return item.type === type && item.hide !== true;
      },
      dynamicProp(item) {
        const {type, disabled} = item;
        const commonProps = {
          disabled
        };
        const propsMap = {
          'date-picker': {},
          'date-range': {},
          'form-switch': {},
          'form-radio': {
            options: item.options
          },
          'form-checkbox': {
            options: item.options
          },
          'form-select-default': {
            options: item.options
          },
        };
        return {
          ...commonProps,
          ...propsMap[type],
          ...item.config
        };
      },
      itemType(item) {
        const notComponent = ['show', 'slot'];
        const isType = type => {
          return item.type === type;
        };
        return {
          isComponent: !notComponent.includes(item.type),
          isJustText: isType('show'),
          isSlot: isType('slot')
        };
      },
      text(item) {
        let text = this.val[item.prop];
        if (!text && text !== 0) {
          text = EMPTY_PLACEHOLDER;
        }
        return text;
      }
    },
  };
</script>

<style scoped>
</style>
