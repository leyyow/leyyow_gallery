<script setup>
  
import "@/styles/global.css";
</script>
<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<style>
@font-face {
  font-family: 'Graphik';
  src: url('./assets/Graphik Family/Graphik-Regular-Trial.otf'); 
}
#app {
  background-color: #E5E5E5;
  font-family: 'Graphik', Helvetica, Arial, sans-serif;}
</style>

