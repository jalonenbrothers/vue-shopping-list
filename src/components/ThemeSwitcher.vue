<template>
  <div class="flex header">
    <button @click="toggleTheme">
      <img
        :src="currentTheme === 'saga-blue' ? lightModeIcon : darkModeIcon"
        alt="Theme Icon"
        class="theme-icon"
      />
      <!--{{
        currentTheme === "saga-blue"
          ? "Switch to Dark Mode"
          : "Switch to Light Mode"
    }}-->
    </button>
  </div>
</template>

<script>
import lightModeIcon from "@/assets/light-mode-icon.svg";
import darkModeIcon from "@/assets/dark-mode-icon.svg";

export default {
  data() {
    return {
      currentTheme: "saga-blue",
      lightModeIcon,
      darkModeIcon,
    };
  },
  methods: {
    toggleTheme() {
      if (this.currentTheme === "saga-blue") {
        this.changeTheme("saga-blue", "vela-blue");
      } else {
        this.changeTheme("vela-blue", "saga-blue");
      }
    },
    changeTheme(oldTheme, newTheme) {
      const themeLink = document.getElementById("theme-link");
      if (themeLink) {
        themeLink.href = `themes/${newTheme}/theme.css`;
      } else {
        const link = document.createElement("link");
        link.id = "theme-link";
        link.rel = "stylesheet";
        link.href = `themes/${newTheme}/theme.css`;
        document.head.appendChild(link);
      }
      this.currentTheme = newTheme;
      localStorage.setItem("primevue-theme", newTheme);
    },
  },
  mounted() {
    const savedTheme = localStorage.getItem("primevue-theme") || "saga-blue";
    this.currentTheme = savedTheme;
    const themeLink = document.createElement("link");
    themeLink.id = "theme-link";
    themeLink.rel = "stylesheet";
    themeLink.href = `themes/${savedTheme}/theme.css`;
    document.head.appendChild(themeLink);
  },
};
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.theme-icon {
  width: 20px;
  height: 20px;
}
</style>
