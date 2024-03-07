/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-9{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-3{fill:#e0bfa4}.cls-4{fill:#9c6548}.cls-5{fill:#a1624e}.cls-6{fill:#68513e}.cls-7{fill:#ddd2c7}.cls-9{fill:none}</style></defs><path d="M99.9 168.2c-.4-1.2-1-4.1-1.8-7.8-1.7-6-3.5-26.1-6.4-30.8-1.8-2.9-2.8-5.3-5.8-6.9-1.1-.6-4.7-1.7-8-2.6v.3c-1.7 3.8-5.9 5.8-10 6.5-7.6 1.3-15.8-1.4-21.2-6.9-3.9 1-8.1 2.1-8.8 2.4-1.7.8-1.8 1-3 2.4-2.4 2.8-5.9 16.7-7.4 21.7-1.4 4-4.1 20.3-4.3 23-.3 5.7 8.7 13.4 13.9 15.6.6.2 1.3.5 2.1.8 2.2.7 5 1.5 7.6 2.3h0c-.3-3.3.7-6.7 2.8-9.3h0c2.1 1.6 4.4 2.8 6.7 2.5 3.5-.6 9.3-4.3 10.5.7.2 0 .3.1.5.1 2.5.7 5.8.4 9.5-1.3h0c2.7 1.7 4.6 4.5 5.2 7.6v.5c1.7-1.3 3.6-2.2 5.8-3.5.5-.3 1.1-.6 1.6-.9 6.3-3.7 12.9-8.7 10.5-16.3ZM42 171.4c-1.9-1.5-3.3-2.4-4.8-3.1.7-1.2 1.2-2.5 1.6-3.8.9-3 2.2-7.8 3.6-13h.3c-.1 2.1-.3 17.3-.7 19.9" class="cls-7"/><path d="M71.9 118.6c-1.4 4.5-6.9 7.8-12.3 5.4-3.9-1.7-6.2-3.3-5.9-6.1.2-2.3.3-5.6.3-9.2 6.7 5.4 11.6 7.2 15.8 7h2.5c0 1 0 1.9-.3 2.8Z" class="cls-3"/><path d="M53.9 108.9v-.1" class="cls-9"/><path d="M77.8 120.1v.3c-1.7 3.8-5.9 5.8-10 6.5-7.6 1.3-15.8-1.4-21.2-6.9 3.3-.8 6.4-1.7 6.9-2-.2 2.8 2 4.3 5.9 6.1 5.4 2.4 10.9-1 12.3-5.4h.4c.8.3 3.1.8 5.6 1.5Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#e1a73f"/><path d="M44.8 141.6c-.7 3.2-1.5 6.7-2.4 10m10.7 40.3h-.3m24.9.8h-.8" class="cls-9"/><path d="M87.7 185.4c0 1.8-.1 3.5-.2 5.2H87c-2.7.2-5.5 1.6-8.4 1.9 1.1-1.6 2.2-2.7 3.4-3.7 1.7-1.3 3.5-2.2 5.7-3.5Z" class="cls-7"/><path d="M85.8 138.9c1.3 7.6.8 10 .8 17.6v15.9" class="cls-9"/><path d="M82 188.9c-1.2 1-2.3 2.1-3.4 3.7h-.9c-1.8-4.9-6.1-8.8-11.1-10.2l.2-.6c.2 0 .3.1.5.1 2.5.7 5.8.4 9.5-1.3h0c2.7 1.7 4.6 4.5 5.2 7.6v.5Z" class="cls-3"/><path d="M93.9 166.5c-4.8 1.4-7.2 6.5-10.5 9.6-2.2 2.1-4.5 3.6-6.7 4.7m-24 9.6-.6-.3m-21.4-22.9c2.8 0 4.7.4 6.5 1.1m12.4 10.4c-3-2.4-5.7-5.8-7.6-7.3m10.1 18.7" class="cls-9"/><path d="M77.9 193.3c-2.1 1.7-7.4 3.8-8.9 3.7-2.2.2-7.8 0-9.2-.4-2-.7-5.6-2.4-7.1-4.6h0q-.6-.9-.6-1.8c-1.4-.7-3.4-1.4-5.4-2h0c-.3-3.3.7-6.7 2.8-9.3h0c2.1 1.6 4.4 2.8 6.7 2.5 3.5-.6 9.3-4.3 10.5.7l-.2.6c5 1.4 9.3 5.3 11.1 10.2 0 .2.1.4.2.6Z" class="cls-3"/><path d="M94.9 283.8c-1.4.4-2.6.8-3.7 1.3-3.8 1.6-6.5 3.5-12 2.6-1.8-.3-3.8-.9-6.3-1.9 0-.6-5.3-29.3-5.4-30.8-.5-7.6-5-29.7-4.8-32.6-2.1 10.4-4.5 24.1-5.5 31.2-.4 3.3-5.1 35.5-5.1 35.5-1.5.4-3.3.5-5.3.3-4.3-.3-9-1.6-12.3-2.9-1.7-.7-3-1.3-3.5-1.7 0 0 1.4-26 1.8-33 .8-12.2 4.9-45.9 5.6-52.4 0 0 .5-7.7.7-11.1h.3c.8 1.6 7.1 2.9 13.3 3.8h0c1.4 2.2 5 4 7.1 4.6 1.4.4 7 .7 9.2.4 1.5 0 6.7-1.9 8.9-3.7.3-.2.5-.5.7-.7 2.8-.3 5.6-1.7 8.4-1.9.1 5.7 1.6 14.6 2.2 19.9.6 5.2 2.6 31.1 3.7 43.3.2 2.4 2.2 28.9 2.2 29.9Z" style="fill:#50637f;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M87 190.6v-.2" class="cls-9"/><path d="M52.7 191.9c-6.2-.9-12.5-2.2-13.3-3.7h-.3v-2.4c2.2.7 5 1.5 7.6 2.3 2 .6 3.9 1.3 5.4 2q0 .9.6 1.8" class="cls-7"/><path d="M62.8 222.3c1.3-6.3 2.5-11.4 3.2-13.3 0-.1 0-.2.1-.3" class="cls-9"/><path d="M72.2 202.9c-2 1.8-6.2 6-7.3 7.1" class="cls-9"/><path d="M49.6 308c-1.3 1.3-5.1 1-7.1 1H26.4c-1.7 0-3.6-.2-4.7-1.3-1-1-1.1-6.8-.7-8.1.7-2.7 5.5-5.6 8.3-6.8 1-.4 2-.7 2.9-1.2 3.7-1.1 7.3-.5 10 .1 1.8.4 3.1.7 4.2 1.3.9.5 1.7 1.2 2.5 2.5 1.2 1.8 2.2 11 .6 12.5Z" class="cls-4"/><path d="M32.3 291.6c-1 .3-2 .7-2.9 1.2" class="cls-9"/><path d="M46.9 289.3q-.3 2.2-.3 3.7c-1.1-.6-2.4-.9-4.2-1.3-2.7-.6-6.3-1.2-10-.1.7-.4 1.3-.8 1.7-1.4.6-.8.3-2.6.5-3.8 3.2 1.2 8 2.6 12.3 2.9m45.2 1.9c-.4.6-1.3.7-2.1.7-2.4 0-6.9 0-9.2.5-.5.1-1 .3-1.4.5h0c.2-2.2 0-3.4 0-5.2 5.5.9 8.2-.9 12-2.6.4 2.1.8 3.4 1 5 0 .4 0 .8-.2 1.1Z" class="cls-3"/><path d="M105 308.1c-.4.2-3.3.8-3.8.8-4.9.2-22.8-.3-24.2-1.1-2-1.2-1.5-9.7-.4-11.7.8-1.5 1.5-2.6 2.8-3.3.4-.2.9-.4 1.4-.5 2.3-.6 6.8-.5 9.2-.5.8 0 1.7 0 2.1-.7 3.9 1 11.2 3.6 13 6.9.7 1.3 1.4 9.4 0 10Z" class="cls-4"/><path d="M77.8 62.9c-10.9-1.1-17.2 0-27.5 6.9-3.7 2.5-7.5 6.9-8.4 11.2-.8-.8-2.1-1-3.1-.5-.2.1-.5.3-.7.5-.9.9-1.4 2.3-1.4 3.7 0 1.7.5 3.4 1.3 4.8.6 1.2 1.3 2.3 2.3 3.1.1.1.3.2.4.3.5.3 1.2.5 1.8.5h.7c.7 3.5.8 5.3 1.7 6.9 2.4 2.5 4.6 4.6 6.7 6.4.8.7 1.7 1.4 2.4 2.1 6.7 5.4 11.6 7.2 15.8 7 .8 0 1.6-.2 2.4-.4 3.2-.8 6.1-2.9 9.2-5.4.7-.6 1.4-1.2 2-1.8 3.6-3.5 6.1-8.1 7.1-13 0-.4.2-.8.2-1.2.8-4.6.8-8.2.8-8.9v-.3c.4-1.8.7-2.8.9-3.7.3-1.2.4-2.1.5-4.4-.2-7-7.5-13.1-15.1-13.9Zm-18.4 24c-1 0-1.8-1.6-1.8-3.4s.8-3.4 1.8-3.4 1.8 1.5 1.8 3.4-.8 3.4-1.8 3.4m14.1 19.8c-2.2.3-6.5-.2-8.7-1.5-1.3-.8-2.1-1.3-3.2-2.5-.7-.8 0-2 1-1.7 4.7 1.2 13 2.5 17.5.9h0c-1.5 2.8-3.2 4.3-6.7 4.8Zm10.8-20.6c-.8 0-1.5-1.3-1.5-3s.7-3 1.5-3 1.5 1.3 1.5 3-.7 3-1.5 3" class="cls-3"/><path d="M80.2 102c-1.5 2.7-3.2 4.2-6.7 4.7-2.2.3-6.5-.2-8.7-1.5-1.3-.8-2.1-1.3-3.2-2.5-.7-.8 0-2 1-1.7 4.7 1.2 13 2.5 17.5.9h0Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M92.9 76.6v.1m-4 .2c-1.1-2.5-6.9-3-8-1.7m-17.9.5c-2.1-2.1-7.6-.7-8.1.9" class="cls-9"/><path d="M85.8 83.1c0 1.7-.7 3-1.5 3s-1.5-1.3-1.5-3 .7-3 1.5-3 1.5 1.3 1.5 3m-24.5.3c0 1.9-.8 3.4-1.8 3.4s-1.8-1.6-1.8-3.4.8-3.4 1.8-3.4 1.8 1.5 1.8 3.4" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M76.7 86.8c-.1 3.1 6 11-3.4 10.1m7.3 4.8c-.2 0-.3.1-.5.2" class="cls-9"/><path d="M88.9 54.6c-6.9-4-15.2-4.5-26.8-2.6-6.4 1-13.4 3.6-18.8 7.2-1.7 1.1-4.1 3.4-6 5.6.9-10.3 15.3-19.5 24.1-21.3 9.4-1.8 24.5 2.8 27.5 11Z" class="cls-5"/><path d="M42.3 93.5h.7c.5-.1.9-.4 1.3-.8" class="cls-6"/><path d="M42.4 82c-.1-.4-.3-.7-.6-1" class="cls-9"/><path d="M95.1 89.2c-.3 1.7-1.6 3.9-2.9 4.7-.5.3-1 .4-1.5.1h0c.8-4.6.8-8.2.8-8.9v-.3c.4-1.8.7-2.8.9-3.7h.1c.6-.1 1.3.2 1.6.8.4.5.5 1.2.6 1.8.4 1.8.7 3.7.3 5.5Z" class="cls-3"/><path d="M77.9 193.5v-.2m-11.3-10.8c-.6-.2-1.2-.3-1.8-.4m-27.6-13.7s0 0 0 0m55.7-91.7v1.1" class="cls-9"/><path d="M94.1 81.9c-.4-.5-1-.9-1.6-.8h-.1c.3-1.2.4-2.2.5-4.4-.2-7-7.5-13.1-15.1-13.9-10.9-1.1-17.2 0-27.5 6.9-3.7 2.5-7.5 6.9-8.4 11.2-.8-.8-2.1-1-3.1-.5-.2.1-.5.3-.7.5-3.1-1.3-4.7-8.9-3.5-12 .5-1.3 1.5-2.8 2.7-4.2 1.9-2.3 4.3-4.5 6-5.6 5.4-3.6 12.4-6.1 18.8-7.2C73.7 50 82 50.5 88.9 54.5c1.4.8 2.8 1.8 4.1 2.9 4.1 3.6 3.8 19.5 1.2 24.4Z" class="cls-5"/><path d="M38.4 81.2c-.1 0-.3 0-.4-.1" class="cls-9"/><path d="M51.5 106.8c-.2.3-1.3 1.2-1.5 1.5-5.3-3.4-9-9.1-10.1-15.3l.2-.3c.1.1.3.2.4.3.5.3 1.2.5 1.8.5h.7c.7 3.5.8 5.3 1.7 6.9 2.4 2.5 4.6 4.6 6.7 6.4Z" class="cls-6"/><path d="M51.5 106.8s0 0 0 0" class="cls-9"/><path d="M92.2 93.9c-.5 3.1-1 6.1-2.4 8.9-1.3 2.6-6 5.4-6.3 5.6l-.2-.2c3.6-3.5 6.1-8.1 7.1-13 0-.4.2-.8.2-1.2h0c.5.3 1 .2 1.5-.1Z" class="cls-6"/><path d="M83.5 108.4s0 0 0 0m8.8-14.6v.1" class="cls-9"/></svg>')}`;
export default image;