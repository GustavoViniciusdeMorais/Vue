<template>
    <div>
        <button class="accordion" @click="$emit('makemarked',name)" >
            {{ name }}

        </button>
        <div class="panel" v-bind:class="{'openChild':amiMarked}">
            <videoexample v-bind:video="'https://www.youtube.com/embed/xRQnJyP77tY'">
            </videoexample>
        </div>
    </div>
</template>

<script>
    import videoexample from "../../videos/videoexample";

    export default {
        name: "child2",
        props: ["marked"],
        data(){
            return {
                name: 'Second Component'
            }
        },
        computed: {
            amiMarked(){
                return this.marked == this.name ? true : false
            }
        },
        components: {
            videoexample
        }
    }
</script>

<style scoped>
@import '../../../assets/styles/desafio2.css';
</style>