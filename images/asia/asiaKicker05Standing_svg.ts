/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="asia" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#28231e}.cls-1,.cls-11,.cls-12,.cls-13,.cls-14,.cls-2,.cls-6{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-11,.cls-13,.cls-14,.cls-2{stroke:#000}.cls-2{fill:#2c2e2b}.cls-12,.cls-6{stroke:#231f20}.cls-6{fill:#d6b59d}.cls-11{fill:#fff}.cls-12,.cls-13{fill:none}</style></defs><path d="M83 54.2c-.3 1.6-.8 3.5-1.2 5.4-.2.7-.3 1.5-.5 2.2-1.2 4.8-1.3 6.3-3.1 8.8-1.4 1.9-3.7 4.1-6 5.6-.2.2-.5.4-.8.5-3.5 2.3-7.3 4-11 3.3-2.1-.4-5.8-1.7-9.6-4.7-1.5-1.2-3.1-2.6-4.6-4.3-1.4-1.4-3.6-6.7-4.4-11.3h-.3c-1.2.8-3.4.1-4.4-2.5-.7-1.8-2.2-5.3-1.5-7.4.2-.7.7-1.3 1.5-1.6.3-.1.6-.2.8-.3v.2c1.4 0 1.5 2 2.6 2.8 1.2.9 2.3.4 3.9 0h0c.2 2 .5 3.9.7 3.9 5.4.2 12.4 0 16.9-.1.4-2.4.7-4.3.9-6.5 1.7 0 3.4.2 5.1.2h0s0 0 0 0c.2 2 .5 3.7.9 5.8 3.7.1 9.3.2 14 .2Z" class="cls-6"/><path d="M70.7 59.3c-.5 4.4-6.9 4.1-9 2.6m-20-2.2c-.2-1.1-.3-2.3-.3-3.2" class="cls-12"/><path d="M99.9 98.9c-1.8-3.4-9.3-16.2-13-17.1-2.3-.5-13.2-1.4-16.1-1.9-1.2 6.8-7.9 7-7.9 7-.5.6-9.5 1.4-12.6-8.7-2.2 0-16.1 2.3-18 3.1C28.5 83 20.7 89 18.1 92.2c-6.4 7.9-10.6 14.4-13.3 19.6 3.2 5.1 5.9 7.6 9.6 10.5 1 .7 2.6 2.2 4.1 2.7.6.2 1.1.3 1.5.1.6-.2 7.6-9.6 12.3-16.5h.1c1 2.2 1.3 12.6 1.5 14.6.2 2.1.3 18.1 0 22.6 2.6 1 4.5 2.6 3.9 5.4 2.1 2.1 3.9 4.7-.7 5.8.9 2.2-.7 3.7-2.1 3.9 1.4 1.7-1.1 3.1-2.3 3.1v1.1q0 0 0 0c-.2 1.3-.5 2.6-.7 3.9 2.6 2.7 17.1 7.4 28.5 7.4 17.3 0 23.6-2.6 27-4.1.1 0 .2 0 .3-.1h0c.6-.3 1.1-.5 1.6-.6.1-3 .2-6.1.2-9.5 0-7.1-.1-15-.8-24.2q-.3-3.9-.6-8.1c-.4-4.8-.5-8.5-.4-12.1h0c1 1.7 4 6.6 5 8.3.8-.4 1.5-.8 2.2-1.2 1.9-1.1 3.7-2.4 5.4-3.8 2.3-1.8 4.5-3.7 6.7-5.5-2.3-5.5-5-12.1-7.4-16.4Zm-14.7 37.3c-10.8.9-38.8 1.5-39.8.5-.3-.2-.6-2.7-.9-6-.2-2.6-.4-5.7-.4-8.9-.2-7.4.2-15.1 1.8-16q.3-.15.9-.3c6.2-1.6 35.3-1.7 36.3-.4.4.5.9 9 1.4 17.6h.2-.1q.15 3.6.3 6.9h.8c-.3 0-.6 0-.8.1.1 2.4.2 4.6.3 6.4Z" style="stroke-linecap:round;stroke-linejoin:round;stroke:#231f20;fill:#3c414a"/><path d="M37.2 157c.9 2.2-.7 3.7-2.1 3.9 1.4 1.7-1.1 3.1-2.3 3.1v1.1q0 0 0 0c-1 2.8-7.5-1.1-8.9-2.5-2.2-2.1-5.5-6.6-4.1-9.7C17 149 3.4 137.5.5 129.7c0 0-2.2-5 4.5-17.8 3.2 5.1 5.9 7.6 9.6 10.5 1 .7 2.6 2.2 4.1 2.7-.2.2-1.2 1.3-1.9 1.9.6 1 1.2 2.1 1.9 3.5 2 4.1 6 8.5 8.4 13.3v.2c1.8.5 4.7 1 7.1 1.9 2.6 1 4.5 2.6 3.9 5.4 2.1 2.1 3.9 4.7-.7 5.8Z" class="cls-6"/><path d="M32 168.9s0 0 0 0m56.2-68.4c0 7.1-.3 11.9-.4 17" class="cls-12"/><path d="M102.3 142.1c-4.2 4.4-7.9 7.4-9.7 12.9-.8 2.4-1.3 5.4-2.8 6.9h-.1c0-7.1-.1-15-.8-24.2h.3c.8-.8 3.2-3.1 4.3-5.2 1.2-2.3 1.9-4.2 2.9-6s2.2-3.5 4.1-5.7c2.3-1.8 4.5-3.7 6.7-5.5 1.8 4.3 3.4 8 4.5 9.6 2.7 7.2-3.8 11.4-9.5 17.3Z" class="cls-6"/><path d="M100.5 120.8c-2 2.2-3.2 3.9-4.1 5.7-.3-.5-.9-1.5-1.3-1.8h0c1.9-1.1 3.7-2.5 5.4-3.8Z" class="cls-6"/><path d="M16.6 126.9c-1.8-2.8-3.6-4.3-7.4-6.3m28.7 30.6c-.9-.9-1.9-1.8-2.3-2.3m2.3 2.3s0 0 0 0m-11.3-7.4h.3m33.6 46.7" class="cls-12"/><path d="M93.7 284.6c-1.4 1.3-2.7 2.4-4 3.2-4.2 2.8-7.8 2.6-15.1.8-1.8-.5-3.8-1-6.1-1.7 0-5.6-8-89.7-8-96.4-3.6 20.7-10.7 84.3-11.9 97.9-1.1.4-2.4.6-3.7.7-5.2.4-11.6-.8-15.6-2.7-1.9-.8-3.2-1.8-3.8-2.8 0 0-.7-71.9 6.6-114.7 2.6 2.7 17.1 7.4 28.5 7.4 17.3 0 23.6-2.6 27-4.1h.4c.9 8.7 1 10.2 1.6 16.4 1.1 11.2 4.2 80.3 4.2 96Z" style="stroke-linecap:round;stroke-linejoin:round;fill:#51667b;stroke:#231f20"/><path d="M61.6 185.2c-.3 1.1-.7 2.9-1.1 5.3h0m-10.2-112v-.3" class="cls-12"/><path d="M71.4 76.7c-.5 1.5-.3 1.8-.6 3.3-1.2 6.8-7.9 7-7.9 7-.5.6-9.5 1.4-12.6-8.7v-2.2l.5-.7c3.9 3 7.5 4.3 9.6 4.7 3.7.7 7.5-1 11-3.3Z" class="cls-6"/><path d="M71.4 76.6v.1m-.3-9.2c-5.3 1.7-8.9 2.1-14.1-.9" class="cls-12"/><path d="M81.8 59.6c.5-1.9.9-3.8 1.2-5.4h2.2c.2 0 .4-1.5.6-3.2.2 0 .4 0 .6.1.3 3-.7 6.9-4.6 8.6Z" class="cls-6"/><path d="M86.3 45.9v-1h0q0 0 0 0h-2.2c.2-3.2.3-6.5-.4-8.5-.5-1.6-3.8 3.4-4.8 2.1-1.6-2.1-2.7-7.1-5.8-8.2-2.6-.9-2.1 4.3-6.1 4.3-2.8 0-9.2-5.5-11.3-5-3.6.8-6.1 5.7-8.2 7.4-1 .8-3.2-5.4-3.9-4.5-3.3 4.5-3.1 11.2-2.7 15.1-1.5-.2-2.8-1.2-4.4-1.6-.7-6.6-.4-20.9 5.9-26.7 6.5-6 20.1-10 31.3-4.9 16.7 7.7 14.2 25.1 12.5 31.5Z" class="cls-2"/><path d="M36.5 102.3c-.7 1.2-2.2 3.6-4.1 6.4m-27.6 3.2s0 0 0 0m102.6 3.3s-.1 0-.2.1" class="cls-13"/><path d="M44.9 301.9c-3.4 6.3-4.4 7-20.4 7s-8 .3-8.2-6.5c0-4.2 12.4-13.5 12.7-15.7l.2-.4c4.1 1.9 10.5 3.1 15.6 2.7.6 1.3.4 4.8.5 7.8s.2 3.8-.4 5Z" class="cls-1"/><path d="M44.9 289.1s0 0 0 0" class="cls-13"/><path d="M94.7 308.8c-16.9.9-18-.3-21.6-5.9-.7-1.1-.6-1.8-.5-4.4s1.3-8.5 1.9-9.7v-.2c7.4 1.9 11 2 15.2-.8 0 3.2 13.3 10.5 13.2 14.2-.2 5.9 2.3 6.2-8.2 6.8" class="cls-1"/><path d="M56.8 43.7h-.2" class="cls-13"/><path d="M75.8 49.2c0 .5 0 1-.3 1.3-.2.4-.4.7-.7.7-.5 0-1-.9-1-2s.5-2 1-2 .6.3.8.8h0c.1.3.2.8.2 1.2" class="cls-14"/><path d="M86.3 45.9c0 .4 0 .9-.1 1.4m-42.4-2.2V45" class="cls-13"/><path d="M44.4 50.8c-1.6.5-2.7.9-3.9 0-1.1-.8-1.3-2.7-2.5-2.8v-.2c-.3 0-.6.2-.9.3-.8.3-1.3.9-1.5 1.6h0c-.7-1.7-1-2.7-.2-4 .5 0 .9 0 1.4.1 1.6.4 2.9 1.3 4.4 1.6.9.1 1.8 0 2.9-.6h0c0 1 .2 2.5.4 3.9Zm44.1-3.2c-.1 1.8.2 3.6-2.1 3.4 0-.6-.1-1.1-.3-1.6v-.3c0-.7.1-1.3.2-1.9.7 0 1.8.3 2.3.4Z" class="cls-14"/><path d="M83.8 36.3c-.5-1.6-3.8 3.4-4.8 2.1-1.6-2.1-2.7-7.1-5.8-8.2-2.6-.9-2.1 4.3-6.1 4.3-2.8 0-9.2-5.5-11.3-5-3.6.8-6.1 5.7-8.2 7.4-1 .8-3.2-5.4-3.9-4.5-3.3 4.5-3.1 11.2-2.7 15.1.9.1 1.8 0 2.9-.6h0c0-1-.2-1.7-.2-1.8h3.2v-1.2c0-1.3 1.9-2 2.5-2.4 1.6-.9 6.5.3 8 1.2-.2.7-.2 1.1-.5 1.1v1c2.6 0 4.9-.2 6.3-.3 0 .5 0 1-.1 1.4 1.5 0 2.9.1 4.4.1h.2c0-.5 0-1.1-.2-1.7 3.3.2 12.1.4 16.5.5.2-3.2.3-6.5-.4-8.5Zm-12.4 7.6c-.8-1.6 3-2.7 5.9-2.7s3.1 1.1 3.5 2.5c-2.9.3-7.6-.2-9.4.2" style="stroke-linecap:round;stroke-linejoin:round;stroke:#000;fill:#d6b59d"/><path d="M57 44.8c-3.4.1-7.2.2-10 .3h-3.2c0 .2 0 .9.2 1.8 0 1 .2 2.5.4 3.9.2 2 .5 3.9.7 3.9 5.4.2 12.4 0 16.9-.1.4-2.4.7-4.3.9-6.5 0-.7.2-1.4.2-2.1 0-.5 0-.9.1-1.4-1.4 0-3.7.2-6.3.3Zm3.6 8.5c-3.7.1-9.6.2-14 .1-.4 0-1-6.4-1.1-7.2h0q0 0 0 0c1.8 0 12.6-.2 16.2-.4-.3 3-.5 4.9-1.1 7.5m25.8-8.4h-2.2c-4.3 0-13.1-.3-16.5-.5 0 .6.1 1.2.2 1.7 0 .8.2 1.5.2 2.2.2 2 .5 3.7.9 5.8 3.7.1 9.3.2 14 .2h2.2c.2 0 .4-1.5.6-3.2 0-.6.2-1.2.2-1.8 0-.7.1-1.3.2-1.9h-.3c.1-.4.3-.8.4-1.3v-1Zm-2.6 5.6-.5 2.5c-4.2 0-9.5 0-13-.1-.5-2.5-.7-4.3-1.1-7.2 3.1.2 11.8.4 14.8.4-.1 1.7-.3 3.2-.3 4.5Z" class="cls-14"/><path d="M69.3 45.6c.3 2.9.5 4.7 1.1 7.2 3.4.1 8.8.2 13 .1l.5-2.5c0-1.2.2-2.8.3-4.5-3 0-11.7-.2-14.8-.4Zm6.3 4.9c-.2.4-.4.7-.7.7-.5 0-1-.9-1-2s.5-2 1-2 .6.3.8.8h0c.1.3.2.8.2 1.2s0 1-.3 1.3" class="cls-11"/><path d="M68.1 48.2c-1.7 0-3.4-.2-5.1-.2 0-.7.2-1.4.2-2.1 1.5 0 2.9.1 4.4.1h.2c0 .8.2 1.5.2 2.2h0Z" class="cls-14"/><path d="M45.5 46.2c0 .8.7 7.2 1.1 7.2 4.5.1 10.3 0 14-.1.6-2.6.8-4.5 1.1-7.5-3.6.2-14.5.4-16.2.4m7.1 4.9c-.6 0-1.1-.9-1.1-2s.5-2 1.1-2 .7.3.9.8c.2.3.2.8.2 1.3s-.1 1.1-.4 1.5c-.2.3-.4.5-.8.5Z" class="cls-11"/><path d="M53.7 49.1c0 .6-.1 1.1-.4 1.5-.2.3-.4.5-.8.5-.6 0-1.1-.9-1.1-2s.5-2 1.1-2 .7.3.9.8c.2.3.2.8.2 1.3Z" class="cls-14"/><path d="M57.5 42.7c-.2.7-.2 1.1-.5 1.1h-.1 0c-2.1 0-8.2.5-9.8.2h0s0 0 0 0c0-1.3 1.9-2 2.5-2.4 1.6-.9 6.5.3 8 1.2Zm23.3 1c-2.9.3-7.6-.2-9.4.2-.8-1.6 3-2.7 5.9-2.7s3.1 1.1 3.5 2.5" class="cls-2"/><path d="M63 48.1h-.2" class="cls-13"/><path d="M84.5 122.6c-12.7-4.3-25.5-11.5-37.7-17.2 6.2-1.6 35.3-1.7 36.3-.4.4.5.9 9 1.4 17.6" style="stroke-linecap:round;stroke-linejoin:round;stroke:#000;fill:#518bac"/><path d="M84.5 122.7c-13.2 2.4-27 2.1-40.1-.9h-.3c-.2-7.4.2-15.1 1.8-16q.3-.15.9-.3c12.2 5.7 25 12.9 37.7 17.2q0 0 0 0" style="stroke-linecap:round;stroke-linejoin:round;stroke:#000;fill:#dedede"/><path d="M84.9 129.6c-13.3 2-26.9 2.3-40.3 1.1-.2-2.6-.4-5.7-.4-8.9h.3c13.1 3 26.9 3.4 40.1.9q.15 3.6.3 6.9" style="stroke-linecap:round;stroke-linejoin:round;stroke:#000;fill:#ae5350"/><path d="M85.2 136.2c-10.8.9-38.8 1.5-39.8.5-.3-.2-.6-2.7-.9-6 13.4 1.3 27 .9 40.3-.9.1 2.4.2 4.6.3 6.4Z" style="stroke-linecap:round;stroke-linejoin:round;stroke:#000;fill:#1e475c"/><path d="M46.8 105.4c-.2 0-.4-.2-.6-.3m38.7 24.5h-.6m-39.7 1.1h-.5" class="cls-13"/></svg>')}`;
export default image;