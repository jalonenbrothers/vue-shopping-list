<template>
  <div>
    <shopping-list />
    <router-link to="/manage-categories">Manage Categories</router-link>
  </div>
</template>

<script>
import ShoppingList from "@/components/ShoppingList.vue";

export default {
  name: "ShoppingListView",
  components: {
    ShoppingList,
  },
};
</script>
