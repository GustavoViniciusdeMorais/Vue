<template>
    <form @submit.prevent="">
        <slot name="header" ></slot>
        <slot name="content" ></slot>
        <slot name="buttons" ></slot>
    </form>
</template>

<script>
    export default {
        name: "formtemplate"
    }
</script>

<style scoped>
    @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
</style>