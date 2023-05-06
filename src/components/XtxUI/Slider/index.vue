<template>
  <div class="box" style="height: 500px">
    <div class="xtx-slider" @mouseenter="clearTimer" @mouseleave="startTimer">
      <!-- 图片列表 -->
      <ul class="slider-body">
        <!--
          fade: 当fade类名存在 当前图片就显示 不存在就不显示
        -->
        <li
          class="slider-item"
          v-for="(item, i) in sliders"
          :key="i"
          :class="{ fade: curIndex === i }"
        >
          <img :src="item.imgUrl" alt="" />
        </li>
      </ul>
      <!-- 圆圈切换按钮 -->
      <div class="slider-indicator">
        <span
          v-for="(item, index) in sliders"
          :key="index"
          @click="curIndex = index"
          :class="{ active: curIndex === index }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
  目标：点击圆圈按钮 实现对应图片的切换
  思路：
    1. 图片和圆圈按钮数量是一样的 下标值是对应的
    2. 记录一下当前点击的是哪一项
    3. 需要根据记录下来的下标值 去配合:class 控制fade这个类名是否应该显示
 */

/**
    目标：图片的自动轮播功能
    思路：哪个数据变化决定了图片切换？ 从之前手动修改curIndex的值 变成一个自动修改 每隔几秒修改一下
        计时器  setInterval

 */

/**
    目标：鼠标移入暂停播放 鼠标移除再次开启
    思路：暂停 - 清除定时器  定时器id  开启 - 再执行一次定时器

 */
import { onMounted, onUnmounted, ref, type PropType } from "vue";

interface Slider {
  imgUrl: string;
}

const props = defineProps({
  // 数据列表
  sliders: {
    type: Array as PropType<Slider[]>,
    default: () => [],
  },
  autoPlay: {
    type: Boolean,
    default: true,
  },
});

const curIndex = ref(0);
// 声明一个存放定时器的数据
const timer = ref(-1);
function clearTimer() {
  window.clearInterval(timer.value);
}
function startTimer() {
  // 开启定时器  每隔2s中修改一下curIndex的值
  initLoop();
}

function initLoop() {
  if (!props.autoPlay) return false;
  // 开启定时器  每隔2s中修改一下curIndex的值
  timer.value = window.setInterval(() => {
    // 最大能到多大
    // 图片总数为4：length - 1为3 只要我发现你大于3了
    // 我就会重新赋值为 0 ,永远不能到达4 最大只能等于3
    curIndex.value++;
    if (curIndex.value > props.sliders.length - 1) {
      curIndex.value = 0;
    }
  }, 2000);
}
onMounted(() => {
  initLoop();
});
onUnmounted(() => {
  // 清理工作
  clearInterval(timer.value);
});
</script>

<style scoped lang="less">
.xtx-slider {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .slider {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .slider-btn {
      opacity: 1;
    }
  }
}
</style>
