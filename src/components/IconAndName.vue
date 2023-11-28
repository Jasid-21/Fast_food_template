<template>
  <div class="icon-container">
    <fai :icon="[iconType, iconName]" />
    <span class="icon-name">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  iconType: { type: String, required: true },
  iconName: { type: String, required: true },
  text: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.icon-container {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  .icon-name {
    font-weight: 500;
    font-size: 0.75rem;
  }
}
</style>
