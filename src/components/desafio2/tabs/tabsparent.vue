<template>
    <div>
        <h1>{{ title }}</h1>
        <tabtemplate>
            <div class="tab" slot="tab-control" >
                <button @click="markTab('tab1')" class="tablinks" >Tab 1</button>
                <button @click="markTab('tab2')" class="tablinks" >Tab 2</button>
                <button @click="markTab('tab3')" class="tablinks" >Tab 3</button>
            </div>
            <div slot="tab-content">
                <tab1 v-bind:tabname="tab" ></tab1>
                <tab2 v-bind:tabname="tab" ></tab2>
                <tab3 v-bind:tabname="tab" ></tab3>
            </div>
        </tabtemplate>
    </div>
</template>

<script>
    import tabtemplate from "../../../templates/tabs/tabtemplate";
    import tab1 from "./tab1";
    import tab2 from "./tab2";
    import tab3 from "./tab3";

    export default {
        name: "tabsparent",
        data() {
            return {
                title: 'Card-Tabs',
                tab: ''
            }
        },
        components: {
            tabtemplate,
            tab1,
            tab2,
            tab3
        },
        methods: {
            markTab(tab){
                this.tab = tab
                // alert(this.tab)
            }
        }
    }
</script>

<style scoped>

</style>