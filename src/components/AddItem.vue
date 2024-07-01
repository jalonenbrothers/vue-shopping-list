<template>
  <div>
    <AutoComplete
      v-model="newItem.text"
      :suggestions="suggestions"
      @keyup.enter="submitItem"
      placeholder="Add a new item"
      @complete="searchItems"
    />
    <select v-model="newItem.category">
      <option
        v-for="category in categories"
        :key="category.name"
        :value="category.name"
      >
        {{ category.name }}
      </option>
    </select>
    <button @click="submitItem">Add</button>
    <Dialog v-if="showDialog" :visible="showDialog" modal @hide="closeDialog">
      <template #header>
        <h3>Random Question</h3>
      </template>
      <p>{{ randomQuestion.question }}</p>
      <template #footer>
        <Button label="Yes" @click="handleYes" />
        <Button label="No" @click="handleNo" />
      </template>
    </Dialog>
  </div>
</template>

<script>
import AutoComplete from "primevue/autocomplete";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import { mapGetters } from "vuex";

export default {
  name: "AddItem",
  components: {
    AutoComplete,
    Dialog,
    Button,
  },
  data() {
    return {
      newItem: {
        text: "",
        category: "Other",
      },
      suggestions: [],
      defaultItems: ["Chicken", "Fish", "Hummus", "Eggs"],
      noUPFItems: ["Apple", "Banana", "Carrot", "Spinach"],
      showDialog: false,
      randomQuestion: {},
      questions: [
        {
          question: "Do you really need this item?",
          yesResponse: "Okay, let's add it.",
          noResponse: "Consider removing it then.",
        },
        {
          question: "Is this item healthy?",
          yesResponse: "Great, let's add it.",
          noResponse: "Maybe choose a healthier option.",
        },
        {
          question: "Can you make this item at home?",
          yesResponse: "That's awesome, let's add it.",
          noResponse: "Try making it at home sometime.",
        },
        {
          question: "Is this item on sale?",
          yesResponse: "Nice, let's add it.",
          noResponse: "Keep an eye out for sales.",
        },
      ],
      intervalId: null,
    };
  },
  computed: {
    ...mapGetters(["categories", "noUPFMode"]),
  },
  watch: {
    noUPFMode: {
      handler(newVal) {
        if (newVal) {
          this.startAutoAdd();
        } else {
          clearInterval(this.intervalId);
        }
      },
      immediate: true,
    },
  },
  methods: {
    submitItem() {
      if (this.newItem.text.trim() !== "") {
        if (this.noUPFMode && !this.noUPFItems.includes(this.newItem.text)) {
          this.randomQuestion =
            this.questions[Math.floor(Math.random() * this.questions.length)];
          this.showDialog = true;
        } else {
          this.addItem();
        }
      }
    },
    addItem() {
      this.$emit("add-item", {
        ...this.newItem,
        id: Date.now(),
        completed: false,
      });
      this.newItem.text = "";
      this.newItem.category = "Other";
    },
    searchItems(event) {
      const query = event.query.toLowerCase();
      const items = this.noUPFMode ? this.noUPFItems : this.defaultItems;
      this.suggestions = items.filter((item) =>
        item.toLowerCase().includes(query)
      );
    },
    closeDialog() {
      this.showDialog = false;
    },
    handleYes() {
      this.showDialog = false;
      this.addItem();
    },
    handleNo() {
      this.showDialog = false;
      // Optionally, you can show a message or take any other action here.
    },
    startAutoAdd() {
      this.intervalId = setInterval(() => {
        const randomItem =
          this.noUPFItems[Math.floor(Math.random() * this.noUPFItems.length)];
        this.$emit("add-item", {
          text: randomItem,
          category: "Other",
          id: Date.now(),
          completed: false,
        });
      }, 20000);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  gap: 0.5rem;
}
input {
  flex: 1;
}
select {
  flex: 1;
}
</style>
