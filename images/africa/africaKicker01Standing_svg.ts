/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3{fill:#4f4f4f}.cls-10,.cls-3,.cls-7,.cls-8{stroke-width:0}.cls-7{fill:#ae8a6b}.cls-8{fill:#bb5f40}.cls-10{fill:#020000}</style></defs><path d="M14.2 298.6c-.4 1.3-.3 7 .7 8.1 1.1 1.2 2.9 1.3 4.6 1.3 5.2 0 10.5.1 15.7 0 1.9 0 5.6.3 6.9-1 1.6-1.5.8-8.3-.3-10.1-6-.1-14.1-1.4-18.6-2.7-1.6-.4-2.7-.9-3.1-1.3-2.7 1.2-5.2 2.9-5.9 5.6Z" class="cls-3"/><path d="M47.3 171.6c.6-2.7-1.3-3.8-3.6-4.4-2-.5-4.4-.7-5.9-1.2-4.8-2.1-6.9-9.6-8.5-13-1.4-2.9-2.1-5.2-3.4-7.2.7-.7 6.2-6.6 7.6-7.8-1.4-.7-2.7-1.6-4.1-2.9-1.2-1.1-2.6-3.4-3.7-5.8-2.9 3-8.6 8.1-9.9 10.4-2.7 4.9 2.3 16.9 5.9 21.1 2.7 3.1 7.4 8.9 9.9 12.4-1.2 2.7 1.7 6.7 3.6 8.6.9.9 4.1 2.9 6.1 3.1 1.1 0 1.9-.3 1.8-1.8 1 0 3.2-1.2 2-2.7 1.2-.2 2.6-1.5 1.8-3.5 4.1-1 2.4-3.3.6-5.2Z" class="cls-7"/><path d="M20 293c.4.4 1.5.8 3.1 1.3 2.4-12.5 4.9-27.1 7.3-39.7 4.1-21.2 8.3-44.1 14.3-64.8-1.5-.7-2.8-1.4-4.1-2.3-3.4 18-20.5 105.6-20.5 105.6Z" class="cls-8"/><path d="M25.6 129.2c1 2.4 2.5 4.7 3.7 5.8 1.5 1.4 2.7 2.2 4.1 2.9 1.3.6 2.6 1.1 4.3 1.8.7-.8 1.5-1.7 2.3-2.8l-.2-.2c-3.1-1.6-6.3-3.2-8.8-5.6s-4.4-5.8-4.2-9.3c-1.4 1.4-2.4 2.5-2.4 2.5 0 1.3.4 3.1 1.2 4.9" class="cls-3"/><path d="M64.9 209.7c0 3.7 12.3 81.8 12.4 84.9 3.1 1.1 6.1 1.8 8.9 2.2 6.3.9 11.7.2 16.4-1-.7-13.3-13.7-89.6-14.4-103.9-8.2 1.3-29.5 4.5-43.5-2-6 20.7-10.2 43.6-14.3 64.8-2.4 12.5-4.8 27.1-7.3 39.7 4.5 1.3 12.6 2.5 18.6 2.7 1.9 0 3.5 0 4.8-.3.2-.5 12.9-63.6 18.5-87.1Z" style="stroke-width:0;fill:gray"/><path d="M90.2 136.7v-.8c4.2-2.3 7.8-5.7 10.4-9.8-3.3-5.9-6.1-12.7-9.6-15.9-2.5-2.3-4-4.3-7.3-5.1-1.2-.3-3.5-.9-5.7-1.3v.3c-1.6 9.4-7.1 11.3-13.1 11.4-6 0-11.7-5.3-13.4-11.1-4 1-8.7 2.3-9.7 2.7-3.3 1.5-5.4 5-8.1 7.5-1.2 1.2-4.6 4.7-7 7.2-.2 3.5 1.6 6.9 4.2 9.3s5.7 4 8.8 5.6l.2.2c1.3-1.6 2.6-3.5 3.9-5.3l.8.4s.4 7.7.6 9.3c.3 3.3.6 6.6.4 9.9-.3 4.6-1.7 11.8-2 15.9 2.3.6 4.2 1.7 3.6 4.4 1.8 1.9 3.4 4.2-.6 5.2.8 1.9-.6 3.3-1.8 3.5 1.2 1.5-1 2.7-2 2.7 0 1.4-.7 1.9-1.8 1.8 0 .5-.3 1.4-.5 2.7 1.3.9 2.7 1.7 4.1 2.3 14.1 6.5 35.3 3.3 43.5 2 1.6-.3 2.7-.4 3.2-.5-.2-2-.4-4.7-.6-7.8-.3-5.7-.6-12.7-.7-19.3-.2-7.6-.3-14.9-.3-19.1s.2-5.7.4-8.4Z" style="stroke-width:0;fill:#d36749"/><path d="M78.8 91.1c-1.7 2.3-4 2.7-7.2 2.3-5.5-.7-9.3-5.5-8.4-5.1 4 1.7 11.4 3.7 15.6 2.8M47.5 80.2c1.2 7.6 7.3 13.9 9.8 16.2 7.5 6.7 12.8 7.6 17.1 5.9 3.8-1.5 6.8-5.2 9.8-8.7 2.7-3.2 5-6.9 6.2-12.8.6-2.7.9-5.8 1-9.6V64c-1.9-11.1-9.9-14.3-18.7-14.9-6.3-.4-13.6 1.5-19.2 10.5-2 3.2-3.3 7.7-4 8.9s-2.8 1-2.7-.4c-.5-1.2-1.6-1.8-2.7-1.5q-.3 0-.6.3c-1.2.8-1.9 2.6-1.9 4.4s.5 3.5 1.1 5.1c.6 1.4 1.4 2.8 2.5 3.6.7.5 1.5.6 2.2.4Zm14.9-6.7c0-1.7.7-3.1 1.7-3.1s1.7 1.4 1.7 3.1-.7 3.1-1.7 3.1-1.7-1.4-1.7-3.1m19.4-.2c0-1.5.6-2.7 1.4-2.7s1.4 1.2 1.4 2.7S84 76 83.2 76s-1.4-1.2-1.4-2.7" class="cls-7"/><path d="M91.4 63.9v3.4c.3 0 .9 0 1.4.2 0-4.8.8-13-2.1-19.6-3.9-8.8-16.9-10.6-24-10.4-8.1.2-13.9 3.8-18.6 11.4-3.3 5.2-4.4 9.7-3.9 17.4 1-.2 2.2.4 2.7 1.6 0 1.4 2.1 1.6 2.7.4.7-1.2 2-5.7 4-8.9 5.6-9 12.9-10.9 19.2-10.5 8.8.6 16.8 3.8 18.7 14.9Z" style="stroke-width:0;fill:#1e160d"/><path d="M51.6 104.4c1.6 5.8 7.4 11.2 13.4 11.1 6 0 11.5-2 13-11.4v-.3c-1.4-.3-2.8-.5-3.6-.4-.3 4.7-4.2 6.9-8.7 6.6-4.1-.2-8.9-3.2-8.7-6v-1.2c-.7.2-2.9.8-5.4 1.5Z" class="cls-3"/><path d="M57.1 104.1c-.2 2.8 4.5 5.7 8.7 6 4.5.3 8.3-2 8.7-6.6v-1.2c-4.2 1.7-9.5.8-17.1-5.9 0 3.1 0 4.7-.2 6.6v1.2Z" class="cls-7"/><path d="M64.1 70.4c-.9 0-1.7 1.4-1.7 3.1s.7 3.1 1.7 3.1 1.7-1.4 1.7-3.1-.7-3.1-1.7-3.1" class="cls-10"/><path d="M63.2 88.3c-.9-.4 2.9 4.4 8.4 5.1 3.2.4 5.5 0 7.2-2.2-4.2.8-11.6-1.3-15.6-2.9" style="stroke-width:0;fill:#fff"/><path d="M83.2 70.7c-.8 0-1.4 1.2-1.4 2.7s.6 2.7 1.4 2.7 1.4-1.2 1.4-2.7-.6-2.7-1.4-2.7" class="cls-10"/><path d="M86.2 296.7c-1 1.8-1.3 10.2.7 11.3 1.4.8 18.8 1.2 23.6 1 .5 0 3.3-.6 3.7-.7 1.4-.6.8-7.9 0-9.1-1.2-2.2-4.1-3.6-7.7-4.8v.2c-1.3.4-2.6.8-4 1.2-4.7 1.2-10.1 1.9-16.4 1Z" class="cls-3"/><path d="M90.5 164.3h-.4c.2 6.7.4 13.7.7 19.3h.6c1.6-.4 1 .2 2-2.6.7-2.1 1.1-3.9 1.8-6 1.5-4.8 4.8-7.6 8.5-11.5 4.9-5.3 8.2-15 4.4-20.4-.8-1.1-5.2-8.5-7-11.8-1.7 3.7-3.2 5-8.5 6.7v.2c1.4 2.5 6.6 11.2 6.8 10.8h.5c-1.7 2.7-2.8 5.3-4.1 8-.9 1.8-5.3 6.9-5.3 7.2Z" class="cls-7"/><path d="M101.1 131.3c.3-.7.7-1.6 1.1-2.6-.5-.8-1-1.7-1.5-2.6-2.6 4-6.2 7.4-10.4 9.8v.8c0 .3.3.8.9 1.8.6-.2 1.1-.3 1.6-.5 5.3-1.7 6.8-3 8.5-6.7Z" class="cls-3"/><path d="M90.4 80.8h.3c1.5 1.1 3.6-2.5 4-5 .3-1.9 0-3.8-.3-5.7-.1-.7-.2-1.3-.6-1.9-.1-.3-.5-.5-1-.6-.5-.2-1.1-.3-1.4-.2v3.8c0 3.7-.4 6.9-1 9.6" class="cls-7"/><path d="M91.4 191.4c-.4 0-1.5.2-3.2.5.6 14.3 13.7 90.6 14.4 103.9 1.4-.3 2.7-.7 4-1.1v-.2c-.3-8.3-14.2-96.9-15.2-102.9Z" class="cls-8"/><path d="M74.4 102v1.4c-.3 4.7-4.2 6.9-8.7 6.6-4.1-.2-8.9-3.2-8.7-6m17.4-.5c.8 0 2.2 0 3.7.4 2.1.4 4.5 1 5.7 1.3 3.3.8 4.8 2.8 7.3 5.1 3.5 3.2 6.3 10 9.6 15.9.5.9 1 1.8 1.5 2.6-.4 1-.7 1.8-1.1 2.6-1.7 3.7-3.2 5-8.5 6.7-.5.2-1 .3-1.6.5M57.1 103c-.7.2-2.9.8-5.4 1.5-4 1.1-8.7 2.3-9.7 2.8-3.3 1.5-5.4 5-8.1 7.5-1.2 1.2-4.6 4.7-7 7.2-1.4 1.4-2.4 2.5-2.4 2.5 0 1.3.4 3.1 1.2 4.9 1 2.4 2.5 4.7 3.7 5.8 1.5 1.4 2.7 2.2 4.1 2.9 1.3.6 2.6 1.1 4.3 1.8.7-.8 1.5-1.7 2.3-2.8 1.3-1.6 2.6-3.5 3.9-5.3 1.9-2.7 3.7-5.3 4.9-7" class="cls-2"/><path d="M89.6 122.7c1 4.7.9 8.9.6 13.2v.8c-.2 2.7-.4 5.4-.4 8.4 0 4.3.1 11.5.3 19.1.2 6.7.4 13.7.7 19.3.2 3.1.4 5.8.6 7.8-.4 0-1.5.2-3.2.5-8.2 1.3-29.5 4.5-43.5-2-1.5-.7-2.8-1.4-4.1-2.3-.1 0-.2-.1-.3-.2m4.5-55v-.2s.4 7.7.6 9.3c.3 3.3.6 6.6.4 9.9-.3 4.6-1.7 11.8-2 15.9v.4m57.3-36.3c1.8 3.3 6.2 10.8 7 11.8 3.8 5.3.5 15.1-4.4 20.4-3.6 3.9-6.9 6.7-8.5 11.5-.7 2.1-1.1 4-1.8 6-1 2.7-.4 2.2-2 2.5" class="cls-2"/><path d="M92.7 138.2c1.4 2.5 6.6 11.2 6.8 10.8m-9.7-13.1c.8.9.2.2.4.8 0 .3.3.8.9 1.8m12 6.4c-1.3 1.4-2.3 2.8-3.2 4.2-1.7 2.6-2.8 5.3-4.1 8-.9 1.8-5.3 6.9-5.3 7.2M33.4 138c-1.4 1.2-6.8 7.1-7.6 7.8" class="cls-2"/><path d="M25.6 129.2c-2.9 3-8.6 8.1-9.9 10.4-2.7 4.9 2.3 16.9 5.9 21.1 2.7 3.1 7.4 8.9 9.9 12.4" class="cls-2"/><path d="M38.4 166.4c-.2 0-.4-.2-.7-.3-4.8-2.2-6.9-9.7-8.5-13.2-1.4-2.9-2.1-5.2-3.4-7.2-.8-1.2-2-2.3-3.7-3.3m23.2 27.1c.4.5 1.2 1.3 2 2.1 1.8 1.9 3.4 4.2-.6 5.2.8 1.9-.6 3.3-1.8 3.5 1.2 1.5-1 2.7-2 2.7 0 1.4-.7 1.9-1.8 1.8-2.1-.2-5.2-2.2-6.1-3.1-1.9-1.9-4.8-5.9-3.6-8.6" class="cls-2"/><path d="M37.8 166c1.5.5 3.9.6 5.9 1.2 2.3.6 4.2 1.7 3.6 4.4m44.1 19.8c1 6 14.9 94.7 15.2 102.9v.2c-1.3.4-2.6.8-4 1.2-4.7 1.2-10.1 1.9-16.4 1-2.8-.4-5.7-1.1-8.9-2.2 0-3-12.4-81.2-12.4-84.9" class="cls-2"/><path d="M67.3 201.2c-.4.8-1.2 3.9-2.3 8.5-5.6 23.5-18.3 86.5-18.5 87.1q-1.95.3-4.8.3c-6-.1-14.1-1.4-18.6-2.7-1.6-.4-2.7-.9-3.1-1.3 0 0 17.1-87.6 20.5-105.6.2-1.3.4-2.2.5-2.7v-.2" class="cls-2"/><path d="M20 293c-2.7 1.2-5.2 2.9-5.9 5.6-.4 1.3-.3 7 .7 8.1 1.1 1.2 2.9 1.3 4.6 1.3 5.2 0 10.5.1 15.7 0 1.9 0 5.6.3 6.9-1 1.6-1.5.8-8.3-.3-10.1m44.5-.2c-1 1.8-1.3 10.2.7 11.3 1.4.8 18.8 1.2 23.6 1 .5 0 3.3-.6 3.7-.7 1.4-.6.8-7.9 0-9.1-1.2-2.2-4.1-3.6-7.7-4.8" class="cls-1"/><path d="M44.8 189.5v.3c-6 20.7-10.2 43.6-14.3 64.8-2.4 12.5-4.8 27.1-7.3 39.7m65-102.9v.5c.6 14.3 13.7 90.6 14.4 103.9m-51-191.3c1.6 5.7 7.4 11.2 13.4 11.1 6 0 11.5-2 13-11.4" class="cls-2"/><path d="M57.1 104.1v-1.2c.1-1.9.2-3.5.2-6.6m34.3-35.8c0 1.3 0 2.4-.1 3.4v7.2c0 3.7-.4 6.9-1 9.6-1.2 5.9-3.5 9.6-6.2 12.8-3 3.5-5.9 7.1-9.8 8.7-4.2 1.7-9.5.8-17.1-5.9-2.6-2.3-8.7-8.5-9.8-16.1" class="cls-1"/><path d="M86.4 65.7c-1-.8-5.1-.9-6-.4M68 65c-1.9-.9-6.9-.3-7.3.4m21.1 7.9c0 1.5.6 2.7 1.4 2.7s1.4-1.2 1.4-2.7-.6-2.7-1.4-2.7-1.4 1.2-1.4 2.7m-19.4.2c0 1.7.7 3.1 1.7 3.1s1.7-1.4 1.7-3.1-.7-3.1-1.7-3.1-1.7 1.4-1.7 3.1M78.5 81c1.1 2.9-.4 5.1-4.4 4.9m5.2 5.1c-.1 0-.3 0-.5.1-4.2.9-11.6-1.2-15.6-2.8-.9-.4 2.9 4.4 8.4 5.1 3.2.4 5.5 0 7.2-2.2" class="cls-1"/><path d="M92.8 67.5c0-4.8.8-13-2.1-19.6-3.9-8.8-16.9-10.6-24-10.4-8.1.2-13.9 3.8-18.6 11.4-3.3 5.2-4.4 9.7-3.9 17.4m2.7 1.9V68c-.5-1.2-1.6-1.8-2.7-1.5q-.3 0-.6.3c-1.2.8-1.9 2.6-1.9 4.4s.5 3.5 1.1 5.1c.6 1.4 1.4 2.8 2.5 3.6.7.5 1.5.6 2.2.4.4-.1.9-.4 1.2-.8" class="cls-1"/><path d="M91.4 67.3c.3 0 .9 0 1.4.2.4.2.8.4 1 .6.3.6.5 1.2.6 1.9.3 1.9.6 3.8.3 5.7-.4 2.5-2.5 6.1-4 5.1M46.8 68c0 1.4 2.1 1.6 2.7.4.7-1.2 2-5.7 4-8.9 5.6-9 12.9-10.9 19.2-10.5 8.8.6 16.8 3.8 18.7 14.9 0 .2 0 .4.1.6" class="cls-1"/><path d="M26.9 121.9c-.2 3.5 1.6 6.9 4.2 9.3s5.7 4 8.8 5.6m50.2-.8h.1c4.2-2.3 7.8-5.7 10.4-9.8 0-.1.1-.2.2-.3" class="cls-2"/></svg>')}`;
export default image;