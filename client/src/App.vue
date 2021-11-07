<template>
  <div>
    <BasicNavBar/>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>

<script lang="ts">

import BasicNavBar from "./components/BasicNavBar.vue";
export default {
  name: 'App',
  components: {
    BasicNavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
