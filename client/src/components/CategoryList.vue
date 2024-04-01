<template>
  <div class="category-list">
    <h2>Todo Categories</h2>
    <ul>
      <li v-for="category in categories" :key="category._id" @click="selectCategory(category._id)">
        {{ category.name }}
        <button @click.stop="editCategory(category)">Edit</button>
        <button @click.stop="deleteCategory(category)">Delete</button>
      </li>
    </ul>
    <button @click="addCategory">Add New Category</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: []
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/category/');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    selectCategory(categoryId) {
      // Emit an event to parent component to handle category selection
      this.$emit('categorySelected', categoryId);
    },
    async addCategory() {
      const categoryName = prompt('Enter category name:');
      if (categoryName) {
        try {
          const response = await axios.post('http://localhost:3000/api/category/', { name: categoryName });
          const newCategory = response.data;
          this.categories.push(newCategory);
        } catch (error) {
          console.error('Error adding category:', error);
        }
      }
    },
    async editCategory(category) {
      const updatedName = prompt('Enter updated category name:', category.name);
      if (updatedName) {
        try {
          const response = await axios.put(`http://localhost:3000/api/category/${category._id}`, { name: updatedName });
          const updatedCategory = response.data;
          const index = this.categories.findIndex(c => c._id === updatedCategory._id);
          if (index !== -1) {
            this.categories.splice(index, 1, updatedCategory);
          }
        } catch (error) {
          console.error('Error updating category:', error);
        }
      }
    },
    async deleteCategory(category) {
      const confirmDelete = confirm('Are you sure you want to delete this category?');
      if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:3000/api/category/${category._id}`);
          this.categories = this.categories.filter(c => c._id !== category._id);
        } catch (error) {
          console.error('Error deleting category:', error);
        }
      }
    }
  }
};
</script>

<style scoped>
.category-list {
  float: left;
}
</style>
