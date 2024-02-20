<script setup>
const { data } = await useFetch("api/pricing")
</script>

<template>
  <section
    id="pricing"
    aria-label="Pricing"
    style="background-color: #0e142f"
    class="py-20 sm:py-32 font-sans"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <div class="md:text-center">
        <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
          <span class="relative whitespace-nowrap">
            <svg
              aria-hidden="true"
              viewBox="0 0 281 40"
              preserveAspectRatio="none"
              class="absolute left-0 top-1/2 h-[1em] w-full fill-hd-secondary-original"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
              ></path>
            </svg>
            <span class="relative">Maximizing value</span>
          </span>
          in every plan.
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          Explore our scalable recruitment solution with a 14-day free trial and
          a 30-day 100% money-back guarantee.
        </p>
      </div>
      <div
        class="-mx-4 mt-12 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"
      >
        <section
          v-for="(item, i) in data"
          :key="i"
          class="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8 font-extralight !text-[14px] text-base text-slate-400"
          :class="{
            'bg-hd-base-original/10 py-8 ring-1 ring-inset ring-white/10': item.is_popular
          }"
        >
          <div
            class="flex items-start"
          >
            <span
              v-if="item.is_popular"
              class="flex-initial w-15 grow-0 items-center rounded-full bg-slate-800 px-2 py-1 text-xs font-medium text-slate-400"
            >
              Most popular
            </span>
            <div
              v-else
              class="flex-initial w-15 grow-0"
            >
              &nbsp;
            </div>
          </div>
          <h3 class="mt-5 font-normal font-display text-lg text-white">
            {{ item.plan }}
          </h3>
          <p>{{ item.features[0] }}</p>
          <span class="mt-4 !text-[13px] text-base text-slate-400">
            Starting at
          </span>
          <div class="flex flex-column flex-nowrap shrink align-items-center font-normal font-display text-4xl tracking-tight text-white">
            <span class="flex-initial shrink w-auto">
              {{ item.currency + '' + item.price }}
            </span>
            <span class="flex-initial shrink w-2"></span>
            <span
              class="flex-initial shrink grow-0 font-extralight !text-[13px] text-base text-slate-400"
            >
              <div>per</div>
              <div>{{ item.per }}</div>
            </span>
          </div>
          <p>Billed {{ item.per }}ly based on usage</p>
          <ul
            role="list"
            class="order-last mt-3 flex flex-col gap-y-3 text-sm text-slate-200"
          >
            <p>This includes: </p>
            <li
              v-for="(feature, ii) in item.features"
              :key="ii"
              class="flex items-center"
            >
              <svg
                focusable="false"
                fill="#ffffff"
                color="#ffffff"
                fill-opacity="0.7"
                height="14"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-4">{{ feature }}</span>
            </li>
          </ul>
          <a
            class="group inline-flex items-center justify-center rounded-full py-3 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-hd-secondary text-hd-primary-950 active:bg-hd-secondary-200 active:text-hd-primary-950 focus-visible:outline-hd-secondary focus-visible:ring-offset-3 focus-visible:ring-hd-secondary focus-visible:ring-2 mt-3"
            variant="solid"
            color="hd-secondary"
            aria-label="Start trial with the Starter plan for $9"
            href="javascript:void(0)"
          >
            Start trial
          </a>
        </section>
        <!-- <section
          class="flex flex-col rounded-[3rem] px-6 sm:px-8 bg-hd-base-original/10 py-8 ring-1 ring-inset ring-white/10"
        >
          <h3 class="mt-5 font-display text-lg text-white">Small business</h3>
          <p class="mt-2 text-base text-white">
            Perfect for small / medium sized businesses.
          </p>
          <p
            class="order-first font-display text-5xl font-light tracking-tight text-white"
          >
            $15
          </p>
          <ul
            role="list"
            class="order-last mt-10 flex flex-col gap-y-3 text-sm text-white"
          >
            <li class="flex items-center">
              <svg
                focusable="false"
                fill="#ffffff"
                color="#ffffff"
                fill-opacity="0.7"
                height="14"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-4">Send 25 quotes and invoices</span>
            </li>
            <li class="flex items-center">
              <svg
                focusable="false"
                fill="#ffffff"
                color="#ffffff"
                fill-opacity="0.7"
                height="14"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-4">Connect up to 5 bank accounts</span>
            </li>
            <li class="flex items-center">
              <svg
                focusable="false"
                fill="#ffffff"
                color="#ffffff"
                fill-opacity="0.7"
                height="14"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-4">Track up to 50 expenses per month</span>
            </li>
            <li class="flex items-center">
              <svg
                focusable="false"
                fill="#ffffff"
                color="#ffffff"
                fill-opacity="0.7"
                height="14"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-4">Automated payroll support</span>
            </li>
            <li class="flex items-center">
              <svg
                focusable="false"
                fill="#ffffff"
                color="#ffffff"
                fill-opacity="0.7"
                height="14"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-4">Export up to 12 reports</span>
            </li>
            <li class="flex items-center">
              <svg
                focusable="false"
                fill="#ffffff"
                color="#ffffff"
                fill-opacity="0.7"
                height="14"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-4">Bulk reconcile transactions</span>
            </li>
            <li class="flex items-center">
              <svg
                focusable="false"
                fill="#ffffff"
                color="#ffffff"
                fill-opacity="0.7"
                height="14"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-4">Track in multiple currencies</span>
            </li>
          </ul>
          <a
            class="group inline-flex items-center justify-center rounded-full py-3 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-hd-secondary text-hd-primary-950 hover:bg-hd-secondary-50 active:bg-hd-secondary-200 active:text-hd-primary-950 focus-visible:outline-hd-secondary mt-8"
            variant="solid"
            color="hd-secondary"
            aria-label="Start trial with the Small business plan for $15"
            href="javascript:void(0)"
          >
            Start trial
          </a>
        </section> -->
      </div>
    </div>
  </section>
</template>

<style scoped></style>
