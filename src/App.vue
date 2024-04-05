<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import Header from './components/Header.vue'

export default {
  components: {
    Header,
  }
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
  background-color: #111;
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
