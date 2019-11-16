<template>
    <div>
        <div>
            <addElement
                    @newElement="addElement" >
            </addElement>
        </div>
        <ul class="list-group" v-for="el in list" v-bind:key="el.id" >
            <li class="list-group-item">
                <minElement
                        v-bind:name="el.name"
                        @exclude="remove"
                        v-bind:id="el.id" ></minElement>
            </li>
        </ul>
    </div>
</template>

<script>
    // import uuid from 'uuid'
    import minElement from "./minElement";
    import addElement from "./addElement";

    export default {
        name: "screen",
        data() {
            return {
                list: [
                    {
                        id: '1',
                        name: 'Gustavo'
                    },
                    {
                        id: '2',
                        name: 'Vinicius'
                    }
                ]
            }
        },
        methods: {
            addElement(event){
                // eslint-disable-next-line no-console
                console.log(event.id)
                this.list.push({
                    id: event.id,
                    name: event.name
                })
            },
            remove(id){
                this.list = this.list.filter( e => e.id !== id )
            }
        },
        components: {
            minElement,
            addElement
        }
    }
</script>

<style scoped>

</style>