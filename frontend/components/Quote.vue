<template>
  <div class="bg-green-450 my-2 shadow-lg">
    <div class="container mx-auto p-3">
      <div>
        <p class="text-xl textColor">{{ $t(quote) }}</p>
        <p class="pb-2 textColor">
          Email:<a href="mailto:saleschinagoodgifts@gmail.com" target="_bank"
            >saleschinagoodgifts@gmail.com</a
          >
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-4 grid-cols-2">
        <textarea
          :placeholder="$t(formTrans.message)"
          required
          v-model="form.msg"
          rows="2"
          class="
            p-1
            md:col-span-3
            col-span-2
            focus:outline-none focus:ring focus:border-blue-300
            rounded-sm
          "
        ></textarea>
        <input
          type="email"
          :placeholder="$t(formTrans.email)"
          required
          v-model="form.email"
          class="
            p-1
            focus:outline-none focus:ring focus:border-blue-300
            rounded-sm
          "
        />
        <input
          type="text"
          required
          :placeholder="$t(formTrans.name)"
          v-model="form.name"
          class="
            p-1
            rounded-sm
            focus:outline-none focus:ring focus:border-blue-300
          "
        />
        <input
          type="text"
          required
          :placeholder="$t(formTrans.company)"
          v-model="form.company"
          class="
            p-1
            rounded-sm
            focus:outline-none focus:ring focus:border-blue-300
          "
        />
        <input
          type="text"
          required
          :placeholder="$t(formTrans.phone)"
          v-model="form.phone"
          class="
            p-1
            rounded-sm
            focus:outline-none focus:ring focus:border-blue-300
          "
        />
        <select
          class="p-1 focus:outline-none focus:ring focus:border-blue-300"
          v-model="form.categorySelected"
        >
          <option value="null">{{ $t(formTrans.select) }}</option>
          <option value="EA-100P">EA-100P</option>
          <option value="EA-100S">EA-100S</option>
          <option value="EA-100A">EA-100A</option>
          <option value="EA-200">EA-200</option>
        </select>
        <button class="p-1 bg-blue-300 hover:bg-blue-500 text-white rounded-sm">
          {{ $t(quote) }}
        </button>
      </div>
      <p class="text-xs py-2">{{ $t(formTrans.prompt) }}</p>
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
        msg: '',
        email: '',
        name: '',
        company: '',
        phone: '',
        categorySelected: null,
      },
      quote: 'button.quote',
      formTrans: {
        message: 'form.message',
        email: 'form.email',
        name: 'form.name',
        company: 'form.company',
        phone: 'form.phone',
        select: 'form.select',
        prompt: 'form.prompt',
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
