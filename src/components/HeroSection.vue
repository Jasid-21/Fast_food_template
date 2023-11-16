<template>
  <section class="hero-section">
    <div class="info-layer">
      <div class="slogan-container main-slogan-container">
        <h2 class="slogan">The best fast food you'll ever eat</h2>
      </div>
      <div class="slogan-container subslogan-container">
        <span class="slogan">Recusandae laudantium nam pariatur autem maxime sunt, dolor a, eius fugiat debitis nobis quam.</span>
      </div>
    </div>

    <SectionNavBtn next-section="#starsSection" :z-index="999" />
  </section>
</template>

<script setup lang="ts">
import SectionNavBtn from '@/components/SectionNavBtn.vue';
</script>

<style scoped lang="scss">
.hero-section {
  height: 95vh;

  background: url('../assets/images/hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  .info-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba($color: #000000, $alpha: 0.4);

    .slogan-container {
      position: absolute;

      .slogan {
        margin: 0;
        color: white;
      }

      h2.slogan {
        font-size: 4rem;
      }

      span.slogan {
        font-size: 1.25rem;
        font-style: italic;
      }
    }

    .main-slogan-container {
      width: 500px;
      height: 200px;
      top: 50%;
      right: var(--x_pad);
      translate: 0 -50%;
    }

    .subslogan-container {
      width: 400px;
      height: 150px;
      top: 50%;
      left: var(--x_pad);
      translate: 0 50%;
    }
  }
}
</style>
