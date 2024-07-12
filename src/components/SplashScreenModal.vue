<template>
    <div v-if="visible" class="modal-overlay">
        <div class="modal-content">
            <h2 class="mb-3">
                Eddie Abbew
                <sup><small>TM</small></sup>
                No UPF mode
            </h2>
            <img
                src="img/eddie1.png"
                alt="{{
        noUPFMode ? 'Disable No UPF Mode' : 'Enable No UPF Mode'
      }}"
                class="splash-eddie"
            />
            <p class="my-2">
                No more
                <span>Sugary Sh#t!</span>
                Read the ingredients! Eat more eggs &#129370; &#129370; and
                chicken thighs &#x1f414; and avocado &#129361;!
            </p>
            <button @click="closeModal" class="mt-2 text-xl">Close</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SplashScreenModal',
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
    },
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    background: var(--surface-a);
    color: var(--text-color);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    margin: 2rem;
    box-shadow: 2px 2px 10px var(--surface-400) inset;

    img {
        border: solid var(--primary-color) 4px;
        border-radius: 50%;
    }
}
p {
    text-wrap: balance;
    max-width: 30ch;
    margin: auto;
    line-height: 1.4;
    span {
        font-weight: bold;
    }
}
button {
    color: var(--primary-color);
    background: var(--surface-e);
    padding: 0.5rem;
    margin-inline: var(--inline-spacing);
    border-radius: var(--border-radius);
    border-color: var(--surface-border);
    cursor: pointer;
}
.splash-eddie {
    max-width: 150px;
}
h2 {
    text-wrap: balance;
    font-size: 0.25rem 2rem 1rem;
    margin: auto;
    max-width: 20ch;
}
</style>
