/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#604131}.cls-1,.cls-2,.cls-3,.cls-5,.cls-8{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#d3a57f}.cls-3{fill:#6d5f48}.cls-5{fill:#866d9a}.cls-8{fill:none}</style></defs><path d="M121.6 294c-.3.1-.6.2-.9.4-6.3 2.6-15.2 4.2-21.6 5h-.3c-.7 0-1.3.2-1.9.2 0-12-1.7-25.8-2.5-43.4-.3-8.2-2.2-18.5-4.3-23.8-7-17-9.5-18.9-15-27.5-1.3 16.7-3.8 34.3-6 39.7-2.9 7.3-5.8 17.9-7.8 25.3-3.3 12-5 19.1-8.9 29.5v.1c-5.3-1.4-14.7-6.9-21.1-9.3h0c-1-.4-1.9-.7-2.8-.9 6.6-13.5 13.7-31.5 20.3-45 2.9-5.9 1.4-21.2.9-26-1.2-11.5-4.3-27.2-2.1-45.6 3.8 3.1 16.4 4.9 21.5 5.4 2.1.2 4.6.2 7.2 0 1.6.5 2.5-.7 4.1-.2v-.3c4.1-.6 8.2-1.5 11.1-2.4 9.8 19.1 18.8 43.1 21.4 66.8 2.3 20.6 8.5 51.4 8.6 52Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#949d6d"/><path d="M72.3 166.6c1.3 1.7.5 3.5-.5 4 1.2.9.5 2.3-.3 3-.2.2-.4.3-.6.4 1.5 4.1-5.9 1.9-7.6 1-1.2-.7-2.7-1.8-4-3.2-1.2-1.3-2.2-2.9-2.1-4.5-2.1-1.8-4.9-3.9-7.5-5.8-1.6-1.1-3.1-2.2-4.4-3.1-4.6-3.2-13.8-10.8-12.9-16.6.7-4.8 11.7-40.1 15.6-40.4.6-.2 1.2-.4 1.7-.6l.2.7c1.4 2.2 6.3 11.7 1 23.9h-.3c0-.2-.1-.2-.1 0-1.2 1.8-4.9 15.4-5.7 17.1 1.6 1.2 2.6 2.1 5 4.8.7.8 1.5 2 2.4 3.3 2.2 3.2 5 7.1 8.6 7.8h0c3.3 0 9.7-2.5 10.4 2.7 2.2 1.4 4.5 3.2 1.1 5.4Zm33.5-3.1v1.7h-.2c-3.8-2.2-9.5-4.9-13.3-6.7-1.6-.8-3.8-1.9-6-3.2-1.6-9.8-1.9-16.8-.7-21.1.8-2.9 4.1-7.1 3.4-19.8-.2-2.9-2.6-9.5-5.1-12.5 2.6 1.4 5 4.1 6.2 9.1 2.8 11.7 1.3 21.1-1.1 32.1 2 1.4 3.1 1.8 5.8 3.8 3.3 2.5 9.4 10.2 14.7 9.6-2.6 1.5-3.6 3.7-3.8 6.9ZM81.6 116c-.3.5-3 .4-3.3.9-1.9 3.6-.5 5.7-2.5 8.9-1-3.3-2.4-6.5-3.4-9.7-10.6 2.1-8.4-14-17.4-15.7 2.1-.1 4.3-.4 6.3-.8.4-2 1-2.7 1.4-5.6 1.8.2 3.6.4 4.2.3-.2-.4-.3-.8-.5-1.1 4.1 3 7.4 4.2 10.1 4.2-.2.8-.4 1.6-.5 2.5 1 .1 2.3.2 3.7.5 1.2 5.3 4 10.9 1.8 15.6Z" class="cls-2"/><path d="M104.3 67.1c-.6-.8-1-1.6-1.5-2.2h0c-.6-.8-1.2-1.4-2.5-1.5-.5 0-.8 0-1.1-.1-1.1-.2-1.7-.2-3.5 0-3.4.3-5.1-1.3-8.8-1.8.4-4.3-1-9-2.4-12.8 1.3 3.7-.2 8.8-1.7 12.5-.8-.2-1.9-.3-3.1-.5-1-1.7-3-2.3-5.2-.9 0 0-.2 0-.3-.1-1.4-.7-2.8-1.1-4.2-1h0c.9 3.6 1.2 6 .6 8.6-.9 3.3-4.2 8.7-4.3 11.9-.1 3.7-.9 3.4 0 6.8.6 2.3-.1 5 .5 7.3.1.4.3.8.5 1.1-.7.1-2.4 0-4.2-.3v-.2c-.1 0-.3 0-.4.1-1.9-.2-3.7-.4-4.3-.4-1 .1-2.3-.4-3.2-.3-1.4.1-2.8.3-4.2.4-1 0-2.5.4-3.8.7-.5 0-.9.2-1.3.2-.5-1.7-.8-4-.8-4-2.1-1.8-4.2-8.3-4-10.5.3-2.6-1.2-5.8-.6-10.9.1-1 1.1-5.3 1.8-8.9.9-4.7 1-8.2 4-12 1.8-2.3 3-4.6 4.1-6.6 2.1-4 4-5.1 6.2-6.6 2.2-1.6 7.6-4.4 16-3.3 7.8 4 7.5-1.1 12.7 0 4.1.9 9.1 5.8 12.2 8.4 8.4 7.1 7.4 17.1 7.2 26.9Z" class="cls-1"/><path d="M72.8 39.7c-4.2 2.2-7.1 7.2-8.2 11.6-.7 2.9-2.2 4.2-2.3 7.5 1.6 0 3.8 1.1 5.8.3.6-.2 1.1-.4 1.7-.4m33 6.2s0 0 0 0c-1.1 1.9-.1 4.7-.6 8-.4 2.8-2 5.1-2 8.1 0 2.9 1.2 5.6 1.5 8.1.4 3.6-4 7.2-3.3 8.8-1.6.6-3 .5-5 1.1-2.8.9-3-2-5.5-1.5-2.8.6-4.1-.9-5.7-1.7 1.8-1.1 3.5-2.7 5.2-4.3 1.9-1.8 4.7-4.8 7.8-10.8 2.5-4.8 1.5-10 1.5-10 1.3-3.6 2.1-4.2 2.3-7.6h0c.3 0 .7 0 1.1.1 1.2.1 1.9.7 2.5 1.5Z" class="cls-1"/><path d="M62.8 94.1h-.4" class="cls-8"/><path d="M79.6 60.6c-1.9-.2-4-.5-5.2-.9 2.2-1.4 4.2-.7 5.2.9" class="cls-1"/><path d="M99.1 63.3c-1.1-.2-1.7-.2-3.5 0-3.4.3-5.1-1.3-8.8-1.8.4-4.3-1-9-2.4-12.8 1.3 3.7-.2 8.8-1.7 12.5-.8-.2-1.9-.3-3.1-.5-1.9-.2-4-.5-5.2-.9 0 0-.2 0-.3-.1-1.4-.7-2.8-1.1-4.2-1h0c.9 3.6 1.2 6 .6 8.6-.9 3.3-4.2 8.7-4.3 11.9-.1 3.7-.9 3.4 0 6.8.6 2.3-.1 5 .5 7.3 4.1 3 7.4 4.2 10.1 4.2 2.1 0 3.9-.6 5.6-1.6 1.8-1.1 3.5-2.7 5.2-4.3 1.9-1.8 4.7-4.8 7.8-10.8 2.5-4.8 1.5-10 1.5-10 1.3-3.6 2.1-4.2 2.3-7.6h0Zm-22.8 7.8c-.8-.2-1.2-1.5-.9-2.9s1.3-2.4 2.1-2.2 1.2 1.5.9 2.9-1.3 2.4-2.1 2.2m.7 12.4c5.8 2 7.2 3.3 10.1 3.3-3.7 8.2-10.2 1.9-10.1-3.3M93.7 73c-.4 1.5-1.3 2.5-2.1 2.3s-1.2-1.6-.8-3c.4-1.5 1.3-2.5 2.1-2.3s1.2 1.5.8 3" class="cls-2"/><path d="M87.1 86.8C83.4 95 76.9 88.7 77 83.5c5.8 2 7.2 3.3 10.1 3.3" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M77 103.8c-1-1.1-1.1-2.5-.8-3.9" class="cls-8"/><path d="M62.4 94c-1.1.4-2.6 1.4-4 1.1-1.9-.5-4.2-.8-5.6-.4-2.8.7-4.9 0-5.9-.3 1.3-.3 2.8-.6 3.8-.7 1.4-.2 2.8-.3 4.2-.4.9 0 2.2.4 3.2.3.6 0 2.5.2 4.3.4" class="cls-1"/><path d="M46.8 94.5c-.3 0-.5-.2-.6-.2m4.4 31.3h-.1m-2 41.8s0 0 0 0" class="cls-8"/><path d="M89.5 171.1c-2.7 0-5 1.5-7.8 1.8-.6 0-1.2.2-1.8.2-1.3.2-2.4.3-3.5.4-1.5.1-3 .2-4.9 0 .8-.7 1.6-2 .3-3 1-.6 1.9-2.3.5-4 3.4-2.2 1.1-4-1.1-5.4-.7-5.2-7.1-2.8-10.4-2.8h0c-3.6-.5-6.3-4.4-8.6-7.6.3-1.5.2-2.2.3-4 .2-3.5-.5-9.2-.8-13.5-.1-1.5-.8-6.6-1.1-7.7h.3c5.3-12.3.4-21.8-1-24l-.2-.7c2.1-.6 3.9-.7 5.3-.4 9 1.7 6.7 17.8 17.4 15.7 1 3.2 2.4 6.4 3.4 9.7 1.9-3.2.6-5.4 2.5-8.9.3-.5 3-.4 3.3-.9 2.3-4.6-.6-10.2-1.8-15.6 1.3.3 2.8.7 4.2 1.4h0c2.5 3 4.9 9.7 5.1 12.5.6 12.7-2.6 16.9-3.4 19.8-1.2 4.4-.9 11.3.7 21.1.8 4.6 1.8 9.9 3.1 15.7Z" class="cls-5"/><path d="M47.7 172.8s0 0 0 0M84 101.9c-.2-.2-.4-.5-.6-.6m-28.3-.8h-1.3m41-34.2c0-2.4-2.4-2.5-3.4-1.2m-17-5.4c-.2.1-.5.3-.8.5m6 .5s0 0 0 0m7.6 15.6c1.7 2.5 1.7 2.3 3 3.4-1.2 2.1-1.9 2.4-4.1 3" class="cls-8"/><path d="M93.7 73c-.4 1.5-1.3 2.5-2.1 2.3s-1.2-1.6-.8-3c.4-1.5 1.3-2.5 2.1-2.3s1.2 1.5.8 3m-15.3-4.1c-.3 1.4-1.3 2.4-2.1 2.2s-1.2-1.5-.9-2.9 1.3-2.4 2.1-2.2 1.2 1.5.9 2.9" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M44.8 142.7s0 0 0 0m0 0c-.8-.6-1.8-1.3-3.2-2.4m19.9 18.3h-.7m10.4 2.6c-1-.6-2-1.1-2.5-1.5m2.5 1.6s0 0 0 0m15.1-6s-.1 0-.2-.1M76.2 100h-.1" class="cls-8"/><path d="M59.3 171.8c-5.4-1.2-9.9-2.6-10.8-4.4.3-1.9.7-3.9 1.2-5.8 2.7 1.9 5.5 4.1 7.5 5.8-.1 1.5.8 3.1 2.1 4.5Z" class="cls-5"/><path d="M76.1 188c-.1 5.1-.5 11-.9 17h0" class="cls-8"/><path d="M76.5 178.1c-2.6.2-5.1.3-7.2 0-5.1-.5-17.7-2.4-21.5-5.4.2-1.8.5-3.6.8-5.4.9 1.8 5.4 3.2 10.8 4.4h0c1.2 1.3 2.8 2.5 4 3.1 1.7 1 9.1 3.1 7.6-1 .2 0 .4-.2.6-.4h4.9v4.6Zm15.2-2.8c-2.9.9-7 1.8-11.1 2.4-.2-1.4-.4-3.1-.6-4.5.6 0 1.1-.1 1.8-.2 2.8-.3 5-1.7 7.8-1.8.7 1.4 1.5 2.8 2.2 4.2Z" class="cls-3"/><path d="M75.2 205.1c0-.1-.1-.2-.2-.3" class="cls-8"/><path d="M57.4 315.8c-.5.2-1.2 0-1.7-.1-6.3-2.2-12.5-4.4-18.7-7-2.6-1.1-5.2-2.3-7.3-4.6-2.1-2.2-3.5-5.7-2.9-8.9.5-2.6 2.5-4.7 4.6-4.9h0c6.4 2.5 15.8 8 21.1 9.3v-.1c2.7 3.4 4.6 7.7 5.6 12.3.3 1.5.3 3.5-.8 4Zm78.7-5.8c-1.5 1.4-3.7 1.7-5.7 1.8-3.9.3-7.8.6-11.6.9-4.7.3-9.5.7-13.8-1.2-4-1.8-7.1-6.4-5.9-10.5l-.2-1.5h.3c6.4-.8 15.3-2.5 21.6-5 4.3.8 8.4 2.5 11.9 5 1.8 1.2 3.4 2.8 4.3 4.7.8 2 .7 4.5-.9 6Z" class="cls-3"/><path d="M120.7 294.3h-.4m-21 6c0 .2-.1.4-.2.6" class="cls-8"/><path d="M120.4 162.6c0 4.1-2.1 8.6-6.1 9.5-4.1.9-7.9-2.8-8.5-6.9 0-.6-.1-1.1 0-1.7.2-3.2 1.2-5.4 3.8-6.9 1.2-.7 2.8-1.2 4.9-1.6 1.8-.4 3.7.7 4.7 2.3 1 1.5 1.3 3.5 1.3 5.3Z" class="cls-2"/><path d="M80.6 177.6c-1.4.2-2.7.4-4.1.5v-4.5h0c1.1-.2 2.3-.3 3.5-.5.2 1.4.4 3.1.6 4.5" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#aea26b"/></svg>')}`;
export default image;