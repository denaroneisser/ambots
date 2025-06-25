<template>
  <div class="container">
    <h1>Bem-vindo à <span class="highlight">AMBOTS</span></h1>

    <div class="sorteios">
      <router-link
        v-for="sorteio in sorteios"
        :key="sorteio.id"
        :to="`/sorteio/${sorteio.id}`"
        class="link"
      >
        <CardSorteio
          :titulo="sorteio.nome"
          :preco="`R$ ${sorteio.preco.toFixed(2)}`"
          :imagem="sorteio.imagem"
          :id = "sorteio.id"
          :cotasVendidas= "sorteio.CotasVencidadas"
          :totalCotas = "sorteio.totalCotas"

        />
      </router-link>
    </div>
  </div>
</template>

<script>
import CardSorteio from '../components/CardSorteio.vue'

export default {
  components: { CardSorteio },
  data() {
    return {
      sorteios: [
        {
          id: 2506,
          nome: 'USP-S | Monster Mashup',
          preco: 0.99,
          imagem: 'https://cs2pro.com.br/uploads/campanhas/1_USP-S%20Monster%20Mashup%20(Field-Tested).png?v=1750860776',
          cotasVendidas: 320,
        totalCotas: 500
        },
        {
          id: 2507,
          nome: 'AWP | Asiimov',
          preco: 1.50,
          imagem: 'https://dashskins-screenshots.s3.amazonaws.com/S76561199152559182A29947115412D16720810035064372783_frontside.png',
        cotasVendidas: 320,
        totalCotas: 500
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.highlight {
  color: #ed1d24;
}

.sorteios {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.link {
  text-decoration: none;
}
</style>
