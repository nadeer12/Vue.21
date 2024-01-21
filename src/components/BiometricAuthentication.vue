<!-- src/components/BiometricAuthentication.vue -->
<template>
    <div>
      <h2>Biometric Authentication</h2>
      <button @click="startBiometricAuthentication">Authenticate with Biometrics</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      async startBiometricAuthentication() {
        try {
          const challenge = this.generateRandomChallenge();
          
          const credential = await navigator.credentials.get({
            publicKey: {
              challenge,
              userVerification: 'required',
              authenticatorSelection: {
                userVerification: 'required',
              },
            },
          });
  
          // Handle the successful authentication
          this.handleBiometricAuthenticationSuccess(credential);
        } catch (error) {
          console.error('Biometric authentication failed', error);
          // Handle the authentication failure
        }
      },
  
      handleBiometricAuthenticationSuccess(credential) {
        // Process the successful authentication credential
        console.log('Biometric authentication successful:', credential);
      },
  
      generateRandomChallenge() {
        const randomBytes = new Uint8Array(32); // 32 bytes for challenge
        crypto.getRandomValues(randomBytes);
        console.log(randomBytes);
        return randomBytes;
      },
    },
  };
  </script>
  