<template>
    <div>
        <form>
            <div class="container">
                <div class="row">
                    <div class="col-md3">
                        <input type="hidden" v-model="id" >
                        <input type="text" class="form-control" v-model="name" placeholder="Photo name">
                        <input type="text" class="form-control" v-model="url"
                               placeholder="Place the url of the image here!">
                        <button @click.prevent="editElement" class="btn btn-primary btn-block" >Edit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "formEdit",
        props: ["id", "name", "url"],
        methods: {
            editElement() {
                this.$emit('editItem', {
                    id: this.id,
                    name: this.name,
                    url: this.url
                })
            }
        }
    }
</script>

<style scoped>

</style>