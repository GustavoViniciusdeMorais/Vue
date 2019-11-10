<template>
    <div>
        <button class="accordion" @click="$emit('makemarked',name)" >
            {{ name }}

        </button>
        <div class="panel" v-bind:class="{'openChild':amiMarked}">
            <p>Sometimes it is the people no one can imagine anything of who do the things no one can imagine.</p>
        </div>
    </div>
</template>

<script>
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
        props: ["marked"]
    }
</script>

<style scoped>
    @import '../../../assets/styles/desafio2.css';
</style>