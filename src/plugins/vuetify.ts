import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import axios from 'axios';
import {API_ENDPOINT} from "../config";


Vue.use(Vuetify);
Vue.use({
    install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: API_ENDPOINT
    })
  }
})

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c'
        },
      },
    },
  })
  export default vuetify;