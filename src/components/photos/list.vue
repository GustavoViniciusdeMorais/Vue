<template>
    <div>
        <h1>{{ title }}</h1>
        <div v-for="photo in photos" v-bind:key="photo.id" >
            {{ photo.title }}
            <img v-bind:src="photo.url" />
        </div>
    </div>
</template>

<script>
    import { mixinPhotos } from "../../modules/photos";

    export default {
        name: "list",
        mixins: [mixinPhotos]
    }
</script>

<style scoped>

</style>