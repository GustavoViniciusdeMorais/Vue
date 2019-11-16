<template>
    <cardtoggletemplate>
        <div slot="header" >
            <button class="collapsible" @click="addClass" >
                First
            </button>
        </div>
        <div slot="content" >
            <div class="content" v-bind:class="{'showcontent': this.displaycontent}" >
                <h1>Item 1</h1>
                <contactform></contactform>
            </div>
        </div>
    </cardtoggletemplate>
</template>

<script>
    import cardtoggletemplate from "../../../templates/cardtoggle/cardtoggletemplate";
    import contactform from "../../contactform/contactform";

    export default {
        name: "item1",
        data() {
            return {
                name: 'item1',
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
            contactform
        }
    }
</script>

<style scoped>

</style>