<template>
  <div class="navbar-container fixed">
    <nav class="links-container">
      <ul class="link-items-container" v-if="leftLinks"
        :style="{ gridTemplateColumns: `repeat(${leftLinks?.length}, ${100 / leftLinks?.length}%)` }">
        <li class="link-item" v-for="(i, idx) of leftLinks">
          <a :href="i.url">{{ i.name }}</a>
        </li>
      </ul>
      <div class="logo-container">
        <LogoContainer svg-url="bitmap.svg" />
      </div>
      <ul class="link-items-container" v-if="rightLinks"
        :style="{ gridTemplateColumns: `repeat(${rightLinks?.length}, ${100 / rightLinks?.length}%)` }">
        <li class="link-item" v-for="(i, idx) of rightLinks">
          <a :href="i.url">{{ i.name }}</a>
        </li>
      </ul>
      <ul class="complete-links" v-if="completeLinks"
        :style="{ gridTemplateColumns: `repeat(${completeLinks?.length}, ${100 / completeLinks?.length}%)` }">
        <li class="link-item" v-for="(i, idx) of completeLinks">
          <a :href="i.url">{{ i.name }}</a>
        </li>
      </ul>
      <button class="menu-btn">
        <fai icon="fa-solid fa-bars" />
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import LogoContainer from './LogoContainer.vue';
import NavLink from '@/types/NavLink.type';
import IconInfo from '@/types/IconInfo';

//* Defined.
const props = defineProps({
  leftLinks: { type: Array as PropType<NavLink[]> },
  rightLinks: { type: Array as PropType<NavLink[]> },
  socialMedia: { type: Array as PropType<IconInfo[]> },
  numbers: { type: Array as PropType<IconInfo[]> },
});
const completeLinks:NavLink[] = [
  ...props.leftLinks?props.leftLinks:[],
  ...props.rightLinks?props.rightLinks:[],
];

const completeContacts: IconInfo[] = [
  ...props.socialMedia?props.socialMedia:[],
  ...props.numbers?props.numbers:[],
];
</script>

<style scoped lang="scss">
$logo_w: 100px;
@mixin setNavDisplay() {
  display: grid;
  grid-template-columns: calc(50% - $logo_w/2) $logo_w calc(50% - $logo_w/2);
}

nav a.router-link-exact-active {
  color: $secondary !important;
}

.fixed {
  position: fixed;
  left: 0;
  right: 0;
}

.navbar-container {
  $logo_w: 80px;
  z-index: 1000;

  nav.links-container {
    height: 100px;
    padding: 1rem var(--x_pad);
    background-color: rgba($color: #000000, $alpha: 0.5);

    display: grid;
    grid-template-columns: calc((100% - $logo_w) / 2) $logo_w calc((100% - $logo_w) / 2);

    ul.link-items-container, ul.complete-links {
      list-style: none;
      padding: 0;
      margin: 0;

      display: grid;

      li.link-item {
        width: auto;
        height: 100%;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: black;
          color: $accent;
        }

        a {
          font-weight: 600;
          color: inherit;
          text-decoration: none;
        }
      }
    }

    ul.complete-links {
      display: none;
    }

    .logo-container {
      position: relative;

      & > * {
        width: 100%;

        top: -1rem;
        position: absolute;
      }
    }

    .menu-btn {
      display: none;
      width: 34px;
      height: 34px;
      background-color: transparent;
      border: 2px solid white;
      border-radius: 8px;
      text-align: center;
      font-weight: 700;
      font-size: 1.2rem;
      color: white;
    }

    @media (max-width: $md) {
      grid-template-columns: $logo_w auto;

      ul.link-items-container {
        display: none;
      }

      ul.complete-links {
        display: grid;
      }

      .logo-container {
        grid-column: 1/2;
      }
    }

    @media (max-width: $csm) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo-container {
        align-self: flex-start;
        width: $logo_w;
      }

      ul.link-items-container,
      ul.complete-links {
        display: none;
      }
      .menu-btn {
        display: block;
      }
    }
  }
}
</style>
