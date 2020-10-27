export default {
    ssr: 'false',
    /*
     ** Headers of the page
     */
    head: {
        title: 'WebIDHunt | RoboMx Team',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Hunt your favourite username quickly. Use the search box to input your username and cross check availables ones with just one click. This project demonstrates the work of client first apps.' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{src: "@/plugins/pwa-custom.js"}],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/bulma',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        'nuxt-seo',
        '@nuxtjs/robots',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        proxy: true
    },
    robots: {
        Sitemap: 'https://webidhunt.robomx.tech/sitemap.xml'
    },
    sitemap: {
        routes() {
            [
                'https://webidhunt.robomx.tech/'
            ]
        },
        path: '/sitemap.xml',
        hostname: 'https://webidhunt.robomx.tech/',
        defaults: {
          changefreq: 'weekly',
          lastmod: new Date()
        }
      },
    /*
     ** Build configuration
     */
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}