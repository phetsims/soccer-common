/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="asia" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{stroke:#231f20}.cls-1,.cls-2{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-2,.cls-3{fill:none}.cls-2,.cls-3{stroke:#000}.cls-3{stroke-miterlimit:10}.cls-4{fill:#4c483f}.cls-12,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-5{fill:#4a483f}.cls-6{fill:#231f20}.cls-7{fill:#d38e6c}.cls-8{fill:#b1cee1}.cls-12{fill:#f6a367}</style></defs><path d="M137.3 303c2.1 3.3-.2 7.8-3.7 9.6-3.6 1.8-7.9 1.7-11.9 1.3-12.3-1.3-19.5-3.9-31.5-7.1-1.4-.4-3-.9-3.7-2.1-.5-.9-.4-2-.2-3 .3-2.4.9-4.7 1.5-7v-.3c11.1 2.6 15.4-1.9 22.7-8.1v-.4c9.4 5.2 13 8.6 22.4 13.8 1.6.9 3.4 1.9 4.3 3.4Z" class="cls-5"/><path d="M129.7 156.6c1.5 3.3-4.4 11-7.3 13.1-3 2.1-4.8 3-7.8 1-1.5-1-2.8-5.1-3.3-6.8 0-.4-.1-.8 0-1.2.3-3 3.7-6.9 6.1-8.5 2.7-1.8 0-1 3.3-1.7 3.5-1 7.7.9 9.2 4.1Z" class="cls-7"/><path d="M87.8 133.6c-2.5 24.4.7 24-.3 48.5-.4-.5-.7-1-1.1-1.5l-.4-.4-.3-.9c-4.9-13.5-4.3-28.3-3.9-42.7.2-7 .5-13.8 0-20.4h.2c1.6-6.4 2.5-13.9 2.7-20.7 9.2 6.8 13.5 28.4 18 36.7v.2c6.6 6 13.4 17.1 17.8 20.1-3.2.7-.6-.2-3.3 1.7-2.3 1.6-5.8 5.5-6.1 8.5-5.1-6.5-16.5-14.4-23.2-29.1Z" class="cls-8"/><path d="M110.5 285.9v.4c-7.4 6.2-11.7 10.7-22.7 8.1-1.1-.3-2.3-.6-3.6-1-.3-1.2-4-56.8-4.4-58.1-4.3-12-12.9-24.8-15.6-29.2-3.1 10-6.2 21.3-9.5 31.6-.6 1.8-18 45.5-18.6 47.3-.3 0-.6.1-.9.2-12.4 2.2-16.2 2.6-24.9-2.7-.7-.4-1.3-.8-2-1.3 0-1.5 19.9-48.6 20-50.1.8-17.1.2-29.5 4.4-47.9 3.3 2 7.9 3.8 11.4 4 1.1 0 2.3 0 3.3-.4 1.4-.7 2.1-2.2 2.7-3.6.7-1.5 1.4-3.1 2.1-4.6 6 1.2 11.8 2.2 17.8 2.3 5.1.1 10.2-.4 15.7-1.8l.3.9.4.4c.4.5.7 1 1.1 1.5 7.3 10.6 18.3 30.4 20.6 41.2.3 1.5 2.4 57 2.5 62.6Z" style="stroke-width:0;fill:#c1b2a3"/><path d="M108.7 38.3c0 8.4-1.5 16.9-4.3 19.6h-.4c.8-2 1.4-4 1.4-6.1.5-3.1-1-7.1-1.6-7.6-1.2-1-4.9 2.4-8.6.5-8.3-3.1-14.1-10.3-21.2-8.4-2.8 3.1-3.3 6.7-4.2 10.9s-2.3 9.1-2.6 14c0 .8-.8 1.6-1.6 1.4-.4 0-.6-.4-.8-.7-1.6-2-3.9-5.2-5.1-7.6-.7-1.4-2.5-1.9-3.9-1.4s-2.3 4.2-2.2 5.7c.1 1.6.5 4 1.8 4.6.5.2 1 .6 1.4.8v.3c-.4 2.7-.3 5.7 0 6.5 0 .3.2.5.2.8.4 1.7.6 3.8.6 5.9-10.9-6-11.9-43-4.4-48.5 6-4.4 3-7.5 12.8-8.9 6.9-1.7 18.2 2.8 28.5 3.1 8 .2 14.2 7 14.2 15Z" class="cls-4"/><path d="m77.3 75.4-.2.2c-1.9 4.5 8.9 12.5 11.5 4.8-4.5-.5-7.3-2.3-11.3-5m-.8 16.7c-4.7-2.6-11.3-7.2-13.8-10.2-2.4-2.8-4.4-6.1-5.6-10.2 0-.3-.1-.5-.2-.8-.3-.9-.4-3.9 0-6.5v-.3c-.4-.3-.9-.6-1.4-.8-1.4-.6-1.7-3-1.8-4.6 0-1.6.8-5.1 2.2-5.7s3.1 0 3.9 1.4c1.3 2.3 3.5 5.5 5.1 7.6.2.3.5.6.8.7.7.2 1.5-.6 1.6-1.4.3-4.9 1.7-9.8 2.6-14s1.4-7.8 4.2-10.9c7.2-2 12.9 5.2 21.2 8.4 3.7 1.9 7.3-1.6 8.6-.5.6.5 2.1 4.4 1.6 7.6 0 2.1-.6 4.2-1.4 6.1-1.4 3.4-3.5 6.3-3.9 7.8-.6 2-1.4 13.9-8.1 20.5 0 0-3.7 4-7.2 6.3-1.2.8-2.4 1.4-3.4 1.5-.8.1-2.6-.6-4.8-1.8Zm24-33.2c0-.8-3.3-4-4.6-3.8-1.1.2-2.1 4.3-.9 3.1.6-.6 3.5.6 3.9 1.9.2.7 1.5-.4 1.6-1.2m-3.9 8.2c.3-1.4 0-2.7-.9-2.9-.8-.2-1.7.9-2 2.3s0 2.7.9 2.9 1.7-.9 2-2.3M85.2 54.9c.3.6 2.5-2.4-.3-3.3-2.9-1-8.4-2-8.7 1.7 0 .3 7.1-1.8 9 1.6m-4.1 8.5c.3-1.4-.1-2.6-.9-2.8s-1.8.8-2.1 2.2.1 2.7.9 2.8 1.8-.8 2.1-2.2" class="cls-7"/><path d="M96 55.1c1.3-.2 4.7 3 4.6 3.8 0 .8-1.4 1.9-1.6 1.2-.4-1.3-3.3-2.5-3.9-1.9-1.2 1.1-.2-3 .9-3.1" class="cls-4"/><path d="M95.8 64.2c.8.2 1.2 1.5.9 2.9s-1.2 2.5-2 2.3-1.2-1.5-.9-2.9 1.2-2.5 2-2.3" class="cls-6"/><path d="M84.6 95.3c-.1 6.8-1.1 14.3-2.7 20.7h-.2c-.2-2.2-.4-4.5-.8-6.7-.8-4.9-2.1-9.7-4.3-14.5h-.1c.1-.9 0-2.3 0-2.8 2.2 1.2 4 2 4.8 1.8 1-.2 2.1-.7 3.4-1.5v2.9Z" class="cls-8"/><path d="M88.6 80.4c-2.6 7.7-13.4-.3-11.5-4.8l.2-.2c4 2.7 6.8 4.6 11.3 5" style="stroke-width:0;fill:#fff"/><path d="M81.7 136.5c-.5 14.4-1.1 29.2 3.9 42.7-5.4 1.4-10.6 1.9-15.7 1.8 2.7-25.9 3.8-50.2 2.3-76.2v-.2c.5.1.9 0 1.2-.2 2.8 0 6.3 2.8 7.4 5.1h.1c.4 2.2.6 4.4.8 6.7.5 6.6.2 13.4 0 20.4Z" class="cls-12"/><path d="M84.9 51.6c2.8.9.6 3.9.3 3.3-1.9-3.4-9-1.2-9-1.6.3-3.7 5.8-2.7 8.7-1.7" class="cls-4"/><path d="M81 109.4h-.1c-1-2.3-4.6-5-7.4-5.1 1.6-1.1 1.9-5.6 3-8.9 0-.1 0-.3.1-.5h.1c2.2 4.8 3.5 9.7 4.3 14.5" class="cls-12"/><path d="M80.2 60.6c.8.2 1.2 1.4.9 2.8s-1.2 2.4-2.1 2.2-1.3-1.4-.9-2.8 1.2-2.4 2.1-2.2" class="cls-6"/><path d="M76.5 92.1c0 .4.2 1.8 0 2.7 0 .2 0 .4-.1.5-1.1 3.3-1.4 7.8-3 8.9h-.9c-.5-.1-.9-.2-1.1-.2-3.4-1.7-12.2-8.8-16.5-13.9-.2-.3-.5-.6-.7-.9s.4-.3.4-.3c1.2-.6 2.2-3.7 2.7-7.4.2-1.3.3-2.7.3-4 0-2.1-.1-4.2-.6-5.9 1.3 4.1 3.2 7.3 5.6 10.2 2.5 2.9 9.1 7.6 13.8 10.2Z" class="cls-7"/><path d="M72.2 104.7c1.4 26 .4 50.3-2.3 76.2-5.9-.1-11.8-1.1-17.8-2.3.6-1.2 1.1-2.4 1.7-3.6 3.4.5 7.4.5 6.2-2.8 1.2-.4 3.4-2.8 1.4-4.1 1.4-.7 2.6-2.9.9-5 4.5-2.8 1.7-5-1.2-6.5-.2-2.3-1.4-3.3-3.1-3.7-.5-13.6 5.1-25.4 4.6-38.7 0-.9 0-1.8-.2-2.7-.2-1.7-.4-3.4-.8-5.1h.2c.7.8 1.2 3.7 2.2 4.3 0-1.8 3.5-5.3 5.2-6 1.2-.4 1.4-.6 2-.5.3.2.6.3.8.3v.2Z" class="cls-12"/><path d="M73.5 104.3c-.3.2-.7.3-1.2.2-.2 0-.5-.2-.8-.3.3 0 .6.1 1.1.2h.9Z" style="stroke-width:0;fill:#e8cebf"/><path d="M71.4 104.2c-.6 0-.8 0-2 .5-1.7.6-5.1 4.2-5.2 6-1-.6-1.5-3.5-2.2-4.4h-.2c-1.1-5.8-3.3-11.3-6.9-16 4.2 5.1 13 12.1 16.5 13.9" class="cls-12"/><path d="M47.8 153.8h-.1v-.2c2.9 0 7.5-1.5 10.5-.8 1.7.4 2.9 1.4 3.1 3.7 2.9 1.5 5.7 3.7 1.2 6.5 1.7 2 .5 4.2-.9 5 2 1.4-.2 3.7-1.4 4.1 1.2 3.3-2.8 3.4-6.2 2.8-1.6-.3-3.1-.8-3.8-1.1-2.9-1.5-7.6-4.9-7.5-8.5.9-4.1 2.7-7.8 5.3-11.2v-.3Z" class="cls-7"/><path d="M56.7 307.4c1.1 3.7-2.3 7.4-6.3 8.3-3.9.8-6.9.9-10.7-.6-11.5-4.4-22.2-10.6-32.7-16.8-1.3-.7-2.7-1.6-3-3-.2-1 .2-2 .6-2.9 1.8-4 3-6.4 5.7-9.8 8.6 5.3 12.4 4.9 24.9 2.7 7.7 7.5 10.6 10.2 18.3 17.7 1.3 1.3 2.7 2.7 3.2 4.4" class="cls-5"/><path d="M35.9 163c-4.1-2.9-8.6-6-11.4-7.7-5.9-3.6-14.5-13-13.3-20.1-.4-1.1 16.5-43.4 30.2-45.4h.3c0 .2 0 .4.1.6.5 1.7 1.9 3.1 3.5 4s3.3 1.5 4.9 2.4c6.6 3.3 11.4 10 12.3 17.4h.2c.6 13.3-5.1 25.1-4.6 38.7-3.1-.7-7.7.8-10.5.9v.2h.1v.3c-2.7 3.4-4.5 7.1-5.4 11.2-.2.7-.3 1.5-.4 2.2-1.6-1.2-3.8-2.9-6.2-4.6Zm2.2-16.5.3-.2c1.3-12 2-18.1.8-25.6-4.1 7.4-7.7 13.7-9.6 15.6l-.3.4c1.4 1 2.8 2.3 4.4 4.2 1.3 1.4 2.7 3.5 4.3 5.6Z" class="cls-8"/><path d="M54.2 89.4c.2.3.5.6.7.9 3.6 4.7 5.7 10.2 6.9 16 .3 1.7.6 3.4.8 5.1.1.9.2 1.8.2 2.7h-.2c-.9-7.3-5.7-14.1-12.3-17.4-1.6-.8-3.4-1.4-4.9-2.4-1.6-.9-3-2.3-3.5-4 0-.2-.1-.4-.1-.6-.5-2.9 1.7-5.9 4.5-7.2 3-1.3 7.4-1.1 10.6-.9h.4c-.5 3.7-1.6 6.8-2.7 7.4l-.4.3Zm-21.6 93.8c-.5-.3-1-.6-1.4-.9 1.3-6.9 2-11.1 4.7-19.3 2.4 1.7 4.7 3.4 6.2 4.6 0-.8.2-1.5.4-2.2 0 3.6 4.7 7.1 7.5 8.5.7.3 2.2.8 3.8 1.1-.6 1.2-1.1 2.4-1.7 3.6-.7 1.5-1.4 3.1-2.1 4.6-.6 1.4-1.4 2.9-2.7 3.6-1 .5-2.2.5-3.3.4-3.5-.3-8.1-2.1-11.4-4" class="cls-8"/><path d="M66 20.2c-9.8 1.4-6.9 4.5-12.8 8.9-7.5 5.6-6.5 42.6 4.4 48.5" class="cls-2"/><path d="M56.8 71c-.3-.9-.4-3.9 0-6.5m19.7 27.6c-4.7-2.6-11.3-7.2-13.8-10.2-2.4-2.8-4.4-6.1-5.6-10.2m48.2-19.9c0 2.1-.6 4.2-1.4 6.1-1.4 3.4-3.5 6.3-3.9 7.8-.6 2-1.4 13.9-8.1 20.5 0 0-3.7 4-7.2 6.3-1.2.8-2.4 1.4-3.4 1.5-.8.1-2.6-.6-4.8-1.8" class="cls-2"/><path d="M90.1 69.4c2.8 1.6 3 5.7-1 6.2m4.6-9.1c-.3 1.4 0 2.7.9 2.9s1.7-.9 2-2.3 0-2.7-.9-2.9c-.8-.2-1.7.9-2 2.3m-15.6-3.7c-.3 1.4.1 2.7.9 2.8s1.8-.8 2.1-2.2-.1-2.6-.9-2.8-1.8.8-2.1 2.2m10.5 17.6c-4.5-.5-7.3-2.3-11.3-5-.1-.1-.3-.2-.5-.3" class="cls-2"/><path d="M88.6 80.4c-2.6 7.7-13.4-.3-11.5-4.8M56.8 71c0 .3.2.5.2.8.4 1.7.6 3.8.6 5.9 0 1.3-.1 2.7-.3 4-.5 3.7-1.6 6.8-2.7 7.4m22 5.8c.1-.9 0-2.3 0-2.7h0v-.1m-3.1 12.2c1.6-1.1 1.9-5.6 3-8.9 0-.1 0-.3.1-.5m-5.2 9.3c.3.2.6.3.8.3q0 0 0 0c.5.1.9 0 1.2-.2M54.2 89.4c.2.3.5.6.7.9 4.2 5.1 13 12.1 16.5 13.9M54 89.1s.1.2.2.2m-43 45.9c-.4-1.1 16.5-43.4 30.2-45.4M45 110c-1.9 3.6-3.8 7.3-5.7 10.7-4.1 7.4-7.7 13.7-9.6 15.6m57.8 45.8c.9-24.6-2.2-24.1.3-48.5.1-1.3.3-2.6.4-4 .2-1.8 1-12.9.4-18m-36.5 67s0 0 0 0c6 1.2 11.8 2.2 17.8 2.3 5.1.1 10.2-.4 15.7-1.8q0 0 0 0" class="cls-2"/><path d="M39.3 120.6s0 0 0 0c1.1 7.5.4 13.6-.8 25.6m46-51h.1c9.2 6.8 13.5 28.4 18 36.7m-14.8 1.7c6.7 14.7 18.2 22.5 23.2 29.1m-8.4-30.4c6.7 6 13.5 17.1 17.9 20.1" class="cls-2"/><path d="M120.5 152.4c-3.2.7-.6-.2-3.3 1.7-2.3 1.6-5.8 5.5-6.1 8.5v1.2c.4 1.7 1.8 5.8 3.3 6.8 3.1 2 4.9 1.2 7.8-1 3-2.1 8.8-9.8 7.3-13.1s-5.7-5.2-9.2-4.1m-56.1 53.7c1.7-5.6 3.4-10.8 5.1-15.1m-36.7-7.9c-4.2 18.5-3.6 30.8-4.4 48 0 1.5-19.9 48.6-20 50.1.7.5 1.4.9 2 1.3 8.6 5.3 12.4 4.9 24.9 2.7.3 0 .6-.1.9-.2.6-1.8 18-45.4 18.6-47.3 3.3-10.3 6.4-21.7 9.5-31.6m.1 0c2.7 4.4 11.3 17.2 15.6 29.2.5 1.3 4.1 56.8 4.4 58.1 1.3.4 2.5.8 3.6 1 11 2.6 15.3-1.9 22.7-8.1v-.4c0-5.6-2.2-61.1-2.5-62.6-2.2-10.8-13.3-30.6-20.6-41.2-.4-.5-.7-1-1.1-1.5" class="cls-2"/><path d="M87.8 294.7c-.7 2.3-1.2 4.7-1.5 7-.2 1-.3 2.1.2 3 .7 1.2 2.3 1.7 3.7 2.1 11.9 3.2 19.2 5.8 31.5 7.1 4 .4 8.3.6 11.9-1.3 3.5-1.8 5.8-6.3 3.7-9.6-1-1.5-2.7-2.5-4.3-3.4-9.4-5.2-13.1-8.6-22.4-13.8 0 0-.1 0-.2-.1m-99.9-3.4-.2.2c-2.7 3.4-3.9 5.8-5.7 9.8-.4.9-.8 1.9-.6 2.9.3 1.4 1.7 2.3 3 3 10.6 6.2 21.2 12.4 32.7 16.8 3.8 1.4 6.7 1.4 10.7.6 3.9-.8 7.4-4.6 6.3-8.3-.5-1.7-1.9-3.1-3.2-4.4-7.7-7.5-10.6-10.2-18.3-17.7" class="cls-2"/><path d="M73.9 36.4c7.2-2 12.9 5.2 21.2 8.4 3.7 1.9 7.3-1.6 8.6-.5.6.5 2.1 4.4 1.6 7.6" class="cls-3"/><path d="M73.9 36.4c-2.8 3.1-3.3 6.7-4.2 10.9s-2.3 9.1-2.6 14c0 .8-.8 1.6-1.6 1.4-.4 0-.6-.4-.8-.7-1.6-2-3.9-5.2-5.1-7.6-.7-1.4-2.5-1.9-3.9-1.4s-2.3 4.2-2.2 5.7c.1 1.6.5 4 1.8 4.6.5.2 1 .6 1.4.8.8.5 1.5.8 2.2.3m45.4-6.5c2.9-2.7 4.3-11.2 4.3-19.6 0-8-6.2-14.7-14.2-15-10.3-.3-21.5-4.8-28.5-3.1" class="cls-2"/><path d="M47.8 154.1c-2.6 3.4-4.5 7.1-5.3 11.2-.2.7-.3 1.5-.4 2.2-1.6-1.2-3.8-2.9-6.2-4.6-4.1-2.9-8.6-6-11.4-7.7-5.9-3.6-14.5-13-13.3-20.1v-.3" class="cls-1"/><path d="M48.6 153.9h-.9c-4-.5-7-3.9-9.5-7.3-1.6-2.1-3-4.3-4.3-5.6-1.7-1.8-3.1-3.1-4.4-4.2-2.3-1.7-4.6-2.5-8.6-3.2M58 154.9c.7.4 2 1 3.2 1.7 2.9 1.5 5.7 3.7 1.2 6.5 1.7 2 .5 4.2-.9 5 2 1.4-.2 3.7-1.4 4.1 1.2 3.3-2.8 3.4-6.2 2.8h0c-1.6-.3-3.1-.8-3.8-1.1-2.9-1.5-7.6-4.9-7.5-8.5v-.5" class="cls-1"/><path d="M47.7 153.7c2.8 0 7.4-1.5 10.5-.8 1.7.4 2.9 1.4 3.1 3.7q0 0 0 0" class="cls-1"/><path d="M76.2 53.4c0 .3 7.1-1.8 9 1.6.3.6 2.5-2.4-.3-3.3-2.9-1-8.4-2-8.7 1.7m18.9 4.9c.6-.6 3.5.6 3.9 1.9.2.7 1.5-.4 1.6-1.2 0-.8-3.3-4-4.6-3.8-1.1.2-2.1 4.3-.9 3.1M53.9 89c.1.1.2.2.3.4h0c.3.3.5.6.7.9 3.6 4.7 5.7 10.2 6.9 16 .3 1.7.6 3.4.8 5.1.1.9.2 1.8.2 2.7.6 13.3-5.1 25.1-4.6 38.7m18.5-57.9c2.2 4.8 3.5 9.6 4.3 14.5.4 2.2.6 4.4.8 6.7.5 6.6.2 13.4 0 20.4-.5 14.4-1.1 29.2 3.9 42.7l.3.9" class="cls-2"/><path d="M35.9 162.8v.2c-2.7 8.2-3.5 12.4-4.7 19.3.4.3.9.6 1.4.9 3.3 2 7.9 3.8 11.4 4 1.1 0 2.3 0 3.3-.4 1.4-.7 2.1-2.2 2.7-3.6.7-1.5 1.4-3.1 2.1-4.6.6-1.2 1.1-2.4 1.7-3.6" class="cls-3"/><path d="M80.8 109.4c-1-2.4-4.6-5-7.4-5.1s-.6 0-.9 0c-.5-.1-.9-.2-1.1-.2h0c-.6 0-.8 0-2 .5-1.7.6-5.1 4.2-5.2 6-1-.6-1.5-3.5-2.2-4.4" class="cls-2"/><path d="M72.2 104.7c1.4 26 .4 50.3-2.3 76.2m-13-99.3c-3.2-.2-7.7-.4-10.6.9-2.8 1.2-5 4.2-4.5 7.2 0 .2 0 .4.1.6.5 1.7 1.9 3.1 3.5 4s3.3 1.5 4.9 2.4c6.6 3.3 11.4 10 12.3 17.4m22-21.7v2.9c-.1 6.8-1.1 14.3-2.7 20.7" class="cls-2"/></svg>')}`;
export default image;