<template>
  <div class="bg-green-450">
    <div class="container mx-auto p-3">
      <div class="text-xl textColor">Request A Quate</div>
      <p class="pb-2 textColor">
        Email:<a href="mailto:saleschinagoodgifts@gmail.com" target="_bank"
          >saleschinagoodgifts@gmail.com</a
        >
      </p>
      <div class="grid md:grid-cols-6 gap-4 grid-cols-2">
        <input
          type="email"
          placeholder="Enter your email"
          required
          v-model="form.email"
          class="
            p-1
            col-span-2
            focus:outline-none focus:ring focus:border-blue-300
            rounded-sm
          "
        />
        <input
          type="text"
          required
          placeholder="Enter your name"
          v-model="form.name"
          class="p-1 col-span-2 rounded-sm"
        />
        <input
          type="text"
          required
          placeholder="Enter your company"
          v-model="form.company"
          class="col-span-2 p-1 rounded-sm"
        />
        <input
          type="text"
          required
          placeholder="Enter your phone"
          v-model="form.phone"
          class="col-span-2 p-1 rounded-sm"
        />
        <button
          class="
            col-span-2
            p-1
            bg-blue-300
            hover:bg-blue-500
            text-white
            rounded-sm
          "
        >
          Request a quate
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      disabled: false,
      form: {
        email: '',
        name: '',
        company: '',
        phone: '',
        categorySelected: null,
        capacitySelected: '4GB',
      },
    }
  },
  methods: {
    onSubmit() {
      this.disabled = true
      console.log(this.form)
    },
  },
})
</script>
<style scoped>
.quate-wraper {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  margin: 10px 0;
}
</style>
