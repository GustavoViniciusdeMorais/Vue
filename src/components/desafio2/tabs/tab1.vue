<template>

    <div class="tabcontent" slot="tab-content" v-bind:class="{'showcontent':addClass}" >
        This tab 1111
    </div>

</template>

<script>

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
        }
    }
</script>

<style scoped>

</style>