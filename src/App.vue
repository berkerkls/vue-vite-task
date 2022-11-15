<template>
  <v-app>
    <v-container fluid>
        <v-col justify="space-around">
          <InputSection />
          <ItemList />
        </v-col>
    </v-container>
  </v-app>
</template>

  <script lang="ts">
  import InputSection from "./components/InputSection.vue"
  import ItemList from "./components/ItemList.vue"
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name:"App",
    components: {
      InputSection,
      ItemList
    },

  })
  
  </script>
