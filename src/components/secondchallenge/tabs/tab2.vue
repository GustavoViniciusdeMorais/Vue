<template>
    <div class="tabcontent" slot="tab-content" v-bind:class="{'showcontent': addClass}" >
        <h1>Tab 2</h1>
        <videoexample v-bind:video="'https://www.youtube.com/embed/ygYYOeVoVgk'" >
        </videoexample>
    </div>
</template>

<script>
    import videoexample from "../../videos/videoexample";
    export default {
        name: "tab2",
        data() {
            return {
                name: 'tab2'
            }
        },
        props: ["tabname"],
        computed: {
            addClass(){
                return this.name == this.tabname ? true : false
            }
        },
        components: {
            videoexample
        }
    }
</script>

<style scoped>

</style>