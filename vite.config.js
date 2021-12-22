const { appConfig } = require("./package.json");
const tailwind = require("tailwindcss");
const postcssImport = require("postcss-import");
const autoPreprocess = require("svelte-preprocess");
const svelte = require("@sveltejs/vite-plugin-svelte");
const { port } = appConfig;
const production = process.env.NODE_ENV === "production";
module.exports = {
  server: {
    port: port,
  },
  build: {
    polyfillDynamicImport: false,
    cssCodeSplit: false,
    target: ["chrome61", "edge18", "es2019", "firefox60", "safari11"],
  },
  optimizeDeps: {
    exclude: ["@roxi/routify"],
  },
  resolve: {
    dedupe: ["@roxi/routify"],
  },
  define: {
    "process.env": process.env,
  },
  plugins: [
    svelte({
      preprocess: [
        autoPreprocess({
          postcss: {
            plugins: [
              tailwind({
                mode: "jit",
                darkMode: "class",
                future: {
                  removeDeprecatedGapUtilities: true,
                  purgeLayersByDefault: true,
                },
                theme: {
                  extend: {
                    zIndex: {
                      "-10": "-10",
                    },
                    screens: {
                      "3xl": "2200px",
                    },
                    width: {
                      120: "40rem",
                      "30p": "30%",
                    },
                    minWidth: {
                      25: "6.5rem",
                    },
                    padding: {
                      100: "30rem",
                    },
                    colors: {
                      primary: "#43989D",
                      secondary: "#F2FEFF",
                      secondaryLight: "#F1FEFF",
                      ematext: "#16355C",
                      ematextgray: "#677D8D",
                      ematextblue: "#274C67",
                      emaborder: "#80bfc2",
                      footer: "#F9F9F9",
                    },
                    fontFamily: {
                      mulish: "'Mulish', sans-serif",
                      poppins: "'Poppins', sans-serif",
                      lato: "'Lato', sans-serif",
                    },
                  },
                },
                plugins: [],
                purge: {
                  content: ["./src/**/*.svelte"],
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
};
