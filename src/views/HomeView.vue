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
}

.card:hover {
  transform: translateY(-1px);
  box-shadow: var(--box-shadow-large);
}
</style>
