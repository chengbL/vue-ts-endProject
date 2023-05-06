<template>
  <transition name="down">
    <div class="xtx-message" :style="style[type]" v-if="visible">
      <!-- 上面绑定的是样式 -->
      <i class="iconfont" :class="[icons[type]]"></i>
      <!-- 不同提示图标会变 -->
      <span class="text">{{ text }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref, type PropType } from "vue";
import type { StyleType } from "./index";
defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String as PropType<StyleType>,
    // warn 警告  error 错误  success 成功
    default: "warn",
  },
});

// 样式集合
const style = {
  warn: {
    color: "#E6A23C",
    backgroundColor: "rgb(253, 246, 236)",
    borderColor: "rgb(250, 236, 216)",
  },
  error: {
    color: "#F56C6C",
    backgroundColor: "rgb(254, 240, 240)",
    borderColor: "rgb(253, 226, 226)",
  },
  success: {
    color: "#67C23A",
    backgroundColor: "rgb(240, 249, 235)",
    borderColor: "rgb(225, 243, 216)",
  },
};

// 图标类名集合
const icons = {
  warn: "icon-warning",
  error: "icon-shanchu",
  success: "icon-queren2",
};

// 控制显隐让过渡生效
// 虽然直接是在mounted钩子函数中做状态的修改
// 但是模板区域的div依旧存在从不显示到显示的状态切换
const visible = ref(false); // 隐藏
onMounted(() => {
  visible.value = true;
});
</script>

<style scoped lang="less">
.xtx-message {
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  i {
    margin-right: 4px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
}

// .down-enter-from{}  // 元素进入到dom结构中之前要渲染的类名
// .down-enter-active{} // 元素从不显示到显示进入中状态时显示的类名  (定义给哪些属性应用过渡  过渡的总时长)
// .down-enter-to{} // 元素进入到dom结构中之后要渲染的类名

// 俩个必要条件
// 1. transtion内置组件包裹  name
// 2. 通过v-if/v-show/控制显示和隐藏

.down {
  &-enter {
    // 进入前 在正常文档流的基础上往上移动75px 并且透明度为零完全透明
    &-from {
      transform: translate3d(0, -75px, 0);
      opacity: 0;
    }
    // 进入中 对所有的可以支持过滤效果的样式都应用过渡效果 整个过渡时长是0.5s
    &-active {
      transition: all 0.5s;
    }
    // 进入后 恢复到正常状态
    &-to {
      transform: none;
      opacity: 1;
    }
  }
}
</style>
