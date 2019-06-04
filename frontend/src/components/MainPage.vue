<template>
  <v-app id="inspire">
    <v-toolbar
      absolute
      dark
      color="grey darken-3 "
      height="50px"
      scroll-off-screen
      scroll-target="#scrolling-techniques">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>LEARNING CAD</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-btn icon>
        <i class="fas fa-search"></i>
      </v-btn>
    </v-toolbar>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-img :src="'../assets/autocad.png'" width="100px" height="200px"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer
      dark
      height="30px"
    >
      <v-card
        class="flex">
        <v-card-title class="grey darken-3 align-center justify-center pt-0 pb-0">

          <v-btn
            v-for="icon in icons"
            :key="icon"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
    <router-view/>
  </v-app>
</template>

<script>

  export default {
    name: "MainPage",
    created() {
      console.log(this.$route.path)
    },
    data() {
      return {
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram'
        ]
      }
    }
  }
</script>

<style scoped>

</style>
