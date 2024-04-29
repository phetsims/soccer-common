/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="oceania" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-6,.cls-8{stroke-width:0}.cls-6{fill:#353638}.cls-8{fill:#a76541}</style></defs><path d="M14.8 298c-3.1 2.9-7 9.6-6.6 12.5.5 3.5 3.7 5.8 7.1 6.2 2.7.3 5.2 0 7.6-1.2 7.1-3.3 13.7-7.9 19.2-13.5l-.4-.4c-.4 0-.8.1-1.2.1v.2c-2 1.9-4.1 3.5-6.4 5-1.3.8-2.7 1.6-4.1 2.4l-1.2.6c-7 3.7-7.6 4-14.3 3.6-1.7 0-3.1-1.4-4.1-2.8-1-1.5.4-5 1.7-7.7.5-1.1 1.1-2 1.4-2.6.5-.8 1.1-1.6 1.7-2.3h-.4Z" class="cls-6"/><path d="M39.8 177.5c-2.2-.6-4.7-.7-6.3-1.3-5-2.4-6.3-11.8-8.1-15.4-1.1-2.2-2-3.8-3.1-5.1.8-.8 6.5-5.7 8-7-2.6-1-4.5-1.9-6.8-4.1-1.3-1.2-3-3.8-4.1-6.4-3.2 3.1-9.5 9.5-10.8 12-2.9 5.2 2 16.7 5.9 21.2 2.9 3.3 9.6 8.6 12.2 12.3-1.3 2.9 1.8 7.1 3.9 9 1 .9 4.4 3 6.6 3.2 1.2 0 2-.4 2-1.9 1.1 0 3.5-1.3 2.2-2.9 1.3-.2 2.8-1.6 2-3.6 4.4-1 2.6-3.5.6-5.4.6-2.8-1.4-4-3.9-4.6ZM12 303c-1.3 2.7-2.7 6.3-1.7 7.7.9 1.4 2.4 2.7 4.1 2.8 6.8.4 7.3 0 14.3-3.6l-1.3-.2c.5-1.3-.1-2.8-1.2-3.7s-2.5-1.2-3.9-1.5c-3.3-.7-6.6-1.1-9.9-1.4h-.3Z" class="cls-8"/><path d="M12 303h.3c3.3.3 6.7.8 9.9 1.5 1.4.3 2.8.6 3.9 1.5s1.8 2.4 1.2 3.7l1.3.2 1.2-.6c1.4-.7 2.8-1.5 4.1-2.4.3-2.2-.6-4.4-2.2-5.7-.7-.5-1.4-.9-2.2-1.2-1.3-.5-2.7-.7-4.1-.9-3.4-.4-6.7-.8-10.1-1.1-.7.7-1.3 1.5-1.7 2.3-.4.6-.9 1.6-1.4 2.6Z" class="cls-6"/><path d="M16.5 296.8c-.4.4-.9.8-1.3 1.2 3.4.3 6.7.7 10.1 1.1 1.4.2 2.8.4 4.1.9v-.3c-4.2-1.4-8.4-3.3-10.8-4.6l-2.1 1.8Z" class="cls-8"/><path d="m40.1 140.1.8.6s.5 8.1.6 9.8c.3 3.4.7 6.9.5 10.4-.3 4.8-1.8 12.3-2.2 16.7 2.5.7 4.5 1.8 3.9 4.6 2 2 3.7 4.4-.6 5.4.8 2-.7 3.4-2 3.6 1.3 1.6-1.1 2.9-2.2 2.9 1.6 3 20 6.8 24.3 7 4.9.2 22.2-2.1 25.3-2.2v-3.4c0-5.4-.6-12.5-1.2-19.5-.6-7.7-1.2-15.3-1.2-20.3s.5-9.5.7-14.7h.2c1.2 1.3 3.1 4.2 5 7.7.5-.1.9-.3 1.3-.4 5.8-1.8 7.9-3.1 9.8-6.7.5-.9.9-1.9 1.4-3.1-4.1-4-9.5-16.9-13.8-20.8-2.7-2.4-4.3-4.5-7.8-5.3-2.2-.5-9.2-1-11.2-.8 0 6.2-3.8 14.6-9.5 12-3.4-1.6-8.2-7.3-9.3-10.8h-8.7c-2 0-4.5 1-6.3 1.7-3.6 1.6-5.8 5.2-8.7 7.9-2.1 1.9-11 11-11 11 0 1.3.4 3 1.1 4.8 1.1 2.6 2.7 5.2 4.1 6.4 2.3 2.2 4.2 3.1 6.8 4.1.7.3 1.5.6 2.3.9 2.1-2.2 5-6 7.7-9.6Zm10 14.3c-2.1-.6-3.2-3.8-2.2-5.9s4-2.5 5.4-.6c-.3-2.4 1.5-4.8 3.6-4.8h.6c3.2-3.5 8.1-5 12.7-4.1 1.4.3 2.7.8 4.1 1.1s2.9.4 4.2-.1c-2.2 2.3-2.3 5.9-3.3 8.9-.9 2.7-2.6 5.3-5 6.8s-3.4 1.5-5.7 1.3c0 .4-.2.9-.3 1.2-1.4 2.7-5.1.6-6.2-.6 0 0-2.3 3.2-4.7 3.6-1.5.3-3.2-.5-4-2-.8-1.6-.5-3.9.9-4.7Z" style="stroke-width:0;fill:#eebede"/><path d="m61.5 214.6 1.3.4c-1.6.2 4.4 11.3 8.7 33.7 4 20.6 9.2 51.9 9.3 53.6.1 0 .2 0 .3.1 12.9 4.2 13.1-7.1 21-9.6 0-3.7-3.7-25.2-6-46.2-2.3-20.8-5.3-35.4-5.8-38.4-.9-5.3-1.4-6.7-1.8-11.8v2.5c-3.1 0-20.4 2.4-25.3 2.2-4.3-.2-22.7-4-24.3-7 0 1.5-.8 2-2 1.9-.7 3.9-3.1 25.1-9.2 47-6.4 23.2-10.4 35.2-10.9 50.9.3.3 1 .7 1.9 1.2 2.4 1.3 6.6 3.2 11 4.6 3.9 1.3 7.9 2.2 10.8 2 .4 0 .8 0 1.2-.1.2-.4 5.2-26.7 8.1-51.4 1.7-14.3 7.7-27.8 11.7-35.6" class="cls-6"/><path d="M92.1 69.8c.5 1.2.9 2.7.2 2.9.5 0 .9.4 1.2.8.1.2.2.4.3.7h.8c1.2.3 2.4-.8 2.8-2s.3-2.5.7-3.6c.5-1.3 1.6-2.3 1.9-3.7.4-2.4-2.1-4.5-2-7 0-2.2 2.1-4 1.7-6.2-.3-1.9-2.3-3-3.2-4.7-1.2-2.5.4-5.7-.5-8.3-1-2.6-4.2-3.8-7-4.3-2.9-.5-6-.8-8.2-2.6-1.5-1.3-2.3-3.1-4-4.1-2.8-1.6-6.4-.1-9.6-.7-2.5-.5-4.7-2.3-7.3-2.1-3.4.3-5.3 3.8-8.4 5.3-2.1 1-2.8 1.1-5.1 1.5s-4.8 1.3-5.6 3.4c-.6 1.4-.3 3.1-1 4.5-1.3 2.5-5 2.7-6.7 4.9-2 2.6-.3 6.3-1.2 9.4-.4 1.6-1.5 2.9-2.3 4.3s-1.4 3.1-.8 4.6c.9 2.2 3.8 2.9 4.9 5 .6 1.1.5 2.4.9 3.5s1.5 2.3 2.7 2h.7c.3-.4.7-.9 1.2-1.2 1.3-.8 3.2-.2 3.7 1.5.7 1.2 2.6.3 3.2-.9s-1-2.9.1-3.7 3.2-.4 4.5-1.4c1.6-1.2 1.3-4.2 3.1-5.1 1.3-.7 3 .2 4.1 1.2s2.2 2.3 3.7 2.5c2.7.3 5.1-2.9 7.6-1.9 1.4.6 2.1 2.4 3.6 2.9 1.8.5 3.4-1.2 4.6-2.6s3.1-3 4.7-2.1c.9.5 1.3 1.6 2 2.4 1.1 1.2 2.8 1.6 4.4 2s2.5.4 3.3 1.8c.1.3.3.6.4.9Z" style="stroke-width:0;fill:#d7ad75"/><path d="M29.6 299.7v.3q1.05.45 2.1 1.2c1.6 1.3 2.5 3.5 2.2 5.6 2.3-1.3 4.5-3 6.5-4.8v-.2c-3 .1-7-.8-10.8-2ZM79.3 94.5c-1.5 3-3.2 4.5-6.7 5-2.2.3-6.6-.2-8.7-1.6-1.3-.9-2.2-1.4-3.2-2.6-.7-.8 0-2.1 1-1.8 4.7 1.3 13.1 2.6 17.6 1m-35.7-8.8c.7 3.8.7 5.7 1.7 7.3 2.1 5.1 4.7 6.6 7.5 8.8 9.5 7.5 14.4 9 18.5 7.6 2.8-1 5.2-3.3 8.4-5.9 4.7-3.9 8.7-9.9 10-16 0-.4.2-.9.2-1.3.8-4.8.8-8.6.8-9.4v-.3c.6-2.9 1-4.7 1.3-6.8-.1-.3-.3-.6-.4-.9-.7-1.4-1.7-1.4-3.3-1.8s-3.3-.8-4.4-2c-.7-.8-1.1-1.9-2-2.4-1.6-.9-3.5.6-4.7 2.1-1.2 1.4-2.8 3.1-4.6 2.6-1.5-.4-2.2-2.3-3.6-2.9-2.5-1-4.9 2.3-7.6 1.9-1.5-.2-2.6-1.5-3.7-2.5s-2.7-1.9-4.1-1.2c-1.8 1-1.4 3.9-3.1 5.1-1.3.9-3.2.4-4.5 1.4s.5 2.5-.1 3.7-2.5 2.1-3.2.9c-.5-1.7-2.4-2.3-3.7-1.5-.5.3-.9.7-1.2 1.3-.5.9-.8 2-.9 3.1 0 1.8.5 3.5 1.3 5.1.7 1.4 1.5 2.8 2.7 3.6.8.5 1.7.7 2.5.4Zm14.1-9.2c0-2 .8-3.6 1.9-3.6s1.8 1.6 1.8 3.6-.8 3.6-1.8 3.6-1.9-1.6-1.9-3.6m23.6-.2c0-1.7.7-3.1 1.5-3.1s1.5 1.4 1.5 3.1-.7 3.1-1.5 3.1-1.5-1.4-1.5-3.1" class="cls-8"/><path d="M64.5 157c.1-1.2-.3-2.5-1.2-3.1.9-.4 1.8-.9 2.5-1.7s1.2-2 .9-3.1c-.3-1.3-1.5-2.1-2.7-2.2-1.2 0-2.3.4-3.3.9.1-2.2-1.4-4.3-3.2-4.7h-.6c-2.1 0-3.8 2.4-3.6 4.8-1.5-1.8-4.4-1.5-5.4.6s.1 5.3 2.2 5.9c-1.3.9-1.7 3.2-.9 4.7.8 1.6 2.5 2.3 4 2 2.4-.4 4.7-3.6 4.7-3.6 1.1 1.2 4.9 3.3 6.2.6q.3-.6.3-1.2Z" style="stroke-width:0;fill:#f3eccf"/><path d="M71.6 111.6c0-.8 0-1.5-.2-2.2-4.1 1.4-9-.1-18.5-7.6 0 3.7 0 7.1-.3 9.6 0 .4 0 .9.2 1.4 1.1 3.4 5.9 9.2 9.3 10.8 5.7 2.6 9.5-5.7 9.5-12" class="cls-8"/><path d="M57.5 143c1.8.5 3.3 2.6 3.2 4.8 1.1-.5 2.2-1 3.3-.9 1.2 0 2.4.9 2.7 2.2.3 1.1-.2 2.3-.9 3.1s-1.6 1.3-2.5 1.7c.9.6 1.3 1.9 1.2 3.1 2.3.2 3.2.2 5.7-1.3s4.1-4.1 5-6.8c1-3.1 1.1-6.6 3.3-8.9-1.3.5-2.8.4-4.2.1s-2.7-.8-4.1-1.1c-4.5-.9-9.5.6-12.7 4" style="stroke-width:0;fill:#6bc297"/><path d="M59.5 72.9c-1 0-1.9 1.6-1.9 3.6s.8 3.6 1.9 3.6 1.8-1.6 1.8-3.6-.8-3.6-1.8-3.6" class="cls-3"/><path d="M61.7 93.6c-1-.3-1.7 1-1 1.8 1.1 1.2 1.9 1.7 3.2 2.6 2.1 1.4 6.5 1.9 8.7 1.6 3.6-.5 5.2-2.1 6.7-4.9-4.5 1.5-12.9.2-17.6-1.1" style="stroke-width:0;fill:#fff"/><path d="M81.1 302.5v.2c.4.3.8.6 1.3.8 3.6 2.2 8.2 4.5 13 6.1l.2-.6c-.5-.8-.4-1.8 0-2.6.3-.8.9-1.6 1.5-2.3 1.4-1.7 2.7-3.4 4.5-4.7 1.6-1.3 3.6-2.2 5.7-2.2-1.9-1.4-3.7-2.9-4.5-3.8l-.5-.5c-7.9 2.5-8.1 13.8-21 9.6Z" class="cls-8"/><path d="M82.8 73.2c-.8 0-1.5 1.4-1.5 3.1s.7 3.1 1.5 3.1 1.5-1.4 1.5-3.1-.7-3.1-1.5-3.1" class="cls-3"/><path d="m82.3 303.5-.5.6c4 3.3 8.4 6.4 13.3 8.4 5.3 2.1 11.2 3 16.7 1.5 2.1-.6 4.3-1.6 5.4-3.5 1.1-1.8.8-4.4-.8-5.6.4.9.5 1.8.3 2.8-.3 1.5-1.5 2.8-2.9 3.4-1.4.7-3 .9-4.5 1-2 .2-4.3 0-6.6-.5-2.4-.4-4.8-1.1-7.2-2-4.7-1.7-9.4-3.9-13-6.1Z" class="cls-6"/><path d="M99.7 158.4c-1.6 2.7-2.5 5.8-3.9 8.5-1 2-2.2 3.4-3.6 5.1-.9 1.1-3.2 3.7-3.2 3.9h-1.7c.6 7.2 1.1 14.3 1.2 19.6 1.7-.4 3.7-.6 4.7-3.5.8-2.2 1.2-4.1 2-6.3 1.7-5.1 5.2-8 9.1-12.1 5.3-5.5 10.5-12.5 5.9-19.5-.8-1.1-5.2-9.1-7.1-12.6-1.9 3.7-4 5-9.8 6.7 1.5 2.7 6.3 10.5 6.5 10.1Zm-7.4-85.6c.7-.3.3-1.7-.2-2.9-.3 2-.7 3.9-1.3 6.8v.3c0 .7 0 4.6-.8 9.4 1.7 1 4-2.5 4.4-5.1.3-1.9 0-3.8-.3-5.7 0-.4-.2-.8-.3-1.2 0-.2-.2-.5-.3-.7-.3-.4-.7-.7-1.2-.8Zm0 0h-.5z" class="cls-8"/><path d="M91.8 72.8h.5z" style="stroke-width:0;fill:#8c6849"/><path d="m95.5 309-.2.6c2.4.9 4.9 1.6 7.2 2v-.5c1.9-4.7 6.6-8.4 11.6-8.8-.4-.5-.9-.8-1.3-1.1-1.2-.8-3.6-2.4-5.8-4-2.1 0-4.1.9-5.7 2.2-1.7 1.3-3.1 3-4.5 4.7s-1.1 1.4-1.5 2.3c-.3.8-.4 1.8 0 2.6Z" class="cls-6"/><path d="M116.3 304.8c-.4-1-1.2-1.9-2.1-2.7-5 .5-9.7 4.2-11.5 8.9v.5c2.2.4 4.5.6 6.5.5 1.6-.1 3.1-.3 4.5-1s2.6-1.9 2.9-3.4c.2-1 0-1.9-.3-2.8" class="cls-8"/><path d="M71.3 109.1v.3c.1.7.2 1.4.2 2.2 0 6.2-3.8 14.6-9.5 12-3.4-1.6-8.2-7.3-9.3-10.8-.2-.5-.3-1-.2-1.4.2-2.5.3-5.9.3-9.6m18.8 9.8c2.1-.2 9 .2 11.2.8 3.5.8 5.1 2.9 7.8 5.3 4.4 3.9 9.7 16.8 13.8 20.8-.5 1.2-.9 2.2-1.4 3.1-1.9 3.7-4 5-9.8 6.7-.4.1-.9.3-1.3.4" class="cls-2"/><path d="M53.3 112.8h-9.2c-2 0-4.5 1-6.3 1.7-3.6 1.6-5.8 5.2-8.7 7.9-2.1 1.9-11 11-11 11 0 1.3.4 3 1.1 4.8 1.1 2.6 2.7 5.2 4.1 6.4 2.3 2.2 4.2 3.1 6.8 4.1.7.3 1.5.6 2.3.9 2.1-2.2 5-6 7.7-9.6 2.1-2.8 4-5.5 5.2-7.2m40.7-5.7c.9 4.1.9 9 .7 14-.2 5.1-.7 10.3-.7 14.7s.6 12.5 1.2 20.3c.6 7 1.1 14.1 1.2 19.5v3.4c-3.1 0-20.4 2.4-25.3 2.2-4.3-.2-22.7-4-24.3-7m2.1-53.4v-.2s.5 8.1.6 9.8c.3 3.4.7 6.9.5 10.4-.3 4.8-1.8 12.3-2.2 16.7v.4" class="cls-2"/><path d="M103 141.6c1.9 3.5 6.3 11.4 7.1 12.6 4.6 6.9-.6 13.9-5.9 19.5-3.9 4.1-7.5 7-9.1 12.1-.7 2.2-1.2 4.1-2 6.3-1 2.8-3 3.1-4.7 3.5" class="cls-2"/><path d="M93.2 148.3c1.5 2.7 6.3 10.5 6.5 10.1m-12.8-17.3c1.2 1.3 3.1 4.2 5 7.7" class="cls-2"/><path d="M103.6 154.1c-1.7 1.1-3 2.6-4 4.3-1.6 2.7-2.5 5.8-3.9 8.5-1 2-2.2 3.4-3.6 5.1-.9 1.1-3.2 3.7-3.2 3.9m-58.7-27.1c-1.5 1.3-7.2 6.2-8 7m-2.9-17.5c-3.2 3.1-9.5 9.5-10.8 12-2.9 5.2 2 16.7 5.9 21.2 2.9 3.3 9.6 8.6 12.2 12.3" class="cls-2"/><path d="M34.1 176.7c-.2 0-.5-.2-.7-.3-5-2.5-6.3-11.9-8.1-15.5-1.1-2.2-2-3.8-3.1-5.1-1.3-1.6-3-2.7-5.6-4.1M41.5 180c.4.5 1.3 1.3 2.2 2.2 2 2 3.7 4.4-.6 5.4.8 2-.7 3.4-2 3.6 1.3 1.6-1.1 2.9-2.2 2.9 0 1.5-.8 2-2 1.9-2.2-.2-5.6-2.3-6.6-3.2-2-2-5.2-6.2-3.9-9" class="cls-2"/><path d="M33.4 176.3c1.6.5 4.2.7 6.3 1.3 2.5.7 4.5 1.8 3.9 4.6m44.8 13.3v.9c.4 5.2 1 6.5 1.8 11.8.5 3 3.5 17.6 5.8 38.4 2.3 21 6 42.5 6 46.2-7.9 2.5-8.1 13.8-21 9.6-.1 0-.2 0-.3-.1 0-1.7-5.3-33-9.3-53.6-4.3-22.4-10.3-33.5-8.7-33.7" class="cls-2"/><path d="M65.1 207.8c-.4.8-1.8 3.2-3.6 6.7-4 7.8-10 21.4-11.7 35.6-2.9 24.7-7.9 51-8.1 51.4-.4 0-.8.1-1.2.1-3 .1-7-.8-10.8-2-4.4-1.4-8.6-3.3-11-4.6-.9-.5-1.5-.9-1.9-1.2.5-15.6 4.5-27.7 10.9-50.9 6.1-22 8.5-43.1 9.2-47v-.2m32 8.4c-2.1 1.9-2.7 2.6-3.8 3.7m-12.2-106c-2.8-2.3-5.4-3.7-7.5-8.8" class="cls-2"/><path d="M92.1 69.8c-.3 2-.7 3.9-1.3 6.8v.3c0 .7 0 4.6-.8 9.4 0 .4-.2.8-.2 1.3-1.3 6.1-5.3 12.1-10 16-3.2 2.7-5.6 5-8.4 5.9-4.1 1.4-9-.1-18.5-7.6m34.5-32c-1.1-.9-7-1.1-8.1-.6m-16.1-.4c-2.1-1.1-7.7-.4-8.1.5" class="cls-1"/><path d="M81.3 76.3c0 1.7.7 3.1 1.5 3.1s1.5-1.4 1.5-3.1-.7-3.1-1.5-3.1-1.5 1.4-1.5 3.1m-23.6.2c0 2 .8 3.6 1.9 3.6s1.8-1.6 1.8-3.6-.8-3.6-1.8-3.6-1.9 1.6-1.9 3.6m19.7 13.4c-2.3 2.4-5.8 2.3-10.6.9m13 3.5c-.2 0-.3.1-.5.2-4.5 1.7-12.9.4-17.6-1-1-.3-1.7 1-1 1.8 1.1 1.2 1.9 1.7 3.2 2.6 2.1 1.4 6.5 1.9 8.7 1.6 3.6-.5 5.2-2.1 6.7-4.9" class="cls-1"/><path d="M43.6 85.8c.7 3.7.7 5.6 1.7 7.2M43 73.7c-.5-1.7-2.4-2.3-3.7-1.5-.5.3-.9.7-1.2 1.3-.5.9-.8 2-.9 3.1 0 1.8.5 3.5 1.3 5.1.7 1.4 1.5 2.8 2.7 3.6.8.5 1.7.7 2.5.4.5-.1 1-.4 1.3-.8" class="cls-2"/><path d="m93.8 74.2.3 1.2c.4 1.9.7 3.8.3 5.7-.4 2.5-2.7 6.1-4.4 5.1" class="cls-1"/><path d="M92.3 72.8c.5 0 .9.4 1.2.8.1.2.2.4.3.7" class="cls-2"/><path d="M91.8 72.8h.5" class="cls-1"/><path d="M57.5 143.1h-.6c-2.1 0-3.8 2.4-3.6 4.8-1.5-1.8-4.4-1.5-5.4.6s.1 5.3 2.2 5.9c-1.3.9-1.7 3.2-.9 4.7.8 1.6 2.5 2.3 4 2 2.4-.4 4.7-3.6 4.7-3.6 1.1 1.2 4.9 3.3 6.2.6q.3-.6.3-1.2c.1-1.2-.3-2.5-1.2-3.1.9-.4 1.8-.9 2.5-1.7s1.2-2 .9-3.1c-.3-1.3-1.5-2.1-2.7-2.2-1.2 0-2.3.4-3.3.9.1-2.2-1.4-4.3-3.2-4.7Z" class="cls-2"/><path d="M57.5 143c3.2-3.4 8.1-4.9 12.7-4 1.4.3 2.7.8 4.1 1.1s2.9.4 4.2-.1c-2.2 2.3-2.3 5.9-3.3 8.9-.9 2.7-2.6 5.3-5 6.8s-3.4 1.5-5.7 1.3M43 73.7c.7 1.2 2.6.3 3.2-.9s-1-2.9.1-3.7 3.2-.4 4.5-1.4c1.6-1.2 1.3-4.2 3.1-5.1 1.3-.7 3 .2 4.1 1.2s2.2 2.3 3.7 2.5c2.7.3 5.1-2.9 7.6-1.9 1.4.6 2.1 2.4 3.6 2.9 1.8.5 3.4-1.2 4.6-2.6s3.1-3 4.7-2.1c.9.5 1.3 1.6 2 2.4 1.1 1.2 2.8 1.6 4.4 2s2.5.4 3.3 1.8c.1.3.3.6.4.9.5 1.2.9 2.7.2 2.9H92" class="cls-2"/><path d="M37.2 73.4c-1.2.3-2.4-.8-2.7-2s-.4-2.4-.9-3.5c-1.1-2.1-4-2.9-4.9-5-.6-1.5 0-3.2.8-4.6s1.9-2.7 2.3-4.3c.9-3.1-.8-6.8 1.2-9.4 1.7-2.2 5.5-2.4 6.7-4.9.7-1.4.4-3.1 1-4.5.9-2.1 3.3-3.1 5.6-3.4 2.3-.4 3-.5 5.1-1.5 3-1.5 5-5 8.4-5.3 2.5-.2 4.8 1.6 7.3 2.1 3.2.6 6.8-.9 9.6.7 1.7 1 2.6 2.8 4 4.1 2.2 1.9 5.3 2.1 8.2 2.6s6.1 1.7 7 4.3c1 2.7-.7 5.8.5 8.3.8 1.7 2.8 2.8 3.2 4.7.4 2.1-1.7 4-1.7 6.2 0 2.4 2.4 4.5 2 7-.2 1.4-1.4 2.4-1.9 3.7-.4 1.2-.4 2.4-.7 3.6-.4 1.2-1.5 2.3-2.8 2M18.6 295l-2.1 1.8c-.4.4-.9.8-1.3 1.2-.7.7-1.3 1.5-1.7 2.3-.4.6-.9 1.6-1.4 2.6-1.3 2.7-2.7 6.3-1.7 7.7.9 1.4 2.4 2.7 4.1 2.8 6.8.4 7.3 0 14.3-3.6l1.2-.6c1.4-.7 2.8-1.5 4.1-2.4 2.3-1.5 4.5-3.1 6.5-5m40.4.8c.4.3.9.6 1.3.8 3.6 2.2 8.2 4.5 13 6.1 2.4.9 4.9 1.6 7.2 2 2.4.4 4.6.6 6.6.5 1.6-.1 3.1-.3 4.5-1s2.6-1.9 2.9-3.4c.2-1 0-1.9-.3-2.8-.4-1-1.2-1.9-2.1-2.7-.4-.4-.9-.7-1.3-1-1.2-.8-3.6-2.4-5.8-4-1.9-1.4-3.7-2.9-4.5-3.8" class="cls-2"/><path d="M16.5 296.8c-.5.2-1.1.6-1.7 1.2-3.1 2.9-7 9.6-6.6 12.5.5 3.5 3.7 5.8 7.1 6.2 2.7.3 5.2 0 7.6-1.2 7.1-3.3 13.7-7.9 19.2-13.5l.5-.5m38.2 1.8c.3.3.7.6 1 .8 4 3.3 8.4 6.4 13.3 8.4 5.3 2.1 11.2 3 16.7 1.5 2.1-.6 4.3-1.6 5.4-3.5 1.1-1.8.8-4.4-.8-5.6 0 0-.2-.1-.3-.2" class="cls-2"/><path d="M12.3 303.1c3.3.2 6.7.7 9.9 1.4 1.4.3 2.8.6 3.9 1.5s1.8 2.4 1.2 3.7M14.6 298h.6c3.4.3 6.7.7 10.1 1.1 1.4.2 2.8.4 4.1.9.8.3 1.5.7 2.2 1.2 1.6 1.3 2.5 3.5 2.2 5.6m73.6-9.6h-.3c-2.1 0-4.1.9-5.7 2.2-1.7 1.3-3.1 3-4.5 4.7s-1.1 1.4-1.5 2.3c-.3.8-.4 1.8 0 2.6m18.7-6.8c-5 .4-9.7 4.1-11.5 8.8" class="cls-2"/></svg>')}`;
export default image;