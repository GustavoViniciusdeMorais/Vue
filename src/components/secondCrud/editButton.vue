<template>
    <div>
        <button class="btn btn-primary btn-sm" @click.prevent="showForm" >
            <span class="glyphicon glyphicon-pencil" ></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "editButton",
        methods:{
            showForm(){
                this.$emit('showForm','formEdit')
            }
        }
    }
</script>

<style scoped>

</style>