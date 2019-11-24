<template>
    <div>
        <input type="text" class="form-control" v-model="name" >
        <input type="text" v-model="email" class="form-control" >
        <textarea v-model="body" cols="30" rows="10" class="form-control" ></textarea>
        <button class="btn btn-success btn-block" @click="addPost" >Add</button>
    </div>
</template>

<script>
    import { comments } from "./mixObj";

    export default {
        name: "addForm",
        mixins: [comments]
    }
</script>

<style scoped>

</style>