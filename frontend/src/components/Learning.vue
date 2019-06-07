<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawerRight"
      right
      clipped
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Справка</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>CAD</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Модули</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      temporary
      v-model="left"
      fixed
    ></v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <div id="container">

            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-navigation-drawer
      right
      temporary
      v-model="right"
      fixed
    ></v-navigation-drawer>
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
  </v-app>
</template>

<script>

  import * as THREE from 'three';
  import $ from 'jquery'

  export default {
    name: "WebCAD",
    data() {
      return {
        drawer: false,
        drawerRight: false,
        right: null,
        left: null,
        scene: {},
        camera: {},
        mesh: {},
        cube: {},
        geometry: {},
        material: {},
        renderer: {},
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram'
        ]
      }
    },
    mounted() {

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      this.renderer = new THREE.WebGLRenderer({alpha: true});
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMap.enabled = true;
      document.body.appendChild(this.renderer.domElement);


      const axes = new THREE.AxesHelper(20);
      this.scene.add(axes);


      const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
      const planeMaterial = new THREE.MeshLambertMaterial(
        {color: 0xffffff});
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.receiveShadow = true;
      plane.rotation.x = -0.5 * Math.PI;
      plane.position.x = 15;
      plane.position.y = 0;
      plane.position.z = 0;
      this.scene.add(plane);

      const cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
      const cubeMaterial = new THREE.MeshLambertMaterial(
        {color: 0xff0000});
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.castShadow = true;
      cube.position.x = -4;
      cube.position.y = 3;
      cube.position.z = 0;
      this.scene.add(cube);


      const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
      const sphereMaterial = new THREE.MeshLambertMaterial(
        {color: 0x7777ff});
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.castShadow = true;
      sphere.position.x = 20;
      sphere.position.y = 4;
      sphere.position.z = 2;
      this.scene.add(sphere);


      // this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
      // this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      // this.cube = new THREE.Mesh( this.geometry, this.material );
      // this.scene.add(this.cube);

      this.camera.position.x = -30;
      this.camera.position.y = 40;
      this.camera.position.z = 30;

      this.camera.lookAt(this.scene.position);
      $("#container").append(this.renderer.domElement);
      this.renderer.render(this.scene, this.camera);

      const spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(-40, 60, -10);
      sphere.castShadow = true;
      this.scene.add(spotLight);

      this.renderScene();
    },
    methods: {
      renderScene() {
        requestAnimationFrame(this.renderScene);
        this.renderer.render(this.scene, this.camera);
      },
      animate() {
        requestAnimationFrame(this.animate);

        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera);
      }
    }
  }
</script>

<style scoped>

</style>
