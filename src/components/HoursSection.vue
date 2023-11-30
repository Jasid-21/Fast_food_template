<template>
  <section class="hours-section" id="contact-section">
    <h2 class="section-title">Schedule & contact</h2>
    <div class="info-container">
      <div class="schedule">
        <div class="day-container" v-for="(s, idx) of schedule" :key="idx">
          <span class="day">{{ s.day }}</span>
          <div class="ranges-container">
            <span class="ranges" v-for="(d, idx) of s.ranges">
              <span>{{ d.from }} - {{ d.to }}<b>;</b>&nbsp; &nbsp;</span>
            </span>
          </div>
        </div>
      </div>
      <div class="contact">
        <IconAndName v-for="(c, idx) of phones" :key="idx" :icon="c" />
        <IconAndName v-for="(c, idx) of social" :key="idx" :icon="c" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import j_schedule from '@/json/schedule.json';
import Schedule from '@/types/Schedule.type';
import j_phones from '@/json/phones.json';
import j_social from '@/json/social_media.json';
import IconInfo from '@/types/IconInfo';
import IconAndName from './IconAndName.vue';

//* Defined.
const schedule: Schedule[] = j_schedule.schedule;
const phones: IconInfo[] = j_phones.phones;
const social: IconInfo[] = j_social.social_media;
</script>

<style scoped lang="scss">
.hours-section {
  .info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    column-gap: 4rem;
    row-gap: 4rem;

    .schedule {
      .day-container {
        font-weight: 700;
        margin-bottom: 0.75rem;
        border-bottom: 1px solid gray;

        display: grid;
        grid-template-columns: 100px max-content;
        column-gap: 2rem;

        .ranges-container {
          font-weight: 500;

          display: flex;
          flex-wrap: wrap;
        }

        @media (max-width: $xsm) {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
          row-gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
      }
    }

    .contact {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
      column-gap: 1rem;
      row-gap: 1rem;
    }
  }
}
</style>
