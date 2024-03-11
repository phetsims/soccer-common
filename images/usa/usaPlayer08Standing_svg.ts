/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-9{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#727a99}.cls-3{fill:#604940}.cls-4{fill:#191918}.cls-5{fill:#404a61}.cls-6{fill:#65282a}.cls-9{fill:none}</style></defs><path d="M101.8 292.2c-.6.3-1.2.6-1.9.8-.2 0-.5.2-.7.2-6.1 2-15.2 2.1-24 .9-.9-.1-1.8-.2-2.7-.4 0-2.3-3.8-52-5.7-66.5-1.8-14-3.8-32-4-35.6h0c.5-3.5 1-6.2 1.4-7.4h2.3c6.4-.4 19.1-2.8 21.6-3.9.2 3.9.6 5.3 1.2 10.8 1.1 9.5 10.7 91.7 12.3 101Z" class="cls-5"/><path d="M64.4 184.3c-.4 1.3-.9 3.9-1.4 7.4h0c-1.4 9.4-2.9 25.1-4.1 37.4-1.4 15.9-2.7 63.2-2.7 64.1-.6.1-1.2.3-1.9.4q0 0 0 0t0 0c-7.2 1.1-20.4-.3-25-2.6-.7-.3-1.2-.7-1.4-1.1.5-.1 4.7-49.1 5.9-68.3.8-13.2 1.5-31 2.8-43.4h.2c1.6 3.3 23.3 5.8 27.6 6Z" class="cls-5"/><path d="M69.4 137.1c-1-4.9-1-9.9-.9-14.9v-4.7h0c0-2.4-9.8-8.6-20.3-17.6-5.4-4.6-13.5-14.3-14-17.3v-.1h-.9c-3 2.8-4.8 8.2-6.7 11.8-1.4 2.6-5.9 20.4-5.9 20.4-2.6 6.7-2.5 9-3.5 14.3-1.2 6.3 8.3 15.1 13.4 18.7 2.3 1.8 5.3 4 8.2 6 1.2-4.4 4-8.3 7.8-10.8 1.5 1.4 3.1 2.9 4.6 4.7-2.6 3.1-5.1 7.5-5.8 10.8-1.8-1.3-4.2-3-6.7-4.7h0c.2 7.6-.2 12.3-.3 14.1 8.9 3.4 19.5 5.1 29.8 4.7.2-.7.5-1.3.8-2 4.3-9.4 2.5-22.5.4-33.2Zm-35.6-6.6c.9-2 1.7-4.9 2.8-8.6h.2c.3.8.6 5.8.9 12.4-1.6-1.8-2.7-3-3.8-3.8Z" class="cls-2"/><path d="M107.4 139.7c-3.2 5-6.6 9.5-10.4 13.8h-.2c-1.5-4.5-4.3-8.3-7.9-11.1 1-1.4 1.9-2.8 2.4-3.4 1.8-2.3 3-4.3 4.3-6-.8-1.3-3.6-9.8-5.5-12.8-.2 2.2-.4 4.7-.5 7.6-.1 4.2-.8 7.8-.8 14.3 0 0 .2.1.2.2-1.6 2.4-3.4 5.1-3.9 6.1 2.8 2.8 5.9 7.2 6.4 10.8.3 2.9-3.4 6.8-3.4 9.3-6.1 2.2-13 3.5-20 3.7.2-.7.5-1.3.8-2 4.3-9.4 2.5-22.5.4-33.2-1-4.9-1-9.9-.9-14.9h.1c1.2-.3 2.4-.7 3.6-1-1.1-1.5-2.4-3.6-3.5-5.2 4.7-7.8 9.8-15.4 15.5-22.5 1.8-2.3 3.6-4.5 4.9-7.1.3-.7.6-1.1.8-1.4h1c3.4 1.2 5.6 7 7.6 10.3 3.4 5.5 6.9 17.2 8.1 21.5 1.4 4.3 2.4 8.8 3 12.3.7 4.2-.6 7.7-2.2 10.6Zm-39-22.2c0-2.4-9.8-8.6-20.3-17.6-5.4-4.6-13.5-14.3-14-17.3v-.1c-.4-2.9 1.2-4 3.6-5.9s12.1-4.1 15.1-3.1q1.05 1.2 2.1 2.1c0 2.5.3 8.9 0 9.8h-.1v-.5c-6.2 8.6 6.8 18.4 9.4 21.7.9 1.1 2.9 4.1 3.7 6.2h0c.3.6.4 1.2.5 1.6z" class="cls-2"/><path d="M89.9 85c-.2.3-.4.7-.8 1.4-1.3 2.6-3.1 4.9-4.9 7.1-5.6 7.2-10.8 14.7-15.5 22.5-.1.1-.2.3-.3.5v-2.1c0-.4-.2-1-.5-1.6h0c3.7-6.5 12.6-20.6 6.9-27.2h-.1c0-1.5.2-3.1.6-4.6l-.7-.2c.1 0 .3-.2.4-.3 2-1.3 3.6-3.4 5.1-5.8l.7.4c2.9.4 8.5 4.2 9.2 7 .5 2.1.6 1.9 0 2.7Z" class="cls-2"/><path d="M87.6 38.5c.6-3.8-2.6-6.4-6.2-7.9s-7.5-1.3-11.4-1.1c-2.9.2-5.8.3-8.7.5-3.1.1-6.2.3-8.9 1.8s-6.1 4.1-5.2 7c-.3 2.3 1 17.5.1 17.8s-2.2-1.6-2-3.2c0-3.6-2.9-5.1-5.9-3.9-4.3 1.5-.1 8.8 1 11.8 1 2.6 2.3 3.1 3.5 2.8h.8c2.8 3.5 5.4 6.7 7.9 9.4q1.05 1.2 2.1 2.1c4.9 4.8 9.8 7.4 15.7 6.7 1.4-.2 2.7-.7 3.9-1.4.1 0 .3-.2.4-.3 2-1.3 3.6-3.4 5.1-5.8 1.8-3 3.2-6.6 4.4-10.2.9-2.8 1.7-5.6 2.3-7.9h0l.5-2.4c1-4.3 1.2-11.4.5-15.8Zm-30 17.7c-.9 0-1.6-1.5-1.6-3.4s.7-3.4 1.6-3.4 1.6 1.5 1.6 3.4-.7 3.4-1.6 3.4m3.4-9.5s0 0 0 0c-2.4-.6-5.9-.5-7.2-.1-.4-2.1 1-1.7 1.7-2.2 1.6-1.2 4.9 0 6.4 1.1-.3 1.1-.1 1.7-.9 1.3Zm9.7 27.5c-1.6.2-4.2-.4-5.8-1.5-1.5-1-1.5-.4-3.4-3.2.9.9 9.8 3.1 14.2 1.1-1.1 2.1-2.4 3.3-5 3.7Zm8.6-18.8c-.7 0-1.3-1.3-1.3-2.9s.6-2.9 1.3-2.9 1.3 1.3 1.3 2.9-.6 2.9-1.3 2.9m3.3-8.9c-2.8-.8-5.5 0-7.8.4-.8-1.5 1.7-2.5 4.4-2.5 2.8 0 3 .6 3.5 2h0ZM89 62.2c-.2.8-.5 1.5-1 2.1-.5.5-2.8 1-3.3.5h-.4c.9-2.9 1.7-5.7 2.3-8.1-.2.7-.4 1.8-.7 3.2 1.3.5 2.5-4.4 3.3-9.6h.9c.3 4 0 8.1-1.1 11.9" class="cls-3"/><path d="M74.8 47h-.2m-13.3-.2H61m15.6 14.6c.9 3.2-3 5.5-10.6 3.9m-21-1.6-.3.2c-.2.1-.4.2-.7.3" class="cls-9"/><path d="M90.2 39.4c0 2.1-.4 6.6-1 10.9-.8 5.3-2 10.2-3.3 9.6.3-1.4.5-2.5.7-3.2h0l.5-2.4c1-4.3 1.2-11.4.5-15.8.6-3.8-2.6-6.4-6.2-7.9s-7.5-1.3-11.4-1.1c-2.9.2-5.8.3-8.7.5-3.1.1-6.2.3-8.9 1.8s-6.1 4.1-5.2 7c-.3 2.3 1 17.5.1 17.8s-2.2-1.6-2-3.2c0-3.6-2.9-5.1-5.9-3.9-3.6-11.1-1.2-24.4 1-29.4 3.3-7.7 44.8-10.6 47.5-3 3.1 8.4 2 16.6 2.2 22.3Z" class="cls-4"/><path d="M74.8 47s0 0 0 0m-35.1 64.4c-1.3 4-2.3 7.6-3.1 10.5m-2.8 8.6s0 0 0 0" class="cls-9"/><path d="M51 147.5c-2.6 3.1-5.1 7.5-5.8 10.8-1.8-1.3-4.2-3-6.7-4.7 1.2-4.4 4-8.3 7.8-10.8 1.5 1.4 3.1 2.9 4.6 4.7Zm37.3 32.9c-2.5 1.1-15.2 3.5-21.6 3.9v-.3c-.5-4.2 0-7.8 1.4-11.6 7-.2 13.9-1.5 20-3.7 0 5 .3 9.1.2 11.7" class="cls-2"/><path d="M91.4 104c.4 5.6-.6 9.7-1.3 16.4m5.5 12.8s0 0 0 0m-10.5 15.4c-.1.2-.2.4-.1.4m14.4-20.1c-1.5 1.2-2.6 2.6-3.8 4.2m-61.8-2.6c-1.3-1-2.8-1.6-5.4-2.5m9.2 6.4c.2.2.4.5.7.8 2 2.4 5 4.8 8.1 7.7m4.7 4.7s0 0 0 0M63 191.7v-.3" class="cls-9"/><path d="M66.7 183.9v.3h-2.3c-4.3-.2-26-2.8-27.6-6h-.2c.5-4.4 1-8.1 1.7-10.6 8.9 3.4 19.5 5.1 29.8 4.7-1.4 3.7-1.9 7.4-1.4 11.6" class="cls-2"/><path d="M54.7 307.4c-1.4 1.7-20.7 1-26.1.9-1.7 0-5.9-3.8-5.3-9.9.3-3.4 3.3-5.7 5.9-7.3 4.6 2.3 17.8 3.7 25 2.6q0 0 0 0t0 0l.2 1.2c1.1 3 1.7 10.7.2 12.6Z" class="cls-6"/><path d="M54.6 294.8c0-.2-.2-.5-.3-.7m-24.8-3.2s-.2 0-.3.1" class="cls-9"/><path d="M104.5 308.5c-.4.2-27.2 1.1-28.7 0-2-1.5-1.5-11.4-.5-14.3 8.8 1.1 17.8 1.1 24-.9h.8c2.7 1.6 5.4 3.6 6.3 5.8.7 1.7-.4 8.6-1.9 9.4" class="cls-6"/><path d="M75.4 293.9s0 .2-.1.3M53 145.3c-.7.6-1.3 1.4-2 2.2" class="cls-9"/><path d="M97 153.5c-1.7 2-3.6 3.9-5.5 5.8-.5-3.6-3.6-8-6.4-10.8.5-1 2.3-3.8 3.9-6.1 3.6 2.8 6.4 6.6 7.9 10.9h.2Z" class="cls-2"/><path d="M85.1 148.6q-1.05-1.05-2.1-1.8m4.1-92.3c-.2.7-.3 1.4-.5 2.2" class="cls-9"/><path d="M75.7 70.5c-1.1 2.1-2.4 3.3-5 3.7-1.6.2-4.2-.4-5.8-1.5-1.5-1-1.5-.4-3.4-3.2.9.9 9.8 3.1 14.2 1.1Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M59.2 52.8c0 1.9-.7 3.4-1.6 3.4S56 54.7 56 52.8s.7-3.4 1.6-3.4 1.6 1.5 1.6 3.4m21.4-.3c0 1.6-.6 2.9-1.3 2.9S78 54.1 78 52.5s.6-2.9 1.3-2.9 1.3 1.3 1.3 2.9" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M82.6 46.5c-2.8-.7-5.5 0-7.8.5-.8-1.5 1.7-2.5 4.4-2.5 2.8 0 3 .6 3.5 2Zm-20.7-1c-.3 1.1-.1 1.7-.9 1.3q0 0 0 0c-2.4-.6-5.9-.5-7.2-.1-.4-2.1 1-1.7 1.7-2.2 1.6-1.2 4.9 0 6.4 1.1Z" class="cls-4"/><path d="M68.4 117.5v.4M52.9 73.5h-.1" class="cls-9"/><path d="M67.9 112.8c-.9-2.1-2.8-5.1-3.7-6.2-2.6-3.3-15.6-13.1-9.4-21.7v.5c.2 3 4.5 6.6 9 7.5 5.3 1 9.6-2 10.9-5.8v-1.4h.1c5.7 6.6-3.2 20.6-6.9 27.2Z" style="fill:#783b3e;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M68.4 116.5s0 .1-.1.2" class="cls-9"/><path d="M75.2 81c-.4 1.5-.5 3.1-.6 4.6V87c-1.3 3.9-5.6 6.8-10.9 5.8-4.5-.9-8.8-4.4-9-7.5h.1c.3-.9 0-7.3 0-9.8 4.9 4.8 9.8 7.4 15.7 6.7 1.4-.2 2.7-.7 3.9-1.4l.7.2Z" class="cls-3"/><path d="M46.6 142.8h-.1" class="cls-9"/><path d="M72.2 121.2c-1.2.3-2.4.6-3.6 1h-.1v-5.7c0-.1.2-.3.3-.5 1.1 1.6 2.4 3.7 3.5 5.2Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#c1c1c1"/><path d="m68.7 116-.1-.1m-23.3 42.4c0 5.2 3.6 9.4 5.8 10.5m37.6-2.4c-2.9 1.4-6.2 2.1-9.4 2l.2.2" class="cls-9"/></svg>')}`;
export default image;