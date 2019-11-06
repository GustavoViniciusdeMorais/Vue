<template>
    <div>
        <button @click="$emit('makemarked',name)" v-bind:class="{'colorB':amiMarked}" > {{ name }} </button>
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
.colorB{
    background-color: red;
}
</style>