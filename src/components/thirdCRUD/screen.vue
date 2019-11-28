<template>
    <div>
        <h1 class="text-center">CRUD of Comments</h1>
        <button class="btn btn-primary btn-block" @click="showAddForm" >Add comment</button>
        <component v-bind:is="displayForm" @includePost="addPost" @cancelAddPost="cancel" ></component>
        <div v-for="el in list" v-bind:key="el.id">
            <singleItem v-bind:name="el.name"
                        v-bind:can-edit="canEdit"
                        v-bind:body="el.body"
                        v-bind:id="el.id"
                        v-bind:post-id="el.postId"
                        v-bind:email="el.email">
                <div slot="btn" >
                    <button class="btn btn-danger" @click="deletePost(el.id)" >
                        <span class="glyphicon glyphicon-trash" ></span>
                    </button>
                </div>
            </singleItem>
        </div>
    </div>
</template>

<script>
    import singleItem from "./singleItem";
    import {comments} from "./mixObj";
    import addForm from "./addForm";

    export default {
        name: "screen",
        data() {
            return {
                canEdit: true,
            }
        },
        mixins: [comments],
        methods: {
            showAddForm(){
                this.displayForm = 'addForm'
            },
            cancel(event){
                this.displayForm = event
            }
        },
        components: {
            singleItem,
            addForm
        }
    }
</script>

<style scoped>

</style>