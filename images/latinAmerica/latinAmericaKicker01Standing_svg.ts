/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-10,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-9{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#3c4048}.cls-3{fill:#39ae4a}.cls-4{fill:#dadada}.cls-5{fill:#bd957d}.cls-6{fill:#e4b972}.cls-7{fill:#ec85b2}.cls-9{fill:none}</style></defs><path d="M25.1 146.4c1 1.3 1.8 2.8 2.9 4.9 1.7 3.6 3.3 7.7 7.8 13.2h-.2 0s0 0 0 0h0c-2.8 1.8-5.2 4-7 6.8q0 0 0 0c-.6.8-1 1.7-1.5 2.6l-.4-.2c-2.4-3.6-6.4-10.7-9.1-13.9-3.6-4.3-8.1-13.8-5.4-18.8 2.3-4.1 11.7-16.6 16.5-21.4 0 0 1.4-2 4.4-4.9 0 2.8.1 5.4.8 7.4 1.6 5-1.2 10.2 4 11-2.1 1.9-3.6 4.4-5.5 6.2-1.3 1.2-6.1 5.9-7.3 7.1M89 176.7c-9.2 5.3-35.7 5.9-46.3 2.3 1.2-.2 2.7-1.6 1.9-3.5 4.1-1 2.4-3.3.6-5.2.7-3.4-2.4-4.3-5.5-4.9v-.4c.4-4.1 2.8-16 2.9-20.2 0-4 .1-8.8-.4-12 5.7-.8 14.7-3 15.6-4.9 1.2-2.8 0-5.2 0-8.3 0-2.6-4.5-7.8-4.2-10.4q.15-1.65 0-3.3c2.7 6.1 6.5 8.4 11.8 8.1 6.5-.4 8.2-5.2 8.8-9.3v-.5c.4 0 1 .3 1.8.5-2 5.2-3.4 10.1-3.8 17.3-.1 2.5 4.2 6.4 5.2 8.7s6.3-.9 8.8-1.2c.5 0 1.2 0 2-.1v2.9c-.3 8.1-1.7 16.6-1.7 19.5 0 2.1.4 6.3 1 11.8-.3.3-.5.5-.4.5.2.1.3.2.5.4.4 3.6.9 7.6 1.5 12.1Z" class="cls-7"/><path d="M102 162c-2.6 2.8-5 7.4-6.8 10.2-.3-.3-.5-.6-.8-.9-2.1-2.4-4.5-4.6-6.9-6.6 0-.3 0-.6-.1-.9.8-.8 2.7-2.6 3.4-3.4 1.3-1.6 2.4-3 3.4-4.9 1.2-2.5 2.2-4.8 3.6-6.9l-.2-.2c-.5.7-7.4-13.6-9.4-16v-2.9c2.3-.2 5.5-.4 6.2-1.6.9-1.5 1.2-4.1 1.6-5.8.2-.8.3-1.6.4-2.4.9 1.4.9 1.5 2.4 4.5 1.8 3.2 7.9 16.8 9.6 19.3 4.3 6.7-1.2 13.1-6.2 18.4Z" class="cls-7"/><path d="M50.3 93.2c-.1-.1-.3-.2-.4-.3m.6.5-.2-.2m-17.2 21.5" class="cls-9"/><path d="M101.1 271.7c-.8 0-2.9.7-5.7 1.6-3.5 1.2-8.2 2.7-13.2 4-4.4 1.1-9 1.9-13.3 2-8.9.2-16.8 0-23.2-.6-5.6-.5-10-1.4-13-2.5-.9-.4-1.7-.8-2.3-1.2-5.9-4.1 6.4-90.5 5.7-92.3 2.2 1.1 4.6 1.5 4.5-1 1 0 3.2-1.2 2-2.8 10.6 3.6 37.2 3 46.3-2.3.2 1.7.4 3.5.7 5.3 4.4 33.6 11.7 82.8 11.4 89.7Z" class="cls-6"/><path d="M94.4 171.2c-.7 1.2-.5 1-1 2.4-.7 2.1-1.1 6.2-3.8 8.4-.2-1.8-.5-3.6-.7-5.3-.6-4.5-1.1-8.5-1.5-12.1q3.75 3 6.9 6.6Z" class="cls-5"/><path d="m89.7 182-.1.1m7.9-33.8s0 0 0 0m4.1-3.5c-1.7 1.1-2.9 2.4-3.9 3.8m-72.6-2.2c-1.2-1.5-2.8-2.6-5.3-4m15.9 22.1v.2c.2 0 .3.2.4.3" class="cls-9"/><path d="M44.5 175.4c.8 2-.6 3.3-1.9 3.5 1.2 1.5-1 2.8-2 2.8.1 2.5-2.3 2-4.5 1h0c-1.5-.7-3-1.7-3.5-2.3-1.9-1.9-4.8-6-3.6-8.7l-.5-.4c1.8-2.7 4.2-5 7-6.6h.4c1.1.3 2.4.5 3.7.7 3.1.6 6.2 1.5 5.5 4.9 1.8 1.9 3.5 4.2-.6 5.2Z" class="cls-5"/><path d="m45.1 170.2-2.1-2.1m2.1 2.1s0 0 0 0" class="cls-9"/><path d="M96.1 284.9c-.6-.5-1.6-.7-2.6-.7-2.3 0-5.2.8-6.4 2.1-1.7 1.9-2 4.7-1.5 7.2h1c-.8.4-1.4 1-1.9 1.8-.6-7.3-1.3-14.9-2.5-18 5-1.2 9.7-2.8 13.2-4 0 3.1.1 8.1.7 11.6m-50.4-6.2c-1.4 4.6-3.1 12.2-3.3 17.5 0-.2-.2-.4-.3-.6-.7-1.2-1.4-1.9-2.3-2.4h0c1.7-7.8-4.4-9.8-6.5-9.7-.6 0-1.1 0-1.7.2.8-2.2 1.3-4.8 1.1-7.6 2.9 1.2 7.4 2 13 2.5Z" class="cls-5"/><path d="M74 80.7c-1.6 3.8-5.8 3.7-9 1.7" class="cls-9"/><path d="M92.2 77.2h-.4c-1.5-.3-3.7-1-4.9-.1h0c0-3.9-.5-9.5-1.7-14 .3.1.7.2 1 .1 1.1-.2 1.2-1.5 1.6-2.6.6-1.6.7-5.3 0-7.5q-.3-1.05-.9-1.5c-.2.8-1.7 4.6-2.1 5.4-.4.6-.9 1.2-1.2 1.9-.3-.6-.7-1.2-1.1-1.6-.3-.4-.6-.7-1-1 .2-.1.4-.3.6-.4.9-.9.7-2.3.7-3.6.1-2.3-.3-7.1-1.7-5.2-.7.9-2.6 4.3-3.1 6.3-2.4-1.6-5.1-2.8-8.5-4.3.3-3.1-1.3-8.2-2.9-11v-.2c5.8.2 12.8 1.2 16.4 4.1 3.2 2.6 5.1 6.4 6.5 10.3.6 1.7 1.1 3.4 1.6 5.1 1.7 5.7 1.1 13.1 1.1 19.5v.1Z" class="cls-2"/><path d="M69.5 49.2s0 0 0 0c-2 1-4.6 1.8-7.5 3.1 0-.2 0-.3-.2-.5-.3-.7-.9-1.2-1.5-1.7-1.7-1.3-3.2-3-5.6-4.7-.2 2.3 1.4 6.4 3.1 8 .2.2.4.4.7.5-1.9 1-4 2.3-6.1 4-.2-.4-.4-.7-.7-1-.5-.6-3.2-4.7-3.8-7.8-1 .4-1.9 8.4-1.4 9.7.4 1.1 1.3 2.1 2.4 2.5-3.5 4.9-4.9 11.8-5.3 17.7-1.3-.2-2.6-.3-3.9-.1-1.4.1-2.9.6-3.6 1.8h0c-1.3-9.5 0-19.4 3.6-27.2 3.5-7.8 13.8-15.2 22.4-15.5h4.6v.2c1.5 2.8 3.2 7.8 2.9 11Z" class="cls-2"/><path d="m43.7 84-.6.2c-1.5.5-3.1 1-4.6.6h-.1c-1.6-.4-2.9-2.1-2.4-3.6 0-.1 0-.2.2-.4.6-1.2 2.2-1.6 3.6-1.8 1.3-.1 2.6 0 3.9.1-.1 1.4-.2 2.7-.2 4 0 .3.1.6.2.9" class="cls-6"/><path d="M43.8 79.1h-.2" class="cls-9"/><path d="M92.7 79.9c0 1.1-.3 2.3-1.2 3-.3.2-.7.4-1.2.5-.5.2-1.1.2-1.7.2-1 0-1.9-.2-2.3-.8.3-1.4.4-2.7.5-3.9v-1.8h0c1.2-.9 3.4-.2 4.9.2h.4c0 .4.4 1.7.5 2.6Z" class="cls-6"/><path d="M57.6 127.9c-.8 1.9-9.9 4.1-15.6 4.9-1.9.3-3.5.4-4.2.3-5.2-.8-2.4-6-4-11-.6-2-.8-4.6-.8-7.4.1-4.2.8-8.7 1.2-11.8.9-6.1 2.3-12.1 4.1-17.9v-.2c1.6.4 3.2 0 4.7-.6l.6-.2c1.1 4.2 3.1 8.8 5.5 12.4 1.5 2.3 2.9 4.8 3.7 7.4.2.7.4 1.4.5 2.2q.3 1.65 0 3.3c-.3 2.5 4.2 7.8 4.2 10.4 0 3 1.2 5.5 0 8.3Zm38.6-8.2c0 .8-.2 1.6-.4 2.4-.3 1.8-.6 4.3-1.6 5.8-.7 1.2-3.8 1.4-6.2 1.6-.8 0-1.6 0-2 .1-2.5.3-7.8 3.5-8.8 1.2s-5.4-6.2-5.2-8.7c.4-7.2 1.8-12.1 3.8-17.3 1.2-3.2 2.7-6.6 4.4-10.8 3.7-3.3 5.1-6.2 6.1-11.1.5.6 1.4.8 2.3.8h1.8c3.3 11.5 7.3 24.2 5.8 36" class="cls-2"/><path d="M55 96.6v.3m-28 77s0 .2-.1.2" class="cls-9"/><path d="M61.7 54.1c-.5.5-1.3.7-2 .5-.4 0-.8-.3-1.2-.6-.2-.2-.4-.3-.7-.5-1.7-1.6-3.3-5.7-3.1-8 2.3 1.6 3.9 3.3 5.6 4.7.6.5 1.2 1 1.5 1.7 0 .2.1.3.2.5.1.6 0 1.2-.3 1.7m21.1-1.7c0 1.3.2 2.7-.7 3.6-.2.2-.4.3-.6.4-.6.3-1.2.3-1.8.2-.8-.3-1.5-1-1.7-1.9 0-.3 0-.7.1-1.2.5-2 2.4-5.4 3.1-6.3 1.4-1.9 1.8 2.9 1.7 5.2Z" style="fill:#29a4db;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M52.7 59.1c0 1.4-1.5 2.6-2.9 2.5-.2 0-.5 0-.7-.2-1.1-.4-2-1.4-2.4-2.5-.5-1.4.3-9.4 1.4-9.7.6 3 3.2 7.2 3.8 7.8.3.3.5.6.7 1s.3.7.3 1.1Z" class="cls-3"/><path d="M85.1 63.1c-.2 0-.3-.1-.5-.2-1.1-.7-1.6-2.1-1.3-3.3 0-.2.1-.4.2-.5-.3-.6-.7-1.2-1.1-1.6-.3-.4-.6-.7-1-1-.6.3-1.2.3-1.8.2-.8-.3-1.5-1-1.7-1.9 0-.3 0-.7.1-1.2-2.4-1.6-5.1-2.8-8.5-4.3q0 0 0 0c-2 1-4.6 1.8-7.5 3.1.1.6 0 1.2-.3 1.7-.5.5-1.3.7-2 .5-.4 0-.8-.3-1.2-.6-1.9 1-4 2.3-6.1 4 .2.4.3.7.3 1.1 0 1.4-1.5 2.6-2.9 2.5-.2 0-.5 0-.7-.2-3.5 4.9-4.9 11.8-5.3 17.7-.1 1.4-.2 2.7-.2 4 1.2 5.1 4.8 8 6.8 10.1q0 0 0 0c1.7 1.4 3.2 2.6 4.7 3.7 8.3 5.9 13.2 5.8 17.8 3 2.4-1.4 4.7-3.6 7.4-5.9 3.7-3.3 5.1-6.2 6.1-11.1.3-1.4.4-2.7.5-3.9v-1.8c0-3.9-.5-9.5-1.7-14Zm-30.9 2.4c-.3.1-.7.3-1 .2-.4-.2-.6-.7-.4-1.1.1-.4.5-.7.8-1 1.2-.8 2.6-1.2 4-1.2.9 0 6.4 0 3.8 2.2-.5.4-1.2.3-1.9.3-1.8-.2-3.6.1-5.3.8Zm1.9 5.4c0-1.5.7-2.8 1.6-2.8s1.6 1.2 1.6 2.8-.7 2.8-1.6 2.8-1.6-1.2-1.6-2.8M75 88.1c-1.3 2.8-2.6 4.2-5.6 4.7-1.8.3-5.5-.1-7.3-1.5-1.7-1.3-2.5-1.8-4.6-5.5 1 1.2 12.9 4.5 17.8 2l-.4.3Zm3.8-14.2c-.8 0-1.5-1.2-1.5-2.7s.7-2.7 1.5-2.7 1.6 1.2 1.6 2.7-.7 2.7-1.6 2.7m2.8-7.9c-1.7-.5-3.5-.5-5.3 0-.6.2-1.5.3-1.8-.2-.3-.4-.1-.9.2-1.2s.8-.5 1.2-.6c1.7-.5 4.2-.8 5.9-.2 1.8.6 2.3 3.1-.2 2.4Z" class="cls-5"/><path d="M74.1 104.2v.5c-.7 4.1-2.4 8.9-8.9 9.3-5.3.3-9.1-2-11.8-8.1 0-.7-.3-1.5-.5-2.2.8-1.4 2-4.4 2.1-6.9 8.3 5.9 13.2 5.8 17.8 3 0 .5.3 3.8.4 4.1.3.1 0 0 .9.2Z" class="cls-5"/><path d="m75.3 87.8-.4.3c-1.3 2.8-2.6 4.2-5.6 4.7-1.8.3-5.5-.1-7.3-1.5-1.7-1.3-2.5-1.8-4.6-5.5 1 1.2 12.9 4.5 17.8 2Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M80.4 71.2c0 1.5-.7 2.7-1.6 2.7s-1.5-1.2-1.5-2.7.7-2.7 1.5-2.7 1.6 1.2 1.6 2.7" class="cls-10"/><path d="M81.6 66c-1.7-.5-3.5-.5-5.3 0-.6.2-1.5.3-1.8-.2-.3-.4-.1-.9.2-1.2s.8-.5 1.2-.6c1.7-.5 4.2-.8 5.9-.2 1.8.6 2.3 3.1-.2 2.4Z" class="cls-2"/><path d="M59.2 70.9c0 1.6-.7 2.8-1.6 2.8S56 72.5 56 70.9s.7-2.8 1.6-2.8 1.6 1.2 1.6 2.8" class="cls-10"/><path d="M61.4 64.5c-.5.4-1.2.3-1.9.3-1.8-.2-3.6.1-5.3.8-.3.1-.7.3-1 .2-.4-.2-.6-.7-.4-1.1.1-.4.5-.7.8-1 1.2-.8 2.6-1.2 4-1.2.9 0 6.4 0 3.8 2.2Z" class="cls-2"/><path d="M87.7 60.7c-.4 1-.6 2.3-1.6 2.6-.3 0-.7 0-1-.1-.2 0-.3-.1-.5-.2-1.1-.7-1.6-2.1-1.3-3.3 0-.2.1-.4.2-.5.3-.7.8-1.3 1.2-1.9.5-.8 1.9-4.6 2.1-5.4q.6.45.9 1.5c.8 2.2.6 5.9 0 7.5Z" class="cls-3"/><path d="M39.8 293.2c-1-.6-2.1-.8-3.8-1.2-2.5-.6-5.7-1.1-9.1-.1.6-.3 1.2-.7 1.6-1.3.2-.2.2-.6.2-1.1h0c0-1.1-.4-2.6-.2-3.1.5-1.2 1.6-2 2.9-2.4h.2c.5-.2 1.1-.2 1.7-.2 2.1 0 8.2 1.9 6.5 9.7Z" class="cls-4"/><path d="M42.7 307.5c-1.2 1.2-4.6.9-6.4 1H21.7c-1.5 0-3.2-.1-4.2-1.2-.9-1-1-6.5-.6-7.7.7-2.6 5-5.3 7.5-6.5.9-.4 1.8-.7 2.7-1.2 3.3-1 6.6-.5 9.1.1 1.7.4 2.8.7 3.8 1.2h0c.8.5 1.5 1.2 2.3 2.4 0 .2.2.4.3.6 1 2.6 1.6 10 .3 11.3Zm66.8.7c-.4.2-3 .8-3.4.8-4.5.2-20.6-.3-21.9-1.1-1.8-1.1-1.3-9.3-.4-11.2.3-.6.6-1.1.8-1.5h0c.5-.8 1.1-1.3 1.9-1.8.3-.1.7-.3 1.1-.4 2.1-.5 6.2-.5 8.4-.4.7 0 1.5 0 1.9-.6 3.6.9 10.1 3.4 11.7 6.6.6 1.3 1.2 8.9 0 9.5Z" class="cls-4"/><path d="M97.9 292.1c-.3.6-1.2.6-1.9.6-2.2 0-6.2 0-8.4.4-.4.1-.7.2-1.1.4h-1c-.5-2.5-.2-5.3 1.5-7.2 1.2-1.3 4.1-2.2 6.4-2.1 1 0 1.9.3 2.6.7 0 0 .1 0 .2.1 1.6 1.3 1.6 4 1.7 6 0 .4 0 .7-.2 1Z" class="cls-4"/></svg>')}`;
export default image;