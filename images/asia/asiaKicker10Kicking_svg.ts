/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="asia" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;fill:none;stroke:#000}.cls-10,.cls-11,.cls-5,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-5{fill:#23233f}.cls-6{fill:#000}.cls-7{fill:#edd2c0}.cls-8{fill:#f1f6fc}.cls-10{fill:#cbaa99}.cls-11{fill:#fff}</style></defs><path d="M214.8 207.8c2.8 1.2 3.3 5.1 1.8 7.8s-4.4 4.5-7.2 6c-8.6 4.6-17.8 7.7-27 10.9-3.3 1.2-7.1-1.8-8.2-3.1-.4-6.8 6.4-15.7 10.4-19.4l.2.2c8.5-.8 17.3-1.8 25.8-2.6 1.5-.1 3-.3 4.3.3Z" class="cls-8"/><path d="M64.2 181.5c0-1.4 0-2.8.1-4.3 1.6-10.5 16.5-7 34.3-3.1 8.8 1.9 11.2 4.2 15.6 5.2.3 0 .7.2 1 .2 4.4 1.4 10.2 3.2 13.1 4.5 1.2.5 36.4 13.5 50.4 20.4 4.8 2.4 6 5.2 6 5.3-.1 0-.2.2-.3.3-3.9 3.7-10.7 12.7-10.4 19.4-.6.4-4.4 2.2-9.5-.4-12.3-6.1-39.5-16.9-41.2-17.1-.5 0-1-.1-1.5-.2-9.1-1.1-30.7-4.8-40.1-6.7-2.4-.6-4.3-1.2-5.6-1.7-5-2.5-11.7-9.4-12-21.9Z" class="cls-5"/><path d="M137.1 54.3c3.5 11.2 1.4 15.6-2.5 26.7-.4 1.1-4.4 9.4-5.3 8.8-1.2-.8-.5-6-.6-7.5v-1c-.4-4.1-2.9-8-6.5-10.1 0 .7 0 1.4-.1 2.2-4.1-2.1-7.7-5.2-10.4-9 0 .5-.2 1-.3 1.5-5.2-1.6-9.5-5.7-11.2-10.8-5.5 4-9.3 19.9-9.9 26.6-.4-1.2-2.4-3.2-3.1-6.3-2.9 6.2-1.6 12.1 0 18.6.2.7.4 1.4.5 2.1-1.1-.5-2.4-1.4-3.6-2.6-3.2-3.2-6.3-8.2-7.8-11.2-3.3-7-3.1-14.4-2.2-22.1.8-7.7 4.3-15.5 10.8-19.8 6.7-4.4 15.2-5.2 23.2-5 5.3.1 12.2 3.4 17.2 5.2s10.2 8.6 11.7 13.6Z" style="fill:#272728;stroke-width:0"/><path d="M136.6 303.3c2 2.3.8 6-1.7 7.8s-5.9 2.2-9 2.3c-9.7.4-20.1-3.4-29.7-4.4-1.2-.1-2.4-.3-3.1-1.2-.5-.6-.5-1.5-.5-2.3 0-3.4.2-5.8 1-9.1 12.7 1.4 14.6.6 24.9-2.1 4.5 2.3 10.4 5.4 14.5 6.9 1.4.5 2.8 1.1 3.8 2.1Z" class="cls-8"/><path d="m104.8 91.2-.2.3c-1.6 8.2 9.3 12.8 12.1 4.8-4.7-.5-7.8-2.3-11.9-5Zm3.7 15.3c-4.6-1.1-13.4-5.1-20.5-12.6l-.8.2c-1.7-6.5-3-12.4 0-18.6.8 3.1 2.8 5.1 3.1 6.3.7-6.7 4.5-22.6 9.9-26.6 1.7 5.1 6 9.3 11.2 10.8 0-.5.2-1 .3-1.5 2.7 3.7 6.3 6.8 10.4 9 0-.7 0-1.4.1-2.2 3.6 2.1 6 6 6.5 10.1h-.2c-.6 2.1-.6 10.6-8.6 19.3 0 0-4.6 5.5-8.8 6.1-.4 0-1.1 0-2.1-.2-.2 0-.3 0-.5-.1m17.4-26.4c.4-1.5 0-2.9-.9-3.1s-1.9.9-2.2 2.4c-.4 1.5 0 2.9.9 3.1s1.9-.9 2.2-2.4m-17-3.9c.3-1.5-.1-2.8-1-3s-1.9.8-2.3 2.3.1 2.8 1 3 1.9-.8 2.3-2.3" class="cls-7"/><path d="M111.8 144h-.4c0-.8-.2-1.5-.3-2.3h.3c.8-1.1 2.3-1.2 3.7-1.3 4.3 0 8.7.5 12.9 1.6.1 3.1 0 5.1-.1 5.3v.6c0 1.7-.4 3.4-1.1 4.8-1.1 2.2-2.3 2.4-3.3 3.1-1.7.7-3.3 1.2-4.8 1.6l-.3-.9c.8-5.5-.8-13.9-6.6-12.7Zm6.5 150.3c-10.4 2.7-12.2 3.6-24.9 2.1H93c-4.6-6.5 6.9-57 4.6-63.6-2.5-7-10-19.8-15.8-27.7 9.3 1.9 30.9 5.5 40.1 6.7 2.9 10.3 4.7 12.8 4.7 20.8 0 1-3.8 41.2-5.8 56.7-.5 3.6-2.3 4.8-2.3 5Z" class="cls-5"/><path d="M124.9 77c.9.2 1.3 1.5.9 3.1-.4 1.5-1.4 2.6-2.2 2.4s-1.3-1.5-.9-3.1c.4-1.5 1.4-2.6 2.2-2.4" class="cls-6"/><path d="M111.1 141.8c.1.8.2 1.5.3 2.3h.4c-11.9 3.2-10.7 1.5-20.1 3.4-.1-3.4-10.6-8.9-13.5-7.5-.9.4-1.9 1.7-2.8 3.4-3.9-.8-7.7-2.5-10.8-5.1h-.8c.3-2.9.5-5.8.8-9 0-.5.1-1.1.2-1.7h-.4c-2.2 1.9-5.4 4.5-8.6 6.9v-.2c-3-1.8-5.2-4.5-6.3-7.7s-1.1-6.7 0-9.9c3.4-3.9 6.3-7.1 6.6-7.4 4.4-4 7.6-7.2 13.4-8.4.2 7.6 5.3 14.7 12 18.3 6.8 3.6 15 4 22.5 2.2 6.3-1.5 12.5-4.6 19-4.3h.4c2.9 7.6 4.1 18.6 4.3 25.1-4.2-1.1-8.5-1.7-12.9-1.6-1.3 0-2.8.2-3.7 1.2h-.3Z" style="stroke-width:0;fill:#00cdff"/><path d="M123.3 116.3c0 .2.2.4.3.6h-.4c-6.5-.1-12.7 2.9-19 4.5-7.5 1.8-15.7 1.4-22.5-2.2-6.7-3.6-11.8-10.7-12-18.3 1.9-.4 8.4-2.3 14.6-1.3h.1c0 1.6 0 2.8-.4 3.6v.2c.6 9.3 5.4 11.9 15 8.1 3.1-2 6.2-4 9.7-4.8 4 2.1 12.9 5.7 14.5 9.7Z" class="cls-11"/><path d="M75.4 143.4c.9-1.7 1.9-3 2.8-3.4 2.9-1.4 13.4 4.2 13.5 7.4 9.4-1.8 8.2 0 20.1-3.3 5.8-1.2 7.4 7.1 6.6 12.7l.3.9c-2.1.6-4 1.1-5.8 1.4-8.4 1.3-14.9-.6-26.5-1.9-2.8 1-13.1 1.3-14.2-1.5-.7-1.7 1.1-8.1 3.3-12.2Z" class="cls-10"/><path d="M115.2 179.5c-.4 0-.7-.1-1-.2.3 0 .7.1 1 .2" style="stroke-width:0;fill:#2f4b57"/><path d="M114.2 179.2c-4.4-1-6.8-3.2-15.6-5.1-17.8-3.9-32.7-7.4-34.3 3.1-.1 1.5-.2 3-.1 4.3-3.2-12-2.2-23.1-.4-43.2h.8c3.1 2.6 6.8 4.4 10.8 5.1-2.2 4.1-3.9 10.6-3.3 12.2 1.1 2.8 11.4 2.5 14.2 1.5 11.7 1.3 18.1 3.2 26.5 1.9-.8 3.3 1.3 14.9 1.4 20.2" class="cls-5"/><path d="M116.7 96.2c-2.8 8-13.7 3.4-12.1-4.8l.2-.3c4.1 2.7 7.2 4.5 11.9 5Z" class="cls-11"/><path d="M107.9 73.2c.9.2 1.4 1.5 1 3s-1.4 2.5-2.3 2.3-1.4-1.5-1-3c.3-1.5 1.4-2.5 2.3-2.3" class="cls-6"/><path d="M108.5 106.5s.2 0 .3.1c-3.5.8-6.6 2.8-9.7 4.8-9.6 3.8-14.4 1.2-14.9-8.1v-.2q.3-1.2.3-3.6c0-1.7-.2-3.7-.3-6 1.2 1.2 2.4 2.1 3.6 2.6-.2-.7-.4-1.4-.5-2.1l.8-.2c7.1 7.5 15.9 11.5 20.5 12.6Z" class="cls-7"/><path d="M55.7 134.3v.2c-4.1 3.1-8.2 6-9.7 7.1l-.3.2c-.7 1.3-1.4 2.4-2 3.5h-.2c-3.5-4.2-6.1-6.7-9.4-7.4q1.8-3.45 3.9-7.2l.4-.6c0-.7 6.1-7.7 11.1-13.4-1.1 3.2-1.2 6.7 0 9.9 1.1 3.2 3.3 5.9 6.2 7.7" class="cls-5"/><path d="M33.2 162.7h.1c2.6.7 5.1 10.3 3.4 12.3-1.8 2.2-12.2 3.2-14 2-2.1-1.4.2-9.7 1.6-11.8 2.3-10.3 5.3-18.6 9.8-27.4 3.2.7 5.9 3.2 9.4 7.3h.2c-4 7-7.3 11.1-10.5 17.5Z" class="cls-10"/><path d="M38.5 130.1c0-.7 6.1-7.7 11.1-13.4 3.4-3.8 6.3-7.1 6.6-7.4 4.4-4 7.6-7.2 13.4-8.4q0 0 0 0c1.9-.4 8.4-2.3 14.6-1.3m-40.7 45.6c-3.5-4.1-6.1-6.6-9.4-7.3h-.3m30.6-10.4c-2.2 2-5.4 4.5-8.6 6.9-4.2 3.1-8.4 6-9.9 7.1" class="cls-1"/><path d="M38 130.7c-1.4 2.5-2.7 4.8-3.9 7.2-4.5 8.7-7.5 17.1-9.8 27.4m21.4-23.5c-.7 1.3-1.4 2.4-2 3.5-4 6.9-7.3 10.9-10.5 17.4 0 .2-.2.4-.3.6" class="cls-1"/><path d="M33.3 162.8c2.6.7 5.1 10.2 3.4 12.3-1.8 2.2-12.2 3.2-14 2-2.1-1.4.2-9.7 1.6-11.8m103.5-17.8c.2-.2.2-2.2.1-5.3-.3-6.5-1.4-17.5-4.3-25.2 0-.2-.2-.4-.3-.6-1.6-4-10.6-7.6-14.5-9.7-.1 0-.2-.1-.3-.1s-.2-.1-.3-.2m3.6 37.6c5.8-1.2 7.4 7.1 6.6 12.7m-8.1-23.5c0 3.9.4 6.4.8 8.7.1.8.2 1.5.3 2.3h.4" class="cls-1"/><path d="M123.4 155.9c-1.7.7-3.3 1.2-4.8 1.6-2.1.6-4 1.1-5.8 1.4-8.4 1.3-14.9-.6-26.5-1.9m25.6-13s0 0 0 0c-11.9 3.2-10.7 1.5-20.1 3.4-.2 0-.5.1-.7.2" class="cls-1"/><path d="M91.6 147.3c-.1-3.2-10.6-8.8-13.5-7.4-.9.4-1.9 1.7-2.8 3.4-2.2 4.1-3.9 10.6-3.3 12.2 1.1 2.8 11.4 2.5 14.2 1.5m41.7-8.9c-.2 1.7-.6 3.4-1.2 4.8-1.1 2.2-2.3 2.4-3.3 3.1m-58.8-26.7c-.3 3.2-.5 6.1-.8 8.9-1.8 20.1-2.8 31.2.4 43.2l.3 1m48.3-23.5s0 0 0 0c-.8 3.3 1.3 14.9 1.4 20.2h0m-32.4 26c9.3 1.9 30.9 5.5 40.1 6.7.6 0 1.1.1 1.5.2 1.6.2 28.9 11 41.2 17.1 5.1 2.5 8.9.7 9.5.4q0 0 0 0c-.4-6.8 6.4-15.7 10.4-19.4l.3-.3s-1.2-2.9-6-5.3c-14-6.9-49.3-19.8-50.4-20.4-2.9-1.3-8.7-3.2-13.1-4.5-.4-.1-.7-.2-1-.3-1.5-.5-2.8-.9-3.6-1.1m-34.5 25.2c1.2.5 3.2 1.1 5.6 1.7" class="cls-1"/><path d="M81.8 205.1c5.8 7.9 13.3 20.7 15.8 27.7 2.3 6.5-9.2 57.1-4.6 63.6h.4c12.7 1.4 14.6.6 24.9-2.1q0 0 0 0c0-.2 1.8-1.4 2.3-5 2-15.4 5.8-55.7 5.8-56.7 0-8-1.8-10.5-4.7-20.8m-57.4-34.7c-.1 1.5-.2 3-.1 4.3.3 12.5 7 19.4 12 21.9m97.7 26s0 .1.1.2c1.2 1.3 4.9 4.3 8.2 3.1 9.1-3.2 18.4-6.3 27-10.9 2.8-1.5 5.7-3.3 7.2-6s1-6.6-1.8-7.8c-1.3-.6-2.8-.4-4.3-.3-8.5.8-17.3 1.8-25.8 2.6m-68.8-30.6h-.4c-.4 0-.7-.1-1-.2-4.4-1.1-6.8-3.3-15.6-5.2-17.8-3.9-32.7-7.4-34.3 3.1" class="cls-1"/><path d="M64.6 130v-.7c0-.5.1-1.1.2-1.7.4-2.4 1.2-5.6 2.1-8.6" style="fill:none;stroke:#000;stroke-miterlimit:10"/><path d="M93.5 296.2v.2c-.8 3.3-1 5.7-1 9.1 0 .8 0 1.6.5 2.3.7.9 2 1.1 3.1 1.2 9.6 1.1 20 4.9 29.7 4.4 3.2-.1 6.5-.5 9-2.3s3.8-5.6 1.7-7.8c-.9-1.1-2.4-1.6-3.8-2.1-4.1-1.5-10-4.6-14.5-6.9-.3-.1-.6-.3-.8-.4m-8.3-187.3h-.3c-3.5.8-6.6 2.8-9.7 4.8-9.6 3.8-14.4 1.2-14.9-8.1" class="cls-1"/><path d="M69.6 100.7v.2c.2 7.6 5.3 14.7 12 18.3 6.8 3.6 15 4 22.5 2.2 6.3-1.5 12.5-4.6 19-4.3m-58.5 21.2c3.1 2.5 6.8 4.3 10.8 5.1.3 0 .6.1.8.1m-26.6-26.7c-1.1 3.2-1.2 6.7 0 9.9 1.1 3.2 3.3 5.9 6.2 7.7m72.4 7.9h-.3c-4.2-1.1-8.5-1.7-12.9-1.6-1.3 0-2.8.2-3.7 1.2m-.2-35.1c-.4 0-1.1 0-2.1-.2-.2 0-.3 0-.5-.1-4.6-1.1-13.4-5.1-20.5-12.6m40.4-12.5c-.6 2.1-.6 10.6-8.6 19.2 0 0-4.6 5.5-8.8 6.1m-7.5-39.2c3.9-1.1 7.6-.4 8.9 1.5m7.9 19.8c-.2 4.3-9.4 1.7-10.6.2m13-9.6c-.4 1.5 0 2.9.9 3.1s1.9-.9 2.2-2.4c.4-1.5 0-2.9-.9-3.1s-1.9.9-2.2 2.4m-17.1-3.9c-.4 1.5.1 2.8 1 3s1.9-.8 2.3-2.3c.3-1.5-.1-2.8-1-3s-1.9.8-2.3 2.3m11.1 20.7c-4.7-.5-7.8-2.3-11.9-5l-.9-.6" class="cls-1"/><path d="M116.7 96.2c-2.8 8-13.7 3.4-12.1-4.8m-20.5 2.2c.1 2.3.3 4.4.3 6s0 2.8-.4 3.6" class="cls-1"/><path d="M84.1 93.5c-3.2-3.2-6.3-8.2-7.8-11.2-3.3-7-3.1-14.4-2.2-22.1.8-7.7 4.3-15.5 10.8-19.8 6.7-4.4 15.2-5.2 23.2-5 5.3.1 12.2 3.4 17.2 5.2s10.2 8.6 11.7 13.6c3.5 11.2 1.4 15.6-2.5 26.7-.4 1.1-4.4 9.4-5.3 8.8-1.2-.8-.5-6-.6-7.5v-1c-.4-4.1-2.9-8-6.5-10.1 0 .7 0 1.4-.1 2.2-4.1-2.1-7.7-5.2-10.4-9 0 .5-.2 1-.3 1.5-5.2-1.6-9.5-5.7-11.2-10.8-5.5 4-9.3 19.9-9.9 26.6-.4-1.2-2.4-3.2-3.1-6.3-2.9 6.2-1.6 12.1 0 18.6.2.7.4 1.4.5 2.1-1.1-.5-2.4-1.4-3.6-2.6Z" class="cls-1"/><path d="M189.4 83.9h20.3v32.8h-20.3z" class="cls-11"/></svg>')}`;
export default image;