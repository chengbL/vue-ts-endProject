<script setup lang="ts">
import AppTopnav from './components/app-topnav.vue'
import AppHeader from './components/app-header.vue'
import AppFooter from './components/app-footer.vue'
import AppHeaderSticky from './components/app-header-sticky.vue'
import { useHomeStore } from '@/store'
const home = useHomeStore()
home.getAllCategory()
</script>

<template>
  <!-- 顶部通栏组件 -->
  <AppTopnav></AppTopnav>

  <!-- 头部组件 -->
  <AppHeader></AppHeader>

  <!-- 固定的头部导航栏 -->
  <AppHeaderSticky></AppHeaderSticky>

  <!-- 二级路由出口 -->
  <router-view></router-view>

  <!-- 底部组件 -->
  <AppFooter></AppFooter>
</template>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
