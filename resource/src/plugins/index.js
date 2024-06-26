/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '@/router'
import pinia from '@/store'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(pinia)
    .use(router)
}
