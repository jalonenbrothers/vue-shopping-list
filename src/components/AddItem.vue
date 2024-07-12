<template>
    <div class="add-item">
        <AutoComplete
            v-model="newItem.text"
            :suggestions="suggestions"
            @keyup.enter="submitItem"
            placeholder="Add a new item"
            @complete="searchItems"
            class="item-input"
        />
        <Dropdown
            v-model="newItem.category"
            :options="categories"
            optionLabel="name"
            optionValue="name"
            placeholder="Select a Category"
            class="w-full"
        />
        <button @click="submitItem">
            <img src="@/assets/plus-icon.svg" class="plus-icon" alt="Add" />
            <span>Add</span>
        </button>
        <Dialog
            v-model:visible="showDialog"
            :visible="showDialog"
            modal
            @hide="closeDialog"
        >
            <template #header>
                <h2>Eddie wants to know</h2>
            </template>
            <div class="flex flex-column splash-content">
                <img
                    src="img/eddie1.png"
                    alt="{{
                        noUPFMode ? 'Disable No UPF Mode' : 'Enable No UPF Mode'
                    }}"
                    class="dialog-eddie"
                />
                <p v-if="showYes">{{ randomQuestion.yesResponse }}</p>
                <p v-else-if="showNo">{{ randomQuestion.noResponse }}</p>
                <p v-else>{{ randomQuestion.question }}</p>
            </div>
            <template #footer>
                <button @click="handleYes">Yes</button>
                <button @click="handleNo">No</button>
            </template>
        </Dialog>
    </div>
</template>

<script>
import AutoComplete from 'primevue/autocomplete'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import { mapGetters } from 'vuex'

export default {
    name: 'AddItem',
    components: {
        AutoComplete,
        Dialog,
        Dropdown,
    },
    data() {
        return {
            newItem: {
                text: '',
                category: 'Other',
            },
            suggestions: [],
            defaultItems: [
                'Chicken',
                'Fish',
                'Hummus',
                'Eggs',
                'Butter',
                'Rye Bread',
                'Steak',
                'Potatoes',
                'Tea',
                'Coffee',
                'Peanut butter',
                'Honey',
                'Cling film',
                'Crisps',
                'Ice cream',
                'Milk',
                'Olive oil',
                'Yoghurt',
                'Fish fingers',
                'Sausages',
                'Flour',
                'Tomatoes',
                'Baked beans',
                'Apples',
                'Carrots',
                'Bananas',
                'Strawberries',
                'Chips',
                'Oranges',
            ],
            noUPFItems: [
                'Broccoli',
                'Avocado',
                'Spinach',
                'Chicken thighs',
                'Chicken Wings',
                'Steak',
                'Eggs',
                'Duck eggs',
                'Goose eggs',
                'Butter',
                'Nuts',
                'Raspberries',
                'Peas',
            ],
            noUPFItemsCategories: [
                'Fruit & Veg',
                'Fruit & Veg',
                'Fruit & Veg',
                'Meat, Poultry & Fish',
                'Meat, Poultry & Fish',
                'Meat, Poultry & Fish',
                'Misc. Fridge items',
                'Misc. Fridge items',
                'Misc. Fridge items',
                'Dairy',
                'Snacks',
                'Fruit & Veg',
                'Frozen food',
            ],
            showDialog: false,
            showYes: false,
            showNo: false,
            randomQuestion: {},
            questions: [
                {
                    question: 'Do you really need this item?',
                    yesResponse: "Okay, let's add it.",
                    noResponse: 'Consider removing it then.',
                },
                {
                    question: 'Is this item healthy?',
                    yesResponse: "Great, let's add it.",
                    noResponse: 'Maybe choose a healthier option.',
                },
                {
                    question: 'Can you make this item at home?',
                    yesResponse: "That's awesome, let's add it.",
                    noResponse: 'Try making it at home sometime.',
                },
                {
                    question: 'Is this item on sale?',
                    yesResponse: "Nice, let's add it.",
                    noResponse: 'Keep an eye out for sales.',
                },
            ],
            questionIndex: -1,
            intervalId: null,
        }
    },
    computed: {
        ...mapGetters(['categories', 'noUPFMode']),
    },
    watch: {
        noUPFMode: {
            handler(newVal) {
                if (newVal) {
                    this.startAutoAdd()
                } else {
                    clearInterval(this.intervalId)
                }
            },
            immediate: true,
        },
    },
    methods: {
        submitItem() {
            if (this.newItem.text.trim() !== '') {
                if (
                    this.noUPFMode &&
                    !this.noUPFItems.includes(this.newItem.text)
                ) {
                    this.questionIndex = Math.floor(
                        Math.random() * this.questions.length
                    )
                    this.randomQuestion = this.questions[this.questionIndex]
                    this.showDialog = true
                    this.showYes = false
                    this.showNow = false
                } else {
                    this.addItem()
                }
            }
        },
        addItem() {
            this.$emit('add-item', {
                ...this.newItem,
                id: Date.now(),
                completed: false,
            })
            this.newItem.text = ''
            this.newItem.category = 'Other'
        },
        searchItems(event) {
            const query = event.query.toLowerCase()
            const items = this.noUPFMode ? this.noUPFItems : this.defaultItems
            this.suggestions = items.filter((item) =>
                item.toLowerCase().includes(query)
            )
        },
        closeDialog() {
            this.showDialog = false
        },
        handleYes() {
            //this.showDialog = false
            //this.addItem()
            this.showYes = true
            this.showNow = false
        },
        handleNo() {
            this.showNo = true
            this.showYes = false
            //this.showDialog = false
            // Optionally, you can show a message or take any other action here.
        },
        startAutoAdd() {
            this.intervalId = setInterval(() => {
                const randomIndex = Math.floor(
                    Math.random() * this.noUPFItems.length
                )
                const randomItem = this.noUPFItems[randomIndex]
                const randomCategory = this.noUPFItemsCategories[randomIndex]
                this.$emit('add-item', {
                    text: randomItem,
                    category: randomCategory, //'Other',
                    id: Date.now(),
                    completed: false,
                })
            }, 90000)
        },
    },
}
</script>

<style>
div.add-item {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;

    input {
        flex: 1;
    }
    select {
        flex: 1;
    }
    .plus-icon {
        width: 20px;
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
button span {
    display: none;
}
.p-dialog .p-dialog-footer {
    display: flex;
    justify-content: space-around;
}
.splash-content {
    align-items: center;
    img {
        max-width: 150px;
    }
}
@media screen and (max-width: 420px) {
    div.add-item {
        flex-direction: column;
        padding-inline: 0.5rem;
        padding-block: 0.5rem;
        & > * {
            width: 100%;
            min-height: 2.75rem;
        }
        .p-inputtext {
            width: 100%;
        }
        button {
            text-align: left;
            display: flex;
            align-items: center;
            width: auto;
        }
        button span {
            display: inline-block;
            padding-left: 0.5rem;
            font-size: 1.5rem;
            font-weight: bold;
        }
        .item-input {
            margin-bottom: 2.5rem;
        }
    }
}
</style>
