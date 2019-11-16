<template>
    <div>
        <button class="accordion" @click="$emit('makemarked',name)" >
            {{ name }}

        </button>
        <div class="panel" v-bind:class="{'openChild':amiMarked}">
            <contactform></contactform>
        </div>
    </div>
</template>

<script>
    import contactform from "../../contactform/contactform";
    export default {
        name: "child1",
        data() {
            return {
                name: 'First Component'
            }
        },
        computed: {
            amiMarked(){
                return this.marked == this.name ? true : false
            }
        },
        props: ["marked"],
        components: {
            contactform
        }
    }
</script>

<style scoped>
    @import '../../../assets/styles/desafio2.css';
</style>