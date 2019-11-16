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
                        <button @click.prevent="addElement" class="btn btn-primary btn-block" >Add</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "includeItem",
        data() {
            return {
                id: Date.now(),
                name: '',
                url: ''
            }
        },
        methods: {
            addElement(){
                this.$emit('add', {
                    id: Date.now(),
                    name: this.name,
                    url: this.url
                })
                this.name = ''
                this.url = ''
            }
        }
    }
</script>

<style scoped>

</style>