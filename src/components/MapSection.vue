<template>
  <section class="map-section" id="map-section">
    <h2 class="section-title">Where are we based?</h2>
    <div class="address-info-container">
      <span class="general">
        Barranquilla, Atlántico, Colombia
      </span>
      <span class="specific">
        Cl. 79b #42e-220
      </span>
    </div>
    <div class="map">
      <LMap class="lmap" v-model:zoom="zoom" :center="latLng" :min-zoom="zoom" :max-zoom="zoom">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"></LTileLayer>
        <LMarker :lat-lng="latLng"></LMarker>
      </LMap>
    </div>
    <div class="extra-info-container">
      <p>You can contact us at number 120-345-678</p>
      <p>We will be happy to attend you</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LControlZoom } from '@vue-leaflet/vue-leaflet';
import { ref } from 'vue';

const zoom = ref<number>(17);
const latLng = ref<number[]>([10.993161, -74.816570]);
</script>

<style scoped lang="scss">
.map-section {
  background: url('../assets/svg/blob-scatter-haikei-2.svg');
  background-color: $background2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .leaflet-control-zoom {
    display: none !important;
  }
}

.address-info-container {
  font-weight: 700;
  font-size: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;

  display: flex;
  justify-content: space-between;

  .specific {
    font-style: italic;
  }
}
.map {
  height: 400px;

  .lmap {
    border: 1px solid $d_primary;
    border-radius: 10px;
  }
}

.extra-info-container {
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
  font-style: italic;
}
</style>
