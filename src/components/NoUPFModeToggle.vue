<template>
    <div>
        <button @click="toggleNoUPFMode">
            <img
                :src="noUPFMode ? eddieIcon : noEddieIcon"
                alt="{{
        noUPFMode ? 'Disable No UPF Mode' : 'Enable No UPF Mode'
      }}"
                class="upf-icon"
            />
        </button>
        <SplashScreenModal :visible="showSplash" @close="showSplash = false" />
    </div>
</template>

<script>
import SplashScreenModal from './SplashScreenModal.vue'
import { mapState } from 'vuex'
//import noUPFIcon from "@/assets/no-upf-icon.svg";
//import darkModeIcon from "@/assets/dark-mode-icon.svg";
import eddieIcon from '@/assets/eddie1-32px.png'
import noEddieIcon from '@/assets//no-eddie1-32px.png'

export default {
    name: 'NoUPFModeToggle',
    components: {
        SplashScreenModal,
    },
    data() {
        return {
            showSplash: false,
            //noUPFIcon,
            //darkModeIcon,
            eddieIcon,
            noEddieIcon,
        }
    },
    computed: {
        ...mapState({
            noUPFMode: (state) => state.noUPFMode,
        }),
    },
    methods: {
        toggleNoUPFMode() {
            this.$store.dispatch('toggleNoUPFMode')
            if (this.noUPFMode) {
                this.showSplash = true
            }
        },
    },
}
</script>

<style scoped>
button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0 0 0.5rem 0;
    border-color: var(--surface-200);
    background: var(--surface-b);
    box-shadow: 2px 2px 5px var(--surface-200) inset;
}

.upf-icon {
    width: 32px;
    height: 32px;
    border: solid var(--primary-color) 2px;
    border-radius: 16px;
}
</style>
