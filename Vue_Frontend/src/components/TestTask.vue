<template>
  <section>
    <div class="container">
      <div class="task">
        <!-- title -->
        <div class="title">
          <h1>Todo-List</h1>
        </div>
        <!-- form -->
        <div class="form">
          <input type="text" placeholder="New Task" v-model="newTask" />
          <!-- Menggunakan <select> untuk memilih kategori -->
          <select v-model="newCategory" class="category-select">
            <option value="Work">Work</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option value="Health and Fitness">Health and Fitness</option>
            <option value="Events and Holidays">Events and Holidays</option>
            <option value="Routine Tasks">Routine Tasks</option>
          </select>
          <button @click="addTask"><i class="fas fa-plus"></i></button>
        </div>
        <!-- task lists -->
        <div class="taskItems">
          <ul>
            <!-- Loop melalui array tasks dan menampilkan setiap tugas -->
            <li v-for="task in tasks" :key="task.id">
              <button @click="toggleCompleted(task.id)">
                <i
                  class="far"
                  :class="{
                    'fa-check-circle': task.completed,
                    'fa-circle': !task.completed,
                  }"
                ></i>
              </button>
              {{ task.title }} (Category: {{ task.category }})
              <button @click="deleteTask(task.id)">
                <i class="far fa-trash-alt"></i>
              </button>
            </li>
          </ul>
        </div>
        <!-- buttons -->
        <div class="clearBtns">
          <button @click="clearCompleted">Clear completed</button>
          <button @click="clearAll">Clear all</button>
        </div>
        <!-- pending task -->
        <div class="pendingTasks">
          <span>Pending Tasks: {{ pendingTasks }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'; 
export default {
  name: "TestTask",
  data() {
    return {
      newTask: "",
      newCategory: "",
      tasks: [],
    };
  },
  created() {
    this.getTodos(); 
  },
  computed: {
    pendingTasks() {
      return this.tasks.filter((task) => !task.completed).length;
    },
  },
  methods: {
    async addTask() {
      if (this.newTask.trim() !== "") {
        const newTask = {
          title: this.newTask,
          category: this.newCategory,
          completed: false,
        };

        try {
          const response = await axios.post('http://localhost:3000/api/todo', newTask);

          if (response.status === 200) {
            console.log('Task created:', response.data);

            this.tasks.push(response.data);
            this.newTask = "";
            this.newCategory = "";
          }
        } catch (error) {
          console.error('Error creating task:', error);
        }
      }
    },
    async getTodos() {
      try {
        const response = await axios.get('http://localhost:3000/api/todo'); 
        this.tasks = response.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async toggleCompleted(taskId) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;

        try {
          const response = await axios.put(`http://localhost:3000/api/todo/${taskId}`, task); 
          if (response.status === 200) {
            console.log('Task updated:', response.data);
          }
        } catch (error) {
          console.error('Error updating task:', error);
        }
      }
    },
    async deleteTask(taskId) {
      try {
        const response = await axios.delete(`http://localhost:3000/api/todo/${taskId}`); 
        if (response.status === 200) {
          console.log('Task deleted:', taskId);
          this.tasks = this.tasks.filter((task) => task.id !== taskId);
        }
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
    async clearCompleted() {
      const completedTasks = this.tasks.filter((task) => task.completed);
      for (const task of completedTasks) {
        try {
          await axios.delete(`http://localhost:3000/api/todo/${task.id}`); 
          console.log('Task cleared:', task.id);
          this.tasks = this.tasks.filter((t) => t.id !== task.id);
        } catch (error) {
          console.error('Error clearing task:', error);
        }
      }
    },
    async clearAll() {
      try {
        await axios.delete('http://localhost:3000/api/todo'); 
        console.log('All tasks cleared');
        this.tasks = [];
      } catch (error) {
        console.error('Error clearing all tasks:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Gaya untuk elemen <select> */
.category-select {
  width: 100%;
  height: 50px;
  font: 15px/1.4 "Poppins", sans-serif;
  padding: 15px;
  background: #f3f3f388;
  color: #000000;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: border 0.3s linear;
}

.category-select:focus {
  outline: none;
  border: 1px solid #904ec5;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
