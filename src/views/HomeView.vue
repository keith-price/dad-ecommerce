<script setup>
import ProductCard from '../components/ProductCard.vue'
import products from '../data/products'
</script>

<template>
  <main>
    <div class="page-heading">
      <h1>Our Products</h1>
    </div>
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
  margin: 12px auto 96px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px 0;
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
