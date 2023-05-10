<script setup>
import CopyrightIcon from './icons/CopyrightIcon.vue'
</script>

<template>
  <div class="footer-main">
    <div class="footer-content">
      <div class="footer-left">
        <CopyrightIcon class="copyright-icon" />
        <p>2023 Eden Products</p>
      </div>
      <div class="footer-right">Social Media Icons Here</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.footer-main {
  position: relative;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 78px;
  background-color: var(--main-bg-gray-50);
  box-shadow: var(--box-shadow-main);
}

.footer-content {
  max-width: var(--page-width-large);
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left {
  display: flex;
  align-items: center;
}

.copyright-icon {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-light-gray);
  margin-right: 4px;
}
</style>
