<template>
  <footer>
    <div class="links-container">
      <ul>
        <li v-for="(l, idx) of links" :key="idx">
          <a :href="l.url">{{ l.name }}</a>
        </li>
      </ul>
    </div>
    <div class="contact-info-container">
      <p class="contact-icon">
        <fai icon="fa-solid fa-phone" /> &nbsp; +1 312 3456789
      </p>

      <p class="contact-icon">
        <fai icon="fa-solid fa-location-dot" />&nbsp; Cll 45 15b-80
      </p>

      <p class="contact-icon">
        <fai icon="fa-solid fa-envelope" />&nbsp; examplemail@domain.com
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import j_links from '@/json/navLinks.json';
const new_links = [...j_links.links];
const links = new_links.splice(0, new_links.length - 2);
</script>

<style scoped lang="scss">
$logo_w: 70px;
footer {
  background-color: $d_primary;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: $l_primary !important;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: $cml) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * {
      justify-content: center;
    }
  }

  .contact-info-container,
  .links-container > ul {
    display: flex;
    column-gap: 1rem;
  }

  .links-container > ul {
    list-style: none;
    padding: 0;

    li a {
      color: $l_primary !important;
      text-decoration: none;
    }
  }

  .contact-info-container {
    @media (max-width: $cml) {
      flex-wrap: wrap;
    }
  }
}
</style>
