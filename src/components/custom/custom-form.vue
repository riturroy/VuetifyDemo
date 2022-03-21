<template>
  <div id="app">
    <v-app id="inspire">
      <v-card :loading="isUpdating">
        <template v-slot:progress>
          <v-progress-linear
            absolute
            color="green lighten-3"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-form v-model="valid" ref="form">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="firstText"
                  :disabled="isUpdating"
                  :rules="firstTextRules"
                  :counter="10"
                  label="First text"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="secondText"
                  :disabled="isUpdating"
                  :rules="firstTextRules"
                  :counter="10"
                  label="Second text"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="email"
                  :disabled="isUpdating"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-textarea
                  outlined
                  :disabled="isUpdating"
                  :rules="textareaRules"
                  v-model="textarea"
                  name="input-7-4"
                  label="textarea"
                  required
                  :counter="250"
                ></v-textarea>
              </v-col>

              <v-col cols="12" md="12">
                <p>Checkbox: {{ checkboxes.join(",") }}</p>
                <v-row class="light--text">
                  <v-col cols="6" md="12" class="d-flex">
                    <v-checkbox
                      v-for="department in simpleCheckboxes"
                      :key="department"
                      class="mr-2"
                      v-model="checkboxes"
                      :label="department"
                      :value="department"
                    >
                    </v-checkbox>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="12">
                  <p>Radio Button: {{ radioBtn }}</p>
                  <v-radio-group v-model="radioBtn" row mandatory>
                    <v-radio
                      v-for="radioBtn in radioBtns"
                      :key="radioBtn"
                      :label="radioBtn"
                      :value="radioBtn"
                    ></v-radio>
                  </v-radio-group>
              </v-col>
              
              <v-col cols="12" md="12">
                <p>Custom group button : {{ toggleExclusive }}</p>
                <v-btn-toggle v-model="toggleExclusive" multiple rounded mandatory>
                  <v-btn
                    v-for="department in simpleCheckboxes"
                    :key="department"
                    :value="department"
                  >
                    {{ department }}
                  </v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12">
                <p>Range Slider</p>
                <v-slider
                  v-model="rangeSlider"
                  :thumb-size="24"
                  thumb-label="always"
                  color="warning"
                  min="0"
                  max="30"
                ></v-slider>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="selectedPreferredLocation"
                  :rules="preferredLocationRules"
                  required
                  :items="states"
                  :menu-props="{ maxHeight: '400' }"
                  label="Multiselect dropdown"
                  multiple
                  hint="Pick upto 3 options"
                  persistent-hint
                ></v-select>
              </v-col>
              <v-col cols="12" md="12">
                <v-switch
                  v-model="switchBtn"
                  inset
                  :label="switchBtn?'ON':'OFF'"
                ></v-switch>
              </v-col>
              <v-col cols="12" md="12">
                <single-date-picker
                  v-model="startDate"
                  @clear="clearStartDate"
                  @change="setStartDate"
                  label="Single Date"
                  :min="minStartDate"
                  :max="maxStartDate"
                  required
                ></single-date-picker>
              </v-col>
              <v-col cols="12" md="12">
                <range-date-picker required></range-date-picker>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  v-model="detailedcheckboxes"
                  :disabled="isUpdating"
                  :items="checkboxeset"
                  filled
                  chips
                  label="checkboxes"
                  item-text="name"
                  item-value="name"
                  multiple
                >
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      close
                      @click="data.select"
                      @click:close="remove(data.item)"
                    >
                      {{ data.item.name }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <template v-if="typeof data.item !== 'object'">
                      <v-list-item-content
                        v-text="data.item"
                      ></v-list-item-content>
                    </template>
                    <template v-else>
                      <!-- <v-list-item-avatar>
                      <img :src="data.item.avatar">
                    </v-list-item-avatar>-->
                      <v-list-item-content>
                        <v-list-item-title
                          v-html="data.item.name"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          v-html="data.item.group"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </template>
                </v-autocomplete>
              </v-col>
              <!--<v-col cols="12">
                <v-autocomplete
                  v-model="model"
                  :items="items"
                  :loading="isLoading"
                  :search-input.sync="search"
                  hide-no-data
                  hide-selected
                  item-text="textarea"
                  item-value="API"
                  label="Public APIs"
                  placeholder="Start typing to Search"
                  prepend-icon="mdi-database-search"
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-expand-transition>
                  <v-list v-if="model" class="red lighten-3">
                    <v-list-item v-for="(field, i) in fields" :key="i">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="field.value"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          v-text="field.key"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-expand-transition>
              </v-col> -->
            </v-row>
          </v-container>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed @click="resetForm"> Reset </v-btn>
          <v-btn
            :disabled="isUpdating"
            :loading="isUpdating"
            depressed
            @click="onSave"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import moment from "moment";
import SingleDatePicker from "./form-inputs/single-date-picker.vue";
import RangeDatePicker from "./form-inputs/range-date-picker.vue";
export default {
  components: {
    SingleDatePicker,
    RangeDatePicker,
  },
  data() {
    const srcs = {
      1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    };

    return {
      valid: false,
      firstText: "",
      secondText: "",
      firstTextRules: [
        (v) => !!v || "First Text is required",
        (v) => v.length <= 10 || "First Text must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      textarea:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      textareaRules: [
        (v) => !!v || "textarea is required",
        (v) =>
          v.length >= 50 || "textarea must be greater than 50 characters",
        (v) =>
          v.length <= 250 || "textarea must be less than 250 characters",
      ],
      preferredLocationRules: [
        (v) => !!v || "Preffered location is required",
        (v) => v.length <= 3 || "Preffered location must be less than 3",
      ],
      startDate: new Date().toISOString().substr(0, 10),
      rangeDate: ["2022-01-10", "2022-09-20"],
      autoUpdate: true,
      detailedcheckboxes: ["HTML", "CSS/SCSS", "JavaScript"],
      simpleCheckboxes: ["Chk 1", "Chk 2", "Chk 3"],
      isUpdating: false,
      checkboxeset: [
        { header: "Design" },
        { name: "HTML", group: "Design", avatar: srcs[1] },
        { name: "CSS/SCSS", group: "Design", avatar: srcs[2] },
        { name: "Photoshop", group: "Design", avatar: srcs[3] },
        { divider: true },
        { header: "Programming" },
        { name: "JavaScript", group: "Programming", avatar: srcs[4] },
        { name: "React & Redux", group: "Programming", avatar: srcs[5] },
        { name: "Angular", group: "Programming", avatar: srcs[1] },
        { name: "Vue", group: "Programming", avatar: srcs[3] },
      ],
      toggleExclusive: [],
      entries: [],
      model: null,
      search: null,
      isLoading: false,
      checkboxes: [],
      radioBtns: ["Radio1", "radio2"],
      radioBtn: "Radio1",
      min: -50,
      max: 90,
      range: [-20, 70],
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
      selectedPreferredLocation: [],
      rangeSlider: 12,
      switchBtn: false,
    };
  },
  computed: {
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map((key) => {
        return {
          key,
          value: this.model[key] || "n/a",
        };
      });
    },
    items() {
      return this.entries.map((entry) => {
        const textarea =
          entry.textarea && entry.textarea.length > this.textareaLimit
            ? entry.textarea.slice(0, this.textareaLimit) + "..."
            : entry.textarea;

        return Object.assign({}, entry, { textarea });
      });
    },
    minStartDate() {
      return moment().add(1, "day").toISOString();
    },
    maxStartDate() {
      return moment().add(3, "months").toISOString();
    },
  },
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
    search(val) {
      // Items have already been loaded
      if (this.entries.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch(`https://api.publicapis.org/entries?category=${val || ""}`)
        .then((res) => res.json())
        .then((res) => {
          const { count, entries } = res;
          this.count = count;
          this.entries = entries;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },

  methods: {
    remove(item) {
      const index = this.detailedcheckboxes.indexOf(item.name);
      if (index >= 0) this.detailedcheckboxes.splice(index, 1);
    },
    resetForm() {
      this.$refs.form.reset();
    },
    clearStartDate() {
      this.startDate = null;
    },
    setStartDate(event) {
      this.startDate = event;
    },
    clearRangeDate() {
      this.rangeDate = null;
    },
    setRangeDate(event) {
      console.log(event);
      this.rangeDate = event;
    },
    onSave(){
      this.isUpdating = true
      this.$refs.form.validate();
    }
  },
};
</script>
