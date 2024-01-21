<!-- src/views/Login.vue -->
<template>
    <div>
      <h2>Authentication Page</h2>
      <form @submit.prevent="login">
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: ''
      };
    },
    methods: {
      login() {
        const user = this.$store.state.users.find(u => u.name === this.name);
        if (user) {
          alert('Login successful!');
        } else {
          alert('User not found. Please register.');
        }
      }
    }
  };
  </script>
  