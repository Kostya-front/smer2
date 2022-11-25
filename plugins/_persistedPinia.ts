import { defineNuxtPlugin } from '#imports'
import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'
import { useCookie } from '#app'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

/**
 * The name of this plugin is started from underscore because it MUST be called before axios plugin.
 * Otherwise, store will not have the access to auth.token
 **/
const pinia = createPinia()
export default defineNuxtPlugin(nuxtApp => {
    pinia.use(piniaPluginPersistedstate)
})
