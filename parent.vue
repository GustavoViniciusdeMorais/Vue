<template>
    <div>
        <h2>Whos marked: {{ marked }}</h2>
        <child1 v-on:marked="marked" v-bind:marked="marked" v-on:makemarked="makeMark" ></child1>
        <child2 v-on:marked="marked" v-bind:marked="marked" v-on:makemarked="makeMark" ></child2>
    </div>
</template>

<script>
    import child1 from './child1'
    import child2 from './child2'

    export default {
        name: "parent",
        data() {
            return {
                title: 'We have nothing there to go back!',
                marked: ''
            }
        },
        components: {
            child1,
            child2
        },
        props: ['myname'],
        methods: {
            makeMark: function (x) {
                this.marked = x
            }
        }
    }
</script>

<style scoped>

</style>