/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-4{fill:#2648aa}.cls-5{fill:#ddd}.cls-6{fill:#ac3832}.cls-7{fill:#9f6f56}.cls-8{fill:#332723}</style></defs><path d="M137.4 304.3c1.8 2.1.7 5.5-1.6 7.2s-5.4 2-8.3 2.1c-8.8.4-18.3-3.1-27.1-4.1-1.1-.1-2.2-.3-2.8-1.1-.5-.6-.5-1.4-.5-2.1 0-1.6 0-3.2.3-4.8 6.8.9 15.5-2.1 20.3-7.1 5.4 2.7 11.1 5.9 16.3 7.8 1.3.5 2.6 1 3.4 1.9Z" class="cls-5"/><path d="M135.3 174.9c1.4 3.5-2.2 7.1-5 9.4s-4.5 3.2-7.5 1.1c-1.4-1-2.5-2.6-3-4.4v-.4c-.3-3.4 5.6-10 6.7-10.2 3.4-1.1 7.3.9 8.8 4.4Z" class="cls-7"/><path d="M50.5 293.5c-2.3.5-5.6.8-9.2.8-4.3 0-8.6-.6-12.9-1.2-.5 0-1-.1-1.5-.2 10.9-28.4 18.5-44.3 21-57.7 2.1-11.6 0-32.8 2.7-45.8v-.2c11.6 3.5 21 5.7 31.6 6.1 4.2.2 8.6 0 13.4-.5 4.5 7.6 16 31.9 19.6 43.3.8 2.5 3.4 45 3.8 54.7-.4.6-.9 1.2-1.4 1.7-4.7 4.9-13.5 7.9-20.3 7.1-.7 0-1.4-.2-2.1-.4-.2-10.3-1.6-18.8-1.4-35.3 0-6.3.6-22.9-1.3-26.5-3.7-6.8-10.5-15.8-15.9-21.4h-.1c-5.7 18.3-7.4 25.4-9.6 30.7-.7 1.8-12.9 43.2-14.5 44.1-.5.3-1.2.5-2 .7Z" style="stroke-width:0;fill:#9fc1e4"/><path d="M119.6 180.7c-2.9-8.4-21.2-20.8-21.1-27.2v-1.9h.5c3.6-.9 5.5-2.8 8.7-5.1l.6.2c4 5.9 11.5 18.7 18.1 23.7-1.2.3-7 6.8-6.7 10.2h-.2Zm-12-98.3c.5 0-.9-3.5-1.3-3.9-1-.7-2.4-.6-3.6-.6l-1.2 2.6c1.1 0 2.2.2 3.2.7.9.4 1.8 1.1 2.8 1.1ZM87.4 93.8l-.2.2c0 11.6 8.6 12.1 11.1 4.5-4.3-.5-7.2-2.2-11-4.7Zm-22.3-7c-1.5-.8-2.5-2.3-3-4-.4-1.3-.5-2.6-.4-4 0-.4.1-.9.2-1.3.3-1.3 1-2.5 2-3.2 1.3-.9 3.3-.5 4 1-.6 2.7-.8 5-.6 6.5 3.1 1.4 6.1-15.4 12.9-21.1-2.2 2.7-2.4 5-3.9 9.8-1.2 4.1-2.4 13-2.3 17.3 1.7 1.1 4.2-15.2 6.8-21.3 1.9-4.4 9.5-8.5 19.2-1.4 9.2-2.3 10.9 5.5 10.3 14.3-1.1 3.5-1.8 3.8-2.4 6-.3.9-.7 5.2-2.5 10-2.1 5.6-6 11.8-13.5 13.9-1.2.2-3.2.1-5.8-1 0 .7-.1 2-.3 3.2-.2 1.3-.5 2.5-.9 2.7-.8.4-1.8.4-2.7.4h-.1c-4.9-.3-12.8-3.8-16.2-7.3 1.1-2.8 0-15.9-.8-20.6Zm39.7-.6c.3-1.4 0-2.7-.9-2.9-.8-.2-1.7.8-2.1 2.3-.3 1.4 0 2.7.9 2.9.8.2 1.7-.9 2.1-2.3m-11.3-9.1c.2-.4.4-1.4.4-1.9-.2 0-1.2-.9-1.3-.9-2.6-1.9-5.8-2-8.3 0-.4.3-.2 1.3.3 1.6s1.1.2 1.6.2c1.7 0 3.8.4 5.2 1.3.3.2.6.4 1 .4.5 0 .9-.4 1.1-.8Zm-4.3 5.4c.3-1.4-.1-2.6-.9-2.8s-1.8.8-2.1 2.2.1 2.6.9 2.8 1.8-.8 2.1-2.2" class="cls-7"/><path d="M106.2 78.5c.5.3 1.8 3.9 1.3 3.9-1 0-1.9-.7-2.8-1.1-1-.5-2.1-.7-3.2-.7l1.2-2.6c1.1 0 2.6-.2 3.6.6Zm7.6.6c.1 2.7 0 5.6 0 8.4-.7 1.6-3.8 13.4-5.8 18.4-1.3 3.2-5.5 10.2-7.4 5.7 1.8-3.3 3.5-11.9 4.9-16.1 1.8-4.8 2.2-9.1 2.5-10 .6-2.2 1.3-2.5 2.4-6-.5 6.1-2.1 12.8-3.3 16.9 2 1.9 5.3-8.6 6.7-17.3" class="cls-8"/><path d="M104 83.3c.8.2 1.2 1.5.9 2.9s-1.3 2.4-2.1 2.3c-.8-.2-1.2-1.5-.9-2.9s1.2-2.4 2.1-2.3" class="cls-3"/><path d="M95.7 194.9c-4.8.5-9.2.6-13.4.5 2.7-16.9 2.8-34.7 2.6-52.1.9 0 1.9-.1 2.8-.2-.2 2.6 0 5.6.8 7.5.3.9 4.3 4.1 5.3 4 1-.2 3-4.9 2.9-5.9v-6.3c.8-.2.9-.3 1.7-.5h.2q.15 4.95 0 9.9v1.9c-.4 13.6-2.1 27.1-2.7 41.4h-.2Z" class="cls-6"/><path d="M84.6 124.4h-.2v-1c.1-1.1.4-2.1.9-3.1.8-1.6 2.2-4.4 3.9-4.5.3-1.3.6-.8-1.4-3.3v-.2c2.1.9 5.3 2.4 5.6 2.6 6.8 3.2 12.6 23.4 16.3 30.4-.7.5-1.3.9-1.9 1.3-3.2 2.3-5.1 4.1-8.7 5.1h-.5v-10h-.2c-.8.2-.9.4-1.7.5v-3.6c-1.8.5-8.3-.1-8.6 1.3-.2.9-.3 2-.4 3.1-.9 0-1.9.2-2.8.2 0-6.3-.2-12.7-.2-18.9Z" class="cls-4"/><path d="M87.6 143c0-1.1.2-2.2.4-3.1.3-1.5 6.8-.9 8.6-1.3v9.9c0 1-1.9 5.8-2.9 5.9-.9.1-4.9-3.1-5.3-4-.7-2-1-4.9-.8-7.5Zm10.8-44.5c-2.6 7.6-11.2 7.2-11.1-4.5l.2-.2c3.8 2.6 6.6 4.3 11 4.7Z" style="stroke-width:0;fill:#fff"/><path d="M93.9 75.2c0 .5-.2 1.4-.4 1.9s-.6.8-1.1.8c-.4 0-.7-.2-1-.4-1.4-.9-3.5-1.3-5.2-1.3-.6 0-1.2 0-1.6-.2-.5-.3-.7-1.2-.3-1.6 2.5-2 5.7-2 8.3 0 .2 0 1.2.9 1.3.9Z" class="cls-8"/><path d="M88.3 79.7c.8.2 1.3 1.4.9 2.8-.3 1.4-1.3 2.3-2.1 2.2-.8-.2-1.3-1.4-.9-2.8s1.3-2.3 2.1-2.2" class="cls-3"/><path d="M85.4 120.3c-.5 1-.7 2-.9 3.1h-.1c-.7-2.9-1.5-5.7-2.2-8.5v-.2c.9 0 1.9 0 2.7-.4.4-.2.7-1.4.9-2.7h.4c.1 0 .8.4 1.7.8v.2c1.9 2.5 1.6 2 1.3 3.3-1.7.1-3.2 3-3.9 4.5Z" class="cls-4"/><path d="M84.5 123.4v1.9c-.6-1.6-1.3-3.2-2.3-4.7-1-1.4-2.4-2.6-4.1-3s-5.7 0-6.7 1.5c-1.7-1.3-4.9-5-6-7.9-.6-1.6-.5-3 .6-3.8 3.4 3.5 11.3 7 16.2 7.3h.1v.2c.7 2.8 1.5 5.7 2.2 8.5h.1Z" class="cls-4"/><path d="M65 308c1.5 7-3.9 8.8-9.6 7.5-9-2-13.7-4.9-27.3-14.3-.9-.6-1.9-1.2-2.2-2.3-.2-.8.1-1.6.4-2.3.6-1.3 1.2-2.2 2.1-3.5 4.3.6 8.6 1.2 12.9 1.2 3.6 0 7-.3 9.2-.8 3.2 6.4 4.4 7.9 11.4 12 1.2.7 2.7 1.1 3 2.5Z" class="cls-5"/><path d="M65.1 86.8c-1.6 2.8-2.2 15.1-3.5 14.1-1.4-.9-2-9-1.7-12.3.3-2.7.7-2.6 1.5-5.5l.6-.2c.5 1.7 1.6 3.2 3 4Z" class="cls-8"/><path d="M67 58.8v.1c-1.1 1.5-1.9 2.7-2.7 3.8 1.2-1.7 2.3-3.3 2.7-3.8zm-5.4 18.6c-1.4 5.2-2 11.2-3.4 11.5-2.6-3.5-1.2-12.2.8-16.4 2.1-4.5 3.3-6.8 5.2-9.7-2.4 3.4-5.5 7.5-5.3 6.1.9-8.8 5.3-14 10.8-20.1 4.2-3.4 5.8-4.1 16.1-5.4 3-.4 10.9 2.5 15.3 6.7 8.7-4.4 15.3 3.6 17.9 9 1.6 3.5 3.1 11.1 3.3 13.8 0 .9-.5 17.7-1.6 17.1-2.2.3-.6-11.4-3-14-.5 6-1.6 13.8-1.9 20-.2 4.9-.9 9.3-1.7 9.4-2.3.9-.9-8.3-.3-17.9.2-2.9.2-5.8 0-8.4-1.4 8.7-4.7 19.2-6.7 17.3 1.2-4.1 2.8-10.7 3.3-16.9.7-8.8-1.1-16.6-10.3-14.3-9.7-7.1-17.3-3-19.2 1.4-2.7 6-5.1 22.4-6.8 21.3 0-4.3 1.1-13.2 2.3-17.3 1.5-4.8 1.7-7.1 3.9-9.8-6.8 5.8-9.8 22.5-12.9 21.1-.2-1.6 0-3.8.6-6.5-.7-1.5-2.7-1.9-4-1-1 .7-1.7 1.9-2 3.2h-.3Z" class="cls-8"/><path d="M56.2 139.9c0 .2-.2.4-.3.6-2.3 4.6-4.7 8.5-6 10-.5-.6-1.2-1.2-1.9-1.8-4.6-3.9-11.8-7.4-12.2-8.6v-.3c1-2.9 14.9-24.9 21.6-27.1 5.1-.8 3.4-.6 6.9-1.3l.9-.3c1.1 3 4.3 6.6 6 7.9 1-1.4 5-1.9 6.7-1.5s3.1 1.6 4.1 3 1.7 3 2.3 4.7v-1h.2c0 6.2.1 12.6.2 18.9-9.8.7-19.2-.2-28.7-3.3Z" class="cls-4"/><path d="M55.9 140.5c0-.2.2-.4.3-.6 9.5 3.1 18.8 4 28.7 3.3.2 17.5.1 35.2-2.6 52.1-10.6-.4-20-2.6-31.5-6.1-.3 0-.5-.2-.8-.2 1.7-5.1 1.5-5.8 2.4-11.1 1.4 1.1 2.9 2.2 4.5 3.4 1.3 2.1 8.1 7.8 10.5 6.8 2.1-.9 6.6-10 5.4-12.5-1.1-2.4-11.6-4.7-13.7-2.9-1.8-2.2-3.3-4.2-4.6-6.3 1.1-10.8 2.7-19.1 1.7-25.9h-.1Z" class="cls-6"/><path d="M35.8 140.1c.4 1.2 7.6 4.7 12.2 8.6-1.4 2.1-1.3 1.8-2.8 4 4.1 5.6 6.5 9.7 9.1 13.7 1.4 2.1 2.8 4.1 4.6 6.3 2-1.9 12.5.4 13.7 2.8 1.2 2.6-3.3 11.6-5.4 12.5-2.5 1.1-9.2-4.7-10.5-6.8-1.6-1.2-3.1-2.3-4.5-3.4-8.3-6.5-13.3-11.2-19-21-1.9-3.3-.5-10.1 2.5-17.1v.3Z" class="cls-7"/><path d="M60.2 130.9c-1.1 3-2.6 6.1-4 9.1 0 .2-.2.4-.3.6-2.3 4.6-4.7 8.5-6 10-.5-.6-1.2-1.2-1.9-1.8-4.6-3.9-11.8-7.4-12.2-8.6v-.3c1-2.9 14.9-24.9 21.6-27.1m41.1 40.7v-11.9c-.2-4.5-.6-9-1.3-13.6m-45 49.9c-.9 5.3-.6 6-2.4 11.1.3 0 .5.2.8.2 11.5 3.5 20.9 5.7 31.5 6.1 4.2.2 8.6 0 13.4-.5h.2c.5-14.3 2.3-27.8 2.7-41.4M56 140.6c1 6.8-.6 15.1-1.7 25.9" class="cls-1"/><path d="M35.8 139.8c-3 7-4.4 13.8-2.5 17.1 5.7 9.8 10.6 14.6 19 21 1.4 1.1 2.9 2.2 4.5 3.4M48 148.7c-1.4 2.1-1.3 1.8-2.8 4 4.1 5.6 6.5 9.7 9.1 13.7 1.4 2.1 2.8 4.1 4.6 6.3.1.2.3.3.4.5m26.9-61.6c.1 0 .8.3 1.7.7 2 .9 5.2 2.4 5.5 2.6 6.8 3.2 12.6 23.4 16.3 30.4-.7.5-1.3.9-1.9 1.3-3.2 2.3-5.1 4.1-8.7 5.1" class="cls-1"/><path d="M59 172.7c2-1.8 12.5.5 13.7 2.9 1.2 2.6-3.3 11.6-5.4 12.5-2.5 1.1-9.2-4.7-10.5-6.8m41.7-27.8c-.1 6.4 18.3 18.8 21.1 27.2m-11.2-33.9c4 5.9 11.5 18.7 18.1 23.7" class="cls-1"/><path d="M126.5 170.5c-1.2.3-7 6.8-6.7 10.2v.4c.4 1.8 1.6 3.3 3 4.4 2.9 2.1 4.6 1.2 7.5-1.1 2.8-2.3 6.5-5.9 5-9.4-1.4-3.5-5.4-5.6-8.8-4.4m-69.1-57.9c5.1-.8 3.4-.6 6.9-1.3m-13.7 78.1c-2.7 13-.6 34.2-2.7 45.8-2.4 13.4-10 29.3-21 57.7.5 0 1 .1 1.5.2 4.3.6 8.6 1.2 12.9 1.2 3.6 0 7-.3 9.2-.8.8-.2 1.5-.4 2-.7 1.7-.9 13.8-42.4 14.5-44.1 2.1-5.3 3.8-12.4 9.6-30.8 1.1-3.5 2.3-7.5 3.8-11.9" class="cls-1"/><path d="M76.8 218c5.4 5.6 12.1 14.6 15.9 21.4 2 3.6 1.4 20.2 1.3 26.5-.2 16.5 1.2 25.1 1.4 35.3.7.2 1.3.3 2.1.4 6.8.9 15.5-2.1 20.3-7.1.5-.5 1-1.1 1.4-1.7-.4-9.7-3.1-52.2-3.8-54.7-3.6-11.4-15.2-35.6-19.6-43.3" class="cls-2"/><path d="M86.1 107.9v.4c0 .7-.1 2-.3 3.2-.2 1.3-.5 2.5-.9 2.7-.8.4-1.8.4-2.7.4h-.1c-4.9-.3-12.8-3.8-16.2-7.3-1.2.8-1.2 2.2-.6 3.8 1.1 3 4.3 6.6 6 7.9m18-3.2c.3-1.3.6-.8-1.4-3.3M28.4 293.2c-.9 1.2-1.5 2.2-2.1 3.5-.3.7-.6 1.5-.4 2.3.2 1.1 1.3 1.7 2.2 2.3 13.6 9.4 18.3 12.2 27.3 14.3 5.7 1.3 11.2-.6 9.6-7.5-.3-1.4-1.8-1.8-3-2.5-7-4.1-8.2-5.6-11.4-12h0m46.8 8q-.3 2.4-.3 4.8c0 .7 0 1.5.5 2.1.6.8 1.8 1 2.8 1.1 8.8 1 18.3 4.5 27.1 4.1 2.9-.1 5.9-.5 8.3-2.1 2.3-1.7 3.4-5.1 1.6-7.2-.9-1-2.2-1.5-3.4-1.9-5.2-1.9-10.8-5.2-16.3-7.8" class="cls-1"/><path d="M71.2 119.1c1-1.4 5-1.9 6.7-1.5s3.1 1.6 4.1 3 1.7 3 2.3 4.7v-1.9c.1-1.1.4-2.1.9-3.1.8-1.6 2.2-4.4 3.9-4.5" class="cls-1"/><path d="M82.2 114.9c.7 2.8 1.5 5.7 2.2 8.5m12.2 18.8c.8-.2.9-.3 1.7-.5M56 139.9h.2c9.5 3.1 18.8 4 28.7 3.3.9 0 1.9-.1 2.8-.2h0" class="cls-1"/><path d="M84.6 124.4c0 6.2.1 12.6.2 18.9.2 17.5.1 35.2-2.6 52.1q0 0 0 0" class="cls-1"/><path d="M87.6 143c0-1.1.2-2.2.4-3.1.3-1.5 6.8-.9 8.6-1.3v9.9c0 1-1.9 5.8-2.9 5.9-.9.1-4.9-3.1-5.3-4-.7-2-1-4.9-.8-7.5Z" class="cls-2"/><path d="M91.9 109.4c-1.2.2-3.2.1-5.8-1-2.8-1.2-6.4-3.6-10.6-8.1" class="cls-1"/><path d="M110.3 79.5c-1.1 3.5-1.8 3.8-2.4 6-.3.9-.7 5.2-2.5 10-2.1 5.6-6 11.8-13.5 13.9m18.7-30.7c0 .3-.2.5-.2.7m-7.7-1.5-1.2 2.6c1.1 0 2.2.2 3.2.7.9.4 1.8 1.1 2.8 1.1.5 0-.9-3.5-1.3-3.9-1-.7-2.4-.6-3.6-.6Zm-10.1-3.6c-2.6-1.9-5.8-2-8.3 0-.4.3-.2 1.3.3 1.6s1.1.2 1.6.2c1.7 0 3.8.4 5.2 1.3.3.2.6.4 1 .4.5 0 .9-.4 1.1-.8s.4-1.4.4-1.9c-.2 0-1.2-.9-1.3-.9Zm7.4 16.6c.5 6.3-6.4 3.1-7.6 1.7m9.5-7c-.3 1.4 0 2.7.9 2.9.8.2 1.7-.9 2.1-2.3.3-1.4 0-2.7-.9-2.9-.8-.2-1.7.8-2.1 2.3m-15.7-3.7c-.3 1.4.1 2.6.9 2.8s1.8-.8 2.1-2.2-.1-2.6-.9-2.8-1.8.8-2.1 2.2m12.2 16.6c-4.3-.5-7.2-2.2-11-4.7l-.9-.6" class="cls-1"/><path d="M98.4 98.5c-2.6 7.6-11.2 7.2-11.1-4.5m-22.2-7.2c.8 4.7 1.9 17.9.8 20.6m2.1-32v-.1c-.7-1.5-2.7-1.9-4-1-1 .7-1.7 1.9-2 3.2-.1.4-.2.9-.2 1.3-.1 1.3 0 2.7.4 4 .5 1.7 1.6 3.2 3 4 1.1.6 2.7.6 3.3-.7m11.8-25.4c-2.2 2.7-2.4 5-3.9 9.8-1.2 4.1-2.4 13-2.3 17.3 1.7 1.1 4.2-15.2 6.8-21.3 1.9-4.4 9.5-8.5 19.2-1.4m-4.4-7.7c-2.4-1-10.6-1.9-14.4 2.1-.4.4-.7.8-1 1.1" class="cls-1"/><path d="M100.5 56.1c-1.3-2.4-11.7-4-14.4-3.2-6.1 1.8-9.2 3.1-13.5 10.8-2.3 4.1-3.8 8.2-4.6 11.7-.6 2.7-.8 5-.6 6.5 3.1 1.4 6.1-15.4 12.9-21.1h0" class="cls-1"/><path d="M67 58.7C74.7 48 89.1 44.8 101.1 53m-36.8 9.7c.7-1.1 1.6-2.3 2.7-3.8v-.1m-1.5 11.3c-1.8 1.1-3 4.1-3.9 7.3-1.4 5.2-2 11.2-3.4 11.5-2.6-3.5-1.2-12.2.8-16.4 2.1-4.5 3.3-6.8 5.2-9.7M117.6 76c2.4 2.7.8 14.3 3 14 1.1.6 1.7-16.2 1.6-17.1-.2-2.7-1.6-10.3-3.3-13.8-2.5-5.4-9.2-13.4-17.9-9" class="cls-1"/><path d="M103.7 55.6c6.4-2 12.9 4.5 14.1 12.6.3 1.6.1 4.4-.2 7.8-.5 6-1.6 13.8-1.9 20-.2 4.9-.9 9.3-1.7 9.4-2.3.9-.9-8.3-.3-17.9.2-2.9.2-5.8 0-8.4" class="cls-1"/><path d="M100.1 65.2c9.2-2.3 10.9 5.5 10.3 14.3h0c-.5 6.2-2.1 12.8-3.3 16.9 2 1.9 5.3-8.6 6.7-17.3.5-2.8.7-5.4.7-7.4 0-8.9-5.4-12.7-10-12.4" class="cls-1"/><path d="M105.6 95.1c0 .1 0 .3-.1.4-1.4 4.2-3.1 12.8-4.9 16.1 1.9 4.5 6.1-2.5 7.4-5.7 2-4.9 5.1-16.7 5.8-18.4m-12.7-37.3c-4.3-4.2-12.3-7.1-15.3-6.7-10.3 1.3-11.9 2-16.1 5.4m9.1 3.1c-5.8 3.5-6.2 4.4-8.6 8.1-1.4 2.2-3.3 6.2-4.7 10q-.75 1.95-1.2 3.6M61.5 83c-.8 2.8-1.2 2.8-1.5 5.5-.4 3.4.2 11.4 1.7 12.3 1.2 1 1.9-11.3 3.5-14.1" class="cls-1"/><path d="M67 58.7s0 0 0 0v.1c-.4.5-1.4 2.1-2.7 3.8v.1c-2.4 3.4-5.5 7.5-5.3 6.1.9-8.8 5.3-14 10.8-20.1" class="cls-1"/></svg>')}`;
export default image;