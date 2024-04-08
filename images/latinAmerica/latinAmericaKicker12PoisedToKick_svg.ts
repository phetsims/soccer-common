/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-10,.cls-3,.cls-4,.cls-5,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-4{fill:#748f9d}.cls-5{fill:#88d3ba}.cls-7{fill:#55b695}.cls-8{fill:#1d6352}.cls-9{fill:#ad7153}.cls-10{fill:#a66d4d}</style></defs><path d="M17.5 298.4c-.4.8-.7 1.7-.5 2.6.3 1.2 1.5 2 2.6 2.6 9.3 5.4 14.9 7.2 25 11 3.3 1.3 6.9 2.4 10.4 1.6 3.5-.7 6.5-4 5.5-7.2-.5-1.5-1.7-2.7-2.8-3.8-6.8-6.5-9.7-9.4-16.5-16-.6-1.2-1.5-1.4-2.6-1.2-.2 0-.5.1-.7.2-1.4.6-2.5 1.7-3.5 2.8s-9.1.9-9.4-1.6l-.6-1.1-.6.2c-2.5 3-4.6 6.4-6.2 9.9Z" class="cls-8"/><path d="m24.4 288.3.6 1.1c.3 2.5 8.3 2.7 9.4 1.6 1-1.1 2.1-2.3 3.5-2.8.3-.1.5-.2.7-.2h-1.5q2.4-3.9 4.5-8.7h-.1c-4.8.5-9.8-1.2-13.4-4.4H28c-1 4.6-2.1 9.2-3.6 13.4" class="cls-10"/><path d="M27.9 274.9h.1c3.6 3.2 8.6 5 13.4 4.4h.1c4.2-9.4 7.8-20.8 11.5-29.2 4.8-10.8 6.8-11.9 9.5-22.7.7-2.8 1.2-4.8 2-7.9-7.6-.3-15.6-1.5-22.9-2.7.4 4.5.7 10.4-.6 14.4-1.3 3.9-3.3 8.1-5.1 11.7-3.9 7.6-5.6 20.1-8.1 32Z" class="cls-4"/><path d="M70.5 153.5c-.7-5.7-7.7-3-11.4-3.1-3.9-.6-6.9-4.8-9.3-8.4-1-1.4-1.8-2.7-2.6-3.6-2.6-3-3.7-3.9-5.5-5.2.6-1.3 2-8.6 3.3-13.5h-.3c-3 0-6-.5-8.9-1.4-1.2-.4-2.9-1.5-3.9-2.3-2.2 7.6-3.3 14-3.7 16.3-1 6.3 9 14.6 14.1 18.1 1.6 1.1 3.4 2.4 5.4 3.8 2.7 2 5.5 4.1 7.7 5.9-.2 3.4 4.1 6.9 6.6 8.3 1.8 1 9.9 3.3 8.3-1.1 1-.3 2.8-2.3 1-3.6 1.1-.6 2-2.5.6-4.4 3.7-2.4 1.2-4.4-1.2-5.9Z" class="cls-9"/><path d="M46.2 115.9c.1 0 .2 0 .4-.1 0 0 0-.2-.1-.2h-.3q0-.45.3 0h.1c11.6-12.3 4.3-27-3.7-24.2l-1.2.6-.3.2c-4.5 4.1-8.2 8.7-10.2 14.4-.5 1.3-.8 2.7-.3 3.9.3.8 1 1.3 1.7 1.8.3.2.7.4 1 .6 2 1.1 4 2.3 6.2 2.9 2.1.6 4.4.7 6.4 0Z" class="cls-5"/><path d="M32.5 112.5c-.9 0-1.2 3.1-.7 3.5 1 .8 2.7 1.9 3.9 2.3 2.9.9 5.9 1.4 8.9 1.4h.3c.4-1.6.9-3 1.2-3.8-2 .8-4.3.7-6.4 0-2.2-.6-4.2-1.8-6.2-2.9-.3-.2-.7-.4-1-.6Z" class="cls-7"/><path d="M41.8 216.9c7.3 1.1 15.2 2.3 22.9 2.7 3.7.2 7.4.1 10.8-.2 2.3-.2 4.6-.6 6.9-1.1 9-1.9 17.2-5.9 23.3-12.9h.1c-3.3-11-10-27.1-16.1-35.6v-.3c-1.9-8.2-2.9-15.8-3.3-22.5-.6-9.5 0-16.9 1.3-21 .3-.9.7-1.9 1.1-3.3q.45-1.5.9-3.6c.1-.7.3-1.5.4-2.4H90c-4.8-4.1-25-4.3-41.9 1.7H48c.7 1.8 1.3 3.7 1.3 4.6.4 4.6 1.1 10.8.9 14.7-.1 2 0 2.7-.3 4.3 2.4 3.6 5.5 7.8 9.3 8.5 3.6 0 10.6-2.8 11.4 3 2.5 1.5 4.9 3.5 1.2 5.9 1.5 1.9.5 3.8-.6 4.4 1.7 1.3 0 3.3-1 3.6 1.6 4.4-6.5 2.1-8.3 1.1-2.5-1.5-6.8-4.9-6.6-8.3-2.1-1.8-4.9-3.9-7.7-5.9-3.3 7.4-6.5 20-6.7 28.1-.2 8.2-1.9 22.5-1.8 33.9v.2c.9.1 1.9.3 2.8.4Z" class="cls-5"/><path d="M94 53.9c-.3 3-1 3.8-2.1 7.3 0 0-.4 7-2.8 11.9-1.8 3.8-6.9 10.9-12.7 12.5 0 .5-.1.9-.1 1.2l2.1.9c3.7 1.6 6.9 3.4 9.4 5.8q1.05.9 1.8 2.1c.4.5.7.9.9 1.3 1.9-15.3 5.3-30.3 5.9-45.7v-4c-.2-4.7-1.5-9.5-7.3-13.6-6-5-15.9-6.6-23.9-4.5q-3.15.75-5.7 2.4c-7 4.4-8.5 11.4-11 18.7-1.3 3.8-1.2 8.2-1.4 12.3 0 .6 0 1.2-.1 1.8-.5 5.1-1 10.2-1.7 15.4-.5 3.7-1 7.3-1.6 11h1.1c4.1-1.5 11.1-3.9 14.1-4.4v-.2c.9-3.3 1.2-6.8.7-10.2h.2c-3.3-4.8-4.8-10-4.8-15-.6-.3-1.1-.8-1.4-1.4-.8-1.3-1-2.9-1-4.4 0-1.3 0-2.8.8-3.8.6-.7 1.5-1.1 2.3-1 .9.1 1.7.7 2.1 1.5h.4c6-4.2 12.4-7.9 19.1-11.1 1.2-.6 2.3-1.1 3.6-1.2 2.8-.3 7.3 1.7 9.2 3.8 1.2 1.3 1.8 3.7 2.4 5.4s1.2 3.5 1.6 5.3Z" style="stroke-width:0;fill:#302c23"/><path d="M44.8 90.6c-.7.3-1.3.5-1.8.8 8-2.8 15.2 11.8 3.7 24.1h-.1s0 .1.1.2c.3.5.8 1.6 1.2 2.7h.1c16.9-6.1 37.1-5.9 41.9-1.8h.1c.4-2.9.5-6.7.3-11.8-.2-3.2-.8-8.9-2.6-11.4-2.4-2.3-5.7-4.2-9.4-5.8 2.1 6.2 0 17.9-3.7 19.9-2.2-1.3-5.5-4-9.6-8.1-3.4-3.4-5.5-8.6-6.1-13.3-3 .6-10 2.9-14.1 4.5" class="cls-7"/><path d="M47.9 44c-.6 1.7-10.5 16.8-1.1 18.4h.3c.2-4.1.1-8.6 1.4-12.3 2.4-7.3 3.9-14.3 11-18.7q2.55-1.5 5.7-2.4c-1.9-2-5.1-2.4-7.6-1.4s-4.4 3.3-5.4 5.8c-.7 1.8-1 3.8-1.8 5.6-.7 1.7-1.7 3.2-2.3 4.9Z" class="cls-5"/><path d="M55 60.8c0 5 1.5 10.3 4.8 14.9 1.1 1.5 2.3 2.9 3.7 4.3 3.6 4 7.7 6.1 10.7 6 .7 0 1.5-.1 2.2-.3 5.8-1.6 10.9-8.8 12.7-12.5 2.4-5 2.8-11.9 2.8-11.9C93 57.8 93.7 57 94 54c-.5-1.8-1-3.6-1.6-5.3-.6-1.6-1.2-4.1-2.4-5.4-1.9-2-6.4-4.1-9.2-3.8-1.3.1-2.5.7-3.6 1.2-6.7 3.2-13.1 6.9-19.1 11.1h-.4c-.4-.9-1.2-1.4-2.1-1.6-.9-.1-1.8.3-2.3 1-.8 1-.9 2.4-.8 3.8 0 1.5.3 3.1 1 4.4.3.6.8 1.1 1.4 1.4ZM68.9 50c-.1-.2 3.4-1.4 4.7-1.4.9 0 2.7.3 3.6 1.3 1.2 1.4 1.3 2.6.4 2.2-.8-.3-1.7-2.1-4.5-2.5-1.6-.2-4.1.5-4.1.3Zm13 26.4c-4 7.4-13.4-1.3-12.1-4.9 5.5 3.2 9.4 4.9 12.1 4.9m-9.6-15.1c-.8-.2-1.2-1.6-.8-3 .3-1.5 1.2-2.5 2-2.3s1.1 1.6.8 3c-.3 1.5-1.2 2.5-2 2.3m13.9-5.8c-.7-.2.1-1.1 1.6-1.5 1.1-.3 2.2.4 2.7.9.7.6 1.9 2.6 1.7 2.7-.1 0-1.2-1-2.1-1.7-1.7-1.2-3.3-.3-3.9-.5Zm.8 10.2c-.8-.2-1.1-1.6-.8-3.1s1.2-2.6 2-2.4 1.1 1.6.8 3.1-1.2 2.6-2 2.4" class="cls-9"/><path d="M76.2 86.8c0-.3 0-.7.1-1.2-.7.2-1.4.3-2.2.3-3 0-7.1-2.1-10.7-6-1.4-1.4-2.6-2.8-3.7-4.3h-.2c.5 3.5.2 7-.7 10.3v.2c.6 4.7 2.7 10 6.1 13.3 4.1 4.1 7.5 6.8 9.6 8.1 3.7-2 5.9-13.6 3.7-19.9l-2.1-.9Z" class="cls-9"/><path d="M73.5 48.6c-1.3 0-4.8 1.2-4.7 1.4 0 .1 2.5-.5 4.1-.3 2.8.3 3.7 2.2 4.5 2.5.9.4.8-.9-.4-2.2-.9-1-2.7-1.3-3.6-1.3Z" class="cls-3"/><path d="M69.9 71.4c-1.3 3.7 8 12.4 12.1 4.9-2.7 0-6.6-1.7-12.1-4.9" style="stroke-width:0;fill:#fff"/><path d="M71.5 58.3c-.3 1.5 0 2.8.8 3s1.7-.8 2-2.3 0-2.8-.8-3-1.7.8-2 2.3" class="cls-3"/><path d="M82.3 218.3c2.3 3.9 3.8 6.4 4.5 8.7 0 0 1.2 3.6.8 7-.5 4.1.5 12.7 1.3 16.6 2.4 10.8 4.1 19.1 4.6 28.7 4.4 1.9 8.7 2 12.7-.7h.5c1.9-21.9 1.3-40.2 1.1-63.3 0-2-.8-5.6-2.1-10h-.1c-6.1 7-14.4 11-23.3 12.9Z" class="cls-4"/><path d="M87.8 54c-1.5.4-2.3 1.3-1.6 1.5s2.2-.7 3.9.5c.9.7 2 1.7 2.1 1.7.2 0-1-2.1-1.7-2.7-.5-.5-1.6-1.2-2.7-.9Zm-1.6 8.6c-.3 1.5 0 2.9.8 3.1s1.6-.9 2-2.4c.3-1.5 0-2.9-.8-3.1s-1.6.9-2 2.4" class="cls-3"/><path d="M87.6 125.9c-1.2 4.1-1.8 11.5-1.3 21h.4c2.4 1.5 4.9 2.8 6.7 3.6 4.1 1.9 10.4 4.9 14.5 7.3h.3c0-.7-.1-1.3 0-1.9.3-3.5 1.3-6 4.2-7.6-5.8.7-12.5-7.7-16.1-10.5-2.9-2.2-4-2.7-6.3-4.2.8-3.9 1.1-7.3 1.6-11-1.1.3-1.8.3-2.9 0-.4 1.3-.8 2.3-1.1 3.3" class="cls-9"/><path d="M88.7 122.7c1.1.4 1.8.4 2.9 0l.6-3.6c-.9.2-1.7.2-2.6-.1q-.45 2.1-.9 3.6Z" class="cls-7"/><path d="m89.5 95.5-1.8-2.1c1.9 2.6 2.4 8.2 2.6 11.4.3 5.1 0 8.9-.3 11.8-.1.9-.2 1.6-.4 2.4.9.3 1.7.4 2.6.1v-.2c.2-.9 1-2.6 1.2-3.7.9-4.6 1.2-9.7-.7-13.8-1.2-2.5-1.2-3.1-2.3-4.7-.2-.4-.5-.8-.9-1.3Z" class="cls-5"/><path d="M89.5 301.9c-.1.9-.2 1.8.2 2.6.6 1.1 2 1.5 3.3 1.8 10.5 2.8 18.8 5.5 29.7 6.6 3.6.4 7.4.5 10.5-1.1s5.1-5.5 3.3-8.3c-.9-1.3-2.4-2.2-3.8-3-8.4-4.5-14.4-9-22.8-13.5h-.1c-.9-.9-1.8-1-2.8-.5-.2.1-.5.3-.7.4-1.2.9-1.9 2.3-2.6 3.6s-1.5 2.7-2.9 3.4c-2.4 1.2-5.7-.2-6.6-2.5l-.5-.3v-.2h-.9c-1.5 3.5-2.6 7.3-3.2 11.1Z" class="cls-8"/><path d="M93.6 279.3c.2 3.6.2 7.3 0 11.5v.2l.5.3c1 2.3 4.3 3.8 6.6 2.5 1.4-.7 2.2-2.1 2.9-3.4s1.4-2.7 2.6-3.6c.2-.2.5-.3.7-.4h-.8c.3-2.7.5-5.3.7-7.8h-.5c-4 2.6-8.3 2.5-12.7.6Z" class="cls-10"/><path d="M108.2 156v1.9c.7 4.5 4.9 8.6 9.3 7.6 4.3-1 6.5-6 6.6-10.4 0-2-.3-4.1-1.4-5.8s-3.2-2.9-5.2-2.5c-2.2.4-4 1-5.3 1.7-2.9 1.6-3.9 4.1-4.2 7.6Z" class="cls-9"/><path d="M76.2 86.8c0 1.1.2 1.3.4 2.3" class="cls-1"/><path d="M76.4 85.3v.3c0 .5-.1.9-.1 1.2m-29.7 28.7h-.1l-.3.1m43.9-25.8-.1.1m.3 15c.3 5.1 0 8.9-.3 11.8-.1.9-.2 1.6-.4 2.4-.3 1.5-.6 2.6-.9 3.6-.4 1.3-.8 2.3-1.1 3.3-1.2 4.1-1.8 11.5-1.3 21 .4 6.6 1.4 14.2 3.3 22.5" class="cls-2"/><path d="M46.2 115.6q0-.6.3 0s0 .1.1.2c.3.5.8 1.6 1.2 2.7.7 1.7 1.3 3.6 1.3 4.5.4 4.6 1.1 10.8.9 14.7-.1 2 0 2.7-.3 4.3" class="cls-2"/><path d="M87.7 93.4c0-.1-.2-.2-.3-.3" class="cls-1"/><path d="M90.3 104.9c-.2-3.2-.8-8.9-2.6-11.4m-44.8-2.1c-.2 0-.5.2-.7.3m4.4 23.8c11.6-12.3 4.3-27-3.7-24.1m16-5.3c.6 4.7 2.7 10 6.1 13.3 4.1 4.1 7.5 6.8 9.6 8.1 3.7-2 5.9-13.6 3.7-19.9 0-.2-.1-.3-.2-.5" class="cls-2"/><path d="M58.9 85.9v.2" class="cls-1"/><path d="M58.8 85.8v.1m.4 1.6c0-.3-.3-1.1-.3-1.5m-.1.1c-3 .6-10 2.9-14.1 4.5-.7.3-1.3.5-1.8.8l-1.2.6" class="cls-2"/><path d="M72.5 160.8h-.1m-13.3-10.4v.2m-17.5-17.3s0 0 0 0m4.6-17.5v.1c-.4.8-.8 2.2-1.2 3.9-1.3 4.9-2.7 12.2-3.3 13.5" class="cls-1"/><path d="M41.4 92.2c-4.5 4.1-8.2 8.7-10.2 14.4-.5 1.3-.8 2.7-.3 3.9.3.8 1 1.3 1.7 1.8.3.2.7.4 1 .6 2 1.1 4 2.3 6.2 2.9 2.1.6 4.4.7 6.4 0 .1 0 .2 0 .4-.1m8.6 44.5c-2.1-1.8-4.9-3.9-7.7-5.9-1.9-1.4-3.8-2.8-5.4-3.8C37 147 27 138.7 28 132.4c.4-2.3 1.5-8.7 3.7-16.3" class="cls-1"/><path d="M49.7 142c-1-1.4-1.8-2.7-2.6-3.6-2.6-3-3.7-3.9-5.5-5.2h0c-.9-.7-2-1.4-3.5-2.6" class="cls-1"/><path d="M49.7 142.1v-.1" class="cls-2"/><path d="M59.8 150.7H59c-3.9-.7-6.9-5-9.3-8.5m18 9.7c.6.4 1.7 1 2.7 1.6 2.5 1.5 4.9 3.5 1.2 5.9 1.5 1.9.5 3.8-.6 4.4 1.7 1.3 0 3.3-1 3.6 1.6 4.4-6.5 2.1-8.3 1.1-2.5-1.5-6.8-4.9-6.6-8.3" class="cls-1"/><path d="M59.1 150.4c3.6 0 10.6-2.7 11.4 3.1q0 0 0 0m16.3-6.6c2.4 1.5 4.9 2.8 6.7 3.6 4.1 1.9 10.4 4.9 14.5 7.3m4.4-9.4c-5.8.7-12.5-7.7-16.1-10.5-2.9-2.2-4-2.7-6.3-4.2" class="cls-1"/><path d="m76.2 86.8 2.1.9c3.7 1.6 6.9 3.4 9.4 5.8q1.05.9 1.8 2.1c.4.5.7.9.9 1.3 1.1 1.6 1.2 2.2 2.3 4.7 1.9 4.1 1.6 9.2.7 13.8-.2 1.1-1 2.8-1.2 3.7v.2l-.6 3.6c-.5 3.7-.8 7.1-1.6 11m27.7 12.8c-2.2.4-4 1-5.3 1.7h0c-2.9 1.6-3.9 4.1-4.2 7.6v1.9c.7 4.5 4.9 8.6 9.3 7.6 4.3-1 6.5-6 6.6-10.4 0-2-.3-4.1-1.4-5.8s-3.2-2.9-5.2-2.5m-27-91.9c.7.6 1.9 2.6 1.7 2.7-.1 0-1.2-1-2.1-1.7-1.7-1.2-3.3-.3-3.9-.5-.7-.2.1-1.1 1.6-1.5 1.1-.3 2.2.4 2.7.9Zm-17-6.3c-1.3 0-4.8 1.2-4.7 1.4 0 .1 2.5-.5 4.1-.3 2.8.3 3.7 2.2 4.5 2.5.9.4.8-.9-.4-2.2-.9-1-2.7-1.3-3.6-1.3Z" class="cls-1"/><path d="M94 53.3v.5c-.3 3-1 3.8-2.1 7.3 0 0-.4 7-2.8 11.9-1.8 3.8-6.9 10.9-12.7 12.5-.7.2-1.4.3-2.2.3-3 0-7.1-2.1-10.7-6" class="cls-1"/><path d="M83.1 67.1c.7.8-.2 7.1-5.5 3.2m8.6-7.7c-.3 1.5 0 2.9.8 3.1s1.6-.9 2-2.4c.3-1.5 0-2.9-.8-3.1s-1.6.9-2 2.4m-14.7-4.3c-.3 1.5 0 2.8.8 3s1.7-.8 2-2.3 0-2.8-.8-3-1.7.8-2 2.3m10.4 18.1c-2.7 0-6.6-1.7-12.1-4.9" class="cls-1"/><path d="M81.9 76.4c-4 7.4-13.4-1.3-12.1-4.9M55 60.7c0 5.1 1.5 10.3 4.8 15 1.1 1.5 2.3 2.9 3.7 4.3" class="cls-1"/><path d="M57.7 51.8c-.4-.8-1.2-1.4-2.1-1.5s-1.8.3-2.3 1c-.8 1-.9 2.4-.8 3.8 0 1.5.3 3.1 1 4.4.3.6.8 1.1 1.4 1.4.7.4 1.5.6 2.2.3m37.1-6.5c0-.3-.1-.5-.2-.8-.5-1.8-1-3.6-1.6-5.3-.6-1.6-1.2-4.1-2.4-5.4-1.9-2-6.4-4.1-9.2-3.8-1.3.1-2.5.7-3.6 1.2-6.7 3.2-13.1 6.9-19.1 11.1" class="cls-1"/><path d="M88.9 33.5c-6-5-15.9-6.6-23.9-4.5q-3.15.75-5.7 2.4c-7 4.4-8.5 11.4-11 18.7-1.3 3.8-1.2 8.2-1.4 12.3 0 .6 0 1.2-.1 1.8-.5 5.1-1 10.2-1.7 15.4-.5 3.7-1 7.3-1.6 11m45.4-57.1c5.8 4.1 7.1 8.9 7.3 13.6 0 1.4.1 2.7 0 4-.6 15.3-4 30.4-5.9 45.6M62.6 227.5c.7-2.8 1.2-4.8 2-7.9v-.1m-17.1-65.1c-3.3 7.3-6.5 19.9-6.7 27.9-.2 8.2-1.9 22.5-1.8 33.9m23.6 11.3c-2.7 10.8-4.8 11.9-9.5 22.7-3.7 8.4-7.3 19.8-11.5 29.2-1.4 3.2-2.9 6.1-4.5 8.6m4.7-71.2v.1c.4 4.5.7 10.4-.6 14.4-1.3 3.9-3.3 8.1-5.1 11.7-3.9 7.6-5.6 20.1-8.1 32-1 4.7-2.1 9.2-3.6 13.4m83.5-73.1c0-2-.8-5.6-2.1-10-3.3-11-10-27-16.1-35.6m-7.4 48.6c2.3 3.9 3.8 6.4 4.5 8.7m.1-.1s1.2 3.6.8 7c-.5 4.1.5 12.7 1.3 16.6 2.4 10.8 4.1 19.1 4.6 28.7.2 3.6.2 7.3 0 11.5v.2m14.3-75.6c.3 23.1.8 41.4-1.1 63.3-.2 2.5-.5 5.1-.7 7.7" class="cls-1"/><path d="M105.7 205.4c-6.1 7-14.4 11-23.3 12.9-2.3.5-4.5.8-6.9 1.1-3.5.3-7.1.4-10.8.2-7.6-.3-15.6-1.5-22.9-2.7-1-.2-1.9-.3-2.8-.4h-.1m-6.4-104c-.9 0-1.2 3.1-.7 3.5 1 .8 2.7 1.9 3.9 2.3 2.9.9 5.9 1.4 8.9 1.4m45.1-.7c.9.3 1.7.3 2.6.1h.1m-3.7 3.6c1.1.4 1.8.3 2.9 0h.2M59.6 75.8c.5 3.4.2 6.9-.7 10.1h0v.1M48 118.4c16.9-6 37.1-5.8 41.9-1.8m4.3 174.7c1 2.3 4.3 3.8 6.6 2.5 1.4-.7 2.2-2.1 2.9-3.4s1.4-2.7 2.6-3.6c.2-.2.5-.3.7-.4 1-.5 1.9-.4 2.8.4" class="cls-1"/><path d="M92.7 290.8c-1.5 3.6-2.6 7.3-3.2 11.1-.1.9-.2 1.8.2 2.6.6 1.1 2 1.5 3.3 1.8 10.5 2.8 18.8 5.5 29.7 6.6 3.6.4 7.4.5 10.5-1.1s5.1-5.5 3.3-8.3c-.9-1.3-2.4-2.2-3.8-3-8.4-4.5-14.4-9-22.8-13.5M25 289.4c.3 2.5 8.3 2.7 9.4 1.6 1-1.1 2.1-2.3 3.5-2.8.3-.1.5-.2.7-.2 1.1-.2 2 0 2.6 1.1" class="cls-1"/><path d="M23.8 288.5c-2.5 3-4.6 6.4-6.2 9.9-.4.8-.7 1.7-.5 2.6.3 1.2 1.5 2 2.6 2.6 9.3 5.4 14.9 7.2 25 11 3.3 1.3 6.9 2.4 10.4 1.6 3.5-.7 6.5-4 5.5-7.2-.5-1.5-1.7-2.7-2.8-3.8-6.8-6.5-9.7-9.4-16.5-16M28.1 275c3.6 3.2 8.6 4.9 13.4 4.3m52.1 0c4.4 1.9 8.7 2 12.7-.7" class="cls-1"/><path d="M65 28.9c-1.9-1.9-5.1-2.3-7.6-1.3S53 30.9 52 33.4c-.7 1.8-1 3.8-1.8 5.6-.7 1.7-1.7 3.2-2.3 4.9s-10.5 16.8-1.1 18.4" class="cls-2"/></svg>')}`;
export default image;