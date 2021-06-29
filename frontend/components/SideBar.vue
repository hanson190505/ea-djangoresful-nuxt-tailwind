<template>
  <div class="shadow-xl" v-show="isShow" @mouseleave="isShow = false">
    <ul class="bg-gray-600 pt-1" v-for="(item, index) in urls" :key="index">
      <li class="hover:bg-green-450 pl-2 py-1 pr-4 w-32">
        <NuxtLink class="" :to="localePath(item.url)">
          <span class="block text-x text-white">{{ $t(item.title) }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urls: [
        { title: 'links.home', url: '/' },
        { title: 'links.product', url: '/products' },
        { title: 'links.support', url: '/support' },
        { title: 'links.about', url: '/about' },
        { title: 'links.blog', url: '/blog' },
      ],
      isShow: false,
    }
  },
}
</script>
