<template>
  <div>
    <h1>{{hello}}</h1>
  </div>
</template>

<script setup name="Index">
const hello = ref('欢迎!')

function goTarget () {
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 50px;
  text-align: center;
}
</style>

