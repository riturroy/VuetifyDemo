<template>
  <v-card
    class="overflow-hidden"
  >
    <v-app-bar
      color="deep-purple"
      fixed
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Application title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="form">
            <v-list-item-icon>
              <v-icon>mdi-counter</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Forms</v-list-item-title>
          </v-list-item>

           <v-list-item to="about">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
     <v-card-text>
     <div class="container my-60 mx-auto">
     <router-view />
     </div>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>
<style scoped>
.container{
    margin-top: 65px;
    }
</style>