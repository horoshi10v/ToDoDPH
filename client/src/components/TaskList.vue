<template>
  <div class="task-list">
    <h2>Tasks in {{ categoryName }}</h2>
    <ul v-if="tasks.length">
      <li v-for="task in tasks" :key="task._id">
        <input type="checkbox" :id="task._id" v-model="task.is_completed" @change="updateTaskStatus(task)">
        <label :for="task._id" :class="{ 'completed-task': task.is_completed }">{{ task.title }}</label>
      </li>
    </ul>
    <p v-else>No tasks found for this category.</p>
    <button @click="createNewTask">New Task</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['selectedCategory'],
  data() {
    return {
      tasks: [],
      categoryName: ''
    };
  },
  watch: {
    selectedCategory() {
      this.fetchCategoryName();
      this.fetchTasks();
    }
  },
  mounted() {
    if (this.selectedCategory) {
      this.fetchCategoryName();
      this.fetchTasks();
    }
  },
  methods: {
    async fetchCategoryName() {
      try {
        const response = await axios.get(`http://localhost:3000/api/category/${this.selectedCategory}`);
        this.categoryName = response.data.name;
      } catch (error) {
        console.error('Error fetching category name:', error);
      }
    },
    async fetchTasks() {
      try {
        const response = await axios.get(`http://localhost:3000/api/task/category/${this.selectedCategory}`);
        this.tasks = response.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async updateTaskStatus(task) {
      try {
        const response = await axios.put(`http://localhost:3000/api/task/${task._id}/complete`);
        console.log(response.data);
      } catch (error) {
        console.error('Error updating task status:', error);
      }
    },
    async createNewTask() {
      try {
        const title = prompt('Enter task title:');
        if (title) {
          const response = await axios.post(`http://localhost:3000/api/task/`, {
            title,
            category: this.selectedCategory,
            is_completed: false
          });
          const newTask = response.data;
          this.tasks.push(newTask);
        }
      } catch (error) {
        console.error('Error creating new task:', error);
      }
    }
  }
};
</script>

<style scoped>
.task-list {
  float: right;
}
.completed-task {
  text-decoration: line-through;
  color: #888;
}
</style>
