<template>
  <div>
    <div class="container mx-auto px-2">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
        <div v-for="(item, index) in products" :key="index">
          <vacation-card
            :img="item.img"
            :imgAlt="item.alt"
            :title="item.title"
            :url="'/products/' + item.id"
          ></vacation-card>
        </div>
      </div>
    </div>
    <Quote />
  </div>
</template>

<script>
import VacationCard from '~/components/baseComponents/VacationCard.vue'
export default {
  components: { VacationCard },
  data() {
    return {
      products: [
        {
          id: 1,
          img: 'https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png',
          alt: '',
          title: 'EA-100PRO',
        },
        {
          id: 2,
          img: 'https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png',
          alt: '',
          title: 'EA-100PRO',
        },
        {
          id: 3,
          img: 'https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png',
          alt: '',
          title: 'EA-100PRO',
        },
        {
          id: 4,
          img: 'https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png',
          alt: '',
          title: 'EA-100PRO',
        },
        {
          id: 5,
          img: 'https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png',
          alt: '',
          title: 'EA-100PRO',
        },
        {
          id: 6,
          img: 'https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png',
          alt: '',
          title: 'EA-100PRO',
        },
        {
          id: 7,
          img: 'https://cotem-sk.oss-cn-shenzhen.aliyuncs.com/WechatIMG8.png',
          alt: '',
          title: 'EA-100PRO',
        },
      ],
    }
  },
}
</script>
