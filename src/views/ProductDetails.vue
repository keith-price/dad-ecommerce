<script setup>
import { onMounted, ref } from 'vue'
import { useProductStore } from '../stores/product-store'

const productStore = useProductStore()

const targetProduct = ref({})

onMounted(async () => {
  const product = productStore.getProduct
  targetProduct.value = product
  console.log(targetProduct.value)
})
</script>

<template>
  <h1>{{ targetProduct.name }}</h1>
  <img :src="targetProduct.images" />
  <p>{{ targetProduct.description }}</p>
  <p v-if="targetProduct.prices">
    &#163;{{ (targetProduct.prices[0].unit_amount / 100).toFixed(2) }}
  </p>
</template>

<style lang="css" scoped>
img {
  width: 400px;
}
</style>
