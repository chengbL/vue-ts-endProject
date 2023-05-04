import { defineStore } from 'pinia'
import instance from '@/utils/request'
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
      const res = await instance({ url: '/home/category/head' })
      console.log('res:', res)
      this.categoryList = res.data.result
    }
  }
})
