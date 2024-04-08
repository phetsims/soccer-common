/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="asia" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2,.cls-3,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-3{fill:#868a8b}.cls-6{fill:#423b38}.cls-7{fill:#deae9b}.cls-8{fill:#be735c}</style></defs><path d="M106.8 135.2c1.3 2.2 2.3 4.7 2.1 7.1l-2.4 2.7c-4.1 4.5-7.8 7.7-9.6 13.3-.8 2.4-1.2 4.6-2.1 7-1.1 3.2-3.2 3.4-5 3.8h-.3c-.4-2.1-.7-3.7-1-4.7h-2.8c2.4-.8 4.7-1.7 4.8-1.2-1.1-5.9-1.3-10.7-1.2-15.3 1.6-1.8 5.6-8.4 6.6-10.5 1.6-3.3 1.7-3.9 2.9-5.8q.3-.6.9-1.5c2.9.7 5.5 2.6 7 5.2Z" class="cls-7"/><path d="M100.8 300.3c.7 1.3 1.2 7.3-.2 7.9-.4.2-3.2.8-3.7.8-4.9.2-22.3-.3-23.8-1.1-2-1.1-1.3-7.7-.3-9.6v-.6c7.8.8 17.7.3 24.7-.6 1.5 1 2.7 2 3.2 3.1Z" class="cls-3"/><path d="M108.9 142.3c.2-2.4-.8-4.9-2.1-7.1-1.5-2.6-4.1-4.5-7-5.2q-.6.9-.9 1.5l-.3-.2c-.8-2.1-6.2-10.1-8-14.7-.5 4.8-.8 9.4-.6 14.7.2 6-.3 11.1-.4 16.5 0 4.6 0 9.4 1.2 15.3 0-.5-2.4.5-4.8 1.2-2.8.8-5.7 1.2-5.7-1.2 0-4.9-.4-12.3-1-20.7-.4-4.7-.8-9.6-1.3-14.6 2.2-14.1 8.3-26.1 2.9-31.8-.7-.7-.8-1.3-.6-1.8 1-2.3 9.7-2.9 8.4-5.6-.7-1.6-.8-3-2.2-4.3 10.1 2.4 25.6 40.5 27.5 43.5 3.9 6.1-1.2 11.2-5.4 16.1.2-.5.3-1 .3-1.6" class="cls-8"/><path d="M84.1 43.5c.2-.1-2.3-2.5-3.4-2.9-.8-.3-2.4-.6-3.5 0-1.5.9-2.1 2-1.2 2 .8 0 2.3-1.4 4.8-.8 1.4.4 3.3 1.8 3.4 1.7Zm3.1-1.6q-.2 2-1 5.7c.3 0 .8 8.3-3.4 16.4-3.2 6.2-7.1 11.2-12 12.8-4.4 1.5-9.6.2-15.7-5.4-1.6-1.5-3.4-3.3-5.1-5.5-2.1-3.5-2.9-14.4-2-23.6 6.2-4.3 10.7-6.4 14.9-9.6 7.1-5.6 13.5-7.6 15.4-6.4 3 2 9 9.1 9 15.5Zm-6.4 7.2c0-1.4-.6-2.5-1.3-2.5s-1.3 1.1-1.3 2.5.6 2.5 1.3 2.5 1.3-1.1 1.3-2.5M69.4 68.9c2.6 0 3.8-1.5 5-3.7-4.4 1.9-12.9-.5-13.8-1.5 1.7 3 3.5 5.2 8.8 5.2m-4.7-27.1c1.2 0 .8-1.1-1.1-2.1-1.3-.7-3.5-.4-4.6 0-1.5.4-5.3 2.7-5.1 2.8.1.1 2.9-1.3 4.8-1.6 3.4-.6 4.9.9 6 1Zm-1.9 7.3c0-1.6-.7-2.9-1.6-2.9s-1.6 1.3-1.6 2.9.7 2.9 1.6 2.9 1.6-1.3 1.6-2.9" class="cls-7"/><path d="M80.1 94.2c1.5-3 3.4-5.8 6.3-9.8 1.3 1.3 1.4 2.8 2.2 4.3 1.3 2.7-7.4 3.2-8.4 5.6Z" class="cls-8"/><path d="M79.5 46.6c.7 0 1.3 1.1 1.3 2.5s-.6 2.5-1.3 2.5-1.3-1.1-1.3-2.5.6-2.5 1.3-2.5" class="cls-2"/><path d="M80.8 96c5.3 5.6-.7 17.6-2.9 31.8-.6-6.8-1.4-13.7-2.1-19.9 1.5-6.4 2.6-10.2 4.4-13.7q-.3.75.6 1.8" class="cls-8"/><path d="M77.8 127.8c.5 5 .9 10 1.3 14.6-4.7 3.1-19.1 3-23.5 1.2.4-4.7.9-9.7 1.3-14.7 1-12.1-.8-31.8-2.2-42.2h.1c2 5.5 16.1 5 17.3 1.1-.5 2.5-1 4.9-1.3 7.4-.8 5.7 0 12.2 4.2 16 .3-1.2.5-2.3.8-3.4.7 6.3 1.5 13.1 2.1 19.9Z" style="stroke-width:0;fill:#e8f1f3"/><path d="M80.7 40.6c1.1.4 3.6 2.7 3.4 2.9 0 0-2-1.4-3.4-1.7-2.5-.6-3.9.8-4.8.8s-.4-1.1 1.2-2c1.1-.6 2.7-.3 3.5 0Z" class="cls-6"/><path d="M72.6 85c0-3.6-.3-5.3 0-8.1h-1.7c4.9-1.8 8.8-6.8 12-13 4.2-8.1 3.7-16.3 3.4-16.4q.8-3.7 1-5.7c0-6.3-6-13.5-9-15.5-1.9-1.3-8.4.8-15.4 6.4-4.1 3.2-8.6 5.3-14.9 9.6-1 9.2-.1 20.1 2 23.6 1.8 2.2 3.5 4 5.1 5.5.2 3.1-.4 4.4-.9 7.1h-.4c-2 .7-3.8 1.5-5.5 2.3-1.5.4-4.1.9-6.5 1.4-6-7.9-7-31.5-5.8-40.4 1.9-14 10.3-23.9 23.8-25.4 9.9-1.1 14.9 3.2 18.6 4.8 9.6 4.1 12.2 11.3 12.9 23.6.4 8.1 2 30.1-4.7 39.5-2.9 4.1-4.8 6.8-6.3 9.8-1.7 3.5-2.9 7.2-4.4 13.7-.2 1-.5 2.2-.8 3.4-4.3-3.8-5-10.3-4.2-16 .3-2.5.9-4.9 1.3-7.4.2-.9.3-1.9.5-2.8Z" style="stroke-width:0;fill:#322a1c"/><path d="M74.4 65.3c-1.2 2.2-2.4 3.7-5 3.7-5.3 0-7-2.2-8.8-5.2.9 1 9.4 3.4 13.8 1.5" style="stroke-width:0;fill:#fff"/><ellipse cx="61.2" cy="49.1" class="cls-2" rx="1.6" ry="2.9"/><path d="M54 42.5c-.2-.2 3.6-2.5 5.1-2.8 1.1-.3 3.3-.6 4.6 0 1.8.9 2.3 2.1 1.1 2.1-1.1 0-2.6-1.5-6-1-1.9.3-4.6 1.8-4.8 1.6Z" class="cls-6"/><path d="M54 78.5c.5-2.7 1.1-4 .9-7 6.1 5.5 11.3 6.8 15.7 5.3h1.7c-.3 2.9 0 4.7 0 8.2-.1.9-.3 1.9-.5 2.8-1.3 3.9-15.3 4.4-17.3-1.1h-.1c-.4-2.5-.7-4.6-1-5.7.1-1 .2-1.8.4-2.5Z" class="cls-7"/><path d="M54.6 86.7c1.4 10.4 3.2 30.1 2.2 42.2 0-1.1-5.2-18.1-6.8-22-1.2-2.8 1.3-6.5 0-8.9-2.3-4.6-12.5-5.2-12.5-5.5-.1-4.8 4-8.4 10.5-11.6 1.7-.8 3.5-1.6 5.5-2.4h.4c-.1.8-.3 1.6-.4 2.5.3 1.2.6 3.2 1 5.8Z" class="cls-8"/><path d="M41.7 82.3c2.4-.5 5-1 6.5-1.4-6.5 3.2-10.6 6.9-10.5 11.6 0 .4 10.2.9 12.5 5.5 1.2 2.4-1.3 6.1 0 8.9 1.6 3.8 6.8 20.9 6.8 22-.4 5-.8 10-1.3 14.7-.9 10.2-1.8 18.5-2 19.9-.5 3.3-6.6 4.2-13.2 2.7.3-.5.4-1.2-.1-1.8 1-.2 2.2-1.1 2.3-2.4 0-.5 0-1-.2-1.6 4.6-1.1 2.7-3.8.7-6 .5-2.3-.6-3.6-2.3-4.4-1.5-.7-3.4-1-5.2-1.3.3-3.9 1-33.1 0-35.1-5.7 6-12.5 12.5-14.3 14.3l-.4.4c-3.1-.5-4.8-.3-7.3 1.5-1.9 1.4-3.2 4.2-3.9 6.8-.2.8-.4 1.5-.5 2.2-2.6-4.7-5.8-12.5-2.9-17.6 2.6-4.7 29.2-36.8 32.7-38.3.8-.2 1.8-.3 2.7-.5Z" class="cls-8"/><path d="M40.6 149.9c1.7.8 2.8 2.1 2.3 4.4 2 2.2 3.9 4.8-.7 6 .2.6.3 1.1.2 1.6-.2 1.4-1.3 2.3-2.3 2.4.5.7.5 1.3.1 1.8-.5.8-1.7 1.3-2.4 1.3 0 1.7-.8 2.2-2 2-2.3-.2-5.9-2.5-6.9-3.5-2.1-2.2-5.4-6.8-4-10-2.7-4.1-7.2-9.7-10.2-13.3-1.6-1.9-3.4-3.3-5.2-6.2.7-2.6 2-5.4 3.9-6.8 2.5-1.8 4.2-2 7.3-1.5l.4-.4c.8 1.2 1.5 2.6 2.7 5 2 4.2 2.5 13 8.4 15.1.9.3 2 .5 3.2.7 1.8.3 3.7.6 5.2 1.3Z" class="cls-7"/><path d="M52.8 297.6c-6.8 1.1-15.7 1.6-21.9-1.3-1-.4-1.9-1-2.7-1.6 0 0 6.2-111.5 7.7-125.1 1.2.1 2.1-.4 2-2 .7 0 1.9-.5 2.4-1.3 6.7 1.5 12.7.6 13.2-2.7.2-1.4 1.1-9.7 2-19.9 4.4 1.8 18.8 1.9 23.5-1.2.6 8.4 1 15.8 1 20.7s2.9 2 5.7 1.2h2.8c.3 1.1.6 2.7 1 4.8 4.2 23.8 12.3 109.7 13.4 127.1-1.4.3-3.3.6-5.4.9-7 .9-16.9 1.4-24.6.6q-4.2-.45-7.2-1.5c-.8-8.1-1.6-116.3-1.6-116.2-1.6 9.7-3.3 107.7-4.4 116.2-1.8.4-4.2.9-6.9 1.3" style="stroke-width:0;fill:#586163"/><path d="M52.8 297.6c.2.3 2.1 8.9.5 10.4-1.3 1.2-5 1-6.9 1H30.6c-1.7 0-3.5-.1-4.6-1.3-1-1-.9-4.7-.6-6 .5-1.9 3.1-3.9 5.5-5.3 6.1 2.9 15.1 2.3 21.9 1.3Z" class="cls-3"/><path d="M42.6 162h-.1m-1.6-12.6-.3.5m51-41.3c-.4 2.8-.8 5.4-1.1 8-.5 4.8-.8 9.4-.6 14.7.2 6-.3 11.1-.4 16.5 0 4.6 0 9.4 1.2 15.3m-55.3-49.6c1 2 .3 31.1 0 35.1m74.2-7.1c-.2.3-.5.6-.8.9l-2.4 2.7c-4.1 4.5-7.8 7.7-9.6 13.3-.8 2.4-1.2 4.6-2.1 7-1.1 3.2-3.2 3.4-5 3.8" class="cls-1"/><path d="M86.4 84.3c10.1 2.4 25.6 40.5 27.5 43.5 3.9 6.1-1.2 11.2-5.4 16.1m-18-27.3c1.8 4.7 7.3 12.7 8 14.7m2.6-3.4c-.6.9-1 1.6-1.4 2.2q-.6.9-.9 1.5c-1.1 1.9-1.3 2.5-2.9 5.8-1 2.2-5 8.7-6.6 10.5h0m-80.2-9.1c0-.7.3-1.4.5-2.2.7-2.6 2-5.4 3.9-6.8 2.5-1.8 4.2-2 7.3-1.5l.4-.4c1.8-1.8 8.6-8.3 14.3-14.3 3.2-3.4 6.1-6.6 7.6-8.8" class="cls-1"/><path d="M9.1 135.8c.2.3.3.5.5.8 1.8 2.8 3.6 4.3 5.2 6.2 3 3.6 7.5 9.3 10.2 13.3" class="cls-1"/><path d="M38.9 82.8c-3.5 1.5-30.1 33.7-32.7 38.3-2.9 5.1.3 13 2.9 17.6" class="cls-1"/><path d="M32.2 147.9c-5.9-2.1-6.5-10.9-8.4-15.1-1.1-2.4-1.9-3.8-2.7-5-1-1.5-2-2.7-4-5.3M40.7 152c.5.6 1.4 1.4 2.3 2.4 2 2.2 3.9 4.8-.7 6 .2.6.3 1.1.2 1.6-.2 1.4-1.3 2.3-2.3 2.4.5.7.5 1.3.1 1.8-.5.8-1.7 1.3-2.4 1.3 0 1.7-.8 2.2-2 2-2.3-.2-5.9-2.5-6.9-3.5-2.1-2.2-5.4-6.8-4-10" class="cls-1"/><path d="M32.2 147.9c.9.3 2 .5 3.2.7 1.8.3 3.7.6 5.2 1.3 1.7.8 2.8 2.1 2.3 4.4q0 0 0 0M28.2 294.7s6.2-111.5 7.7-125.1m44.2-28.1c-.3.3-.6.7-1 .9-4.7 3.1-19.1 3-23.5 1.2-.1 0-.3-.1-.4-.2m-7.1-62.5c-1.5.4-4.1.9-6.5 1.4-1 .2-1.9.4-2.7.5m49.7 81.6c.3 1 .6 2.7 1 4.8 4.2 23.8 12.3 109.7 13.4 127.1-1.4.3-3.3.6-5.4.9-7 .9-16.9 1.4-24.6.6q-4.2-.45-7.2-1.5c-.8-8.1-1.6-116.3-1.6-116.2-1.6 9.7-3.3 107.7-4.4 116.2-1.8.4-4.2.9-6.9 1.3-6.8 1.1-15.7 1.6-21.9-1.3-1-.4-1.9-1-2.7-1.6m26.4-208c2 5.5 16.1 5 17.3 1.1m14.4-3.5c1.3 1.3 1.4 2.8 2.2 4.3 1.3 2.7-7.4 3.2-8.4 5.6q-.3.75.6 1.8c5.3 5.6-.7 17.6-2.9 31.8q0 0 0 0" class="cls-1"/><path d="M53.6 78.4c-2 .8-3.8 1.6-5.5 2.4q0 0 0 0c-6.5 3.2-10.6 6.9-10.5 11.6 0 .4 10.2.9 12.5 5.5 1.2 2.4-1.3 6.1 0 8.9 1.6 3.8 6.8 20.9 6.8 22m30.3-86.9q-.2 2-1 5.7c.3 0 .8 8.3-3.4 16.4-3.2 6.2-7.1 11.2-12 12.8-4.4 1.5-9.6.2-15.7-5.4-1.6-1.5-3.4-3.3-5.1-5.5" class="cls-1"/><path d="M78.2 49.1c0 1.4.6 2.5 1.3 2.5s1.3-1.1 1.3-2.5-.6-2.5-1.3-2.5-1.3 1.1-1.3 2.5" class="cls-1"/><ellipse cx="61.2" cy="49.1" class="cls-1" rx="1.6" ry="2.9"/><path d="M74.8 60.3c-1.9 1.1-5.3 1.5-8.3 0m7.9 5c-4.4 1.9-12.9-.5-13.8-1.5 1.7 3 3.5 5.2 8.8 5.2 2.6 0 3.8-1.5 5-3.7M48.1 40.8c0 .5-.1 1-.2 1.6-1 9.2-.1 20.1 2 23.6" class="cls-1"/><path d="M86.4 84.3c6.7-9.3 5.1-31.4 4.7-39.5-.7-12.3-3.3-19.5-12.9-23.6-3.7-1.6-8.6-5.9-18.6-4.8-13.5 1.5-21.9 11.3-23.8 25.4-1.2 8.9-.2 32.5 5.8 40.4" class="cls-1"/><path d="M72.9 78.2c.2 2.3 0 4.6-.3 6.8-.1.9-.3 1.9-.5 2.8q0 0 0 0c-.5 2.5-1 4.9-1.3 7.4-.8 5.7 0 12.2 4.2 16 .3-1.2.5-2.3.8-3.4 1.5-6.4 2.6-10.2 4.4-13.7 1.5-3 3.4-5.8 6.3-9.8m.7-42.4c0-6.3-6-13.5-9-15.5-1.9-1.3-8.4.8-15.4 6.4-4.1 3.2-8.6 5.3-14.9 9.6m7 29.1c.2 3-.4 4.3-.9 7-.1.7-.3 1.5-.4 2.5" class="cls-1"/><path d="M72.5 76.9c-.3 2.8 0 4.6 0 8.1m8.2-44.4c1.1.4 3.6 2.7 3.4 2.9 0 0-2-1.4-3.4-1.7-2.5-.6-3.9.8-4.8.8s-.4-1.1 1.2-2c1.1-.6 2.7-.3 3.5 0Zm-21.6-.9c-1.5.4-5.3 2.7-5.1 2.8.1.1 2.9-1.3 4.8-1.6 3.4-.6 4.9.9 6 1 1.2 0 .8-1.1-1.1-2.1-1.3-.7-3.5-.4-4.6 0ZM53.6 81c.3 1.2.6 3.2 1 5.8 1.4 10.4 3.2 30.1 2.2 42.2h0c-.4 5-.8 10-1.3 14.7-.9 10.2-1.8 18.5-2 19.9-.5 3.3-6.6 4.2-13.2 2.7h0m35.5-58.4c.7 6.3 1.5 13.1 2.1 19.9.5 5 .9 10 1.3 14.6.6 8.4 1 15.8 1 20.7s2.9 2 5.7 1.2c2.4-.7 4.7-1.6 4.8-1.2m8.7-33.1h.3c2.9.7 5.5 2.6 7 5.2 1.3 2.2 2.3 4.7 2.1 7.1 0 .5-.1 1-.3 1.6M31.2 296.1s-.2.1-.3.2c-2.4 1.4-5 3.4-5.5 5.3-.4 1.3-.4 5 .6 6 1.1 1.1 3 1.3 4.6 1.3 5.3 0 10.5.1 15.8 0 1.9 0 5.6.3 6.9-1 1.6-1.5-.2-10.1-.5-10.4m20.1.8c-1 1.9-1.7 8.4.3 9.6 1.4.8 18.9 1.3 23.8 1.1.5 0 3.3-.6 3.7-.8 1.4-.6.9-6.6.2-7.9-.6-1.1-1.8-2.1-3.2-3" class="cls-1"/></svg>')}`;
export default image;