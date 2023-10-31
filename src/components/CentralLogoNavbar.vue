<template>
  <nav class="navbar central-logo-navbar">
    <ul class="link-items">
      <li class="link-item" v-for="(l, idx) of leftLinks" :key="idx">
        <RouterLink :to="l.url">{{ l.name }}</RouterLink>
      </li>
    </ul>
    <div class="logo-spacer"></div>
    <ul class="link-items">
      <li class="link-item" v-for="(l, idx) of rightLinks" :key="idx">
        <RouterLink :to="l.url">{{ l.name }}</RouterLink>
      </li>
    </ul>
    <LogoContainer :svg-url="'bitmap.svg'" :style="logoContStyle" />
  </nav>
  <div class="contacts-container">
    <div class="social-media-container">
      <IconAndName v-for="(i, idx) of socialMedia" :key="idx"
       :icon-type="i.type" :icon-name="i.name" :text="i.text" />
    </div>
    <div></div>
    <div class="numbers-container">
      <IconAndName v-for="(i, idx) of numbers" :key="idx"
       :icon-type="i.type" :icon-name="i.name" :text="i.text" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, PropType } from 'vue';
import LogoContainer from './LogoContainer.vue';
import IconAndName from './IconAndName.vue';

//* Defined.
type NavLink = { name: string; url: string };
type IconAndName = { type: string; name: string; text: string };
const props = defineProps({
  leftLinks: { type: Array as PropType<NavLink[]>, required: false },
  rightLinks: { type: Array as PropType<NavLink[]>, required: false },
  socialMedia: { type: Array as PropType<IconAndName[]> },
  numbers: { type: Array as PropType<IconAndName[]> },
});

//* Variables.
const logoContStyle:CSSProperties = {
  maxWidth: '100px',
  maxHeight: '150px',
  position: "absolute",
  left: '50%',
  translate: '-50% 0',
}
</script>

<style scoped lang="scss">
$logo_w: 100px;
@mixin setNavDisplay() {
  display: grid;
  grid-template-columns: calc(50% - $logo_w/2) $logo_w calc(50% - $logo_w/2);
}
.contacts-container {
  padding: 0.5rem;
  background-color: rgba($color: rgb(46, 46, 46), $alpha: 0.7);
  color: white;
  @include setNavDisplay();

  .social-media-container, .numbers-container {
    display: flex;
    justify-content: space-around;
  }
}
nav a.router-link-exact-active {
  color: $secondary !important;
}
.central-logo-navbar {
  height: 100px;
  background-color: rgba($color: #000000, $alpha: 0.5);
  padding: 1rem 4rem;
  position: relative;
  @include setNavDisplay();

  .link-items {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    column-gap: 1rem;

    .link-item {
      width: 100%;
      height: 100%;
      text-align: center;
      padding: 1rem;
      cursor: pointer;

      transition-property: background-color;
      transition-duration: 180ms;

      a {
        font-weight: 700;
        color: white;
        text-decoration: none;

        transition-property: color;
        transition-duration: 180ms;
      }
    }

    .link-item:hover {
      background-color: rgba($color: #000000, $alpha: 0.7);
      a {
        color: $secondary;
      }
    }
  }

  .logo-spacer {
    width: $logo_w;
  }
}

.central-logo-navbar.fixed {
  position: fixed;
  left: 0;
  right: 0;
}
</style>
