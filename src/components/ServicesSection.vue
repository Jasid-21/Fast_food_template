<template>
  <section class="services-section">
    <h2 class="section-title">What we offer?</h2>
    <ServiceDisplayer :shadow="true" :reverse="idx%2 != 0"
      v-for="(s, idx) of services" :key="idx"
      :title="s.name" :description="s.description" :img-url="s.imgUrl" />
  </section>
</template>

<script setup lang="ts">
import BackgroundScreen from './BackgroundScreen.vue';
import ServiceDisplayer from './ServiceDisplayer.vue';
import j_services from '@/json/services.json';

type Service = { name: string; description: string; imgUrl: string };
const services: Service[] = j_services.services;
</script>

<style scoped lang="scss">
.services-section {
  background: url('../assets/svg/layered-waves-haikei.svg');
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;
}
</style>
