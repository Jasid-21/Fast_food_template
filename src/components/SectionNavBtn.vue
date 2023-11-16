<template>
  <a class="next-section-btn" :style="{ zIndex }" :href="nextSection">
    <div>
      <fai icon="fa-solid fa-arrow-down" />
    </div>
  </a>
</template>

<script setup lang="ts">
//* Defined.
const props = defineProps({
  nextSection: { type: String, required: true },
  zIndex: { type: Number },
});
</script>

<style scoped lang="scss">
.next-section-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $primary;
  border: 1px solid white;

  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
  transition: all 180ms ease;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: white;
    font-size: 2rem;
    text-align: center;
  }
}

.next-section-btn:hover, .next-section-btn:focus {
  background-color: rgba($color: white, $alpha: 0.3);
  color: $primary;
  border: 1px solid $primary;
}
</style>
