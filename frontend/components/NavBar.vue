<template>
  <div class="bg-gray-600 h-16">
    <div class="grid grid-cols-3 gap-2 container mx-auto">
      <div class="flex h-16 md:col-span-2 col-span-1">
        <div class="mr-2 relative">
          <logo></logo>
        </div>
        <div
          class="self-center mr-4 md:block hidden"
          v-for="(item, index) in urls"
          :key="index"
        >
          <NuxtLink
            class="py-4 hover:border-b-4 hover:border-yellow-500"
            :to="localePath(item.url)"
          >
            <span class="text-xl text-white hover:text-green-550">{{
              $t(item.title)
            }}</span>
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
import Logo from './svg/Logo.vue'
export default {
  components: { Logo },
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
}
</script>
