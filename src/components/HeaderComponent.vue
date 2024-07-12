<template>
    <header>
        <NoUPFModeToggle />
        <h1 class="text-sm uppercase logo">
            <img
                src="img/shopping-list-logo-white-mix.png"
                alt="Shopping List logo"
            />
            <span>Shopping List</span>
        </h1>
        <theme-switcher />
    </header>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue'
import NoUPFModeToggle from './NoUPFModeToggle.vue'

export default {
    name: 'HeaderComponent',
    components: {
        ThemeSwitcher,
        NoUPFModeToggle,
    },
}
</script>

<style scoped>
header {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.25rem;
    background: var(--surface-d);
    border-bottom: solid 1px var(--surface-border);
    padding-bottom: 1px;
    position: relative;
    z-index: 1;
}
h1 {
    text-transform: uppercase;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 0.25rem;
}
.logo img {
    max-height: 1.25rem;
}
</style>
