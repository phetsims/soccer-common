/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#423b38}.cls-1,.cls-2,.cls-3,.cls-5,.cls-9{stroke-linecap:round;stroke-linejoin:round;stroke:#000}.cls-2{fill:#6f80a3}.cls-3{fill:#a37c66}.cls-5{fill:#7396ce}.cls-9{fill:none}</style></defs><path d="M99.9 187.6h-.3c-6.4-1.6-18.3 4.2-23.4 12.2l-.2.2c-1-1.5-2.1-3.1-3.4-5.1 0-.7.1-1.4.2-2h-.6c-8.9-3.4-19.1-3.5-28-.1h-.8c-1.1-9.5-1.7-20.5-.3-32.6 3.8 3 15.5 4.9 21.6 5.7h.4c.4 0 .7 0 1.1.1 6.7.7 16.8-1.9 22.6-4.8 4 7.4 7.8 16.6 11.2 26.5Z" class="cls-2"/><path d="M73.8 108.6c-2.1-1.3-5.9-3.5-9.5-8-4.6-5.8-6.3-11.9-8.5-18.3h-1.2c1.3-.4 2.4-.8 3.3-1 .5-3.6.6-5.9.4-9.4v-.7c.9 1.2 1.9 2.3 3.1 3.5l.2.4c3.6 3.9 6.8 6.5 9.7 6.4.7 0 1.4-.1 2.1-.4h0c0 .4 0 .6-.1.8h0c.8.2 1.5.4 2.3.6h0c2.4 6.1 1.8 24.1-1.9 26.1Z" class="cls-3"/><path d="M74.4 86c-1.6-1.8-1.5-2.4-1.1-4.2" class="cls-9"/><path d="m46.1 109.4-.1.1M43 160s0 0 0 0m46 .9h-.1m-4-74.6c0-.1-.2-.3-.3-.4m-42.4.4s-.1 0-.1-.1" style="stroke-linecap:round;stroke-linejoin:round;stroke:#231f20;fill:none"/><path d="m70.2 154.8-.1.1m-30.2-27.1s0 0 0 0" class="cls-9"/><path d="M69.4 153.4c.4.5.6 1 .7 1.4.3 1.3-.4 2.5-1.3 2.9 1.7 1.3 0 3.2-1 3.6.8 2.2-.9 2.7-3 2.5-2-.2-4.3-1-5.1-1.5-2.5-1.4-6.7-4.9-6.5-8.2-2.2-1.9-5.3-4.2-8.1-6.2-1.7-1.2-3.3-2.4-4.7-3.3-5-3.4-14.8-11.6-13.8-17.8.8-5.2 10.5-36.4 14.8-40.4l.2-.2.4-.2q0 0 0 0v.2c2.2 1.7 9.8 10 4.3 22.8v.2H46c0-.3-.1-.3-.1 0-1.3 1.9-5.3 16.6-6.1 18.3 1.7 1.3 2.8 2.2 5.4 5.1.8.9 1.6 2.1 2.6 3.5h0c2.4 3.5 5.4 7.7 9.2 8.4h0c3.5 0 10.4-2.7 11.2 2.9 2.4 1.4 4.8 3.4 1.2 5.8Z" class="cls-3"/><path d="M39.9 127.8c-.9-.7-1.9-1.4-3.5-2.6m21.4 19.7H57m11.2 2.8c-1.1-.6-2.1-1.2-2.7-1.6m2.7 1.7s0 0 0 0" class="cls-9"/><path d="M105.3 150.1v1.8h-.2c-4-2.3-10.2-5.3-14.3-7.2-1.8-.8-3.6-1.7-5.9-3.1-1.8-10.5-2.5-18.6-1.2-23 .8-2.8 3.8-6.9 3.8-18.1v-3.1c-.2-3.1-.7-8.6-2.5-11.1 1.7 1.6 3 3.9 3.7 7.5 2.5 12.6 1.4 22.7-1.2 34.5 2.2 1.4 3.4 2 6.2 4.1 3.5 2.7 10.1 10.9 15.8 10.3-2.8 1.6-3.8 4-4.1 7.4Z" class="cls-3"/><path d="M84.9 141.6h-.1m24.6 1.1" class="cls-9"/><path d="M77.3 111.5c-.6 1.5-1.8 4.4-3.1 5.4s-3.3-1.4-3.5-1.6c1.1-.9 2.1-2.9 1.6-3.6-.4-.5-3.1-2.1-4.2-3-6.4-5.3-12.1-13.9-15.3-25.8h0c.6-.3 1.3-.5 1.9-.7h1.2c2.2 6.5 3.9 12.6 8.5 18.4 3.5 4.5 7.3 6.6 9.5 8 3.7-2 4.3-20.1 1.9-26.1h0c1.3.2 2.5.5 3.8.9v.2c1.6 11.1 1.2 19.3-2.2 28Z" class="cls-5"/><path d="M73.5 176.5c-.1 5.2-.4 10.7-.8 16.3" class="cls-9"/><path d="M69.7 220.6c-.9 5.6-1.8 10.2-2.7 13-2.6 8-3.1 9-5.4 15.5l-2.1-.6c-5.3-1.5-11.3-3.5-16.7-5l-2.4-.6c1.5-5.4 1.8-6.3 3.3-11.1 1.2-3.9 1.7-9.2 1.8-14 8.1-.9 16.3 0 24 2.6h.2Z" class="cls-2"/><path d="M72.7 192.8c0 .7 0 1.4-.2 2-.7 9.2-1.7 18.4-2.8 25.8h-.2c-7.7-2.7-15.9-3.6-24-2.6 0-3.5 0-6.8-.3-9-.5-4.8-1.3-10.2-2-16.3h.8c9-3.4 19.1-3.4 28 0h.6Zm35.7 22.9c-7.3-.2-14.6 2.3-20.2 7H88c-5.5-13.1-8.3-17.3-12.1-22.8l.2-.2c5.1-8 17-13.8 23.4-12.1h.3c3.1 8.9 6 18.5 8.5 28.1Z" style="stroke-linecap:round;stroke-linejoin:round;stroke:#000;fill:#92a4c9"/><path d="M88.7 161.1v-.1" class="cls-9"/><path d="M115.1 244.8c-.7.3-1.5.6-2.3.9-5.7 2-13.7 3.6-17.8 3.5-1.6 0-2.6-.3-2.6-.9.2-8.9-1.5-18.4-3.8-24-.2-.5-.4-1-.6-1.4h.2c5.6-4.8 12.9-7.3 20.2-7.1 2.6 10 4.9 19.9 6.6 28.9h0Z" class="cls-2"/><path d="M115.4 244.6s-.2 0-.3.1m-42.6-49.9c0-.1-.2-.3-.3-.4" class="cls-9"/><path d="M121 149.2c0 4.4-2.3 9.2-6.5 10.2-4.4 1-8.5-3-9.2-7.4 0-.6-.1-1.2 0-1.8.3-3.4 1.3-5.8 4.1-7.4 1.3-.7 3-1.3 5.2-1.7 2-.4 4 .8 5.1 2.5s1.4 3.8 1.3 5.7Z" class="cls-3"/><path d="M27.7 298.5c-.3-.2-.5-.4-.7-.6m72.4-7.3v2.1" class="cls-9"/><path d="M119.5 298c-.4 2.9-1.8 5.6-3.9 7.6 0 0-.5.4-.6.5v.6c-6.5-1.1-12.7-2.8-18.7-5.1.5-3.2 1.5-6 2.8-9.1h.3v-1.9c.3-6.8 0-12.1-1.2-18.2-1.4-7.4-3.3-15.3-3.2-22.8v-.4c4.1 0 12.1-1.5 17.8-3.5h0c.7 8.2-1.4 36.2-2.6 44.7h0c3.2 1.9 5.8 3.3 8.4 4.7v.2c.9.5 1 1.8.9 2.9Zm16 10.4-.9-.2c-4.3.1-8.7 0-13-.5v-.6c1.2-.6 2.3-1.2 3.3-2.1s1.7-2 1.8-3.3c.1-1.1-.3-2.2-1.2-2.9 1.6.9 3.4 1.8 5.3 2.9 1.4.7 2.8 1.3 3.6 2.6 1 1.5 1.4 3 1 4.2Z" class="cls-3"/><path d="M135.5 308.4c-.3.9-1 1.7-2.3 2.4-3 1.5-6.6 1.4-9.9 1.1-10.3-1-13.9-2.3-23.9-4.9-1.2-.3-2.5-.7-3.1-1.7-.4-.7-.3-1.6-.2-2.5 0-.4.1-.7.2-1 6 2.3 12.3 4 18.6 5.1q3.3.6 6.6.9h0c4.3.5 8.7.6 13 .5l.9.2Z" class="cls-2"/><path d="M126.7 301.6c-.1 1.3-.9 2.4-1.8 3.3-1 .9-2.1 1.5-3.2 2.1v.6h0q-3.3-.3-6.6-.9v-.6c.2 0 .6-.4.7-.5 2.1-2 3.5-4.7 3.9-7.6.1-1.1 0-2.4-1-2.9v-.2c2.4 1.2 4.6 2.4 7 3.7q0 0 0 0c.8.7 1.3 1.8 1.2 2.9ZM56.5 299c-2.3 2.9-5.6 5-9.3 5.6l-.3.6c-2.1-.9-4.1-1.8-6.1-2.8l.5-1.1c2.2-.3 4.4-.7 6.3-1.7 2.1-1.1 3.8-3.3 3.8-5.7 1.6 1.6 3.2 3.3 5 5.1Z" class="cls-2"/><path d="M59.1 310.6c-3.3.7-5.8.7-8.9-.5-9.3-3.5-14.9-7.3-23.2-12.2q0 0 0 0c-.9-1-1.1-2.4-.9-3.9 0-.5.2-1 .3-1.6 3.3 3.8 8.1 6.8 13.8 9.5.2.1.5.2.7.4 1.9.9 4 1.9 6.1 2.8 1.3.6 2.5 1.1 3.9 1.7 1.5.7 5 1.5 6.7 1.7 1.6.2 3.5-.4 4.3-1.8h.1c.3 2-.2 3.3-2.8 3.9Z" class="cls-2"/><path d="M27 297.9c-.3-.2-.5-.3-.8-.5" class="cls-9"/><path d="M61.9 306.7h-.1c-.8 1.5-2.7 2-4.3 1.8s-5.2-1-6.7-1.7c-1.3-.6-2.6-1.1-3.9-1.7l.3-.6c3.6-.6 7-2.7 9.3-5.6h0c.7.7 1.5 1.4 2.2 2.2 1.1 1.1 2.3 2.2 2.7 3.6.2.7.4 1.3.5 1.9Z" class="cls-3"/><path d="M26.4 292.5s0-.1-.1-.2" class="cls-9"/><path d="m42.7 284.3-.3.3c3.6 3.5 6.3 6.3 9.1 9.2 0 2.4-1.7 4.6-3.8 5.7-1.9 1-4.1 1.4-6.3 1.7l-.5 1.1c-.2-.1-.5-.2-.7-.4-5.7-2.8-10.5-5.8-13.8-9.5.4-1.4 1.1-2.8 1.8-3.9 1.4-2.1 1.8-3.4 3.4-4.4-.4.1.2-.2-.2 0 2.5-5.6 3-8.3 4.6-14.2.5-1.7 2.9-12.2 3.1-14 .5-4.1 1.7-8.1 3.6-11.8v-.4c5.5 1.5 11.5 3.5 16.8 5l-.2.8c-3.4 5.7-14.5 30.2-16.5 34.9Z" class="cls-3"/><path d="M41.4 301.2c-.3 0-.6 0-.9.1m11-7.5v-.3m44.8 8.1h-.2m29.4-2.9c-.1-.1-.3-.2-.5-.3" class="cls-9"/><path d="M81.8 38.4c-4.9-7.4-14.2-5.3-19.3 1h0c-1.1 1.6-1.5 3.1-2.2 5.1-.3.8-1.2 2.9-1.8 3.4s-1.6.7-2.3-.4h0c-.4-.9-1.2-1.5-2-1.6-.9-.1-1.7.3-2.3 1-.8 1-.8 2.4-.8 3.7 0 1.5.2 3.1 1 4.3.5.8 1.2 1.4 2 1.7v.4c-.2 5.2.9 9.8 4.2 14.2.9 1.2 1.9 2.3 3.1 3.5l.2.4c3.6 3.9 6.8 6.5 9.7 6.4.7 0 1.4-.1 2.1-.4 5.9-1.8 11.9-10.3 13.7-14 .1-.2.2-.5.4-.8 2-4.8 2.4-11 2.4-11 1.2-3.7 2.4-5.9 2.6-9.3-.4-9.9-7.4-2.6-10.7-7.6m-9.9 4.5c.9 0 2.7.3 3.6 1.3 1.2 1.3 1.3 2.6.4 2.2-.8-.3-1.7-2.1-4.5-2.5-1.5-.2-4 .5-4 .3-.1-.2 3.3-1.4 4.6-1.4Zm.8 10.3c-.3 1.5-1.2 2.4-2 2.2s-1.1-1.5-.8-3c.3-1.4 1.2-2.4 2-2.2s1.1 1.5.8 3m-5.3 12.2.4-.2c5.4 3.2 9.7 5.1 12.4 5.1-3.9 5.8-11.1 2.7-12.7-4.8ZM87 57.3c-.3 1.5-1.2 2.5-2 2.3-.7-.2-1.1-1.6-.7-3 .3-1.5 1.2-2.5 1.9-2.4.8.2 1.1 1.6.8 3Zm3.3-5.5c-.1 0-1.1-1-2.1-1.6-1.7-1.2-3.2-.3-3.8-.5-.7-.2 0-1.1 1.6-1.4 1.1-.3 2.2.4 2.7.9.7.6 1.9 2.6 1.7 2.7Z" class="cls-3"/><path d="M90.3 51.8c-.1 0-1.1-1-2.1-1.6-1.7-1.2-3.2-.3-3.8-.5-.7-.2 0-1.1 1.6-1.4 1.1-.3 2.2.4 2.7.9.7.6 1.9 2.6 1.7 2.7Zm-14.5-5.4c-.8-.3-1.7-2.1-4.5-2.5-1.5-.2-4 .5-4 .3-.1-.2 3.3-1.4 4.6-1.4.9 0 2.7.3 3.6 1.3 1.2 1.3 1.3 2.6.4 2.2Z" class="cls-1"/><path d="M80.2 70.2c-3.9 5.8-11.1 2.7-12.7-4.8l.4-.2c5.4 3.2 9.7 5.1 12.4 5.1Z" style="stroke-linecap:round;stroke-linejoin:round;stroke:#000;fill:#fff"/><path d="M81 63c-.2 2.3-.6 5.2-7.3.7" class="cls-9"/><path d="M87 57.3c-.3 1.5-1.2 2.5-2 2.3-.7-.2-1.1-1.6-.7-3 .3-1.5 1.2-2.5 1.9-2.4.8.2 1.1 1.6.8 3Zm-14.3-4.1c-.3 1.5-1.2 2.4-2 2.2s-1.1-1.5-.8-3c.3-1.4 1.2-2.4 2-2.2s1.1 1.5.8 3" style="stroke-linecap:round;stroke-linejoin:round;stroke:#000"/><path d="M54.1 56.5c.5.2 1.1.2 1.6 0" class="cls-9"/><path d="M94.5 47.1h-.1c-1.6 9.5-4.5 16.2-6.9 19.1h0c2-4.8 2.4-11 2.4-11 1.2-3.7 2.4-5.9 2.6-9.3-.4-9.9-7.4-2.6-10.7-7.6-4.9-7.4-14.2-5.3-19.3 1h0c-1.1 1.6-1.5 3.1-2.2 5.1-.3.8-1.2 2.9-1.8 3.4s-1.6.7-2.3-.4h0c-.4-.9-1.2-1.5-2-1.6-.9-.1-1.7.3-2.3 1-.8 1-.8 2.4-.8 3.7 0 1.5.2 3.1 1 4.3.5.8 1.2 1.4 2 1.7v.4c-.2 5.2.9 9.8 4.2 14.2v.7h-.2c-1.7-.4-8.7-8.3-9.9-14-1.1-5.8-1.8-9.6-.5-15.3 1.5-6.6 2.7-9.8 7-13 .8-.6 1.7-1.3 2.8-1.9 5.1-3.2 12.8-4 19.8-2.5 4 .8 7.6 2.4 10.3 4.6 4.2 4.1 5.7 6.9 6.4 11.5.2 1.4.5 4.6.5 5.9" class="cls-1"/><path d="M46.8 111.7h-.3v-.3c-.1-.9-.3-1.6-.4-2h.3v-.3c5.6-12.8-2-21.1-4.2-22.8v-.2c.6-.2 1.8-.6 3.2-1.1 3 3.5 5.1 8.9 5.3 13.5.2 4.7-1.2 9.4-3.9 13.2" class="cls-5"/><path d="M88.9 161s-.1 0-.2.1c-5.8 2.9-15.9 5.5-22.6 4.8-.3 0-.7 0-1.1-.1h-.4c-6.1-.8-17.8-2.6-21.6-5.7.5-3.9 1.1-7.9 2.1-12 2.8 2.1 5.9 4.3 8.1 6.2-.2 3.3 4 6.7 6.5 8.2.9.5 3.2 1.3 5.1 1.5h.4c1.9.1 3.4-.5 2.6-2.6 1-.3 2.7-2.3 1-3.6.8-.4 1.5-1.6 1.3-2.9 0-.5-.3-.9-.7-1.4 3.6-2.3 1.2-4.3-1.2-5.8-.7-5.6-7.6-3-11.2-3h0c-3.8-.6-6.8-4.7-9.2-8.2h0c.3-1.6.2-2.3.3-4.3.2-3.8-.5-9.9-.9-14.5 0-1.1-.5-3.8-.8-5.9h.3c2.8-3.8 4.2-8.6 3.9-13.3-.2-4.5-2.3-10-5.3-13.5 2.2-.7 4.9-1.5 7.5-2.2h0c3.2 12.1 8.9 20.6 15.3 26 1.1.9 3.8 2.5 4.2 3 .5.7-.5 2.8-1.6 3.6.1.2 2.2 2.5 3.5 1.6 1.3-1 2.5-3.9 3.1-5.4 3.4-8.7 3.8-16.8 2.1-28v-.2q1.35.3 2.4.9c2.8 3.1 4.5 12.3 5.5 16.2h.1c0 11.3-3 15.3-3.8 18.1-1.3 4.4-.6 12.5 1.2 23 1 5.8 2.4 12.3 3.9 19.3h0Z" style="stroke-linecap:round;stroke-linejoin:round;stroke:#000;fill:#d16a71"/><path d="M87.5 100.5h-.1c-1-3.9-2.7-13.1-5.5-16.2 1.1.5 2.1 1.1 3 2h0c1.8 2.5 2.3 8 2.5 11.1v3.1Z" class="cls-5"/><path d="M81.9 84.3s0 0 0 0m-23.9-3v.3" class="cls-9"/><path d="m77.6 23.8-.2 1.3c-6.9-1.4-14.7-.6-19.8 2.5-1.1.7-2 1.3-2.8 1.9-1.8-.6-3.2-2.4-3.4-4.1-.3-2 .8-3.9 2.2-5.4 4.1-4.3 11.7-5.5 18.1-3.2 1.6.6 3.2 1.5 4.4 2.7s1.9 2.9 1.6 4.3Z" class="cls-1"/><path d="M55.8 29.8c-.3 0-.7-.1-1-.2m53.7 186.1" class="cls-9"/></svg>')}`;
export default image;