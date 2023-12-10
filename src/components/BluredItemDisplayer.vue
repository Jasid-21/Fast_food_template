<template>
  <div class="result-container">
    <div class="result-image-container">
      <img :src="require('@/assets/images/samples/' + products[index].imgUrl)" class="result-image">
      <div class="result-border-blur"></div>
    </div>
    <div class="result-info-container">
      <div class="result-title-container">
        <h3 class="result-title">{{ products[index].name }}</h3>
        <span class="price">${{ products[index].price }}</span>
      </div>
      <p class="result-description">{{ products[index].desc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useProductsStore from '@/stores/productsWheel';

//* Defined.
const productsStore = useProductsStore();
const products = computed(() => productsStore.products);
const index = computed(() => productsStore.getIndex);
</script>

<style scoped lang="scss">
.result-container {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;

  @media (max-width: $ml) {
    flex-direction: column;
  }

  .result-image-container {
    padding: 0.5rem;
    position: relative;
    .result-image {
      width: 300px;
      height: 300px;
      border-radius: 50%;

      @media (max-width: $lg) {
        width: 250px;
        height: 250px;
      }
    }

    .result-border-blur {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 50%;

      background: $background;
      background: radial-gradient(circle, rgba(255,255,255,0) 52%, $background 67%, $background 76%);
    }
  }

  .result-info-container {
    margin-top: 2rem;
    .result-title-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .result-title {
        margin: 0;
      }

      .price {
        color: $accent;
        font-weight: 700;
      }
    }

    .result-description {
      font-size: 1.0625rem;
      color: $l_text;
      font-style: italic;
    }
  }
}
</style>