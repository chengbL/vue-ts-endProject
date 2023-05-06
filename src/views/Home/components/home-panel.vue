<script setup lang="ts">
// ts 泛型方式定义 props
defineProps<{
  title: string
  subTitle?: string
}>()
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
        <!-- 右侧内容区域 - 具名插槽 -->
        <slot name="right"></slot>
      </div>
      <!-- 主体内容区域 - 默认插槽 -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-panel {
  background-color: #fff;
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
