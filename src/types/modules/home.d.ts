// 分类数据单项类型
export interface Goods {
  desc: string
  id: string
  name: string
  picture: string
  price: string
  title: string
  alt: string
}

export interface Children {
  id: string
  name: string
  picture: string
  goods: Goods[]
}

export interface Category {
  id: string
  name: string
  picture: string
  children: Children[]
  goods: Goods[]
}

// 分类数据列表类型
export type CategoryList = Category[]
