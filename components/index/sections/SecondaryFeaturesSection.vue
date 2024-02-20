<script setup>
import { ref, computed } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const tabItems = computed(() => {
  return [
    {
      title: "Advanced Reporting",
      subtitle: "Stay on top of your hiring process.",
      text: "With our real-time reporting features, you can track progress, measure success, and refine your strategy.",
      icon: `
        <svg aria-hidden="true" class="h-9 w-9" fill="none">
          <defs>
            <linearGradient id="linearGradientAnalyticsIcon" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse">
              <stop offset=".194" stop-color="#fff"></stop>
              <stop offset="1" stop-color="#6692F1"></stop>
            </linearGradient>
          </defs>
          <path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#linearGradientAnalyticsIcon)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      `,
      imgSrc: "/images/secondary_features/profit-loss.png",
    },
    {
      title: "Candidate Management",
      subtitle: "Never lose track of your talent pool.",
      text: "Our robust tracking system ensures you always know where every candidate stands in your recruitment pipeline.",
      icon: `
        <svg aria-hidden="true" class="h-9 w-9" fill="none">
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          ></path>
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          ></path>
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          ></path>
        </svg>
      `,
      imgSrc: "/images/secondary_features/inventory.png",
    },
    {
      title: "Integrated Contacts",
      subtitle: "Organize your recruitment network",
      text: "Consolidate all your candidate details, hiring managers, and recruitment documentation in one easy-to-access place.",
      icon: `
        <svg aria-hidden="true" class="h-9 w-9" fill="none">
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          ></path>
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          ></path>
        </svg>
      `,
      imgSrc: "/images/secondary_features/contacts.png",
    },
  ]
})
</script>

<template>
  <section
    id="secondary-features"
    aria-label="Features for simplifying everyday hiring tasks"
    class="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl md:text-center">
        <h2
          class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Simplify everyday hiring tasks.
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700">
          HireData is designed to streamline your recruitment operations,
          freeing you to focus on securing top talent.
        </p>
      </div>
      <div
        class="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden"
      >
        <div v-for="(tabItem, i) in tabItems" :key="i">
          <div class="mx-auto max-w-2xl">
            <div class="w-9 rounded-lg bg-hd-secondary-400">
              <span v-html="tabItem.icon" />
            </div>
            <h3 class="mt-6 text-sm font-medium text-hd-secondary-600">
              {{ tabItem.title }}
            </h3>
            <p class="mt-2 font-display text-xl text-slate-900">
              {{ tabItem.subtitle }}
            </p>
            <p class="mt-4 text-sm text-slate-600">
              {{ tabItem.text }}
            </p>
          </div>
          <div class="relative mt-10 pb-10">
            <div
              class="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"
            ></div>
            <div
              class="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
            >
              <img
                alt=""
                loading="lazy"
                width="1688"
                height="856"
                decoding="async"
                data-nimg="1"
                class="w-full"
                style="color: transparent"
                sizes="52.75rem"
                :srcset="`
                  ${tabItem.imgSrc}   16w,
                  ${tabItem.imgSrc}   32w,
                  ${tabItem.imgSrc}   48w,
                  ${tabItem.imgSrc}   64w,
                  ${tabItem.imgSrc}   96w,
                  ${tabItem.imgSrc}  128w,
                  ${tabItem.imgSrc}  256w,
                  ${tabItem.imgSrc}  384w,
                  ${tabItem.imgSrc}  640w,
                  ${tabItem.imgSrc}  750w,
                  ${tabItem.imgSrc}  828w,
                  ${tabItem.imgSrc} 1080w,
                  ${tabItem.imgSrc} 1200w,
                  ${tabItem.imgSrc} 1920w,
                  ${tabItem.imgSrc} 2048w,
                  ${tabItem.imgSrc} 3840w
                `"
                :src="`${tabItem.imgSrc}`"
              />
            </div>
          </div>
        </div>
      </div>

      <TabGroup
        v-slot="{ selectedIndex }"
        as="div"
        class="hidden lg:mt-20 lg:block"
      >
        <TabList class="grid grid-cols-3 gap-x-8">
          <div
            v-for="(tabItem2, ii) in tabItems"
            :key="ii"
            class="relative"
            :class="{
              'opacity-75 hover:opacity-100': selectedIndex !== ii,
            }"
          >
            <div
              class="w-9 rounded-lg"
              :class="{
                'bg-hd-secondary-400': selectedIndex === ii,
                'bg-slate-500': selectedIndex !== ii,
              }"
            >
              <svg v-if="ii === 0" aria-hidden="true" class="h-9 w-9" fill="none">
                <defs>
                  <linearGradient
                    id="linearGradientAnalyticsIcon2"
                    x1="11.5"
                    y1="18"
                    x2="36"
                    y2="15.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".194" stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#6692F1"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                  stroke="url(#linearGradientAnalyticsIcon2)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span v-else v-html="tabItem2.icon" />
            </div>
            <h3
              class="mt-6 text-sm font-medium"
              :class="{
                'text-hd-secondary-600': selectedIndex === ii,
                'text-slate-600': selectedIndex !== ii,
              }"
            >
              <Tab class="ui-not-focus-visible:outline-none">
                <span class="absolute inset-0"></span>
                {{ tabItem2.title }}
              </Tab>
            </h3>
            <p class="mt-2 font-display text-xl text-slate-900">
              {{ tabItem2.subtitle }}
            </p>
            <p class="mt-4 text-sm text-slate-600">
              {{ tabItem2.text }}
            </p>
          </div>
        </TabList>
        <TabPanels
          v-slot="{ selectedIndex }"
          as="div"
          class="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16"
        >
          <div class="-mx-5 flex">
            <TabPanel
              v-for="(tabItem3, iii) in tabItems"
              :key="iii"
              :static="true"
              as="div"
              class="px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none"
              :style="`transform: translateX(-${selectedIndex > 0 ? selectedIndex + '00' : selectedIndex}%)`"
              :class="{
                'opacity-60': selectedIndex !== iii,
              }"
            >
              <div
                class="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
              >
                <img
                  alt=""
                  loading="lazy"
                  width="1688"
                  height="856"
                  decoding="async"
                  data-nimg="1"
                  class="w-full"
                  style="color: transparent"
                  sizes="52.75rem"
                  :srcset="`
                    ${tabItem3.imgSrc}   16w,
                    ${tabItem3.imgSrc}   32w,
                    ${tabItem3.imgSrc}   48w,
                    ${tabItem3.imgSrc}   64w,
                    ${tabItem3.imgSrc}   96w,
                    ${tabItem3.imgSrc}  128w,
                    ${tabItem3.imgSrc}  256w,
                    ${tabItem3.imgSrc}  384w,
                    ${tabItem3.imgSrc}  640w,
                    ${tabItem3.imgSrc}  750w,
                    ${tabItem3.imgSrc}  828w,
                    ${tabItem3.imgSrc} 1080w,
                    ${tabItem3.imgSrc} 1200w,
                    ${tabItem3.imgSrc} 1920w,
                    ${tabItem3.imgSrc} 2048w,
                    ${tabItem3.imgSrc} 3840w
                  `"
                  :src="`${tabItem3.imgSrc}`"
                />
              </div>
            </TabPanel>
          </div>
          <div
            class="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10"
          ></div>
        </TabPanels>
      </TabGroup>
    </div>
  </section>
</template>

<style scoped></style>
