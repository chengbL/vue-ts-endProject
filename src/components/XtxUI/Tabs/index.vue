<template>
  <Tabs />
</template>

<script setup lang="tsx">
import { useSlots, toRefs, provide, type VNode } from "vue";
interface Emit {
  (e: "update:modelValue", value: string): void;
  (e: "tab-click", value: { tab: VNode; index: number }): void;
}
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
const slots = useSlots();
const emit = defineEmits<Emit>();
const { modelValue } = toRefs(props);
provide("activeName", modelValue);
const clickFn = (item: VNode, index: number) => {
  emit("update:modelValue", item.props?.name);
  emit("tab-click", { tab: item, index: index });
};
const Tabs = () => {
  const arr = (slots as any).default();
  const panels: VNode[] = [];
  arr.forEach((item: any) => {
    // 处理基本的写法，直接内部写 XtxTabPane
    // 以前写法，判断name：if (item.type.name === 'XtxTabsPanel') {
    // 现在写法，判断组件文件名
    if (item.type.__file?.includes("pane.vue")) {
      panels.push(item);
    } else {
      // 处理v-for的情况
      // 以前写法，判断name：if (item.children && item.children[0]?.type?.name === 'XtxTabPane') {
      // 现在写法，判断组件文件名
      if (
        item.children &&
        item.children[0]?.type.__file?.includes("pane.vue")
      ) {
        // 一个节点 => 7个panel
        item.children.forEach((panel: VNode) => {
          panels.push(panel);
        });
      }
    }
  });

  const navs = (
    <nav>
      {panels.map((item: VNode, index: number) => {
        return (
          <a
            class={{ active: props.modelValue === item.props?.name }}
            onClick={() => clickFn(item, index)}
            href="javascript:;"
          >
            {item.props?.label}
          </a>
        );
      })}
    </nav>
  );
  return <div class="xtx-tabs">{[navs, panels]}</div>;
};
</script>

<style lang="less">
.xtx-tabs {
  background: #fff;
  > nav {
    height: 60px;
    line-height: 60px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    > a {
      width: 110px;
      border-right: 1px solid #f5f5f5;
      text-align: center;
      font-size: 16px;
      &.active {
        border-top: 2px solid @xtxColor;
        height: 60px;
        background: #fff;
        line-height: 56px;
      }
    }
  }
}
</style>
