import { createApp } from 'vue'
import App from './App.vue'
import store from "@/vuex/store";
import components from "@/components/UI"
import directives from "@/directives";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive);
})

app
    .use(store)
    .mount('#app');
