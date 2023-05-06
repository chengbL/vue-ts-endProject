<template>
  <div class="xtx-numbox">
    <div class="label" v-if="isLabel">数量</div>
    <div class="numbox">
      <a href="javascript:;" @click="des">-</a>
      <input type="text" readonly :value="num" />
      <a href="javascript:;" @click="add">+</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  isLabel: {
    type: Boolean,
    default: false,
  },
  max: {
    type: Number,
  },
  min: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    required: true,
  },
});

interface Emit {
  (e: "update:modelValue", value: number): void;
  (e: "change", value: number): void;
}
const emit = defineEmits<Emit>();
// 实现增减逻辑
// 1.声明一个响应式num数据
// 2.实现点击之后的增减逻辑
// 3.把响应式num绑定到value属性上

// 实现通过传入props控制最大最小值
// 1. 声明俩个prop 一个最大一个最小
// 2. 在增减函数中添加限制逻辑

const num = ref(props.min);
function add() {
  if (num.value === props.max) {
    return false;
  }
  num.value++;
  // 通过触发自定义事件 把最新的num值抛出去
  // 自定义事件名称为: update:modelValue
  emit("update:modelValue", num.value);
  emit("change", num.value);
}

function des() {
  if (num.value === props.min) {
    return false;
  }
  num.value--;
  // 通过触发自定义事件 把最新的num值抛出去
  emit("update:modelValue", num.value);
  emit("change", num.value);
}

// 监听modelValue的变化 每次变化之后 我们都把当前最新的值同步到num
watch(
  () => {
    return props.modelValue;
  },
  () => {
    num.value = props.modelValue;
  },
  {
    // 一上来就先同步一次
    immediate: true,
  }
);
</script>

<style scoped lang="less">
.xtx-numbox {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;
      &:first-of-type {
        border-right: 1px solid #e4e4e4;
      }
      &:last-of-type {
        border-left: 1px solid #e4e4e4;
      }
    }
    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
    }
  }
}
</style>
