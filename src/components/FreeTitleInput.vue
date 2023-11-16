<template>
  <div class="input-container">
    <input type="text" v-model="text" ref="input">
    <span class="input-title" :class="{ persist: text.length }" @click="focus">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

//* Defined.
const emit = defineEmits(['send-to-parent']);
const props = defineProps({
  title: { type: String }
});
const input = ref<HTMLElement>();
const text = ref<string>('');

//* Functions.
const focus = () => {
  input.value?.focus();
}

const sendToParent = () => {
  emit('send-to-parent', text.value);
}

//* Hooks.
watch(text, () => {
  sendToParent();
});
</script>

<style scoped lang="scss">
@mixin UpperText($persist) {
  font-size: if($persist == true, 0.8rem !important, 0.8rem);
  top: 2px;
  text-shadow: -1px -1px white;
}

.input-container {
  position: relative;
  color: $d_secondary;

  input {
    @include inputStyle($secondary);
  }

  .input-title {
    position: absolute;
    left: 10px;
    font-size: 0.875rem;
    font-style: italic;
    top: 50%;
    translate: 0 -50%;
    text-wrap: nowrap;

    transition-property: font-size, top;
    transition-duration: 180ms;
  }

  .input-title.persist {
    @include UpperText(true);
  }

  input:focus + .input-title {
    @include UpperText(false);
  }
}
</style>
