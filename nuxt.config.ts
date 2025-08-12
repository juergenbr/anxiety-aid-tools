import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/device",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
  ],
  ssr: true,
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: process.env.VITE_BASE_URL || 'https://anxietyaidtools.com'
    }
  },

  nitro: {
    preset: 'cloudflare-pages',
    compressPublicAssets: true,
    logLevel: 4,
    prerender: {
      autoSubfolderIndex: false
    }
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    viewer: true,
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  image: {
    provider: "ipx", // change to e.g 'vercel' if hosted on vercel
    quality: 80,
    format: ["png", "jpeg", "webp"],
  },

  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  site: {
    url: 'https://anxietyaidtools.com',
    name: 'Anxiety Aid Tools',
  },

  ogImage: {
    enabled: true,
    defaults: {
      component: 'NuxtSeo',
    },
  },

  seo: {
    meta: {
      ogImage: 'https://anxietyaidtools.com/og.png',
      twitterCard: 'summary_large_image',
    }
  },

  schemaOrg: {
    identity: 'Organization',
  },

  i18n: {
    baseUrl: 'https://anxietyaidtools.com',
    compilation: {
      strictMessage: false,
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        files: [
          'en/navigation.json',
          'en/techniques.json',
          'en/exercises.json',
          'en/pages.json',
          'en/meta.json'
        ]
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  },
  compatibilityDate: "2024-12-26",
});