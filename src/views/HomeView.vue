<script setup>
import ProductCard from '../components/ProductCard.vue'
import products from '../data/products'
</script>

<template>
  <main>
    <div class="product-grid">
      <div v-for="(product, index) in products" :key="index">
        <ProductCard class="card" :product="product" />
      </div>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
}

.product-grid {
  max-width: 1200px;
  margin: 48px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px;
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
