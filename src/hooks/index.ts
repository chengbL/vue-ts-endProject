// !!全局方法封装到hooks中
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// todo 图片懒加载
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
