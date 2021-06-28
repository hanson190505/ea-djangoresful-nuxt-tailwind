<template>
  <div>
    <HomeBanner />
    <div class="md:grid md:grid-cols-2 md:gap-4 container mx-auto">
      <div class="h-96">
        <img
          class="object-contain h-full m-auto"
          src="https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png"
          alt=""
        />
      </div>
      <div class="place-self-center">
        <h1 class="text-2xl">产品参数</h1>
        <p class="tracking-wide leading-8">
          L1 Pro8 搬运更方便，设置更快捷。可提供宽广的覆盖范围，配备 8
          个铰接排列的 2 英寸钕磁铁扬声器单元，构成 C 形线性阵列。该阵列达到 180
          度水平覆盖范围，宽广的垂直扩散角度，观众无论坐着还是站着，都能听到清晰的音质，即使是位于中小型场所（例如咖啡厅）最角落的观众亦是如此。
          L1 Pro8 非常简单直观且易于设置，能够最佳地展现歌手/歌曲作者和 DJ
          才华，使您轻松投入演出。
        </p>
      </div>
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-4 container mx-auto">
      <div class="place-self-center hidden md:block p-2">
        <h1 class="text-2xl">产品参数</h1>
        <p class="tracking-wide leading-8">
          L1 Pro8 搬运更方便，设置更快捷。可提供宽广的覆盖范围，配备 8
          个铰接排列的 2 英寸钕磁铁扬声器单元，构成 C 形线性阵列。该阵列达到 180
          度水平覆盖范围，宽广的垂直扩散角度，观众无论坐着还是站着，都能听到清晰的音质，即使是位于中小型场所（例如咖啡厅）最角落的观众亦是如此。
          L1 Pro8 非常简单直观且易于设置，能够最佳地展现歌手/歌曲作者和 DJ
          才华，使您轻松投入演出。
        </p>
      </div>
      <div class="h-96">
        <img
          class="object-contain h-full m-auto"
          src="https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png"
          alt=""
        />
      </div>
      <div class="place-self-center md:hidden block p-2">
        <h1 class="text-2xl">产品参数</h1>
        <p class="tracking-wide leading-8">
          L1 Pro8 搬运更方便，设置更快捷。可提供宽广的覆盖范围，配备 8
          个铰接排列的 2 英寸钕磁铁扬声器单元，构成 C 形线性阵列。该阵列达到 180
          度水平覆盖范围，宽广的垂直扩散角度，观众无论坐着还是站着，都能听到清晰的音质，即使是位于中小型场所（例如咖啡厅）最角落的观众亦是如此。
          L1 Pro8 非常简单直观且易于设置，能够最佳地展现歌手/歌曲作者和 DJ
          才华，使您轻松投入演出。
        </p>
      </div>
    </div>
    <div class="bg-green-50">
      <div class="container mx-auto md:grid md:grid-cols-2 md:gap-4">
        <img
          width="500"
          class="object-contain m-auto p-2"
          src="https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/ea-art.jpg"
          alt=""
        />
        <div class="place-self-center p-2">
          <h1 class="text-5xl py-4">尽情释放你的才华</h1>
          <h1 class="text-3xl py-4">让EA伴你俘获观众的心</h1>
          <p>2022.06.06-2020.06.10</p>
          <p>全球音响展期待您的到来</p>
          <hr class="h-6" />
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
      </div>
    </div>
    <Quate />
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
