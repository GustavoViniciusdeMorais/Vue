<template>
    <div>
        <div class="container" >
            <div class="row" >
                <div class="col-md4" >
                    <div class="well" >
                        <h3>{{ this.name }}</h3>
                        <img v-bind:src="this.url" width="400px" height="200px" />
                        <button @click.prevent="del" class="btn btn-danger btn-sm" >
                            <span class="glyphicon glyphicon-ok" ></span>
                        </button>
                        <editButton @showForm="showEditForm" ></editButton>
                        <div v-show="displayForm" >
                            <form-edit @editItem="editElement"
                                       v-bind:id="this.id"
                                       v-bind:url="this.url"
                                       v-bind:name="this.name" ></form-edit>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import editButton from "./editButton";
    import formEdit from "./formEdit";

    export default {
        name: "singleItem",
        props: ["id", "name", "url"],
        data() {
            return {
                displayForm: ''
            }
        },
        methods: {
            del(){
                this.$emit('delete', this.id)
            },
            showEditForm(event){
                this.displayForm = event
            },
            editElement(event){
                this.id = event.id
                this.name = event.name
                this.url = event.url
                this.displayForm = ''
            }
        },
        components: {
            editButton,
            formEdit
        }
    }
</script>

<style scoped>

</style>