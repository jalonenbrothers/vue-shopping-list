<template>
  <div>
    <button @click="toggleNoUPFMode">
      <img src="@/assets/no-upf-icon.svg" alt="No UPF Mode" class="upf-icon" />
      {{ noUPFMode ? "Disable No UPF Mode" : "Enable No UPF Mode" }}
    </button>
    <SplashScreenModal :visible="showSplash" @close="showSplash = false" />
  </div>
</template>

<script>
import SplashScreenModal from "./SplashScreenModal.vue";
import { mapState } from "vuex";

export default {
  name: "NoUPFModeToggle",
  components: {
    SplashScreenModal,
  },
  data() {
    return {
      showSplash: false,
    };
  },
  computed: {
    ...mapState({
      noUPFMode: (state) => state.noUPFMode,
    }),
  },
  methods: {
    toggleNoUPFMode() {
      this.$store.dispatch("toggleNoUPFMode");
      if (this.noUPFMode) {
        this.showSplash = true;
      }
    },
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

.upf-icon {
  width: 20px;
  height: 20px;
}
</style>
