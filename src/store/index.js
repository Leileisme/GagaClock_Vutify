// Utilities
import { createPinia } from 'pinia'
// 儲存 local Storage 的套件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
