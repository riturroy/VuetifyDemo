<template>
  <div>
    <card-wrapper
      title="Table"
      subtitle="With pagination, search, loading and API fetch"
      :image-src="imageSrc"
    >
      <table-with-server-pagination />
    </card-wrapper>

    <v-divider></v-divider>
    <v-spacer></v-spacer>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CardWrapper from "../components/custom/layouts/card/card-wrapper.vue";
import TableWithServerPagination from "../components/custom/layouts/table/table-with-server-pagination.vue";

export default Vue.extend({
  name: "HomePage",
  data(){
    return{
      imageSrc:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    }
  },

  components: {
    CardWrapper,
    TableWithServerPagination
  },
});
</script>
