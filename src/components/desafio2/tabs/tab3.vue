<template>
    <div class="tabcontent" slot="tab-content" v-bind:class="{'showcontent':addClass}" >
        tab 3 marked!!
    </div>
</template>

<script>
    export default {
        name: "tab3",
        data() {
            return {
                name: 'tab3'
            }
        },
        props: ["tabname"],
        computed: {
            addClass() {
                return this.name == this.tabname ? true : false
            }
        }
    }
</script>

<style scoped>

</style>