<template>
    <div>
        <form>
            <div class="input-group col-xs-6">
                <input class="form-control" type="text" v-model="oneEl.name" >
                <span class="input-group-btn">
                    <button class="btn btn-primary"
                            @click.prevent="creatElement">
                        Save
                    </button>
                </span>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "addElement",
        data() {
            return {
                oneEl: {
                    name: ''
                }
            }
        },
        methods: {
            creatElement(){
                // alert(this.oneEl.id)
                this.$emit('newElement', {
                    id: Date.now(),
                    name: this.oneEl.name
                })
                this.oneEl.name = ''
            }
        }
    }
</script>

<style scoped>

</style>