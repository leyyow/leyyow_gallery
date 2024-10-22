/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import axios from "axios"
let token = window.sessionStorage.getItem("leyyow_token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Token ${token}`;
}

// Vue.prototype.$axios = axios;
// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.css";

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
