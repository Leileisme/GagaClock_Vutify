/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
// 引入套件，他套件有 "main": "strict.particles.js" 所以直接引入
import 'strict-particles-js'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(pinia)
    .use(router)
}
