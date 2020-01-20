<template>
  <div id="app">
    <div class="container">
      <login-component
        :loggedIn="loggedIn"
        @loggedIn="login"
        :register="register"
        @registered="registered"
        v-if="!loggedIn && !register"
      ></login-component>

      <RegisterComponent
        :register="register"
        @registered="registered"
        @loggedIn="login"
        v-if="!loggedIn || register"
      ></RegisterComponent>

      <div v-if="loggedIn || register">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/html">HTML</router-link> |
          <router-link to="/css">CSS</router-link> |
          <router-link to="/javascript">JavaScript</router-link> |
          <router-link to="/vue">Vue</router-link>
        </div>
        <AddCodeSnippet />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AddCodeSnippet from "./components/addCodeSnippet";
import Login from "./components/Login.vue";
import Register from "./views/Register.vue";

export default {
  components: {
    AddCodeSnippet,
    LoginComponent: Login,
    RegisterComponent: Register
  },

  data() {
    return {
      // Both needs to be false to get the login/register view
      loggedIn: true,
      register: false
    };
  },

  mounted() {},

  methods: {
    login(value) {
      this.loggedIn = value;
    },

    registered(value) {
      this.register = value;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  /* background-color: #363536; */
}
</style>
