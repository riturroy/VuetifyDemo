<template>
  <div>
    <table-with-server-pagination />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TableWithServerPagination from "../components/custom/layouts/table/table-with-server-pagination.vue";

export default Vue.extend({
  name: "HomePage",
  data() {
    return {
      imageSrc: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    };
  },

  components: {
    TableWithServerPagination,
  },
});
</script>
