<template>
    <Dialog header="Question" :visible="true" modal>
        <p>{{ question }}</p>
        <Button label="Yes" @click="respond('yes')" />
        <Button label="No" @click="respond('no')" />
    </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

export default {
    name: 'QuestionModal',
    components: {
        Dialog,
        Button,
    },
    props: {
        question: {
            type: String,
            required: true,
        },
    },
    methods: {
        respond(answer) {
            this.$emit('close', answer)
        },
    },
}
</script>

<style scoped>
p {
    margin: 1rem 0;
}
</style>
