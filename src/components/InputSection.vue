<template>
    <!-- <v-form @submit.prevent="addItemFunc"
    ref="form"
    lazy-validation>
      <v-row>
        <v-col cols="12" md="10">
          <v-text-field
            v-model="inputs.name"
            label="Enter Name"
            full-width=true
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" md="10">
          <v-text-field v-model="inputs.url"
          label="Enter Url"
          required
          >
          </v-text-field>
        </v-col>
      </v-row>
          <v-btn
          depressed
          color="primary"
          @click.prevent="addItemFunc"
          >Primary</v-btn>
    </v-form> -->


    <v-form
    ref="form"
    lazy-validation
    @submit.prevent="addItemFunc"
  >
    <v-text-field
      v-model="inputs.name"
      label="Enter Name"
      required
    ></v-text-field>

    <v-text-field  
    v-model="inputs.url"
    label="E-mail"
    required>
     
    </v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      type="submit"
    >
      Submit
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="removeAllItems"
    >
      Clear All Tasks
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import {mapState, mapActions} from "pinia"
import { useUserStore } from "../store/user"

export default defineComponent({
  name:"InputSection",
  data() {
    return {
      inputs : reactive({name: "", url: "",id: 0})
    }
  },
  computed: {
    ...mapState(useUserStore,{
      userLength: (state) => state.addUser,
    })
  },
  methods: {
    ...mapActions(useUserStore,["addItem","removeItem","removeAllItems"]),
    addItemFunc() {
      return this.addItem({...this.inputs}),
      this.inputs.name = "",
      this.inputs.url= ""
    },
  }
})
</script>
