<template>
  <div>
    <h2 class="text-sm">Manage Categories</h2>
    <div>
      <input v-model="newCategory" placeholder="Add a new category" />
      <button @click="addCategory">Add Category</button>
    </div>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
        <button @click="removeCategory(category.name)">Remove</button>
      </li>
    </ul>
    <router-link to="/">Back to Shopping List</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ManageCategories",
  data() {
    return {
      newCategory: "",
    };
  },
  computed: {
    ...mapGetters(["categories"]),
  },
  methods: {
    ...mapActions(["addCategory", "removeCategory"]),
    addCategory() {
      if (this.newCategory.trim() !== "") {
        const newCategory = {
          id: Date.now(),
          name: this.newCategory.trim(),
        };
        this.$store.dispatch("addCategory", newCategory);
        this.newCategory = "";
      }
    },
    removeCategory(categoryName) {
      this.$store.dispatch("removeCategory", categoryName);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
button {
  margin-left: 1rem;
}
</style>
