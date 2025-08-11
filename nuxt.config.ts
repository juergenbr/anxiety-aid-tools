// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: process.env.VITE_BASE_URL //  || 'http://localhost:3000'
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

  imports: {
    dirs: ["./stores"],
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

  schemaOrg: {
    identity: 'Organization',
  },

  i18n: {
    baseUrl: 'https://anxietyaidtools.com',
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