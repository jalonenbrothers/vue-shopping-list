<template>
    <div>
        <shopping-list />
        <router-link class="text-center block p-4" to="/manage-categories">
            Manage Categories
        </router-link>
    </div>
</template>

<script>
import ShoppingList from '@/components/ShoppingList.vue'

export default {
    name: 'ShoppingListView',
    components: {
        ShoppingList,
    },
}
</script>
<style>
a {
    text-decoration: none;
    color: var(--primary-color);
}
</style>
