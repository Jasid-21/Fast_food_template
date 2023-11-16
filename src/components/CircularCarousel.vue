<template>
  <div class="carousel" :style="{ rotate: -rotation + 'deg' }">
    <div class="item" :class="{ active: idx == index }" v-for="(i, idx) of products" :key="idx"
     :style="{
        left: 200 - (i.initX || 0) + 'px',
        top: 200 - (i.initY || 0) + 'px',
        rotate: rotation + 'deg',
      }">
      <img class="sample-img" :alt="i.name"
        :src="require('@/assets/images/samples/' + i.imgUrl)">
      <div class="blured-border-div"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue';
import useProductsStore from '@/stores/productsWheel';

//* Defined.
const productsStore = useProductsStore();
const products = computed(() => productsStore.products);
const rotation = computed(() => productsStore.rotation);
const index = computed(() => productsStore.index);


//* Functions.
const interval = setInterval(() => {
    productsStore.setIndex();
  }, 3000);


//* Code.
productsStore.setFirstPosition();


//* Hooks.
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped lang="scss">
.carousel {
  $size: 400px;
  $time: 300ms;
  position: absolute;

  width: $size;
  height: $size;

  right: 0;

  translate: 60% 0;
  border-radius: 50%;
  transition: all $time ease;
  -o-transition: all $time ease;
  -moz-transition: all $time ease;
  -webkit-transition: all $time ease;
  transform: rotate(0deg);

  .item {
    position: absolute;
    padding: 0.1rem;
    border-radius: 50%;
    overflow: hidden;
    filter: grayscale(0.6);
    opacity: 0.5;

    translate: -50% -50%;

    transition: all $time ease;
    -o-transition: all $time ease;
    -moz-transition: all $time ease;
    -webkit-transition: all $time ease;

    .sample-img {
      $img_size: 80px;
      width: $img_size; 
      height: $img_size;
      border-radius: 50%;

      object-fit: cover;
    }

    .blured-border-div {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      background: $background;
      background: radial-gradient(circle, rgba(255,255,255,0) 52%, $background 67%, $background 76%);
    }
  }

  .item.active {
    filter: grayscale(0);
    opacity: 1;
  }
}
</style>
