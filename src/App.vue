<template>
  <div id="app">
    <cardstoggle></cardstoggle>
    <tabsparent></tabsparent>
    <parent></parent>
  </div>
</template>

<script>
import tabsparent from "./components/desafio2/tabs/tabsparent";
import parent from "./components/desafio2/accordion/parent";
import cardstoggle from "./components/desafio2/cardtoggle/cardstoggle";

export default {
  name: 'app',
  components: {
    tabsparent,
    parent,
    cardstoggle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
