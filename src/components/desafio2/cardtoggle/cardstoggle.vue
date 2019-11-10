<template>
    <div>
        <h1>{{ title }}</h1>
        <item1 ></item1>
    </div>
</template>

<script>
    import item1 from "./item1";
    export default {
        name: "cardstoggle",
        data() {
            return {
                title: 'Card-Toggle'
            }
        },
        components: {
            item1
        }
    }
</script>

<style scoped>

</style>