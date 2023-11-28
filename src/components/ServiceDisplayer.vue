<template>
  <div class="service-displayer" :class="{ shadow, reverse }">
    <div class="service-img-container">
      <img :src="require('../assets/images/services/' + imgUrl)"
        alt="Service image" class="service-img">
    </div>

    <div class="info-container">
      <h3 class="service-title">{{ title }}</h3>
      <p class="service-description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  shadow: { type: Boolean, default: false },
  reverse: { type: Boolean, default: false },
});
</script>

<style scoped lang="scss">
$radius: 10px;
.service-displayer {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  background-color: $l_primary;
  border-radius: $radius;
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: $ml) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  .service-img-container {
    width: 400px;
    height: 100%;

    .service-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: $radius 0 0 $radius;
    }

    @media (max-width: $lg) {
      width: 350px;
    }

    @media (max-width: $ml) {
      width: 100%;
      height: 260px;

      .service-img {
        border-radius: $radius $radius 0 0;
      }
    }
  }

  .info-container {
    align-self: flex-start;
    padding: 1rem 2rem;
    border-radius: 10px;

    .service-title {
      margin: 0;
      color: $accent;
    }

    .service-description {
      font-style: italic;
      font-size: 1.0625rem;
    }
  }
}

.service-displayer.shadow {
  box-shadow: 0 0 10px 2px $d_primary;
}

.service-displayer.reverse {
  flex-direction: row-reverse;

  .service-img {
    border-radius: 0 $radius $radius 0;
  }
}
</style>
