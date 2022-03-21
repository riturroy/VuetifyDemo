<template>
  <v-dialog :value="dialog" scrollable max-width="60%" persistent>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="min-height: 300px;max-height: 70vh;">
        <slot name="content"></slot>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
         <slot name="action-buttons"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
    props:{
        title: String,
        content: String
    },
  methods:{
      show(){
          this.dialog = true;
      },
      hide(){
          this.dialog = false;
      }
  },
  data() {
    return {
        dialog: false
      };
  },
};
</script>
