<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="grey darken-3">
              <v-btn flat fab @click="$router.go(-1)">
                <v-icon title="Отмена">fas fa-times</v-icon>
              </v-btn>
              <v-toolbar-title>Регистрация</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn flat fab @click="signin">
                <v-icon title="Войти">fas fa-check</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="fas fa-at"
                              v-model="user.email"
                              :rules="emailRules"
                              label="E-mail"
                              required
                ></v-text-field>
                <v-text-field prepend-icon="fas fa-lock" name="password" label="Пароль" id="password"
                              v-model="user.password"
                              type="password"></v-text-field>
                <v-text-field prepend-icon="fas fa-unlock" name="password" label="Подтверждение пароля" id="password"
                              type="password" v-model="user.conf_password"></v-text-field>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      user: {
        email: '',
        password: '',
        conf_password: ''
      },
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
      signin() {
        if (Object.values(this.user).every(_ => _.length)) {
          this.$router.push({path: '/home'})
        }
      }
    }
  }
</script>
