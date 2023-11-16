<template>
  <div class="service-displayer" :class="{ shadow, reverse }">
    <img :src="require('../assets/images/services/' + imgUrl)"
     alt="Service image" class="service-img">
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
  display: flex;
  align-items: center;

  .service-img {
    max-height: 280px;
    border-radius: $radius 0 0 $radius;
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
