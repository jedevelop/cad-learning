<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawerRight"
      right
      dark
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
      :mini-variant="mini"
      absolute
      dark
      fixed
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>fas fa-arrow-right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Jon Stone</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>fas fa-arrow-left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in modules"
          :key="item.title"
          @click="selectModule(item.title)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content class="main-container">
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <div id="container">
              <v-card class="custom-title" color="transparent">{{title}}</v-card>

              <v-toolbar
                class="main-toolbar"
                color="#424242"
                fixed
                dark
                temporary
                clipped-right
              >
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-menu
                  v-for="btn in buttons" :key="btn.id"
                  transition="slide-x-transition"
                  bottom
                  right
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      flat
                      v-on="on"
                    >
                      {{btn.title}}
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-tile
                      v-for="(item, i) in btn.actions"
                      :key="i"
                      @click="setActionUser(item.action)"
                    >
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
                <v-spacer></v-spacer>
                <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
              </v-toolbar>
              <v-footer
                dark
                class="main-footer"
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
  </v-app>
</template>

<script>

  import * as THREE from 'three';
  import * as OrbitControls from 'three-orbitcontrols';
  import $ from 'jquery'

  export default {
    name: "WebCAD",
    data() {
      return {
        requestId: '',
        buttons: [
          {
            id: 1,
            title: 'Эскизы',
            actions: [
              {
                title: 'Создать',
                action: 'change/sketches'
              },
              {
                title: 'Изменить',
                action: 'change/sketches'
              }
            ]
          },
          {
            id: 2,
            title: 'Создать',
            actions: [
              {
                title: 'Куб',
                action: 'box'
              },
              {
                title: 'Шар',
                action: 'sphere'
              },
              {
                title: 'Цилиндр',
                action: 'cylinder'
              },
              {
                title: 'Конус',
                action: 'cone'
              },
              {
                title: 'Клин',
                action: 'cone'
              },
              {
                title: 'Тор',
                action: 'torus'
              },
            ]
          },
          {
            id: 3,
            title: 'Изменить',
            actions: [
              {
                title: 'Изменить параметры',
                action: 'change'
              },
            ]
          },
          {
            id: 4,
            title: 'Импорт/Экспорт',
            actions: [
              {
                title: 'Импортировать STEP',
                action: 'istep'
              },
              {
                title: 'Импортировать XML',
                action: 'ixml'
              },
              {
                title: 'Экспортировать STEP',
                action: 'estep'
              },
              {
                title: 'Экспортировать XML',
                action: 'exml'
              },
            ]
          },
          {
            id: 5,
            title: 'Моделирование',
            actions: [
              {
                title: 'Запустить анимацию',
                action: 'start'
              },
              {
                title: 'Остановить анимацию',
                action: 'stop'
              },
            ]
          },
          {
            id: 6,
            title: 'Помощь',
            actions: [
              {title: 'Исходный код'},
              {title: 'О нас'},
            ]
          }
        ],
        title: 'Выберите модуль',
        rightMini: null,
        drawer: false,
        drawerRight: false,
        right: null,
        left: null,
        scene: {},
        camera: {},
        mesh: {},
        cube: {},
        dIn: {},
        controls: {},
        geometry: {},
        material: {},
        renderer: {},
        step: 0,
        sphere: {},
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram'
        ],
        mini: false,
        modules: [
          {
            id: 1,
            title: 'Интерфейс программы. Балка на двух опорах',
            icon: 'fas fa-sitemap'
          },
          {
            id: 2,
            title: 'Виды конечных элементов',
            icon: 'fas fa-expand'
          },
          {
            id: 3,
            title: 'Нагрузки',
            icon: 'fas fa-dumbbell'
          },
          {
            id: 4,
            title: 'Согласование местных осей КЭ',
            icon: 'fas fa-arrows-alt'
          },
          {
            id: 5,
            title: 'Анализ результатов расчёта',
            icon: 'fas fa-layer-group'
          }
        ]
      }
    },
    watch: {
      mini(n) {
        if (n) {
          this.drawer = false
        }
      }
    },
    created() {
      this.drawer = true
      this.left = true
    },
    mounted() {

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);

      this.renderer = new THREE.WebGLRenderer({alpha: true});
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMap.enabled = true;
      document.body.appendChild(this.renderer.domElement);

      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      // this.dIn = dollyIn;
      this.controls.enableDamping = true
      this.controls.dampingFactor = 0.25
      this.controls.enableZoom = true

      this.scene.add(new THREE.GridHelper(10, 10));

      const pointsGeom = new THREE.Geometry();
      pointsGeom.vertices.push(
        new THREE.Vector3(THREE.Math.randFloat(-5, 5), THREE.Math.randFloat(-2.5, 2.5), THREE.Math.randFloat(-5, 5)),
        new THREE.Vector3(THREE.Math.randFloat(-5, 5), THREE.Math.randFloat(-2.5, 2.5), THREE.Math.randFloat(-5, 5))
      )

      const axes = new THREE.AxesHelper(20);
      this.scene.add(axes);


      // const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
      // const planeMaterial = new THREE.MeshLambertMaterial(
      //   {color: 0xffffff});
      // const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      // plane.receiveShadow = true;
      // plane.rotation.x = -0.5 * Math.PI;
      // plane.position.x = 15;
      // plane.position.y = 0;
      // plane.position.z = 0;
      // this.scene.add(plane);

      const cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
      const cubeMaterial = new THREE.MeshLambertMaterial(
        {color: 0xff0000});
      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      this.cube.castShadow = true;
      this.cube.position.x = -4;
      this.cube.position.y = 3;
      this.cube.position.z = 0;
      this.scene.add(this.cube);


      const sphereGeometry = new THREE.SphereGeometry(2, 20, 20);
      const sphereMaterial = new THREE.MeshLambertMaterial(
        {color: 0x7777ff});
      this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      this.sphere.castShadow = true;
      this.camera.position.x = -2;
      this.camera.position.y = 0;
      this.camera.position.z = 0;
      this.scene.add(this.sphere);


      // this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
      // this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      // this.cube = new THREE.Mesh( this.geometry, this.material );
      // this.scene.add(this.cube);

      this.camera.position.x = -30;
      this.camera.position.y = 40;
      this.camera.position.z = 30;

      this.camera.lookAt(this.scene.position);


      const spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(-40, 60, -10);
      this.sphere.castShadow = true;
      this.scene.add(spotLight);


      $("#container").append(this.renderer.domElement);
      this.renderer.render(this.scene, this.camera);

      // this.render();


      window.onscroll = (e) => {
        const zoomDistance = Number(zoomer.value),
          currDistance = camera.position.length(),
          factor = zoomDistance / currDistance;

        camera.position.x *= factor;
        camera.position.y *= factor;
        camera.position.z *= factor;
      };

    },
    methods: {
      setActionUser(title) {
        switch (title) {
          case 'start':
            this.render()
            break
          case 'stop':
            cancelAnimationFrame(this.renderId);
            break;
          case 'box':
            const cubeGeometry = new THREE.CubeGeometry(4, 4, 4),
              cubeMaterial = new THREE.MeshLambertMaterial(
                {color: 0xff0000}),
              cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.castShadow = true;
            cube.position.x = -4;
            cube.position.y = 3;
            cube.position.z = 0;
            console.log(cube, 'cube')
            this.scene.add(cube);
            break;
          case 'sphere' :
            break;
          case 'cylinder':
            break;
          case 'cone':
            break;
          case 'torus':
            break;
          default:
            break
        }
      },
      render() {
        this.cube.rotation.x += 0.02;
        this.cube.rotation.y += 0.02;
        this.cube.rotation.z += 0.02;

        this.sphere.position.x = 20 + (10 * (Math.cos(this.step += 0.01)));
        this.sphere.position.y = 2 + (10 * Math.abs(Math.sin(this.step += 0.03)));

        this.renderId = requestAnimationFrame(this.render);
        this.renderer.render(this.scene, this.camera);
      },
      selectModule(title) {
        this.left = false
        this.drawer = false
        this.title = title
      }
    }
  }
</script>

<style scoped>

</style>
