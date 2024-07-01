<template>
  <li :class="{ completed: item.completed }">
    <span @click="toggleItem(item)">{{ item.text }}</span>
    <button @click="removeItem(item)">Remove</button>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: Object,
  },
  methods: {
    removeItem() {
      this.$emit("remove-item", this.item);
    },
    toggleItem() {
      this.$emit("toggle-item", this.item);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
button {
  margin-left: 1rem;
}

li {
  padding: 1rem;
  border: 1px solid var(--primary-color);
  background-color: var(--background-color);
  color: var(--text-color);
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}
</style>
