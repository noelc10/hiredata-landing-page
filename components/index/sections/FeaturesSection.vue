<script setup>
import { ref, computed } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useResizeObserver } from '@vueuse/core'

const el = ref(null)
const orientation = ref('vertical')

const tabItems = computed(() => {
  return [
    {
      title: 'Unified Multi-Channel Communication',
      text: 'Manage all your recruitment conversations in one place, with our integrated inbox that supports web/chat, email, and WhatsApp for seamless interaction with candidates.',
      imgSrc: '/images/primary_features/steps.png',
    },
    {
      title: 'Recruitment Automation',
      text: 'Accelerate and streamline your hiring process with our robust automation, minimizing manual tasks and enabling you to focus on decision-making and strategic tasks.',
      imgSrc: '/images/primary_features/expenses.png',
    },
    {
      title: 'Customizable Workflows',
      text: 'Create and customize your recruitment workflows to ensure a smooth transition from one hiring stage to the next, improving efficiency and candidate experience.',
      imgSrc: '/images/primary_features/vat-returns.png',
    },
    {
      title: 'Data-Driven Analytics',
      text: 'Leverage our comprehensive, data-driven reports to gain valuable insights into your hiring process, helping you to make informed decisions and continually improve your recruitment strategy.',
      imgSrc: '/images/primary_features/reporting.png',
    }
  ]
})

useResizeObserver(el, (entries) => {
  const entry = entries[0]
  const { width } = entry.contentRect

  orientation.value = width > 1023 ? 'vertical' : 'horizontal'
})
</script>

<template>
  <section
    ref="el"
    id="features"
    aria-label="Features for running your books"
    class="relative overflow-hidden bg-hd-secondary-original pb-28 pt-20 sm:py-32"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
      <div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h2
          class="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Empower your recruitment with HireData
        </h2>
        <p class="mt-6 text-lg tracking-tight text-blue-100">
          With us, daily improvements in efficiency, quality of hires, and data-driven decisions are not just details - they are our promise.
        </p>
      </div>
      
      <TabGroup
        :vertical="orientation === 'vertical'"
        v-slot="{ selectedIndex }"
        as="div"
        class="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
      >
        <div class="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
          <TabList
            as="div"
            :aria-orientation="orientation"
            class="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
          >
            <div
              v-for="(tabItem, i) in tabItems"
              :key="i"
              class="group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6"
              :class="{
                'bg-hd-base-original lg:bg-hd-base-original/10 lg:ring-1 lg:ring-inset lg:ring-white/10': selectedIndex === i,
                'hover:bg-hd-base-original/10 lg:hover:bg-hd-base-original/5': selectedIndex !== i
              }"
            >
              <h3>
                <Tab
                  :aria-selected="selectedIndex === i"
                  :tabindex="selectedIndex === i ? '0' : '-1'"
                  class="font-display text-lg outline-none [&:not(:focus-visible)]:focus:outline-none"
                  :class="{
                    'text-hd-secondary-original lg:text-white': selectedIndex === i,
                    'text-blue-100 hover:text-white lg:text-white': selectedIndex !== i
                  }"
                >
                  <span
                    class="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"
                  ></span>
                  {{ tabItem.title }}
                </Tab>
              </h3>
              <p
                :class="{
                  'mt-2 hidden text-sm lg:block text-white': selectedIndex === i,
                  'mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white': selectedIndex !== i
                }"
              >
                {{ tabItem.text }}
              </p>
            </div>
          </TabList>
        </div>
        <TabPanels
          as="div"
          class="lg:col-span-7"
        >
          <TabPanel
            v-for="(tabItem, i) in tabItems"
            :key="i"
            as="div"
          >
            <div class="relative sm:px-6 lg:hidden">
              <div
                class="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-hd-base-original/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"
              ></div>
              <p
                class="relative mx-auto max-w-2xl text-hd-base text-white sm:text-center"
              >
                {{ tabItem.text }}
              </p>
            </div>
            <div
              class="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
            >
              <img
                onerror="this.setAttribute('data-error', 1)"
                alt="Unified Multi-Channel Communication"
                data-nuxt-img=""
                sizes="100vw"
                class="w-full"
                :src="tabItem.imgSrc"
                :srcset="`
                  ${tabItem.imgSrc}   768w,
                  ${tabItem.imgSrc} 1536w
                `"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </section>
</template>

<style scoped></style>
