/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-7,.cls-8{stroke-width:0}.cls-4{fill:#5f4c4a}.cls-7{fill:#94df5d}.cls-8{fill:#434343}</style></defs><path d="M11.2 298.9c-.4 1.3-.3 7.1.7 8.2 1.1 1.2 3 1.3 4.7 1.3 5.4 0 10.8.1 16.3 0 2 0 5.8.3 7.1-1 1.6-1.5.6-10.8-.6-12.6-.8-1.3-1.6-2-2.5-2.5-1.1-.6-2.4-.9-4.3-1.3-2.7-.6-6.4-1.2-10.1-.1-.9.5-2 .8-2.9 1.2-2.8 1.2-7.6 4.1-8.3 6.8Z" class="cls-8"/><path d="M20 131.7c0 1.5.7 4.1 1.7 6.6 1.1 2.7 2.5 5.2 3.6 6.2 2 1.8 3.6 2.7 5.7 3.6.9.4 1.9.8 3.1 1.2 2.3-2.4 5.7-7.7 8.6-12.2 1.6-2.5 3-4.7 4-6 1-4.3 1.1-7.2-.7-11.3-1.9-4.2-4.1-6.4-9.2-4.6-2 1.7-3.7 4-5.6 5.8-2 1.8-11 10.6-11 10.6Z" class="cls-7"/><path d="M24.2 289.4c-.4.6-1.1 1-1.8 1.4 3.7-1.1 7.4-.5 10.1.1 1.9.4 3.2.7 4.3 1.3 1.9-8.3-4.9-10.3-7.3-10.3-.7 0-1.5.1-2.1.3-1.4.4-2.6 1.3-3.2 2.6-.4.9.6 3.8 0 4.5Z" class="cls-8"/><path d="M24.6 155.2c.8-.7 4.8-5.8 6.3-7.1-2.1-.9-3.7-1.8-5.7-3.6-1.1-1-2.5-3.5-3.6-6.2h-.3c-3 3.1-8.7 9.2-10 11.5-2.8 5 1.9 16.1 5.6 20.4 2.7 3.2 9.2 8.3 11.7 11.8-1.3 2.8 1.7 6.8 3.7 8.7.9.9 4.2 2.9 6.3 3.1 1.1 0 2-.3 1.9-1.8 1 0 3.3-1.2 2.1-2.8 1.3-.2 2.7-1.6 1.9-3.5.7-.2 1.3-.4 1.7-.6 1.9-1.2.5-3-1.1-4.6.6-2.7-1.3-3.8-3.7-4.4-2.1-.5-4.5-.7-6.1-1.2-5.4-1.9-6.1-11.2-7.9-14.9-1.1-2.2-1.9-3.7-3-4.9ZM27.4 282v.3c.8-.2 1.5-.3 2.3-.3 2.3 0 9.2 2 7.3 10.3.9.5 1.7 1.3 2.5 2.5.3-5.3 2.9-18.7 4.4-23.2 1.5-4.7 5-14.7 7-19.4-6.5-.1-16.1-2.4-20.1-4.1-1 7-.8 20.8-3.3 33.9Z" class="cls-4"/><path d="M63.3 213.6c.3 5.6 4.6 35.6 4.6 38.5 1.9.6 3.7 1.1 5.5 1.4 8.1 1.4 14.8-.5 20.5-2.4 1.4-.5 2.7-.9 4-1.3 0-6.7-6.7-37.9-7.7-44.1-.5-3.3-1.5-7.9-2.2-12.2-.5-2.7-.8-5.2-1-7.4-2.5.6-4.7 1.3-7.2 1.6-4.6.5-9.4.8-14.1.6-4.1-.2-17.3-.7-19.2-3.2-.4.3-1 .5-1.7.6.8 2-.6 3.3-1.9 3.5 1.2 1.5-1.1 2.8-2.1 2.8 0 1.4-.7 1.9-1.9 1.8C37.4 201.7 29 247 29 247c.3.3.9.6 1.7.9 4 1.7 13.6 4 20.1 4.1 1.2 0 2.3 0 3.2-.2.2 0 .4-.2.4-.4.7-3.3 5.5-25.3 8.9-37.9Z" style="stroke-width:0;fill:#c2c8c3"/><path d="M89 174.5c.1-6.9.2-14.1.2-20.6v-9.2c0-6.5-.2-13.3-1.3-18.7s-3.6-11-7.6-15c-1.3-.1-2.5-.2-3.8 0 1.1 4.2-4.6 11.5-11 11.9-5.5 0-14.2-5.5-14.4-11.1h-5.8c-1.4 0-4.3 1-6 1.7-1 .4-1.9 1-2.7 1.7 5.1-1.8 7.4.4 9.2 4.6 1.8 4.1 1.8 7 .7 11.3-1 1.3-2.4 3.5-4 6 .2 2.8.5 11.1.6 12.9.3 3.3.7 6.7.4 10-.3 4.6-1.7 11.9-2.1 16.1 2.4.6 4.3 1.8 3.7 4.4 1.5 1.6 3 3.4 1.1 4.6 2 2.4 15.1 3 19.2 3.2 4.7.2 9.5-.1 14.1-.6 2.5-.3 4.7-1 7.2-1.6.6-.1 1.2-.3 1.8-.4.1-3.6.2-7.4.3-11.3Z" style="stroke-width:0;fill:#26affa"/><path d="M80.9 94.2c-1.5 2.9-3.2 4.4-6.7 4.9-2.2.3-5.2 0-7.4-1.3-1.3-.9-3.9-2.9-5-4.1-.7-.7 14.1 2 19 .5Zm-35.4-5.7c.9 3.6 3 7.1 4.7 8.8 1.5 1.5 2.9 2.8 4.3 3.9 7.3 6.1 13.4 8.2 18.5 7.2h.2c3.4-.7 6.3-2.8 8.9-5.9 4.2-5.1 6.3-8.4 7.6-13.4.1-.5.3-1 .4-1.6 1.1-5.2 1.6-7.4 1.6-8.2V79c.3-1.5.5-2.6.6-3.7.1-2.1 0-3.7 0-6.4 0-8.6-.9-16.7-7.3-21.5S73.1 41 65.1 41.2c-9 .2-15.5 4.6-20.7 11.9-3.6 5-3.4 13.8-2.8 21.3-.2.1-.5.2-.7.3-1.3.8-2.1 2.5-2.1 4.3 0 1.7 1.1 6.1 3 7.7 1.1.9 2.6 1.8 3.7 1.9Zm18.8-19.1c-2.5-.2-5.1-.3-7.6-.5.6-1 9.2-3.3 10.8-.4-.3.5-.8.8-1.4.9s-1.2 0-1.8 0m-4.1 8.2c0-1.9.8-3.5 1.9-3.5s1.8 1.6 1.8 3.5-.8 3.5-1.8 3.5-1.9-1.6-1.9-3.5m20.7-8.5c-.4-.2-.7-.6-.5-1 1.3-1.7 6.4.2 9.7 1.4 0 .2-5.7.2-7.9 0-.5 0-1-.1-1.4-.4Zm2.1 8.2c0-1.7.7-3 1.5-3s1.5 1.4 1.5 3-.7 3-1.5 3-1.5-1.3-1.5-3" style="stroke-width:0;fill:#5f4c49"/><path d="M76.5 111c-.4-1.3-1.4-2.3-3.3-2.7H73c.4 5.7-3.9 12.2-10.4 9.4-3.9-1.7-8.6-4.5-8.4-7.3 0-1.1.2-2.5.2-4h-.2c-2.2 1.7-3.1 3.5-3 5.4.1 5.6 8.9 11.1 14.4 11.1 6.4-.4 12.1-7.7 11-11.9Z" class="cls-7"/><path d="M54.2 110.5c-.2 2.8 4.5 5.6 8.4 7.3 6.5 2.9 10.8-3.7 10.4-9.4-5.1 1-11.1-1-18.5-7.2v5.2c0 1.5-.1 2.9-.2 4Z" class="cls-4"/><path d="M56.7 68.9c2.5.2 5.1.3 7.6.5h1.8c.6-.1 1.1-.4 1.4-.9-1.7-2.9-10.3-.6-10.8.4m5.4 5.2c-1 0-1.9 1.6-1.9 3.5s.8 3.5 1.9 3.5 1.8-1.6 1.8-3.5-.8-3.5-1.8-3.5" class="cls-3"/><path d="M80.9 94.2c-5 1.5-19.7-1.3-19-.5 1.1 1.2 3.6 3.2 5 4.1 2.1 1.4 5.2 1.6 7.4 1.3 3.6-.5 5.2-2 6.7-4.7Z" style="stroke-width:0;fill:#fff"/><path d="M73.4 253.6c.2.5 2 6.8 2.1 7.2 4.4 12.5 9.7 26.9 10.5 35.2.9-1.6 1.6-2.8 3.1-3.4H88c-.6-2.7-.2-5.6 1.7-7.6 1.2-1.3 4.2-2.2 6.7-2.2-.9-2.8-2-13.4-2-16.5 0-2.8-.4-9.6-.5-15.1-5.7 1.9-12.4 3.8-20.5 2.4" class="cls-4"/><path d="M90.1 69.5c-3.4-1.2-8.5-3.1-9.7-1.4-.2.4 0 .8.5 1s.9.3 1.4.4c2.2.3 7.9.3 7.9 0Z" class="cls-3"/><path d="M82.6 111.4c-.8-.2-1.6-.3-2.3-.4 4 4 6.6 9.6 7.6 15 1.2 5.3 1.3 12.2 1.3 18.7.9 1.1 1.1 1.3 1.9 2.4.4-.1.7-.2 1.1-.3 6-1.8 7.4-2.6 9.3-6.8.3-.6.6-1.3.9-2-2.7-4.7-8-17.6-12.2-21.4-2.6-2.3-4.2-4.3-7.5-5.1Z" class="cls-7"/><ellipse cx="84.5" cy="77.3" class="cls-3" rx="1.5" ry="3"/><path d="M86 296c-1.1 2-1.6 10.6.4 11.8 1.5.8 19.4 1.4 24.4 1.1.5 0 3.4-.6 3.8-.8 1.5-.6.8-8.7 0-10.1-1.8-3.3-9.1-6-13.1-7-.4.6-1.3.7-2.1.7-2.4 0-7 0-9.3.5-.4.1-.8.2-1.2.4-1.5.7-2.2 1.8-3.1 3.4Z" class="cls-8"/><path d="M96.4 282.7c-2.5 0-5.5.9-6.7 2.2-1.9 2-2.3 5-1.7 7.6h1.1c.3-.1.7-.3 1.2-.4 2.3-.6 6.9-.5 9.3-.5.8 0 1.7 0 2.1-.7.2-.3.2-.7.2-1.1-.1-2.1-.2-4.9-1.9-6.3-.8-.6-2.1-.9-3.5-.9Z" class="cls-8"/><path d="M99.2 157.8c-1.5 2.6-2.4 5.6-3.7 8.1-.9 1.9-2.1 3.3-3.4 4.9-.9 1.1-2.5 3.1-3 3.7 0 3.9-.2 7.7-.3 11.3-.6.1-1.2.2-1.8.4.2 2.2.5 4.7 1 7.4h.4c1.7-.5 3.6-.6 4.6-3.4.8-2.1 1.2-4 1.9-6.1 1.6-4.9 5-7.7 8.8-11.6 5.1-5.3 10.1-12.1 5.7-18.7-.7-1.1-5.9-10.4-7.7-13.7-1.9 4.1-3.3 4.9-9.3 6.8v.4c1.5 2.6 6.7 11 7 10.7Zm-9.5-68.7c1.7.3 4.6-5.4 5-7.7.3-1.8.6-1.6.3-3.5-.1-.6-.3-1.3-.6-1.8-.4-.5-1-.9-1.7-.8h-.4c0 1-.2 2.2-.6 3.7v.3c0 .8-.5 3-1.6 8.2-.1.6-.2 1.1-.4 1.6" class="cls-4"/><path d="M73 108.3c.4 5.7-3.9 12.2-10.4 9.4-3.9-1.7-8.6-4.5-8.4-7.3 0-1.1.2-2.5.2-4v-5.2m22.1 9.8c1.2-.1 2.5-.1 3.8 0 .8 0 1.5.2 2.3.4 3.4.8 4.9 2.8 7.5 5.1 4.2 3.7 9.5 16.7 12.2 21.4-.3.8-.6 1.4-.9 2-1.9 4.1-3.3 5-9.3 6.8-.3.1-.7.2-1.1.3h-.2m-39.9-35.2h-5.5c-1.4 0-4.3 1-6 1.7-1 .4-1.9 1-2.7 1.7-2 1.7-3.7 4-5.6 5.8-2 1.8-11 10.6-11 10.6 0 1.5.7 4.1 1.7 6.6 1.1 2.7 2.5 5.2 3.6 6.2 2 1.8 3.6 2.7 5.7 3.6.9.4 1.9.8 3.1 1.2 2.3-2.4 5.7-7.7 8.6-12.2 1.6-2.5 3-4.7 4-6" class="cls-2"/><path d="M87.9 126c1.2 5.3 1.3 12.2 1.3 18.7v9.2c0 6.5 0 13.7-.2 20.6 0 3.9-.2 7.7-.3 11.3-.6.1-1.2.2-1.8.4-2.5.6-4.7 1.3-7.2 1.6-4.6.5-9.4.8-14.1.6-4.1-.2-17.3-.7-19.2-3.2m-3.8-48c.2 2.8.5 11.1.6 12.9.3 3.3.7 6.7.4 10-.3 4.6-1.7 11.9-2.1 16.1v.4m60-36.6c1.8 3.4 7 12.6 7.7 13.7 4.4 6.7-.6 13.4-5.7 18.7-3.8 3.9-7.2 6.7-8.8 11.6-.7 2.1-1.1 4-1.9 6.1-1 2.8-2.9 3-4.6 3.3" class="cls-2"/><path d="M92.3 147.1c1.4 2.6 6.6 11 6.9 10.7m-10-13.2.1.1c.9 1.1 1.1 1.3 1.9 2.4 0 .1.2.2.3.3" class="cls-2"/><path d="M103 153.6c-1.7 1.1-2.8 2.5-3.8 4.2-1.5 2.6-2.4 5.6-3.7 8.1-.9 1.9-2.1 3.3-3.4 4.9-.9 1.1-2.5 3.1-3 3.7m-58.2-26.4c-1.4 1.2-5.5 6.3-6.3 7.1m-3.2-16.7c-3 3-8.7 9.1-10 11.4-2.8 5 1.9 16.1 5.6 20.4 2.7 3.2 9.2 8.3 11.7 11.8" class="cls-2"/><path d="M35.4 175c-5.4-1.9-6.1-11.2-7.9-14.9-1.1-2.2-1.9-3.7-3-4.9-1.3-1.5-2.8-2.6-5.4-4m24.1 27.3c.4.5 1.3 1.3 2.1 2.1 1.5 1.6 3 3.4 1.1 4.6-.4.3-1 .5-1.7.6.8 2-.6 3.3-1.9 3.5 1.2 1.5-1.1 2.8-2.1 2.8 0 1.4-.7 1.9-1.9 1.8-2.1-.2-5.4-2.2-6.3-3.1-2-1.9-5-6-3.7-8.7" class="cls-2"/><path d="M35.4 175c1.6.5 4 .7 6.1 1.2 2.4.6 4.3 1.8 3.7 4.4m41.7 5.6c.2 2.2.5 4.8 1 7.4.7 4.3 1.7 8.8 2.2 12.2 1 6.2 7.7 37.4 7.7 44.1-1.3.4-2.6.9-4 1.3-5.7 1.9-12.4 3.8-20.5 2.4-1.8-.3-3.6-.8-5.5-1.4 0-3-4.3-32.9-4.6-38.5v-.6" class="cls-2"/><path d="M65.9 205.3c-.6 1.2-1.6 4.3-2.6 8.3-3.4 12.6-8.1 34.7-8.9 37.9 0 .2-.2.4-.4.4-.9.1-2 .2-3.2.2-6.5-.1-16.1-2.4-20.1-4.1-.8-.3-1.4-.7-1.7-.9 0 0 8.4-45.3 9.9-53.2v-.2m34.4 4.5c-2.1 1.8-6.3 6.1-7.4 7.1m28 45.8c.1 5.5.5 12.3.5 15.1m-21-12.6c.2.5 2 6.8 2.1 7.2 4.4 12.5 9.7 26.9 10.5 35.2m-35.3-43.8c-1.9 4.7-5.4 14.7-7 19.4-1.5 4.5-4.1 17.9-4.4 23.2m-8.7-46.7c-1 7-.8 20.8-3.3 33.9" class="cls-2"/><path d="M94.4 266.2c0 3.1 1.1 13.7 2 16.5h0m-66.8-.7c-.7 0-1.5.1-2.1.3-1.4.4-2.6 1.3-3.2 2.6-.4.9.6 3.8 0 4.5-.4.6-1.1 1-1.8 1.4-.9.5-2 .8-2.9 1.2-2.8 1.2-7.6 4.1-8.3 6.8-.4 1.3-.3 7.1.7 8.2 1.1 1.2 3 1.3 4.7 1.3 5.4 0 10.8.1 16.3 0 2 0 5.8.3 7.1-1 1.6-1.5.6-10.8-.6-12.6-.8-1.3-1.6-2-2.5-2.5-1.1-.6-2.4-.9-4.3-1.3-2.7-.6-6.4-1.2-10.1-.1-1 .3-2 .7-2.9 1.2" class="cls-1"/><path d="M36.9 292.3C38.8 284 32 282 29.6 282M88 292.6c-.6-2.6-.2-5.6 1.7-7.6 1.2-1.3 4.2-2.2 6.7-2.2 1.4 0 2.7.3 3.5.9 1.8 1.4 1.8 4.2 1.9 6.3 0 .4 0 .8-.2 1.1-.4.6-1.3.7-2.1.7-2.4 0-7 0-9.3.5-.4.1-.8.2-1.2.4-1.5.7-2.2 1.8-3.1 3.4-1.1 2-1.6 10.6.4 11.8 1.5.8 19.4 1.4 24.4 1.1.5 0 3.4-.6 3.8-.8 1.5-.6.8-8.7 0-10.1-1.8-3.3-9.1-6-13.1-7M92.3 68.8c-.1 2.7 0 4.4 0 6.4 0 1.1-.2 2.2-.6 3.7v.3c0 .8-.5 3-1.6 8.2-.1.6-.2 1.1-.4 1.6-1.3 5-3.3 8.3-7.6 13.4-2.6 3.1-5.5 5.2-8.9 5.9H73c-5.1 1-11.1-1-18.5-7.2-1.4-1.2-2.8-2.5-4.3-3.9-1.7-1.7-3.8-5.1-4.7-8.8m44.6-18.9c-3.4-1.2-8.5-3.1-9.7-1.4m-12.9.4c-1.7-2.9-10.3-.6-10.8.4" class="cls-1"/><ellipse cx="84.5" cy="77.3" class="cls-1" rx="1.5" ry="3"/><path d="M60.2 77.6c0 1.9.8 3.5 1.9 3.5s1.8-1.6 1.8-3.5-.8-3.5-1.8-3.5-1.9 1.6-1.9 3.5M79.4 89c-1.4 2.7-7.8 1.6-10.5.2M81.4 94c-.1 0-.3.1-.5.2-5 1.5-19.7-1.3-19-.5 1.1 1.2 3.6 3.2 5 4.1 2.1 1.4 5.2 1.6 7.4 1.3 3.6-.5 5.2-2 6.7-4.7" class="cls-1"/><path d="M92.3 68.8c0-8.6-.9-16.7-7.3-21.5s-11.9-6.4-19.9-6.2c-9 .2-15.5 4.6-20.7 11.9-3.6 5-3.4 13.8-2.8 21.3m3 1.8c-.5-1.3-1.8-2-3.1-1.7-.2 0-.5.1-.7.3-1.3.8-2.1 2.5-2.1 4.3 0 1.7 1.1 6.1 3 7.7 1.1.9 2.6 1.8 3.7 1.9.4 0 .8 0 1.1-.4m46.2-12.9c.6-.2 1.3.2 1.7.8.4.5.5 1.2.6 1.8.4 1.8 0 1.6-.3 3.5-.4 2.3-3.3 8-5 7.7h-.3m-35.2 17.3c-2.2 1.7-3.1 3.6-3 5.4.1 5.6 8.9 11.1 14.4 11.1 6.4-.4 12.1-7.7 11-11.9-.4-1.3-1.4-2.3-3.3-2.7m-36.7 7c5.1-1.8 7.4.4 9.2 4.6 1.8 4.1 1.8 7 .7 11.3m41.4-5.2c-1.1-5.4-3.6-11-7.6-15" class="cls-2"/><path d="M56.7 68.9c2.5.2 5.1.3 7.6.5h1.8c.6-.1 1.1-.4 1.4-.9m12.9-.4c-.2.4 0 .8.5 1s.9.3 1.4.4c2.2.3 7.9.3 7.9 0" class="cls-1"/></svg>')}`;
export default image;