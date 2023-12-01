import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/font.css"
import 'primevue/resources/themes/lara-light-green/theme.css'


import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import uiComponents from '@/ui-components'
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';

const app = createApp(App)

uiComponents.map((component) => {
    app.component(component.name, component);
})
app.component('Dropdown', Dropdown);
app.use(router)
app.use(store)
app.use(PrimeVue);

app.mount('#app')
