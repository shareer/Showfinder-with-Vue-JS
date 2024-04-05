<template>
    <div class="header-container jumbotron bg-cover text-white">
      <div class="container py-5 text-center">
        <h1 class="display-4 font-weight-bold">TV Maze</h1>
      </div>
    </div>
  </template>
  
  <style scoped>
  .bg-cover {
    background-size: cover !important;
  }
  
  body {
    min-height: 100vh;
  }
  
  .header-container {
    position: relative;
    background: url('../assets/bg.jpeg');
  }
  
  .header-container::after {
    content: "";
    position: absolute; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, #111 100%); 
  }
  </style>
  