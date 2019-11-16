<template>

    <div class="tabcontent" slot="tab-content" v-bind:class="{'showcontent':addClass}" >
        <h1>Tab 1</h1>
        <contactform></contactform>
    </div>

</template>

<script>
    import contactform from "../../contactform/contactform";
    export default {
        name: "tab1",
        data() {
            return {
                name: 'tab1'
            }
        },
        props: ['tabname'],
        computed: {
            addClass(){
                return this.name == this.tabname ? true : false
            }
        },
        components: {
            contactform
        }
    }
</script>

<style scoped>

</style>