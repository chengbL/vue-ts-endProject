<script setup lang="ts">
// setup语法糖才可以引入组件后自动注册
// import Button from '@/components/XtxUI/Button/index.vue'
// import Skeleton from '@/components/XtxUI/Skeleton/Skeleton.vue'
// import { XtxButton, XtxSkeleton } from '@/components/XtxUI/index'
</script>

<template>
  <div>
    <XtxButton type="primary" size="large">我是你奶奶</XtxButton>
    <XtxSkeleton :height="30" :width="100" bg="pink"></XtxSkeleton>
  </div>
</template>

<style lang="less" scoped></style>
