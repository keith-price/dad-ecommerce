<script setup>
import ProductCard from '../components/ProductCard.vue'
</script>

<template>
  <main>
    <div class="product-grid">
      <ProductCard class="card" />
      <ProductCard class="card" />
      <ProductCard class="card" />
      <ProductCard class="card" />
      <ProductCard class="card" />
      <ProductCard class="card" />
    </div>
  </main>
</template>

<style>
main {
  height: 100vh;
  display: flex;
}

.product-grid {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px 0;
}

.card {
  box-shadow: var(--box-shadow-main);
}

.card:hover {
  transform: translateY(-1px);
  box-shadow: var(--box-shadow-large);
}
</style>
