<template>
  <div class="about">
    <v-row class="mt-8">
      <v-col
       cols="12"
        sm="12"
      >
       <v-tooltip bottom>
       <template v-slot:activator="{ on, attrs }">
         <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
          dark
           @click="openDialog"
        >
          Open Dialog
        </v-btn>
         </template>
        <span>  Open Dialog</span>
     </v-tooltip>
      </v-col>
       <v-col
       cols="12"
        sm="12"
      >
       <v-tooltip bottom>
       <template v-slot:activator="{ on, attrs }">
         <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
          dark
          @click="openConfirmationPopup"
        >
          Open Confirmation Popup
        </v-btn>
         </template>
        <span>  Open Confirmation Popup</span>
     </v-tooltip>
       </v-col>
        <v-col
       cols="12"
        sm="12"
      >
         <v-tooltip bottom>
       <template v-slot:activator="{ on, attrs }">
         <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
          dark
           @click="showSuccessAlert"
        >
          Show Success Alert
        </v-btn>
         <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
          dark
          style="margin-left: 16px"
           @click="showWarningAlert"
        >
          Show Warning Alert
        </v-btn>
         <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
          dark
          style="margin-left: 16px"
           @click="showFailureAlert"
        >
          Show Failure Alert
        </v-btn>
         </template>
        <span>Show Alert</span>
     </v-tooltip>
        </v-col>
    </v-row>
    <custom-alert :message="alertMessage" :type="alertType" ref="alert"></custom-alert>
    <custom-dialog ref="dialog" :title="dialogTitle" :content="dialogContent">
      <template v-slot:content>
         <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>
  </v-card>
      </template>
      <template v-slot:action-buttons>
         <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="onCancel">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="onSave"> Save </v-btn>
      </template>
    </custom-dialog>
    <confirmation-dialog ref="confirmationDialog" :title="confirmDialogTitle" :content="confirmDialogContent" yes-text="Yes!"></confirmation-dialog>
  </div>
</template>
<script>
import Vue from "vue";
import CustomAlert from "../components/custom/dialogs/custom-alert.vue";
import ConfirmationDialog from "../components/custom/dialogs/confirmation-dialog.vue";
import CustomDialog from "../components/custom/dialogs/custom-dialog.vue";


export default Vue.extend({
  name: "AboutMe",

  components: {
    CustomAlert,
    CustomDialog,
    ConfirmationDialog
  },
  data(){
    return{
      alertMessage: "This is a custom alert!!",
      alertType:"error",
      dialogTitle:"Dialog title",
      dialogContent:"Dialog Content",
      confirmDialogTitle: "Confirm Dialog",
      confirmDialogContent: `Are you sure want to perform this action?`
   
    }
  },
  methods:{
    openDialog(){
      this.$refs.dialog.show();
    },

    openConfirmationPopup(){
      this.$refs.confirmationDialog.show();
    },

    showSuccessAlert(){
      this.alertType="success";
      const alertRef = this.$refs.alert;
      alertRef.show();
    },

    showFailureAlert(){
      this.alertType="error";
      const alertRef = this.$refs.alert;
      alertRef.show();
    },

    showWarningAlert(){
      this.alertType="warning";
      const alertRef = this.$refs.alert;
      alertRef.show();
    },

    onCancel(){
      this.$refs.dialog.hide();
    },
    
    onSave(){
      this.$refs.dialog.hide();
    }
  }
});
</script>