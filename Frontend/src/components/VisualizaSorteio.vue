<template>
  <div class="visualiza">
    <div class="img-box">
      <img :src="sorteio.imagem" :alt="sorteio.nome" />
    </div>

    <div class="info-box">
      <h1>{{ sorteio.nome }}</h1>
      <p class="codigo">Sorteio #{{ sorteio.id }}</p>

      <div class="preco">
        <strong>R$ {{ sorteio.preco.toFixed(2) }}</strong> por cota
      </div>

      <div class="progresso">
        <div class="barra">
          <div class="preenchida" :style="{ width: progresso + '%' }"></div>
        </div>
        <p>{{ sorteio.cotasVendidas }} de {{ sorteio.totalCotas }} cotas vendidas</p>
      </div>

      <button @click="participar">Participar Agora</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      sorteio: {
        id: this.id,
        nome: 'USP-S | Monster Mashup',
        preco: 0.99,
        imagem: 'https://cs2pro.com.br/uploads/campanhas/1_USP-S%20Monster%20Mashup%20(Field-Tested).png?v=1750860776',
        cotasVendidas: 320,
        totalCotas: 500
      }
    }
  },
  computed: {
    progresso() {
      return ((this.sorteio.cotasVendidas / this.sorteio.totalCotas) * 100).toFixed(1)
    }
  },
  methods: {
    participar() {
      alert('Função de compra ainda será implementada!')
    }
  }
}
</script>


<style scoped>
.visualiza {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  background: #0f0f0f;
  color: white;
  font-family: 'Segoe UI', sans-serif;
}

.img-box {
  flex: 1;
  min-width: 300px;
}

.img-box img {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #333;
}

.info-box {
  flex: 1;
  min-width: 300px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.codigo {
  color: #aaa;
  margin-bottom: 1rem;
}

.preco {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.progresso {
  margin-bottom: 1.5rem;
}

.barra {
  background: #333;
  border-radius: 4px;
  height: 20px;
  overflow: hidden;
}

.preenchida {
  height: 100%;
  background: #ed1d24;
  transition: width 0.3s ease;
}

button {
  background: #ed1d24;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

button:hover {
  background: #b3171d;
}
</style>
