<template>
    <div>
        <div class="col-sm" >
            <h2>{{ this.name }}</h2>
            <button class="btn btn-danger"  @click.prevent="delItem" >
                <span class="glyphicon glyphicon-remove" ></span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "minelement",
        props: ["id", "name"],
        methods: {
            delItem(){
                this.$emit('exclude', this.id)
            }
        }
    }
</script>

<style scoped>

</style>