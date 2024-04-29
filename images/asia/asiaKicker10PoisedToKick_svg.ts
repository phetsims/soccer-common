/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="asia" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-10,.cls-3,.cls-5,.cls-6,.cls-7,.cls-9{stroke-width:0}.cls-5{fill:#23233f}.cls-6{fill:#cbaa99}.cls-7{fill:#f1f6fc}.cls-9{fill:#edd2c0}.cls-10{fill:#00cdff}</style></defs><path d="M64.3 92c5.7 6 12.4 9.8 17.3 11.6 1.4 1.1.2 7.4-6 7-9.6-.7-12.1-5.3-14.9-8.8l-.3-.5c.7-1.6.3-5.1 0-9.6 1.2 1.2 2.4 2.1 3.6 2.6-.2-.7-.4-1.4-.5-2.1z" class="cls-9"/><path d="m81.1 89.4-.2.3c-1.6 8.1 9.3 12.8 12.1 4.7-4.7-.5-7.8-2.3-11.9-5m21.1-11.2c.4-1.5 0-2.9-.9-3.1s-1.9.9-2.2 2.4 0 2.9.9 3.1 1.9-.9 2.2-2.4m-3.7-8.8c3.6 2.1 6 6 6.5 10.1h-.2c-.6 2.1-.6 10.6-8.6 19.3 0 0-4.6 5.5-8.8 6.1-.7.1-2 0-3.8-.6-.6-.2-1.3-.4-2.1-.7-4.8-1.8-11.6-5.6-17.3-11.6l-.8.2c-1.7-6.5-3-12.4 0-18.6.8 3.1 2.8 5.1 3.1 6.3.7-6.7 4.5-22.6 9.9-26.6 1.7 5.1 6 9.3 11.2 10.8 0-.5.2-1 .3-1.5 2.7 3.7 6.3 6.8 10.4 9 0-.7 0-1.4.1-2.2Zm-13.2 4.9c.3-1.5-.1-2.8-1-3s-1.9.8-2.3 2.3c-.3 1.5.1 2.8 1 3s1.9-.8 2.3-2.3" class="cls-9"/><path d="M137.2 303c2 2.3.8 6-1.7 7.8s-5.9 2.2-9 2.3c-9.7.4-20.1-3.4-29.7-4.4-1.2-.1-2.4-.3-3.1-1.2-.5-.6-.5-1.5-.5-2.3 0-1.7.3-5.7.6-7.4v-.4c8 1.1 14.7 1.1 19.6-5.5 6 2.9 14.4 6.9 20.1 9 1.4.5 2.8 1.1 3.8 2.1Z" class="cls-7"/><path d="M133.9 170.6c1.6 3.8-2.4 7.8-5.5 10.3s-5 3.5-8.2 1.2c-1.5-1.1-2.8-2.8-3.2-4.8v-.4c-.3-3.7 6.1-10.9 7.4-11.2 3.7-1.2 8 1 9.6 4.8Z" class="cls-6"/><path d="M40.7 290.1c-2 1.1-5 3.2-10.1 2.7-5.2-.6-5.8-.9-10.7-3.9.3-10.7 3.9-16.3 4.9-18.9 7.2-19.6 9.2-22.4 11.3-34.5 2.3-12.7.6-24.5 3.6-38.8v-.4c18.1 6.8 48 7.2 51.8.5h.2c5.2 9 16.6 31.1 20.4 43.2.9 2.7 3.8 48.3 1.6 51.4-.1.2-.2.3-.3.5-5 6.6-11.7 6.6-19.6 5.5h-.2c-3.3-3.3-4.1-18.4-3.9-36.5 0-6.9-4.8-15.2-6.9-19.1-4-7.3-8.3-14.9-14-20.9-5.5 17.8-7.3 25.1-9.5 30.5-.6 1.5-7.1 19.4-11.9 30-1.5 3.3-5.9 8.3-6.3 8.5 0 0-.2 0-.2.1Z" class="cls-5"/><path d="M124.3 165.8c-1.3.3-7.7 7.5-7.4 11.2h-.2c-1.9-5.6-10.2-13-16.4-19.5 2.8-5 6-7 10.4-8.2v.2c4.4 6.4 6.2 10.8 13.5 16.3Z" class="cls-6"/><path d="M111.5 149c-.2 0-.5.1-.7.2-4.5 1.3-7.6 3.2-10.4 8.2-3.3-3.4-6-6.6-6.9-9.1h.3c1.8-4.9 6.5-8.5 11.6-9 2.1 4.2 4.5 7.8 6.1 9.8Z" class="cls-5"/><path d="M113.4 52.5c3.5 11.2 1.4 15.6-2.5 26.7-.4 1.1-4.4 9.4-5.3 8.8-1.2-.8-.5-6-.6-7.5v-1c-.4-4.1-2.9-8-6.5-10.1 0 .7 0 1.4-.1 2.2-4.1-2.1-7.7-5.2-10.4-9 0 .5-.2 1-.3 1.5-5.2-1.6-9.5-5.7-11.2-10.8-5.5 4-9.3 19.9-9.9 26.6-.4-1.2-2.4-3.2-3.1-6.3-2.9 6.2-1.6 12.1 0 18.6.2.7.4 1.4.5 2.1-1.1-.5-2.4-1.4-3.6-2.6-3.2-3.2-6.3-8.2-7.8-11.2-3.3-7-3.1-14.4-2.2-22.1.8-7.7 4.3-15.5 10.8-19.8 6.7-4.4 15.2-5.2 23.2-5 5.3.1 12.2 3.4 17.2 5.2s10.2 8.6 11.7 13.6Z" style="stroke-width:0;fill:#272728"/><path d="M103.4 135.1c.6 1.4 1.3 2.8 1.9 4.2-5.1.6-9.8 4.2-11.6 9h-.3s0-.2-.1-.3c-.3-9.7-.9-19.1-1.6-26.4l-1.1-.2c2.4-1.2 3.9-3 4.1-5.7 3.5 6 6.1 13.3 8.7 19.5Z" class="cls-10"/><path d="M101.3 75.1c.9.2 1.3 1.5.9 3.1-.4 1.5-1.4 2.6-2.2 2.4s-1.3-1.5-.9-3.1 1.4-2.6 2.2-2.4" class="cls-3"/><path d="M91.6 196.7h-.2c-3.8 6.7-33.7 6.3-51.6-.5 0 0-.2 0-.3-.1-.9-7 1.1-17.5 2-23.4q2.85 2.25 6.3 4.8c1.4 2.3 8.9 8.6 11.6 7.4 2.3-1 7.2-10.9 5.9-13.7-1.2-2.6-12.7-5.2-15-3.2-3.1-3.7-5.5-7.5-8.1-11.6v-9.6c16.1 4.6 46.3 10 50.9 3.9h.3c.7 21.9.3 44-1.8 45.8Z" class="cls-5"/><path d="M42.3 136.6c-1.6 2.2-3.2 4.3-4.6 6.4l-.2-.2c-3.6-4-8.5-6.8-13.8-7.9.3-.9.7-1.9 1.1-2.8v-.2c.6-1.6 6.7-12.6 12.9-20.2 14.2 7.2 42.4 14.7 52.9 9.5l1.1.2c.7 7.4 1.2 16.8 1.6 26.4 0 1 0 2 .1 3h-.3c-4.6 6.1-34.8.8-50.9-3.9v-10.4Z" class="cls-10"/><path d="M83.6 104.6c4.7 1.7 8.2 5.9 11.2 11-.2 2.7-1.7 4.5-4.1 5.7-10.5 5.2-38.7-2.3-52.9-9.5 2.9-3.6 5.8-6.4 8.2-7.2 5.6-2.2 10.6-1.8 14.5-2.5l.3-.3c2.9 3.5 5.3 8.1 14.9 8.8 6.1.4 7.3-5.9 6-7 .7.3 1.4.5 2.1.7v.3Z" class="cls-7"/><path d="M93 94.4c-2.8 8-13.7 3.4-12.1-4.7l.2-.3c4.1 2.7 7.2 4.5 11.9 5" style="stroke-width:0;fill:#fff"/><path d="M84.3 71.4c.9.2 1.4 1.5 1 3-.3 1.5-1.4 2.5-2.3 2.3s-1.4-1.5-1-3c.3-1.5 1.4-2.5 2.3-2.3" class="cls-3"/><path d="M50.2 168.3c2.2-2.1 13.7.5 15 3.1 1.3 2.8-3.7 12.7-5.9 13.7-2.7 1.2-10.1-5.1-11.6-7.4q-3.45-2.55-6.3-4.8c-5.4-4.3-9.6-8-13.4-12.9h.1c1-6.3 7.9-9.6 9.5-9.9 1.6 2.3 3 4.5 4.3 6.6 2.6 4.1 5 7.8 8.1 11.6Z" class="cls-6"/><path d="M57.8 307c1.7 7.6-4.3 9.7-10.5 8.3-9.8-2.2-15-5.4-29.9-15.7-1-.7-2.1-1.3-2.4-2.5-.2-.9.1-1.7.5-2.5.6-1.4 3.4-4.4 4.4-5.7 4.9 3 5.5 3.4 10.7 3.9 5.1.5 8.2-1.6 10.1-2.7 3.5 6.9 6.2 9.8 13.8 14.2 1.3.8 3 1.2 3.3 2.7" class="cls-7"/><path d="M35.3 146.4c.9 1.2 1.7 2.4 2.5 3.6-1.6.3-8.5 3.6-9.5 9.8h-.1c-2-2.5-4-5.4-6-9-1.8-3.1-.8-9.3 1.6-15.9 5.3 1.1 10.2 3.9 13.8 7.9l.2.2c-.8 1.2-1.6 2.3-2.3 3.4Z" class="cls-5"/><path d="M24.9 132c.6-1.6 6.6-12.6 12.8-20.2 2.9-3.5 5.8-6.3 8.2-7.1M38 150h-.2c-1.6.3-8.5 3.6-9.5 9.8m21.8-34.4c-2.2 3.4-5 7.4-7.8 11.2-1.6 2.2-3.2 4.3-4.6 6.4-.8 1.2-1.6 2.3-2.3 3.4m57.9 1.5c-.3-9.7-.9-19.1-1.6-26.4m-50.1 51.3s0 0 0 0c-1 5.9-3 16.3-2 23.4 0 0 .2 0 .3.1 18 6.8 47.9 7.2 51.6.5h.2c2.2-1.8 2.5-23.9 1.8-45.8 0-1 0-2-.1-3m-51.1-11.7v20.2" class="cls-1"/><path d="M24.8 132.1c-.4 1-.8 1.9-1.1 2.8-2.4 6.6-3.4 12.7-1.6 15.9 2 3.5 4 6.5 6 9.1 3.8 4.9 8 8.6 13.4 12.9q2.85 2.25 6.3 4.8m-13.8-33c.4.6.9 1.2 1.3 1.8.9 1.2 1.7 2.4 2.5 3.6 1.6 2.3 3 4.5 4.3 6.6 2.6 4.1 5 7.8 8.1 11.6.1.2.3.4.4.5m31.9-64.4c.3 0 .7.2 1 .3 4.7 1.7 8.2 5.9 11.2 11 3.5 6 6.1 13.3 8.7 19.5.6 1.4 1.3 2.8 1.9 4.2 2.1 4.2 4.5 7.8 6.1 9.8-.2 0-.5.1-.7.2-4.5 1.3-7.6 3.2-10.4 8.2" class="cls-1"/><path d="M50.3 168.2c2.2-2 13.7.6 15 3.2 1.3 2.8-3.7 12.7-5.9 13.7-2.7 1.2-10.1-5.1-11.6-7.4m45.3-31.2c0 .4 0 .9.2 1.4q0 0 0 0c0 .1 0 .3.1.4.9 2.6 3.6 5.7 6.9 9.2 6.2 6.5 14.5 13.9 16.4 19.5m-5.8-27.5c4.3 6.4 6.2 10.8 13.5 16.3" class="cls-1"/><path d="M124.3 165.8c-1.3.3-7.7 7.5-7.4 11.2v.4c.5 2 1.7 3.6 3.2 4.8 3.2 2.4 5.1 1.4 8.2-1.2 3.1-2.5 7.1-6.5 5.5-10.3s-5.9-6.1-9.6-4.8m-78.3-61.3c5.6-2.2 10.6-1.8 14.5-2.5m-20.7 94.6c-3 14.3-1.3 26.1-3.6 38.8-2.2 12.1-4.2 14.8-11.3 34.5-.9 2.6-4.6 8.2-4.9 18.9 4.9 3 5.5 3.4 10.7 3.9 5.1.5 8.2-1.6 10.1-2.7 0 0 .2 0 .2-.1.4-.2 4.8-5.2 6.3-8.5 4.8-10.6 11.3-28.5 11.9-30 2.2-5.5 4-12.7 9.5-30.5q2.1-6.9 5.1-16.2" class="cls-1"/><path d="m68.2 220.4.5.5c5.7 6 10 13.6 14 20.9 2.1 3.9 7 12.2 6.9 19.1-.3 18.1.6 33.2 3.9 36.5h.2c7.9 1.1 14.6 1.1 19.6-5.5.1-.2.2-.3.3-.5 2.2-3.1-.8-48.7-1.6-51.4-3.8-12.1-15.2-34.2-20.4-43.2-.2-.3-.3-.6-.5-.8" class="cls-2"/><path d="M81.6 103.6c1.4 1.1.2 7.4-6 7-9.6-.7-12.1-5.3-14.9-8.8m-20 188.3v-.1m-20.8-1.2c-1 1.3-3.8 4.3-4.4 5.7-.3.8-.7 1.7-.5 2.5.3 1.2 1.4 1.8 2.4 2.5 14.9 10.3 20 13.4 29.9 15.7 6.2 1.4 12.2-.6 10.5-8.3-.3-1.5-2-1.9-3.3-2.7-7.6-4.4-10.3-7.3-13.8-14.2m52.9 7.8c-.2 1.7-.6 5.7-.6 7.4 0 .8 0 1.6.5 2.3.7.9 2 1.1 3.1 1.2 9.6 1.1 20 4.9 29.7 4.4 3.2-.1 6.5-.5 9-2.3s3.8-5.6 1.7-7.8c-.9-1.1-2.4-1.6-3.8-2.1-5.7-2.1-14.2-6.1-20.1-9" class="cls-1"/><path d="M87.4 104.9c-.7.1-2 0-3.8-.6-.6-.2-1.3-.4-2.1-.7-4.8-1.8-11.6-5.6-17.3-11.6m40.6-12.5c-.6 2.1-.6 10.6-8.6 19.2 0 0-4.6 5.5-8.8 6.1m-7.5-39.2c3.9-1.1 7.6-.4 8.9 1.5M96.7 87c-.2 4.3-9.4 1.7-10.6.2m13-9.7c-.4 1.5 0 2.9.9 3.1s1.9-.9 2.2-2.4c.4-1.5 0-2.9-.9-3.1s-1.9.9-2.2 2.4M82 73.7c-.3 1.5.1 2.8 1 3s1.9-.8 2.3-2.3c.3-1.5-.1-2.8-1-3s-1.9.8-2.3 2.3m11 20.7c-4.7-.5-7.8-2.3-11.9-5l-.9-.6" class="cls-1"/><path d="M93 94.4c-2.8 8-13.7 3.4-12.1-4.7m-20.4 2c.3 4.5.6 8 0 9.6m-22.7 10.5c14.2 7.2 42.4 14.7 52.9 9.5 2.4-1.2 3.9-3 4.1-5.7v-.4M42 147h.2c16.1 4.6 46.3 10 50.9 3.9m-69.6-16h.2c5.3 1.1 10.2 3.9 13.8 7.9m67.9-3.5s0 0 0 0c-5.1.6-9.8 4.2-11.6 9" class="cls-1"/><path d="M60.5 91.7c-3.2-3.2-6.3-8.2-7.8-11.2-3.3-7-3.1-14.4-2.2-22.1.8-7.7 4.3-15.5 10.8-19.8 6.7-4.4 15.2-5.2 23.2-5 5.3.1 12.2 3.4 17.2 5.2s10.2 8.6 11.7 13.6c3.5 11.2 1.4 15.6-2.5 26.7-.4 1.1-4.4 9.4-5.3 8.8-1.2-.8-.5-6-.6-7.5v-1c-.4-4.1-2.9-8-6.5-10.1 0 .7 0 1.4-.1 2.2-4.1-2.1-7.7-5.2-10.4-9 0 .5-.2 1-.3 1.5-5.2-1.6-9.5-5.7-11.2-10.8-5.5 4-9.3 19.9-9.9 26.6-.4-1.2-2.4-3.2-3.1-6.3-2.9 6.2-1.6 12.1 0 18.6.2.7.4 1.4.5 2.1-1.1-.5-2.4-1.4-3.6-2.6Z" class="cls-2"/></svg>')}`;
export default image;