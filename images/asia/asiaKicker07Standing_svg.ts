/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="asia" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-11,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-4{fill:#faac8e}.cls-5{fill:#fd0243}.cls-6{fill:#3a3f45}.cls-7{fill:#1a2636}.cls-8{fill:#07bab5}.cls-9{fill:#cbaa99}.cls-11{fill:#e3c357}</style></defs><path d="M48.5 176.7c.6-2.8-1.4-3.9-3.9-4.6-2.1-.6-4.7-.7-6.3-1.2-2.8-2.6-7.6-13.4-11-19.8-.9-1.8-1.7-3.2-2.4-4-2.3-2.8-12.3-4.1-13.8.6-1.1 3-.1 5 2.8 9.8 1.5 2.5 14.5 17.8 17.5 20.7-1.3 2.8 1.8 7 3.8 9 .9.9 4.3 3 6.5 3.2 1.2.1 2-.4 1.9-1.8 1.1 0 3.4-1.2 2.2-2.8 1.3-.2 2.8-1.6 2-3.6 4.3-1 2.6-3.4.6-5.4Z" class="cls-9"/><path d="M12.6 144.6c-.7 1.2-1.2 2.1-1.5 3 1.5-4.7 11.5-3.4 13.8-.6.6.8 1.4 2.2 2.4 4l.5-.3c.4-.5 1.1-1.1 1.8-1.9-2-5.4-9.7-6.9-15.5-6.9-.6.9-1 1.7-1.5 2.6Z" class="cls-8"/><path d="M18.7 136.4c-2.1 2.1-3.4 3.9-4.5 5.7 5.7 0 13.5 1.4 15.5 6.8 1.8-1.7 4.2-4.2 6.9-6.8-3.9-1.2-11.4-4.5-15.3-8.9-1.5 1.9-2.5 3.2-2.5 3.2Z" class="cls-5"/><path d="M18.1 299.1c-.4 1.4-.3 7.3.7 8.4 1.2 1.2 3.1 1.3 4.9 1.4 5.6 0 11.2.1 16.8 0 2 0 5.9.3 7.4-1 1.7-1.6-.4-12.7-.6-13-5.2-.7-10.9-2.8-13.9-4.4-2.5 0-3.9.1-6.6 1.6-2.8 1.3-7.8 4.3-8.6 7Z" class="cls-6"/><path d="M26.8 126.2c-2 2.5-4 5.1-5.5 7 3.9 4.4 11.5 7.7 15.3 8.9l7.2-7.2c-6.1-1.7-13.2-4.3-17-8.7" class="cls-11"/><path d="M31.4 120.4c-1.3 1.6-3 3.7-4.7 5.8 3.8 4.3 10.8 7 17 8.7.6-.6 1.1-1.2 1.6-1.7q0-.3 0 0c2.1-2.2 3.8-4 4.6-5.1l.4-1.8c-6.3-1.3-12.7-3.2-18.9-5.8Z" class="cls-4"/><path d="M83.6 295.8c8 1.2 11.4-2.7 16.7-5.1.8-.4 1.6-.7 2.5-1 0-6.9-5.8-65.3-6.9-71.7-.9-5.5-2.7-22.1-3.1-28-3.6 1.6-10.4 5.1-21.3 5.1-17.7 0-26.3-3.6-27.8-6.6 0 1.5-.8 1.9-1.9 1.8-1.5 8.2-10.2 99-10.2 99 .3.3.9.7 1.7 1.1 3 1.6 8.7 3.7 13.9 4.4 2 .3 3.9.3 5.6 0l6.4-39c.2-.3 5-30.6 8.3-45.8.4 6 11.1 81.3 11.2 84.4 1.8.6 3.4 1 4.9 1.2Z" style="stroke-width:0;fill:#052936"/><path d="M93.4 124.7c3.5-1.5 5.5-3.4 5.5-5.4l.4-.2c-1.5-2.9-3-5.2-4.2-6.3-.9-.8-1.6-1.5-2.3-2.2v.2c-3.3 1.5-6.6 2.7-10 3.6.4 2.5.7 4.9.9 6.3.2 2.5-9.6-3.8-11.1-3.8-1.7.2-11.9 9.5-17.3 3.3v-4.9h-.2c-5 0-9.9-1.2-14.2-3.7l-.2-.6c-2.4 1.8-4.2 4.5-6.4 6.5-.4.4-1.4 1.5-2.6 3 6.2 2.7 12.7 4.6 18.9 5.8 17.9 3.6 34.7 2.1 43-1.6Z" class="cls-8"/><path d="M40.3 66.8c-1.2 8.7-.4 11.7 5.7 18 .5.5 1.1 1 1.8.9.9-.2 1.2-1.3 1.3-2.2.7-6 .2-6.7 1.2-12.6s3.9-13.1 7.3-18 4.6-7.8 10.5-8.8l.4-.2c-1.2-2.8-1.8-5.3-2.5-7.1-6.5-.7-12.4.7-17 5.3-6.2 6.3-7.6 15.9-8.8 24.6Z" class="cls-7"/><path d="m40.5 110.9.2.6c4.3 2.5 9.3 3.8 14.2 3.7h.2c0-2.6 0-5.6.3-8.1h-.7c-1.4 0-2.3.3-4.5.7-2 .3-5.9 1-7.7 1.7-.8.3-1.5.8-2.2 1.3Z" class="cls-5"/><path d="M45.1 168.5c-.2 1.4-.4 2.6-.4 3.7 2.5.7 4.5 1.8 3.9 4.6 1.9 2 3.7 4.4-.6 5.4 14.6 2.3 32.2 3.7 44.8-.7h.6c.1-3.4.2-7.1.3-10.9v-1.9c-15.8 4.1-32.4 2.8-48.4 0Z" class="cls-8"/><path d="M45.4 133.1q0-.3 0 0" class="cls-4"/><path d="M46.8 155.6c-.2 3.6-1.1 8.7-1.7 12.9 16 2.9 32.7 4.2 48.4 0 .1-4.8.2-9.6.2-13.7h-.2c-7.5 3.8-30.9 1.7-46.8.7Z" class="cls-5"/><path d="M50 128c-.8 1.1-2.5 2.9-4.6 5.1 0 .7.4 4.3.6 7.4h.3c15.5 1.8 32.4 2.6 47.7-.7v-6.7q0-4.35-.6-8.4c-8.3 3.6-25.1 5.2-43 1.6l-.4 1.8Z" class="cls-4"/><path d="M93.9 141.9v-2.1c-15.3 3.3-32.2 2.6-47.7.7h-.3c.2 2.1.3 4.1.3 4.7.3 3.4.7 6.9.4 10.4 15.9 1 39.3 3 46.8-.7h.2v-5.7c0-1.7 0-4.7.1-7.2Z" class="cls-11"/><path d="M45.9 185.7c1.3 1.6-1.1 2.8-2.2 2.8 1.6 2.9 10.1 6.6 27.8 6.6s17.7-3.6 21.3-5.1c0-2.4.2-5.4.3-8.6h-.6c-12.6 4.4-30.1 3-44.8.7.8 2-.7 3.4-2 3.6Z" class="cls-5"/><path d="M85 89.8c-1.6 3-3.3 4.5-7 5-2.3.3-6.8-.2-9-1.6-1.4-.9-2.2-1.4-3.3-2.6-.7-.8 0-2 1.1-1.8 4.8 1.3 13.5 2.6 18.2.9Zm-7.6 14.7c3.2-.9 6.2-2.9 9.1-5.3 4.2-3.4 5.1-6.5 6.1-11.1.3-3.9.8-8.7.7-10.8-.1-5.3-2.4-9.5-7-14.2-2.7-2.7-6.2-5.7-10.5-9.2-3.8-3.1-6-6.8-7.3-10.1l-.4.2c-5.9 1-7.1 3.8-10.5 8.8-3.4 4.9-6.3 12.1-7.3 18s-.6 6.7-1.2 12.6c.5 4.5 4.6 12 7.3 14.1.5.4.9.7 1.4 1.1 8.3 6.2 14.4 7.4 19.6 5.9m-14.3-32c0-2 .9-3.6 1.9-3.6s1.9 1.6 1.9 3.6-.9 3.6-1.9 3.6-1.9-1.6-1.9-3.6m22.7.5c0-1.7.7-3.1 1.6-3.1S89 71.3 89 73s-.7 3.1-1.6 3.1-1.6-1.4-1.6-3.1" class="cls-9"/><path d="M55.5 107.1c-.4 2.5-.4 5.5-.3 8.1 0 1.9.1 3.7 0 4.9 5.3 6.2 15.5-3.1 17.3-3.3l-.4-1.5h-.2c-2 0-14.1-7.9-13.8-10.8v-2.1c-1.3.7-2.1 2.6-2.4 4.9Z" class="cls-5"/><path d="M57.7 98.6c0 2.1.2 2.9.3 3.6.1.6.2 1.1 0 2.1-.3 2.9 11.8 10.8 13.8 10.8h.2c1.9-.3 5.5-5.1 5.2-10.6-5.2 1.5-11.3.3-19.6-5.9Z" class="cls-9"/><path d="M65 68.9c-1.1 0-1.9 1.6-1.9 3.6s.9 3.6 1.9 3.6 1.9-1.6 1.9-3.6-.9-3.6-1.9-3.6" class="cls-3"/><path d="M66.8 88.8c-1-.3-1.8 1-1.1 1.8 1.1 1.2 2 1.7 3.3 2.6 2.2 1.4 6.7 1.9 9 1.6 3.7-.5 5.4-2.1 7-4.9-4.7 1.5-13.3.2-18.2-1.1" style="stroke-width:0;fill:#fff"/><path d="M86.3 63.2c4.7 4.7 6.9 8.8 7 14.2 0 2.2-.5 6.9-.7 10.8-.1 2-.2 3.8-.1 4.9 5-2.2 7.5-11.1 8.9-15.2 3.5-10.3 2.9-27-4.3-35.1C92.9 38 85 33.3 77.5 32.6c-6.9-.6-11.9 3.1-11.5 4.2.7 1.7 1.3 4.3 2.5 7.1 1.4 3.3 3.5 7 7.3 10.1 4.3 3.5 7.9 6.5 10.5 9.2" class="cls-7"/><path d="M80.2 106.8c-.7-1.2-1.7-2-2.9-2.3.3 5.6-3.3 10.3-5.2 10.6l.4 1.5c1.5 0 11.3 6.3 11.1 3.8-.3-1.3-.5-3.7-.9-6.3-.5-2.7-1.2-5.5-2.4-7.5Z" class="cls-5"/><path d="M87.3 107.5c-2.1-.5-5-.8-7.1-.6 1.3 1.9 2 4.8 2.4 7.5q5.1-1.2 9.9-3.6v-.2c-1.4-1.4-2.9-2.6-5.3-3.1Z" class="cls-5"/><path d="M83.6 295.8c-1 2.3-1.6 10.9.5 12 1.5.9 20 1.4 25.2 1.2.5 0 3.5-.7 3.9-.9 1.5-.7.8-9 0-10.4-1.8-3.3-8.9-6-13-7.1-5.2 2.5-8.7 6.4-16.7 5.1Z" class="cls-6"/><path d="M87.3 69.9c-.9 0-1.6 1.4-1.6 3.1s.7 3.1 1.6 3.1 1.6-1.4 1.6-3.1-.7-3.1-1.6-3.1" class="cls-3"/><path d="M93.5 170.5c0 3.8-.2 7.5-.3 10.9 0 3.2-.2 6.2-.3 8.6 1.7-.4 3.7-.6 4.7-3.4.8-2.2 1.2-4.1 1.9-6.3.5-1.5 1.1-2.8 1.9-4 1.8-2.8 5.2-6.3 7.9-9.2 5.2-5.5 9.6-11.2 5-18.1-.1-.2-.3-.5-.5-.9-2-.9-6 .8-6.9 1.5-2.7 2.3-4.1 4.6-5.5 7.2-.5.9-1 1.9-1.5 2.9-.9 1.9-6.5 10.3-6.5 10.8Z" class="cls-9"/><path d="M94 139.8v2.1c.3.4.7 1.1 1.2 2 4.6-1.4 9.7-3.1 13.1-6.4-1.3-2.6-2.8-5.8-4.3-9.1l-.4.2c-2.7 2.2-5.8 3.7-9.2 4.4h-.3v6.7Z" class="cls-11"/><path d="M93.4 124.7q.6 4.05.6 8.4h.3c3.4-.7 6.5-2.2 9.2-4.4l.4-.2c-1.5-3.3-3.1-6.7-4.6-9.5l-.4.2c0 2-2 3.9-5.5 5.4Z" class="cls-4"/><path d="M95.1 143.9c1.2 2.3 2.9 5.9 4.4 8.8 4.7-2.1 13.1-7 13.1-7.1-.6-1.1-1.4-2.5-2.2-4-.6-1.1-1.4-2.5-2.2-4.1-3.5 3.3-8.5 5-13.1 6.4" class="cls-5"/><path d="M99.5 152.7c.8 1.6 1.5 3.1 2 4 1.3-2.6 2.8-4.8 5.5-7.2.9-.8 4.9-2.4 6.9-1.5-.4-.6-.8-1.4-1.4-2.4 0 0-8.4 5-13.1 7.1Z" class="cls-8"/><path d="M77.3 104.2v.3c.3 5.6-3.3 10.4-5.2 10.7h-.2c-2 0-14.1-7.9-13.8-10.8v-2.1c-.1-.7-.3-1.5-.3-3.6m22.2 8.1h.3c2-.2 5 .2 7.1.6 2.4.6 3.9 1.7 5.4 3.1.7.7 1.5 1.4 2.3 2.2 1.2 1.1 2.7 3.4 4.2 6.3 1.5 2.8 3.1 6.1 4.6 9.5 1.5 3.2 3 6.4 4.3 9.1.8 1.6 1.5 3 2.2 4.1m-66.7-6.9c.6-.6 1.1-1.2 1.6-1.7 2.1-2.2 3.8-4.1 4.6-5.1 0 0 0-.1.1-.2m-13.4 14.3 7.2-7.2m-15.9 15.9c.4-.5 1.1-1.1 1.8-1.9l6.9-6.9m18.3-35c-1.4 0-2.3.5-4.5.8-2 .3-5.9 1-7.7 1.7-.8.3-1.5.8-2.2 1.3-2.4 1.8-4.2 4.5-6.4 6.5-.4.4-1.4 1.5-2.6 3-1.3 1.6-3 3.7-4.7 5.8-2 2.5-4 5.1-5.5 7s-2.5 3.2-2.5 3.2m75.1 5.6c0 2.5-.1 4.9-.1 7.2v5.7c0 4.1-.1 8.9-.2 13.7v1.9c0 3.8-.2 7.5-.3 10.9 0 3.2-.2 6.2-.3 8.6-3.6 1.6-10.4 5.1-21.3 5.1-17.7 0-26.3-3.6-27.8-6.6m49-66.3c.2.9.3 1.7.5 2.6q.6 4.05.6 8.4v8.8" class="cls-2"/><path d="M45.4 133.1q0-.3 0 0c0 .7.4 4.3.6 7.4.2 2.1.3 4 .3 4.7.3 3.4.7 6.9.4 10.4-.2 3.6-1.1 8.7-1.7 12.9-.2 1.4-.4 2.6-.4 3.7v.4m56.9 3.6c-.8 1.2-1.4 2.5-1.9 4-.7 2.2-1.2 4.1-1.9 6.3-1 2.9-3 3-4.7 3.4m20.9-41.8c.2.3.4.6.5.9 4.5 6.9.2 12.6-5 18.1-2.7 2.9-6.1 6.3-7.9 9.2m8.9-34.6c.8 1.5 1.5 2.9 2.2 4 .5 1 1 1.8 1.4 2.4m-20.3-6.4.2.2c.3.4.7 1.1 1.2 2 1.2 2.3 2.9 5.9 4.4 8.8.8 1.6 1.5 3.1 2 4" class="cls-2"/><path d="M113.9 148.1c-2-.9-6 .8-6.9 1.5-2.7 2.3-4.1 4.6-5.5 7.2-.5.9-1 1.9-1.5 2.9-.9 1.9-6.5 10.3-6.5 10.8m-74.8-34.1c-2.1 2.1-3.4 3.9-4.5 5.7-.6.9-1 1.7-1.5 2.6-.7 1.2-1.2 2.1-1.5 3-1.1 3-.1 5 2.8 9.8 1.5 2.5 14.5 17.8 17.5 20.7m6.8-7.3c-2.8-2.6-7.6-13.4-11-19.8-.9-1.8-1.7-3.2-2.4-4" class="cls-2"/><path d="M46.3 174.5c.4.5 1.3 1.3 2.2 2.2 1.9 2 3.7 4.4-.6 5.4.8 2-.7 3.4-2 3.6 1.3 1.6-1.1 2.8-2.2 2.8 0 1.5-.8 1.9-1.9 1.8-2.2-.2-5.6-2.3-6.5-3.2-2-1.9-5.1-6.1-3.8-9" class="cls-2"/><path d="M38.3 170.9c1.6.5 4.2.7 6.3 1.2 2.5.7 4.5 1.8 3.9 4.6M92.9 190c.4 5.9 2.2 22.4 3.1 28 1 6.4 6.9 64.8 6.9 71.7-.9.3-1.7.6-2.5 1-5.2 2.5-8.7 6.4-16.7 5.1-1.5-.2-3.1-.6-4.9-1.2 0-3.1-10.9-78.4-11.2-84.4v-.2" class="cls-2"/><path d="M69.7 202.2c-.6 1.1-1.3 4-2.2 7.9-3.3 15.1-8.2 45.4-8.3 45.8l-6.4 39c-1.7.3-3.6.2-5.6 0-5.2-.7-10.9-2.8-13.9-4.4-.8-.4-1.4-.8-1.7-1.1 0 0 8.7-90.8 10.2-99v-.2" class="cls-2"/><path d="M33.3 290.5c-2.5 0-3.9.1-6.6 1.6m0 0c-2.8 1.3-7.8 4.3-8.6 7-.4 1.4-.3 7.3.7 8.4 1.2 1.2 3.1 1.3 4.9 1.4 5.6 0 11.2.1 16.8 0 2 0 5.9.3 7.4-1 1.7-1.6-.4-12.7-.6-13m36.4.7v.1c-1 2.3-1.6 10.9.5 12 1.5.9 20 1.4 25.2 1.2.5 0 3.5-.7 3.9-.9 1.5-.7.8-9 0-10.4-1.8-3.3-8.9-6-13-7.1-.2 0-.3 0-.5-.1M93.2 85.7c-.2.9-.4 1.7-.5 2.5-1 4.6-2 7.8-6.1 11.1-3 2.4-5.9 4.3-9.1 5.3-5.2 1.5-11.3.3-19.6-5.9-.5-.3-.9-.7-1.4-1.1-2.7-2.2-6.8-9.7-7.3-14.1m42.9-16.9c-.9-2-3.8-3.5-5.7-3.5-.6 0-1.1.2-1.4.5m-16.3.9c-2.2-2.2-7.9-.8-8.4.9M85.8 73c0 1.7.7 3.1 1.6 3.1S89 74.7 89 73s-.7-3.1-1.6-3.1-1.6 1.4-1.6 3.1m-22.7-.5c0 2 .9 3.6 1.9 3.6s1.9-1.6 1.9-3.6-.9-3.6-1.9-3.6-1.9 1.6-1.9 3.6" class="cls-1"/><path d="M83.8 83c-1.8 2.6-5.5 3.2-8.3 2.6m10 4c-.2 0-.3.1-.5.2-4.7 1.7-13.3.4-18.2-.9-1-.3-1.8 1-1.1 1.8 1.1 1.2 2 1.7 3.3 2.6 2.2 1.4 6.7 1.9 9 1.6 3.7-.5 5.4-2.1 7-4.9" class="cls-1"/><path d="M58 102.3c-1.3.7-2.1 2.6-2.4 4.8-.4 2.5-.4 5.5-.3 8.1 0 1.9.1 3.7 0 4.9 5.3 6.2 15.5-3.1 17.3-3.3 1.5 0 11.3 6.3 11.1 3.8-.3-1.3-.5-3.7-.9-6.3-.5-2.7-1.2-5.5-2.4-7.5-.7-1.2-1.7-2-2.9-2.3M25 147c-2.3-2.8-12.3-4.1-13.8.6m29.6-36.1c4.3 2.5 9.3 3.8 14.2 3.7" class="cls-2"/><path d="M82.5 114.3h.2q5.1-1.35 9.9-3.6m-61.2 9.7c6.2 2.7 12.7 4.6 18.9 5.8 17.9 3.6 34.7 2.1 43-1.6 3.5-1.5 5.5-3.4 5.5-5.4m-52.6 21.3c15.5 1.8 32.4 2.6 47.7-.7.2 0 .5-.1.7-.2m-47.8 16c15.9 1 39.3 3 46.8-.7m-49 13.5h.5c16 2.9 32.7 4.2 48.4 0m-45.7 13.7c14.6 2.3 32.2 3.7 44.8-.7m-65.8-55.2c3.8 4.3 10.8 7 17 8.7M21.1 133s0 .1.1.2c3.9 4.4 11.5 7.7 15.3 8.9m-22.3 0c5.7 0 13.5 1.4 15.5 6.8m73.8-20.2c-2.7 2.2-5.8 3.7-9.2 4.4m14.6 3.7c-.2.3-.5.5-.7.7-3.5 3.3-8.5 5-13.1 6.4m17.4 1.7s-8.4 5-13.1 7.1h-.1M68.5 43.9c1.4 3.3 3.5 7 7.3 10.1 4.3 3.5 7.9 6.5 10.5 9.2 4.7 4.7 6.9 8.8 7 14.2 0 2.2-.5 6.9-.7 10.8-.1 2-.2 3.8-.1 4.9 5-2.2 7.5-11.1 8.9-15.2 3.5-10.3 2.9-27-4.3-35.1C92.9 38 85 33.3 77.5 32.6c-6.9-.6-11.9 3.1-11.5 4.2.7 1.7 1.3 4.3 2.5 7.1Z" class="cls-2"/><path d="M66 36.8c-6.5-.7-12.4.7-17 5.3-6.2 6.3-7.6 15.9-8.8 24.6s-.4 11.7 5.7 18c.5.5 1.1 1 1.8.9.9-.2 1.2-1.3 1.3-2.2.7-6 .2-6.7 1.2-12.6s3.9-13.1 7.3-18S62.1 45 68 44" class="cls-2"/></svg>')}`;
export default image;