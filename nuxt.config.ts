// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/color-mode'
    ],

    colorMode: {
        classPrefix: "",
        classSuffix: ""
    },

    runtimeConfig: {
        public: {
            // api: "http://localhost:8000/api/v1",
            api: "https://api.fc.uzfi.uz/api/v1",
            // base: "http://localhost:8000",
            base: "https://api.fc.uzfi.uz",
        }
    }
});
