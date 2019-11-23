<template>
    <div>
        <h1>Test Fade</h1>
        <button class="btn btn-primary btn-sm" @click="show = !show" >Show info</button>
        <transition name="fade" >
            <div class="alert alert-info" v-if="show" >
                There is no trying, it is only doing it!
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "testFadeInOut",
        data() {
            return {
                show: false
            }
        },
    }
</script>

<style scoped>
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{

    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }
</style>