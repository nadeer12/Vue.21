<template>
  <div>
    <h2>Registration Page</h2>
    <form @submit.prevent="register">
      <label for="name">Name:</label>
      <input v-model="name" type="text" id="name" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    async register() {
      try {
        const challenge = this.generateRandomChallenge();

        const publicKeyCredential = await navigator.credentials.create({
          publicKey: {
            challenge,
            rp: {
              name: 'MyWebApp',
              id: window.location.hostname, // Use the current domain as the relying party ID
            },
            user: {
              name: this.name,
              displayName: this.name,
              id: this.generateRandomId(),
            },
            pubKeyCredParams: [
              { type: 'public-key', alg: -7 }, // ES256
              { type: 'public-key', alg: -257 }, // RS256
            ],
            timeout: 60000,
          },
        });

        // Send the public key credential to the server for storage
        await this.sendPublicKeyToServer(publicKeyCredential);

        // Handle the successful registration response
        console.log('Registration successful:', publicKeyCredential);

        // Further logic, such as redirecting to a login page
      } catch (error) {
        console.error('Registration failed', error);
        // Handle registration failure
      }
    },

    generateRandomChallenge() {
      const randomBytes = new Uint8Array(32); // 32 bytes for the challenge
      crypto.getRandomValues(randomBytes);
      return randomBytes;
    },

    generateRandomId() {
      const randomBytes = new Uint8Array(16); // 16 bytes for a unique user ID
      crypto.getRandomValues(randomBytes);
      return randomBytes;
    },

    async sendPublicKeyToServer(publicKeyCredential) {
      try {
        const response = await fetch('http://localhost:4000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            publicKey: publicKeyCredential,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to register user on the server');
        }
      } catch (error) {
        console.error('Error sending public key to server:', error);
        // Handle error
      }
    },
  },
};
</script>
