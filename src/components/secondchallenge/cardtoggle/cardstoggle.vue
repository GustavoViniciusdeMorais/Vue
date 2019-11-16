<template>
    <div>
        <h1>{{ title }}</h1>
        <item1></item1>
        <item2></item2>
        <item3></item3>
    </div>
</template>

<script>
    import item1 from "./item1";
    import item2 from "./item2";
    import item3 from "./item3";

    export default {
        name: "cardstoggle",
        data() {
            return {
                title: 'Card-Toggle'
            }
        },
        components: {
            item1,
            item2,
            item3
        }
    }
</script>

<style scoped>

</style>