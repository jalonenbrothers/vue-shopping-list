<template>
    <div class="flex header">
        <button @click="toggleTheme">
            <img
                :src="
                    currentTheme === 'saga-blue' ? lightModeIcon : darkModeIcon
                "
                alt="Theme Icon"
                class="theme-icon"
            />
        </button>
    </div>
</template>

<script>
import lightModeIcon from '@/assets/light-mode-icon.svg'
import darkModeIcon from '@/assets/dark-mode-icon.svg'

export default {
    data() {
        return {
            currentTheme: 'saga-blue',
            lightModeIcon,
            darkModeIcon,
        }
    },
    methods: {
        toggleTheme() {
            if (this.currentTheme === 'saga-blue') {
                this.changeTheme('saga-blue', 'vela-blue')
            } else {
                this.changeTheme('vela-blue', 'saga-blue')
            }
        },
        changeTheme(oldTheme, newTheme) {
            const themeLink = document.getElementById('theme-link')
            if (themeLink) {
                themeLink.href = `themes/${newTheme}/theme.css`
            } else {
                const link = document.createElement('link')
                link.id = 'theme-link'
                link.rel = 'stylesheet'
                link.href = `themes/${newTheme}/theme.css`
                document.head.appendChild(link)
            }
            this.currentTheme = newTheme
            localStorage.setItem('primevue-theme', newTheme)
        },
    },
    mounted() {
        const savedTheme = localStorage.getItem('primevue-theme') || 'saga-blue'
        this.currentTheme = savedTheme
        const themeLink = document.createElement('link')
        themeLink.id = 'theme-link'
        themeLink.rel = 'stylesheet'
        themeLink.href = `themes/${savedTheme}/theme.css`
        document.head.appendChild(themeLink)
    },
}
</script>

<style scoped>
button {
    padding: 0.875rem 1.375rem;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0 0 0 0.5rem;
    border-color: var(--surface-200);
    background: var(--surface-b);
    box-shadow: 2px 2px 5px var(--surface-200) inset;
}

.theme-icon {
    width: 20px;
    height: 20px;
}
</style>
