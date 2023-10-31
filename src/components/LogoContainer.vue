<template>
  <div class="logo-container" :style="style">
    <img :src="require('../assets/svg/' + svgUrl)" alt="logo container svg">
    <img src="../assets/logo.png" alt="" class="logo">
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, PropType } from 'vue';

const props = defineProps({
  svgUrl: { type: String, required: true, },
  style: { type: Object as PropType<CSSProperties>, required: false }
});
</script>

<style scoped lang="scss">
.logo-container {
  position: relative;
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
</style>
