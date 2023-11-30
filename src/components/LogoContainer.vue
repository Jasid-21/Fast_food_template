<template>
  <div class="logo-container">
    <span class="bussiness-name">
      {{ bussiness }}
    </span>
    <img :src="require('../assets/svg/' + svgUrl)" alt="logo container svg">
    <img src="../assets/logo.png" alt="" class="logo">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  svgUrl: { type: String, required: true, },
  bussiness: String,
});
</script>

<style scoped lang="scss">
.logo-container {
  top: 0;

  .bussiness-name {
    position: absolute;
    top: 10%;
    left: 50%;
    translate: -50% 0;

    font-size: 0.85rem;
    font-weight: 700;
    color: $d_primary;
  }

  img {
    width: 100% !important;
  }

  .logo {
    position: absolute;
    top: 22%;
    left: 50%;
    translate: -50% 0;
  }
}

.logo-container.center {
  left: 50%;
  translate: -50% 0;
}

.logo-container.start {
  left: 0;
}
</style>
