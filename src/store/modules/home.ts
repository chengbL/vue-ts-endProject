import { defineStore } from 'pinia'
import { http } from '@/utils/request'

// 如果引进的是类型一定要加上type
import type { CategoryList, BannerList, GoodsList } from '@/types'

export const useHomeStore = defineStore('home', {
  persist: true, //!!开启持久化
  state() {
    return {
      categoryList: [] as CategoryList,
      bannerList: [] as BannerList,
      newGoodsList: [] as GoodsList,
      hotGoodsList: [] as GoodsList
    }
  },
  getters: {},
  actions: {
    // 左侧分类
    async getAllCategory() {
      const res = await http<CategoryList>('GET', '/home/category/head')
      // console.log('res:', res)
      this.categoryList = res.data.result
    },

    // 右侧轮播图
    async getBannerList() {
      const res = await http<BannerList>('GET', '/home/banner')
      // console.log('res:', res)
      this.bannerList = res.data.result
    },

    // 新鲜好物
    async getNewGoodsList() {
      const res = await http<GoodsList>('GET', '/home/new', { limit: 4 })
      // console.log('res:', res)
      this.newGoodsList = res.data.result
    },

    // 人气推荐
    async getHotGoodsList() {
      const res = await http<GoodsList>('GET', '/home/hot')
      this.hotGoodsList = res.data.result
    }
  }
})
