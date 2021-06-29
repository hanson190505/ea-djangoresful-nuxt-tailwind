<template>
  <div class="bg-gray-600 h-16">
    <div class="grid grid-cols-3 gap-2 container mx-auto">
      <div class="flex h-16 md:col-span-2 col-span-1 items-center">
        <div class="mr-2 relative" @click="handleSidBarShow">
          <logo></logo>
          <side-bar ref="sideBar" class="absolute z-50 top-0 pt-14"></side-bar>
        </div>
        <div
          class="mr-4 md:block hidden"
          v-for="(item, index) in urls"
          :key="index"
        >
          <NuxtLink class="" :to="localePath(item.url)">
            <p class="text-xl text-white hover:text-green-550">
              {{ $t(item.title) }}
            </p>
          </NuxtLink>
        </div>
      </div>
      <div
        class="justify-self-end place-self-center pr-2 md:col-span-1 col-span-2"
      >
        <LangSelect />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'
import Logo from './svg/Logo.vue'
export default {
  components: { Logo, SideBar },
  data() {
    return {
      urls: [
        { title: 'links.home', url: '/' },
        { title: 'links.product', url: '/products' },
        { title: 'links.support', url: '/support' },
        { title: 'links.about', url: '/about' },
        { title: 'links.blog', url: '/blog' },
      ],
    }
  },
  methods: {
    handleSidBarShow() {
      this.$refs.sideBar.isShow = true
    },
  },
}
</script>
