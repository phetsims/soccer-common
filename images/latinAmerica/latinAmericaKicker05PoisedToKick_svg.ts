/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;fill:none;stroke:#000}.cls-3,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-5{fill:#241b1b}.cls-6{fill:#bc8c75}.cls-7{fill:#64a9d2}.cls-8{fill:#fff}.cls-9{fill:#ecc95a}</style></defs><path d="M136.1 303.8c1.9 2.2.7 5.7-1.7 7.5-2.4 1.7-5.6 2.1-8.6 2.2-9.2.4-19.1-3.2-28.2-4.2-1.1-.1-2.3-.3-3-1.1-.5-.6-.5-1.4-.5-2.2 0-1.7 0-3.3.3-5 7.1.9 16.2-2.2 21.1-7.4 5.7 2.8 11.5 6.1 17 8.2 1.3.5 2.7 1 3.6 2" class="cls-8"/><path d="M133.9 169.1c1.5 3.6-2.3 7.4-5.2 9.8s-4.7 3.4-7.8 1.1c-1.5-1.1-2.6-2.7-3.1-4.5v-.4c-.3-3.6 5.8-10.4 7-10.7 3.5-1.2 7.6 1 9.1 4.6Z" class="cls-6"/><path d="M71.9 216.9c-5.2 16.9-6.9 23.8-9 29-.7 1.8-13.4 45-15.1 46-.5.3-1.2.5-2.1.7-2.4.5-5.9.8-9.6.8-4.5 0-9-.6-13.4-1.2l-1.6-.2c11.4-29.6 17.4-47.3 19.9-61.2 2.2-12 1.5-28.5 4.3-42 2.5.9 5 1.8 7.5 2.5 3.1.9 6.2 1.7 9.4 2.4 3.4.7 6.8 1.3 10.2 1.6 2.9.3 5.7.5 8.4.4 2.9 0 5.6-.2 8.2-.7 1.6-.3 3.2-.6 4.6-1.1v-.4c4.8 8.3 15.9 29.7 19.5 41.4.8 2.6 3.6 46.8 4 56.9q-.6.9-1.5 1.8c-4.9 5.2-14 8.2-21.1 7.4-.7 0-1.5-.2-2.2-.4-.2-10.7-1.7-19.6-1.5-36.8.1-6.5-3.7-23.4-5.7-27.1-3.8-6.9-7.9-14.1-13.3-19.8Z" style="stroke-width:0;fill:#4e7495"/><path d="M124.8 164.5c-1.2.3-7.3 7.1-7 10.7h-.2c-2.5-7.4-16.6-18.3-20.8-25.5l.4-.2c2.5-4.5 6-6.4 10.1-7.6 4.1 6.1 10.7 17.5 17.6 22.7Z" class="cls-9"/><path d="M115.7 56.2c3.2 14.9-5.3 30.8-14.7 40.5-1.1 1.5-5.4 5.2-9.4 7-1.9.9-2.1.7-3.7-.6 4.1-1.1 8.4-6.2 8.4-6.2 8-8.7 7.7-14.9 8.3-17.2.7 2.7 1 5.9 1 7.3 2.5-1.7 4.8-7.4 5.8-10.2 3.1-8.8 5.1-13.5 4.2-20.5Z" class="cls-5"/><path d="M65.6 92.2c-.2 3-.1 5.3.2 6.7-.3-.1-.7-.3-1.1-.6-4.7-2.7-12.9-10.8-14.8-14.8-3.4-7.2-1.8-19.7-.9-27.6.9-8 8.3-17.1 14.9-21.5 6.9-4.5 12-5 20.3-4.8 5.5.1 12.6 3.6 17.7 5.4 5.2 1.8 10.5 8.8 12.1 14.1.8 2.6 1.3 4.9 1.6 7 .9 7-1.1 11.7-4.2 20.5-1 2.9-3.3 8.5-5.8 10.2 0-1.4-.3-4.6-1-7.3-.2-.8-.5-1.6-.8-2.2s-.7-1.2-1.3-1.8q-1.05-1.2-2.4-2.4c-1.9-1.6-3.9-3.2-5.4-4.6-1.9-1.8-19-19-17.3-21-5.7 6.7-11.1 31.6-11.9 44.6Z" class="cls-5"/><path d="M107.2 141.8c-4 1.2-7.5 3.1-10.1 7.6l-.4.2q-1.2-1.95-1.2-3.6h-.1c.3-8.7.1-17.3-1.2-25.7v-.3c-1-6.3-4.6-9.1-6.7-9.3.8-1.6 1.1-3.3.7-5.1l.2-.5c12.7 6.6 14.2 29.4 20 36.3-.4.1-.9.2-1.3.4Z" class="cls-7"/><path d="m80.8 87.2-.2.3c-1.6 8.4 9.6 13.2 12.4 4.9-4.8-.5-8-2.4-12.3-5.2Zm7.1 15.8c-.2 0-.4.1-.6.1h-1.7c-.3 0-.6 0-.9-.1-4.2-.7-12-3.5-19.1-10.8.8-13.1 6.2-37.9 11.9-44.6-1.7 2 15.3 19.2 17.3 21 1.5 1.4 3.6 2.9 5.4 4.6-.4.4-.7 1.1-.9 1.8-.4 1.6 0 3 1 3.1s1.9-.9 2.3-2.5c.5.6.9 1.2 1.3 1.8.3.6.6 1.4.8 2.2-.6 2.3-.3 8.5-8.3 17.2 0 0-4.3 5.1-8.4 6.2Zm.6-38.2c.1-.4.1-1.5.2-2-1.3-1.9-5.2-2.7-9.2-1.5-.5 1-.8 2-.4 3.1 3.1-.6 6.3-.5 9.3.4Zm-3.4 6.9c.4-1.5-.1-2.9-1-3.1s-2 .9-2.3 2.4c-.4 1.5.1 2.9 1.1 3.1.9.2 2-.9 2.3-2.4Z" class="cls-6"/><path d="M102.6 75.6c-.4 1.6-1.4 2.7-2.3 2.5s-1.3-1.6-1-3.1c.2-.7.5-1.4.9-1.8q1.35 1.2 2.4 2.4" class="cls-3"/><path d="M93.5 193.6v.4c-1.5.4-3 .8-4.6 1.1v-.4c1.1-29.4 4-67.4-1.8-83.1.2-.3.3-.5.5-.8 2.2.3 5.7 3 6.7 9.3v.3c1.3 8.4 1.4 17 1.1 25.7-.5 15.7-2.4 31.6-1.9 47.5" class="cls-9"/><path d="M88.9 194.7v.4c-2.5.4-5.3.6-8.2.7v-.4c2.6-26 3.6-54.2.5-79.3v-.3c.8-.2 1.6-.5 2.3-.9 1.4-.7 2.7-1.9 3.5-3.2 5.9 15.7 2.9 53.7 1.8 83.1Z" class="cls-7"/><path d="M72.9 115.4c-3.9-1.1-7.6-3.4-9.9-6.6-.4-.6-.8-1.2-1.2-1.9-.6-1.2-1.1-2.5-1.3-3.9v-.3c1.4-.3 2.7-.5 3.9-.7l.3-.3c3.5 3.7 6.6 9.5 14.8 9.1 3.7-.2 5.1-6.3 5.1-7.3v-.3c.4 0 .7 0 1 .1v.9c1 .3 2 .7 2.9 1.2l-.2.5c.4 1.7.1 3.5-.7 5.1-.1.3-.3.5-.5.8-.9 1.4-2.1 2.5-3.5 3.2q-1.2.6-2.4.9c-2.7.7-5.6.4-8.3-.3Z" class="cls-9"/><path d="M93.1 92.3c-2.9 8.3-14.1 3.5-12.4-4.9l.2-.3c4.2 2.8 7.4 4.7 12.3 5.2Z" class="cls-8"/><path d="M88.7 62.8c-.1.4-.1 1.5-.2 2-3-.9-6.2-1-9.3-.4-.4-1-.1-2.1.4-3.1 4-1.1 7.8-.4 9.2 1.5Z" class="cls-5"/><path d="M84.6 103.1v.3c0 1-1.4 7.1-5.1 7.3-8.2.5-11.3-5.4-14.8-9.1.6-1.4.3.2 0-3.3.4.2.8.4 1.1.6-.4-1.4-.4-3.8-.2-6.7 7.1 7.4 14.8 10.2 19.1 10.8Z" class="cls-6"/><path d="M81.2 116c3.1 25.1 2.1 53.3-.5 79.3v.4c-2.7 0-5.5-.1-8.4-.4v-.3c3.3-26.3 3-53.4.5-79.6 2.7.7 5.6 1 8.3.3v.3Z" class="cls-9"/><path d="M84 68.6c.9.2 1.4 1.6 1 3.1s-1.4 2.6-2.3 2.4-1.4-1.6-1.1-3.1c.4-1.5 1.4-2.6 2.3-2.4Z" class="cls-3"/><path d="M72.9 115.4c2.5 26.2 2.7 53.3-.5 79.6v.3c-3.3-.3-6.8-.9-10.2-1.6v-.2c.3-3.3 1.2-7.7 1.5-11.1 2.3-2.1 6.2-10.2 5-12.6-.4-.9-2.1-1.8-4.2-2.4v-.2c1.7-19.2.9-39.3-1.6-58.4 2.3 3.2 6 5.5 9.9 6.6Z" class="cls-7"/><path d="M50.4 174.2c-.5-3.1.6-6.5 2.9-8.7.3.4.7.9 1.1 1.3.2-.2.4-.4.7-.5 1.9-.7 6.1 0 9.3 1 2.1.7 3.7 1.6 4.2 2.4 1.2 2.4-2.7 10.6-5 12.6-.2.2-.4.3-.6.4-1.9.8-6.3-2.2-9-4.8-.9-.9-1.7-1.7-2-2.3-.6-.5-1.2-.9-1.8-1.4v-.2Z" class="cls-6"/><path d="M60.7 307.6c1.6 7.2-4.1 9.2-10 7.8-9.3-2.1-14.3-5.1-28.4-14.9-.9-.6-2-1.3-2.3-2.4-.2-.8.1-1.6.4-2.4.6-1.4 1.2-2.3 2.2-3.6 4.4.6 8.9 1.2 13.4 1.2 3.7 0 7.2-.3 9.6-.8 3.3 6.6 4.6 8.2 11.9 12.5 1.2.7 2.8 1.2 3.2 2.6" class="cls-8"/><path d="M62.9 108.8c2.5 19.1 3.3 39.2 1.7 58.4v.2c-3.3-1.1-7.5-1.6-9.4-1 1.3-13.9 1-28-.7-41.9 0-.1.2-.2.2-.4 1.6-2.5 3.7-5.4 3.8-8.2 0-1.8-.3-3.5 0-5.3.3-1.7 1.4-3.6 3.2-3.7h.2q.45.9 1.2 1.8Zm.2 74c.2 0 .4-.2.6-.4-.3 3.4-1.2 7.8-1.5 11.1v.2c-3.1-.7-6.3-1.5-9.4-2.4v-.5c.7-4.2.7-8.5 1.3-12.7 2.7 2.5 7.1 5.6 9 4.8Z" class="cls-9"/><path d="M30.3 132.5c.6-2.3 13.2-25.9 20.5-28.2 3.6-.6 6.9-1.1 9.8-1.7v.3c.2 1.4.7 2.7 1.3 3.9h-.2c-1.8.2-2.9 2.1-3.2 3.8s.1 3.5 0 5.3c0 2.9-2.2 5.7-3.8 8.1 0 .2-.2.3-.2.5-1.8 2.9-3.7 5.7-5.5 8.6-2 3.1-4.1 6.3-6.2 9.4-.2.3-.3.5-.5.7-4.6-3.6-8.4-7.1-13.2-5.9l-.5-.2c.5-1.5 1.1-3.1 1.7-4.6" class="cls-7"/><path d="M53.3 165.6c-1.8-2.3-3.6-4.7-5.3-7.1l.3-.2c0-10.1.6-18.2.6-25.1 1.9-2.9 3.7-5.7 5.5-8.6 1.7 13.9 2 28 .7 41.9-.3.1-.5.2-.7.4-.4-.4-.7-.8-1.1-1.2Zm-8 23.1c-.4-.1-.7-.3-1.1-.4 1.8-5.3 2.3-10.5 3.2-16.1.9.7 1.9 1.4 2.9 2.2.6.4 1.2.9 1.8 1.4.4.6 1.1 1.4 2 2.3-.6 4.2-.6 8.5-1.2 12.7v.5c-2.7-.8-5.2-1.6-7.6-2.5Z" class="cls-7"/><path d="M39.4 146.1c3.3 4.5 6 8.5 8.7 12.3 1.7 2.4 3.4 4.8 5.3 7.1-2.3 2.2-3.4 5.6-2.9 8.7v.2c-1.1-.8-2.1-1.5-3-2.2-8.7-6.7-13.8-11.7-19.7-21.9-1.6-2.7-1-7.6.8-13.2l.5.2c4.8-1.2 8.6 2.4 13.2 5.9-1 1.4-1.8 2.1-2.8 2.9Z" class="cls-9"/><path d="M30.2 132.5c.6-2.3 13.2-25.9 20.5-28.2m4 19.9c0 .1-.2.2-.2.4-1.8 2.9-3.7 5.7-5.5 8.6-2 3.1-4.1 6.3-6.2 9.4-.2.3-.3.5-.5.7-1 1.4-1.8 2.1-2.8 2.9q0 0 0 0m7.9 26c-.9 5.6-1.4 10.7-3.2 16.1.3.1.7.3 1.1.4 2.5.9 5 1.8 7.5 2.5 3.1.9 6.2 1.7 9.4 2.4 3.4.7 6.8 1.3 10.2 1.6 2.9.3 5.7.5 8.4.4 2.9 0 5.6-.2 8.2-.7 1.6-.3 3.2-.6 4.6-1.1v-.4c-.5-15.9 1.4-31.9 1.9-47.5.3-8.7.1-17.3-1.2-25.7" class="cls-1"/><path d="M48.9 133.1c0 6.9-.5 15.1-.6 25.1m-18-25.7s0 0 0 0c-.7 1.6-1.2 3.1-1.7 4.6-1.8 5.5-2.4 10.5-.8 13.2 5.9 10.2 11.1 15.2 19.7 21.9h0c.9.7 1.9 1.4 2.9 2.2.6.4 1.2.9 1.8 1.4M38 144.2c.5.6.9 1.3 1.4 1.9 3.3 4.5 6 8.5 8.7 12.3 1.7 2.4 3.4 4.8 5.3 7.1.3.4.7.9 1.1 1.3.1.2.3.3.4.5M85.5 104q1.65.45 3 1.2c12.7 6.6 14.2 29.4 20 36.3-.4.1-.9.2-1.3.4-4 1.2-7.5 3.1-10.1 7.6" class="cls-1"/><path d="M54.5 166.8c.2-.2.4-.3.7-.4 1.9-.7 6.1 0 9.3 1 2.1.7 3.7 1.6 4.2 2.4 1.2 2.4-2.7 10.6-5 12.6-.2.2-.4.3-.6.4-1.9.8-6.3-2.2-9-4.8-.9-.9-1.7-1.7-2-2.3m43.5-29.6c0 1 .4 2.3 1.2 3.6 4.2 7.2 18.3 18.1 20.8 25.5m-10.5-33.5s0 .1.1.2c4.1 6.1 10.7 17.5 17.6 22.7" class="cls-1"/><path d="M124.8 164.5c-1.2.3-7.3 7.1-7 10.7v.4c.4 1.9 1.6 3.5 3.1 4.5 3 2.2 4.8 1.3 7.8-1.1 2.9-2.4 6.7-6.2 5.2-9.8s-5.6-5.8-9.1-4.6m-74.1-60.3c3.6-.6 6.9-1.1 9.8-1.7 1.4-.3 2.8-.5 4-.7m-19.2 86.6v.2c-2.8 13.5-2.2 30-4.3 42-2.5 13.9-8.5 31.6-19.9 61.2l1.6.2c4.4.6 8.9 1.2 13.4 1.2 3.7 0 7.2-.3 9.6-.8.9-.2 1.6-.4 2.1-.7 1.8-.9 14.4-44.1 15.1-46 2.1-5.2 3.8-12.1 9-29 1.4-4.4 3-9.5 4.9-15.4" class="cls-1"/><path d="m71.4 216.4.5.5c5.4 5.7 9.5 12.9 13.3 19.8 2 3.7 5.8 20.5 5.7 27.1-.3 17.2 1.3 26.1 1.5 36.8.7.2 1.4.3 2.2.4 7.1.9 16.2-2.2 21.1-7.4l1.5-1.8c-.4-10.1-3.2-54.4-4-56.9-3.7-11.6-14.7-33.1-19.5-41.4-.1-.2-.2-.3-.3-.5" style="fill:none;stroke:#000;stroke-miterlimit:10"/><path d="M84.6 103.4c0 1-1.4 7.1-5.1 7.3-8.2.5-11.3-5.4-14.8-9.1M22.6 292.2c-.9 1.3-1.6 2.2-2.2 3.6-.3.8-.6 1.6-.4 2.4.2 1.1 1.3 1.7 2.3 2.4 14.1 9.8 19 12.8 28.4 14.9 5.9 1.3 11.6-.6 10-7.8s-1.9-1.9-3.2-2.6c-7.3-4.2-8.5-5.8-11.9-12.5m48.9 8.4c-.2 1.7-.3 3.3-.3 5 0 .8 0 1.6.5 2.2.6.8 1.9 1 3 1.1 9.1 1 19 4.6 28.2 4.2 3-.1 6.2-.5 8.6-2.2s3.6-5.3 1.7-7.5c-.9-1-2.3-1.5-3.6-2-5.5-2-11.3-5.4-17-8.2M42.3 143.3s0 0 0 0c-4.6-3.6-8.4-7.1-13.2-5.9" class="cls-1"/><path d="M60.5 102.9c.2 1.4.6 2.7 1.3 3.9.3.7.7 1.3 1.2 1.9 2.3 3.2 6 5.5 9.9 6.6q0 0 0 0c2.7.7 5.6 1 8.3.3q1.2-.3 2.4-.9c1.4-.7 2.7-1.9 3.5-3.2.2-.3.3-.5.5-.8.8-1.6 1.1-3.3.7-5.1M61.6 107c-1.8.2-2.9 2-3.2 3.7s.1 3.5 0 5.3c0 2.9-2.2 5.7-3.8 8.1" class="cls-1"/><path d="M87.3 110.7h.3c2.2.3 5.7 3 6.7 9.3m-39.8 4.4s0 0 0 0c1.7 13.9 2 28 .7 41.9v.8m-1.1 10.8v.1c-.6 4.2-.6 8.5-1.2 12.7m10-81.9c2.5 19.1 3.3 39.2 1.7 58.4m-.9 14.9v.3c-.3 3.4-1.2 7.8-1.5 11.1m10.6-78.3v.2c2.5 26.2 2.7 53.3-.5 79.6m8.9-79c3.1 25.1 2.1 53.3-.5 79.3m6.3-84v.2c6 15.7 3 53.7 1.9 83.1m-35.6-29.1s0 0 0 0c-2.3 2.2-3.4 5.6-2.9 8.7.2 0 .3-.2.2-.4m36.7-70.6h-1.7c-.3 0-.6 0-.9-.1-4.2-.7-12-3.5-19.1-10.8l-.4-.4m39.5-12.4v.1c-.6 2.3-.3 8.5-8.3 17.2 0 0-4.3 5.1-8.4 6.2-.2 0-.4.1-.6.1m1.3-40.3c-1.3-1.9-5.2-2.7-9.2-1.5-.5 1-.8 2-.4 3.1 3.1-.6 6.3-.5 9.3.4.1-.4.1-1.5.2-2Zm8.1 21.9c-1 2.7-6.8 3.2-8.1 1.6m11.9-13.5c-.2.1-.3.3-.5.4-.4.4-.7 1.1-.9 1.8-.4 1.6 0 3 1 3.1s1.9-.9 2.3-2.5M81.7 71c-.4 1.5.1 2.9 1.1 3.1.9.2 2-.9 2.3-2.4.4-1.5-.1-2.9-1-3.1s-2 .9-2.3 2.4Zm11.4 21.3c-4.8-.5-8-2.4-12.3-5.2l-.9-.6" class="cls-1"/><path d="M93.1 92.3c-2.9 8.3-14.1 3.5-12.4-4.9m-16 10.3v.6c.2 3.5.6 1.8 0 3.3" class="cls-1"/><path d="M64.7 98.4C60 95.7 51.8 87.6 49.9 83.6c-3.4-7.2-1.8-19.7-.9-27.6.9-8 8.3-17.1 14.9-21.5 6.9-4.5 12-5 20.3-4.8 5.5.1 12.6 3.6 17.7 5.4 5.2 1.8 10.5 8.8 12.1 14.1.8 2.6 1.3 4.9 1.6 7 .9 7-1.1 11.7-4.2 20.5-1 2.9-3.3 8.5-5.8 10.2 0-1.4-.3-4.6-1-7.3-.2-.8-.5-1.6-.8-2.2s-.7-1.2-1.3-1.8q-1.05-1.2-2.4-2.4c-1.9-1.6-3.9-3.2-5.4-4.6-1.9-1.8-19-19-17.3-21-5.7 6.7-11.1 31.6-11.9 44.6-.2 3-.1 5.3.2 6.7-.3-.1-.7-.3-1.1-.6Z" class="cls-1"/><path d="M87.9 103c1.6 1.3 1.8 1.5 3.7.6 4-1.8 8.3-5.5 9.4-7 9.4-9.7 17.9-25.6 14.7-40.5" class="cls-1"/></svg>')}`;
export default image;