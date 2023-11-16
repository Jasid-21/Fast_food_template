<template>
  <section class="map-section">
    <div class="map">
      <LMap v-model:zoom="zoom" :center="[10.993161, -74.816570]">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"></LTileLayer>
      </LMap>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import { ref } from 'vue';
const zoom = ref<number>(17);
</script>

<style scoped lang="scss">
.map {
  height: 400px;
  border: 1px solid black;
}
</style>