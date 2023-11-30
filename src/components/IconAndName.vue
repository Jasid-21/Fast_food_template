<template>
  <div class="icon-container">
    <fai :icon="[icon.type, icon.name]" />
    <span class="icon-name" v-if="!icon.link">{{ icon.text }}</span>
    <a :href="icon.link" v-else>{{ icon.text }}</a>
  </div>
</template>

<script setup lang="ts">
import IconInfo from '@/types/IconInfo';
import { PropType } from 'vue';

const props = defineProps({
  icon: { type: Object as PropType<IconInfo>, required: true },
});
</script>

<style scoped lang="scss">
.icon-container {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  .icon-name {
    font-weight: 500;
    font-size: 1rem;
  }

  span, a {
    color: $text;
    color: inherit;
    text-decoration: none;
  }
}
</style>
