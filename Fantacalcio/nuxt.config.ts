// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  css: [],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: ['@nuxtjs/supabase'],
  ssr: true,
  app: {
    head: {
      title: 'Fantacalcio',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      meta: [
        {
          charset: 'UTF-8',
        },
        {
          name: 'description',
          content:
            'Gioca al Fantacalcio, il gioco piu amato dagli italiani.',
        },
        {
          name: 'keywords',
          content:
            'fantacalcio, calcio, football, italia, serie a',
        },
        {
          name: 'author',
          content:
            'Daniele Cicala',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
      ],
    }
  },
});
