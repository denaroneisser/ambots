<template>
  <div class="card">
    <img :src="imagem" alt="Skin CS" />
    <h2>{{ titulo }}</h2>
    <p>{{ preco }}</p>
    <button>Participar</button>
  </div>
</template>

<script>
export default {
  props: ['titulo', 'preco', 'imagem']
}
</script>

<style scoped>
.card {
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #333;
  width: 220px;
  text-align: center;
  transition: 0.3s;
}

.card:hover {
  border-color: #ed1d24;
  transform: scale(1.03);
}

img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

p {
  color: #aaa;
  margin-bottom: 0.5rem;
}

button {
  background: #ed1d24;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

button:hover {
  background: #b3171d;
}
</style>
