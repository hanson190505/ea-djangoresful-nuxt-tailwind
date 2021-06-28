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
  })
}
