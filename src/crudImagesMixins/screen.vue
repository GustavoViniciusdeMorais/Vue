<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md3">
                    <h3 class="text-center" >My Images</h3>
                    <input type="text" class="form-control" v-model="obj.url" />
                    <button class="btn btn-dark btn-block" @click.prevent="addImage" >Add</button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md4">
                    <div class="well">
                        <div v-for="el in list" v-bind:key="el.id">
                            <img v-bind:src="el.url" width="300px" height="200px" />
                            <button @click="exclude(el.id)" class="btn btn-danger btn-lg" >
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {images} from '../../modules/classimages'

    export default {
        name: "screen",
        mixins: [images]
    }
</script>

<style scoped>

</style>