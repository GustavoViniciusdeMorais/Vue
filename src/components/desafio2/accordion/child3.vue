<template>
    <div>
        <button class="accordion" @click="$emit('makemarked',name)" >
            {{ name }}

        </button>
        <div class="panel" v-bind:class="{'openChild':amiMarked}">
            <p>We can only see a short distance ahead, but we can see plenty there that needs to be done.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "child3",
        props: ["marked"],
        data(){
            return {
                name: 'Third Component'
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