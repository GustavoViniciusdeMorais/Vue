<template>
    <div>
        <h1 class="text-center" >Images Directory</h1>
        <includeItem @add="addItem"></includeItem>
        <div v-for="el in list" v-bind:key="el.id" >
            <singleItem v-bind:name="el.name" v-bind:url="el.url" v-bind:id="el.id" @delete="exclude" >
            </singleItem>
        </div>
        <div class="alert alert-info" >Your Images!</div>
    </div>
</template>

<script>
    import singleItem from "./singleItem";
    import includeItem from "./includeItem";

    export default {
        name: "screen",
        data() {
            return {
                list: [
                    {
                        id: 1,
                        name: 'Place',
                        url: 'https://wallpaperaccess.com/full/295859.jpg'
                    }
                ]
            }
        },
        components: {
            singleItem,
            includeItem
        },
        methods: {
            addItem(event){
                this.list.push({
                    id: event.id,
                    name: event.name,
                    url: event.url
                })
            },
            exclude(id){
                this.list = this.list.filter(e => e.id !== id)
                // this.list = this.list.splice(id, 1)
            }
        }
    }
</script>

<style scoped>

</style>