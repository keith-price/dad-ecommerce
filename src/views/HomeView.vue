<script setup>
import { onMounted, computed, ref } from 'vue'
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../stores/product-store'
import router from '../router/index'
import LoadingIcon from '../components/icons/LoadingIcon.vue'

const productStore = useProductStore()

const onClickHandler = (product) => {
  productStore.setProduct(product)
  router.push({ name: 'product-details' })
  console.log(product.name)
}

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
    <div v-if="!products.length" class="loading">
      <LoadingIcon class="loading-icon" />
    </div>
    <div v-else class="page-heading">
      <h1>Our Products</h1>
    </div>
    <div class="product-grid">
      <div v-for="(product, index) in activeProducts" :key="index">
        <ProductCard class="card" :product="product" @click.prevent="onClickHandler(product)" />
      </div>
    </div>
  </main>
</template>

<style>
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: var(--page-width-large);
  margin: 0 auto;
  padding: 0 12px;
}

.loading {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

/* breakpoint 1360px (this is where the content starts to look squashed) */
@media only screen and (max-width: 1360px) {
  main {
    max-width: var(--page-width-medium);
  }

  .product-grid {
    margin: 12px auto auto;
    justify-content: space-between;
    gap: 96px 0;
  }
}

/* breakpoint px (this is where the content starts to look squashed) */
@media only screen and (max-width: 880px) {
  main {
    max-width: var(--page-width-small);

    align-items: center;
  }

  .product-grid {
    margin: 12px auto;
    justify-content: center;
    align-items: center;
    gap: 48px;
  }
}
</style>
