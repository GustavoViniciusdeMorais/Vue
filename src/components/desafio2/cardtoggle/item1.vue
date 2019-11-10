<template>
    <cartoggletemplate>
        <div slot="header" >
            <button type="button" class="collapsible" @click="addClass" >
                Open Collapsible
            </button>
        </div>
        <div slot="content" >
            <div class="content" v-bind:class="{'showcontent': this.displaycontent}" >
                <p>asfsafasdfasdfasdfsfdasfdsadfdsaf</p>
            </div>
        </div>>
    </cartoggletemplate>
</template>

<script>
    import cartoggletemplate from "../../../templates/cardtoggle/cartoggletemplate";

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
            cartoggletemplate
        }
    }
</script>

<style scoped>

</style>