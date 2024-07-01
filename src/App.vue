<template>
  <div id="app">
    <header-component />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: { HeaderComponent },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s, color 0.3s;
  background-color: var(--surface-section);
}
</style>
