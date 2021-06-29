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
      quote: '快速询价',
    },
    form: {
      message: '请输入您要咨询的详情',
      email: '请输入您的邮箱',
      name: '请输入您的姓名',
      company: '请输入您的公司',
      phone: '请输入您的电话',
      select: '请选择产品',
      prompt:
        '您的个人信息只是为了我们能及时的回复您,我们不会存储和外泄您的个人信息!',
    },
  })
}
