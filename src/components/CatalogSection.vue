<template>
  <section class="catalog-section" id="catalog-section">
    <h2 class="section-title">Our catalog</h2>
    <form class="filter-form">
      <FreeTitleInput title="Name" @send-to-parent="(v: string) => name = v" />
      <select id="type" class="filter-input" v-model="type">
        <option value="__none__">Type</option>
        <option :value="t" v-for="(t, idx) of types" :key="idx">{{ t }}</option>
      </select>
      <div class="price-range-container">
        <input type="number" id="minp" class="filter-input" placeholder="Min" v-model="minP">
        <input type="number" id="maxp" class="filter-input" placeholder="Max" v-model="maxP">
      </div>
    </form>

    <div class="displayer">
      <div class="product-item" v-for="(i, idx) of applyFilter()"
        :key="idx" @click="openProductModal(i)">
        <img :src="require('@/assets/images/samples/' + i.imgUrl)"
          :alt="i.name" class="product-img">
        <div class="info-layer">
          <h4 class="product-name">{{ i.name }}</h4>
          <span class="product-type">{{ i.type }}</span>
          <span class="product-price important">${{ i.price }}</span>
        </div>
      </div>
    </div>
    <div class="description"></div>
    <Teleport to="#modals">
      <ProductModal />
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import j_types from '@/json/productTypes.json';
import j_products from '@/json/products.json';
import Product from '@/types/Product.type';
import useModalState from '@/stores/modalState';

import FreeTitleInput from './FreeTitleInput.vue';
import ProductModal from './ProductModal.vue';

//* Defined.
const modalState = useModalState();
const original_products:Product[] = j_products.products;
const products: Product[] = [...original_products];
const types: string[] = j_types.types;

const name = ref<string>('');
const minP = ref<number>(0);
const maxP = ref<number>(Infinity);
const type = ref<string>('__none__');

//* Functions.
const openProductModal = (product: Product) => {
  modalState.setProduct(product);
}

const applyFilter = (): Product[] => {
  const byName = name.value.trim()?
    products.filter((p) => p.name.toLowerCase().includes(name.value.toLowerCase()))
    :products;
  const byPrice = byName.filter((p) => p.price >= minP.value && p.price <= maxP.value);
  const byType = type.value == '__none__'?byPrice:byPrice.filter((p) => p.type == type.value);

  return byType;
}

//* Hooks.
watch(name, (newV, oldV) => {
  console.log(newV);
});

watch(minP, (newV, oldV) => {
  if (!newV.toString().trim()) minP.value = 0;
});

watch(maxP, (newV, oldV) => {
  if (!newV.toString().trim()) maxP.value = Infinity;
});
</script>

<style scoped lang="scss">
.catalog-section{
  background-color: $background;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  .filter-form {
    width: 100%;
    max-width: 600px;
    padding: 1rem;
    border: 1px solid $d_secondary;
    border-radius: 10px;

    display: grid;
    column-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;

    .filter-input {
      @include inputStyle($secondary);
      font-style: italic;
    }

    select.filter-input {
      padding-top: 0;
      padding-bottom: 0;
    }

    .price-range-container {
      display: flex;
      column-gap: 0.5rem;
    }
  }

  .displayer {
    padding: 1rem;
    border-top: 1px solid gray;

    display: flex;
    column-gap: 1rem;
    row-gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;

    .product-item {
      $size: 200px;
      width: $size;
      height: $size;

      border-radius: 5px;
      box-shadow: 0 0 6px 1px $d_primary;

      position: relative;
      overflow: hidden;
      cursor: pointer;

      .product-img {
        width: 100% !important;
        height: 100% !important;

        object-fit: cover;
      }

      .info-layer {
        height: 50px;
        background-color: rgba($color: $l_primary, $alpha: 0.7);
        color: $accent2;

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;

        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        padding: 0.25rem;

        .product-name {
          margin: 0;
          font-size: 1.125rem;

          grid-column: 1/3;
          grid-row: 1/2;
        }

        .product-type, .product-price {
          font-size: 0.75rem;
          font-weight: 700;
          align-self: flex-end;
        }

        .product-type {
          grid-column: 1/2;
          grid-row: 2/3;
          font-style: italic;
        }

        .product-price {
          grid-column: 2/3;
          grid-row: 2/3;
          justify-self: flex-end;
        }
      }
    }
  }
}
</style>
