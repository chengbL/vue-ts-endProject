<template>
  <!-- 决定组件的宽高 -->
  <div
    class="xtx-skeleton shan"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <!-- 决定组件的背景色 -->
    <div class="block" :style="{ backgroundColor: bg }"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  // 宽度定制
  width: {
    type: Number,
    default: 100,
  },
  // 高度定制
  height: {
    type: Number,
    default: 60,
  },
  // 背景颜色定制
  bg: {
    type: String,
    default: "#ccc",
  },
});
</script>

<style scoped lang="less">
.xtx-skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shan {
  &::after {
    content: "";
    position: absolute;
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>
