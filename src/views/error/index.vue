<template>
  <div class="error-page">
    <div class="error-container">
      <h1>错误页面</h1>
      <img :src="errImg" alt="" class="err-img">
      <p>
        可以根据状态码来显示不同图片及提示语句
      </p>
    </div>
  </div>
</template>

<script>
  const errImg = require('@/assets/no-data.png');
  export default {
    data() {
      return {
        errImg
      };
    },
  };
</script>

<style lang="scss" scoped>
  .error-page {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }

    .err-img {
      display: block;
      width: 400px;
    }
  }
</style>
