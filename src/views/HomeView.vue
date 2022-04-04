<template>
  <div>
    <h3 class="text-center">Home Page</h3>
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
     <v-list-item>
      <v-list-item-content>
        <v-list-item-title>PWA enabled</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Login using keycloak</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    
    <p style="margin-top:32px">Features to add next: </p>
     <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Service and API call(with JWT token from keycloak in header)</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
     <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Additional components</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Etc...</v-list-item-title>
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
