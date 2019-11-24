<template>
    <div class="container">
        <div class="row">
            <div class="col-md3">
                <div class="col-md-9 col-sm-9 col-md-offset-1 col-md-pull-1 col-sm-offset-0">
                    <div class="panel panel-default arrow right">
                        <div class="panel-heading">{{ email }}</div>
                        <div class="panel-body">
                            <header class="text-left">
                                <div class="comment-user"><strong> {{ name }} </strong> </div>
<!--                                <time class="comment-date" datetime="16-12-2014 01:05"><i class="fa fa-clock-o"></i> Dec 16, 2014</time>-->
                            </header>
                            <div class="comment-post">
                                <p>
                                    {{ body }}
                                </p>
                            </div>
                            <slot name="btn" ></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "singleItem",
        data() {
            return {
                enable: this.canEdit
            }
        },
        computed: {
            amiEnabled() {
                return this.enable
            }
        },
        props: ['id', 'postId', 'name', 'email', 'body', 'canEdit']
    }
</script>

<style scoped>

</style>