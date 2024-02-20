// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  ssr: false,

  devtools: {
    enabled: false
  },

  colorMode: {
    preference: 'light'
  },
  
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg',
          href: '/logo.svg'
        }
      ]
    }
  },

  runtimeConfig: {
    // apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      baseURL: 'http://localhost:3000'
    }
  },

  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },

  components: [
    {
      path: './components',
      extensions: ['.vue'],
      pathPrefix: false
    }
  ],

  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],
  
  css: [
    '@/assets/scss/main.scss'
  ],

  tailwindcss: {
    cssPath: ["@/assets/scss/main.css", { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: true,
    config: {
      plugins: [tailwindTypography]
    },
    viewer: true,
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/tools.scss" as *;'
        }
      }
    }
  },
})
