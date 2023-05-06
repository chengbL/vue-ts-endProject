// 定义一个函数
import Message from "./index.vue";
import { createVNode, render } from "vue";

// 创建一个容器
const div = document.createElement("div");
document.body.appendChild(div);

export type StyleType = "warn" | "error" | "success";

interface Props {
  type?: StyleType;
  text?: string;
  time?: number;
}

export function message({ type = "warn", text = "", time = 2000 }: Props) {
  // 书写以函数形式调用组件的逻辑
  // 1. type text 将来会做为message的prop传入
  //    createVNode(Message, {type, text}) -> VNode对象
  // 2. 最终需要把Message组件显示到真实dom中
  //    render(VNode(Message), body下的直接子元素节点中)
  // 3. 俩秒钟之后消失
  //    setTimeout
  //    render(null,div)

  let timer = -1;
  const VNode = createVNode(Message, { type, text });
  render(VNode, div);
  clearTimeout(timer);
  timer = window.setTimeout(() => {
    // 销毁组件
    render(null, div);
  }, time);
}
