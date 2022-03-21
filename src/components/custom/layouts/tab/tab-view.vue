<template>
  <v-card>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>
            <custom-form v-if="tab === 0"></custom-form>
            <table-with-server-pagination
              v-else-if="tab === 1"
            ></table-with-server-pagination>

            <template v-else>
              {{ items[tab].content }}
            </template>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import CustomForm from "../custom-form.vue";
import TableWithServerPagination from "./table/table-with-server-pagination.vue";

export default {
  components: {
    CustomForm,
    TableWithServerPagination,
  },
  data() {
    return {
      tab: 0,
      items: [
        { tab: "Form", content: "Table 1 content" },
        { tab: "Table", content: "Table 2 content" },
        { tab: "Tab 3", content: "Tab 3 Content" },
        { tab: "Tab 4", content: "Tab 4 Content" },
      ],
    };
  },
};
</script>
