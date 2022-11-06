import tr from "vuetify/es5/locale/tr";
import colors from "vuetify/lib/util/colors";

export default {
    target: "static",
    components: true,
    generate: { fallback: "404.html" },
    server: {
        host: process.env.HOST,
        port: process.env.PORT
    },
    head: {
        titleTemplate: `%s - ${process.env.APP_NAME}`,
        title: process.env.APP_NAME,
        meta: [
            { charset: "UTF-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                name: "robots",
                content: "index, follow"
            },
            {
                name: "format-detection",
                content: "telephone=no"
            },
            {
                name: "msapplication-tap-highlight",
                content: "no"
            },
            {
                name: "twitter:card",
                content: "summary"
            },
            {
                name: "twitter:site",
                content: "@ozgurg0"
            },
            {
                name: "twitter:creator",
                content: "@ozgurg0"
            },
            {
                "http-equiv": "X-UA-Compatible",
                "content": "ie=edge"
            }
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            },
            {
                rel: "dns-prefetch",
                href: "https://firebaseinstallations.googleapis.com"
            },
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: ""
            }
        ]
    },
    buildModules: [
        "@nuxtjs/dotenv",
        "@nuxtjs/eslint-module",
        "@nuxtjs/vuetify",
        "@nuxtjs/svg"
    ],
    modules: [
        "@nuxtjs/pwa",
        "@nuxtjs/sitemap",
        [
            "nuxt-canonical",
            {
                baseUrl: process.env.APP_URL,
                trailingSlashes: true
            }
        ]
    ],
    router: {
        trailingSlash: true
    },
    build: {
        indicator: false,
        extractCSS: {
            ignoreOrder: true
        }
    },
    css: [
        "@/assets/scss/style.scss"
    ],
    plugins: [
        "@/plugins/firebase.client.js",
        "@/plugins/vue-clipboard2.client.js",
        "@/plugins/vue-disqus.client.js",
        "@/plugins/vue-html2canvas.client.js",
        "@/plugins/number-directive.client.js"
    ],
    loading: {
        color: process.env.APP_PRIMARY_COLOR,
        failedColor: colors.red.base,
        throttle: 600
    },
    vuetify: {
        customVariables: ["@/assets/scss/vuetify-customization.scss"],
        treeShake: true,
        defaultAssets: {
            font: {
                family: "Rubik"
            },
            icons: false
        },
        lang: {
            locales: { tr },
            current: "tr"
        },
        theme: {
            defaultAssets: false,
            dark: true,
            options: {
                variations: false
            },
            themes: {
                dark: {
                    primary: process.env.APP_PRIMARY_COLOR,
                    secondary: process.env.APP_SECONDARY_COLOR
                }
            }
        },
        icons: {
            iconfont: "mdiSvg"
        }
    },
    sitemap: {
        hostname: process.env.APP_URL,
        gzip: true,
        defaults: {
            changefreq: "monthly",
            priority: 1,
            lastmod: new Date()
        }
    },
    pwa: {
        meta: {
            theme_color: process.env.APP_PRIMARY_COLOR
        },
        manifest: {
            name: process.env.APP_NAME,
            short_name: process.env.APP_NAME,
            lang: "tr"
        }
    },

    // Disable unused Nuxt features
    loadingIndicator: false,
    fetch: {
        client: false,
        server: false
    },
    features: {
        middleware: false,
        transitions: false,
        deprecations: false,
        validate: false,
        asyncData: false,
        fetch: false,
        clientOnline: false,
        clientPrefetch: false,
        clientUseUrl: true,
        componentAliases: false,
        componentClientOnly: false
    }
};
