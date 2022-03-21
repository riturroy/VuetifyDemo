<template>
  <div id="app">
    <v-app>
      <app-bar data-app="app" />
    </v-app>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppBarWithNavigationDrawer from "./components/custom/app-bar/app-bar-with-navigation-drawer.vue";

export default Vue.extend({
  name: "App",
  components: {
    "app-bar": AppBarWithNavigationDrawer,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin-top: 65px;
}
</style>
