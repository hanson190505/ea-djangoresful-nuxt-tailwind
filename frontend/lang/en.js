export default async (context, locale) => {
  // let _l = await context.$axios.$get("/product/", {
  //   params: { is_hot: 1 },
  // });
  return await Promise.resolve({
    links: {
      home: 'Home',
      product: 'Products',
      support: 'Support',
      about: 'About',
      blog: 'Blog',
      sitemap: 'SiteMap',
      contact: 'Contact',
      outlinks: 'Links',
    },
    button: {
      learnMore: 'Learn More',
      quote: 'Request A Quote',
    },
    form: {
      message: 'Enter your message',
      email: 'Enter your email',
      name: 'Enter your name',
      company: 'Enter your company',
      phone: 'Enter your phone',
      select: 'Please select product',
      prompt:
        'Your personal information is only used so that we can respond to you in a timely manner, we do not store or disclose your personal information!',
    },
  })
}
