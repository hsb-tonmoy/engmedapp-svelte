const { appConfig } = require('./package.json')
const tailwind = require('tailwindcss')
const postcssImport = require('postcss-import')
const autoPreprocess = require('svelte-preprocess')
const svelte = require('@sveltejs/vite-plugin-svelte')
const { port } = appConfig
const production = process.env.NODE_ENV === 'production'
module.exports = {
  server: {
    port: port,
  },
  build: {
    polyfillDynamicImport: false,
    cssCodeSplit: false,
    target: ['chrome61', 'edge18', 'es2019', 'firefox60', 'safari11'],
  },
  optimizeDeps: {
    exclude: ['@roxi/routify'],
  },
  resolve: {
    dedupe: ['@roxi/routify'],
  },
  plugins: [
    svelte({
      preprocess: [
        autoPreprocess({
          postcss: {
            plugins: [
              tailwind({
                mode: 'jit',
                darkMode: 'class',
                future: {
                  removeDeprecatedGapUtilities: true,
                  purgeLayersByDefault: true,
                },
                plugins: [],
                purge: {
                  content: ['./src/**/*.svelte'],
                  enabled: production,
                },
              }),
              postcssImport,
            ],
          },
        }),
      ],
      emitCss: true,
      hot: !production,
    }),
  ],
}
