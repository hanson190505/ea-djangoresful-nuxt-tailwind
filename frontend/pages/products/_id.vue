<template>
  <div>
    <div class="container mx-auto px-2">
      <div class="my-2">
        <NuxtLink class="" :to="localePath('/products/')">
          <span class="text-x text-gray-300 hover:text-green-550">
            {{ $t(links.product) }}
          </span>
        </NuxtLink>
        <span> > EA-100PRO</span>
      </div>
      <hr />
      <div class="md:px-32 mt-8">
        <h1 class="text-5xl">EA-100PRO</h1>
        <h2 class="text-2xl">Portable powered column system</h2>
        <ul class="text-xl mt-6 list-disc ml-6">
          <li>Mix your show like a pro</li>
          <li>Optimize every detail of your sound</li>
          <li>Room-filling coverage</li>
          <li>Super-quick setup</li>
          <li>Single-trip portability</li>
          <li>Available in black or white</li>
        </ul>
        <p class="my-6">
          Superior Electro-Voice sound quality coupled with the most complete
          feature set in its class – the perfect combination of performance and
          flexible functionality, in a very compact package The EVOLVE 30M is
          designed to deliver a significant step up in all-around performance
          for a column system in its size/price category. It includes an
          eight-channel digital mixer, studio-quality onboard effects, and
          remote control of all audio, effects and mix functions via the
          next-generation Electro-Voice QuickSmart Mobile application
        </p>
      </div>
      <div>
        <img
          class="object-contain m-auto"
          src="https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png"
          alt=""
        />
      </div>
      <div class="mb-4">
        <h1 class="text-2xl text-center bg-green-550 text-white">
          More Information
        </h1>
        <div class="grid grid-cols-2 my-2 py-1">
          <p class="">Frequency response (-3 dB)1</p>
          <p class="justify-self-end">51 Hz to 20 KHz</p>
        </div>
        <div class="grid grid-cols-2 my-2 py-1 bg-gray-200">
          <p class="">Frequency range (-10 dB)1</p>
          <p class="justify-self-end">5 Hz to 20 KHz</p>
        </div>
        <div class="grid grid-cols-2 my-2 py-1">
          <p class="">Maximum SPL2</p>
          <p class="justify-self-end">123 dB</p>
        </div>
      </div>
      <div>
        <iframe
          src="//player.bilibili.com/player.html?aid=931346685&bvid=BV1TM4y1g78r&cid=359974456&page=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
          class="md:w-3/4 md:h-96 m-auto"
        >
        </iframe>
      </div>
    </div>
    <Quote />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        product: 'links.product',
      },
    }
  },
}
</script>
