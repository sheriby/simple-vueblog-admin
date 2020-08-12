<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  @import "assets/css/base.css";

  div#app {
    min-height: 100% !important;
  }

  div#app {
    background: url("~@/assets/image/bg.jpg");
    background-size: cover;
  }
</style>
