import { defineStore } from 'pinia'
// import instance from '@/utils/request'
import { http } from '@/utils/request'
import type { CategoryList } from '@/types'

export const useHomeStore = defineStore('home', {
  //  state 对应 vue2 的 data
  state() {
    return {
      categoryList: [] as CategoryList
    }
  },
  //  state 对应 vue2 的 computed
  getters: {},

  //  state 对应 vue2 的 methods
  actions: {
    async getAllCategory() {
      const res = await http<CategoryList>('GET', '/home/category/head')
      this.categoryList = res.data.result
    }
  }
})
