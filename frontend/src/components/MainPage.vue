<template>
    <div>
      Hello
      <router-view/>
    </div>
</template>

<script>
    export default {
      name: "MainPage",
      created() {
        console.log(this.$route.path)
      }
    }
</script>

<style scoped>

</style>
