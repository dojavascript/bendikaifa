<template>
  <div>
    <svg-icon icon-class="question" @click="goto" />
  </div>
</template>

<script setup>
const url = ref('javascript:void(0)');

function goto() {
  window.open(url.value)
}
</script>