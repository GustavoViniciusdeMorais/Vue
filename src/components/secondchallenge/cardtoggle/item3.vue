<template>
    <cardtoggletemplate>
        <div slot="header" >
            <button class="collapsible" @click="addClass" >
                Third
            </button>
        </div>
        <div slot="content" >
            <div class="content" v-bind:class="{'showcontent': this.displaycontent}" >
                <h1>Item 3</h1>
                <p>
                    Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces
                    and single-page applications. It was created by Evan You, and is maintained by him and the rest of the
                    active core team members coming from various companies such as Netlify and Netguru.
                </p>
                <p>
                    Vue.js was born as a tool for rapid prototyping. Now it can be used to build complex scalable
                    reactive web applications.
                </p>
                <p>
                    That was what Evan did. That is how he came to the idea of creating a library that would help
                    in rapid prototyping by offering an easy and flexible way of reactive data binding and
                    reusable components.
                </p>
                <p>
                    Like every good library, Vue.js has been growing and evolving, thus providing more features
                    than it was promising from the beginning. Currently, it provides an easy way of attaching and
                    creating plugins, writing and using mixins, and overall adding custom behavior. Vue can be
                    used in such a flexible way and is so nonopinionated of the application structuring that it
                    definitely can be considered as a framework capable of supporting the end-to-end building of
                    complex web applications
                </p>
            </div>
        </div>
    </cardtoggletemplate>
</template>

<script>
    import cardtoggletemplate from "../../../templates/cardtoggle/cardtoggletemplate";

    export default {
        name: "item3",
        data() {
            return {
                name: 'item3',
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
            cardtoggletemplate
        }
    }
</script>

<style scoped>

</style>