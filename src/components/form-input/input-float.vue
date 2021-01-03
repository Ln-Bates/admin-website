<template>
  <el-input v-model="val"
            v-input:float
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
  >
    <template slot="append" v-if="append">{{append}}</template>
    <template slot="prepend" v-if="prepend">{{prepend}}</template>
  </el-input>
</template>

<script>
  import FormCommonProps from 'mixins/form-common-props';
  import InputCommonProps from 'mixins/form-common-props/input';

  export default {
    name: 'form-input-float',
    mixins: [FormCommonProps, InputCommonProps],
  };
</script>

<style scoped>
</style>
