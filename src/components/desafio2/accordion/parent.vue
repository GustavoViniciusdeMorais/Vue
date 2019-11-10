<template>
    <div>
        <h1>{{ title }}</h1>
        <child1 v-on:marked="marked" v-bind:marked="marked" v-on:makemarked="makeMark" ></child1>
        <child2 v-on:marked="marked" v-bind:marked="marked" v-on:makemarked="makeMark" ></child2>
        <child3 v-on:marked="marked" v-bind:marked="marked" v-on:makemarked="makeMark" ></child3>
    </div>
</template>

<script>
    import child1 from './child1'
    import child2 from './child2'
    import child3 from './child3'

    export default {
        name: "parent",
        data() {
            return {
                title: 'Card-Accordion',
                marked: ''
            }
        },
        components: {
            child1,
            child2,
            child3
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