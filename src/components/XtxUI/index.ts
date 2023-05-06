// import Button from '@/components/XtxUI/Button/index.vue'
// import Skeleton from './Skeleton/Skeleton.vue'
// export const ChcButton = Button
// export const ChcSkeleton = Skeleton
import type { Plugin, App } from 'vue'
import XtxSkeleton from './Skeleton/Skeleton.vue'
import XtxSlider from './Slider/index.vue'
import XtxMore from './More/index.vue'
import XtxBread from './Bread/index.vue'
import XtxBreadItem from './Bread/Item.vue'
import XtxCity from './City/index.vue'
import XtxCount from './Count/index.vue'
import XtxButton from './Button/index.vue'
import XtxCheckBox from './CheckBox/index.vue'
import XtxImageView from './ImageView/index.vue'
import XtxSku from './Sku/index.vue'
import XtxDialog from './Dialog/index.vue'
import XtxInfiniteLoad from './InfiniteLoad/index.vue'
import XtxTabs from './Tabs/index.vue'
import XtxTabPane from './Tabs/pane.vue'

export {
  XtxSkeleton,
  XtxSlider,
  XtxMore,
  XtxBread,
  XtxBreadItem,
  XtxCity,
  XtxCount,
  XtxButton,
  XtxCheckBox,
  XtxImageView,
  XtxSku,
  XtxDialog,
  XtxInfiniteLoad,
  XtxTabs,
  XtxTabPane
}

// 全局注册  引入类型别名使用,不引用会导致因没有做类型约束而报错
const XtxUI: Plugin = {
  install(app: App) {
    app.component(`XtxSkeleton`, XtxSkeleton)
    app.component(`XtxSlider`, XtxSlider)
    app.component(`XtxMore`, XtxMore)
    app.component(`XtxBread`, XtxBread)
    app.component(`XtxBreadItem`, XtxBreadItem)
    app.component(`XtxImageView`, XtxImageView)
    app.component(`XtxCity`, XtxCity)
    app.component(`XtxSku`, XtxSku)
    app.component(`XtxCount`, XtxCount)
    app.component(`XtxButton`, XtxButton)
    app.component(`XtxCheckBox`, XtxCheckBox)
    app.component(`XtxDialog`, XtxDialog)
    app.component(`XtxTabs`, XtxTabs)
    app.component(`XtxTabPane`, XtxTabPane)
    app.component(`XtxInfiniteLoad`, XtxInfiniteLoad)
  }
}

export default XtxUI
