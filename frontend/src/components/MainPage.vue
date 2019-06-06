<template>
  <v-app fluid class="p-0">
    <v-layout row wrap justify-space-around class="layout-back">
      <v-flex xs6>
        <v-toolbar
          absolute
          dark
          color="transparent"
          height="50px"
          scroll-off-screen
          scroll-target="#scrolling-techniques">
          <!--      <v-toolbar-side-icon></v-toolbar-side-icon>-->

          <v-toolbar-title>LEARNING CAD</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <i class="fas fa-search"></i>
          </v-btn>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-flex xs6>
        <!--        <img src="../assets/autocad.png" height="42%" width="100%"/>-->
      </v-flex>
    </v-layout>
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
  .layout-back {
    background-image: url("../assets/autocad.png");
    background-size: cover;
    opacity: .9;
  }
</style>
