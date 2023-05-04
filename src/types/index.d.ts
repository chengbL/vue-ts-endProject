// 统一导入导出
export * from './modules/home'

// .js     正常 js 代码
// .d.ts   类型声明代码,declare,声明,取首字母d作为文件后缀
//         .d.ts都是用来声明类型的，
//         因为ts的类型(枚举类型除外，会生成真正的JS代码)，编译成js之后，不会保留下来
//         所以 .d.ts的代码，在真正编译上线后，不会生成任何文件

// .ts     js + 类型声明代码
