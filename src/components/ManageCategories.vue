<template>
    <div>
        <h2 class="text-sm text-center">Manage Categories</h2>
        <div class="category-form flex p-2">
            <input v-model="newCategory" placeholder="Add a new category" />
            <button @click="addCategory">Add Category</button>
        </div>
        <ul>
            <li
                class="flex m-2 p-2"
                v-for="category in categories"
                :key="category.id"
            >
                <div>{{ category.name }}</div>
                <button @click="removeCategory(category.name)">Remove</button>
            </li>
        </ul>
        <router-link class="text-center block p-4" to="/">
            Back to Shopping List
        </router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ManageCategories',
    data() {
        return {
            newCategory: '',
        }
    },
    computed: {
        ...mapGetters(['categories']),
    },
    methods: {
        ...mapActions(['addCategory', 'removeCategory']),
        addCategory() {
            if (this.newCategory.trim() !== '') {
                const newCategory = {
                    id: Date.now(),
                    name: this.newCategory.trim(),
                }
                this.$store.dispatch('addCategory', newCategory)
                this.newCategory = ''
            }
        },
        removeCategory(categoryName) {
            this.$store.dispatch('removeCategory', categoryName)
        },
    },
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    li {
        justify-content: space-between;
    }
}
button {
    color: var(--primary-color);
    background: var(--surface-e);
    padding: 0.5rem;
    margin-inline: var(--inline-spacing);
    border-radius: var(--border-radius);
    border-color: var(--surface-border);
}
.category-form {
    justify-items: space-between;
    input {
        flex-grow: 1;
    }
}
</style>
