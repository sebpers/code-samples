<template>
  <div class="container login_form">
    <b-form
      @submit="onSubmit"
      @reset="onReset"
      v-if="show"
      offset="5"
      class="mt-5"
    >
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          class="mx-auto"
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          class="mx-auto"
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          class="mx-auto"
          id="input-2"
          v-model="form.password"
          required
          placeholder="Enter password"
          type="password"
        ></b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        class="w-100"
        variant="success"
        :disabled="
          !form.email ||
            form.email == ' ' ||
            (!form.name && form.name == ' ') ||
            (form.password && form.password == ' ')
        "
        >Submit</b-button
      >
      <br />
      <b-button type="reset" class="w-100 mt-3" variant="danger"
        >Reset</b-button
      >
      <br />
      <b-button @click="registerUser" class="w-100 mt-3" variant="info"
        >Register
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: ["loggedIn", "register"],

  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        registerUser: this.register
      },
      show: true
    };
  },

  mounted() {
    console.log("register: ", this.register);
  },

  methods: {
    onSubmit(evt) {
      // if user exist login...

      this.$emit("loggedIn", true);
      this.$emit("register", true);

      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },

    registerUser() {
      console.log("hello");
      this.$emit("registered", true);

      this.$router.push("/register");
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
.login_form {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
