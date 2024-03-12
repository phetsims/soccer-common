/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africaModest" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-10,.cls-11,.cls-3,.cls-4,.cls-5,.cls-8{stroke-width:0}.cls-4{fill:#54a880}.cls-5{fill:#dea339}.cls-8{fill:#d5d5d4}.cls-10{fill:#ffcc69}.cls-11{fill:#e880a9}</style></defs><path d="M37.5 164.1c.5-1.9 2.1-7.4 2.5-9.4.7-2.8 1.4-6.1 2.2-8.4-4.6-.5-10.4-1.7-13.1-3.4-2.1 7.2-3.9 16.3-3.9 21.8 0 6.7 7.7 13.6 12.5 16 1.5.8 3.3 1.5 5.3 2.8 0-1.6.8-8 1.4-13.7-2.6-2.3-4.5-3.8-7-5.8Z" class="cls-11"/><path d="M29.2 142.9c2.7 1.7 8.5 2.9 13.1 3.4.9.1 1.7.2 2.5.2h1.9c.3-1.4.5-2.7.7-3.8-5.7 0-12.9-1.6-18.9-5.1h-.4c-.3 2-.4 3.3-.4 3.3 0 .7.5 1.4 1.5 1.9Z" class="cls-5"/><path d="M90.4 140c-.1-3.4-.6-6.8-1.4-10.8l-.5-.4c-2.5 3.2-5.6 6.1-8 6.5-9.5 1.7-17-.6-25.9-4.4-4.6-2-10-10.4-14.3-13.1-1.2-.8-2.5-1.6-3.4-2.7-5.1 1.5-7.8 15.9-8.7 22.5h.4c6 3.6 13.1 5.2 18.9 5.2-.1 1.1-.3 2.4-.7 3.8h-1.9c.2 1.9.4 4.7.5 7.5 21.5 8.3 40.5 1.8 44.3-1.8 0-.3 0-.6.1-.8.4-2.9.6-5.5.7-8V140Z" class="cls-10"/><path d="M51.4 293.4c-1.1-.7-2.4-.9-4.3-1.3-2.4-.4-5.6-.7-8.7.5-.8.5-1.7.9-2.5 1.4-2.3 1.4-6.2 4.4-6.7 7.1-.2 1.3.2 6.1 1.1 7 1.1 1 2.7 1 4.2.9 4.7-.3 9.3-.6 14-1 1.7-.1 3.6-.4 4.7-1.7 1.3-1.6 1.2-9.3 0-11-.6-.9-1.2-1.5-1.8-1.9" class="cls-8"/><path d="M36.4 107.8c-.6 1.9-1.1 4-.4 5.8.2.6.5 1 .9 1.5.9 1.1 2.2 1.9 3.4 2.7 4.3 2.6 9.6 11.1 14.3 13.1 8.9 3.8 16.4 6.1 25.9 4.4 2.5-.4 5.5-3.3 8-6.5 2-2.5 3.7-5.2 4.5-6.9.7-1.6 1-3.3 1-5 0-1.3-.1-2.6-.2-3.9-1-11.6-.3-19.2.8-30.8 1.5-16.3-1.6-28.4-10.3-33.4-3.1-1.8-8.2-3.2-12.1-3.4-9.8-.5-17.6.7-23.3 8.3-5.1 6.9-6.3 16.2-7.6 28-1.5 13.4-1.9 16.4-4.7 26.2ZM49 87.1c-.3-7.2 2.5-13.8 6.8-19.6 2.7-3.6 4.9-5.3 11.6-7.9 4.9-1.9 13.5-2 17.7 1.3s7.1 7.9 7.5 13.2c-.2 4.3.4.1-.6 4.7 0 0-.8 1.7-1.5 8.7-.6 5.8-1.9 11.6-6.1 15.4-8.8 7.9-11.8 8.9-26 .2-2-1.3-8.6-4.3-9.4-16" class="cls-5"/><path d="M88.3 168.7c0-3.3.3-6.6.6-9.8-3.8 2.9-24.2 8.4-43.3-.2v2.1c0 .8-.5 4.7-.9 9.1-.6 5.6-1.3 12.1-1.4 13.7 0 0-2.7 11.4-2.7 11.5-1.4 7.9-4.5 25.3-4.8 27.1 1.7.9 3.6 1.7 5.5 2.4 5.7 1.9 12.2 3 18.8 3.4 3.6.2 7.2.3 10.7.1 7.2-.2 13.8-1.1 18.6-2.3q4.05-.9 6-2.1c-1.2-7.8-2.4-12.2-3.4-18.8-.9-5.7-2.7-12.6-3.1-18.7 0-1.2-.1-2.3-.2-3.5-.3-5.1-.3-9.7-.2-14.1Z" class="cls-10"/><path d="M38.4 248.2c-.8 7.4 2.1 23.1 1.7 37.5.9-1.1 2.3-1.8 3.7-1.9 1.7-.2 7.2 2.1 7.5 8.4h.8c-.5-8.7 1.1-17.1 2.1-21.9 1.8-7.9 2.5-16.3 3.2-24.3.3-3.5 0-6.4.4-9.8.3-3.5 1-4.8 2.1-8.2-6.6-.4-13.1-1.4-18.8-3.4-.7 5.4.2 10.6-.4 13.9-.6 3.5-1.9 5.9-2.3 9.8Z" class="cls-4"/><path d="M39.5 286.9c-.2.6.3 2.3.4 3.4.1-1.5.2-3.1.2-4.6-.3.4-.5.8-.7 1.2Z" class="cls-8"/><path d="M39.8 291.2c-.3.6-.8 1-1.4 1.4 3.1-1.3 6.3-.9 8.7-.5 1.9.3 3.2.5 4.3 1.3v-1.3c-.3-6.3-5.8-8.5-7.5-8.4-1.5.1-2.9.8-3.7 1.9 0 1.6-.1 3.1-.2 4.6v.9Z" class="cls-8"/><path d="M39.9 290.3v.9q.15-.3 0-.9" style="stroke-width:0;fill:#c8b6aa"/><path d="M45.3 154.1c0 1.6.1 3.2.2 4.6 19.1 8.6 39.5 3.1 43.3.2.2-2.2.5-4.3.8-6.5-3.8 3.6-22.8 10-44.3 1.8Z" class="cls-5"/><path d="M80 96.4c-1.3 2.3-2.7 3.5-5.6 3.9-1.8.2-5.5-.1-7.3-1.2s-2.5-1.5-4.6-4.4c1 1 12.3 3.5 17.6 1.7ZM55.7 67.5c-4.3 5.8-7.1 12.4-6.8 19.6.8 11.7 7.4 14.7 9.4 16 14.1 8.8 17.2 7.7 26-.2 4.2-3.8 5.5-9.6 6.1-15.4.7-7 1.5-8.7 1.5-8.7 1-4.6.4-.5.6-4.7-.3-5.3-3.3-9.9-7.5-13.2s-12.8-3.2-17.7-1.3c-6.7 2.6-8.9 4.3-11.6 7.9m7.2 11.1c0-2 .8-3.6 1.9-3.6s1.8 1.6 1.8 3.6-.8 3.6-1.8 3.6-1.9-1.6-1.9-3.6m20.6-.1c0-1.7.7-3.1 1.5-3.1s1.5 1.4 1.5 3.1-.7 3.1-1.5 3.1-1.5-1.4-1.5-3.1" style="stroke-width:0;fill:#ac847b"/><path d="M64.8 75c-1 0-1.9 1.6-1.9 3.6s.8 3.6 1.9 3.6 1.8-1.6 1.8-3.6-.8-3.6-1.8-3.6" class="cls-3"/><path d="M62.5 94.6c2.1 3 2.9 3.3 4.6 4.4 1.8 1.1 5.5 1.5 7.3 1.2 3-.4 4.4-1.6 5.6-3.8-5.2 1.7-16.5-.9-17.6-1.8Z" style="stroke-width:0;fill:#fff"/><path d="M70.7 228c.4 2.8.6 5.8 1.5 8.3-1.3 7.7.2 15.6.8 17.9 4 14.1 6.2 20.2 6.8 35.6h.3c.2-1.5.8-2.9 1.9-4 1.8-1.8 7.1-2.5 8.9-.7.5.5.8 1.2 1 1.9-.5-7.7-1.1-29.1-.9-32.6.3-5.3 0-10.4-1.7-18.9.5-2.6.4-7.4 0-9.8-4.7 1.1-11.3 2-18.6 2.3" class="cls-4"/><path d="M78.1 296.2c-1 1.8-1.7 10.1 0 11.4 1.2.9 14.8 1.2 19.1 1.3.4 0 3-.4 3.3-.6 1.3-.5.9-8.4.3-9.7-1.2-3.1-5.6-5.1-8.9-6.3v.1c-.4.6-1.2.6-1.8.5-2.1-.2-6-.5-8.1-.1-.4 0-.7.2-1 .3-1.3.6-2 1.6-2.9 3.1" class="cls-8"/><path d="M91.9 287.1c-.2-.7-.5-1.4-1-1.9-1.8-1.8-7.1-1.2-8.9.7-1.1 1.1-1.7 2.5-1.9 4.1-.2 1-.2 2.1 0 3.1h.9c.3 0 .6-.1 1-.2 2.1-.4 6 0 8.1.1.7 0 1.5 0 1.8-.5v-.1c.1-.3.1-.6.1-.9 0-1.3 0-2.9-.3-4.3Z" class="cls-8"/><path d="M85 75.4c-.8 0-1.5 1.4-1.5 3.1s.7 3.1 1.5 3.1 1.5-1.4 1.5-3.1-.7-3.1-1.5-3.1" class="cls-3"/><path d="M91.6 164h.1c-1.1 1.3-2 2.7-3.5 4.7-.1 4.4 0 9 .2 14.1h.4c5.7-4.2 14-10.1 12.3-19.2-.6-3.4-1.9-19.1-2.6-23.3-1.9 1.4-5.1 2.6-8.3 3.3 0 2.5-.3 5.1-.7 8 .6 4.2 1.4 13 1.9 12.5Z" class="cls-11"/><path d="m88.5 128.8.5.4c.8 4 1.3 7.4 1.4 10.8 4-.2 5.3-2.1 8.5-4.7h.2c-1-4.7-2.4-15.6-5-18.5h-.2c0 1.8-.2 3.5-1 5.1-.8 1.8-2.5 4.4-4.5 6.9Z" class="cls-10"/><path d="M98.7 140.3c1.5-1.1 2-2.3 1-3.3-.1-.4-.3-1-.5-1.7H99c-3.2 2.7-4.5 4.6-8.5 4.8v3.5c3.1-.6 6.4-1.9 8.3-3.3Z" class="cls-5"/><path d="M92.5 74.1c-.2 4.3.4.1-.6 4.7 0 0-.8 1.7-1.5 8.7-.6 5.8-1.9 11.6-6.1 15.4-8.8 7.9-11.8 8.9-26 .2-2-1.3-8.6-4.3-9.4-16m39.7-15.5c-1.8-2.1-5.3-1.9-7.1-.8m-12.8-.1c-3-2.2-6.9-1.1-7.6.6m33 45.5c2.7 2.9 4 13.8 5 18.4.2.7.3 1.3.5 1.7 1.1 1 .5 2.2-1 3.3-1.9 1.4-5.1 2.6-8.3 3.3h-.2m-53.3-28.4c-5.1 1.5-7.8 15.9-8.7 22.5-.3 2-.4 3.4-.4 3.4 0 .7.5 1.4 1.5 1.9 2.7 1.7 8.5 2.9 13.1 3.4.9.1 1.7.2 2.5.2h1.9c.3-1.4.5-2.7.7-3.8.4-3.9-.2-6.2.2-9.2" class="cls-2"/><path d="M89 129.2c.8 4 1.3 7.4 1.4 10.8v3.5c0 2.5-.3 5.1-.7 8 0 .3 0 .6-.1.8-.3 2.2-.6 4.4-.8 6.5-.3 3.2-.5 6.5-.6 9.8-.1 4.4 0 9 .2 14.1 0 1.1.1 2.3.2 3.5m-43.8-39.6c.2 1.9.4 4.7.5 7.5 0 1.6.1 3.2.2 4.6v2.1c0 .8-.5 4.7-.9 9.1-.6 5.6-1.3 12.1-1.4 13.7m45.5 2.6c.4 6.1 2.3 13 3.1 18.7 1 6.6 2.1 11 3.4 18.8-1.2.7-3.3 1.4-6 2.1-4.7 1.1-11.3 2-18.6 2.3-3.5.1-7.1 0-10.7-.1-6.6-.4-13.1-1.4-18.8-3.4-2-.7-3.8-1.5-5.5-2.4-.1 0-.3-.2-.4-.2" class="cls-2"/><path d="M35.6 222.3v-.2c.3-1.8 3.4-19.2 4.8-27.1 0 0 2.7-11.4 2.7-11.5m46.1 42.3c.5 2.4.6 7.2 0 9.8 1.8 8.5 2.1 13.6 1.7 18.9-.2 3.4.3 24.9.9 32.6 0 1.1.2 1.9.2 2.4M70.7 228c.4 2.7.6 5.8 1.5 8.3-1.3 7.7.2 15.6.8 17.9 4 14.1 6.2 20.2 6.8 35.6m-19.9-61.9c-1.1 3.4-1.8 4.7-2.1 8.2-.3 3.4-.1 6.3-.4 9.8-.6 8.1-1.4 16.4-3.2 24.3-1.1 4.7-2.7 13.1-2.1 21.8v.8m-11-68.2c-.7 5.3.2 10.5-.4 13.8-.6 3.5-1.9 5.9-2.3 9.8-.8 7.4 2.1 23.1 1.7 37.5 0 1.6-.1 3.1-.2 4.6v.9M83.5 78.5c0 1.7.7 3.1 1.5 3.1s1.5-1.4 1.5-3.1-.7-3.1-1.5-3.1-1.5 1.4-1.5 3.1Zm-20.6.1c0 2 .8 3.6 1.9 3.6s1.8-1.6 1.8-3.6-.8-3.6-1.8-3.6-1.9 1.6-1.9 3.6Zm17.4 9.9c0 2.6-5.2 2.6-7 2.4m7.2 5.3c-.1 0-.3.1-.4.2-5.2 1.8-16.5-.8-17.6-1.7 2.1 3 2.9 3.3 4.6 4.4 1.8 1.1 5.5 1.5 7.3 1.2 3-.4 4.4-1.6 5.6-3.8" class="cls-2"/><path d="M93.9 116.8c0-1.3-.1-2.6-.2-3.9-1-11.6-.3-19.2.8-30.8 1.5-16.3-1.6-28.4-10.3-33.4-3.1-1.8-8.2-3.2-12.1-3.4-9.8-.5-17.6.7-23.3 8.3-5.1 6.9-6.3 16.2-7.6 28-1.5 13.4-1.9 16.4-4.7 26.2-.6 1.9-1.1 4-.4 5.8.2.6.5 1 .9 1.5.9 1.1 2.2 1.9 3.4 2.7 4.3 2.6 9.6 11.1 14.3 13.1 8.9 3.8 16.4 6.1 25.9 4.4 2.5-.4 5.5-3.3 8-6.5 2-2.5 3.7-5.2 4.5-6.9.7-1.6 1-3.3 1-5ZM51.3 294.4v-2.3c-.3-6.3-5.8-8.5-7.5-8.4-1.5.1-2.9.8-3.7 1.9-.3.4-.5.8-.7 1.2-.2.6.3 2.3.4 3.4v.9c-.3.6-.8 1-1.4 1.4-.8.5-1.7.9-2.5 1.4-2.3 1.4-6.2 4.4-6.7 7.1-.2 1.3.2 6.1 1.1 7 1.1 1 2.7 1 4.2.9 4.7-.3 9.3-.6 14-1 1.7-.1 3.6-.4 4.7-1.7 1.3-1.6 1.2-9.3 0-11-.6-.9-1.2-1.5-1.8-1.9-1.1-.7-2.4-.9-4.3-1.3-2.4-.4-5.6-.7-8.7.5-.8.3-1.7.8-2.5 1.4M80 293c-.1-1-.1-2.1 0-3.1.2-1.5.8-3 1.9-4.1 1.8-1.8 7.1-2.5 8.9-.7.5.5.8 1.2 1 1.9.4 1.4.3 2.9.3 4.3 0 .3 0 .6-.1.9v.1c-.4.6-1.2.6-1.8.5-2.1-.2-6-.5-8.1-.1-.4 0-.7.2-1 .3-1.3.6-2 1.6-2.9 3.1-1 1.8-1.7 10.1 0 11.4 1.2.9 14.8 1.2 19.1 1.3.4 0 3-.4 3.3-.6 1.3-.5.9-8.4.3-9.7-1.2-3.1-5.6-5.1-8.9-6.3-.2 0-.5-.2-.7-.3M28.5 137.7c6 3.5 13.1 5.1 18.9 5.1m42.6-2.7h.4c4-.2 5.3-2.1 8.5-4.7M45.1 154h.2c21.5 8.3 40.5 1.8 44.3-1.8" class="cls-2"/><path d="M45.4 158.6c19.1 8.6 39.5 3.1 43.3.2" class="cls-2"/><path d="M98.7 140.2c.6 4.2 1.9 19.9 2.6 23.4 1.7 9.1-6.6 14.9-12.3 19.2m.5-32.4c0 .3.1.7.2 1.1.6 4.2 1.4 13 1.9 12.5q0 0 0 0" class="cls-1"/><path d="M96.1 161.4c-2.1.8-3.3 1.6-4.4 2.7-1.1 1.2-2 2.6-3.5 4.6q0 0 0 0m-45.9-22.4c-.9 2.3-1.6 5.6-2.2 8.4-.5 2-2.1 7.5-2.5 9.4m-8.4-21.3v.1c-2.1 7.2-3.9 16.3-3.9 21.8 0 6.7 7.7 13.6 12.5 16 1.5.8 3.3 1.5 5.3 2.8" class="cls-1"/><path d="M35.8 162.7c.6.5 1.2.9 1.7 1.4 2.4 1.9 4.3 3.5 7 5.8 0 0 .1 0 .2.1" class="cls-1"/><path d="M92.5 74.1c-.3-5.3-3.3-9.9-7.5-13.2s-12.8-3.2-17.7-1.3c-6.7 2.6-8.9 4.3-11.6 7.9-4.3 5.8-7.1 12.4-6.8 19.6" class="cls-2"/></svg>')}`;
export default image;