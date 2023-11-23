
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import "./assets/font.css";
import uiComponents from '@/ui-components'

const app = createApp(App)

uiComponents.map((component) => {
    app.component(component.name, component);
})
app.use(router)

app.mount('#app')
