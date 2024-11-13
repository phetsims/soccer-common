/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2,.cls-3,.cls-4,.cls-5,.cls-7{stroke-width:0}.cls-3{fill:#313131}.cls-4{fill:#363d4c}.cls-5{fill:#42495a}.cls-7{fill:#876554}</style></defs><path d="M89.7 293.4c1.5 2.3 5.3 3.2 7.7 1.6 1.4-.9 2-2.4 2.6-3.9.5-1.4 1-3 2.2-4.1s2.4-1.4 3.8-.5h.1c10 3.4 15.7 9.4 25.6 12.8 1.7.6 3.5 1.2 4.7 2.5 2.5 2.6 1 6.9-2.1 9-3.2 2.1-7.4 2.5-11.3 2.7-12.1.5-19.9-3.4-32-4.6-1.4-.2-3.1-.4-3.9-1.4-.6-.7-.7-1.7-.7-2.6 0-4 .5-7.9 1.5-11.8h1.6v.4Z" class="cls-4"/><path d="M125.5 151.1c1.5 3.3-4.2 11.2-7.1 13.4s-4.6 3.1-7.6 1c-1.4-1-2.8-5.3-3.2-7-.2-.8-.1-1.6.2-2.5.9-2.8 3.7-6 5.6-7.5 2.6-1.9 0-1 3.2-1.7 3.4-1.1 7.5.9 8.9 4.2Z" class="cls-7"/><path d="M116.6 146.8c-3.1.7-.6-.2-3.2 1.7-2 1.4-4.7 4.6-5.6 7.5h-.4c-4.6-6.2-9.5-9.4-15.4-17.9h-.3c-1.5-2.5-4-4.6-5.2-8h-.6V129c2.7-4.1 7.2-6.9 12.1-7.7.1.7.2 1.3.3 1.9 6.5 6.1 14.6 19.7 18.1 23.5Z" class="cls-7"/><path d="M44.2 250.3c-7.9-1.7-10.9-4.8-18-9-.7-.4-1.5-.9-2.3-1.3 12.7-21.6 3.5-49.1 10.9-68.9 17 5 43.6 3.6 48.4.5h.4c4.8 6.2 22.1 34.3 23.3 44.2 2 17.1 2.2 24.5 2.6 29.2-1.1.3-2.2.5-3.2.8-7.5 1.9-13.4 3.7-19.9 4.3-1.8.2-3.6.3-5.5.3-1-7.7-2.5-36.5-15.9-52-4 15.9-7.6 41.9-15.9 52.8-1.9-.2-3.6-.5-5-.8Z" class="cls-5"/><path d="M106.5 245.8c-.9 8.6-2.6 30.6-4.2 41.3-1.2 1.1-1.7 2.6-2.2 4.1-.5 1.4-1.2 2.9-2.6 3.9-2.4 1.6-6.3.6-7.7-1.6v-.4c0-4.8-.3-31.4-3.1-42.7s0-.3 0-.3c6.5-.7 12.4-2.4 19.9-4.3Z" class="cls-7"/><path d="M54.7 63.2c.2 1.7.2 3.6 0 5.3h-.2c-3.3-2.4-6.7-10.6-7.9-15.2-.2-.6-.4-1.2-.7-1.8-.7-1.7-.8-7-.4-8 1.3-3.4.3-5.9 3.1-11.1 1-1.7 3.6-3.6 5.2-4.9 2.5-2.1 2.8-2.6 4.6-5.3 1.5-2.3 4.3-2.6 7-2.2 2.6.3 3-.2 5.7-.7 3.2-.6 4.7-1.6 8.3-1.9 2.7-.2 6.4 1.2 8.3 3 1.2 1.2 2.4 2.3 3.9 3.2 3.1 1.9 7.5 2.5 9.1 5.8.9 2-.4 4.5.6 6.5 1.2 2.5 2.1 6.8.9 9.4-.9 1.9-2.1 3.2-2.7 5.3-.7 2.5-1.2 4-3.2 6.1h-1.1c.7-2.7 2.4-5.7 3.2-10.8v-.2c0-1.7-.3-3-.6-4-.4-1.3-2.2-3.6-3.4-4.3-2.4-1.4-4.3-1.9-6.8-3.2-2.9-1.5-4.4-1.9-7.7-2.1-5.6-.4-10.6 1.8-13.5 6.2-.6.9-5.7 9.8-6 9.8-1.6-.2-1.4-.4-2.6-3-.7-1.5-3.9-2.4-6-.9-1.2.9-2.2 4.2-2.1 5.9s.7 5.7 2 6.4c1.2.6 2.1.9 3.1.3-.3 2.5-.3 4.9-.1 6.2Z" class="cls-3"/><path d="M54.8 56.9c-1.1.6-1.9.3-3.1-.3-1.3-.7-1.9-4.7-2-6.4s.8-5.1 2.1-5.9c2.2-1.5 5.3-.6 6 .9 1.2 2.6 1 2.8 2.6 3 .3 0 5.4-8.9 6-9.8 2.9-4.4 7.9-6.7 13.5-6.2 3.3.2 4.8.6 7.7 2.1 2.5 1.3 4.4 1.8 6.8 3.2 1.2.7 3 2.9 3.4 4.3.3 1 .7 2.3.6 4v.2c-.7 5.1-2.5 8.1-3.2 10.8q-.3 1.05-.3 2.1c0 2.3-2.1 9-6.6 16.4 0 0-3.3 4.9-7.7 7.3-1.3.8-2.8 1.3-4.3 1.4-.8 0-1.5 0-2.3-.2-5.6-1.2-11.3-7.7-15-11.5-3.3-3.3-3-3.2-4.3-8.2 0-.2 0-.4-.1-.7-.1-1.3-.1-3.7.1-6.2Zm40.1-4.6c0-.9-4.1-4.4-5.6-4.2-1.4.2-2.9 2.5-1.1 3.4.6.3 4.1 1.8 4.8 2.1.9.3 1.8-.5 1.9-1.3M91.6 59c.3-1.6 0-3.1-.8-3.3s-1.7 1-2 2.6 0 3.1.8 3.3 1.7-1 2-2.6M81.1 47.9c.7.2 2.8-2.6-.3-3.7-3.2-1.1-9.3-2.2-9.7 1.9 0 .4 7.8 1.1 10 1.7ZM73.2 67c-1.6 6.5 8.4 13.7 11 5.1-4.6-.6-6.8-1.8-11-5.1m3-12.2c.3-1.6-.1-3-.9-3.2s-1.7.9-2.1 2.5c-.3 1.6 0 3 .9 3.2.8.2 1.7-.9 2.1-2.5" class="cls-7"/><path d="M89.3 89.6c4.8 6.1 7.2 23 8.7 31.7-4.9.7-9.4 3.6-12.1 7.7.2-6.9.2-14.1.3-21.8.7-7.3-.9-14.8-4.8-20.2.4-.3.8-.7 1-1.1.2-.3.3-.7.3-1h.4c2.1.7 3.7 1.3 6.4 4.7Z" class="cls-5"/><path d="M89.3 48.1c1.6-.2 5.7 3.3 5.6 4.2S93.8 54 93 53.6c-.7-.2-4.2-1.8-4.8-2.1-1.8-.9-.3-3.3 1.1-3.4" class="cls-3"/><path d="M90.7 55.7c.8.2 1.2 1.7.8 3.3-.3 1.6-1.2 2.8-2 2.6s-1.2-1.7-.8-3.3c.3-1.6 1.2-2.8 2-2.6" class="cls-2"/><path d="M41.9 103c1.3-2 1.4-3.4 1.5-5.3s0-3.8.2-5.6c.3-1.9 1.2-3.8 2.9-4.6v-.2c9.6 2.6 14.7 6.2 21.9 12 2-4.6 5.7-8.5 10.2-10.8.9-.4 1.8-.9 2.6-1.4 4 5.3 5.5 12.8 4.8 20.2 0 7.7 0 14.8-.3 21.8v1c-.3 13.4-.9 26.2-1.7 40.5 0 .3-.3.7-.8 1-4.9 3.1-31.4 4.6-48.4-.5-.2 0-.4-.1-.6-.2.7-8.3 0-6.5.9-15.5 2 1.3 4 2.7 5.7 4.1-.4 3.9 4.4 7.7 7.3 9.3 2.1 1.1 11.5 3.3 9.8-1.7 1.2-.4 3.3-2.8 1.4-4.2 1.3-.8 2.5-3 .9-5.1 4.4-2.9 1.7-5.1-1.1-6.7-.6-6.5-8.7-3.1-13-3-3.6-1.3-6.7-4.1-9.3-6.8.5-12.2-.1-19-1.3-26.8 1.9-3.8 4-7.9 6.1-11.5Z" style="stroke-width:0;fill:#acb4c3"/><path d="M81.2 87.1c-.8.6-1.7 1-2.6 1.4-4.5 2.2-8.2 6.1-10.2 10.8-7.1-5.8-12.3-9.4-21.8-12h-.2c-3.1-.8-6-3.7-5.7-6.9.2-2.5 2.6-4.2 5-5.1s5-1 7.5-2l.6.2c-.6 2.5-1.6 4.4-2.5 4.9 4.2 7.7 11.8 12.6 14.5 12.7 4.8.1 6.1-2.1 7.7-4.4.6-.9.4-2.2.4-2.2l.2-.8c.8.2 1.5.3 2.3.2 1.5-.1 2.9-.6 4.3-1.4v.2c1.3 0 2 1.2 1.9 2.4 0 .4-.1.7-.3 1-.3.5-.6.8-1 1.1Z" class="cls-5"/><path d="M80.7 44.2c3.1 1 1.1 3.9.3 3.7-2.1-.6-10-1.4-10-1.7.4-4.1 6.5-3 9.7-1.9Z" class="cls-3"/><path d="M84.2 72.1c-2.5 8.6-12.6 1.4-11-5.1 4.1 3.3 6.4 4.5 11 5.1" style="stroke-width:0;fill:#fff"/><path d="M75.3 51.6c.8.2 1.2 1.6.9 3.2s-1.2 2.7-2.1 2.5c-.8-.2-1.2-1.6-.9-3.2s1.2-2.7 2.1-2.5" class="cls-2"/><path d="m74.1 83.5-.2.8s.2 1.4-.4 2.2c-1.6 2.3-2.9 4.5-7.7 4.4-2.7 0-10.4-4.9-14.5-12.7 1-.6 1.9-2.5 2.5-4.9.4-1.5.7-3.1.8-4.8.2-1.8.2-3.6 0-5.3 0 .3 0 .5.1.7 1.2 5 1 4.9 4.3 8.2 3.8 3.7 9.4 10.2 15 11.5Zm-27.9 64.6c4.3-.2 12.4-3.5 13 3 2.8 1.6 5.5 3.8 1.1 6.7 1.6 2.1.4 4.3-.9 5.1 2 1.4-.2 3.8-1.4 4.2 1.7 5-7.7 2.8-9.8 1.7-2.9-1.5-7.7-5.3-7.3-9.2-1.7-1.5-3.7-2.9-5.7-4.2-2.7-1.8-5.5-3.6-7.9-5.2-.2-.1-2.7-2.2-4.1-3.3-5.7-4-13.8-10.9-12.5-17.8 0-.3.8-3.2 2.4-7.5 5.9-1.1 12.2 1.1 16.1 5.6-.2.4-.5.7-.7 1-1.1 2.1 0 .2-1 2.1l-.6.2c1.6 1.2 3 2.9 5 5.2 1.4 1.6 3 3.7 5 5.7 2.6 2.8 5.7 5.5 9.3 6.8Z" class="cls-7"/><path d="M12.5 289.5h.6c.3 2.8 9.6 2.9 10.7 1.7l.2-.2c1.1-1.1 2.2-2.2 3.8-2.8 1.5-.6 2.7-.5 3.6.6h-.3c7.2 12.7 4.6 12.7 15.6 18.3 1.5.8 3.3.2 3.7 1.8 2 7.9-2.2 12.3-9.5 10.8-11.5-2.3-17.8-5.4-35.3-16.1-1.1-.7-2.5-1.4-2.8-2.6-.2-.9.2-1.8.6-2.6 1.7-3.6 5.5-6.9 8.1-10.1l1.2.2c0 .3-.1.6-.2.9Z" class="cls-4"/><path d="M46.6 87.3v.2c-1.7.9-2.6 2.8-2.9 4.6-.3 1.9-.1 3.8-.2 5.6-.1 1.9-.2 3.2-1.5 5.3-2.1 3.6-4.2 7.6-6.1 11.5-2.6 5.2-4.9 9.9-6.5 12.5-3.9-4.5-10.3-6.7-16.1-5.6C17.8 108.8 27.5 84.8 32 83c3.8-1.6 6.4-1.8 9-2.6-.2 3.2 2.7 6.1 5.7 6.9h.2Z" class="cls-5"/><path d="M13.1 289.6h-.6c0-.4.1-.7.2-1 2.4-11.1 7.5-38.7 13.5-47.3 7.1 4.2 10 7.3 18 9-5.1 8.9-14.1 33.4-20.3 40.6s.1 0 .1 0l-.2.2c-1.2 1.2-10.4 1-10.7-1.6Z" class="cls-7"/><path d="M54.6 68.5c-3.3-2.4-6.7-10.6-7.9-15.2-.2-.6-.4-1.2-.7-1.8-.7-1.7-.8-7-.4-8 1.3-3.4.3-5.9 3.1-11.1 1-1.7 3.6-3.6 5.2-4.9 2.5-2.1 2.8-2.6 4.6-5.3 1.5-2.3 4.3-2.6 7-2.2 2.6.3 3-.2 5.7-.7 3.2-.6 4.7-1.6 8.3-1.9 2.7-.2 6.4 1.2 8.3 3 1.2 1.2 2.4 2.3 3.9 3.2 3.1 1.9 7.5 2.5 9.1 5.8.9 2-.4 4.5.6 6.5 1.2 2.5 2.1 6.8.9 9.4-.9 1.9-2.1 3.2-2.7 5.3-.7 2.5-1.2 4-3.2 6.1h-.8" class="cls-1"/><path d="M98.4 45.8c-.7 5.1-2.5 8.1-3.2 10.8q-.3 1.05-.3 2.1c0 2.3-2.1 9-6.6 16.4 0 0-3.3 4.9-7.7 7.3-1.3.8-2.8 1.3-4.3 1.4-.8 0-1.5 0-2.3-.2-5.6-1.2-11.3-7.7-15-11.5-3.3-3.3-3-3.2-4.3-8.2 0-.2 0-.4-.1-.7-.1-1.3-.1-3.7.1-6.2h0" class="cls-1"/><path d="M85.9 65.8c-.2 2.8-5.9.8-9-.5m11.8-7c-.3 1.6 0 3.1.8 3.3s1.7-1 2-2.6 0-3.1-.8-3.3-1.7 1-2 2.6m-15.5-4.2c-.3 1.6 0 3 .9 3.2.8.2 1.7-.9 2.1-2.5.3-1.6-.1-3-.9-3.2s-1.7.9-2.1 2.5m11 18c-4.6-.6-6.8-1.8-11-5.1" class="cls-1"/><path d="M84.2 72.1c-2.5 8.6-12.6 1.4-11-5.1m-18.6-4.7c0 .3 0 .6.1.9.2 1.7.2 3.6 0 5.3-.1 1.7-.4 3.3-.8 4.8-.6 2.5-1.6 4.4-2.5 4.9m0 0c4.2 7.7 11.8 12.6 14.5 12.7 4.8.1 6.1-2.1 7.7-4.4.6-.9.4-2.2.4-2.2m-32.1 18.6c-2.1 3.6-4.2 7.7-6.1 11.5-2.6 5.2-4.9 9.9-6.5 12.5-.2.4-.5.7-.7 1m12-47.6c-2.6.8-5.2 1-9 2.6-4.5 1.8-14.2 25.9-18.7 38.4-1.5 4.3-2.5 7.3-2.4 7.5m24.6 26.6c-.9 9-.2 7.3-.9 15.5.2 0 .4.1.6.2 17 5 43.6 3.6 48.4.5.5-.3.8-.6.8-1 .8-14.3 1.4-27 1.7-40.5v-1c.2-6.9.2-14.1.3-21.8" class="cls-1"/><path d="M35.7 114.5c1.1 7.8 1.7 14.6 1.3 26.7M82.9 85c2.1.6 3.7 1.2 6.4 4.6 4.8 6.1 7.2 23 8.7 31.7.1.7.2 1.3.3 1.9m-6.4 14.9c5.9 8.5 10.9 11.7 15.4 17.8m-20.8-25.8c1.2 3.4 3.7 5.5 5.2 8m6.7-14.8c6.5 6.1 14.6 19.7 18.1 23.5" class="cls-1"/><path d="M116.6 146.8c-3.1.7-.6-.2-3.2 1.7-2 1.4-4.7 4.6-5.6 7.5-.3.9-.4 1.8-.2 2.5.4 1.7 1.8 6 3.2 7 3 2.1 4.7 1.2 7.6-1s8.6-10.1 7.1-13.4-5.5-5.3-8.9-4.2M98.4 45.6c0-1.7-.3-3-.6-4-.4-1.3-2.2-3.6-3.4-4.3-2.4-1.4-4.3-1.9-6.8-3.2-2.9-1.5-4.4-1.9-7.7-2.1-5.6-.4-10.6 1.8-13.5 6.2-.6.9-5.7 9.8-6 9.8-1.6-.2-1.4-.4-2.6-3-.7-1.5-3.9-2.4-6-.9-1.2.9-2.2 4.2-2.1 5.9s.7 5.7 2 6.4c1.2.6 2.1.9 3.1.3.1 0 .2-.1.3-.2M28.5 128c-1.1 2.1 0 .2-1 2.1m-5.1 16s.4.3.8.7c1.3 1.1 3.9 3.2 4.1 3.3 2.4 1.6 5.2 3.3 7.9 5.2 2 1.4 4 2.8 5.7 4.2" class="cls-1"/><path d="M10.6 128.9c-1.4 6.9 6.8 13.8 12.5 17.9m23.7 1.5c-.2 0-.5-.2-.7-.2-3.6-1.3-6.7-4.1-9.3-6.8-1.9-2.1-3.6-4.2-5-5.7-2.1-2.3-3.5-4-5-5.2-1.8-1.4-3.7-2.2-6.9-2.8M56 149.3c.7.5 1.9 1 3.1 1.7 2.8 1.6 5.5 3.8 1.1 6.7 1.6 2.1.4 4.3-.9 5.1 2 1.4-.2 3.8-1.4 4.2 1.7 5-7.7 2.8-9.8 1.7-2.9-1.5-7.7-5.3-7.3-9.2" class="cls-1"/><path d="M46 148.1h.2c4.3-.2 12.4-3.5 13 3q0 0 0 0m11.9-105c0 .4 7.8 1.1 10 1.7.7.2 2.8-2.6-.3-3.7-3.2-1.1-9.3-2.2-9.7 1.9Zm17.1 5.4c.6.3 4.1 1.8 4.8 2.1.9.3 1.8-.5 1.9-1.3 0-.9-4.1-4.4-5.6-4.2-1.4.2-2.9 2.5-1.1 3.4m-1.6 198.6v.3m-75 38 1.1.2m11.3 2.3.1.1M35 170.9v.2c-7.4 19.8 1.7 47.3-10.9 68.9.8.5 1.6.9 2.3 1.3 7.1 4.2 10 7.3 18 9 1.5.3 3.1.6 5 .8 8.3-10.9 11.9-36.9 15.9-52.8.9-3.6 1.8-6.7 2.8-8.9" class="cls-1"/><path d="M44.4 250s-.1.2-.2.3c-5.1 8.9-14.1 33.4-20.3 40.6m2.4-49.6s0 0 0 0c-6 8.6-11.2 36.2-13.5 47.3 0 .3-.1.6-.2.9v.3m52.6-91.4c13.4 15.5 14.8 44.3 15.9 52 1.9 0 3.7 0 5.5-.3 6.5-.7 12.4-2.4 19.9-4.3 1-.3 2.1-.5 3.2-.8-.4-4.8-.6-12.1-2.6-29.2-1.2-9.9-18.5-38-23.3-44.1m2.8 78.7c2.8 11.3 3.1 37.8 3.1 42.7v.8" class="cls-1"/><path d="M106.5 245.8c-.9 8.6-2.6 30.6-4.2 41.3" class="cls-1"/><path d="M89.8 293.4c1.5 2.3 5.3 3.2 7.7 1.6 1.4-.9 2-2.4 2.6-3.9.5-1.4 1-3 2.2-4.1s2.4-1.4 3.8-.5" class="cls-1"/><path d="M88.1 293.1c-1.1 3.9-1.6 7.9-1.5 11.8 0 .9 0 1.9.7 2.6.9 1 2.5 1.2 3.9 1.4 12 1.3 19.8 5.1 32 4.6 4-.2 8.2-.6 11.3-2.7 3.2-2.1 4.7-6.4 2.1-9-1.2-1.2-3-1.9-4.7-2.5-10-3.4-15.7-9.4-25.6-12.8h0m-93.2 3.1c.3 2.7 9.6 2.8 10.7 1.6l.2-.2h0c1.1-1.1 2.2-2.2 3.8-2.8 1.5-.6 2.7-.5 3.6.6 0 0 .1.2.2.3" class="cls-1"/><path d="M11.6 288.4c-2.7 3.1-6.4 6.4-8.1 10.1-.4.8-.8 1.7-.6 2.6.3 1.2 1.7 1.9 2.8 2.6 17.4 10.7 23.7 13.8 35.3 16.1 7.3 1.5 11.5-2.9 9.5-10.8-.4-1.5-2.2-1-3.7-1.8-11-5.7-8.4-5.6-15.6-18.2M13.1 121.4c5.9-1.1 12.2 1.1 16.1 5.6l.3.3m68.6-6s0 0 0 0c-4.9.7-9.4 3.6-12.1 7.7M53.3 73.1c-2.6 1-5.2 1.1-7.5 2-2.4.9-4.8 2.6-5 5.1q0 0 0 0c-.2 3.1 2.7 6.1 5.7 6.9h.2c9.6 2.6 14.7 6.2 21.8 12 2-4.6 5.7-8.5 10.2-10.8.9-.4 1.8-.9 2.6-1.4.4-.3.8-.7 1-1.1.2-.3.3-.7.3-1 .1-1.2-.6-2.5-1.7-2.4" class="cls-1"/><path d="M46.6 87.5c-1.7.9-2.6 2.8-2.9 4.6-.3 1.9-.1 3.8-.2 5.6-.1 1.9-.2 3.2-1.5 5.3q0 0 0 0m39.2-15.9s0 0 0 0c4 5.3 5.5 12.8 4.8 20.2v.4" class="cls-1"/></svg>')}`;
export default image;