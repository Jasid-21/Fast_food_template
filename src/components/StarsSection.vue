<template>
  <section class="stars-section" id="starsSection">
    <h2 class="section-title">Do you want the bests?</h2>
    <BluredItemDisplayer />
    <div class="carousel-container">
      <CircularCarousel />
    </div>
  </section>
</template>

<script setup lang="ts">
import BluredItemDisplayer from './BluredItemDisplayer.vue';
import CircularCarousel from '@/components/CircularCarousel.vue';
</script>

<style scoped lang="scss">
.stars-section {
  //$background: white;
  min-height: 700px;
  background: url('../assets/svg/blob-scatter-haikei.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  display: grid;
  grid-template-rows: min-content auto;
  grid-template-columns: 70% calc(30% - 1rem);
  column-gap: 1rem;
  row-gap: 1rem;

  @media (max-width: $lg) {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
  }

  .section-title {
    margin: 0;
    grid-column: 1/3;
    grid-row: 1/2;
  }

  .carousel-container {
    position: relative;

    @media (max-width: $lg) {
      & > * {
        display: none;
      }
    }
  }
}
</style>
