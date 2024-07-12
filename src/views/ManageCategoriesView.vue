<template>
    <manage-categories />
</template>

<script>
import ManageCategories from '@/components/ManageCategories.vue'

export default {
    name: 'ManageCategoriesView',
    components: {
        ManageCategories,
    },
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: var(--primary-color);
}
</style>
