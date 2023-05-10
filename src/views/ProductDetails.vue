<template>
  <main>
    <div class="container">
      <div class="back-nav" @click="router.back">
        <ArrowBack class="arrow-back" />
        <p>Back</p>
      </div>
      <div class="inner-row">
        <div class="left">
          <img :src="targetProduct.images" />
        </div>
        <div class="right">
          <h1 class="product-name">{{ targetProduct.name }}</h1>
          <p class="product-price" v-if="targetProduct.prices">
            &#163;{{ (targetProduct.prices[0].unit_amount / 100).toFixed(2) }}
          </p>
          <div class="star-container">
            <StarIcon class="rating-star" />
            <StarIcon class="rating-star" />
            <StarIcon class="rating-star" />
            <StarIcon class="rating-star" />
            <StarIcon class="rating-star" />
          </div>
          <p class="product-description">{{ targetProduct.description }}</p>
          <button class="purchase-btn">Add to Cart</button>
          <div class="shipping">
            <div class="shipping-top">
              <ShippingIcon class="shipping-icon" />
              <p class="shipping-title">Shipping</p>
            </div>
            <p class="shipping-info">
              Shipping details and options will go here to let the customer know where you can ship
              to and any other options that are possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useProductStore } from '../stores/product-store'
import StarIcon from '../components/icons/StarIcon.vue'
import ShippingIcon from '../components/icons/ShippingIcon.vue'
import ArrowBack from '../components/icons/ArrowBack.vue'
import router from '../router'

const productStore = useProductStore()

const targetProduct = ref({})

onMounted(async () => {
  const product = productStore.getProduct
  targetProduct.value = product
  console.log(targetProduct.value)
})
</script>

<style lang="css" scoped>
main {
  display: flex;
  min-height: 100vh;
  max-width: var(--page-width-large);
}

.container {
  margin: 192px 0;
  display: flex;
  flex-direction: column;
}

.back-nav {
  display: flex;
  align-items: center;
  color: var(--main-emerald-500);
  max-width: fit-content;
  margin-bottom: 16px;
}

.back-nav:hover {
  cursor: pointer;
}

.back-nav p {
  font-weight: 700;
  font-size: 1.25rem;
  transform: translateY(-1px);
}

.arrow-back {
  font-size: 1.5rem;
  margin-right: 8px;
}

.inner-row {
  display: flex;
  justify-content: space-between;
}

img {
  max-width: 700px;
  border-radius: var(--border-radius-full);
  box-shadow: var(----box-shadow---box-shadow-large);
}

.product-name {
  color: var(--text-dark-main);
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: var(--margin-bottom);
}

.product-price {
  margin-bottom: var(--margin-bottom);
  font-weight: 600;
  font-size: 1.75rem;
  color: var(--main-emerald-500);
}

.rating-star {
  color: #f5e239;
  font-size: 1.25rem;
  margin-bottom: var(--margin-bottom);
}
.right {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
}

.product-description {
  margin-bottom: var(--margin-bottom);
  color: var(--text-light-grey);
}

.purchase-btn {
  background-color: var(--main-emerald-500);
  height: 55px;
  width: 470px;
  border: none;
  border-radius: var(--border-radius-full);
  color: var(--text-light-green);
  font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: var(--margin-bottom);
}

.shipping {
  max-width: 470px;
}

.shipping-top {
  display: flex;
  align-items: center;
  margin-bottom: var(--margin-bottom);
}

.shipping-icon {
  margin-right: 16px;
  color: var(--text-extra-light);
  font-size: 1.25rem;
}
</style>
