<script setup lang="ts">
import { onMounted } from 'vue'

import instance from './utils/request'

onMounted(async () => {
  const res = await instance({
    url: '/home/index'
  })
  // console.log('res:', res)
})
</script>

<template>
  <div>
    <!-- <ul>
      <li><RouterLink to="/">去首页</RouterLink></li>
      <li><RouterLink to="/login">去登录页</RouterLink></li>
    </ul> -->
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped></style>
