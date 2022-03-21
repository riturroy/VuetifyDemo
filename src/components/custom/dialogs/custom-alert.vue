<template>
  <v-alert border="top" dismissible :type="type" :value="alert"
  transition="scale-transition">
    {{ message }}
  </v-alert>
</template>
<script>
export default {
  props: {
    message: String,
    type: String,
  },
  data(){
      return{
          alert: false
      }
  },
  methods:{
      show(){
          this.alert = true;
          setTimeout(()=>{
              this.alert = false;
          }, 4000);
      }
  }
};
</script>
<style scoped>
.v-alert{
    position: fixed;
    top: 80px;
    right: 10px;
    z-index: 9;
    min-width: 40%;
}
</style>
