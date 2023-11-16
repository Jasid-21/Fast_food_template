<template>
  <div class="bg-screen" :style="{ background: bg_string }">
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita alias cum at perspiciatis, hic animi error veniam quas similique officia deleniti modi facilis! Expedita rem excepturi quidem corporis! Expedita.</h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  opacity: { type: Number, default: 0.5 },
  bgRed: { type: Number, default: 0 },
  bgGreen: { type: Number, default: 0 },
  bgBlue: { type: Number, default: 0 },
});

const { opacity, bgRed, bgGreen, bgBlue } = props;
const bg_string = `rgba(${ bgRed }, ${ bgGreen }, ${ bgBlue }, ${ opacity })`;
</script>

<style scoped lang="scss">
.bg-screen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
