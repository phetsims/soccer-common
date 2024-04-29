/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#2e1617}.cls-1,.cls-10,.cls-2,.cls-3,.cls-4,.cls-7,.cls-8,.cls-9{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#c95f80}.cls-3{fill:#d2809b}.cls-4{fill:#88533a}.cls-7{fill:#875239}.cls-8{fill:#fff}.cls-9{fill:none}</style></defs><path d="M89.5 231.3c3.6 11.6-.8 29.2-3.8 43.8h0c-5.3 2.2-11.2 2.4-16.5 1.3h0c-.9-14.8-1-29.4-1.5-37.8-1-16.6-1.4-40-.9-57.4-.3 1-.6 2-.9 3.2l-.3 1.2c-2.4 14.9-2.2 39.8-3.3 52.9-.8 9.8.4 23.5 0 37.5-5.7.9-11.5.9-16.7-1.6h0c-3.4-16.5-9-37.6-5.5-46s-3.2-40.4-1.5-50.1l.3-.7c2 1 3.9 1.1 3.8-1.5 1 0 3.2-1.4 2-3.3 1.2-.2 2.7-1.9 1.9-4.2 1-.3 1.7-.7 2.1-1.1 1.2-1.4 0-3.4-1.4-5.1.4-2.4-.5-3.7-1.9-4.5 6.8 2.4 15.3 3.9 23.3 3.9 9 0 17.4-2.2 21.9-7.5 2 5.4 2.8 12.2 2.9 19.6.4 22.8-5.9 50.5-3.8 57.4Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#90a5c8"/><path d="M111.9 136.9c-.2 2-.8 3.9-1.4 5.7-2.6 5.5-5.3 10.5-8.5 15.3h-.2c-1.8-4.5-4.8-8.3-8.5-10.8.9-1.5 1.7-2.9 2.1-3.6 1.4-2.5 2.5-4.7 3.5-6.6-.4-.5-1.2-2.4-2.3-4.8-1.8-3.9-6.1-10.1-7.4-11.9-.2 2.7-.4 5.7-.5 9.3-.2 6.8.1 9.5 1.5 23.2 0 .5.1 1.1.2 1.6-4.5 5.3-12.9 7.5-21.9 7.5-8 0-16.5-1.5-23.3-3.9-.5-.3-1.1-.5-1.8-.7q0 0 0 0c-.4-.2-.9-.3-1.3-.5.3-4.9 0-47.2-.8-49.6-2.6 6.1-7.6 16.2-10.9 21-2.1 3-2.5 4.6-3.4 5.7 1 1.4 1.7 3.1 2.8 6 1.2 3 3.2 6.2 5.2 10.1-3.5 1.1-6.7 3.5-8.9 6.8-2.1-3.9-12.5-18.9-11.8-23.3s2.5-8.6 4.4-12.6c6.1-12.6 14.5-24.1 24.6-33.8 4.5 2.2 11.2 4.7 14.7 7.3 1.8 1.3 3.3 2.3 4.5 3.2-3.6 6.9-7.5 32.8-5.9 40.6 1.6-1.7 3.9-21 4-23.4.3-5.2 2.1-10.2 5-14.3l.3-.5c1.8 1.2 2.5 1.8 3.2 2.3.6-1.1 1.1-1.9 1.7-2.7h.2c2.7 4.9 4.3 10.5 4.4 16.1 0 2.3 1.7 21.2 3.5 22.4.8-8.6-1.6-33.7-4.8-41.6l-.2-.2c3.1-2.3 6.7-3 12.3-6.2.9-.5 1.8-1.2 2.6-1.9 3.9 1.9 6.1 6.2 7.9 10.2 6.3 13.5 11.5 24.2 15.2 38.6" class="cls-2"/><path d="M87.8 60.8c-.7.5-1.6.8-2.5.8-2.9 0-5 0-7.6-.2-.3 0-.7-.1-1-.3-1.5-.8-2.8-2.8-3-3.8-.1-.9-.2-1.8-.4-2.7H73c-2 0 .5 0-3.4-.2-.1.9-.2 1.9-.4 2.8-.2 1.3-2.2 4.1-4.1 4.2-2.7 0-4.9.1-7.9.2-2.9 0-5.4-3.2-5.6-5.3 0-.8-.1-1.7-.2-2.5h-.2c-.8 0-1.7 0-2.7-.1-1.7 0-3.4-.1-4.5-.5-.2.1-.4.3-.6.5-1.3 1.4-1.2 3.7 0 5.2s3.8 4.3 5.8 3.9c.7 6.4 1.9 5.4 4.4 9 .5.6 1 1.2 1.5 1.7q1.95 2.1 3.9 3.6c7.2 5.7 13 4.8 17.5 1.9 1.8-1.1 3.4-2.6 4.8-4 .3-.4.7-.7 1-1.1 1.7-1.9 3.8-5.1 5-8.7.5-1.3.8-2.9 1-4.4h-.6ZM71.7 73c-1.8.2-4.8-.4-6.5-1.5s-1.7-.4-3.8-3.3c1 1 10.9 3.1 15.9 1.1-1.3 2.2-2.7 3.4-5.6 3.8Zm17-25.9c-.2-.5-.1-1 0-1.5 0-.5.1-1.1.5-1.5q0 0 0 0h0c0-.7 0-1.4-.4-2.5h0c-.7.2-1.3.2-1.6-.4-.4-.7-.2-1.8.2-2.7h0c-.6-1.1-.9-1.8-1.8-3-.2 0-.4.1-.5.2-.5.1-.7-.7-.8-1.8h0c-.9-1.1-1.5-1.7-2.7-2.6h0c-.4.4-1 .7-1.5.7-2.3.1-1.9-1.8-1.7-3.1-.9-.5-1.4-.8-2.3-1.2h0v1c-.5.7-.7 1.1-1.7 1.4-.7.2-1.5.1-2.1-.3-1.1-.8-1-2-1-3.2h0-3.6 0c.1.8 0 1.6 0 2.4v.2c-.7.8-1.8.9-2.7.3-.7-.5-1.2-1.2-1.6-2-1.2.4-1.8.6-3.2 1.2h0c.5.7.8 1.4.6 1.9-.7 1.5-3.3.4-4.2-.2-.9.6-1.5 1.2-2.5 2.7 1.6 1.8 2.3 3.4.3 3.6-.7 0-1.4-.2-2-.5h0c-.4.7-.5.9-.8 1.7h0c1.7 1 2.4 2.1.5 3.1-.6.3-1.2.3-1.8.4h-.2 0c-.4 1-.4 1-.7 2l.2.2c.4.8 0 1.4-.6 2-.4 1.5-.5 2.1-.6 3.4.4.2.6.6.6.9.9-.4 1.7-.7 1.9-.8h0v-.3l.8-.2c1.4-.3 2.8-.5 4.2-.7.1-.3.4-.5.7-.7 1.5-.8 3.1-1.4 4.8-1.7.8-.1 1.7-.2 2.6-.2.3 0 1 0 1.1.2v1.3c0 .3 0 .6-.1.9 1.4.1 2.8.3 4.2.5l1.4.2c0 1.2-.2 2.3-.3 3.2h2.9c0-1-.2-2-.3-3.2h.2s0 0 0 0l3.2-.4c4.5-.6 9.2 0 13.7.8v-.5c-.4 0-.8-.5-1-1Zm-4.7.4c-2-.4-4.1-.4-6.1 0-.3 0-.7.1-1 0-.3-.2-.4-.7-.3-1 0-.6 0-1 .4-1.2s1.2-.1 1.7-.1c1.1 0 2.2.2 3.3.4.6.1 1.2.2 1.6.6s.7 1 .3 1.5Z" class="cls-7"/><path d="M76.5 60.7c1.4 3.4-3.9 5-8.8 3.9m-18.5-1.7q-.15-1.35-.3-3.3m27.7 22.1v4.4m-28-32.4s0 0 0 0" class="cls-9"/><path d="M84 47.5c-2-.4-4.1-.4-6.1 0-.3 0-.7.1-1 0-.3-.2-.4-.7-.3-1 0-.6 0-1 .4-1.2s1.2-.1 1.7-.1c1.1 0 2.2.2 3.3.4.6.1 1.2.2 1.6.6s.7 1 .3 1.5Zm-19.1-1c0 .3 0 .6-.1.9-3-.2-6-.2-9 .2.1-.3.4-.5.7-.7 1.5-.8 3.1-1.4 4.8-1.7.8-.1 1.7-.2 2.6-.2.3 0 1 0 1.1.2v1.3Z" class="cls-1"/><path d="M42.1 105.4c-.2.5-.5 1.2-.8 1.8M27 133.9s0 0 0 0" class="cls-9"/><path d="M41.3 85.9c-5.6 2.6-9.1 8.2-12.3 13.4-3.8 6.3-7.6 12.7-11.1 19.1-2.9 5.3-5.7 11.2-5.4 17.1-.8-3.2-1-6.1 0-8.3 1.6-3.4 1.7-4.4 3.4-7.4 0 0 12.8-25.9 14.8-28.1 2.7-3 6.3-6.2 9.3-6.9.4.3.9.7 1.4 1Z" class="cls-2"/><path d="M39.9 84.9s0 0 0 0M90 104.1c.4 5.4-.3 9.7-.8 16.1" class="cls-9"/><path d="M96.1 163c-.5 1.1-.3 2.3-.7 3.6-.7 2.6-1.1 4.8-1.8 7.3h-.3c-.1-7.3-.9-14.1-2.9-19.5 1.5 3.5 3.5 5.9 5.8 8.6Z" class="cls-7"/><path d="M111.9 136.9c-3.7-14.4-8.9-25.1-15.2-38.6-1.8-4-4-8.2-7.9-10.2.4-.3.7-.7 1-1.1l.5.3c5.9.9 6.6 8.5 8.6 12 3.7 6.4 10.1 23.4 11.5 27.7.5 1.8.8 2.8 1.1 4.3.5 2 .5 3.8.3 5.6Z" class="cls-8"/><path d="M99 136.9s0 0 0 0m-8.8 15.8c0 .2-.1.3 0 .3m11.9-20.9c-1.3 1.4-2.2 2.9-3.2 4.8m-71.9-3c-.9-1.4-2.1-2.4-4.2-4.1" class="cls-9"/><path d="M48.5 167.6c-.4.4-1.1.8-2.1 1.1.8 2.3-.6 4-1.9 4.2 1.2 1.8-1 3.3-2 3.3.1 2.6-1.8 2.5-3.8 1.5-1.8-.9-3.6-2.3-4.2-3.1-1.9-2.3-4.8-7.1-3.6-10.4l-.4-.2h0q2.7-5.1 7.5-7.8c1.4.5 3.5.7 5.3 1.1q0 0 0 0c.6.2 1.2.4 1.8.7 1.4.8 2.3 2 1.9 4.5 1.4 1.7 2.7 3.8 1.4 5.1Z" class="cls-7"/><path d="M47 162.4c-.8-1-1.7-1.9-2.1-2.5m2.1 2.5s0 0 0 0m11.1-76v-.5" class="cls-9"/><path d="M38 156.2c-3.3 1.8-5.7 4.4-7.5 7.8h0l-.6 1.2c-1.2-1.8-2.9-4.2-4.7-6.7.3-.6.7-1.1 1-1.7 2.2-3.2 5.4-5.6 8.9-6.8 1 1.9 2 3.9 2.9 6.1Zm64 1.7c-1.5 2.2-3 4.4-4.7 6.6-.4-.5-.8-1.1-1.2-1.6h0c-2.2-2.8-4.2-5.2-5.8-8.7 0-.6-.1-1.1-.2-1.6.4-.8 1.8-3.3 3.1-5.6 3.7 2.5 6.7 6.3 8.5 10.7h.2Z" class="cls-3"/><path d="M76.8 88.1c-1.2 4-5.2 7.1-10.2 6.1-4.3-.9-8.2-4.6-8.4-7.8h.1c.3-.9.3-6.3.3-8.8l.6-.3c7.2 5.7 13 4.8 17.5 1.9h0v2.5h.2v6.4Z" class="cls-7"/><path d="M78.8 138.1c-1.8-1.2-3.4-20.2-3.5-22.4 0-5.6-1.6-11.2-4.4-16h-.2v-.1c1-1.4 2-2.4 3.1-3.3h0l.2.2c3.2 7.9 5.6 33 4.8 41.6M66 99.9l-.3.5c-2.9 4.1-4.7 9.2-5 14.3-.1 2.4-2.4 21.7-4 23.4-1.6-7.8 2.3-33.7 5.9-40.6 1.4 1 2.5 1.8 3.4 2.4" class="cls-8"/><path d="M89.8 87.1c-.3.4-.6.7-1 1.1-.8.8-1.8 1.4-2.6 1.9-5.6 3.2-9.3 3.8-12.3 6.2h0c-1.1.8-2.1 1.8-3.1 3.3q0 0 0 0c-.6.8-1.1 1.7-1.7 2.7-.7-.6-1.4-1.1-3.2-2.3-.9-.6-2-1.4-3.4-2.4-1.2-.9-2.7-1.9-4.5-3.2-3.5-2.6-10.2-5-14.7-7.3-.8-.4-1.5-.8-2.1-1.1s-1-.7-1.4-1c-.6-.5-1-1-1.1-1.5-.5-3.2 1.1-4.3 3.4-6.3 2.2-2 10-4.4 12.7-3.2l.4-.3q1.95 2.1 3.9 3.6l-.6.3c0 2.5 0 7.9-.3 8.8h-.1c.2 3.1 4.2 6.9 8.4 7.8 5 1.1 9-2 10.2-6.1v-6.4h-.2v-2.4h0c1.8-1.2 3.4-2.7 4.8-4.1 3.8.6 9.1 5.1 9.7 8 .3 1.4-.3 2.8-1.2 4Z" class="cls-3"/><path d="M25.2 158.4v.1m10-8.5h-.1m58.2-2.9s0 0 0 0m-24.8 17.4c.2 10.6-.7 12.8-3 21.2" class="cls-9"/><path d="M61 308.1c-1.3 1.2-4.8.9-6.7.9H39.1c-1.6 0-3.4-.1-4.4-1.2-.9-1-1-6.4-.7-7.7.7-2.5 5.2-5.3 7.8-6.4 2-1.1 4-1.6 5.9-1.7 2.3-.1 4.5.2 6.3.7 3.2.7 4.7 1 6.4 3.6 1.1 1.7 2.1 10.4.6 11.9Zm36.8 0c-.4.2-3.1.8-3.6.8-4.7.2-21.5-.3-22.8-1.1-1.9-1.1-1.4-9.2-.4-11.1 1-1.8 1.8-3.1 4-3.6 1.5-.3 5.8-.7 8.5-.9 1.2 0 2-.1 2.2-.1 3.7.9 10.6 3.4 12.2 6.6.7 1.2 1.3 8.9 0 9.5Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#8ab0d2"/><path d="M61.6 287.4c-.3 3-.7 5.9-1.2 8.8-1.7-2.6-3.1-2.8-6.4-3.6-1.8-.4-3.9-.8-6.3-.7v-.2c0-1.4 0-3.1-.2-5.1 4.8 1.5 9.1 1.3 14.1.8" class="cls-8"/><path d="M62.3 276.1c0 3.8-.3 7.6-.6 11.3-4.9.5-9.3.7-14.1-.8-.4-3.5-1.2-7.6-2.1-12.2h0c5.2 2.5 11 2.5 16.7 1.6Z" class="cls-4"/><path d="M83.5 292.2c-2.7.2-7.1.6-8.5.9-2.2.5-3 1.7-4 3.6-.4-2.8-.7-5.6-1-8.5 4.7-.3 9.2.7 13.7-1.1-.2 1.8-.3 3.6-.2 5.1" class="cls-8"/><path d="M85.7 275.1c-.9 4.4-1.7 8.4-2 12-4.4 1.7-8.9.8-13.7 1.1-.4-3.9-.7-7.8-.9-11.8h0c5.3 1.2 11.2.9 16.5-1.3h0Z" class="cls-4"/><path d="M12.7 138.1c-.2-.8-.2-1.6-.3-2.5m28.9-49.7s0 0 0 0" class="cls-9"/><path d="M26.2 156.8c-.4.5-.7 1.1-1 1.7-2.1-2.9-4.2-5.9-5.7-8.4-2.3-3.2-5.6-9-7-14.4-.2-5.9 2.5-11.8 5.4-17.1 3.5-6.5 7.3-12.8 11.1-19.1 3.2-5.3 6.7-10.9 12.3-13.4.6.4 1.3.8 2.1 1.1C33.3 96.9 25 108.4 18.8 121c-1.9 4-3.7 8.2-4.4 12.6S24 153 26.2 156.9Z" class="cls-8"/><path d="M54.4 140.1c-2.7 4-5.1 8.3-7.3 12.6m33.8-12.9c2.6 2.8 4.6 6.3 5.6 10.1" class="cls-9"/><path d="M77.3 69.2c-1.3 2.2-2.7 3.4-5.6 3.8-1.8.2-4.8-.4-6.5-1.5s-1.7-.4-3.8-3.3c1 1 10.9 3.1 15.9 1.1Z" class="cls-8"/><path d="M91.1 43.7c-.1 0-.3-.1-.5-.2-.5-.2-1.1.1-1.4.5h0c0-.7 0-1.4-.4-2.5h0c.7-.2 1.4-.6 2-.8.1 0 .2-.1.3-.2.2 1.2.2 2 .1 3.2Z" class="cls-1"/><path d="M85 27.2s0 0 0 0M42 39.4s0 0 0 0" class="cls-9"/><path d="M92.4 56c-.1.8-.3 1.6-.7 2.3s-1.6 1.9-2.3 2.2c-.6.3-.3.2-.9 0l-.2-.2c1.3-1.1 2.2-2.8 2.3-4.1.1-1.5.2-2.9.4-4 .6 0 1 0 1.3-.2 0 .3 0 .6.1.9.2 1 .1 2 0 3Z" class="cls-7"/><path d="M92.3 52.2v-.3" class="cls-9"/><path d="M76 28.4c-.5.7-.7 1.1-1.7 1.4-.7.2-1.5.1-2.1-.3-1.1-.8-1-2-1-3.2v-1C71 24 70 22.9 69 22s-2.2-1.6-3.2-2.5c-.1 0-.2-.2-.3-.3-.5-.5-.8-1.1-.6-1.7.3-.6 1.1-.9 1.8-.9h.6c2.6 0 5.1 1.5 6.6 3.7.9 1.3 1.5 2.9 1.8 4.5.2.9.2 1 .3 2.8v.9Zm-21.7 8.1c-.7 0-1.4-.2-2-.5-.2 0-.4-.2-.6-.3-2.4-1.4-3.4-1.8-5.8-3.2-.3-.2-.8-.5-1.3-.8h0c-.2-.2-.4-.3-.6-.5-.6-.8-.6-2.1 0-2.9.1-.2.3-.4.5-.5 1.1-.7 2-.8 3.2-.2h.2c.8.4 4.1 3 6.1 5.2 1.6 1.8 2.3 3.4.3 3.6Zm13.4-7.8v.2c-.7.8-1.8.9-2.7.3-.7-.5-1.2-1.2-1.6-2 0-.2-.2-.3-.2-.5-.4-.9-.8-1.9-1.6-2.7-.9-.9-2.2-1.3-3.3-2-.4-.3-.8-.6-1.2-1-.5-.6-.8-1.3-.6-2.1.3-1.1 1.5-1.8 2.7-1.7 1.2 0 2.2.7 3 1.6.2.2.4.5.6.8.5.6 1 1.3 1.5 1.9.9 1.1 2 2.1 2.7 3.3.3.5.5 1.1.6 1.6.1.8 0 1.6 0 2.3Z" class="cls-1"/><path d="M52.3 35.9c-.4.7-.5.9-.8 1.7h0c-2.3-1.4-6.4-2.5-7.1-2.6-.3 0-.6-.1-1-.2h0c.4-1.1.7-2.1 1.2-3.1.4.3.9.6 1.3.8 2.4 1.4 3.4 1.8 5.8 3.2l.6.3Z" class="cls-1"/><path d="M51.9 40.7c-.6.3-1.2.3-1.8.4h-.2c-2.5 0-4.9-.4-7.2-1.4-.2 0-.4-.2-.6-.3-.3-.1-.5-.3-.8-.6-.5-.5-.7-.7-.6-1.5.1-.9.4-2.3 1.2-2.6q.75-.15 1.5 0c.3 0 .7 0 1 .2.7.2 4.8 1.3 7.1 2.6 1.7 1 2.4 2.1.5 3.1Zm26.4-12.4v.3c-.9-.5-1.4-.8-2.3-1.2h0c-.2-1.8-.2-1.9-.3-2.8-.3-1.6-.8-3.1-1.8-4.5 1.2.3 1.6.5 2.3.8.2.9.8 1.7 1.3 2.5.9 1.5 1.2 3.1.9 4.9Z" class="cls-1"/><path d="M82.3 29.9c-.2.4-.4.9-.8 1.2-.4.4-1 .7-1.5.7-2.3.1-1.9-1.8-1.7-3.1v-.3c.2-1.7 0-3.3-.9-4.9-.5-.8-1.1-1.6-1.3-2.5s.5-1 1.4-1.3c.6-.2 1.3 0 1.9.3q.75.6 1.2 1.5c.6 1 1 1.8 1.2 2.6.3.8.5 1.6.6 2.7.1 1 .2 2.1-.2 3.1Z" class="cls-1"/><path d="M85 27.2s0 0 0 0c0 .3-.8 4.1-.8 6.5h0c-.9-1.1-1.5-1.7-2.7-2.6h0c.4-.3.6-.7.8-1.2.4-1 .3-2 .2-3.1-.2-1.1-.4-1.9-.6-2.7.2.2 1 .8 1.2 1 .9.8 1.1 1.2 1.9 2.1" class="cls-1"/><path d="M89.5 31.7c-.1.5-.4.9-.7 1.4h0c-.7 1-1.9 1.9-3.3 2.3-.2 0-.4.1-.5.2-.5.1-.7-.7-.8-1.8 0-2.4.7-6.2.8-6.5q0 0 0 0c0-.2.1-.5.3-.7.5-.4 1.5-.1 2.1.2 1.8 1.2 2.6 3.2 2.1 5Z" class="cls-1"/><path d="M89.9 35.9c-.9 0-2 1.1-2.6 2.4-.6-1.1-.9-1.8-1.8-3 1.4-.4 2.6-1.3 3.3-2.3.5 1.1.7 1.7 1.1 2.8Z" class="cls-1"/><path d="M91 40.4s-.2.2-.3.2c-.6.2-1.3.6-2 .8s-1.3.2-1.6-.4c-.4-.7-.2-1.8.2-2.7h0c.6-1.3 1.8-2.5 2.6-2.4q.3 0 .6.3c.5.5.9 1.1 1.1 1.8.3.8 0 1.9-.6 2.4m-41.1.7c-.4 1-.4 1-.7 2-1.1-1-5.6-1.1-6.8-.9-.2 0-.5 0-.6.2 0-1.5 0-1.4.3-2.9.2 0 .4.2.6.3 2.3.9 4.8 1.4 7.2 1.4Z" class="cls-1"/><path d="M48.7 45.3c-.9.7-2.2 1.2-3 1.5-1.1.3-2.4 1-3.6.9-.3 0-.7 0-.9-.2-1.3-.6-1.6-2.2-1-3.5.3-.8.8-1.3 1.5-1.6.2 0 .4-.1.6-.2 1.2-.1 5.7 0 6.8.9l.2.2c.4.8 0 1.4-.6 2" class="cls-1"/><path d="M48.7 45.3c-.4 1.5-.5 2.1-.6 3.4-.2 0-.4-.2-.6-.2-1.1-.3-3.6.3-5 1-.2-.7-.4-1.1-.4-1.8 1.2 0 2.5-.6 3.6-.9.7-.2 2.1-.8 3-1.5" class="cls-1"/><path d="M48.7 49.6c-2.1.9-5.2 2.2-5.8 2.4h-.1c-.6.1-1.5 0-1.7-.6-.2-.5 0-1.1.5-1.4.2-.2.5-.4.9-.5 1.5-.7 3.9-1.3 5-1 .2 0 .4.1.6.2.4.2.6.6.6.9" class="cls-1"/><path d="M51.4 53.8h-.2c-.8 0-1.7 0-2.7-.1-1.7 0-3.4-.1-4.5-.5-.8-.2-1.3-.6-1.2-1.2h.1c.5-.2 3.6-1.5 5.8-2.4.9-.4 1.7-.7 1.9-.8h0s.4 2.4.7 5.1Z" class="cls-3"/><path d="M91.6 45.9c0 .5-.2 1-.5 1.4s-.8.8-1.3.7c-.5 0-.9-.5-1.1-1s-.1-1 0-1.5c0-.5.1-1.1.5-1.5q0 0 0 0c.3-.4.9-.7 1.4-.5.2 0 .3.2.5.3.2.2.4.5.5.7.2.4.1.9 0 1.4M56.4 30.1c-.9.6-1.5 1.2-2.5 2.7-2-2.3-5.2-4.8-6.1-5.2h-.2 0c.8-1 1.1-1.4 2.1-2.2h0c.6.7 1.4 1.4 2.2 2 1.4 1 2.9 2 4.4 2.9Z" class="cls-1"/><path d="M60.6 30.3c-.7 1.5-3.3.4-4.2-.2-1.5-.9-3-1.8-4.4-2.9-.8-.6-1.6-1.2-2.2-2-.3-.3-.5-.7-.7-1.1-.4-.8.1-1.5 1-2 .8-.5 1.8-.1 2.7.2.2 0 .3.1.5.2 2.3 1.2 4 2.3 5.7 4.3.3.3.8.8 1.2 1.4.5.6.8 1.3.6 1.9Z" class="cls-1"/><path d="M63.3 27.2c-1.2.4-1.8.6-3.2 1.2h0c-.4-.5-.9-1-1.2-1.3-1.7-2-3.3-3.2-5.7-4.3 1.5-.9 2.2-1.1 3.9-1.7.3.4.7.7 1.2 1 1.1.7 2.4 1.1 3.3 2 .7.8 1.1 1.7 1.6 2.7 0 .2.2.3.2.5Zm7.9-.9h-3.6 0c0-.6-.2-1.1-.6-1.6-.8-1.2-1.8-2.2-2.7-3.3-.5-.6-1-1.3-1.5-1.9h0c1.3-.2 1.3-.3 2.6-.3 0 .1.2.2.3.3 1 .9 2.2 1.6 3.2 2.5s2 2 2.2 3.3v1Z" class="cls-1"/><path d="M67.3 16.3v.3h-.6c-.7 0-1.5.3-1.8.9-.2.6.1 1.2.6 1.7-1.3 0-1.3 0-2.6.3h0c-.2-.2-.4-.5-.6-.7-.8-.8-1.9-1.5-3-1.6-1.2 0-2.4.6-2.7 1.7-.2.7.1 1.5.6 2.1-1.6.6-2.4.8-3.9 1.7-.2 0-.3-.1-.5-.2-.8-.4-1.9-.7-2.7-.2s-1.4 1.1-1 2c.2.4.4.7.7 1.1h0c-.9.8-1.3 1.2-2.1 2.1h0c-1.2-.5-2.1-.4-3.2.3-.2.1-.4.3-.5.5-2.2-3.8-1.9-8.8.6-12.5s7-5.8 11.4-5.7c4.4.2 8.7 2.6 11.3 6.2" class="cls-1"/><path d="M44.1 28.4v-.1m3.5 258.4h-.3m16.8-122.1c-.3 5.1-.6 10.3-.9 15.4m19.5-16.8c2.1 2.2 4.9 3.6 7.9 4.1m-36.7-2.5-7.9 4.1M70 54.5h-.4m3.8.1-.1.1m-.7-6.6" class="cls-9"/><path d="M89.7 48.5c-4.5-.8-9.2-1.4-13.7-.8l-3.2.4h-.2q.15 1.8.3 3.3c.1 1.2.3 2.2.4 3.3.1.9.2 1.7.4 2.7.2 1.1 1.5 3.1 3 3.8.3.2.7.3 1 .3 2.6 0 4.7.1 7.6.2.9 0 1.7-.3 2.5-.8.2-.1.4-.3.5-.4 1.3-1.1 2.2-2.8 2.3-4.1.1-1.5.2-2.9.4-4 .2-1.7.4-2.9.5-3.5l-1.8-.3Zm-.7 7.7c-.1 1.3-1.5 3.9-3.2 3.9-2.8 0-5 0-7.6-.1-1.3 0-2.4-2.4-2.6-3.4-.3-2.3-.7-4.1-.9-7 2.5-.5 9.6-.5 14.7.5 0 .5-.2 3.8-.4 6.1" class="cls-3"/><path d="M74.7 49.7c.3 2.9.6 4.7.9 7 .1 1 1.3 3.3 2.6 3.4 2.6 0 4.8.1 7.6.1 1.7 0 3.1-2.6 3.2-3.9.2-2.3.4-5.6.4-6.1-5.1-1-12.2-1-14.7-.5m7.8 4.6c0 1.4-.7 2.4-1.4 2.4s-.7-.2-.9-.7q0 0 0 0c-.3-.5-.5-1.3-.5-2.1 0-1.6.6-2.8 1.4-2.8s1.4 1.3 1.4 2.8z" class="cls-8"/><path d="M82.5 53.8v.4c0 1.4-.7 2.4-1.4 2.4s-.7-.2-.9-.7q0 0 0 0c-.3-.5-.5-1.3-.5-2.1 0-1.6.6-2.8 1.4-2.8s1.4 1.3 1.4 2.8" class="cls-10"/><path d="M92.3 52.2c-.3 0-.7.1-1.3.2.2-1.7.4-2.9.5-3.5 1.1.3 1.5 1.5 1.5 1.5 0 .9.5 1.6-.7 1.9Zm-19 2.5H73c-2 0 .5 0-3.4-.2.1-1 .3-2 .4-3.1h2.9c.1 1.2.3 2.2.4 3.3" class="cls-3"/><path d="M69 47.9c-1.4-.2-2.8-.4-4.2-.5-3-.2-6-.2-9 .2-1.4.2-2.8.4-4.2.7l-.8.2v.2s.4 2.5.7 5.1c0 .8.2 1.7.2 2.5.2 2.1 2.6 5.3 5.6 5.3s5.2 0 7.9-.2c1.9 0 3.9-2.8 4.1-4.2.1-1 .3-1.9.4-2.8.1-1 .3-2 .4-3.1 0-1 .2-2 .3-3.2zm-1.8 8.7c-.2 1-1.2 3.3-2.6 3.4-2.7 0-4.9.1-7.9.1-1.8 0-3.3-2.6-3.4-3.9-.3-2.8-.5-6.8-.4-6.1 6.2-1.3 12.4-1 15.3-.5-.3 2.9-.6 4.7-1 7" class="cls-3"/><path d="M52.9 50.2c0-.8.2 3.3.4 6.1.1 1.3 1.6 3.9 3.4 3.9 3 0 5.2 0 7.9-.1 1.4 0 2.4-2.4 2.6-3.4.3-2.3.7-4.1 1-7-2.9-.5-9.1-.8-15.3.5m8.5 6.7h-.2c-.9 0-1.6-1.4-1.6-3s0-1.1.2-1.6c.3-.9.8-1.4 1.4-1.4.9 0 1.6 1.4 1.6 3s-.6 2.8-1.4 3" class="cls-8"/><path d="M62.8 53.8c0 1.5-.6 2.8-1.4 3h-.2c-.9 0-1.6-1.4-1.6-3s0-1.1.2-1.6c.3-.9.8-1.4 1.4-1.4.9 0 1.6 1.4 1.6 3" class="cls-10"/></svg>')}`;
export default image;