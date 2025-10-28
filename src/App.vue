<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/navBar.vue';
import bottom from './components/bottom.vue';
import contactInformation from './components/contactInformation.vue';

</script>

<template>
  <NavBar />
  <main class="pageWrapper">
    <RouterView />
  </main>
  <contactInformation />
  <bottom />
</template>

<style scoped>

  .pageWrapper {
    padding-top: 9vh;
    margin-top: 0; 
    padding-left: 0;
    padding-right: 0;
  }
</style>
