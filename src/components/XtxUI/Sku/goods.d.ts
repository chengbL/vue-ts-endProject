export interface Brand {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  picture: string;
}

interface Value {
  name: string;
  desc: string;
  picture?: string;
  selected?: boolean;
  disabled?: boolean;
}

export interface Spec {
  name: string;
  values: Value[];
}

export interface SkuSpec {
  name: string;
  valueName: string;
}

export interface Sku {
  id: string;
  skuCode: string;
  price: string;
  oldPrice: string;
  inventory: number;
  specs: SkuSpec[];
}

export interface Parent {
  id: string;
  name: string;
  layer: number;
  parent?: Parent;
}

export interface Category {
  id: string;
  name: string;
  layer: number;
  parent: Parent;
}

export interface Property {
  name: string;
  value: string;
}

export interface Detail {
  pictures: string[];
  properties: Property[];
}

export interface SimilarProduct {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  orderNum: number;
}

export interface HotByDay {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  orderNum: number;
}

export interface GoodsDetail {
  id: string;
  name: string;
  spuCode: string;
  desc: string;
  price: string;
  oldPrice: string;
  discount: number;
  inventory: number;
  brand: Brand;
  salesCount: number;
  commentCount: number;
  collectCount: number;
  videoScale: number;
  mainPictures: string[];
  specs: Spec[];
  skus: Sku[];
  categories: Category[];
  details: Detail;
  isPreSale: boolean;
  isCollect?: boolean;
  userAddresses?: any;
  similarProducts: SimilarProduct[];
  hotByDay: HotByDay[];
}

export interface IGoodsItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: number;
  ordernum?: number;
}

export interface Stock {
  skuId?: string;
  discount: number;
  isEffective: boolean;
  nowPrice: string;
  oldPrice: string;
  stock: number;
}
