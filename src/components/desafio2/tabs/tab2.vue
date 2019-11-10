<template>
    <div class="tabcontent" slot="tab-content" v-bind:class="{'showcontent': addClass}" >
        tab 2 content
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped>

</style>