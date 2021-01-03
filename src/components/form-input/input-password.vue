<template>
  <el-input v-model="val"
            :disabled="disabled === true"
            :max="max"
            :min="min"
            :maxlength="maxlength"
            :minlength="minlength"
            :prefix="prefix"
            :suffix="suffix"
            :placeholder="placeholder"
            :prefix-icon="prefixIcon"
            :suffix-icon="suffixIcon"
            :clearable="clearable"
            :show-word-limit="showWordLimit"
            :show-password="showPassword"
            type="password"
            autocomplete="off"
            auto-complete="off"
  >
    <template slot="append" v-if="append">{{append}}</template>
    <template slot="prepend" v-if="prepend">{{prepend}}</template>
  </el-input>
</template>

<script>
  import FormCommonProps from 'mixins/form-common-props';
  import InputCommonProps from 'mixins/form-common-props/input';

  export default {
    name: 'form-input-password',
    mixins: [FormCommonProps, InputCommonProps],
    props: {
      showPassword: {
        type: Boolean,
        default: true
      }
    }
  };
</script>

<style scoped>
</style>

