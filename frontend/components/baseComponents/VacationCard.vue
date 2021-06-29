<template>
  <div class="">
    <NuxtLink :to="localePath(url)" class="hover:underline">
      <div class="border hover:shadow-md">
        <img class="object-contain m-auto h-80" :src="img" :alt="imgAlt" />
      </div>
      <div class="mt-2 text-center">
        <div>
          <div class="text-xs text-gray-600 uppercase font-bold">
            {{ eyebrow }}
          </div>
          <div class="font-bold text-textColor leading-snug">
            {{ title }}
          </div>
          <div class="mt-2 text-sm text-gray-600">{{ pricing }}</div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['img', 'imgAlt', 'eyebrow', 'title', 'pricing', 'url'],
}
</script>
