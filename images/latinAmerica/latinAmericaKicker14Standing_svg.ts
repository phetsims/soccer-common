/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-10,.cls-12,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-4{fill:#605a58}.cls-5{fill:#6eadbc}.cls-6{fill:#a44256}.cls-7{fill:#d2a599}.cls-8{fill:#beb8b9}.cls-9{fill:#a77b5e}.cls-10{fill:#332921}.cls-12{fill:#e8dfcf}</style></defs><path d="M25.8 136.7c.7-.8 6.1-6.8 7.4-8.2l.4-.2c-3.8-2.1-8.9-5.3-11.6-8-2.7 3.4-7.1 9.8-8.1 12.2-2.2 5.3 3 14.4 7.3 18.2 3.1 2.8 9.7 8.1 12.6 11.3-.9 2.9 2.6 6.5 4.7 8.2.3.3 1 .6 1.7 1 2.7 1.3 7.1 2.5 6.6-.6 1-.1 3.2-1.6 1.7-3 1.2-.3 2.5-1.9 1.5-3.7 4-1.5 2.1-3.6 0-5.2.3-3.9-4-4-7.7-4.2-1 0-2 0-2.8-.2-5.6-1.2-8.2-9.7-10.4-13.1-1.3-2-2.3-3.4-3.3-4.5" class="cls-9"/><path d="M20.1 117.2c0 .8.7 1.9 1.9 3.1 2.7 2.7 7.8 5.9 11.6 8 1.5.8 2.8 1.4 3.7 1.8.9-1.1 1.7-2.1 2.3-3H39c-5.8-1.9-13.5-7.3-17.2-12.1-1 1.4-1.6 2.3-1.6 2.3Z" class="cls-12"/><path d="M49.5 294.2c-1.5-1.7-3-1.9-5.7-2.4-2.1-.4-4.7-.6-7.4 0-1.5.3-3 1-4.5 2-2.4 1.4-6.6 4.7-7.1 7.5-.2 1.4-.3 5.4.6 6.4 1.1 1.1 3.3 1.4 4.8 1.3 5-.3 10 .1 15-.3 1.8-.2 3.8-.4 4.9-1.8 1.4-1.7 1.3-9.9 0-11.7-.3-.4-.5-.7-.8-1Z" class="cls-7"/><path d="M89.2 150.1c-.2-4.4-.3-8.5.2-12 .5-3.4.8-6.4.8-9.3v-3.7c4.5-.3 10.5-3.6 13.9-6.4-2.2-4.9-7.8-16.1-10.7-19.2-2-2.2-5.9-4.5-11.7-5.4v.2c2.6 3.7 3.3 9.9 3.3 17 0 4-2.9 7.4-9.4 8.5-5.8.9-11.6.8-17.3.3-3.6-.3-6.4-3-7-6.5-.6-4-4.1-18.4-7.9-18.9-2.1.2-3.9.5-4.5.8-4.9 3.1-13.7 14.6-17.3 19.5 3.7 4.8 11.4 10.2 17.2 12h.6c.5-.8 1-1.6 1.4-2.4h.3c.3 3.9 1.5 18.7 1.3 22.5-.1 1.8-.2 4.4-.4 7.4 3.6.1 8 .2 7.7 4.2 2.1 1.7 4 3.8 0 5.2 1 1.8-.2 3.4-1.5 3.7 1.4 1.4-.7 2.9-1.7 3 .6 3.2-3.9 1.9-6.6.6 0 0-.5 2.3-1.1 4.8h.3c10.3 8.1 35.7 5.6 49.8 3.6.6-2.6.9-5.5 1-8.6.2-6.6-.6-14.1-.9-20.9Z" style="stroke-width:0;fill:#ffd351"/><path d="M54.9 235.4c5.1.4 10.3.5 15.1.2 7.2-.4 13.8-1.3 18.5-2.5 2.6-.7 4.7-1.4 6-2.1-.2-1.3-.4-3-.6-4.8-16.9 4.9-45 4.9-61.2-1.7-.2 1.8-.3 3.5-.5 5.1q2.25 1.2 4.8 2.1c5.4 2 11.6 3.1 17.8 3.7Z" class="cls-8"/><path d="M33.3 217.6c-.2 2.4-.4 4.7-.6 6.8 16.3 6.6 44.4 6.6 61.2 1.7-.2-2-.3-4.3-.5-6.7-16.9 4.9-43.9 4.8-60.2-1.7Z" class="cls-5"/><path d="m33.9 211-.6 6.6c16.3 6.6 43.3 6.7 60.2 1.7-.1-2.2-.3-4.4-.4-6.7-16.9 4.9-42.9 4.9-59.2-1.6" class="cls-6"/><path d="M34.5 203.9c-.2 2.3-.4 4.7-.6 7.1 16.3 6.6 42.4 6.6 59.2 1.6-.1-2.3-.2-4.7-.4-6.9-16.9 4.9-41.9 4.7-58.2-1.9Z" class="cls-4"/><path d="M35.1 197.5c-.2 2-.4 4.2-.6 6.4 16.3 6.6 41.4 6.8 58.2 1.9-.1-2.5-.3-4.8-.4-6.8-16.9 4.9-40.9 5.1-57.2-1.5" class="cls-8"/><path d="M34.7 245.3c-1 8.9 3.5 29.9 1.8 46.5 2.7-.6 5.3-.3 7.4 0 2.7.5 4.2.7 5.7 2.4-.7-9.5.8-20.3 1.9-25.5 1.9-8.4 2.7-17.2 3.3-25.8.3-3.6.1-4.7 0-7.5-6.3-.5-12.4-1.7-17.8-3.7-.7 3.7-2 9.5-2.4 13.6Z" class="cls-9"/><path d="M36 190.1c-.3 2.2-.6 4.7-.9 7.4 16.3 6.6 40.3 6.4 57.2 1.5-.2-2.1-.3-3.8-.5-5.1-.1-.6-.2-1.2-.3-1.7-16.9 4.9-39.2 4.6-55.5-2Z" class="cls-5"/><path d="M37.3 183.4c-.4 1.3-.8 3.7-1.3 6.7 16.3 6.6 38.7 7 55.5 2-.5-3.2-.7-4.5-1.4-7.8-16.8 4.9-36.3 4-52.5-2.6-.2 1-.4 1.6-.4 1.6Z" class="cls-6"/><path d="M39 176c-.5 2-1 4.3-1.4 5.8 16.2 6.6 35.7 7.5 52.5 2.6-.3-1.2-.6-2.7-1-4.7-14.2 2-39.5 4.5-49.8-3.5H39Z" class="cls-4"/><path d="M79.3 78.8c-1.4 2.5-2.8 3.7-6 4.1-1.9.3-5.8-.1-7.8-1.3-1.9-1.1-2.7-1.5-4.9-4.7 1.1 1 13.1 3.7 18.6 1.9ZM42.9 68.7c1.1.3 2.3.3 3.5.3.2 2.4.6 4.5 1.1 6.3 1.8 5.8 5.3 8.4 7.5 9.8.6.3 1 .6 1.4.8 8.4 5.2 13.1 7.1 17.2 6.4 3.3-.6 6.2-2.9 10.3-6.6 4.5-4 5.9-10.2 6.4-16.3.7-7.4 1.5-9.2 1.5-9.2.1-.5.2-.9.3-1.3.6-2.8.2.3.4-3.8.3-9-2.2-18.6-16.9-16.3-5.8-2.4-24.2-6.7-29.2 20.2-1.2-1.5-3.6-1.5-5.1-.2-1.4 1.3-1.9 3.4-1.7 5.4.1 1.1.4 2.2 1.1 3 .6.7 1.4 1.1 2.2 1.4Zm18.3-8.8c0-2.1.9-3.8 2-3.8s2 1.7 2 3.8-.9 3.8-2 3.8-2-1.7-2-3.8m21.8 0c0-1.8.7-3.3 1.6-3.3s1.6 1.5 1.6 3.3-.7 3.3-1.6 3.3-1.6-1.5-1.6-3.3" class="cls-9"/><path d="M46.1 33.6c-5.4 7.3-7.1 13-4.8 25.4 1.4-1.3 3.9-1.3 5.1.2 5-26.9 23.4-22.6 29.2-20.2 1.3-5.4-3.4-13.1-7.3-14.2-9.2-.2-16.7 1.4-22.2 8.8m.9 41.8c-2.8 7.6-3.6 12.4-3.5 19.2 1.3-.1 2.8-.2 4.1-.3 2.4-.1 4.4-.1 4.6 0 2.8-1.8 2.7-5.2 2.7-9.2-2.2-1.4-5.7-4-7.5-9.8h-.5Z" class="cls-10"/><path d="M46.3 69c-1.1 0-2.4 0-3.5-.3 1.1 2.5 2.5 4.6 4.2 6.7h.5c-.6-1.9-1-4-1.1-6.5Z" class="cls-10"/><path d="M47.7 94.3c-1.3 0-2.8.2-4.1.3 3.8.6 7.3 14.9 7.9 18.9.5 3.5 3.4 6.2 7 6.5 5.7.4 11.5.6 17.3-.3 6.6-1 9.5-4.4 9.4-8.5 0-7.1-.7-13.3-3.3-17V94c-1.1-.2-2.3-.3-3.6-.4 1.9 4.1 2.5 6.7 2.7 11.4.2 3.4-.1 6.6-3.7 7.9-5 1.8-8.3 2-14 1.8-1.2 0-8.1 0-9.5-8.3-.8-4.8-1.9-9.5-5.9-12.3Z" class="cls-12"/><path d="M76.2 93.6c-1.3-.2-2.8-.5-2.6-1.4-4.1.7-8.8-1.2-17.2-6.4-.3-.2-.8-.5-1.4-.8 0 4 0 7.4-2.7 9.2h-4.6c4 2.8 5.1 7.5 5.9 12.3 1.4 8.3 8.4 8.2 9.5 8.3 5.7.2 9 0 14-1.8 3.6-1.3 3.9-4.5 3.7-7.9-.2-4.8-.8-7.3-2.7-11.4h-2Z" class="cls-9"/><path d="M63.1 56.1c-1.1 0-2 1.7-2 3.8s.9 3.8 2 3.8 2-1.7 2-3.8-.9-3.8-2-3.8" class="cls-3"/><path d="M60.7 76.9c2.2 3.2 3 3.5 4.9 4.7s5.8 1.6 7.8 1.3c3.2-.4 4.6-1.7 6-4-5.5 1.8-17.5-.9-18.6-2Z" style="stroke-width:0;fill:#fff"/><path d="M68.3 24.7c3.9 1.2 8.6 8.8 7.3 14.2 14.7-2.4 17.2 7.3 16.9 16.3-.2 4.1.3 1-.4 3.8h.3c.4-.2.9-.2 1.3.2 1.6-17.2-.9-25.4-10.1-30.8-3.3-1.9-8.7-3.4-12.9-3.6h-2.5Z" class="cls-10"/><path d="M70 235.6c-1.4 8.2.6 13.7 1.2 16.1 4.2 14.9 6.6 25.7 7.2 42 .6-.6 1.3-.9 2.4-1.1 2.2-.4 6.3 0 8.6.1.7.1 1.4.3 2.1.4-.6-3.8-1.5-37-1.2-41.1.4-5.6 0-9.9-1.8-18.9-4.7 1.2-11.3 2.2-18.5 2.5" class="cls-9"/><path d="M76.7 296.2c-1.1 1.9-1.8 10.7 0 12.1 1.3.9 13.2.7 17.8.8.4 0 5.3-.7 5.7-.9 1.4-.6 1.2-8 .6-9.4-1.2-3-5.3-4.7-9.3-5.6-.7-.2-1.4-.3-2.1-.4-2.2-.2-6.4-.5-8.6-.1-1 .2-1.8.6-2.4 1.1-.7.6-1.2 1.4-1.7 2.5Z" class="cls-7"/><path d="M84.6 56.5c-.9 0-1.6 1.5-1.6 3.3s.7 3.3 1.6 3.3 1.6-1.5 1.6-3.3-.7-3.3-1.6-3.3" class="cls-3"/><path d="M98.4 134.8c-1.5 2.6-2.5 5.7-3.8 8.3-1 1.9-2.2 3.3-3.5 5-.6.8-1.5 1.6-1.8 2 .3 6.8 1.1 14.3.9 20.9.3-.1 1-.7 1.8-3 .8-2.2 1.2-4.1 1.9-6.3 1.6-5 5.1-7.9 9-11.9 5.2-5.5 10.3-12.4 5.8-19.2-.7-1.1-2.4-4.4-4.2-7.9-1.8 1.8-6.5 3.9-10.6 5.1 1.4 2.6 4.2 7.2 4.5 7" class="cls-9"/><path d="M90.3 125.1v3.7c1.1-.2 2.3-.6 3.6-1 4.1-1.3 8.7-3.3 10.6-5.1.9-.8 1.1-1.6.4-2.3-.2-.4-.4-1-.7-1.7-3.4 2.8-9.4 6.1-13.9 6.4" class="cls-12"/><path d="M93.8 59.1c-.5-.3-.9-.3-1.3-.1h-.3c0 .3-.2.7-.3 1.2 0 0-.8 1.8-1.5 9.2 1.1 0 5-.9 5-5.1s-.7-4.6-1.5-5.2Z" class="cls-9"/><path d="M92.5 55.2c-.2 4.1.3 1-.4 3.8 0 .3-.2.7-.3 1.3 0 0-.8 1.8-1.5 9.2-.6 6.1-2 12.3-6.4 16.3-4.1 3.7-7.1 6-10.3 6.6-4.1.7-8.8-1.2-17.2-6.4-.3-.2-.8-.5-1.4-.8-2.2-1.4-5.7-4-7.5-9.8-.6-1.8-1-3.9-1.1-6.3m42-16.6c-1.9-2.3-5.6-2-7.5-.8m-13.6-.1c-3.2-2.3-7.4-1.2-8 .7" class="cls-2"/><path d="M52.2 94.2c2.8-1.8 2.7-5.2 2.7-9.2m18.6 7.3c-.2.8 1.3 1.2 2.6 1.4 1.1.1 2 .1 2 .1" class="cls-2"/><path d="M76.2 93.6h2c1.3 0 2.5.2 3.6.4 5.8.9 9.7 3.2 11.7 5.4 2.8 3.1 8.5 14.4 10.7 19.2.3.7.6 1.3.7 1.7.7.7.4 1.5-.4 2.3-1.8 1.8-6.5 3.9-10.6 5.1-1.3.4-2.5.7-3.6 1h-.2M43.5 94.6c-2.1.2-3.9.5-4.5.8-4.9 3.1-13.7 14.6-17.3 19.5-1 1.4-1.6 2.3-1.6 2.3 0 .8.7 1.9 1.9 3.1 2.7 2.7 7.8 5.9 11.6 8 1.5.8 2.8 1.4 3.7 1.8.9-1.1 1.7-2.1 2.3-3 .5-.8 1-1.6 1.4-2.5 1-2 1.9-3.9 3.5-6.1m7.7-24.3h-4.6c-1.3 0-2.8.2-4.1.3" class="cls-2"/><path d="M88.8 113.6c.9 4.3 1.4 7.9 1.5 11.5v3.7c0 2.9-.4 5.9-.8 9.3-.5 3.5-.4 7.6-.2 12 .3 6.8 1.1 14.3.9 20.9 0 3.1-.4 6-1 8.6m-47.9-54.8c.3 3.7 1.5 18.5 1.3 22.3-.1 1.8-.2 4.4-.4 7.4v.1m46.3 78.5c-4.7 1.2-11.3 2.2-18.5 2.5-4.9.2-10 .2-15.1-.2-6.3-.5-12.4-1.7-17.8-3.7q-2.55-.9-4.8-2.1c-.1 0-.3-.2-.4-.2m57.2-49.8c.4 2 .7 3.5 1 4.7.7 3.3.9 4.6 1.4 7.8 0 .5.2 1.1.3 1.7.2 1.3.4 3 .5 5.1.2 2 .3 4.4.4 6.8.1 2.2.2 4.5.4 6.9.1 2.3.2 4.5.4 6.7.1 2.4.3 4.7.5 6.7.2 1.9.3 3.5.6 4.8-1.3.7-3.3 1.5-6 2.1" class="cls-2"/><path d="M32.2 229.8v-.2c.2-1.6.3-3.3.5-5.1.2-2.2.4-4.5.6-6.8l.6-6.6c.2-2.4.4-4.8.6-7.1.2-2.2.4-4.4.6-6.4.3-2.7.6-5.2.9-7.4.4-3.1.8-5.4 1.3-6.7 0 0 .1-.7.4-1.6.3-1.5.9-3.7 1.4-5.8.6-2.5 1.1-4.8 1.1-4.8m48.3 61.8c1.9 9 2.2 13.3 1.8 18.9-.3 4.1.6 37.3 1.2 41.1M70 235.6c-1.4 8.2.6 13.7 1.2 16.1 4.2 14.9 6.6 25.7 7.2 42m-23.5-58.8v.5c0 2.8.2 4 0 7.5-.6 8.6-1.5 17.4-3.3 25.8-1.2 5.2-2.7 16-1.9 25.5m-12.6-62.5c-.7 3.7-2 9.5-2.4 13.6-1 8.9 3.5 29.9 1.8 46.5M83 59.9c0 1.8.7 3.3 1.6 3.3s1.6-1.5 1.6-3.3-.7-3.3-1.6-3.3-1.6 1.5-1.6 3.3Zm-21.8 0c0 2.1.9 3.8 2 3.8s2-1.7 2-3.8-.9-3.8-2-3.8-2 1.7-2 3.8Zm18.4 10.6c0 2.7-5.5 2.8-7.4 2.6m7.5 5.5c-.1 0-.3.1-.4.2-5.5 1.9-17.5-.8-18.6-1.9 2.2 3.2 3 3.5 4.9 4.7s5.8 1.6 7.8 1.3c3.2-.4 4.6-1.7 6-4" class="cls-2"/><path d="M41.3 58.9c-2.3-12.4-.6-18.1 4.8-25.4 5.5-7.4 12.9-9 22.2-8.9h2.5c4.2.2 9.6 1.7 12.9 3.6C93 33.5 95.4 41.7 93.8 59M32 293.9c-2.4 1.4-6.6 4.7-7.1 7.5-.2 1.4-.3 5.4.6 6.4 1.1 1.1 3.3 1.4 4.8 1.3 5-.3 10 .1 15-.3 1.8-.2 3.8-.4 4.9-1.8 1.4-1.7 1.3-9.9 0-11.7-.3-.4-.5-.7-.8-1-1.5-1.7-3-1.9-5.7-2.4-2.1-.4-4.7-.6-7.4 0-1.5.3-3 1-4.5 2m57.6-1.2c-2.2-.2-6.4-.5-8.6-.1-1 .2-1.8.6-2.4 1.1-.7.6-1.2 1.4-1.7 2.5-1.1 1.9-1.8 10.7 0 12.1 1.3.9 13.2.7 17.8.8.4 0 5.3-.7 5.7-.9 1.4-.6 1.2-8 .6-9.4-1.2-3-5.3-4.7-9.3-5.6-.7-.2-1.4-.3-2.1-.4M43.5 94.6c3.8.6 7.3 14.9 7.9 18.9.5 3.5 3.4 6.2 7 6.5 5.7.4 11.5.6 17.3-.3 6.6-1 9.5-4.4 9.4-8.5 0-7.1-.7-13.3-3.3-17" class="cls-2"/><path d="M75.6 38.9c1.3-5.4-3.4-13.1-7.3-14.2" class="cls-2"/><path d="M92.5 55.2c.3-9-2.2-18.6-16.9-16.3-5.8-2.4-24.2-6.7-29.2 20.2" class="cls-2"/><path d="M46.4 59.1c-1.2-1.5-3.6-1.5-5.1-.2-1.4 1.3-1.9 3.4-1.7 5.4.1 1.1.4 2.2 1.1 3 .6.7 1.4 1.1 2.2 1.4 1.1.3 2.3.3 3.5.3m46.1-10c.4-.2.9-.2 1.3.1.8.6 1.5 2.1 1.5 5.2s-3.9 5.1-5 5.1" class="cls-2"/><path d="M42.7 68.4s0 .2.1.2c1.1 2.5 2.5 4.6 4.2 6.7m0 .1c-2.8 7.6-3.6 12.4-3.5 19.2m-21.8 20.3c3.7 4.8 11.4 10.2 17.2 12m51-1.8h.4c4.5-.3 10.5-3.6 13.9-6.4" class="cls-2"/><path d="M104.5 122.7c1.9 3.5 3.5 6.8 4.2 7.9 4.5 6.9-.6 13.8-5.8 19.2-3.9 4-7.4 6.9-9 11.9-.7 2.2-1.2 4.1-1.9 6.3-.8 2.3-1.6 2.8-1.8 3h-.1m3.8-43.2c1.4 2.6 4.2 7.2 4.5 7" class="cls-1"/><path d="M89.2 150.1c-.1.2-.2.3 0 .2" class="cls-2"/><path d="M102.3 130.5c-1.7 1.1-2.9 2.6-3.9 4.3q0 0 0 0c-1.5 2.6-2.5 5.7-3.8 8.3-1 1.9-2.2 3.3-3.5 5-.6.8-1.5 1.6-1.8 2m-56.1-21.7c-1.3 1.4-6.7 7.4-7.4 8.2" class="cls-1"/><path d="M22 120.3c-2.7 3.4-7.1 9.8-8.1 12.2-2.2 5.3 3 14.4 7.3 18.2 3.1 2.8 9.7 8.1 12.6 11.3" class="cls-1"/><path d="M39.5 154.3c-5.6-1.2-8.2-9.7-10.4-13.1-1.3-2-2.3-3.4-3.3-4.5-1.3-1.4-2.7-2.4-5.2-3.9" class="cls-1"/><path d="M40.1 171.2c-.8-.3-1.4-.7-1.7-1-2.2-1.6-5.6-5.3-4.7-8.2" class="cls-2"/><path d="M47.5 156.8c.5.5 1.4 1.1 2.3 1.8 2.1 1.7 4 3.8 0 5.2 1 1.8-.2 3.4-1.5 3.7 1.4 1.4-.7 2.9-1.7 3 .6 3.2-3.9 1.9-6.6.6" class="cls-1"/><path d="M39.5 154.3c.8.1 1.7.2 2.8.2 3.6.1 8 .2 7.7 4.2q0 0 0 0" class="cls-1"/><path d="M47.7 94.3c4 2.8 5.1 7.5 5.9 12.3 1.4 8.3 8.4 8.2 9.5 8.3 5.7.2 9 0 14-1.8 3.6-1.3 3.9-4.5 3.7-7.9-.2-4.8-.8-7.3-2.7-11.4l-.2-.4m-38.6 82.7c10.3 8.1 35.7 5.5 49.8 3.5m-51.5 2.2c16.2 6.6 35.7 7.5 52.5 2.6h.2M36 190.1c16.3 6.6 38.7 7 55.5 2m-56.4 5.4c16.3 6.6 40.3 6.4 57.2 1.5m-57.8 4.9c16.3 6.6 41.4 6.8 58.2 1.9M33.9 211c16.3 6.6 42.4 6.6 59.2 1.6m-59.8 5c16.3 6.6 43.3 6.7 60.2 1.7m-60.8 5.2c16.3 6.6 44.4 6.6 61.2 1.7" class="cls-2"/></svg>')}`;
export default image;