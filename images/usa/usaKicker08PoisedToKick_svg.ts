/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-2,.cls-3,.cls-4,.cls-9{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#727a99}.cls-3{fill:#604940}.cls-4{fill:#191918}.cls-9{fill:none}</style></defs><path d="M113.4 285.6c-7.3 7.6-11.2 12.7-22.6 7.7h0l-1.2-.6c-.3-1-2.5-60.2-2.9-61.3-3.9-12.3-16-26.2-19.6-31.4-2.6 12-5 26.4-8.1 37.6-.5 1.8-23.2 45.7-23.7 47.3-7.5 5.4-13.2 7.5-21.4 2.9-.9-.5-1.8-1.1-2.7-1.7 0-1.5 26-55.6 26-57.1.6-18-5.5-41.7 1-61.4v-.2c13.5 4.1 24.2 6.7 36.8 6.8 3.9 0 8-.1 12.5-.6 6.9 10.2 20 37.5 22.1 49.7.3 1.4 4 61.3 3.9 62.3Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#404a61"/><path d="M42.2 140.1c-1.6-2.3-3-4.6-4.3-6-1.9-2.2-3.4-3.6-5-4.7h0c1-1.9 0 0 1-2.1 1.6-2.2 4.1-7.4 7-13.1 1.1 7.6 1.7 14.2 1.2 25.9Zm36.3-28.8c-.5.6-1 .8-1.4.4-1.7-1.5-12.5-11.8-15.4-14.2C55.1 92 50 86.7 43.2 85.4c-1.7-.3-3.4-.5-4.9-1.2-.5-.2-.9-.5-1.3-.8h0c-5.8 2.7-20.8 43.7-20.5 44.8-1.4 7.1 6.9 16.6 12.5 20.2 2.2 1.4 5.2 3.9 8.1 6.5 1.8-1.6 2.6-4 3.2-6.3.8-2.5 1.5-5 2.3-7.5h.2c1.8 2.3 3.9 4.5 6.5 5.4.5.2 1 .3 1.6.4v-.2c4.1 0 12.2-3.5 12.8 2.9 2.7 1.5 5.4 3.7 1.1 6.5 1.6 2 .4 4.2-.9 5 .5.3.7.7.8 1.2h.1c3.7.7 7.5 1.1 11.3 1.3 1.7-15.6 2.6-29.4 2.5-45.3h0c0-2.3 0-4.6-.1-7" class="cls-2"/><path d="M93.9 36.5c-3-1.5-14.1-5.3-17.5-4.2-3.2 1.4-6.2 1.5-7.1 6.1s-4.6 16.5-4.8 16.1c-1.6-2.2-.9-5.3-2.1-7.8-.7-1.5-4.5-3.4-6.6-2-1.2.8-2.2 4.6-2.1 6.3s1.4 6.2 2.8 6.8c-.3 2.9.7 3.7.9 4.7 0 .3.2.6.2.9 1.2 4.2 3 6.4 6 9.4 3.7 3.6 9.2 10 14.7 11.2.7.2 1.5.2 2.2.2 1.9-.1 3.7-1 5.3-2.1 3.7-2.5 6.3-6.4 6.3-6.4 4.3-7.1 6.4-13.7 6.4-15.9s2-5.4 3.5-9.3q0 0 0 0c.9-2.3 1.6-4.8 1.6-7.2.5-3.4-6.8-5.2-9.8-6.8Zm-10.1 9.2c2.7.8.9 3.1.3 2.9-1.9-.5-8.7-1.1-8.7-1.4.3-3.3 5.6-2.4 8.4-1.5m-3.4 10.4c-.3 1.5-1.2 2.6-2 2.4s-1.2-1.6-.9-3.1 1.2-2.6 2-2.4 1.2 1.6.9 3.1m-3 11.9c4 3.2 6.2 4.4 10.7 5-2.5 8.4-12.2 1.4-10.7-5m17.9-7.8c-.3 1.6-1.2 2.7-2 2.5s-1.1-1.6-.8-3.2 1.2-2.7 2-2.5 1.1 1.6.8 3.2m1.7-5.3c-.5-.2-3.3-1.5-3.8-1.8-1.4-.8-.2-2.9.9-3 1.2-.2 4.5 2.9 4.4 3.7 0 .8-.9 1.5-1.5 1.2Z" class="cls-3"/><path d="M88.1 72.9c-2.5 8.4-12.2 1.4-10.7-5 4 3.2 6.2 4.4 10.7 5" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M90.2 66.1c.8 4.1-5.3 2.2-8.3.9" class="cls-9"/><path d="M95.3 60.2c-.3 1.6-1.2 2.7-2 2.5s-1.1-1.6-.8-3.2 1.2-2.7 2-2.5 1.1 1.6.8 3.2m-14.9-4.1c-.3 1.5-1.2 2.6-2 2.4s-1.2-1.6-.9-3.1 1.2-2.6 2-2.4 1.2 1.6.9 3.1" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M78.2 84.8s.2 1.3-.4 2.2c-1.5 2.2-2.8 4.4-7.4 4.2-2.6 0-10.1-4.8-14.1-12.3 1.1-.7 1.9-3.4 2.2-6.7.2-2.7 0-5.9-.7-8.7 1.2 4.2 3 6.4 6 9.4 3.7 3.6 9.2 10 14.7 11.2l-.2.7Z" class="cls-3"/><path d="M41 114.2c1.9-3.7 3.9-7.7 6-11.2" class="cls-9"/><path d="M88.8 163.2c-.4 3.3-.8 6.8-1.4 10.5-4.4.4-8.5.6-12.5.6v-.2c.4-3.6.8-7 1.2-10.4 4.2.2 8.5 0 12.6-.5Z" class="cls-2"/><path d="M114.8 139.2c-4 2.8-7.2 6.8-8.9 11.3h0c-5.1-4-11.3-9.4-15.5-21.2h-.2c0 11.2 0 21.2-1.4 33.8-4.2.5-8.4.6-12.6.5 1.7-15.6 2.6-29.4 2.5-45.3.9 0 2.1-.3 2.4-1.2.2-.5 0-1.1-.1-1.6-.5-1.6-1.2-3.5-1.8-5h0c2.4-3.7 5.4-13.9 6.6-17.6.5-1.5 1.5-5.3 1.8-6.8 2 .6 2.9.6 5.5 3.9 5 6.4 7.4 25.1 8.8 32.7 4.2 3.9 9 11 12.8 16.5h0Z" class="cls-2"/><path d="M90 107.2c0 8.4.1 15.5.2 22.2m-14.1 34.2c-.4 3.4-.8 6.8-1.2 10.4v.2c-12.5-.1-23.3-2.7-36.7-6.8-.4 0-.7-.2-1.1-.3 1.9-5.7 1-3.4 2.7-9.8q2.4 2.1 4.2 3.6c.7-.8 1.3-1.5 1.9-2.4 0 3.6 4.4 7 7.1 8.4 2 1.1 11.2 3.2 9.5-1.6.9-.3 2.2-1.7 2.1-3h.1c3.7.7 7.5 1.1 11.3 1.3Zm43.5-18c-3 .7-.6-.2-3.1 1.7-1.9 1.4-4.6 4.5-5.5 7.3h-.4c-1.4-1.4-3-2.6-4.8-3.9h0c1.7-4.6 4.9-8.6 8.9-11.4 2 2.8 3.6 5.1 4.8 6.4Z" class="cls-2"/><path d="M121.3 162.8c-2.8 2.1-4.5 3-7.4 1-1.4-1-2.7-5.1-3.1-6.8-.2-.7-.1-1.6.2-2.5.9-2.8 3.6-5.9 5.5-7.3 2.5-1.8 0-1 3.1-1.7 3.3-1 7.3.9 8.7 4.1s-4.1 10.9-6.9 13Z" class="cls-3"/><path d="M71.4 184c-1.6 4.1-2.9 9.7-4.3 16m0 0-.6-.9" class="cls-9"/><path d="M133.6 311.8c-3.4 1.8-7.4 1.7-11.2 1.3-11.6-1.2-18.4-3.9-29.7-7-1.3-.4-2.8-.9-3.5-2.1-.5-.9-.4-2-.2-3 .4-2.9 1-4.9 1.8-7.7 11.4 5 15.3-.1 22.6-7.7 7.7 4.7 11.3 8.5 19.6 13.3 1.5.9 3.2 1.9 4.1 3.4 2 3.2-.2 7.7-3.5 9.6Zm-80.5 6.9c-3.7.8-6.5.9-10.1-.6-10.8-4.4-20.9-10.6-30.9-16.8-1.2-.7-2.5-1.6-2.8-3-.2-1 .2-2 .6-2.9 1.7-4 2.2-5.2 3.9-7.7 8.2 4.6 13.9 2.5 21.4-2.9h0c7.2 7.6 13.4 13.7 20.6 21.2 1.3 1.3 2.6 2.7 3 4.4 1 3.7-2.2 7.4-5.9 8.2Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#65282a"/><path d="M13.9 287.7v.1M59.9 58c-1.2.9-2.1.6-3.4 0" class="cls-9"/><path d="M103.7 43.3c.5-3.4-6.8-5.2-9.8-6.8-3-1.5-14.1-5.3-17.5-4.2-3.2 1.4-6.2 1.5-7.1 6.1s-4.6 16.5-4.8 16.1c-1.6-2.2-.9-5.3-2.1-7.8-.7-1.5-4.5-3.4-6.6-2-1.2.8-2.2 4.6-2.1 6.3s1.4 6.2 2.8 6.8c-.3 2.9.7 3.7.9 4.7-7.3-14.3-4.7-23.7-1.9-34.2 2-7.4 5.8-11.1 7.4-12 11.2-6.7 38.2 4.7 44.1 11 2.6 7.9-1.7 16.3-5 23.2.9-2.3 1.6-4.8 1.6-7.2Z" class="cls-4"/><path d="M102 50.6c-.2.4-.4.9-.6 1.3" class="cls-9"/><path d="M49.3 146.6c0 4.3-1 8.4-3.3 11.9h0c-.6.8-1.2 1.6-1.9 2.4q-1.8-1.5-4.2-3.6l-2.7-2.4c1.8-1.6 2.6-4 3.2-6.3.8-2.5 1.5-5 2.3-7.5h.2c1.8 2.3 3.9 4.5 6.5 5.4Z" class="cls-2"/><path d="M32.9 129.4c-1.9-1.3-4-2-7.3-2.6M42.9 141c-.2-.3-.5-.6-.7-.9m9.6 7H51M46 158v.5m17.7-8.8c-1.2-.7-2.4-1.2-3.1-1.7m3.2 1.8s0 0 0 0" class="cls-9"/><path d="M84 48.6c-1.9-.5-8.7-1.1-8.7-1.4.3-3.3 5.6-2.4 8.4-1.5 2.7.8.9 3.1.3 2.9m14.6 5.2c0 .8-.9 1.5-1.5 1.2-.5-.2-3.3-1.5-3.8-1.8-1.4-.8-.2-2.9.9-3 1.2-.2 4.5 2.9 4.4 3.7Z" class="cls-4"/><path d="M64.9 156.2c1.6 2 .4 4.2-.9 5 .5.3.7.7.8 1.2.1 1.2-1.2 2.6-2.1 3 1.7 4.9-7.5 2.7-9.5 1.6-2.7-1.4-7.1-4.8-7.1-8.4h0c2.4-3.5 3.4-7.6 3.3-11.9.5.2 1 .3 1.6.4v-.2c4.1 0 12.2-3.5 12.8 2.9 2.7 1.5 5.4 3.7 1.1 6.5Z" class="cls-3"/><path d="M78.5 111.1c-3-4.8-8.3-12.7-12.5-16.5s-10.4-9.7-9.8-15.8c4 7.5 11.5 12.2 14.1 12.3 4.6.1 5.9-2 7.4-4.2.6-.8.4-2.2.4-2.2 2 7.1 2.5 19.3.4 26.3Z" style="fill:#783b3e;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M87.6 86.1c-.3 1.6-1.3 5.3-1.8 6.8-1.2 3.7-4.2 13.9-6.6 17.6-.2.3-.4.6-.6.8v-.2c2.1-7.1 1.6-19.2-.4-26.3l.2-.7c.7.2 1.5.2 2.2.2 1.9-.1 3.7-1 5.3-2.1 1.4.6 2 2.4 1.7 4Z" class="cls-2"/><path d="M85.9 82.1h-.2m-36.4 64.5v-.2m-12.1 8.5-.1.1m77.3-15.7h.3q0 0 0 0t0 0" class="cls-9"/><path d="M78.5 111.1v.2c-.5.6-1 .8-1.4.4-1.7-1.5-12.5-11.8-15.4-14.2C55.1 92 50 86.7 43.2 85.4c-1.7-.3-3.4-.5-4.9-1.2-.5-.2-.9-.5-1.3-.8-.9-.8-1.5-1.9-1.4-3.1.2-1.8 2.1-2.9 3.8-3.6 5.9-2.6 12.3-4.1 18.8-4.5h0c-.2 3.3-1 6-2.2 6.7-.6 6 5.6 12 9.8 15.8s9.5 11.7 12.5 16.5Z" class="cls-2"/><path d="M81 117.1c-.3.9-1.5 1.1-2.4 1.2h0c0-2.3 0-4.6-.1-7 .2-.2.4-.5.6-.8h0c.6 1.5 1.3 3.4 1.8 5 .2.5.3 1.1.1 1.6" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#c1c1c1"/><path d="M78.7 118.3h-.1" class="cls-9"/></svg>')}`;
export default image;