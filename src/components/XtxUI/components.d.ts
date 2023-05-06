// components.d.ts
// !!为了在鼠标经过组件时会有足够清楚的类型提示
import {
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
} from './'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton
    XtxSlider: typeof XtxSlider
    XtxMore: typeof XtxMore
    XtxBread: typeof XtxBread
    XtxBreadItem: typeof XtxBreadItem
    XtxCity: typeof XtxCity
    XtxCount: typeof XtxCount
    XtxButton: typeof XtxButton
    XtxCheckBox: typeof XtxCheckBox
    XtxImageView: typeof XtxImageView
    XtxSku: typeof XtxSku
    XtxDialog: typeof XtxDialog
    XtxInfiniteLoad: typeof XtxInfiniteLoad
    XtxTabs: typeof XtxTabs
    XtxTabPane: typeof XtxTabPane
  }
}

export {}
