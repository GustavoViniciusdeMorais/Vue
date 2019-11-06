<template>
    <div>
        <button @click="$emit('makemarked',name)" v-bind:class="{'colorB':amiMkared}" > {{ name }} </button>
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
            amiMkared(){
                return this.marked == this.name ? true : false
            }
        },
        props: ["marked"]
    }
</script>

<style scoped>
.colorB {
    background-color: red;
}
</style>