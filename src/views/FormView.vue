<template>
  <div class="form-view">
    <h4>User Form</h4>
    <form-inputs />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FormInputs from "../components/custom/custom-form.vue";

export default Vue.extend({
  name: "FormPage",

  components: {
    FormInputs
  },
});
</script>
