<template>
  <div class="container register_form">
    <b-form @reset="onReset" v-if="show" offset="5" class="mt-5">
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

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          class="mx-auto"
          id="input-2"
          v-model="form.confirmPassword"
          required
          placeholder="Confirm password"
          type="password"
        ></b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        class="w-100"
        :disabled="
          !form.email ||
            !form.name ||
            !form.password ||
            (!form.confirmPassword && form.password !== form.confirmPassword)
        "
        variant="success"
        >Register</b-button
      >
      <br />
      <b-button type="reset" class="w-100 mt-3" variant="danger"
        >Reset</b-button
      >
      <br />
      <b-button
        type="reset"
        class="w-100 mt-3"
        variant="primary"
        @click="previousPage"
        >Go back</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  props: ["register"],

  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      // Register

      this.$emit("register", true);

      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    previousPage() {
      this.$emit("registered", false);
      this.$emit("loggedIn", false);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.register_form {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
