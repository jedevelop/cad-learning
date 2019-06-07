<template>
  <v-app fluid class="p-0">
    <v-layout row wrap justify-space-around class="layout-back" style="min-height:300px">
      <!--      <span class="headline">Top 10 Australian beaches</span>-->
      <!--      <h4 class="subheading">Build your application today!</h4>-->
      <v-flex xs12>
        <h1 class="custom-heading">Технологии создания объектов будущего</h1>
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
      <v-flex xs3 d-flex align-center class="pa-4">
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            :src="images.cad"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">CAD</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Перейти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3 d-flex align-center class="pa-4">
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            :src="images.cae"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">CAE</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Перейти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3 d-flex align-center class="pa-4">
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            :src="images.cloud"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Облачные вычисления</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Перейти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-flex xs3 d-flex align-center class="pa-4">
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
        ],
        images: {
          cad: require('../assets/cad.jpg'),
          cae: require('../assets/cae.webp'),
          cloud: require('../assets/cloud.jpg')
        }
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
