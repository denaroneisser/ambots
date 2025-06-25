<template>
  <header class="header">
    <div class="logo">AMBOTS</div>
    <nav>
      <a href="#">Sorteios</a>
      <a href="#">Login</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #1a1a1a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
}

.logo {
  font-size: 1.5rem;
  color: #ed1d24;
  font-weight: bold;
}

nav a {
  color: white;
  margin-left: 1rem;
  font-weight: 500;
  transition: 0.3s;
}

nav a:hover {
  color: #ed1d24;
}
</style>
