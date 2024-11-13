/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="asia" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;fill:none;stroke:#000}.cls-10,.cls-3,.cls-5,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-5{fill:#4a424a}.cls-6{fill:#232323}.cls-7{fill:#ad3720}.cls-8{fill:#ce8d76}.cls-10{fill:#f19200}</style></defs><path d="M125.6 169.8c-1.3.3-7.4 7.1-7.1 10.7h-.2c-.7-1.3-1.9-2.9-3.2-4.5h.6c1.7-4.8 4.4-7.5 6.6-9 1.1 1 2.1 2 3.2 2.8Z" class="cls-7"/><path d="M85 120.5c-.2 4.4-1.3 8.7-3.2 12.6l-.5-.2c.3-1.6.1-3.2 0-4.9s0-3.3.6-4.8c.6-1.3 1.7-2.5 3.1-2.7" class="cls-10"/><path d="M85 120.5c.1-2.5 0-5-.4-7.5 1.4.3 2.7.9 3.9 1.7 2 4.5 3.4 9.6 4 14.5h.2c1 6.9 1.5 13.6 1.7 20.3.5 16.2-.8 32-.2 49.6v.4c-12.7 3.8-31.7 1-48.6-5.3-.4-.1-.7-.3-1.1-.4 1.8-5.3 1.9-8.4 2.8-13.8.9.8 1.8 1.6 2.8 2.4h.1c.3-.6.7-1.3 1.2-2h.3c1.4 2.2 9.1 9.1 11.7 8 2.2-.9 6.9-10.4 5.6-13.1-1.2-2.4-12-4.9-14.2-3.1-.4-1-1.4-2.1-2.3-3.2s-1.9-2.1-2.4-2.9-1.1-1.6-1.6-2.5c0-7.4-.2-12.9-.7-17.8h.4c3.7-4.1 6.7-11.8 6.9-17.3s-.9-10.9-2-16.2c2.8-.7 4.5-1.1 6.9-1.5v.6c.3 1.7.6 3.4 1 4.9 2 6.9 6.9 12 11.4 17.4.4.4.7.9 1.1 1.3.6.6 1.1 1.1 1.8 1.4 1.2.6 2.7.8 3.8.2.9-.5 1.5-1.5 2-2.5.1-.3.3-.6.4-.9 1.9-4 2.9-8.3 3.2-12.6Zm52 182.3c1.9 2.2.8 5.7-1.7 7.5-2.4 1.7-5.6 2.1-8.6 2.2-9.3.4-19.2-3.2-28.4-4.3-1.1-.1-2.3-.3-3-1.1-.5-.6-.5-1.4-.5-2.2 0-1.7 0-3.3.3-5 7.1.9 16.3-2.2 21.2-7.4 5.7 2.8 11.6 6.2 17.1 8.2 1.3.5 2.7 1 3.6 2Z" class="cls-6"/><path d="M134.7 174.4c1.5 3.7-2.3 7.5-5.3 9.9s-4.8 3.4-7.8 1.1c-1.5-1.1-2.7-2.7-3.1-4.6v-.4c-.3-3.6 5.8-10.4 7.1-10.7 3.5-1.2 7.7 1 9.2 4.6Z" class="cls-8"/><path d="M122.3 166.9c-2.2 1.6-4.9 4.3-6.6 9h-.6c-7.2-8.7-20.8-20.8-20.7-26.4h-.1c-.2-6.7-.7-13.4-1.7-20.3h-.2c-.5-4.9-2-9.9-4-14.5 10.1 6.4 14.3 24.1 19.2 32v.2c.2.2.4.5.5.7 3.5 5.3 8.6 13.8 14.1 19.4Z" class="cls-10"/><path d="M72.3 222.5c-5.2 17-7 24-9.1 29.2-.7 1.9-13.5 38.1-15.2 39-.5.3-1.2.5-2.1.7-2.4.5-5.9.9-9.7.9-4.5 0-9-.6-13.5-1.2-.5 0-1-.1-1.6-.2 11.4-29.8 17.5-40.4 20-54.4 2.2-12.1 1.5-28.7 4.4-42.3 16.9 6.3 35.9 9.1 48.6 5.3v-.4c4.8 8.3 16 29.9 19.7 41.6.8 2.6 3.6 39.9 4 50.1q-.6.9-1.5 1.8c-5 5.2-14.1 8.3-21.2 7.4-.7 0-1.5-.2-2.2-.4-.2-10.8-1.7-19.7-1.5-37 0-6.6-3.7-16.3-5.7-20-3.8-6.9-7.9-14.2-13.4-19.9Z" style="stroke-width:0;fill:#605d96"/><path d="M109.4 63.8c1.5 1 2.8 1.9 3.4 2.6 2.7 3.4 1.6 6.4.4 10.6-.3 1-.6 2-1.4 2.7-.5.4-1.4.6-2 .3-.2 0-.4-.2-.6-.5C103.6 73 95 69.1 86.4 69.3c-4.8.1-9.6 1.5-13.8 3.9-2.1 1.2-4.1 2.7-5.8 4.4-1.4 1.3-2.9 4.4-4.3 1.4-.7-1.6-3-2-4.4-1.1s-2.2 2.7-2.4 4.5c-.4 3.1 1 6.5 3.7 7.9.5.2 1 .4 1.5.4.3 1.5.6 3.8.8 6.3h-.4c-6.6-1-10-6.7-10.9-13.3-.6-4.9.7-8.3 2.9-11 1.7-2.1 4-3.9 6.3-5.6 5.3-4 13.2-7.4 19.8-8.3 9.6-1.3 12.4-1.7 21.8.9 1.6.5 5.5 2.4 8.4 4.2Z" class="cls-5"/><path d="M60.7 90.8c-.5 0-1.1-.1-1.5-.4-2.7-1.3-4-4.8-3.7-7.9.2-1.8 1-3.6 2.4-4.5s3.7-.5 4.4 1.1c1.3 3 2.9 0 4.3-1.4 1.7-1.7 3.7-3.2 5.8-4.4 4.2-2.4 9-3.8 13.8-3.9 8.6-.2 17.2 3.7 22.8 10.2.1.2.3.3.6.4v.2c-1.5 4.2-3.3 7.1-4 9.4-.6 1.9-.6 9.9-8.6 18 0 0-4.6 5.1-8.8 5.7-.7 0-2 0-3.8-.6-.6-.2-1.2-.4-1.9-.6 1.1 1.5-.1 7.9-4.4 7.7-6.1-.4-14-5.9-17.5-9.6l.6-.3c.8-1.9.7-7.9.2-13-.2-2.5-.5-4.7-.8-6.2ZM82 98.9l-.2.3c-1.8 4.8 9.3 12 12.1 4.4-4.7-.5-7.8-2.2-11.9-4.7m21.1-10.5c.4-1.4 0-2.7-.9-2.9s-1.9.8-2.2 2.3c-.4 1.4 0 2.7.9 2.9s1.9-.8 2.2-2.3m-16.9-3.6c.3-1.4-.1-2.6-1-2.8s-1.9.8-2.3 2.2c-.3 1.4.1 2.6 1 2.8s1.9-.8 2.3-2.2" class="cls-8"/><path d="M109.4 63.8c-2.9-1.9-6.7-3.8-8.4-4.2-9.3-2.6-12.2-2.2-21.8-.9-6.6.9-14.4 4.3-19.8 8.3-2.3 1.7-4.6 3.5-6.3 5.6.7-6.8 6.3-19.1 12-22.8 5.8-3.7 14.1-3.5 20.8-4.5 5.7-.8 11.6 1.8 16.1 5.4 4.7 3.6 6.3 7.3 7.2 13.1Z" class="cls-5"/><path d="M102.2 85.6c.9.2 1.3 1.4.9 2.9s-1.4 2.4-2.2 2.3c-.9-.2-1.3-1.4-.9-2.9.4-1.4 1.3-2.4 2.2-2.3" class="cls-3"/><path d="M93.9 103.6c-2.8 7.5-13.9.4-12.1-4.4l.2-.3c4.1 2.6 7.2 4.3 11.9 4.7" style="stroke-width:0;fill:#fff"/><path d="M84.6 112.9c.4 2.5.6 5.1.4 7.6-1.4.3-2.5 1.4-3.1 2.7-.6 1.5-.7 3.2-.6 4.8s.3 3.3 0 4.9l.5.2c-.1.3-.3.6-.4.9-.5 1-1.1 2-2 2.5-1.2.7-2.7.5-3.8-.2-.7-.4-1.3-.9-1.8-1.4-.1-3.4-.3-6.8-.4-10.2 0-.6 0-1.2-.4-1.8-.4-.8-1.4-1.1-2.2-1.4-3.2-1.3-7-2.8-9.4-5.3h-.1c-.5-1.5-.8-3.2-.9-4.9v-.6h.1l.3-.3c3.6 3.7 11.5 9.2 17.5 9.6 4.2.3 5.4-6.2 4.4-7.7.7.2 1.3.4 1.9.6" class="cls-7"/><path d="M85.2 82c.9.2 1.4 1.4 1 2.8-.3 1.4-1.4 2.3-2.3 2.2-.9-.2-1.4-1.4-1-2.8.3-1.4 1.4-2.3 2.3-2.2" class="cls-3"/><path d="M73.3 124.6c.1 3.4.3 6.8.4 10.2-.4-.4-.8-.8-1.1-1.2-4.5-5.3-9.3-10.5-11.4-17.4h.1c2.4 2.4 6.2 4 9.4 5.2.8.3 1.7.7 2.2 1.4.3.5.3 1.2.4 1.8" class="cls-10"/><path d="M69.1 175.1c1.3 2.7-3.5 12.2-5.6 13.1-2.6 1.1-10.3-5.7-11.7-7.9h-.3c1.6-2.5 3.9-5.8 3.6-7.6 0-.2-.1-.5-.2-.7 2.3-1.8 13.1.6 14.2 3.1" class="cls-8"/><path d="M61 306.6c1.6 7.3-4.1 9.2-10.1 7.9-9.4-2.1-14.3-5.1-28.5-15-.9-.7-2-1.3-2.3-2.4-.2-.8.1-1.6.5-2.4.6-1.4 1.2-2.4 2.2-3.6 4.5.6 9 1.2 13.5 1.2 3.7 0 7.3-.3 9.7-.9 3.4 6.7 4.7 8.3 12 12.5 1.3.7 2.9 1.2 3.2 2.6Z" class="cls-6"/><path d="M54.9 172c.1.3.2.5.2.7.3 1.7-2 5.1-3.6 7.5-.5.7-.9 1.4-1.2 1.9h-.1c-1-.7-1.9-1.5-2.8-2.3-.4-.4-.8-.7-1.2-1.1l.2-.2c2.9-2.6 5.1-6 6.3-9.7.9 1.1 1.9 2.2 2.3 3.2Z" class="cls-7"/><path d="M47.4 140.6c-1.1 1.9-2.1 3.7-4.4 7.1-.9 1.4-1.6 2.3-2.5 3l-.2.5c3 4 5.6 8.2 8.3 12.4.5.8 1.1 1.6 1.6 2.5.5.8 1.5 1.8 2.4 2.9-1.2 3.7-3.4 7.1-6.3 9.7l-.2.2c-8-7.2-12.3-12.9-18.2-23.3-2-3.4-.5-10.6 2.6-17.9h.1c.4-2.3 11.1-22.2 18.2-24.6q2.7-.6 4.5-.9c1.1 5.5 2.2 10.9 2 16.4s-3.2 13.2-6.9 17.2H48c-.2-1.7-.3-3.4-.5-5.1Z" class="cls-10"/><path d="M30.6 137.8v-.2c.4-2.3 11.1-22.3 18.2-24.7m2.2 21.7c-1.7 2.7-2.7 4.4-3.6 5.9-1.1 1.9-2.1 3.7-4.4 7.1-.9 1.4-1.6 2.3-2.5 3m6.9 29.1v.2c-.9 5.5-1.1 8.5-2.9 13.8.4.1.7.3 1.1.4 16.9 6.3 35.9 9.1 48.6 5.3v-.4c-.6-17.6.7-33.4.2-49.6-.2-6.7-.7-13.4-1.7-20.3" class="cls-1"/><path d="M47.4 140.2v.3c.2 1.7.4 3.4.5 5.1.5 5 .7 10.4.7 17.8m-18.1-25.8c-3.1 7.3-4.6 14.5-2.6 17.9 6 10.4 10.2 16.1 18.2 23.3.4.4.8.7 1.2 1.1.9.8 1.8 1.6 2.8 2.4h0" class="cls-1"/><path d="M40.3 151.2c3 4 5.6 8.2 8.3 12.4.5.8 1.1 1.6 1.6 2.5.5.8 1.5 1.8 2.4 2.9s1.9 2.2 2.3 3.2c.1.3.2.5.2.7.3 1.7-2 5.1-3.6 7.5-.5.7-.9 1.4-1.2 1.9m33.5-69.6c.3 0 .5.1.8.2q0 0 0 0c1.4.4 2.7 1 3.9 1.7 10.1 6.4 14.3 24.1 19.2 32" class="cls-1"/><path d="M54.8 172.1s0 0 0 0c2.3-1.8 13.1.6 14.2 3.1 1.3 2.7-3.5 12.2-5.6 13.1-2.6 1.1-10.3-5.7-11.7-7.9m42.8-30.9c-.1 5.7 13.5 17.8 20.7 26.6 1.3 1.6 2.4 3.1 3.2 4.5m-10.2-33c3.5 5.3 8.6 13.8 14.1 19.4 1.1 1.1 2.1 2 3.2 2.9m-17.7-23c.2.2.3.5.5.7" class="cls-1"/><path d="M125.6 169.8c-1.3.3-7.4 7.1-7.1 10.7v.4c.4 1.9 1.6 3.5 3.1 4.6 3 2.2 4.9 1.3 7.8-1.1 3-2.4 6.8-6.2 5.3-9.9s-5.6-5.8-9.2-4.6M48.8 113q2.7-.6 4.5-.9c2.8-.6 4.5-.9 6.9-1.4h.3M45.6 194v.2c-2.8 13.6-2.2 30.2-4.4 42.3-2.5 14-8.6 24.6-20 54.4.5 0 1 .1 1.6.2 4.5.6 9 1.2 13.5 1.2 3.7 0 7.3-.3 9.7-.9.9-.2 1.6-.4 2.1-.7 1.8-1 14.5-37.2 15.2-39 2.1-5.2 3.8-12.2 9.1-29.2 1.4-4.4 3-9.6 4.9-15.5" class="cls-1"/><path d="m71.9 222 .5.5c5.5 5.7 9.5 13 13.4 19.9 2 3.7 5.8 13.4 5.7 20-.3 17.3 1.3 26.3 1.5 37 .7.2 1.4.3 2.2.4 7.1.9 16.3-2.2 21.2-7.4l1.5-1.8c-.4-10.2-3.2-47.5-4-50.1-3.7-11.7-14.8-33.3-19.7-41.6-.1-.2-.2-.3-.3-.5" style="fill:none;stroke:#000;stroke-miterlimit:10"/><path d="m82.5 112.1.1.1c1.1 1.5-.1 7.9-4.4 7.7-6.1-.4-14-5.9-17.5-9.6M22.8 291.1c-.9 1.3-1.6 2.3-2.2 3.6-.3.8-.6 1.6-.5 2.4.2 1.1 1.3 1.8 2.3 2.4 14.2 9.8 19.1 12.8 28.5 15 6 1.4 11.7-.6 10.1-7.9s-1.9-1.9-3.2-2.6c-7.3-4.2-8.6-5.8-12-12.5m49.3 8.4c-.2 1.7-.3 3.3-.3 5 0 .8 0 1.6.5 2.2.6.8 1.9 1 3 1.1 9.2 1 19.1 4.7 28.4 4.3 3-.1 6.2-.5 8.6-2.2s3.6-5.3 1.7-7.5c-.9-1-2.3-1.5-3.6-2-5.5-2-11.4-5.4-17.1-8.2" class="cls-1"/><path d="M88.3 113.5c-.7 0-2 0-3.8-.6-.6-.2-1.2-.4-1.9-.6-4.8-1.7-11.7-5.2-17.4-10.9m44.4-21.2c-1.4 4.2-3.2 7.1-3.9 9.4-.6 1.9-.6 9.9-8.6 18 0 0-4.6 5.1-8.8 5.7m17.7-30c-1.2-1.7-5.5-3.4-7-2.4m-18.2-4.2c3.9-1 9.2.5 10.5 2.2m6.3 17.7c-.8 3.1-7.2 2.7-8.4 1.3M100 87.8c-.4 1.4 0 2.7.9 2.9s1.9-.8 2.2-2.3 0-2.7-.9-2.9-1.9.8-2.2 2.3m-17.1-3.6c-.3 1.4.1 2.6 1 2.8s1.9-.8 2.3-2.2c.3-1.4-.1-2.6-1-2.8s-1.9.8-2.3 2.2m11 19.4c-4.7-.5-7.8-2.2-11.9-4.7l-.9-.6" class="cls-1"/><path d="M93.9 103.6c-2.8 7.5-13.9.4-12.1-4.4m-21.1-8.4c.3 1.5.6 3.8.8 6.2.5 5.1.7 11.2-.2 13m1.5-20.3c-.4.8-1.2 1.1-2.1 1-.5 0-1.1-.1-1.5-.4-2.7-1.3-4-4.8-3.7-7.9.2-1.8 1-3.6 2.4-4.5s3.7-.5 4.4 1.1c1.3 3 2.9 0 4.3-1.4 1.7-1.7 3.7-3.2 5.8-4.4 4.2-2.4 9-3.8 13.8-3.9 8.6-.2 17.2 3.7 22.8 10.2m-48.7 31.8c.1 1.7.4 3.4.9 4.9 2 6.9 6.9 12 11.4 17.4.4.4.7.9 1.1 1.3.6.6 1.1 1.1 1.8 1.4 1.2.6 2.7.8 3.8.2.9-.5 1.5-1.5 2-2.5.1-.3.3-.6.4-.9 1.9-4 2.9-8.3 3.2-12.6.1-2.5 0-5-.4-7.5m-31.2-.8c1.1 5.4 2.2 10.8 2 16.2s-3.2 13.2-6.9 17.2m40.1-31s0 0 0 0c2 4.5 3.4 9.6 4 14.5q0 0 0 0m-39.8 39.4c0 .1 0 .2-.1.3-1.2 3.7-3.4 7.1-6.3 9.7" class="cls-1"/><path d="M61.3 116.2c2.4 2.5 6.2 4 9.4 5.3.8.3 1.7.7 2.2 1.4.3.5.3 1.2.4 1.8.1 3.4.3 6.8.4 10.2m11.9-14.5H85c-1.4.3-2.5 1.4-3.1 2.7-.6 1.5-.7 3.2-.6 4.8s.3 3.3 0 4.9m41 34.2c-2.2 1.5-4.9 4.2-6.6 8.9M109 79.4v.2c.1.2.3.4.6.5.6.3 1.4.1 2-.3.8-.6 1.1-1.7 1.4-2.7 1.2-4.2 2.3-7.2-.4-10.6-.6-.7-1.8-1.7-3.4-2.6-2.9-1.9-6.7-3.8-8.4-4.2-9.3-2.6-12.2-2.2-21.8-.9-6.6.9-14.4 4.3-19.8 8.3-2.3 1.7-4.6 3.5-6.3 5.6-2.2 2.8-3.5 6.2-2.9 11 .9 6.6 4.3 12.4 10.9 13.3" class="cls-1"/><path d="M53.2 72.8v-.1c.7-6.8 6.3-19.1 12-22.8 5.8-3.7 14.1-3.5 20.8-4.5 5.7-.8 11.6 1.8 16.1 5.4 4.7 3.6 6.3 7.3 7.2 13.1q0 0 0 0" class="cls-1"/></svg>')}`;
export default image;