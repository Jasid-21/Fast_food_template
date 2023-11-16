<template>
  <div class="master-container">
    <CentralLogoNavbar :left-links="left" :right-links="right" :social-media="social" :numbers="phones" />
    <HeroSection />
    <StarsSection />
    <ServicesSection />
    <CatalogSection />
  </div>
</template>

<script lang="ts" setup>
import CentralLogoNavbar from '@/components/CentralLogoNavbar.vue';
import HeroSection from '@/components/HeroSection.vue';

import getLinksGroups from '@/functions/getLinksGroups.func';
import j_links from '@/json/navLinks.json';
import j_social from '@/json/social_media.json';
import j_phones from '@/json/phones.json';
import StarsSection from '@/components/StarsSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import CatalogSection from '@/components/CatalogSection.vue';

const { left, right } = getLinksGroups(j_links.links);
const social = j_social.social_media;
const phones = j_phones.phones;
</script>
