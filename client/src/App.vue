<template>
  <div id="app">
    <CategoryList @categorySelected="onCategorySelected" />
    <TaskList :selectedCategory="selectedCategory" v-if="selectedCategory" />
  </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    CategoryList,
    TaskList
  },
  data() {
    return {
      selectedCategory: null
    };
  },
  methods: {
    onCategorySelected(categoryId) {
      this.selectedCategory = categoryId;
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
}
</style>
