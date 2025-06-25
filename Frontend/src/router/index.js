// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import VisualizaSorteio from '../components/VisualizaSorteio.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sorteio/:id', name: 'VisualizaSorteio', component: VisualizaSorteio, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
