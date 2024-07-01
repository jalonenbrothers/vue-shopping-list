<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <h2>No UPF Mode Enabled</h2>
      <p>
        Welcome to the 'No UPF' mode! Here you will find a curated list of items
        free from Ultra-Processed Foods (UPFs).
      </p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashScreenModal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
