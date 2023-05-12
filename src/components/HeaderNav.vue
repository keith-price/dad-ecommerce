<script setup>
import { RouterLink } from 'vue-router'
import CartIcon from './icons/CartIcon.vue'
</script>

<template>
  <div class="nav-main">
    <div class="nav-contents">
      <div class="nav-left">Eden</div>
      <div class="nav-right">
        <CartIcon class="cart-icon" />
        <RouterLink class="link contact" to="/about">Contact</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.nav-main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 78px;
  background-color: var(--main-emerald-500);
  box-shadow: var(--box-shadow-main);
  color: var(--text-light-green);
}

.nav-contents {
  max-width: var(--page-width-large);
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 12px;
}

.nav-right {
  display: flex;
  align-items: center;
}

.nav-left {
  font-weight: 700;
  font-size: 1.75rem;
}

.link {
  text-decoration: none;
  color: var(--text-light-green);
}

.cart-icon {
  font-size: 1.75rem;
}

.contact {
  font-weight: 500;
  font-size: 1.5rem;
  margin-left: 24px;
}

@media only screen and (max-width: 1360px) {
  .nav-contents {
    max-width: var(--page-width-medium);
  }
}

@media only screen and (max-width: 880px) {
  .nav-contents {
    max-width: var(--page-width-small);
  }
}
</style>
