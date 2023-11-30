<template>
  <Transition>
    <div class="nav-drawer" ref="drawer" v-if="active">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="Logo" class="logo">
        <h1 class="bussiness-name">BurgerMaster</h1>
      </div>

      <div class="links-container">
        <a :href="l.url" class="link" v-for="(l, idx) of links" :key="idx">
          {{ l.name }}
        </a>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import j_links from '@/json/navLinks.json';
import NavLink from '@/types/NavLink.type';
import { ref } from 'vue';

//* Defined.
const props = defineProps({
  active: { type: Boolean, default: false },
});
const emit = defineEmits(['close-drawer']);
const links: NavLink[] = j_links.links;
const drawer = ref<HTMLElement>();

//* Functions.
onClickOutside(drawer, () => {
  emit('close-drawer');
});
</script>

<style scoped lang="scss">
.nav-drawer {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 600px;
  height: 100vh;
  padding: 1rem;

  background-color: $l_primary;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  .logo-container {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid $d_primary;

    display: flex;
    align-items: center;

    .logo {
      height: 100%;
    }

    .bussiness-name {
      margin: 0;
      font-size: 1.75rem;
      color: $accent;
    }
  }

  .links-container {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;

    row-gap: 1rem;

    .link {
      font-size: 1.25rem;
      font-weight: 700;
      color: $d_primary;
      text-decoration: none;
    }
  }
}

.v-enter-from,
.v-leave-to {
  left: -700px;
}

.v-enter-to,
.v-leave-from {
  left: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 180ms ease;
}
</style>
