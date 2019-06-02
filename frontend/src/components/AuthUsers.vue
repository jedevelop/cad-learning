<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="grey darken-3">
              <v-toolbar-title>Вход</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn flat fab @click="signin">
                <v-icon title="Войти">check</v-icon>
              </v-btn>
              <v-btn flat fab @click="$router.push({path: '/signup'})">
                <v-icon title="Регистрация">person_add</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="login" label="Логин" type="text"></v-text-field>
                <v-text-field prepend-icon="lock" name="password" label="Пароль" id="password"
                              type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-layout row justify-space-between>
                <v-flex xs9></v-flex>
                <v-flex xs3>

                </v-flex>
              </v-layout>
            </v-card-actions>
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
      valid: true,
      user: {
        email: '',
        password: ''
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
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
          this.$router.push({path: '/learning'})
        }
      }
    }
  }
</script>
