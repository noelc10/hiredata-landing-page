<script setup>
import { computed } from 'vue'
import { chunkData } from '@/utils/helpers'

const { data } = await useFetch("api/faq");
const chunkedData = computed(() => {
  return chunkData(JSON.parse(JSON.stringify(data?.value)), 10)
})
</script>

<template>
  <section
    id="faq"
    aria-labelledby="faq-title"
    class="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2
          id="faq-title"
          class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Frequently asked questions
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          If you can’t find what you’re looking for, email our support team and
          if you’re lucky someone will get back to you.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
      >
        <li
          v-for="(chunkedItem, i) in chunkedData"
          :key="i"
        >
          <ul role="list" class="flex flex-col gap-y-8">
            <li
              v-for="(chunkedItemData, ii) in chunkedItem"
              :key="ii"
            >
              <h3 class="font-display text-lg leading-7 text-slate-900">
                {{ chunkedItemData.question }}
              </h3>
              <p class="mt-4 text-sm text-slate-700" v-html="chunkedItemData.answer" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
