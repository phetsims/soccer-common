/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#7c583c}.cls-1,.cls-10,.cls-11,.cls-2,.cls-7,.cls-9{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#342f29}.cls-7{fill:#c08d23}.cls-9{fill:#6b3237}.cls-10{fill:#6b3137}.cls-11{fill:none}</style></defs><path d="M89.3 63.9c0-.3.2-.7.2-1 .6-3 .7-4.3.5-7.4.4-3.5-5.8-14.2-15.8-14.9-6.4-.4-12.9 1.5-18.1 6.9-4.4 4.6-8.4 10.8-6.2 16.8-.8-.6-1.9-.7-2.9-.5-.6.1-1.2.4-1.8.8-.8.6-1.4 1.5-1.5 2.5-.3 2.7 3.3 6.8 5.8 5.9.8 2.8 1.7 4.9 2.9 6.9.9 1.5 1.9 3 3.2 4.6q0 0 0 0 1.35 1.35 2.7 2.4c6.2 5.2 10.7 6.7 14.2 6.2 4.2-.6 7-3.9 9.8-7.3 1.6-2 4-5.3 6.4-11.8 1.3-3.4 1-6.8.7-8.6-.2-1-.3-1.6-.3-1.6Zm-33.4-7.3c-.7.3-1.3-.5-.8-1l1-1c.9-.9 2.2-1.4 3.5-1.7 2-.4 8.5-.6 7.6 2.4-.2.7-.9 1.2-1.7 1.3s-1.6-.2-2.3-.3c-2.1-.5-5.1-.5-7.2.4Zm6.4 10.7c-.8 0-1.5-1.3-1.5-3s.7-3 1.5-3 1.5 1.3 1.5 3-.7 3-1.5 3M74 84.5c-1.8.2-4.7-.5-6.5-1.6-1.7-1.2-1.7-.4-3.7-3.6 1 1 10.8 3.4 15.7 1.2-1.3 2.4-2.6 3.6-5.5 4.1Zm9-17.8c-.7 0-1.2-1.1-1.2-2.6s.6-2.6 1.2-2.6 1.2 1.2 1.2 2.6-.6 2.6-1.2 2.6m3.7-10.1c-.2.2-.6.3-1 .2-.3 0-.7-.2-1-.3-.9-.3-2-.3-2.9 0-.7.3-1.3.8-2.1.7-1 0-1.8-.9-1.8-1.8s.7-1.7 1.6-2.1c2.3-1 5 .1 6.7 1.6.2.2.5.5.6.8s.1.6-.1.9" class="cls-1"/><path d="M79.5 80.4c-1.3 2.4-2.6 3.6-5.5 4.1-1.8.2-4.7-.5-6.5-1.6-1.7-1.2-1.7-.4-3.7-3.6 1 1 10.8 3.4 15.7 1.2Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M89.9 63h-.4c.6-3.1.7-4.4.5-7.5.4-3.5-5.8-14.2-15.8-14.9-6.4-.4-12.9 1.5-18.1 6.9-4.4 4.6-8.4 10.8-6.2 16.8-.8-.6-1.9-.7-2.9-.5v-.2c-1.8-8.8 1.8-18.6 9.1-23.9s17.9-5.6 25.4-.6 11.1 15.2 8.2 23.8Z" class="cls-2"/><path d="M75.2 103.4c-1.1 1.3-3.1 2-4.9 1.9-1.8 0-3.6-.8-5.1-1.7-2.9-1.8-5.5-4.5-7-7.5h-.3v-.7c.2-2.2.6-5.7.6-8.4 6.2 5.2 10.7 6.7 14.2 6.2q0 .6.3 1.5c.3 1.4.9 3.1 2 4 1.3 1.2 1.2 3.3.1 4.7Z" class="cls-1"/><path d="M84.2 64.1c0 1.4-.6 2.6-1.2 2.6s-1.2-1.1-1.2-2.6.6-2.6 1.2-2.6 1.2 1.2 1.2 2.6m-20.4.3c0 1.6-.7 3-1.5 3s-1.5-1.3-1.5-3 .7-3 1.5-3 1.5 1.3 1.5 3" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M79.5 71.9c-.5 4.4-4.4 3.9-7.2 4.3m-22.6 89.7-.3.1m-2.2 4.4h-.1m42.7 2.3h-.4m1.1-62.5c.2 3.1 0 5.7-.2 7.9M44.7 117v.1" class="cls-11"/><path d="M97.8 110.1h-.2c-1.8 3.7-4.2 5.1-6.9 8.1h-.3c0 .7-.2 1.3-.3 1.9-1 5.6-3 8.2-3.6 10.2-1.6 5.2-1 16.2 1.3 31 .2.9.3 1.9.5 2.9-13.1 2.9-24.9 4.2-40.7-.5q0 0 0 0c.4-2.2-.6-3.4-2.1-4.1l.2-.5c.3-3.7 2.7-8.4 3.1-15.8.2-3.6-.5-9.4-.9-13.7-.1-1.8-2.9-12.8-3.1-12.5h-.1c-.9.9-2 2.1-3.1 3.4-3.7-3.7-6.9-7.9-9.6-12.3 5.3-6.3 10.2-11.3 11.9-10.9 3.7-.7 8.5-1.1 11.9-1.4v.6c.6 5.1 3.3 9.8 6.8 13.6s7.7 6.8 11.9 9.8c5.2-6.9 6-16.8 2-24.5 3.9.4 9.3 1 11.2 1.7 2.1.5 6.1 6.2 10.2 13.2Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#ac6070"/><path d="M106.4 154.7c-3.8 4.2-7.2 7.1-8.9 12.3-.7 2.3-1.1 4.2-1.9 6.5-.9 2.6-2.5 3-4.1 3.4-.5-1.7-1.1-3.1-1.7-4.2-.6-3-1.1-5.9-1.5-8.6-.2-1-.3-1.9-.5-2.9 1.5-1.7 6-7 6.9-8.2 1.3-1.7 2.5-3.1 3.5-5.2 1.3-2.7 2.2-5.1 3.8-7.3l-.2-.2c-.5.6-8.9-16.2-11.6-20.3.1-.6.2-1.2.3-1.9h.3c2.7-3 5.1-4.4 6.9-7.9h.2c6.5 10.8 13.4 24.8 14.5 26.4 4.4 7.1-.7 12.5-5.9 18.1Z" class="cls-1"/><path d="M101.7 140.3s0 0 0 0m4.2-3.7c-1.7 1.2-3 2.5-4 4m-55.1-26c-.4.3-1.2 1.1-2.2 2.2" class="cls-11"/><path d="M46.9 169c.5 1.2.2 2.2-.4 2.8-.4.5-1 .8-1.5.9 1.2 1.6-1.1 2.9-2.1 2.9 0 1.5-.7 2-1.9 1.9-2.1-.2-5.5-2.3-6.4-3.3-2-2-5-6.3-3.7-9.2-2.5-3.8-6.7-9-9.5-12.3-3.8-4.6-10.8-14.8-7.9-20 1.4-2.6 10.5-15.2 18.5-24.6 2.7 4.4 5.9 8.6 9.6 12.3-3.1 3.6-6.5 7.6-7.6 8.7-1.3 1.3-6.5 7-7.8 8.3 1.3 1.6 2.1 2.8 3.6 6.2 1.7 3.7 2.9 11.7 7.7 14.1h0c2 .5 5.5.6 7.8 1.7h0c1.6.8 2.6 2 2.1 4.1q0 0 0 0t0 0c.8.8 1.5 1.7 1.8 2.5.5 1.2 0 2.4-2.5 3Z" class="cls-1"/><path d="M26.1 137.3c-.7-.9-1.4-1.8-2.6-3.3m14.7 23.9c-.2 0-.5-.2-.7-.3m10 5.8c-.8-.9-1.7-1.7-2.1-2.2" class="cls-11"/><path d="M97 215.7c-.4 0-.9.1-1.3.2-7.9.9-15.3 1.1-23.2 1.9-.8 0-1.6.2-2.5.3-.8-7.5-.7-26.7-2.4-33.3h-.1c-1.5 8.9-3.6 25.4-4.6 33.3-.9 0-1.9-.1-2.9-.2-6.7-.6-15-2.2-21.8-3.4-1.3-.2-2.5-.4-3.7-.6 0 0 2.9-25.7 6.5-36.4 1.1.1 2-.4 1.9-1.9 1.1 0 3.4-1.3 2.1-2.9.5 0 1.1-.4 1.5-.9 4.1 3.1 15.7 5.5 21.7 5.3 7.1-.2 15.2-2.6 21.7-4.4.6 1.1 1.2 2.6 1.7 4.2 3.4 11 4.3 32.1 5.5 38.8Z" class="cls-7"/><path d="M41 177.3v.2h0m31.6 4.8c-2.1 1.9-3.5 1.8-4.9 2.3" class="cls-11"/><path d="M89.8 172.7c-6.4 1.7-14.6 4.2-21.7 4.4-5.9.2-17.5-2.1-21.7-5.3.6-.7.8-1.6.4-2.8 2.5-.6 2.9-1.7 2.5-3-.3-.8-1-1.7-1.8-2.5 15.8 4.7 27.6 3.4 40.7.5.5 2.8 1 5.6 1.5 8.6Z" class="cls-10"/><path d="M54.3 299.6c0 1.8-1.2 8.3-3 9-1.1.5-2.4.5-3.7.4-6.8-.3-7.6 0-14.3-.2-1.2 0-2.1-.6-3-1.2-1.8-1.1-1.9-8-2-9.9-.2-3.7 5.6-7.1 11.6-8.1 3.9-.6 8-.2 10.6 1.8 1 .8 1.8 1.8 2.3 3 .7 1.6 1.5 3.3 1.5 5.1Z" class="cls-9"/><path d="M41.6 120.4h-.1" class="cls-11"/><path d="M95.8 215.9v4.6c-2.5 0-4 2.8-4.2 5.2-.3 2.5 0 5.2-1.3 7.2-1.8 2.7-6.3 2.8-8.2.3-1.1-1.4-1.4-3.3-1.7-5.1s-.8-3.7-2.3-4.8c-4.2-3.3-4.3 1.4-3.9 5.1-.5-2.4-1.1-5.5-1.6-10.7 7.9-.8 15.3-1 23.2-1.9h0Zm-35.8 2c-2.5 12.4-2.4 16.2-3.4 30.3-.9 13.2-6.1 29.7-6.1 43.3-2.6-2-6.7-2.4-10.6-1.8v-.2c.2-16.3-5.5-31.9-2.1-47.6 2.2-10.2.4-15.4.4-27.4 6.8 1.2 15.1 2.8 21.8 3.4" class="cls-1"/><path d="M94.7 253.9c-.3.8-.7 1.6-1.1 2.3-.6 1.2-1.4 2.3-2.4 3.2-1.6 1.5-3.9 2.4-6 2-2-.4-3.7-1.9-4.7-3.6s-1.6-3.7-2.1-5.7c-1.5-5.6-2.8-14.7-3.8-20.4 0-1-.2-2-.5-3.1q0 0 0 0c-.4-3.7-.3-8.4 3.9-5.1 1.4 1.1 1.9 3 2.3 4.8.3 1.8.6 3.7 1.7 5.1 1.9 2.6 6.5 2.4 8.2-.3 1.4-2.1 1.1-4.8 1.3-7.2.2-2.5 1.8-5.3 4.2-5.2 1.3 10 2.7 23.9-1 33.3Z" class="cls-2"/><path d="M74.6 231.6c0-.6-.3-1.8-.5-3.1.2 1.2.4 2.1.5 3.1" class="cls-11"/><path d="M74.4 119.6c-4.2-3-8.4-6-11.9-9.8s-6.2-8.5-6.7-13.6v-.6c.8 0 1.6-.2 2.2-.3v.7h.3c1.5 2.9 4 5.7 7 7.5 1.5.9 3.3 1.6 5.1 1.7 1.8 0 3.8-.5 4.9-1.9s1.2-3.5-.1-4.7c-1.1-1-1.7-2.7-2-4 .7.1 1.9.3 3.3.4 4 7.6 3.2 17.6-2 24.5Z" class="cls-10"/><path d="M76.3 95.1v-.2M88.4 164h-.1" class="cls-11"/><path d="M105.3 298.8c-.1 2-.3 8.4-2.2 9.4-1 .5-2.3.6-3.4.6-6.8.3-9.9-.3-16.7 0-1.2 0-2.5 0-3.7-.4-1.7-.8-2.9-6.9-2.8-8.7 0-1.8.8-3.5 1.5-5.1 1.1-2.9 4-4.3 7.5-4.7 2.2-.2 4.5 0 6.9.4 6.7 1.3 13.1 4.9 12.8 8.6Z" class="cls-9"/><path d="M56.1 84.9c-.1-.1-.2-.3-.3-.4" class="cls-11"/><path d="M89.6 65.5c-.2-1-.3-1.6-.3-1.6 0-.3.2-.7.2-1h.4c2.9-8.5-.8-18.7-8.2-23.7-7.5-5.1-18.1-4.7-25.4.6s-10.9 15.1-9.2 23.9v.2c-.6.1-1.2.4-1.7.8h0c-3.9-9.1-1.7-20.3 5.1-27.2h0c.8-.8 1.7-1.6 2.6-2.3.6-.4 1.1-.8 1.8-1.2 1.9-1.2 3.9-2 6-2.6.3 0 .6-.1.9-.2 7.5-1.8 15.8-.2 21.7 4.8 8.4 7 11.1 19.9 6.2 29.7Z" class="cls-7"/><path d="M89.6 65.5s0 0 0 0" class="cls-11"/><path d="M54.7 33.8c-.6.5-1.2.8-1.8 1.3-.9.7-1.8 1.5-2.6 2.3h0c-5.2 1.3-10.1-1-12.3-5.8 4.1-1.6 8.9-1.2 12.6 1.2-2.2-3.8-1.7-9 1.2-12.4 3.6 3.3 4.8 8.9 2.8 13.4Z" class="cls-7"/><path d="M42.5 42.1c0 .2-.2.3-.2.5" class="cls-11"/><path d="M63.2 27.4c-.4 1.7-.4 3.1-1.6 3.6-.3 0-.6.1-.9.2-2.1.6-4.2 1.4-6 2.6h0c2-4.5.8-10.2-2.8-13.4-2.9 3.3-3.4 8.5-1.2 12.4-3.7-2.4-8.6-2.9-12.6-1.2 2.2 4.8 7.2 7.1 12.3 5.8-6.8 7-9 18.2-5.1 27.1h0c-.8.7-1.4 1.6-1.5 2.6-.3 2.7 3.3 6.8 5.8 5.9.8 2.8 1.7 4.9 2.9 6.9h0c-5.9-4-10.3-10.2-12.1-17-1.8-6.7-1.1-14 1.8-20.3-.6.1-1.2 0-1.8-.1-1.3-.5-2.1-2.1-1.8-3.4-1.4.7-3.2.3-4.3-.8s-1.3-3-.5-4.3c-2.3-.5-4-2.9-3.6-5.3.4-2.3 2.8-4.1 5.1-3.9-1.8-.5-2.4-3-1.3-4.6 1-1.6 3.1-2.1 4.9-2-1.3-1.6-.9-4.3.8-5.5s4.4-.7 5.5 1c-.1.3.5 1 .3 1.3.7-2.3 3.4-3.7 5.7-3.1s3.9 3.2 3.4 5.6c1.3-1.3 3.6-1.4 5.1-.3s1.9 3.4 1 5c1.8 1.1 2.8 3.3 2.4 5.4Z" class="cls-2"/><path d="M44.2 41.3c-.4.7-1.1 1.1-1.9 1.3" class="cls-11"/><path d="M67.1 55.2c-.2.7-.9 1.2-1.7 1.3s-1.6-.2-2.3-.3c-2.1-.5-5.1-.5-7.2.4-.7.3-1.3-.5-.8-1l1-1c.9-.9 2.2-1.4 3.5-1.7 2-.4 8.5-.6 7.6 2.4Zm19.6 1.4c-.2.2-.6.3-1 .2-.3 0-.7-.2-1-.3-.9-.3-2-.3-2.9 0-.7.3-1.3.8-2.1.7-1 0-1.8-.9-1.8-1.8s.7-1.7 1.6-2.1c2.3-1 5 .1 6.7 1.6.2.2.5.5.6.8s.1.6-.1.9" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#111110"/><path d="M92.4 290.2c-2.4-.4-4.7-.6-6.9-.4h0c0-2.1-.7-15.8-.9-23h0c1.5.1 3.1.1 4.6.1h2.9c0 .7.2 21.5.3 23.2Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#8a8a8a"/><path d="M93.7 266.4c0 .2-.7.3-1.6.4-.8 0-1.8.2-2.9.2-1.5 0-3.1 0-4.6-.1-1.2-.1-2.2-.3-2.9-.5-.7-2.7-.6-5.4-1.2-8.6 1.1 1.7 2.7 3.2 4.7 3.6 2.1.4 4.4-.5 6-2 1-.9 1.8-2 2.4-3.2-.3 2.8.5 9.5 0 10.2Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#606060"/></svg>')}`;
export default image;