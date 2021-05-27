import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "channels"
import 'bootstrap';

import { initUpdateNavbarOnScroll } from '../components/navbar';
import { loadDynamicBannerText } from '../components/banner-type';

Rails.start();
Turbolinks.start();

document.addEventListener('turbolinks:load', () => {
  initUpdateNavbarOnScroll();
  loadDynamicBannerText();
});
