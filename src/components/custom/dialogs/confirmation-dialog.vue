<template>
  <v-dialog :value="dialog" scrollable max-width="60%" persistent>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text style="max-height: 70vh;">
        {{ content }}
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="onConfirm">
          {{yesText}}
        </v-btn>
        <v-btn color="blue darken-1" text @click="onCancel"> {{noText}} </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
    props:{
        title: String,
        content: String,
        yesText:{
          type: String,
          default: "Ok"
        },
        noText:{
          type: String,
          default:"Cancel"
        }
    },
  methods:{
      show(){
          this.dialog = true;
      },
      hide(){
          this.dialog = false;
      },
      onConfirm(){
        this.dialog = false;
      },
      onCancel(){
        this.dialog = false
      }
  },
  data() {
    return {
        dialog: false
      };
  },
};
</script>
