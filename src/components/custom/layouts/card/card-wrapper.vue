<template>
  <v-card
    class="mx-auto"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="imageSrc"
      v-if="imageSrc"
    >
      <v-card-title>{{title}}</v-card-title>
    </v-img>
    <v-card-title v-else>{{title}}</v-card-title>

    <v-card-subtitle class="pb-0">
      {{subtitle}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
     <slot></slot>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
   props:{
    title: String,
    subtitle: String,
    imageSrc: String
  }
  }
</script>