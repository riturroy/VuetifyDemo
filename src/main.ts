import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import AuthPlugin from "./plugins/authentication";

Vue.config.productionTip = false;
Vue.use(AuthPlugin);


Vue.prototype.$keycloak
  .init({ onLoad: 'login-required', checkLoginIframe: false })
  .then(() => {
    localStorage.setItem("vue-token", Vue.prototype.$keycloak.token)
    localStorage.setItem("vue-refresh-token", Vue.prototype.$keycloak.refreshToken)
    new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  })
  router.beforeEach((to, from, next) => {
    if (to.meta?.isAuthenticated) {
      // Get the actual url of the app, it's needed for Keycloak
      const va = Vue.prototype.$keycloak;
      console.log(va);
      const basePath = window.location.toString()
      if (!Vue.prototype.$keycloak.authenticated) {
        // The page is protected and the user is not authenticated. Force a login.
        Vue.prototype.$keycloak.login({ redirectUri: basePath.slice(0, -1) + to.path })
      } else if (Vue.prototype.$keycloak.hasRealmRole('view-app')) { // ideally be hasResourceRole
        // The user was authenticated, and has the app role
        Vue.prototype.$keycloak.updateToken(70)
          .then(() => {
            next()
          })
          .catch((err: any) => {
            console.error(err)
          })
      } else {
        // The user was authenticated, but did not have the correct role
        // Redirect to an error page
        next({ name: 'Unauthorized' })
      }
    } else {
      // This page did not require authentication
      next()
    }
  })