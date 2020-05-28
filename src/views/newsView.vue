<template>

    <div>
        <!-- <p>news{{$route.params.id}}</p> -->

         <h1>{{this.$route.query.name}}</h1>
        <h1>{{this.$route.query.age}}</h1>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this)
    }
}
</script>