/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#957346}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-7{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#636567}.cls-3{fill:#fbd00d}.cls-4{fill:#debea3}.cls-5{fill:#b3292e}.cls-7{fill:none}</style></defs><path d="M86.2 112.9c-11 1.5-14.8 8.9-16.5 29-.2 2.8-.5 5.4-.8 7.8h-.3c0-4.9.2-8.4-.2-12.4-3.6 3.3-3.5 3-4.9 4-.2.2-.5.4-.8.5-4.5-2.4-6.7-10.8-7.1-14v-1.1c.1-1 4.3-4.8 5.1-5.4 3.9-3.5 6.7-6.4 11.9-7.4 1.4-.3 8.2-1.1 13.7-1Z" class="cls-3"/><path d="M51.5 149.8c-4.4 8-7.7 11.8-11 18.4h0c2.3.7 4.4 9 2.9 10.8-1.6 2-10.7 2.8-12.3 1.7-1.8-1.2.2-8.5 1.4-10.3 2.5-11.5 4-17.5 10.8-27.1 3-4.4 9.1-12.3 12.2-15.4h0c.4 3.2 2.5 11.6 7.1 14-3.2 2.2-7.6 5-11.3 7.9Z" class="cls-4"/><path d="M40.5 168.2c0 .2-.2.3-.2.5m24.8-28.4c-.4.4-1 .7-1.5 1.1" class="cls-7"/><path d="M124.6 147.9c-.1.1-.5.3-1 .4-2.2.4-7.3.3-11.6.9-.4 0-.8.1-1.1.2-.7.1-1.4.3-2 .4-.3-2.7-.7-2.9-.8-7.5-.1-5.5-1.1-9.8.5-14.4.5-1.4 1.1-2.9 2.2-3.9 1-1 2.5-1.5 3.9-1.2 2.4 1.4 4.5 3 5.2 4.7 4 9.9 5 20 4.5 20.5Z" class="cls-3"/><path d="M122.6 159.6c-1 2-2 2.1-2.9 2.7-3.6 1.4-6.5 2.2-9.3 2.6-7.4 1.2-13.1-.5-23.3-1.6-2.5.9-11.5 1.2-12.5-1.3-.8-2.1 2.6-12.5 5.3-13.8 2.5-1.2 11.7 3.7 11.9 6.5h0c7.5-1.4 10.9-.9 18.9-2.7.5-.1 1.1-.2 1.6-.4-.1-.8-.2-1.8-.3-2.5 4.3-.6 9.4-.5 11.6-.9h0c.3 3.2.5 8.2-1 11.3Z" class="cls-4"/><path d="M91.8 154.9c-.2 0-.4 0-.7.1m23.1-3.8c-.6.2-1.2.3-1.8.5m-35.9-40.5h-.1" class="cls-7"/><path d="M139.2 88a21.4 21.4 0 0 0-4.9-3.4h0c-.3-.2-.7-.4-1-.5-6.1-2.9-13.6-3.6-19.8-3-.7-4.8-1.7-10.6-1.5-15.4-1.5 5.1-1.7 9.9-3.5 14.8-3.6.3-6.4.3-9.4.3h0c-2.3 13.5-2.2 16.6 4.1 27.1-1.8.4-4.4.8-7.4 1.2-1.3.2-2.8.4-4.2.6-5.4.7-11.1 1.3-15 1.7h0c-.6 0-1.2.1-1.7.2-1-3.8 1.2-6.7.7-10.7-1.8-15.1-.7-22.7 5.6-31.8 3.9-5.6 12-16.6 21.7-13 0 0 2.9-2.8 5.7-2 21.5 3.9 31.3 15.9 30.6 34.2Z" class="cls-1"/><path d="M105.1 58.9c-7.9 4.5-10.9 16.2-9.6 21.9H99" class="cls-7"/><path d="M132.8 116.2c-7.3 1.5-9.6 2.1-17 1.2 3.2-1.4 7.4-5.4 7.4-5.4 6.5-5.9 5-17.8 5.5-19.6.5-2.1 2.7-4.9 4.6-8.4.3.2.7.3 1 .5-3 8.5-4.5 23.2-1.5 31.7" class="cls-1"/><path d="M113.4 81c-.7-4.8-1.7-10.6-1.5-15.4-1.5 5.1-1.7 9.9-3.5 14.8-3.6.3-6.4.3-9.4.3h0c-2.3 13.5-2.2 16.6 4.1 27.1-1.8.4-4.4.8-7.4 1.2v.3c.5 1.4 6.2 4.3 11.4 6.3 3.6 1.4 7 2.4 7.9 2.1.2 0 .5-.2.8-.3h0c3.2-1.4 7.4-5.4 7.4-5.4 6.5-5.9 5-17.8 5.5-19.6.5-2.1 2.7-4.9 4.6-8.4-6.1-2.9-13.6-3.6-19.8-3ZM109 92.4c.2-1.3 1-2.2 1.8-2.1.7.1 1.2 1.3.9 2.6-.2 1.3-1 2.2-1.8 2.1s-1.2-1.3-.9-2.6m.7 10.5c3.7 2.4 6.3 4.1 10.2 4.5-2.3 6.4-9.9 6-10.2-4.5m15.9-7.1c-.2 1.3-1 2.3-1.7 2.2s-1.1-1.3-.9-2.6 1-2.3 1.7-2.2 1.1 1.3.9 2.6" class="cls-4"/><path d="M119.9 107.4c-2.3 6.4-9.9 6-10.2-4.5 3.7 2.4 6.3 4.1 10.2 4.5" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M126.2 89.7c-.2-2.2-2.2-2.1-3.1-.9m-10.7-3.2c-1.1-1.6-3.2-2.1-5.3 0m12.8 12.5c.4 2 .5 3.3 2.8 2.9-.9 2-1.6 2.3-3.5 2.9" class="cls-7"/><path d="M125.6 95.8c-.2 1.3-1 2.3-1.7 2.2s-1.1-1.3-.9-2.6 1-2.3 1.7-2.2 1.1 1.3.9 2.6m-13.9-2.9c-.2 1.3-1 2.2-1.8 2.1s-1.2-1.3-.9-2.6c.2-1.3 1-2.2 1.8-2.1.7.1 1.2 1.3.9 2.6" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M120.4 107.5h-.4m-52.1 78.1c0-.3-.2-.6-.2-.9" class="cls-7"/><path d="M108.7 127.8c-1.6 4.6-.6 9-.5 14.4 0 4.6.5 4.8.8 7.5.6-.2 1.3-.3 2-.4 0 1.1-.1 1.6-.2 2.7-8 1.8-11.4 1.3-18.9 2.8h0c-.1-2.9-9.3-7.8-11.9-6.6-2.7 1.3-6.1 11.7-5.3 13.8 1 2.5 10 2.2 12.5 1.3 10.2 1.1 15.9 2.8 23.3 1.6-.8 2.8 1.1 13.1 1.2 17.8-1.3-.4-2.4-.7-3.2-1-2.4-1-5.1-2.3-10.5-3.5-15.6-3.4-28.7-6.5-30.1 2.7-.1 1.3-.2 2.6-.1 3.8-2.7-10.4-.6-17.9 1.2-34.9.3-2.4.5-5 .8-7.8 1.8-20.1 5.5-27.6 16.5-29h0c1.4 0 2.7.1 3.7.3h.4c-1 2.7-2.4 5.7-2.9 7.2.5 5.3 3.7 7.7 7.5 8.5s9.5-1.5 12-5.5c-.2-1.9-.2-3.3-.1-4.8 1.7 1 5.1 2.4 8 4.1-1.4-.3-2.9.2-3.9 1.2-1.1 1-1.8 2.5-2.2 3.9Z" class="cls-3"/><path d="M68.4 137.4c-.2-1.9-.6-3.9-1.1-6.3" class="cls-7"/><path d="M125.7 188.3c-2.9 2.7-7 13.2-6.2 20.2h0c0 .8.3 1.6.5 2.3 0 .2 0 .3.2.4q0 0 0 0c0 .2 0 .3.1.5-1.4.7-26.7-4.2-37.2-6.3-2.1-.5-3.8-1-4.9-1.5-4.4-2.2-10.3-8.3-10.6-19.3 0-1.2 0-2.5.1-3.8 1.4-9.2 14.5-6.1 30.1-2.7 5.5 1.2 8.1 2.5 10.5 3.5 1 .4 2 .8 3.2 1.1.3 0 .6.1.8.2 5.7 1.8 14.2 4.4 13.2 5.3Z" class="cls-2"/><path d="M120.3 211.7v-.1c0-.1-.1-.2-.2-.4m-7.6-28.3c-.3 0-.6-.2-.8-.3m8.5 28.6c0-.1 0-.3-.1-.4" class="cls-7"/><path d="M122.3 232.8c-.5 0-.9.2-1.4.2-7.8 1.3-12.5 1.6-21.2.7-1.1 0-2.2-.2-3.4-.4-1.4-4.2-5.9-18.1-13.2-28 10.5 2.1 35.8 7 37.2 6.3 1.8 7.9 2.4 14.6 2 21.1Z" class="cls-2"/><path d="M116.6 255.3c-2.6 9.7-5.3 19.6-8.8 28.8l.2.3c-1.2.8-1.9 2.1-2.6 3.4s-1.5 2.5-2.9 3.1c-2 .9-5.5-.9-6.8-2.9-.2-10.2-.3-26.1 2.5-34.5 1.1-3.1 2.2-6.8 2.7-10.1.5-3.4.2-5.9-1.3-9v-.6c8.8.9 13.5.6 21.3-.7v.4c2.9 4.5-1.9 12.6-4.4 21.9Z" class="cls-4"/><path d="M133.3 311.8c-3 1.3-6.5.9-9.7.2-9.9-2-19.5-5.7-29-9.3-1.1-.4-2.4-1-2.9-2.1-.4-.8-.2-1.8 0-2.6.8-3.8 2-7.4 3.6-10.9 0 .3.2.6.4.9 1.3 2.1 4.8 3.8 6.8 2.9 1.3-.6 2.2-1.9 2.9-3.1s1.4-2.6 2.6-3.4q0 0 0 0c1.2-.8 2.2-.9 3.2.3h0c7.4 5.3 14.8 10.6 22.2 15.8 1.3.9 2.6 1.9 3.3 3.3 1.5 3-.6 6.7-3.6 8.1Z" class="cls-5"/><path d="M171.4 221.3v.2h-.2c-18.9-7.8-21.4-.2-32.8-10.6-10.2-1.9-11.4.2-18.4-.2-.2-.8-.4-1.5-.6-2.3h0c-.8-7 3.2-17.6 6.2-20.2 8.6 3.5 7.9 2.1 18.6 8.7 14 5.2 21.6 8.2 35.7 13.3 0 1.4.4 2.2 1 3.5.6 1.2-8.7 11.2-9.6 7.6Z" class="cls-4"/><path d="M180 210.3c0-1.3-.3-.1.8 0m.2-.1h-.3" class="cls-7"/><path d="M213.5 215.7c-1.5 2.7-4.4 4.5-7.2 6-8.6 4.6-17.8 7.7-27 10.9-1.1.4-2.3.8-3.3.2l-.2.2-.1-.1c-.3-.4-.6-.9-.8-1.3-1.5-3.2-2.7-6.5-3.4-10v-.2c.9 3.7 10.2-6.4 9.6-7.6s-1-2.1-1-3.5h.8c8.3-.8 18.5-1.9 26.7-2.6 1.5-.1 3-.2 4.3.3 2.8 1.2 3.3 5.1 1.8 7.8Z" class="cls-5"/><path d="M112.5 182.9h.5" class="cls-7"/><path d="M91.5 109.6c0 .7-.4 1.6-.7 2.7-4.5-.4-9.8-.3-14.3-1.1 3.9-.4 9.7-1 15-1.7Z" class="cls-1"/><path d="M106.8 118.6c0 1.5 0 2.9.1 4.8-2.5 4-8.2 6.3-12 5.5s-7-3.2-7.5-8.5c.5-1.5 1.9-4.4 2.9-7 .1-.4.3-.7.4-1.1.4-1.1.7-2 .7-2.7q2.25-.3 4.2-.6v.3c.5 1.4 6.2 4.3 11.4 6.3v.2c-.2 1-.3 1.9-.3 2.8Z" class="cls-4"/><path d="M115.2 122.8h-.3m-2.9 26.4v-.2" class="cls-7"/></svg>')}`;
export default image;