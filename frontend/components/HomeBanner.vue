<template>
  <div class="bg-gray-100 md:h-banner h-96 relative">
    <div
      class="h-full w-4/5 transform skew-x-12 bg-green-550 -ml-24 absolute"
    ></div>
    <div
      class="
        md:grid md:grid-cols-2 md:gap-4 md:justify-items-center
        absolute
        w-full
        h-full
      "
    >
      <div class="place-self-center ml-24 hidden md:block">
        <h1 class="text-2xl">EA - 专业音响制造</h1>
        <h1 class="text-5xl py-4 text-white">EA-100PRO</h1>
        <p class="text-xl pb-2">选择专业,选择行业标准,选择我们</p>
        <p>SEO描述性文字SEO描述性文字SEO描述性文字</p>
        <p>SEO描述性文字SEO描述性文字SEO描述性文字SEO描述性文字</p>
        <button
          class="
            bg-blue-300
            text-white
            rounded-xl
            p-1
            px-2
            mt-3
            hover:bg-blue-500
            focus:outline-none
          "
        >
          {{ $t(learnMore) }}
        </button>
      </div>
      <div class="">
        <img
          class="object-contain m-auto md:h-full h-96"
          src="https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      learnMore: 'button.learnMore',
    }
  },
}
</script>
