/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#957346}.cls-1,.cls-3,.cls-4,.cls-7{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-3{fill:#fbd00d}.cls-4{fill:#debea3}.cls-7{fill:none}</style></defs><path d="M110.2 232c-7.7 2.2-13.5 7.8-19.3 11.9-.8.5-1.5 1.1-2.3 1.6-1.8-4.6-9.5-18-11.9-22-2.4 8.4-4.2 17-5.3 22-.8-.1-1.6-.2-2.3-.4-7.6-1.4-10.6-3.7-18.3-5.1-.7-.1-1.4-.2-2.2-.4 1.6-15.6-1.7-23.3 4.1-40.7h0c14.6 4.2 25.4 6.5 40.8 4.9 8 7.8 12.2 17.8 16.5 28.1Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#636567"/><path d="M92.6 92c-.5-4.8-1.3-10.6-.9-15.3-1.7 5.1-2 9.8-4 14.5-3.6.2-6.4 0-9.4 0h0c-2.8 13.4-2.5 16.9 3.4 27.5-1.8.3-4.4.6-7.4.9v.2c1.4 1 3.9 1.8 4.8 2.6 1.6 1.4 4.1 2.9 6.5 4.1 3.2 1.6 6.5 2.7 7.6 2.5.2 0 .3 0 .5-.1 3.3-.9 7.7-5.2 7.7-5.2 6.7-5.6 5.7-17.5 6.2-19.3.6-2.1 2.9-4.8 4.9-8.2-6.1-3.2-13.7-4.5-20-4.1Zm-4.5 11.6c.3-1.3 1.1-2.2 1.8-2s1.1 1.3.8 2.6-1.1 2.2-1.8 2-1.1-1.3-.8-2.6m1 11.3v-.2c3.5 2.4 6 3.9 9.8 4.4-2.2 7-9.8 6.6-9.8-4.1Zm15.4-7.3c-.3 1.3-1.1 2.3-1.8 2.1-.7-.1-1-1.3-.8-2.7.3-1.3 1.1-2.3 1.8-2.1s1 1.3.8 2.7" class="cls-4"/><path d="M113.7 96.4c0 .1 0 .2-.1.4m-19.9 32.1c-1.1-.1-2.3-.3-3.4-.4" class="cls-7"/><path d="M70.4 120.2c0 .9 0 1.7-.2 2.6h-.3c-4.5-.6-9.9-.7-14.3-1.6h0c4-.4 9.6-.7 14.8-1.2z" class="cls-1"/><path d="M118.2 100.4c-1.4-1.4-3-2.6-4.7-3.6-.3-.2-.7-.4-1-.6-6.1-3.2-13.7-4.5-20-4.1-.5-4.8-1.3-10.6-.9-15.3-1.7 5.1-2 9.8-4 14.5-3.6.2-6.4 0-9.4 0h0c-2.8 13.4-2.5 16.9 3.4 27.5-1.8.3-4.4.6-7.4.9-1.3.1-2.6.2-4 .4-5.2.5-10.8.8-14.8 1.1-.8 0-1.5.1-2.2.1-.9-3.8 1.4-6.6 1.1-10.6-1.2-15.1-.2-23 6.4-31.9 4.1-5.4 12.5-16 22.1-12.2 0 0 3-2.7 5.8-1.8 21.2 4.7 30.8 17.4 29.5 35.5Z" class="cls-1"/><path d="M85.2 69.8c-8 4.1-11.4 15.7-10.4 21.4h3.5" class="cls-7"/><path d="M110.8 128.2c-6.1 1.1-11.3 1.4-17.1.8 3.3-.9 7.7-5.2 7.7-5.2 6.7-5.6 5.7-17.5 6.2-19.3.6-2.1 2.9-4.8 4.9-8.2.3.2.7.4 1 .6-3.3 8.3-5.4 22.9-2.7 31.4Z" class="cls-1"/><path d="M113.7 96.4c0 .1 0 .2-.1.4m-19.9 32.1c-1.1-.1-2.3-.3-3.4-.4m22.4-32.6s-.1.2-.2.3m-7.2 5.4c-.1-2.2-2.1-2.1-3-1m-10.6-3.7c-1-1.6-3.1-2.2-5.3-.3m12.3 13.1c.3 2 .4 3.3 2.7 3-1 1.9-1.7 2.2-3.6 2.7m-8.6-.8-.8-.5" class="cls-7"/><path d="M98.8 119c-2.2 7-9.8 6.6-9.8-4.1v-.2c3.5 2.4 6 3.9 9.8 4.4Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M104.5 107.6c-.3 1.3-1.1 2.3-1.8 2.1-.7-.1-1-1.3-.8-2.7.3-1.3 1.1-2.3 1.8-2.1s1 1.3.8 2.7m-13.7-3.4c-.3 1.3-1.1 2.2-1.8 2s-1.1-1.3-.8-2.6 1.1-2.2 1.8-2 1.1 1.3.8 2.6" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M85.7 133.5c-1.5 1.6-4 2-6.1 1.4s-9.5-3.9-10.6-7.3v-.2s0 0 0 0c.6-1.6 1-3.1 1.2-4.6.1-.8.2-1.7.2-2.6v-.2c1.3-.1 2.7-.2 3.9-.4v.2c1.4 1 3.9 1.8 4.8 2.6 1.6 1.4 4.1 2.9 6.5 4.1-.1.8 0 1.6 0 2.3.3 1.9 1.1 3.6 0 4.7Zm-.1-7.1v.1" class="cls-4"/><path d="M59.5 152.9c-.5-.5-1-1-1.7-1.5-3.7-2.7-9.8-4.6-12-5.8-.4-.2-.7-.4-.8-.6-.3-.9 0-1.8.3-2.7 2.3-6.2 7.2-10.8 13.5-12.9 1.2-.2 2.2-.3 3-.4h0c1.8.2 3 1.5 3.9 3.8 1.7 4.3-3.3 16.7-6.3 20.1Z" class="cls-3"/><path d="M61.9 129c-.8.1-1.8.3-3 .4 1.2-.4 2.2-.5 3-.4" class="cls-7"/><path d="M96.9 157.5c0 2.8-.1 5.7-.3 8.5-.7 12.7-2.5 25.4-3 37.9-15.3 1.5-26.2-.7-40.8-5.1-.3 0-.6-.2-.9-.3 1.5-4.6 1.6-3.7 2.4-8.5h0c.7.5 1.4 1.1 2.1 1.7 1 1.8 6 6.8 7.9 5.8 1.5-.8 5-8.7 4.1-10.9-.8-2.1-8.7-4.1-10.2-2.5h0q-1.5-2.1-2.7-4.2l.3-.2c1-9.8 2.8-21.8 1.9-28v-.5c.7.5 1.2 1 1.7 1.5 3-3.4 8-15.8 6.3-20.1-.9-2.3-2.1-3.6-3.9-3.8 4.3-.7 2.7-.9 7-1.6v.2c1.2 3.4 8.5 6.7 10.7 7.3 2.1.6 4.6.2 6.1-1.4 1.1-1.1.3-2.8 0-4.7h.2c1.6.9 3.6.8 5.2 1.8.4.3.8.7 1.2 1 0 0 .2.2.2.3 1.8 2.5 3.1 5.3 3.5 8.4.9 5.6 1.1 11.4 1.1 17.2Z" class="cls-3"/><path d="M92.1 131.7c-.3-.5-.7-.8-1.1-1" class="cls-7"/><path d="M64.5 197.6c-1.8.9-6.9-4-7.9-5.8l-2.1-1.8c-7-6.2-10.9-10.3-15.4-19.3-2.2-4.5 2.6-18.6 6.6-24.8v-.2c2.3 1.2 8.4 3 12.1 5.8v.5c-4 5-6.6 9.7-9.8 15 3.4 5.4 5.2 9.2 7.5 13.1q1.2 2.1 2.7 4.2h0c1.5-1.6 9.4.4 10.2 2.4.9 2.2-2.5 10.1-4.1 10.9Z" class="cls-4"/><path d="M58.6 184.7c-.1-.1-.2-.3-.3-.4" class="cls-7"/><path d="M102.9 151.7c-.9.6-1.5 1-2 1.3-1.7 1.2-1.6 1.6-3.9 4.5h0c0-5.8-.2-11.5-1.1-17.2-.4-3.1-1.8-5.9-3.5-8.4 0-.1-.1-.2-.2-.3 5.1 5.1 7.5 13.7 10.8 20Z" class="cls-3"/><path d="M119.2 178.2c-2.5.6-.5-.1-2.5 1.3s-3.5 3.9-3 6.3h-.1c-2.3-6.2-16.4-14.9-17-19.8.2-2.8.3-5.7.3-8.5h0c2.3-2.9 2.2-3.2 3.9-4.5h0c1.5 6.5 12.8 21.4 18.3 25.2Z" class="cls-4"/><path d="M96.6 165.7v.4" class="cls-7"/><path d="M122.3 188.6c-2.3 1.7-3.7 2.4-6.1.8-1.1-.8-2.1-1.9-2.4-3.3v-.3c-.5-2.4 1-4.9 3-6.3 2.1-1.5 0-.8 2.5-1.3 2.8-.9 6 .7 7.2 3.3s-1.8 5.4-4.1 7.1Z" class="cls-4"/><path d="M80.4 212.3c-1.3 3.4-2.5 7.3-3.6 11.2m-7.4 21.1c0 .2-.1.3-.2.5" class="cls-7"/><path d="M69.2 245.1c-2.4 7.5-4.2 8.4-8.4 16.2-4 7.4-8.5 16.6-13.5 23.8-1 .6-1.8 1.5-2.6 2.4s-6.9.8-8.1-1h0c1.8-9 4-22.8 8.9-30.5 1.7-2.6 3.5-5.7 4.6-8.6 1.1-3 1.2-4 .8-7.4 7.7 1.4 10.7 3.7 18.3 5.1" class="cls-4"/><path d="M76.8 223.5s0 0 0 0m19.9 66.6v1.5" class="cls-7"/><path d="m106.9 288.8.5.4c-.5.7-.9 1.5-1.2 2.3-.6 1.2-1.3 2.5-2.6 3.1-2.1 1.1-5-.2-5.9-2.4h-1.1v-.4h0v-1.6c.3-10.3-.9-18.1-3.6-28.5-.8-2.9-1.6-9.3-1.2-12.3.4-2.6-.7-5.2-.7-5.2l-.2-.3c5.8-4.2 11.6-9.8 19.3-11.9.2 19-.9 38-3.4 56.8Z" class="cls-4"/><path d="M35.3 285.1s0 0 0 0" class="cls-7"/><path d="M134.3 311.3c-2.8 1.5-6.1 1.4-9.3 1-9.6-1-19-3.6-28.3-6.2-1.1-.3-2.4-.7-2.9-1.7-.4-.7-.3-1.6-.2-2.4.5-3.5 1.4-7 2.8-10.4h.2v.6h1.1c.9 2.2 3.8 3.5 5.9 2.3 1.2-.7 1.9-1.9 2.6-3.1.4-.8.8-1.6 1.2-2.3.3-.4.6-.8 1-1.1 1.1-.9 2.1-1 3.1 0h.1c7.4 4.3 14.8 8.5 22.2 12.7 1.3.7 2.6 1.5 3.4 2.8 1.6 2.6-.1 6.3-2.9 7.8m-67.8 3c-3.1.7-6.3-.3-9.2-1.5-9-3.6-17.3-8.6-25.6-13.6-1-.6-2.1-1.3-2.3-2.4-.2-.8.1-1.6.5-2.4 1.4-3.3 3.3-6.4 5.5-9.2l1.1.9c0 .2 0 .4.2.5 1.2 1.8 7.2 1.9 8.1 1 .8-.9 1.6-1.8 2.6-2.4.2 0 .3-.2.5-.2 1.3-.5 2.3-.4 3 .8h0c6 6.2 12 12.2 18 18.3 1 1.1 2.1 2.2 2.5 3.6.9 3-1.8 6-4.9 6.7Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#b3292e"/></svg>')}`;
export default image;