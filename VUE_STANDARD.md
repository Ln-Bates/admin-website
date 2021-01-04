# VUE 规范

## Prop 定义

### 在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

```
bad
props: ['prop1', 'prop2']

good
props: {
  prop1: {
    type: String,
    default: ''
  },
  prop2: {
    type: String,
    required: true
  }
}
```

## Prop 与自定义事件 使用与定义

### Prop 与自定义事件 在子组件定义时应为小驼峰命名, 父组件传值时应为中划线分割-

```
bad
props: {
  someProp: {
    ...
  }
},
methods: {
  submit(){
    this.$emit('customEvent');
  }
}
<child someProp="xxx" @customEvent="event" />

good
props: {
  someProp: {
    ...
  }
},
methods: {
  submit(){
    this.$emit('custom-event');
  }
}
<child some-prop="xxx" @custom-event="event" />
```

## Template

### 指令 > 动态属性 > 普通属性 > 事件

```
<el-input
    v-model="inputModel"
    :min="1"
    class="custom-input"
    @change="onChange"
>
    新增类型
</el-input>
```

## 自定义标签

### 引入时应以大驼峰命名, 使用时应以中划线分割

```
<template>
  <custom-component />
</template>

import CustomComponent from './custom-component.vue';

components:{
  CustomComponent
}
```

## 组件样式作用域

### 可以防止污染全局样式

```
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
```
