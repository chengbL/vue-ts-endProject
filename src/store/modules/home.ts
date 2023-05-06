import { defineStore } from 'pinia'
import { http } from '@/utils/request'

// 如果引进的是类型一定要加上type
import type { CategoryList, BannerList } from '@/types'

export const useHomeStore = defineStore('home', {
  state() {
    return {
      categoryList: [] as CategoryList,
      bannerList: [] as BannerList
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
      console.log('res:', res)
      this.bannerList = res.data.result
    }
  }
})
