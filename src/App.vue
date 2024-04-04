<template>
  <router-view />
</template>

<script lang="ts">
// import Home from './components/Home.vue'
// import ShowDetails from './components/ShowDetails.vue'

export default {
  // components: {
  //   Home,
  //   ShowDetails
  // }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #111 !important;
}

#app {
  background: #111;
  /* display: flex;
  align-items: center;
  justify-content: center; 
  height: 100%;  */
}


.spinner-container {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
