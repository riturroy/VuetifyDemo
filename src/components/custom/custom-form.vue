<template>
  <div id="app">
    <v-app id="inspire">
      <v-card color="blue-grey darken-1" dark :loading="isUpdating">
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
                  v-model="firstname"
                  :disabled="isUpdating"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="lastname"
                  :disabled="isUpdating"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
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
                  :rules="descriptionRules"
                  v-model="description"
                  name="input-7-4"
                  label="Description"
                  required
                  :counter="250"
                ></v-textarea>
              </v-col>

              <v-col cols="12" md="12">
                <p>Division: {{ skills.join(",") }}</p>
                <v-row class="light--text">
                  <v-col cols="6" md="12" class="d-flex">
                    <v-checkbox v-for="department in departments" :key="department"
                      class="mr-2"
                      v-model="skills"
                      :label="department"
                      :value="department"
                    >
                    </v-checkbox>
                  </v-col>

                  <v-col cols="6" md="6">
                    <p>Gender: {{ gender }}</p>
                    <v-radio-group v-model="gender" row>
                      <v-radio
                        v-for="gender in genders"
                        :key="gender"
                        :label="gender"
                        :value="gender"
                        color="white"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-col>
        <v-col cols="12" md="12">
          <p>
            Department : {{ toggleExclusive }}
          </p>
        <v-btn-toggle
          v-model="toggleExclusive"
          multiple
          rounded
        >
          <v-btn v-for="department in departments" :key="department" :value="department">
            {{department}}
          </v-btn>
        </v-btn-toggle>
        </v-col>
              <v-col cols="12">
                <p>Experience</p>
                <v-slider
                  v-model="experience"
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
                  label="Preferred Location"
                  multiple
                  hint="Pick upto 3 preffered location"
                  persistent-hint
                ></v-select>
              </v-col>
              <v-col cols="12" md="12">
                <v-switch
                  v-model="relocate"
                  inset
                  label="Ready to relocate"
                ></v-switch>
              </v-col>
              <v-col cols="12" md="12">
                <single-date-picker
                  v-model="startDate"
                  @clear="clearStartDate"
                  @change="setStartDate"
                  label="Expected Start Date"
                  :min="minStartDate"
                  :max="maxStartDate"
                  required
                ></single-date-picker>
              </v-col>
               <v-col cols="12" md="12">
                <range-date-picker
                  required
                ></range-date-picker>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  v-model="detailedSkills"
                  :disabled="isUpdating"
                  :items="skillSet"
                  filled
                  chips
                  color="blue-grey lighten-2"
                  label="Skills"
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
                      <!-- <v-avatar left>
                      <v-img :src="data.item.avatar"></v-img>
                    </v-avatar> -->
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
              <v-col cols="12">
                <v-autocomplete
                  v-model="model"
                  :items="items"
                  :loading="isLoading"
                  :search-input.sync="search"
                  color="white"
                  hide-no-data
                  hide-selected
                  item-text="Description"
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
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-grey darken-3" depressed @click="resetForm">
            Reset
          </v-btn>
          <v-btn
            :disabled="isUpdating"
            :loading="isUpdating"
            color="blue-grey darken-3"
            depressed
            @click="isUpdating = true"
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
    RangeDatePicker
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
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      descriptionRules: [
        (v) => !!v || "Description is required",
        (v) =>
          v.length >= 50 || "Description must be greater than 50 characters",
        (v) =>
          v.length <= 250 || "Description must be less than 250 characters",
      ],
      preferredLocationRules: [
        (v) => !!v || "Preffered location is required",
        (v) => v.length <= 3 || "Preffered location must be less than 3",
      ],
      startDate: new Date().toISOString().substr(0, 10),
      rangeDate: ["2022-01-10", "2022-09-20"],
      autoUpdate: true,
      detailedSkills: ["HTML", "CSS/SCSS", "JavaScript"],
      departments:['Development', 'Management', 'Training'],
      isUpdating: false,
      skillSet: [
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
      toggleExclusive:[],
      entries: [],
      model: null,
      search: null,
      isLoading: false,
      skills: [],
      genders: ["Male", "Female"],
      gender: "Female",
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
      experience: 12,
      relocate: false,
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
        const Description =
          entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + "..."
            : entry.Description;

        return Object.assign({}, entry, { Description });
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
      const index = this.detailedSkills.indexOf(item.name);
      if (index >= 0) this.detailedSkills.splice(index, 1);
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
  },
};
</script>
