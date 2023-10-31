<template>
  <button class="next-section-btn">
    <RouterLink :to="nextSection">
      <fai icon="fa-solid fa-arrow-down" />
    </RouterLink>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  nextSection: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.next-section-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $primary;
  border: 1px solid white;
  color: white;
  font-size: 2rem;
  text-align: center;

  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;

  transition: all 180ms ease;

  a { color: inherit; }
}

.next-section-btn:hover, .next-section-btn:focus {
  background-color: rgba($color: white, $alpha: 0.3);
  color: $primary;
  border: 1px solid $primary;
}
</style>
