import { defineStore } from "pinia"

export type Item = {name: string, url: string }

export const useUserStore = defineStore("user",{
    state: () => ({
        items: [] as Item[]
    }),
    getters: {
        addUser(){
            this.items.length
            console.log(this.items)
        }
    },
    actions: {
        addItem(item: Item) {
            this.items.push(item)
            console.log(this.items)
        },
        removeItem(item: Item){
            const index = this.items.indexOf(item)
            if( index > -1) {
                this.items.splice(index , 1)
            }
            console.log("removed")
            console.log(this.items)
        },
        removeAllItems() {
            return this.items = []
        }
    }
})