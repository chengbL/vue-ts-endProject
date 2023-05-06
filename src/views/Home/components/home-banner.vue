<script setup lang="ts">
import { useHomeStore } from '@/store'

const home = useHomeStore()
home.getBannerList()
</script>

<template>
  <div class="home-banner">
    <XtxSlider :sliders="home.bannerList" auto-play v-if="home.bannerList.length > 0" />
    <XtxSkeleton :width="990" :height="500" bg="rgba(255,255,255,0.2)" v-else />
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 990px;
  height: 500px;
  position: absolute;
  left: 250px;
  top: 0;
  z-index: 98;
}
</style>
