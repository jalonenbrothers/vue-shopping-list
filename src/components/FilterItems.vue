<template>
    <div>
        <select v-model="selectedCategory" @change="filterItems">
            <option value="">All Categories</option>
            <option
                v-for="category in categories"
                :key="category"
                :value="category"
            >
                {{ category }}
            </option>
        </select>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'FilterItems',
    data() {
        return {
            selectedCategory: '',
        }
    },
    computed: {
        ...mapGetters(['categories']),
    },
    methods: {
        filterItems() {
            this.$emit('filter-items', this.selectedCategory)
        },
    },
}
</script>

<style scoped>
select {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
}
</style>
