<template>
  <div id="app">
<!--    <screen></screen>-->
    <list></list>
  </div>
</template>

<script>
// import screen from './components/secondCrud/screen'
import list from "./components/photos/list";
export default {
  name: 'app',
  components: {
    // screen
    list
  }
}
</script>

<style>
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
</style>
