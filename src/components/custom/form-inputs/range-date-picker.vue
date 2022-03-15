<template>
  <v-row>
    <v-col cols="12" lg="6">
    <v-menu
          v-model="menu"
          :close-on-content-click="false"
          max-width="290"
        >
        <v-date-picker
            v-model="dates"
            clearable
            range
            color="green lighten-1"
            @change="onDateChange"
             @click:clear="dates = []"
        ></v-date-picker>
         <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-bind="attrs"
            v-on="on"
            v-model="dateRangeText"
            label="Date range"
            prepend-icon="mdi-calendar"
            readonly
        ></v-text-field>
    </template>

       </v-menu>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    dates: ["2019-09-10", "2019-09-20"],
    menu: false
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
  methods:{
    onDateChange(){
      this.menu = false;
      this.$emit("change", this.dates);
    }
  }
};
</script>
