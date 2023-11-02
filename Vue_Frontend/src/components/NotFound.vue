<template>
  <div class="error-container">
    <div class="error-content">
      <h1 class="error-title">404</h1>
      <p class="error-message">Page Not Found</p>
      <p class="error-description">Sorry, the page you are looking for is coming soon.</p>
      <router-link to="/" class="back-home-link">Back to Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #121212;
}

.error-content {
  text-align: center;
  color: #ffffff;
}

.error-title {
  font-size: 5em;
  font-weight: bold;
}

.error-message {
  font-size: 1.5em;
}

.error-description {
  margin-top: 20px;
  font-size: 1.2em;
}

.back-home-link {
  display: block;
  margin-top: 30px;
  font-size: 1em;
  color: #04B6A9; 
  text-decoration: none;
  transition: color 0.3s;
}

.back-home-link:hover {
  color: #02C2B9;
}
</style>
