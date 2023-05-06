// todo 分类数据单项类型
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

// 轮播图类型
export interface Banner {
  id: string
  imgUrl: string
  hrefUrl: string
  type: string
}

// 分类数据列表类型
export type CategoryList = Category[]

// 轮播图
export type BannerList = Banner[]
/*
  通过json2ts快速生成 ts 类型数据
  默认生成的是rootobject，需要自己手动改名
  生成的是接口类型对象，对于数组还需要手动拼凑
*/
// export interface Children {
//   id: string
//   name: string
//   picture: string
//   children?: any
//   goods?: any
// }

// export interface Good {
//   id: string
//   name: string
//   desc: string
//   price: string
//   picture: string
//   orderNum?: any
// }

// export interface RootObject {
//   id: string
//   name: string
//   picture: string
//   children: Children[]
//   goods: Good[]
// }
