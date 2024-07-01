<template>
  <div>
    <add-item @add-item="addItem" :no-upf-mode="noUPFMode" />
    <draggable
      v-model="categories"
      @end="updateCategoryOrder"
      item-key="id"
      handle=".drag-handle"
    >
      <template #item="{ element }">
        <div>
          <span class="drag-handle" @click.stop>
            <img src="@/assets/drag-handle-icon.svg" alt="Drag" />
          </span>
          <h3 @click="toggleAccordion(element.name)">
            {{ element.name }}
          </h3>
          <ul v-show="openAccordions.includes(element.name)">
            <list-item
              v-for="item in itemsByCategory(element.name)"
              :key="item.id"
              :item="item"
              @remove-item="removeItem"
              @toggle-item="toggleItem"
            />
          </ul>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import draggable from "vuedraggable";
import AddItem from "./AddItem.vue";
import ListItem from "./ListItem.vue";

export default {
  name: "ShoppingList",
  components: {
    AddItem,
    ListItem,
    draggable,
  },
  computed: {
    ...mapGetters(["categories", "openAccordions", "noUPFMode"]),
  },
  methods: {
    ...mapActions([
      "addItem",
      "removeItem",
      "toggleItem",
      "reorderCategories",
      "setOpenAccordions",
      "toggleNoUPFMode",
    ]),
    toggleAccordion(category) {
      const index = this.openAccordions.indexOf(category);
      if (index === -1) {
        this.openAccordions.push(category);
      } else {
        this.openAccordions.splice(index, 1);
      }
      this.setOpenAccordions(this.openAccordions);
    },
    updateCategoryOrder(event) {
      const movedItem = this.categories.splice(event.oldIndex, 1)[0];
      this.categories.splice(event.newIndex, 0, movedItem);
      this.reorderCategories(this.categories);
    },
    itemsByCategory(categoryName) {
      return this.$store.state.items.filter(
        (item) => item.category === categoryName
      );
    },
    addItem(newItem) {
      this.$store.dispatch("addItem", newItem);
    },
    removeItem(item) {
      const index = this.$store.state.items.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        this.$store.dispatch("removeItem", index);
      }
    },
    toggleItem(item) {
      this.$store.dispatch("toggleItem", item);
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
h3 {
  cursor: pointer;
  margin-top: 1rem;
  background-color: #f0f0f0;
  padding: 0.5rem;
  display: inline-block;
}
h3:hover {
  background-color: #e0e0e0;
}
.drag-handle {
  cursor: grab;
  margin-right: 1rem;
  display: inline-block;
}
.drag-handle img {
  width: 16px;
  height: 16px;
}
</style>
