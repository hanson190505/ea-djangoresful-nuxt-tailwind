export default async (context, locale) => {
  // let _l = await context.$axios.$get("/product/", {
  //   params: { is_hot: 1 },
  // });
  return await Promise.resolve({
    links: {
      home: '主页',
      product: '产品',
      support: '技术支持',
      about: '关于',
      blog: '博客',
      sitemap: '站点导航',
      contact: '联系我们',
      outlinks: '友情链接',
    },
    button: {
      learnMore: '了解更多',
    },
  })
}
