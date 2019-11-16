<template>
    <div>
        <button class="btn btn-primary  btn-lg"
                @click="componentName = 'accordion'" >
            Accordion
        </button>
        <button class="btn btn-secondary  btn-lg"
                @click="componentName = 'cardstoggle'" >
            Cards Toggle
        </button>
        <button class="btn btn-danger  btn-lg"
                @click="componentName = 'tabsparent'" >
            Tabs
        </button>

        <component v-bind:is="componentName" ></component>
    </div>
</template>

<script>
    import accordion from "./accordion/accordion";
    import cardstoggle from "./cardtoggle/cardstoggle";
    import tabsparent from "./tabs/tabsparent";

    export default {
        name: "secondchallenge",
        data() {
            return {
                componentName: ''
            }
        },
        components: {
            accordion,
            cardstoggle,
            tabsparent
        }
    }
</script>

<style scoped>
    @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
</style>