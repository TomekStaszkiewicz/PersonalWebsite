<template>
  <div class="login bg-black">

    <b-form @submit.prevent="login">
        
        <b-form-group
        id="input-group-login"
        label="Login"
        label-for="login"
        >
            <b-form-input 
            id="login"
            v-model="user.login"
            required
            type="text"
            ></b-form-input>
        </b-form-group>

        <b-form-group
        id="input-group-password"
        label="Password"
        label-for="password"
        >
            <b-form-input 
            id="password"
            v-model="user.password"
            required
            type="password"
            ></b-form-input>
        </b-form-group>

         <b-button type="submit">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import { AUTH_REQUEST } from '../storenames.js';
export default {
  name: 'login',
  data(){
      return{
          user: {
              login: '',
              password: '',
          }
      }
  },
  methods: {
      login: function(){
          const { login, password } = this.user;
          this.$store.dispatch(AUTH_REQUEST, { login, password }).then( () => {
              this.$router.push('/dashboard');
          });
      },
  }
}
</script>
