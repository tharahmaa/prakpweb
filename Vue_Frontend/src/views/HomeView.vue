<template>
  <div>
    <NavbarComp />
    <header class="bg-custom text-white text-center py-5">
      <h1 class="title display-4">
        <strong>Welcome to Our Todo List Page</strong>
      </h1>
      <p class="lead">List anything you want</p>
      <router-link to="/todo-list">
        <button class="btn btn-primary btn-lg">Get Started</button>
      </router-link>
    </header>

    <section class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <h2 class="title-2" style="text-align: center">
            <strong>Our Offer</strong>
          </h2>
          <p class="title-2" style="text-align: justify">
            Explore a comprehensive To Do List platform designed to streamline
            your tasks and boost productivity
          </p>
        </div>
        <div class="col-md-6">
          <h2 class="title-2" style="text-align: center">
            <strong>Choose Us</strong>
          </h2>
          <p class="title-2" style="text-align: justify">
            We prioritize user experience, offering a user friendly environment
            that adapts to your workflow
          </p>
        </div>
      </div>
    </section>

    <section class="bg-custom py-5">
      <div class="container text-center">
        <h2 style="color: #ffffff"><strong>Pemweb P-17</strong></h2>
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body bg-custom-nama text-white">
                <!-- Added Bootstrap classes -->
                <h5 class="card-title text-white">
                  <strong>Sylvia Febrianti</strong>
                </h5>
                <p class="card-text text-white">5027221019</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-body bg-custom-nama text-white">
                <!-- Added Bootstrap classes -->
                <h5 class="card-title text-white">
                  <strong>Agas Ananta</strong>
                </h5>
                <p class="card-text text-white">5027221004</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-body bg-custom-nama text-white">
                <!-- Added Bootstrap classes -->
                <h5 class="card-title text-white">
                  <strong>Atha Rahma Arianti</strong>
                </h5>
                <p class="card-text text-white">5027221030</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.title {
  color: #ffffff;
  font-size: 4em;
  font-weight: bold;
}

.title-2 {
  color: #ffffff;
}

.bg-custom {
  background-color: #5036a4;
  color: #000000;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: border 0.3s linear;
}
.bg-custom-nama {
  background-color: #160c48;
  color: #000000;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: border 0.3s linear;
}

header {
  background-color: #f8f9fa; /* Warna latar belakang header */
  padding: 50px; /* Ruang padding di dalam header */
  border-bottom: 1px solid #ccc; /* Garis bawah header */
}

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
</style>
