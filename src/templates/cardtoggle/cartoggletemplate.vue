<template>
    <div>
        <slot name="header" ></slot>
        <slot name="content" ></slot>
    </div>
</template>

<script>
    export default {
        name: "cartoggletemplate"
    }
</script>

<style scoped>
    .collapsible {
        background-color: #777;
        color: white;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
    }

    .active, .collapsible:hover {
        background-color: #555;
    }

    .content {
        padding: 0 18px;
        display: none;
        overflow: hidden;
        background-color: #f1f1f1;
    }

    .showcontent {
        display: block;
    }
</style>