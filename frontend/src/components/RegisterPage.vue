<template>
  <div>
    <h1>Register</h1>
    <form>
      <label>Email </label>
      <input type="email" required v-model="email" placeholder="email" />
      <br />
      <label>mdp </label>
      <input
        type="password"
        required
        v-model="password"
        placeholder="password"
      />
      <br />
      <button @click="register">Enregistrer</button>
    </form>
  </div>
</template>

<script>
import AuthentificationService from "@/services/AuthentificationService";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const response = await AuthentificationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
