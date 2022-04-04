import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import generateSitemap from 'vite-ssg-sitemap';
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VitePWA } from 'vite-plugin-pwa';
import Inspect from 'vite-plugin-inspect';
import CSS from 'unocss/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      $css: '~/styles/bundle.js',
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    Pages({
      extensions: ['vue'],
    }),
    Layouts(),
    vueJsx(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
    CSS(),
    Inspect(),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      generateSitemap();
    },
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
    exclude: [
      'vue-demi',
    ],
  },
});
