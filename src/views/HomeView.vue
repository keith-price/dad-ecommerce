<script setup>
import { onMounted, computed, ref } from 'vue'
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'

let products = ref([])

onMounted(async () => {
  const { data } = await axios.get('/.netlify/functions/get-products')
  products.value = data
})

const activeProducts = computed(() => {
  return products.value.filter((product) => product.active == true)
})
</script>

<template>
  <main>
    <div class="page-heading">
      <h1>Our Products</h1>
    </div>
    <div class="product-grid">
      <div v-for="(product, index) in activeProducts" :key="index">
        <ProductCard class="card" :product="product" />
      </div>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  max-width: var(--page-width-large);
  margin: 0 auto;
}

.page-heading {
  margin-top: 48px;
}

.page-heading h1 {
  color: var(--text-light-gray);
  font-weight: 700;
  font-size: 2.5rem;
}

.product-grid {
  margin: 12px auto 120px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 96px 0;
}

.card {
  box-shadow: var(--box-shadow-main);
  transition: all 0.3s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--box-shadow-large);
}
</style>
