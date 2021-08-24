<template>
  <div class="toast" v-show="isShow">
    <div>{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast'
}
</script>

<style scoped>
.toast {
  position: fixed;
  width: 400px;
  height: 200px;
  background-color: #ccc;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 24px;
  text-align: center;
  line-height: 200px;
}
</style>
