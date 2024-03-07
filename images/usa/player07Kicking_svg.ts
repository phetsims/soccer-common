/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#7a4f2c}.cls-1,.cls-10,.cls-4,.cls-6,.cls-7,.cls-8,.cls-9{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-4{fill:#302f2d}.cls-6{fill:#b95a27}.cls-7{fill:#fff}.cls-8{fill:#e8cebf}.cls-9{fill:none}</style></defs><path d="M79.1 101.3c-4 1.3-7.6 5.2-9.2 9.1-1.4 3.4-4.3 12.1-5 17.1-4.6 4.3-11 9.6-13.3 11.3-.4-.2-.8-.5-1.2-.7-4-2.8-6.9-7.9-7.7-10.4-.2-.6-.3-1.1-.2-1.4.2-1 13.7-15.3 14.5-16 4.1-3.8 7.1-6.8 12.6-7.8 1.2-.2 5.3-.9 9.6-1.1Z" class="cls-7"/><path d="m65.3 127.1-.4.4" class="cls-9"/><path d="M47.1 140.4c-4.7 8.5-8.2 12.5-11.6 19.5h0c2.4.7 4.7 9.6 3.1 11.5-1.7 2.1-11.4 2.9-13 1.8-1.9-1.3.2-9 1.5-10.9 2.7-12.2 5.2-17.9 11.5-28.8 1.4-2.4 2.7-4.6 4-6 .9 2.6 3.7 7.7 7.7 10.4-3.2 2.5-1.9 1.4-3.2 2.4Z" class="cls-8"/><path d="m35.5 159.9-.3.5" class="cls-9"/><path d="M125.5 146.2c-.2.2-.8.1-1.7-.2-3.3-1-10.5-4.4-15-3.5-.2 0-.3 0-.5.1-.3-2.9-.9-5.3-1-10.2-.1-5.8-1.1-10.4.5-15.3.5-1.5 1.2-3.1 2.4-4.2 1.1-1 2.7-1.6 4.1-1.3 2.6 1.5 4.8 3.2 5.5 5 4.2 10.5 6.1 29.1 5.7 29.6" class="cls-7"/><path d="M123.8 146v.3c-.3 1.6-.6 3.2-1.2 4.4-1 2.1-2.2 2.2-3.1 2.9-3.8 1.5-7 2.3-9.9 2.8-7.8 1.2-13.9-.5-24.7-1.7-2.6.9-12.2 1.2-13.2-1.4-.9-2.2 2.8-13.2 5.6-14.6 2.7-1.3 12.5 3.9 12.6 6.9h0c8.8-1.7 7.6 0 18.8-3.1 4.5-.9 11.7 2.5 15 3.5Z" class="cls-8"/><path d="M89.9 145.8c-.2 0-.5.1-.7.2m-24.6 32.4c0-.3-.2-.6-.3-.9" class="cls-9"/><path d="M107.8 117.1c-1.7 4.9-.7 9.5-.5 15.3 0 4.9.7 7.4 1 10.2.1 0 .3 0 .5-.1-11.2 3-10.1 1.4-18.8 3.2h0c-.1-3.1-9.9-8.3-12.6-7-2.9 1.4-6.5 12.4-5.6 14.6 1 2.6 10.6 2.3 13.2 1.4 10.8 1.2 16.9 3 24.7 1.7-.8 3 1.2 13.9 1.3 18.8h0c-4.1-.9-6.3-3-14.5-4.8-16.6-3.6-30.4-6.9-31.9 2.9-.1 1.4-.1 2.8-.1 4-3.4-12.7-1.7-24.4.4-48.6h0c0-.4 0-.9.2-1.4.8-5 3.7-13.7 5-17.1 1.6-3.9 5.2-7.7 9.2-9.1 2 0 4 0 5.8.3-1.3 4.2-1.2 10.3.7 11.8 0 .1.1.2.2.3 1.7 2.4 4.7 3.5 7.8 3.5h0c3.6 0 7.4-1.4 9.5-4.1.9-1.1 2.4-3.4 1.7-6.6.3.2.7.4 1 .6v.2c1.7 1 5.3 2.5 8.4 4.4-1.4-.4-3 .2-4.1 1.3-1.2 1.1-1.9 2.6-2.4 4.2Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#2f4b57"/><path d="M109.6 156.4s0 0 0 0" class="cls-9"/><path d="m185.5 203.6-.8.8c-3 3.6-7 12.8-8.2 19.3-.3 1.5-.4 2.9-.4 4 0 .3-54.8-21.8-56.7-22-.4 0-.9-.1-1.4-.2-8.5-1.1-28.6-4.5-37.3-6.2-2.2-.6-4-1.1-5.2-1.6-4.7-2.4-10.9-8.8-11.2-20.4 0-1.3 0-2.6.1-4 1.5-9.8 15.4-6.5 31.9-2.9 8.2 1.8 10.4 3.9 14.5 4.9.3 0 .6.1 1 .2h0c4.1 1.3 9.5 2.9 12.2 4.2 1.3.6 61.7 23.5 61.3 23.8Z" class="cls-1"/><path d="M107.6 174.2c.8.3 2 .6 3.4 1 .3.1.7.2 1 .3" class="cls-9"/><path d="M122.4 225c0 1.2-5.6 62.9-5.7 64-9.6 1.7-14.2 2.6-24.9 1.5-.7 0-1.4-.1-2.2-.2-.5-1.3 3.9-64.9 2.9-67.7-2.4-6.5-6.4-15.9-11.8-23.2 8.7 1.8 28.8 5.1 37.3 6.2 2.7 9.6 4.4 11.9 4.3 19.4Z" class="cls-1"/><path d="M133.9 312.2c-3.2 1.4-6.8.9-10.3.2-10.5-2.1-20.6-6-30.7-9.9-1.2-.5-2.5-1-3.1-2.2-.4-.9-.2-1.9 0-2.8.8-4 .2-3.4 2-7h0c10.6 1.1 15.2.1 24.9-1.5 7.8 5.6 9.6 5.6 17.5 11.2 1.4 1 2.8 2 3.5 3.5 1.6 3.2-.6 7.1-3.8 8.6Zm85-102c-1.6 2.9-4.7 4.8-7.6 6.4-9.1 4.8-18.9 8.2-28.6 11.5-1.2.4-2.5.8-3.5.3-.8-.4-1.9-.9-2.6-4.7h0c1.2-6.6 5.2-15.8 8.2-19.3 9-.8 18.8-1.9 27.8-2.8 1.6-.1 3.2-.3 4.6.3 3 1.3 3.5 5.4 1.8 8.3Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#54331a"/><path d="M112.3 175.7h-.4m2.8-63.9c-.1 0-.2 0-.3-.1" class="cls-9"/><path d="M128.3 90.9c-1 .4-2.1.5-3.2.3-1.4-.2-2.6-1-3.5-2.1h0c.3-1.2-.1-2.8-1.9-4-.3-1.3-.3-2.7 0-4.1.1-.7.3-1.3.5-1.9-.7-.7-1.8-.9-3-.4 0 .6 0 1.2-.2 1.8-.9 5.1-5.3 8.6-9.7 7.8-4.1-.8-6.9-5-6.4-9.8-3.1-1.5-8.7-6.4-9.2-6.9 0-1-.6-1.9-1.3-2.6s0 0 0 0c-1-1-2.4-1.7-3.8-1.8-2-.1-3.1 3.7-3.5 5.8s1.2 5 2.9 6.1c.4.3.9.4 1.4.4v.3c0 4.2-.7 9.4.3 12.3 0 .2.4.6.8 1.2 2 2.4 7 7.2 10.3 9.6 1.6 1.1 3.3 2.2 4.8 3.1.4.2.7.4 1.1.6.3.2.7.4 1 .6 2.9 1.5 5.3 2.3 6.3 2 5-1.7 8.8-6.6 8.8-6.6 3.3-2.8 5.8-7.2 7.4-11.4h0Zm-14.9 9.3c-3.5-1.7-4.8-3.3-5.7-6.9 6.6 3.1 8.9 4.2 12.2 4.7-1.5 1.6-4.5 3.1-6.5 2.1Z" class="cls-8"/><path d="M119.9 98.1c-1.5 1.6-4.5 3.1-6.5 2.1-3.5-1.7-4.8-3.3-5.7-6.9 6.6 3.1 8.9 4.2 12.2 4.7Z" class="cls-7"/><path d="M121.7 89.2c-.3 1.3-1.5 2.3-2.9 2.4m1-6.4s0 0 0 0" class="cls-9"/><path d="M88.3 109.8c-1.4.8-2.4 2.3-2.5 3.9 0 0-.1-.2-.2-.3-1.9-1.5-2-7.6-.7-11.8.5-1.7 1.3-3 2.3-3.7v.6c0 2.9-1.8 8.3 1.1 11.4Z" class="cls-7"/><path d="M93.6 117.1v.2c-3.1 0-6.1-1.2-7.8-3.5 0-1.6 1-3.1 2.5-3.9l.6.6c1.2.9 2.8 1.6 4.5 2 .4 1.5.4 3.1.2 4.6" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#b3292e"/><path d="M103.2 113.2c-2.1 2.7-5.9 4.1-9.5 4.1h0v-.2c.3-1.5.2-3.1-.1-4.6 4.4 1 9.7-.2 10.4-6.5.4.2.7.4 1.1.6.7 3.2-.9 5.6-1.7 6.6Z" class="cls-7"/><path d="M101.8 75.6c-.2.6-.4 1.2-.5 1.9 0 .3-.1.6-.1.9-3.1-1.5-8.7-6.4-9.2-6.9 0-1-.6-1.9-1.3-2.6.5.4 1.9 1.3 3.6 2.4 2.4 1.5 5.4 3.3 7.6 4.2Z" class="cls-4"/><path d="M117.2 77s0 0 0 0" class="cls-9"/><path d="M121 77.6c-.3.5-.5 1-.7 1.5-.7-.7-1.8-.9-3-.4 0-.6 0-1.1-.1-1.7 1.3-.6 3.4-.5 3.7.6h0Z" class="cls-4"/><path d="M117.4 78.7h-.2m2.6 6.5s0 0 0 0" class="cls-9"/><path d="M117.2 77c-.3-2-1.1-3.8-2.4-5.1-1-1.1-2.4-1.9-4-2.2-1.7-.3-3.4 0-4.9.9-1.8 1-3.3 2.8-4.2 5-.2.6-.4 1.2-.5 1.9 0 .3-.1.6-.1.9-.4 4.8 2.3 9 6.4 9.8 4.4.8 8.7-2.7 9.7-7.8.1-.6.2-1.2.2-1.8s0-1.1-.1-1.7Zm-1.9 3c-.7 3.9-4 6.6-7.3 6s-5.4-4.3-4.7-8.2c.1-.6.3-1.2.5-1.7h0c1.2-3 4-4.8 6.8-4.3 3.3.6 5.4 4.3 4.7 8.2m1.9-3c-.3-2-1.1-3.8-2.4-5.1-1-1.1-2.4-1.9-4-2.2-1.7-.3-3.4 0-4.9.9-1.8 1-3.3 2.8-4.2 5-.2.6-.4 1.2-.5 1.9 0 .3-.1.6-.1.9-.4 4.8 2.3 9 6.4 9.8 4.4.8 8.7-2.7 9.7-7.8.1-.6.2-1.2.2-1.8s0-1.1-.1-1.7Zm-1.9 3c-.7 3.9-4 6.6-7.3 6s-5.4-4.3-4.7-8.2c.1-.6.3-1.2.5-1.7h0c1.2-3 4-4.8 6.8-4.3 3.3.6 5.4 4.3 4.7 8.2" class="cls-4"/><path d="M110.6 71.8c-2.8-.5-5.6 1.3-6.8 4.3h0c-.2.5-.4 1.1-.5 1.7-.7 3.9 1.4 7.6 4.7 8.2s6.6-2.1 7.3-6-1.4-7.6-4.7-8.2m.8 7.5c-.3 1.4-1.2 2.4-2.1 2.3s-1.2-1.5-.9-2.9 1.2-2.4 2.1-2.3c.8.2 1.2 1.5.9 2.9" class="cls-7"/><path d="M111.4 79.3c-.3 1.4-1.2 2.4-2.1 2.3s-1.2-1.5-.9-2.9 1.2-2.4 2.1-2.3c.8.2 1.2 1.5.9 2.9" class="cls-10"/><path d="M131.8 75.3c-.3-.3-.6-.6-.9-.8-.7-.6-1.6-.9-2.5-1.1-1-.2-2 0-2.9.2-1.8.6-3.5 2-4.6 4-.3.5-.5 1-.7 1.5-.2.6-.4 1.2-.5 1.9-.2 1.4-.2 2.8 0 4.1 1.7 1.3 2.2 2.8 1.9 4h0c.9 1.1 2.1 1.8 3.5 2.1 1.1.2 2.2 0 3.2-.3 1.8-.7 3.5-2.2 4.5-4.3.5-.9.8-1.9 1-3 .1-.9.2-1.7.2-2.5 0-2.3-.9-4.4-2.2-5.8m.2 7.8c-.7 3.7-3.6 6.2-6.5 5.7s-4.7-3.9-4-7.6 3.6-6.2 6.5-5.7 4.7 4 4 7.6" class="cls-4"/><path d="M128 75.4c-2.9-.5-5.8 2-6.5 5.7s1.1 7.1 4 7.6 5.8-2 6.5-5.7-1.1-7.1-4-7.6m-.2 7.4c-.3 1.5-1.2 2.5-2 2.4-.8-.2-1.2-1.5-.8-3s1.2-2.5 2-2.4c.8.2 1.2 1.5.9 3Z" class="cls-7"/><path d="M127.8 82.8c-.3 1.5-1.2 2.5-2 2.4-.8-.2-1.2-1.5-.8-3s1.2-2.5 2-2.4c.8.2 1.2 1.5.9 3Z" class="cls-10"/><path d="M136.1 82.3c0 1.4-.6 3.2-1.3 4.3h-1.9c.5-1 .8-2 1-3 .1-.9.2-1.7.2-2.5 0 0 1.6 1.2 2.1 1.2Z" class="cls-4"/><path d="M133 86.7s0 0 0 0m1-5.6s0 0 0 0m-46.5-1.7c1.3.1 2.6-.6 3.6-1.8" class="cls-9"/><path d="M134.1 71.9c-.9 1.5-1.7 2.7-2.2 3.4-.3-.3-.6-.6-.9-.8 0-.1.1-.3.2-.4.2-.6.3-1.5-.2-2-.2-.2-.5-.3-.8-.4-1-.4-2-.7-3.1-.5q-.3 0-.6.3c-.7.4-1.2 1.3-.9 2.1h0c-1.8.6-3.5 2.1-4.6 4.1h0c-.4-1.1-2.5-1.2-3.7-.6-.3-2-1.1-3.8-2.4-5.1 0-.2.2-.4.3-.6.3-.6.5-1.4.1-1.9-.2-.3-.6-.5-1-.7-2.2-1-4.7-1.4-7.1-.9-.6.1-1.2.3-1.5.9s0 1.2.2 1.8h0c-1.8 1.1-3.3 2.9-4.2 5.1-2.2-.9-5.2-2.7-7.6-4.2h0c1.7-10.5 7.8-16.1 15.1-19.4 2.6-1.1 14.8 13.6 16.7 18.4.2-3.3 2.6-9.3.9-12.1 3.9 3 6.1 7.2 7.2 13.5Z" class="cls-8"/><path d="m115.2 71.3-.3.6c-1-1.1-2.4-1.9-4-2.2-1.7-.3-3.4 0-4.9.9h0c-.2-.7-.5-1.4-.2-1.9s.9-.8 1.5-.9c2.4-.5 4.9-.2 7.1.9.4.2.7.4 1 .7.4.6.2 1.3-.1 1.9Z" class="cls-6"/><path d="M91.8 71.5c0 .6 0 1.2-.4 1.8M77 57c-.3 1.1-.6 2.4-1 3.9" class="cls-9"/><path d="M103.8 105.9c-.7 6.3-5.9 7.5-10.4 6.5-1.8-.4-3.4-1.1-4.5-2l-.6-.6c-2.8-3.1-1.1-8.5-1.1-11.4h.2c1.2-2.7 1.2-2.3 1.2-5.1 2 2.4 7 7.2 10.3 9.6 1.6 1.1 3.3 2.2 4.8 3.1Z" class="cls-8"/><path d="M135 79c-.2-2.6-.5-4.9-.9-7.1-1.2-6.3-3.3-10.6-7.2-13.5 1.7 2.8-.7 8.8-.9 12.1-1.8-4.9-14.1-19.6-16.7-18.4-7.2 3.3-13.4 8.8-15.1 19.3h0c-1.7-1-3.1-2-3.6-2.4q0 0 0 0c-1-1-2.4-1.7-3.8-1.8-2-.1-3.1 3.7-3.5 5.8s1.2 5 2.9 6.1c.4.3.9.4 1.4.4v.3c0 4.2-.7 9.4.3 12.3 0 .2.4.6.8 1.2 0 2.9 0 2.4-1.2 5.1h-.2v-.6c-4.1 0-4.9-7.8-5.5-8.9-.2-.4-.6 1-.8.6-2.1-4.6-5.5-14.4-5.5-20.5s-1 1.5-1 1.1c0-2.4.8-6 1.5-9.2h-.6c-.8-4.7 4.6-11.4 5.9-13.6-.6.5-3.4.7-3.8 1.1 3.7-7.6 13.9-13.2 23.4-13.4-.6-1.6-1.7-3.1-3-4 3.2.1 7.1 0 9.9 1.7l.3-.2c2.5-.9 8.2.7 12.3 2 4.6 1.5 9.6 4.8 12.9 8.6 9.2 10.8 8.9 23.3 1.8 35.7Z" class="cls-6"/><path d="M77.5 48.6v-.1h0Z" class="cls-9"/><path d="M131.1 74.1c0 .1-.1.3-.2.4-.7-.6-1.6-.9-2.5-1.1-1-.2-2 0-2.9.2h0c-.3-.8.2-1.7.9-2.1l.6-.3c1-.3 2.1 0 3.1.5.3.1.6.2.8.4.5.5.4 1.3.2 2" class="cls-6"/><path d="M64.7 128.8v.7m23.7-19.7" class="cls-9"/></svg>')}`;
export default image;