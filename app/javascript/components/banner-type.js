import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change my life", "Learn to code"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
