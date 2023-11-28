<template>
  <div class="logo-container">
    <img :src="require('../assets/svg/' + svgUrl)" alt="logo container svg">
    <img src="../assets/logo.png" alt="" class="logo">
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, PropType } from 'vue';

const props = defineProps({
  svgUrl: { type: String, required: true, },
});
</script>

<style scoped lang="scss">
.logo-container {
  top: 0;

  img {
    width: 100% !important;
  }

  .logo {
    position: absolute;
    top: 20%;
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
