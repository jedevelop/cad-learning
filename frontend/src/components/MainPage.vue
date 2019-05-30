<template>
  <v-app id="inspire">
    <v-toolbar
      absolute
      color="teal lighten-3"
      dark
      scroll-off-screen
      scroll-target="#scrolling-techniques">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>LEARNING CAD</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container style="height: calc(100% - 50px);"></v-container>
    <v-footer
      dark
      height="30px">
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-xs-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon>
            <v-icon color="white" size="24px" style="background-color: white">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0" style="width: 100px;">

        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2019 — <strong>Learning CAD</strong>
        </v-card-text>
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
