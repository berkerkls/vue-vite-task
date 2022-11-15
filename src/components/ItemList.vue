<template>
        <v-list three-line>
            <v-list-subheader
            v-if="list"
            >To Studies
            </v-list-subheader>
            <template v-for="item in list" :key="item.name">
                <v-list-item >
                    <v-col col="4">
                        <v-row justify-md >
                            <v-text-field icon href="item.url"
                            disabled>
                              {{item.name}}
                             </v-text-field>
                             <v-spacer></v-spacer>
                             <v-btn
                             depressed
                             color="error"
                             @click="removeItem(item)"
                             >Delete</v-btn>
                        </v-row>
                    </v-col>
                </v-list-item>
            </template>
        </v-list>
     <p class="text-center">{{list.length}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../store/user';
import { mapActions, mapState } from 'pinia';

export default defineComponent({
    name:"ItemList",
    computed: {
        ...mapState(useUserStore,{
            list: state => state.items,
        })
    },
    methods: {
        ...mapActions(useUserStore,["removeItem"]),
        deleteItem(){
            return this.removeItem
        }
    }
})
</script>