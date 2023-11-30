<template>
  <div class="modal-container" v-if="showing">
    <Transition>
      <slot></slot>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  showing: { type: Boolean, required: true, default: false },
});
</script>

<style scoped lang="scss">
.modal-container {
  background-color: rgba($color: #000, $alpha: 0.7);

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  z-index: 1010;
}
</style>
