<script setup lang="ts">
import { RouterLink } from 'vue-router'
// 获取 Pinia 中的 home 模块，分类数据为 home.categoryList
import { useHomeStore } from '@/store'
const home = useHomeStore()
</script>

<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in home.categoryList" :key="item.id">
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <!-- vue2中 v-for的优先级比v-if要高，在vue3中恰恰相反，总之不管是v2还是v3都不建议v-if和v-for一起使用，除非使用template包裹 -->
        <template v-for="(curr, index) in item.children" :key="curr.id">
          <!-- 此处的v-if只是为了让 前两项渲染出来-->
          <RouterLink to="/" v-if="index < 2">{{ curr.name }}</RouterLink>
        </template>
        <!-- 弹层layer位置 -->
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
      .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 1);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;
        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;
          small {
            font-size: 16px;
            color: #666;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;
            &:nth-child(3n) {
              margin-right: 0;
            }
            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;
              &:hover {
                background: #e3f9f4;
              }
              img {
                width: 95px;
                height: 95px;
              }
              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;
                .name {
                  font-size: 16px;
                  color: #666;
                }
                .desc {
                  color: #999;
                }
                .price {
                  font-size: 22px;
                  color: @priceColor;
                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>
