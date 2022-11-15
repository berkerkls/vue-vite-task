import { defineStore } from "pinia"

export type Item = {name: string, url: string, id: number }

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
            const id = new Date().getTime()
            item.id= id
            this.items.push(item)
            console.log(this.items)
        },
        removeItem(item: Item){
            this.items = this.items.filter(el => el.id !== item.id)
            // const index = this.items.indexOf(item)
            // this.items.splice(index,1)
        },
        removeAllItems() {
            return this.items = []
        }
    }
})