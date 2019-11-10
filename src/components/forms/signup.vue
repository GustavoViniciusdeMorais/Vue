<template>
    <formtemplate>
        <div slot="header" >
            <div class="container">
                <div class="jumbotron">
                    <h1>Gustavo's Sig Ups!</h1>
                </div>
            </div>
        </div>
        <div slot="content" >
            <div class="col-md-8 col-md-offset-2">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
            </div>
        </div>
    </formtemplate>
</template>

<script>
    import formtemplate from "../../templates/forms/formtemplate";

    export default {
        name: "signup",
        components: {
            formtemplate
        }
    }
</script>

<style scoped>

</style>