<template>
    <cardtoggletemplate>
        <div slot="header" >
            <button class="collapsible" @click="addClass" >
                Second
            </button>
        </div>
        <div slot="content" >
            <div class="content" v-bind:class="{'showcontent': this.displaycontent}" >
                <h1>Item 2</h1>
                <videoexample v-bind:video="'https://www.youtube.com/embed/h83eviwd1mE'" >
                </videoexample>
            </div>
        </div>
    </cardtoggletemplate>
</template>

<script>
    import cardtoggletemplate from "../../../templates/cardtoggle/cardtoggletemplate";
    import videoexample from "../../videos/videoexample";

    export default {
        name: "item2",
        data() {
            return {
                name: 'item2',
                displaycontent: false
            }
        },
        computed: {
            list(){
                return this.displaycontent
            }
        },
        methods: {
            addClass(){
                this.displaycontent = !this.displaycontent
            }
        },
        components: {
            cardtoggletemplate,
            videoexample
        }
    }
</script>

<style scoped>

</style>