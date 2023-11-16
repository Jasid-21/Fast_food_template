<template>
  <ModalContainer :showing="showing_bg">
    <Transition name="modal">
      <div class="product-modal" v-if="showing_modal" ref="modal">
        <img :src="require('@/assets/images/samples/' + activeProduct?.imgUrl)"
          :alt="activeProduct?.name" class="product-img" v-if="activeProduct">
        <div class="name-container">
          <span>{{ activeProduct?.name }}</span>
          <div class="star-container">
            <fai class="content" :class="{ common: !activeProduct?.prefered }"
              icon="fa-solid fa-star" />
            <fai class="border" icon="fa-solid fa-star" />
          </div>
        </div>
        <div class="info-layer">
          <div class="details-container">
            <span class="type">{{ activeProduct?.drink?'Dring':'Food' }}</span>
            <span class="price">${{ activeProduct?.price }}</span>
          </div>
          <p class="description">{{ activeProduct?.desc }}</p>
        </div>
      </div>
    </Transition>
  </ModalContainer>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import ModalContainer from './ModalContainer.vue';
import useModalState from '@/stores/modalState';

//* Defined.
type ModalState = 'enter-from' | 'active' | 'leave-to';
const modalState = useModalState();
const modal = ref<HTMLElement>();

//* Variables.
const activeProduct = computed(() => {
  const m = modalState.product
  console.log(m);
  return m;
});
const showing_bg = ref<boolean>(false);
const showing_modal = ref<boolean>(false);

//* Functions.
const closeModal = () => {
  showing_modal.value = false;

  setTimeout(() => {
    showing_bg.value = false;
  }, 180);
}

//* Hooks.
onClickOutside(modal, () => {
  console.log("Hello");
  modalState.removeProduct()
});

watch(activeProduct, (newV, oldV) => {
  if (newV == null) {
    closeModal();
    return;
  }

  showing_bg.value = true;

  setTimeout(() => {
    showing_modal.value = true;
  }, 10);
});
</script>

<style scoped lang="scss">
.product-modal {
  width: 400px;
  height: 500px;
  background-color: white;
  border: 1px solid $primary;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px 3px black;

  top: 50%;
  left: 50%;
  translate: -50% -50%;

  position: fixed;

  $padding: 1rem;

  .product-img {
    width: 100% !important;
    height: 100% !important;

    object-fit: cover;
  }

  .name-container {
    position: absolute;
    top: $padding;
    left: $padding;
    right: $padding;
    min-height: 35px;
    background-color: rgba($color: #fff, $alpha: 0.7);
    border: 1px solid $d_primary;
    border-bottom: 2px solid $primary;
    border-radius: 5px;
    padding: 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1.5rem;
      font-weight: 700;
      font-style: italic;
    }

    .star-container {
      width: 30px;
      height: 30px;

      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      .border {
        color: $d_secondary;
        font-size: 1.2rem;
        text-shadow: 0 0 5px black;
      }

      .content {
        font-size: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        color: rgb(255, 217, 0);
      }

      .content.common {
        color: white;
      }
    }
  }

  .info-layer {
    position: absolute;
    left: $padding;
    right: $padding;
    bottom: $padding;
    min-height: 120px;
    padding: 1rem;
    padding-top: 0.5rem;

    border-radius: 8px;
    border: 1px solid $d_primary;
    background-color: rgba($color: #fff, $alpha: 0.7);

    .details-container {
      min-height: 20px;
      font-style: italic;
      font-weight: 700;

      display: flex;
      justify-content: space-between;
    }

    .description {
      font-style: italic;
    }
  }
}

.modal-enter-from {
  top: 50%;
  left: -600px;
  translate: -50% -50%;
}
.modal-leave-to {
  top: 50%;
  left: 110vw;
  translate: -50% -50%;
}

.modal-enter-to,
.modal-leave-from {
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 180ms ease;
}
/*
.product-modal.enter-from {
  top: 50%;
  left: -600px;
  translate: -50% -50%;
}

.product-modal.active {
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}

.product-modal.leave-to {
  top: 50%;
  left: 110vw;
  translate: 0 -50%;
}
*/
</style>
