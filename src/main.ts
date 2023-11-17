import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPhone, faArrowDown, faStar, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

library.add(faWhatsapp, faInstagram, faTwitter) //* Social media icons.
library.add(faPhone, faArrowDown, faStar, faLocationDot, faEnvelope); //* General icons.

const pinia = createPinia();
const app = createApp(App);
app.component('fai', FontAwesomeIcon);
app.use(pinia);
app.use(router);
app.mount('#app');
