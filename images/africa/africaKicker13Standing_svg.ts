/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-width:.8px}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-11,.cls-13,.cls-14,.cls-3,.cls-4,.cls-5,.cls-6,.cls-9{stroke-width:0}.cls-4{fill:#54a880}.cls-5{fill:#dea339}.cls-6{fill:#ac847b}.cls-9{fill:#d5d5d4}.cls-11{fill:#332921}.cls-13{fill:#ffcc69}.cls-14{fill:#e880a9}</style></defs><path d="M30.4 156.3c.6-.7 5.6-6.2 6.8-7.5h.4c-3.5-2-8.1-4.9-10.6-7.4-2.4 3.1-6.4 8.9-7.4 11.2-2 4.8 2.8 13.1 6.6 16.6 2.5 2.3 7.5 6.3 10.4 9.2.3-2.7 2.9-5.4 5.4-6.3-4.5-1.8-6.6-8.7-8.5-11.7-1.2-1.8-2.1-3.1-3-4.1Z" class="cls-14"/><path d="M25.3 138.5c0 .8.6 1.8 1.7 2.8 2.5 2.5 7.1 5.4 10.6 7.3 1.4.7 2.6 1.3 3.4 1.6.9-1 1.5-1.9 2.1-2.7h-.6c-5.3-1.7-12.4-6.7-15.8-11.1-.9 1.3-1.4 2.1-1.4 2.1" class="cls-5"/><path d="M51.6 293.9c-1.1-.7-2.3-.9-4.1-1.2-2.3-.4-5.4-.7-8.4.5-.7.5-1.6.9-2.4 1.3-2.2 1.3-6 4.3-6.5 6.8-.2 1.2.2 5.9 1.1 6.8 1 1 2.6 1 4 .9 4.5-.3 9-.6 13.5-1 1.6-.1 3.5-.4 4.5-1.6 1.3-1.5 1.2-9 0-10.6-.6-.9-1.2-1.5-1.8-1.9Z" class="cls-9"/><path d="M45.4 172.5c-.9 0-1.8 0-2.5-.2-.3 0-.6-.2-.9-.3-2.5 1-5.1 3.7-5.4 6.3.4.4.7.7 1 1.1-.8 2.6 2.3 6 4.3 7.5.3.2.9.6 1.6.9 2.5 1.2 6.5 2.3 6-.6.9-.1 2.9-1.5 1.6-2.7 1.1-.3 2.3-1.7 1.3-3.4 3.7-1.3 1.9-3.3 0-4.8.3-3.6-3.7-3.7-7-3.8" class="cls-6"/><path d="M40 287.6c-.2.6.3 2.2.4 3.3.1-1.5.2-3 .2-4.5q-.45.45-.6 1.2" class="cls-9"/><path d="M40.4 290.9v.9q.15-.3 0-.9" style="stroke-width:0;fill:#c8b6aa"/><path d="M79.2 103.5c-1.2 2.2-2.6 3.4-5.5 3.8-1.8.2-5.3-.1-7.1-1.2-1.7-1-2.4-1.4-4.5-4.3 1 .9 11.9 3.4 17 1.7Zm-22.1 5.7c.5.3.9.6 1.2.7 7.6 4.7 11.9 6.5 15.7 5.8.6-.1 1.3-.3 1.9-.5 2.3-.9 4.6-2.8 7.5-5.4 4.1-3.6 5.3-9.3 5.9-14.8.7-6.8 1.4-8.4 1.4-8.4q.15-.75.3-1.2c.6-2.5.2.3.3-3.4.3-8.2-2-17-15.5-14.8-5.3-2.2-22-6.1-26.6 18.4-1.1-1.4-3.3-1.4-4.6-.2s-1.8 3.1-1.6 4.9c0 1 .4 2 1 2.7.5.7 1.3 1 2 1.3 1 .3 2.1.3 3.2.3.2 2.2.5 4.1 1 5.8 1.7 5.3 4.8 7.7 6.8 8.9Zm5.6-22.9c0-1.9.8-3.5 1.8-3.5s1.8 1.6 1.8 3.5-.8 3.5-1.8 3.5-1.8-1.6-1.8-3.5m19.9-.1c0-1.7.7-3 1.5-3s1.4 1.4 1.4 3-.7 3-1.4 3-1.5-1.4-1.5-3" class="cls-6"/><path d="M89.3 145.7c4.1-.3 9.6-3.3 12.6-5.9-2-4.4-7.1-14.7-9.7-17.5-2-2.2-6.2-4.6-12.7-5.1 2.4 3.4 2.7 9.9 2.8 16.4 0 3.7-2.7 6.7-6.3 7.2-5.3.7-10.5.7-15.8.3-3.2-.2-5.9-2.7-6.3-5.9-.6-3.7-1.4-6.8-2.8-11.1-.6-2-1.4-4.6-3.1-5.5-.3-.2-.6-.2-.9-.3-2 0-3.8.2-4.5.4-5.1 1.5-12.8 12.8-15.9 17.7 3.4 4.5 10.5 9.4 15.8 11.1h.6c.5-.7.9-1.4 1.3-2.2h.3c.2 2.3.7 8.8 1 14 20.8 8 39.2 1.8 42.9-1.7.4-3.1.7-5.9.8-8.5v-3.4Z" class="cls-13"/><path d="M45.6 159.3c0 1.7.2 3.2.2 4.4 18.5 8.3 38.2 3 41.9.2.2-2.1.4-4.2.7-6.3-3.6 3.5-22 9.7-42.9 1.7Z" class="cls-5"/><path d="M47 118.3c.3 0 .6.2.9.3v-.3z" style="stroke-width:0;fill:#a57a80"/><path d="M53.5 117.6h.2c0-2.9 1-6.4 3.3-6.3h.1v-2.1c-2-1.2-5.2-3.6-6.8-8.9h-.4c-2.5 6.9-2 12-1.9 17.9 2.8-.1 5.5-.3 5.5-.6m-4.3-23.1c-1 0-2.2 0-3.2-.3 1 2.3 2.3 4.2 3.8 6.1h.4c-.5-1.8-.9-3.7-1-5.9Z" class="cls-11"/><path d="M51.6 293.9v-1.2c-.3-6.1-5.6-8.2-7.3-8.1-1.4.1-2.8.8-3.6 1.9 0 1.5-.1 3-.2 4.5v.9c-.3.6-.8 1-1.4 1.4 3-1.2 6.1-.9 8.4-.5 1.9.3 3.1.5 4.1 1.2Z" class="cls-9"/><path d="M44.3 284.6c1.7-.2 7 2 7.3 8.1h.7c-.5-8.5 1-16.5 2-21.1 1.7-7.7 2.5-15.7 3.1-23.5.3-3.4 0-6.2.4-9.5.3-3.4 1-4.6 2-7.9-6.4-.4-12.7-1.4-18.2-3.3-.7 5.2.2 10.3-.4 13.4-.6 3.3-1.8 5.7-2.2 9.4-.8 7.2 2 22.3 1.6 36.2.8-1.1 2.2-1.7 3.6-1.9Z" class="cls-4"/><path d="M56.8 113.7c-.2 2.9 4.5 5.5 8.5 5.9 4.6.4 6.6.2 8.7-3.8-3.8.7-8-1.1-15.7-5.8-.3-.2-.7-.4-1.2-.7v2.1c0 .9-.1.7-.2 2.4Z" style="stroke-width:0;fill:#ac877f"/><path d="M56.9 111.3c-2.4 0-3.2 3.4-3.3 6.3 0 1.6.1 3 .4 3.7 2.3 5.6 14.7 8.3 19.4 4 2.5-2.3 3.4-4.2 2.8-8.3 0-.6-.2-1.2-.3-1.8-.6.2-1.2.4-1.9.5-2.1 4-4 4.1-8.7 3.8-4-.3-8.8-2.9-8.5-5.9.1-1.7.2-1.5.2-2.4h-.1Z" class="cls-14"/><path d="M64.5 82.8c-1 0-1.8 1.6-1.8 3.5s.8 3.5 1.8 3.5 1.8-1.6 1.8-3.5-.8-3.5-1.8-3.5" class="cls-3"/><path d="M62.3 101.8c2 2.9 2.8 3.2 4.5 4.3s5.3 1.4 7.1 1.2c2.9-.4 4.2-1.5 5.5-3.7-5 1.6-16-.9-17-1.8Z" style="stroke-width:0;fill:#fff"/><path d="M69.2 54.2c-8.4-.2-15.2 1.3-20.2 8S42.5 74 44.6 85.3c1.3-1.2 3.6-1.2 4.6.2C53.8 61 70.6 64.9 75.8 67.1c1.2-4.9-3.1-11.9-6.6-12.9" class="cls-11"/><path d="M70.2 230.8c.4 2.7.5 5.6 1.4 8-1.2 7.5.2 15.1.8 17.3 3.8 13.6 6 19.6 6.6 34.4h.3c.2-1.4.8-2.8 1.9-3.9 1.7-1.8 6.9-2.4 8.6-.6q.75.75.9 1.8c-.5-7.4-1.1-28.2-.9-31.5.3-5.1 0-10-1.7-18.3.5-2.5.4-7.1 0-9.5-4.6 1.1-11 1.9-17.9 2.2Z" class="cls-4"/><path d="M76.2 117.1c.6 4-.3 5.9-2.8 8.3-4.7 4.3-17.1 1.6-19.4-4-.3-.7-.5-2.1-.4-3.7h-.2c0 .3-2.8.5-5.5.6v.3c1.7.9 2.5 3.5 3.1 5.5 1.4 4.3 2.2 7.4 2.8 11.1.5 3.2 3.1 5.7 6.3 5.9 5.2.4 10.4.4 15.8-.3 3.6-.5 6.4-3.5 6.3-7.2 0-6.5-.4-13-2.8-16.4-1 0-2-.1-3.1-.1h-.2Z" class="cls-14"/><path d="M77.4 296.6c-1 1.8-1.7 9.8 0 11 1.2.9 14.3 1.2 18.5 1.2.4 0 2.9-.4 3.2-.5 1.3-.5.8-8.1.3-9.4-1.2-3-5.4-4.9-8.6-6.1v.1c-.4.5-1.1.6-1.8.5-2-.2-5.8-.5-7.8-.1-.4 0-.7.2-1 .3-1.3.5-1.9 1.6-2.8 3" class="cls-9"/><path d="M90.8 292.8c.1-.3.1-.6.1-.9 0-1.3 0-2.8-.3-4.1q-.3-1.05-.9-1.8c-1.7-1.8-6.8-1.1-8.6.6-1 1.1-1.6 2.5-1.9 3.9q-.3 1.5 0 3h.9c.3 0 .6-.1 1-.2 2-.4 5.8 0 7.8.1.6 0 1.4 0 1.8-.5v-.1Z" class="cls-9"/><path d="M84.1 83.2c-.8 0-1.5 1.4-1.5 3s.7 3 1.5 3 1.4-1.4 1.4-3-.7-3-1.4-3" class="cls-3"/><path d="M87.3 169.8c.1-2 .2-3.9.4-5.9-3.7 2.8-23.4 8.1-41.9-.2v2.1c-.1 1.7-.2 4-.4 6.7 3.3.1 7.3.2 7 3.8 1.9 1.5 3.7 3.4 0 4.8.9 1.7-.2 3.1-1.3 3.4 1.3 1.3-.6 2.6-1.6 2.7.5 2.9-3.5 1.7-6 .6 0 .3-2.6 11-2.6 11.1-1.3 7.7-4.3 24.4-4.6 26.2 1.7.9 3.5 1.6 5.4 2.3 5.5 1.9 11.8 2.9 18.2 3.3 3.5.2 7 .2 10.4.1 7-.2 13.4-1.1 17.9-2.2 2.6-.6 4.6-1.3 5.8-2-1.2-7.6-2.3-11.8-3.2-18.2-.9-5.6-2.6-12.2-3-18.1 0-.8 0-1.6-.1-2.4-.4-6.7-.4-12.5-.1-18.2Z" class="cls-13"/><path d="M87.3 169.8c-.3 5.7-.2 11.5.1 18.2 1.6-.4 2.4-.5 3.3-3.1.7-2 1.1-3.7 1.8-5.7.3-1 .7-1.9 1.2-2.8-.1-3.1-2.7-6.5-5.8-7.1h-.1c-.2.1-.4.3-.5.5" class="cls-6"/><path d="M96.6 154.6c-1.4 2.4-2.3 5.2-3.5 7.6-.9 1.8-2 3-3.2 4.6-.5.6-1.4 1.6-2.1 2.4h.1c3.1.7 5.7 4.1 5.8 7.2 1.7-3 4.2-5.2 7-8.1 4.8-5 9.4-11.3 5.3-17.5-.7-1-2.1-4-3.8-7.2-1.7 1.7-5.9 3.5-9.6 4.7 1.3 2.3 3.8 6.5 4.1 6.4Z" class="cls-14"/><path d="M92.6 148.2c3.7-1.2 8-3 9.6-4.7.8-.8 1-1.5.4-2.1-.1-.4-.4-.9-.7-1.6-3.1 2.6-8.6 5.6-12.6 5.9v3.4q1.5-.3 3.3-.9" class="cls-5"/><path d="M91.3 82c-.2 3.7.3.9-.3 3.4h.3c.3-.1.8-.1 1.2.2 1.4-15.7-.8-23.2-9.2-28.1-3-1.7-7.9-3.1-11.7-3.3h-2.3c3.5 1.1 7.9 8 6.6 13C89.3 65 91.6 73.8 91.4 82Z" class="cls-11"/><path d="M92.5 85.6c-.4-.3-.9-.3-1.2-.1H91c0 .2-.2.6-.3 1.1 0 0-.8 1.6-1.4 8.4 1 0 4.6-.8 4.6-4.7s-.7-4.2-1.4-4.7" class="cls-6"/><path d="M91.3 82c-.2 3.7.3.9-.3 3.4 0 .3-.2.7-.3 1.2 0 0-.8 1.6-1.4 8.4-.5 5.6-1.8 11.2-5.9 14.8-3 2.7-5.2 4.5-7.5 5.4-.6.2-1.2.4-1.9.5-3.8.7-8-1.1-15.7-5.8-.3-.2-.7-.4-1.2-.7-2-1.2-5.2-3.6-6.8-8.9-.5-1.6-.9-3.5-1-5.8m38.2-15c-1.8-2.1-5.1-1.8-6.8-.7m-12.4-.1c-2.9-2.1-6.7-1.1-7.3.6" class="cls-2"/><path d="M74 115.8c-2.1 4-4 4.1-8.7 3.8-4-.3-8.8-2.9-8.5-5.9.1-1.7.2-1.5.2-2.4v-2.1" class="cls-2"/><path d="M75.9 115.3c.1.7.2 1.2.3 1.8.6 4-.3 5.9-2.8 8.3-4.7 4.3-17.1 1.6-19.4-4-.3-.7-.5-2.1-.4-3.7 0-3 1-6.4 3.3-6.3m45.3 32.1c-1.7 1.7-5.9 3.5-9.6 4.7q-1.8.6-3.3.9h-.1M76.4 117c1.1 0 2.1 0 3.1.1 6.4.6 10.6 2.9 12.7 5.1 2.6 2.8 7.7 13.1 9.7 17.5.3.7.5 1.2.7 1.6.6.6.4 1.3-.4 2.1M47 118.3c-2 0-3.8.2-4.5.4-5.1 1.5-12.8 12.8-15.9 17.7-.9 1.3-1.4 2.2-1.4 2.2 0 .8.6 1.8 1.7 2.8 2.5 2.5 7.1 5.4 10.6 7.3 1.4.7 2.6 1.3 3.4 1.6.9-1 1.5-1.9 2.1-2.7.5-.8.9-1.5 1.3-2.2.9-1.8 1.7-3.5 3.1-5.6m6-22.2c0 .3-2.8.5-5.5.6H47M87.4 188c0 .8 0 1.6.1 2.4" class="cls-2"/><path d="M87.3 169.8c-.3 5.7-.2 11.5.1 18.2" class="cls-1"/><path d="M87.9 135.2c.8 3.9 1.2 7.2 1.3 10.5v3.4c0 2.6-.3 5.4-.8 8.5-.3 2.1-.5 4.2-.7 6.3-.2 2-.3 3.9-.4 5.9m-42.7-24.4c.2 2.2.7 8.7 1 13.9 0 1.7.2 3.2.2 4.4v2.1c-.1 1.7-.2 4-.4 6.7m42.2 17.8c.4 5.9 2.2 12.5 3 18.1 1 6.4 2 10.6 3.2 18.2-1.2.7-3.2 1.4-5.8 2-4.6 1.1-11 1.9-17.9 2.2-3.4.1-6.9 0-10.4-.1-6.4-.4-12.7-1.4-18.2-3.3-1.9-.7-3.7-1.4-5.4-2.3-.1 0-.3-.1-.4-.2" class="cls-2"/><path d="M36.3 225.2v-.2c.3-1.8 3.3-18.5 4.6-26.2 0 0 2.5-10.8 2.6-11.1m47.2 100.1c0 1 .1 1.8.2 2.3m-2.8-61.5c.5 2.3.6 7 0 9.5 1.7 8.2 2 13.1 1.7 18.3-.2 3.3.3 24 .9 31.5m-20.5-57.1c.4 2.7.5 5.6 1.4 8-1.2 7.5.2 15.1.8 17.3 3.8 13.6 6 19.6 6.6 34.4m-19.2-59.9c-1 3.3-1.7 4.5-2 7.9-.3 3.3-.1 6.1-.4 9.5-.6 7.8-1.3 15.8-3.1 23.5-1 4.6-2.6 12.7-2 21.1v.8m-10.7-65.9c-.7 5.1.2 10.2-.4 13.3-.6 3.3-1.8 5.7-2.2 9.4-.8 7.2 2 22.3 1.6 36.2 0 1.5-.1 3-.2 4.5v.9M82.6 86.2c0 1.7.7 3 1.5 3s1.4-1.4 1.4-3-.7-3-1.4-3-1.5 1.4-1.5 3Zm-19.9.1c0 1.9.8 3.5 1.8 3.5s1.8-1.6 1.8-3.5-.8-3.5-1.8-3.5-1.8 1.6-1.8 3.5Zm16.8 9.6c0 2.5-5 2.5-6.8 2.4m6.9 5c-.1 0-.3.1-.4.1-5 1.7-16-.8-17-1.7 2 2.9 2.8 3.2 4.5 4.3s5.3 1.4 7.1 1.2c2.9-.4 4.2-1.5 5.5-3.7" class="cls-2"/><path d="M44.6 85.4c-2.1-11.3-.5-16.5 4.4-23.1 5-6.7 11.8-8.2 20.2-8.1h2.3c3.8.2 8.8 1.6 11.7 3.3 8.4 4.9 10.7 12.4 9.2 28.1M51.5 294.9v-2.1c-.3-6.1-5.6-8.2-7.3-8.1-1.4.1-2.8.8-3.6 1.9q-.45.45-.6 1.2c-.2.6.3 2.2.4 3.3v.9c-.3.6-.8 1-1.4 1.4-.7.5-1.6.9-2.4 1.3-2.2 1.3-6 4.3-6.5 6.8-.2 1.2.2 5.9 1.1 6.8 1 1 2.6 1 4 .9 4.5-.3 9-.6 13.5-1 1.6-.1 3.5-.4 4.5-1.6 1.3-1.5 1.2-9 0-10.6-.6-.9-1.2-1.5-1.8-1.9-1.1-.7-2.3-.9-4.1-1.2-2.3-.4-5.4-.7-8.4.5-.8.3-1.6.7-2.4 1.3m42.8-1.2q-.15-1.5 0-3c.2-1.5.8-2.9 1.9-3.9 1.7-1.8 6.9-2.4 8.6-.6q.75.75.9 1.8c.3 1.3.3 2.8.3 4.1 0 .3 0 .6-.1.9v.1c-.4.5-1.1.6-1.8.5-2-.2-5.8-.5-7.8-.1-.4 0-.7.2-1 .3-1.3.5-1.9 1.6-2.8 3-1 1.8-1.7 9.8 0 11 1.2.9 14.3 1.2 18.5 1.2.4 0 2.9-.4 3.2-.5 1.3-.5.8-8.1.3-9.4-1.2-3-5.4-4.9-8.6-6.1-.2 0-.5-.2-.7-.2M47 118.3c.3 0 .6.2.9.3 1.7.9 2.5 3.5 3.1 5.5 1.4 4.3 2.2 7.4 2.8 11.1.5 3.2 3.1 5.7 6.3 5.9 5.2.4 10.4.4 15.8-.3 3.6-.5 6.4-3.5 6.3-7.2 0-6.5-.4-13-2.8-16.4" class="cls-2"/><path d="M75.9 67.1c1.2-4.9-3.1-11.9-6.6-12.9" class="cls-2"/><path d="M91.3 82c.3-8.2-2-17-15.5-14.8-5.3-2.2-22-6.1-26.6 18.4" class="cls-2"/><path d="M49.2 85.6c-1.1-1.4-3.3-1.4-4.6-.2s-1.8 3.1-1.6 4.9c0 1 .4 2 1 2.7.5.7 1.3 1 2 1.3 1 .3 2.1.3 3.2.3m42.1-9.2c.3-.2.8-.2 1.2.1.7.5 1.4 2 1.4 4.7s-3.6 4.7-4.6 4.7" class="cls-2"/><path d="M45.9 94s0 .2.1.2c1 2.3 2.3 4.2 3.8 6.1m0 .1c-2.5 6.7-2 11.9-1.9 17.8v.5m-21.2 17.7c3.4 4.4 10.5 9.4 15.8 11.1m46.4-1.8h.4c4.1-.3 9.6-3.3 12.6-5.9m-56.5 19.4h.2c20.8 8 39.2 1.8 42.9-1.7" class="cls-2"/><path d="M45.8 163.7c18.5 8.3 38.2 3 41.9.2" class="cls-2"/><path d="M102.2 143.5c1.7 3.2 3.2 6.2 3.8 7.2 4.1 6.3-.5 12.6-5.3 17.5-2.8 2.9-5.3 5.1-7 8.1-.5.8-.9 1.8-1.2 2.8-.7 2-1.1 3.7-1.8 5.7-.9 2.6-1.7 2.8-3.3 3.1m9.2-33.3s0 0 0 0m-4-6.4c1.3 2.4 3.8 6.5 4.1 6.4" class="cls-1"/><path d="M100.2 150.7c-1.6 1-2.7 2.4-3.6 3.9h0c-1.4 2.4-2.3 5.2-3.5 7.6-.9 1.8-2 3-3.2 4.6-.5.6-1.4 1.6-2.1 2.4-.2.2-.4.4-.5.6-.2.3-.4.5-.3.5m-49.8-21.5c-1.2 1.3-6.1 6.8-6.8 7.5" class="cls-1"/><path d="M27 141.4c-2.4 3.1-6.4 8.9-7.4 11.2-2 4.8 2.8 13.1 6.6 16.6 2.5 2.3 7.5 6.3 10.4 9.2.4.4.7.7 1 1.1" class="cls-1"/><path d="M42.9 172.3c-.3 0-.6-.2-.9-.3-4.5-1.7-6.6-8.7-8.5-11.6-1.2-1.8-2.1-3.1-3-4.1-1.2-1.3-2.5-2.2-4.8-3.6m24.6 22c.4.4 1.3 1 2.1 1.7 1.9 1.5 3.7 3.4 0 4.8.9 1.7-.2 3.1-1.3 3.4 1.3 1.3-.6 2.6-1.6 2.7.5 2.9-3.5 1.7-6 .6-.7-.3-1.3-.6-1.6-.9-2-1.5-5.1-4.8-4.3-7.5" class="cls-1"/><path d="M42.9 172.3c.7.1 1.6.2 2.5.2 3.3.1 7.3.2 7 3.8q0 0 0 0" class="cls-1"/><path d="M36.6 178.4c.3-2.7 2.9-5.4 5.4-6.3m45.9-2.8c3.1.6 5.7 4 5.8 7.1" class="cls-2"/></svg>')}`;
export default image;