<template>
  <div>
    <header-component />
    <main>
      <h1>Home</h1>
      <p>Welcome to the Shopping List App!</p>
      <router-link to="/shopping-list">Go to Shopping List</router-link>
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "OfflineView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
main {
  flex: 1;
  padding: 1rem;
  text-align: center;
}
</style>
