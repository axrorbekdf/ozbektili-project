import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/font.css"


import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import uiComponents from '@/ui-components'
import PrimeVue from 'primevue/config';

const app = createApp(App)

uiComponents.map((component) => {
    app.component(component.name, component);
})

app.use(store)
app.use(router)
app.use(PrimeVue);

app.mount('#app')
