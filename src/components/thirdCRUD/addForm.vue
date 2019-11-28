<template>
    <div>
        <input type="text" class="form-control" v-model="name" placeholder="Name" >
        <input type="text" v-model="email" class="form-control" placeholder="name@email.com" >
        <textarea v-model="body" cols="30" rows="10" class="form-control"
        placeholder="Write some text here and hit send!"></textarea>
        <button class="btn btn-success btn-block" @click="sendData" >Send</button>
        <button class="btn btn-danger btn-block" @click="cancel" >Cancel</button>
    </div>
</template>

<script>

    export default {
        name: "addForm",
        data() {
            return {
                name: '',
                email: '',
                body: ''
            }
        },
        methods: {
            sendData(){
                this.$emit('includePost', {
                    id: Date.now(),
                    postId: Date.now(),
                    name: this.name,
                    email: this.email,
                    body: this.body
                })
                this.name = ''; this.body = ''; this.email = '';
            },
            cancel(){
                this.$emit('cancelAddPost', '')
            }
        }
    }
</script>

<style scoped>

</style>