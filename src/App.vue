<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
import FooterNav from './components/FooterNav.vue'
</script>

<template>
  <HeaderNav />

  <RouterView />

  <FooterNav />
</template>
