  <template>
    <div> 
    <div >
      <NavbarComp :tasks="tasks" @task-added="handleTaskAdded" /> 
      <router-view></router-view>
    </div>
  </div>
  </template>

  <script>
  // import Task from "./components/TestTask";
  import NavbarComp from '@/components/NavbarComp.vue';

  export default {
    name: "App",
    components: {
      NavbarComp
      
    },
    data() {
      return {
        tasks: [
        ],
      };
    },
    methods: {
    handleTaskAdded(newTasks) {
      this.tasks = newTasks;
    }
  }

  };
  </script>

