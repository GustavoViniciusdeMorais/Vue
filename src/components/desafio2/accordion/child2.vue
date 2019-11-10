<template>
    <div>
        <button class="accordion" @click="$emit('makemarked',name)" >
            {{ name }}

        </button>
        <div class="panel" v-bind:class="{'openChild':amiMarked}">
            <p>Those who can imagine anything, can create the impossible.</p>
        </div>
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped>
@import '../../../assets/styles/desafio2.css';
</style>