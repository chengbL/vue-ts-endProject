<script setup lang="ts">
import { onMounted } from 'vue'

import instance from './utils/request'

onMounted(async () => {
  const res = await instance({
    url: '/home/index'
  })
  console.log('res:', res)
})
</script>

<template>
  <div>
    <h1>Hello vue3 + ts👍</h1>
  </div>
</template>

<style lang="less" scoped>
h1 {
  background-color: @warnColor;
  .hoverShadow();
}
</style>
