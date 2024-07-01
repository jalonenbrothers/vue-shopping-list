import { createRouter, createWebHistory } from "vue-router";
import OfflineView from "../views/OfflineView.vue";
import ShoppingListView from "../views/ShoppingListView.vue";
import ManageCategoriesView from "../views/ManageCategoriesView.vue";

const routes = [
  {
    path: "/",
    name: "ShoppingList",
    component: ShoppingListView,
  },
  {
    path: "/manage-categories",
    name: "ManageCategories",
    component: ManageCategoriesView,
  },
  {
    path: "/offline",
    name: "Offline",
    component: OfflineView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
