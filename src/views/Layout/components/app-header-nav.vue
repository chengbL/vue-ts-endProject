<script setup lang="ts">
import { useHomeStore } from '@/store'
const home = useHomeStore()
home.getAllCategory()
</script>

<template>
  <div>
    <ul class="app-header-nav">
      <li class="home"><RouterLink to="/">首页</RouterLink></li>
      <template v-if="home.categoryList.length > 0">
        <li v-for="item in home.categoryList" :key="item.id">
          <a href="#">{{ item.name }}</a>
        </li>
      </template>
      <template v-else>
        <li v-for="i in 9" :key="i">
          <XtxSkeleton :width="38" :height="32" style="margin: 8px 5px 0 0" bg="rgba(0,0,0,0.2)" />
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      &:hover {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
  }
}
</style>
