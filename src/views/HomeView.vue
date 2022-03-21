<template>
  <div class="text-center">
    <p>Home Page</p>
    <div>
    <p>Sample application with below features:</p>
     <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Vuetify</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Vue Router</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Basic Layouts and Components</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HomePage",
  components: {
  },
});
</script>
