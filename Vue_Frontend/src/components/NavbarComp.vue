<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
    <a class="navbar-brand" href="/">P-17</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/" style="font-weight: bold; font-size: 1.2em;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/todo-list" style="font-weight: bold; font-size: 1.2em;">Get Started</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/404" style="font-weight: bold; font-size: 1.2em;">Coming Soon</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComp',
  data() {
    return {
      localTasks: this.tasks
    };
  },

  methods: {
    addTask() {
      this.tasks.push({ id: Date.now(), text: 'Tugas baru' });
      this.$emit('task-added', this.tasks);
    }
  }
}
</script>

<style scoped>
  .bg-custom {
    background-color: #2f2b42;
  }
</style>
