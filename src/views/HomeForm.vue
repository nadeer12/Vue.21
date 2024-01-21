<!-- src/views/Home.vue -->
<template>
    <div>
      <h1>Home Page</h1>
      <BiometricAuthentication />
    </div>
  </template>
  
  <script>
  import BiometricAuthentication from '@/components/BiometricAuthentication.vue';
  
  export default {
    components: {
      BiometricAuthentication,
    },
  };
  </script>
  