/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:none;stroke:#000;stroke-width:1.1px;stroke-linecap:round;stroke-linejoin:round}.cls-3,.cls-4,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-4{fill:#5f4c4a}.cls-7{fill:#94df5d}.cls-8{fill:#434343}.cls-9{fill:#c2c8c3}</style></defs><path d="M213.9 208.9c3 1.2 3.5 5.2 1.9 8s-4.7 4.6-7.8 6.2c-9.2 4.7-19.2 7.9-29 11.2-1.2.4-2.5.8-3.6.3h-.3c-.4-.3-.6-.8-.9-1.3-1.6-3.3-2.9-6.7-3.7-10.3v-.2c1 3.8 11-6.5 10.4-7.8-.7-1.3-1.1-2.1-1.1-3.5 9.1-.8 20.4-2 29.5-2.8 1.6-.1 3.2-.3 4.6.3Z" class="cls-8"/><path d="M180.8 214.9c.7 1.3-9.4 11.5-10.4 7.8v.2h-.2c-16.4-6.5-20.9-2.4-28.6-6.3 1.3-5.5 4.4-12 6.5-16.5 11.8 4.2 18.2 6.6 31.4 11.2 0 1.4.5 2.3 1.1 3.5Z" class="cls-4"/><path d="M58.9 185.1c0-1.2 0-2.5.1-3.9 1.5-9.4 15.6-6.3 32.4-2.8 8.3 1.7 10.6 3.8 14.8 4.7.3 0 .5.1.8.2 11.9 3.6 43 12.9 42.4 14.3-.3.7-.7 1.6-1.1 2.5-2.1 4.5-5.2 11-6.5 16.5-.2.8-.3 1.6-.4 2.3 0 .7-14.3-2-29.6-5.1-14.7-3-30.4-6.3-36.1-7.4-2.3-.6-4.1-1.1-5.2-1.5-4.7-2.3-11.1-8.5-11.4-19.8Z" class="cls-9"/><path d="M130.7 298.4c16.4 7.3 1 14.9-6.8 14.1-10.8-1.2-23.5-2.4-35.2-4.6-1.3-.2-2.6-1-3.1-2.2-.4-.8-.2-1.8 0-2.7.8-3.9 1.4-9.3 3.1-12.8q.3.75.9 1.5c1.7 1.8 4.9 3.2 6.9 2.4 1.4-.6 2.3-1.9 3.1-3.2s1.5-2.7 2.8-3.5 2.4-.9 3.4.3h.1c7.8 4.3 15 6.3 24.9 10.7Z" class="cls-8"/><path d="m105.5 103.5-.2.3c-.1 12.3 9.3 12.7 12 4.7-4.7-.5-7.8-2.3-11.8-5m-4.4 13.6v.2c-.5 3-.3 1.9 0 5-2.7 4.1-8.8 6.5-12.9 5.6s-7.1-4.4-7.6-9.8c.4-1 .7-3 .9-5.3v-1c.2-2.9.2-6.3 0-9.1-5.4-5.2-7-12.4-7.3-20-.4-9.4 1.9-25.3 18.8-29.1 22.5-5 31.8 6.3 35.6 12.1 3.3 5.1 4.1 16 1.8 21.9-1.4 4.5-2.1 4.7-2.8 7.1-.6 2.1-.6 10.5-8.5 19.1 0 0-4.6 5.4-8.7 6.1-1.3.2-4.9-.7-9.3-2.8M126 86.9c.7 0 1.6-.2 2.1.4-.2-2.5-4.6-3-5.6-1.7 0 .7.7 1.2 1.4 1.4.7.1 1.4 0 2.2 0Zm-.9 6.6c.4-1.5 0-2.9-.9-3s-1.9.9-2.2 2.4c-.4 1.5 0 2.9.9 3s1.9-.9 2.2-2.4m-13.8-9.6c-.2-.5-.3-1.2-.6-1.7-1.3-1.9-5.1-3.3-7.9-1.2 3 .9 5.5 2.1 8.5 2.9m-3.1 5.7c.3-1.5-.1-2.8-1-2.9-.9-.2-1.9.8-2.3 2.3-.3 1.5.1 2.8 1 3s1.9-.8 2.2-2.3Z" class="cls-4"/><path d="M128 87.2c-.5-.6-1.3-.4-2.1-.4-.7 0-1.5.1-2.2 0s-1.4-.6-1.4-1.4c1.1-1.3 5.5-.7 5.6 1.7Zm-3.9 3.2c.9.2 1.3 1.5.9 3s-1.4 2.6-2.2 2.4-1.3-1.5-.9-3 1.3-2.6 2.2-2.4" class="cls-3"/><path d="M115.3 126.3c4.3 10.2 5.9 27.8 5.4 28.3-.2.2-.7.1-1.5-.1-2.6-.8-7.9-3.4-12.6-3.2-1.1 0-2.1.3-3 .7-.3-2.8-.9-5.6-1-10.4-.1-5.6-1.1-10.1.5-14.8h.1c1.1-2.9 4.9-5.4 6.6-5.2 2.6 1.4 4.8 3.1 5.5 4.8Z" class="cls-7"/><path d="M104.8 164.8c-8 1.2-14-.5-25.1-1.7-2.7.9-12.4 1.2-13.4-1.3-.9-2.1 2.8-12.8 5.7-14.1 2.7-1.2 12.6 3.8 12.7 6.7 9-1.6 10.3-.1 21.7-3 4.7-.2 10 2.3 12.6 3.2 0 2.1-.4 3.2-1.2 4.8-1 2-2.2 2.2-3.1 2.8-3.8 1.4-7 2.3-10 2.7Z" class="cls-4"/><path d="M91.9 257.6c-.8 0-1.7-.2-2.6-.3 0-6 3.4-12.6 1.4-21.3-2.5-10.9-10.6-20.7-15.2-29.7 5.7 1.1 21.5 4.5 36.1 7.4 1.3 4.6 6 15.3 6.4 22.2.5 9.2-3 16-3.3 20.7-1.2.2-2.3.4-3.4.5-7.2 1.1-10.6 1.3-19.6.4Z" class="cls-9"/><path d="M117.3 108.4c-2.8 8-12.1 7.6-12-4.7l.2-.3c4.1 2.7 7.2 4.5 11.8 5" style="stroke-width:0;fill:#fff"/><path d="M111.5 257.3v.3c-2.8 9.9-5.7 20.1-9.4 29.6l.3.2c-1.3.8-2 2.2-2.8 3.5s-1.7 2.6-3.1 3.2c-1.9.8-5.2-.5-6.9-2.4-.3-10.1-1.1-24.6 2.3-34.1 9 .9 12.4.8 19.6-.4Z" class="cls-4"/><path d="M110.7 82.2c.3.5.4 1.2.6 1.7-3-.9-5.5-2.1-8.5-2.9 2.7-2.1 6.6-.7 7.9 1.2" class="cls-3"/><path d="M106.2 183.1c-4.2-.9-6.4-2.9-14.8-4.6-16.8-3.5-30.9-6.7-32.4 2.8-.1 1.4-.2 2.7-.1 3.9-2.9-10.7-.7-18.3 1.3-35.8.3-2.5.6-5.1.8-8 1.9-20.6 6-28.3 17.8-29.8.9 0 1.7 0 2.5.2h.3v1h-.3c-3.1 2.2-4.3 6.6-3.1 10.3 1.2 3.6 4.3 7.5 8 8.3s8.5-1 11.7-3c3.2-2.1 6.5-5 6.8-8.9v-.2c1.6.7 3.4 1.5 5 2.4-1.7-.2-5.4 2.4-6.6 5.2h-.1c-1.7 4.7-.7 9.2-.5 14.8 0 4.7.7 7.6 1 10.4 1-.4 2-.6 3-.7-11.4 2.9-12.7 1.4-21.7 3.2-.1-3-10-8-12.7-6.8-2.9 1.3-6.6 12-5.7 14.1 1 2.5 10.8 2.2 13.4 1.3 11 1.2 17.1 2.9 25.1 1.7-.8 2.9 1.2 13.5 1.3 18.2" style="stroke-width:0;fill:#26affa"/><path d="M107.2 86.7c.9.2 1.4 1.5 1 2.9-.3 1.5-1.4 2.5-2.2 2.3-.9-.2-1.4-1.5-1-3 .3-1.5 1.3-2.5 2.3-2.3Z" class="cls-3"/><path d="M106.2 183.1c.2 0 .5.2.8.2-.3 0-.5-.1-.8-.2" style="stroke-width:0;fill:#2b388d"/><path d="M104.8 119.1v.2c-.5 3.9-3.7 6.9-6.9 8.9-3.2 2.1-8 3.9-11.7 3-3.7-.8-6.8-4.7-8-8.3s0-8 3.1-10.3h.3c-.2 2.4-.5 4.4-.9 5.4.5 5.5 3.5 9 7.6 9.8s10.2-1.5 12.9-5.6c-.3-3-.5-1.9-.2-5 .9.5 2.3 1.1 3.9 1.8Zm-45.1 17.5c-4.7 4.2-10.4 9.2-12.8 10.9-.5-.3-1.1-.6-1.6-1-3.6-2.9-5.6-8.7-6.2-11.8-.2-.9-.3-1.6-.2-1.9.1-1 11.7-12 12.5-12.7 4.2-3.6 7.2-6.5 12.8-7.6 1.6-.3 9-1.4 14.8-1.1-11.8 1.6-15.9 9.2-17.8 29.8-.3 2.9-.6 5.6-.8 8h-.3c0-5.1.2-8.7-.3-12.7Z" class="cls-7"/><path d="M29.7 168.2c2.4.7 4.8 9.2 3.2 11.1-1.7 2-11.6 2.9-13.2 1.8-2-1.3.2-8.7 1.5-10.6 2.7-11.8 4.4-17.9 11.6-27.8 3.3-4.5 3.9-5.5 6.2-8 .6 3.1 2.7 8.9 6.2 11.8-2.1 1.4-1.8 1.4-3.9 2.9-4.8 8.2-8.3 12.1-11.8 18.9Z" class="cls-4"/><path d="m59.9 136.4-.3.2c-4.7 4.2-10.4 9.2-12.8 10.9-.5-.3-1.1-.6-1.6-1-3.6-2.9-5.6-8.7-6.2-11.8-.2-.9-.3-1.6-.2-1.9.1-1 11.7-12 12.5-12.7 4.2-3.6 7.2-6.5 12.8-7.6 1.6-.3 9-1.4 14.8-1.1.9 0 1.7.1 2.5.2" class="cls-1"/><path d="M39.1 134.7c-2.3 2.5-3 3.6-6.2 8-7.3 9.9-8.9 16-11.6 27.8m24-24c-2.1 1.4-1.8 1.4-3.9 2.9-4.8 8.2-8.3 12.1-11.8 18.9 0 .2-.2.3-.3.5" class="cls-1"/><path d="M29.8 168.3c2.4.6 4.8 9.2 3.2 11.1-1.7 2-11.6 2.9-13.2 1.8-2-1.3.2-8.7 1.5-10.6m85.3-19.3c4.7-.2 10 2.3 12.6 3.2.8.2 1.3.3 1.5.1.5-.5-1.2-18.2-5.4-28.3-.7-1.7-3-3.3-5.5-4.8-1.6-.9-3.3-1.7-4.9-2.4-1.5-.7-2.9-1.3-3.9-1.8m1.5 24.3c0 4.7.7 7.6 1 10.4 1-.4 2-.6 3-.7m8.3 10.8c-3.8 1.4-7 2.3-10 2.7-8 1.2-14-.5-25.1-1.7" class="cls-1"/><path d="M106.6 151.3c-11.4 2.9-12.7 1.4-21.7 3.2-.2 0-.5 0-.7.1" class="cls-1"/><path d="M84.8 154.4c-.1-2.9-10-7.9-12.7-6.7-2.9 1.3-6.6 12-5.7 14.1 1 2.5 10.8 2.2 13.4 1.3m39.4-8.6c0 2.1-.4 3.2-1.2 4.8-1 2-2.2 2.2-3.1 2.8" class="cls-1"/><path d="M78.9 111.5c-11.8 1.5-15.9 9.1-17.8 29.8-.3 2.9-.6 5.6-.8 8-2 17.5-4.3 25.1-1.3 35.8 0 .3.2.6.3.9m45.5-21.2s0 0 0 0c-.8 2.9 1.2 13.5 1.3 18.2h0" class="cls-1"/><path d="M58.5 130.2c.6 2.4.9 4.5 1.2 6.4.5 4 .4 7.6.3 12.7m15.5 57.1c5.7 1.1 21.5 4.5 36.1 7.4 15.4 3.1 29.5 5.8 29.6 5.1s.2-1.5.4-2.3c1.3-5.5 4.4-12 6.5-16.5.4-.9.8-1.7 1.1-2.5.6-1.4-30.5-10.8-42.4-14.3-.3 0-.5-.2-.8-.2-1.7-.5-2.8-.9-3.4-1m-32.3 22.8c1.2.4 3 1 5.2 1.5m0 0c4.6 8.9 12.7 18.7 15.2 29.7 2 8.7-1.4 15.2-1.4 21.3.9 0 1.8.2 2.6.3 9 .9 12.4.8 19.6-.4 1-.2 2.1-.3 3.4-.5.2-4.7 3.8-11.5 3.3-20.7-.4-6.9-5.1-17.6-6.4-22.2m-.3 43.7c-2.8 9.9-5.7 20.1-9.4 29.6" class="cls-1"/><path d="M91.9 257.6c-3.4 9.5-2.5 23.9-2.3 34.1" class="cls-1"/><path d="M88.7 290.2q.3.75.9 1.5c1.7 1.8 4.9 3.2 6.9 2.4 1.4-.6 2.3-1.9 3.1-3.2s1.5-2.7 2.8-3.5 2.4-.9 3.4.3" class="cls-1"/><path d="M88.7 290.2c-1.8 3.5-2.3 9-3.1 12.8-.2.9-.3 1.8 0 2.7.5 1.2 1.8 1.9 3.1 2.2 11.7 2.1 24.4 3.4 35.2 4.6 7.8.9 23.3-6.8 6.8-14.1-9.8-4.4-17-6.4-24.9-10.6M59 181.2c-.1 1.4-.2 2.7-.1 3.9.3 11.3 6.6 17.5 11.4 19.8m71.5 11.7c7.7 3.9 12.2-.2 28.6 6.3m9.3-11.5c-13.2-4.6-19.6-7-31.4-11.2h0m31.3 10.5s.2.6 1.2.5" class="cls-1"/><path d="M170.5 222.7c1 3.8 11-6.5 10.4-7.8-.7-1.3-1.1-2.1-1.1-3.5v-.6" class="cls-1"/><path d="M175.4 234.5c1.1.5 2.4.1 3.6-.3 9.9-3.2 19.8-6.5 29-11.2 3-1.5 6.1-3.4 7.8-6.2 1.6-2.8 1.1-6.8-1.9-8-1.4-.6-3.1-.5-4.6-.3-9.1.8-20.4 2-29.5 2.8" class="cls-1"/><path d="M170.5 222.7v.2c.8 3.5 2 7 3.7 10.3.2.5.5 1 .9 1.4.2.2.5.4.8.6m-68.3-51.8c-.2 0-.4 0-.6-.1-.3 0-.5-.1-.8-.2-4.2-1-6.4-3-14.8-4.7-16.8-3.5-30.9-6.7-32.4 2.8" class="cls-1"/><path d="M101 117.3c-.4 3-.2 1.9.2 5-2.7 4.1-8.8 6.5-12.9 5.6s-7.1-4.4-7.6-9.8m22.3 8.7c-1.7 4.7-.7 9.2-.5 14.8m7.5-20h-.3c-1.7-.2-5.4 2.4-6.6 5.2" style="fill:none;stroke:#000;stroke-width:1.1px;stroke-miterlimit:10"/><path d="M130.5 87.6c-1.4 4.5-2.1 4.7-2.8 7.1-.6 2.1-.6 10.5-8.5 19.1 0 0-4.6 5.4-8.7 6.1-1.3.2-4.9-.7-9.3-2.8-4.3-2.1-9.3-5.4-13.7-10" class="cls-1"/><path d="M121.9 92.8c-.4 1.5 0 2.9.9 3s1.9-.9 2.2-2.4c.4-1.5 0-2.9-.9-3s-1.9.9-2.2 2.4M105 89c-.3 1.5.1 2.8 1 3s1.9-.8 2.2-2.3-.1-2.8-1-2.9c-.9-.2-1.9.8-2.3 2.3Zm12.3 19.4c-4.7-.5-7.8-2.3-11.8-5l-.9-.6" class="cls-1"/><path d="M117.3 108.4c-2.8 8-12.1 7.6-12-4.7m-24-4.1c.2.9.3 1.9.4 3.1.2 2.8.2 6.1 0 9.1v1c-.2 2.3-.5 4.3-.9 5.3" class="cls-1"/><path d="M130.5 87.6c2.2-6 1.4-16.9-1.8-21.9-3.8-5.8-13.1-17.1-35.6-12.1-16.9 3.8-19.2 19.7-18.8 29.1.3 7.6 1.9 14.8 7.3 20l.3.2" class="cls-1"/><path d="M84.6 84.1c-.7-1.7-3-2.1-4.4-1.1s-2.2 2.9-2.4 4.7c-.4 3.3 1 7 3.7 8.4 1.2.6 3 .6 3.6-.7m42.9-8.2c-.2-2.5-4.6-3-5.6-1.7 0 .7.7 1.2 1.4 1.4.7.1 1.4 0 2.2 0 .7 0 1.6-.2 2.1.4ZM102.9 81c2.7-2.1 6.6-.7 7.9 1.2.3.5.4 1.2.6 1.7-3-.9-5.5-2.1-8.5-2.9m16.2 21c.5 5.6-8.1 2-9.4.5m-28.4 10.2c-3.1 2.3-4.3 6.7-3.1 10.3s4.3 7.5 8 8.3 8.5-1 11.7-3c3.2-2.1 6.5-5 6.8-8.9" class="cls-1"/></svg>')}`;
export default image;