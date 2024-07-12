<template>
    <li :class="{ completed: item.completed }">
        <span @click="toggleItem(item)">{{ item.text }}</span>
        <button @click="removeItem(item)">Remove</button>
    </li>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        item: Object,
    },
    methods: {
        removeItem() {
            this.$emit('remove-item', this.item)
        },
        toggleItem() {
            this.$emit('toggle-item', this.item)
        },
    },
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
button {
    color: var(--primary-color);
    background: var(--surface-e);
    padding: 0.5rem;
    margin-inline: var(--inline-spacing);
    border-radius: var(--border-radius);
    border-color: var(--surface-border);
}

li {
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--primary-color);
    background-color: var(--background-color);
    color: var(--text-color);
    border-radius: var(--border-radius);
    transition: background-color 0.3s, color 0.3s;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
}
span {
    text-transform: capitalize;
}
</style>
