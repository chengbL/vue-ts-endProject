/**
 * !!钩子函数，把对应的功能和方法挂钩，调用方法就实现对应的功能
 * *hooks:业务函数，涉及到业务/场景代码(ref,onMounted)，都放在 hooks 里面
 * *utils:工具函数，不涉及业务/场景代码，存放的都是js(ts)可以运行的代码
 */

// !!全局方法封装到hooks中
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// todo 图片懒加载  回调函数是封装在pinia中的请求方法，这个方法是没有返回值的
/*
把业务代码复制到 useObserver 方法内
把页面需要用到的数据 reutrn { target }
页面需要用到，就引进这个方法，并且调用，拿到target绑定到dom
    import { useObserver } from '@/hooks';
    const { target } = useObserver();
    <div class="home-new" ref="target">
优化项，把请求封装成函数传递，只传递方法名
*/
export const useObserver = (callback: () => void) => {
  const target = ref(null)
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      // 当目标元素进入可视区域时，才发送请求
      callback()

      // 请求已发送，主动停止检查
      stop()
    }
  })
  return { target }
}
