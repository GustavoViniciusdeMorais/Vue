<template>
    <div>
        <h1>{{ title }}</h1>
        <div v-for="photo in list" v-bind:key="photo.id" >
            {{ photo }}
            <img v-bind:datasrc="photo.url" />
        </div>
    </div>
</template>

<script>
    import { getImages } from '../../modules/photos'
    export default {
        name: "list",
        data() {
            return {
                title: 'My Photos'
            }
        },
        computed: {
            list(){
                // eslint-disable-next-line no-console
                console.log('getImages: ',getImages())
                return getImages()
            }
        }
    }
</script>

<style scoped>

</style>