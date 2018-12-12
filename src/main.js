import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import homePage from "./components/homePage";
import aboutUsPage from "./components/aboutUsPage";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {path: "/", component: homePage},
        {path: "/about", component: aboutUsPage}
    ],
    mode: "history"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router
}).$mount('#app')

