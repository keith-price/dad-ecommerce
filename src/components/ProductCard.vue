<script setup></script>

<template>
  <div class="card-container">
    <img src="../assets/images/pexels-juan-pablo-serrano-arenas-890669.jpg" alt="#" />

    <div class="product-details">
      <div class="product-name">
        <p>Nice Table</p>
      </div>
      <div class="product-price"><p>&#163;19.99</p></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card-container {
  background-color: var(--color-background);
  width: 350px;
  height: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

/* image needs to resize properly and not just stretch */
img {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-top);
}

.product-details {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: var(--main-emerald-500);
  border-radius: var(--border-radius-bottom);
  color: var(--text-light-green);
}

.product-details .product-name {
  font-weight: 500;
  font-size: 18px;
}

.product-details .product-price p {
  font-weight: bold;
  font-size: 18px;
}
</style>
