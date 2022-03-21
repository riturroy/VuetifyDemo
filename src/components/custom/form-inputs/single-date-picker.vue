<template>
    <v-row>
      <v-col
        cols="12"
        lg="6"
      >
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
             prepend-icon="mdi-calendar"
              :value="computedDateFormattedMomentjs"
              clearable
              :label="label"
              readonly
              v-bind="attrs"
              v-on="on"
              @click:clear="clearDate"
            ></v-text-field>
          </template>
          <v-date-picker
            :value="value"
            :min="min"
            :max="max"
            color="green lighten-1"
           @change="onDateChange"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
</template>

<script>
  import moment from 'moment'

  export default {
  props:["value", "label", "min", "max"],
    data: () => ({
      menu: false,
    }),

    computed: {
      computedDateFormattedMomentjs () {
        return this.value ? moment(this.value).format('dddd, MMMM Do YYYY') : ''
      }
    },
    methods:{
        clearDate(){
            this.$emit("clear");
        },

        onDateChange($event){
            this.menu = false;
            this.$emit("change", $event);
        }
    }
  }
</script>