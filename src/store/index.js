import { createStore } from 'vuex'

const presetCategories = [
    { id: 1, name: 'Fruit & Veg' },
    { id: 2, name: 'Meat, Poultry & Fish' },
    { id: 3, name: 'Misc. Fridge items' },
    { id: 4, name: 'Dairy' },
    { id: 5, name: 'Snacks' },
    { id: 6, name: 'Canned Food and Oils' },
    { id: 7, name: 'Veg 2 & Snacks 2' },
    { id: 8, name: 'Housekeeping' },
    { id: 9, name: 'Frozen Food' },
    { id: 10, name: 'Bakery & Breakfast' },
    { id: 11, name: 'Other' },
    // Add more preset categories here
]

const localCategories = JSON.parse(localStorage.getItem('categories')) || []
const removedCategories =
    JSON.parse(localStorage.getItem('removedCategories')) || []
const mergedCategories = [
    ...new Map(
        [...localCategories, ...presetCategories]
            .filter((category) => !removedCategories.includes(category.name))
            .map((item) => [item.id, item])
    ).values(),
]

const state = {
    noUPFMode: JSON.parse(localStorage.getItem('noUPFMode')) || false,
    categories: mergedCategories,
    items: JSON.parse(localStorage.getItem('items')) || [],
    removedCategories: removedCategories,
    openAccordions: JSON.parse(localStorage.getItem('openAccordions')) || [],
}

const mutations = {
    setNoUPFMode(state, mode) {
        state.noUPFMode = mode
        localStorage.setItem('noUPFMode', JSON.stringify(mode))
    },
    setCategories(state, categories) {
        state.categories = categories
        localStorage.setItem('categories', JSON.stringify(categories))
    },
    setItems(state, items) {
        state.items = items
        localStorage.setItem('items', JSON.stringify(items))
    },
    addCategory(state, category) {
        state.categories.push(category)
        localStorage.setItem('categories', JSON.stringify(state.categories))
    },
    removeCategory(state, categoryName) {
        state.categories = state.categories.filter(
            (category) => category.name !== categoryName
        )
        state.removedCategories.push(categoryName)
        localStorage.setItem('categories', JSON.stringify(state.categories))
        localStorage.setItem(
            'removedCategories',
            JSON.stringify(state.removedCategories)
        )
    },
    addItem(state, item) {
        state.items.push(item)
        localStorage.setItem('items', JSON.stringify(state.items))
    },
    removeItem(state, index) {
        state.items.splice(index, 1)
        localStorage.setItem('items', JSON.stringify(state.items))
    },
    toggleItem(state, item) {
        const index = state.items.findIndex((i) => i.id === item.id)
        if (index !== -1) {
            state.items[index].completed = !state.items[index].completed
            localStorage.setItem('items', JSON.stringify(state.items))
        }
    },
    reorderCategories(state, categories) {
        state.categories = categories
        localStorage.setItem('categories', JSON.stringify(state.categories))
    },
    setOpenAccordions(state, accordions) {
        state.openAccordions = accordions
        localStorage.setItem(
            'openAccordions',
            JSON.stringify(state.openAccordions)
        )
    },
}

const actions = {
    toggleNoUPFMode({ commit, state }) {
        commit('setNoUPFMode', !state.noUPFMode)
    },
    setCategories({ commit }, categories) {
        commit('setCategories', categories)
    },
    setItems({ commit }, items) {
        commit('setItems', items)
    },
    addCategory({ commit }, category) {
        commit('addCategory', category)
    },
    removeCategory({ commit }, categoryName) {
        commit('removeCategory', categoryName)
    },
    addItem({ commit }, item) {
        commit('addItem', item)
    },
    removeItem({ commit }, index) {
        commit('removeItem', index)
    },
    toggleItem({ commit }, item) {
        commit('toggleItem', item)
    },
    reorderCategories({ commit }, categories) {
        commit('reorderCategories', categories)
    },
    setOpenAccordions({ commit }, accordions) {
        commit('setOpenAccordions', accordions)
    },
}

const getters = {
    categories: (state) => state.categories,
    items: (state) => state.items,
    openAccordions: (state) => state.openAccordions,
    noUPFMode: (state) => state.noUPFMode,
}

export default createStore({
    state,
    mutations,
    actions,
    getters,
})
