<script setup lang="ts">
import HomePanel from './home-panel.vue'
import { useHomeStore } from '@/store'

import { useObserver } from '@/hooks'
const home = useHomeStore()

const { target } = useObserver(home.getHotGoodsList)
</script>

<template>
  <div class="home-hot" ref="target">
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <ul class="goods-list" v-if="home.hotGoodsList.length > 0">
        <li v-for="item in home.hotGoodsList" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>

      <ul class="goods-list" v-else>
        <li v-for="item in 4" :key="item">
          <XtxSkeleton :width="306" :height="406" bg="rgba(255,255,255,0.2)" />
        </li>
      </ul>
    </HomePanel>
  </div>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
