<template>
  <header>
    <theme-switcher />
    <NoUPFModeToggle />
  </header>
</template>

<script>
import ThemeSwitcher from "./ThemeSwitcher.vue";
import NoUPFModeToggle from "./NoUPFModeToggle.vue";

export default {
  name: "HeaderComponent",
  components: {
    ThemeSwitcher,
    NoUPFModeToggle,
  },
};
</script>

<style scoped>
header {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}
</style>
