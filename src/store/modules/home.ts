import { defineStore } from 'pinia'
import { http } from '@/utils/request'

// 如果引进的是类型一定要加上type
import type { CategoryList } from '@/types'

export const useHomeStore = defineStore('home', {
  state() {
    return {
      categoryList: [] as CategoryList
    }
  },
  getters: {},
  actions: {
    async getAllCategory() {
      const res = await http<CategoryList>('GET', '/home/category/head')
      console.log('res:', res)
      this.categoryList = res.data.result
    }
  }
})
