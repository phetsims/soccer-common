/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-5,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-4{fill:#748f9d}.cls-5{fill:#88d3ba}.cls-7{fill:#55b695}.cls-8{fill:#1d6352}.cls-9{fill:#ad7153}</style></defs><path d="M32.7 142.4c3.8-7.7 7.6-12.3 12.6-21.2.6-1 1.4-1.9 2.3-2.6 2.9-2.2 6.5-5.9 9.6-9.3h-.1c-4.8-2.4-8.3-7.2-9.1-12.5-1.6 1.9-3.4 3.8-4.9 5.7-2.3 3-4.6 6.1-6.8 9.3-8.3 11.9-10.2 19.3-13.2 33.4-1.5 2.3-4 11.2-1.7 12.7 1.9 1.3 13.1.3 15-2.2 1.8-2.2-.8-12.6-3.6-13.3z" class="cls-9"/><path d="M50.3 94c-.7.9-1.4 1.9-2.2 2.8.8 5.3 4.3 10.1 9.1 12.4h.1c.9-.8 1.7-1.7 2.5-2.6h-.1c-1.7-.7-3.1-1.9-4.2-3.3s-1.8-3.1-2.5-4.7-1.5-3.3-2.2-4.9h-.1l-.3.3Z" class="cls-7"/><path d="M50.6 93.6h.1c.7 1.7 1.5 3.3 2.2 5 .7 1.6 1.5 3.3 2.5 4.7 1.1 1.4 2.5 2.7 4.2 3.2h.1c1.7-1.7 3.2-3.2 4.2-4 0-10.2 1.9-19.7 2.7-22.8-.3 0-.7.2-1 .3-3.2 1-6.3 2.6-8.8 4.8-3 2.6-4.2 5.8-6.3 8.8Zm43.2 123.3c2-4.9 6.6-8.1 11.2-10.8 3.7-2.2 7.6-4.2 10.6-7.2.8-.7 1.4-1.5 2.1-2.4 1.1-1.5 1.9-3.2 2.6-5 1.1-3 1.9-6.2 2.9-9.3 1.6-4.8 4.3-9.8 9.1-11.5-1.9-.7-3.9-1.4-7.5-3-1.3-.5-4.8-2-8.9-3.6-1.9-6.8-8-15.8-8.5-20.5-3.9 1.1-8.3 2-13.6 2.9-2.4 1.8-12.3 5-14.2 2.6-1.6-2-1.1-14.6 1.5-16.9 2.4-2.2 14.1.3 15.2 3.4 4.3-2.2 7.5-3.3 10.9-4.7 0-5.6.8-8.2 1.6-12.4.7-3.7 1.1-4 1.6-6.6-1.4-3.7-6.1-5.2-8.1-6.2-2.3-1.2-6.4-1.6-8.7-1.8-7.7-.8-9.9-1.3-19.1 0-5.2.8-7.9 1.7-10.1 4.9.3 2.8.8 5.7 1.5 8.3.4 4.7 1.1 10.9.9 14.8-.1 2-2.4 24.8-2.7 26.4h-.2c-.6 6.3.4 12.2 2.6 18.1 2.1 5.6 5.2 10.8 8.2 15.9 3.7 6.2 7.3 12.4 11 18.7 2 3.4 4 6.8 6.7 9.6 1-1 .9-2.1 1.4-3.4v-.2Z" class="cls-5"/><path d="M66.7 79.7c-.8 3-2.8 12.6-2.7 22.8q0 3.15.3 6.3c2.2-3.2 4.9-4.2 10.1-4.9 9.2-1.3 11.4-.8 19.1 0 2.3.3 6.4.7 8.7 1.8 2 1 6.7 2.4 8.1 6.2 0-.5.2-1 .3-1.7h.2c0-.2 0-.4-.1-.5-2-7.2-1.9-11.1-1.6-17.2.1-3.2 1.4-7.2 2.9-9.6l.3-.4c-2.1-1.5-4.3-2.7-6.6-3.2-.7 0-1.8-.2-2.9-.4 0 1.2-1.6 5.7-3.2 7.9-5 6.7-9.7 9.9-15.4 10.9-6.2-6.5-10.7-9.2-7.7-19.9v-.2c-3.2.7-6.4 1.3-9.6 2.1h-.1Z" class="cls-7"/><path d="M102.6 78.9c1.1.2 2.2.4 2.9.4 2.2.5 4.5 1.7 6.6 3.2.9.6 1.7 1.3 2.5 2 1.9-15.2 4.6-28.6 5.2-43.9v-4c-.2-4.7-1.5-9.5-7.3-13.6-6-5-16-6.6-23.9-4.5q-3.15.75-5.7 2.4c-7 4.4-8.5 11.4-11 18.7-1.3 3.8-1.2 8.2-1.4 12.3 0 .6 0 1.2-.1 1.8-.5 5.1-1 10.2-1.7 15.4-.5 3.7-2.1 7.8-3.1 10.8.3 0 .7-.2 1-.2v-.1h.1c3.2-.8 6.4-1.4 9.5-2.1 1.2-.3 2.5-.5 3.7-.8.9-2.8 2.4-9.1 2.7-12.1-3-4.5-4.4-9.5-4.3-14.3-.6-.3-1.1-.8-1.4-1.4-.8-1.3-1-2.9-1-4.4 0-1.3 0-2.8.8-3.8.6-.7 1.5-1.1 2.3-1 .9.1 1.7.7 2 1.5h.4c6-4.2 12.4-7.9 19.1-11.1 1.2-.5 2.3-1.1 3.6-1.2 2.8-.3 7.3 1.7 9.2 3.8 1.2 1.3 1.8 3.7 2.3 5.3.6 1.7 1.2 3.5 1.6 5.3-.3 3-1 3.8-2.1 7.3 0 0-.4 7-2.8 11.9-2 4.1-8 12.4-14.5 12.8-.1.2-.2.3-.2.3 0 .3.2 1 .3 2.2 1 0 2.9.4 4.6.8Z" style="stroke-width:0;fill:#302c23"/><path d="M71.4 33.6c-.6 1.7-10.5 16.8-1.1 18.4h.3c.2-4.1.1-8.5 1.4-12.3 2.4-7.3 3.9-14.3 11-18.7q2.55-1.5 5.7-2.4c-1.9-2-5.1-2.4-7.6-1.4s-4.4 3.3-5.4 5.8c-.7 1.8-1 3.8-1.8 5.6-.7 1.7-1.7 3.2-2.3 4.9Z" class="cls-5"/><path d="M78.4 50.4c0 4.8 1.4 9.8 4.3 14.3 1.1 1.7 2.5 3.4 4.1 4.9 3.6 4 7.7 6.1 10.7 6h.4c6.5-.5 12.5-8.7 14.5-12.8 2.4-5 2.8-11.9 2.8-11.9 1.1-3.5 1.8-4.3 2.1-7.3-.5-1.8-1-3.5-1.6-5.3-.6-1.6-1.2-4.1-2.3-5.3-1.9-2-6.4-4.1-9.2-3.8-1.3.1-2.5.7-3.6 1.2-6.7 3.2-13.1 6.9-19.1 11.1h-.4c-.4-.8-1.2-1.4-2-1.5-.9-.1-1.8.3-2.3 1-.8 1-.9 2.4-.8 3.8 0 1.5.3 3.1 1 4.4.3.6.8 1.1 1.4 1.4Zm14-10.8c-.1-.2 3.4-1.4 4.7-1.4.9 0 2.7.3 3.6 1.3 1.2 1.4 1.3 2.6.4 2.2-.8-.3-1.7-2.1-4.5-2.5-1.6-.2-4.1.5-4.1.3Zm13 26.4c-4 7.4-13.4-1.3-12.1-4.9 5.5 3.2 9.4 4.9 12.1 4.9m-9.6-15c-.8-.2-1.2-1.5-.8-3 .3-1.5 1.2-2.5 2-2.3s1.1 1.5.8 3-1.2 2.5-2 2.3m13.9-5.9c-.7-.2.1-1.1 1.6-1.5 1.1-.3 2.2.4 2.7.9.7.6 1.9 2.6 1.7 2.7-.1 0-1.2-1-2.1-1.7-1.7-1.2-3.3-.3-3.9-.5Zm.7 10.2c-.8-.2-1.1-1.6-.7-3.1s1.2-2.6 2-2.4 1.1 1.6.8 3.1-1.2 2.6-2 2.4Z" class="cls-9"/><path d="M80 76.8c-1.2.3-2.5.5-3.7.8v.2c-3 10.7 1.5 13.4 7.7 19.9 5.7-1 10.4-4.2 15.4-10.9 1.6-2.2 3.2-6.7 3.2-7.9-1.7-.4-3.5-.8-4.6-.8 0-1.3-.2-1.9-.3-2.2-.2 0-.1-.6 0 0 0 0 .1 0 .2-.3h-.4c-3 0-7.1-2.1-10.7-6-1.6-1.5-3-3.2-4.1-4.9-.3 3-1.8 9.3-2.7 12.1m16.2 58.9c-1-3.2-12.8-5.6-15.2-3.5-2.6 2.3-3 14.9-1.5 16.9 1.9 2.4 11.7-.8 14.2-2.6 5.3-.9 9.6-1.8 13.6-2.9 7.8-2.2 13.9-5.4 22.4-11.9 2.7-3.7-2.4-15.4-5.7-22.1-.3-.5-.5-1.1-.7-1.6-4.3 0-8.6 2.2-11.4 5.5h-.2c1.1 3.5 2.7 7.7 4.8 12.9-3.8 2.1-6.6 3.4-9.4 4.5-3.4 1.4-6.5 2.6-10.9 4.8" class="cls-9"/><path d="M93.6 290.9c-.4-.1-.7 0-1 .2-1.5 3.6-2.6 7.4-3.2 11.2-.1.9-.2 1.8.2 2.6.6 1.1 2 1.5 3.3 1.8 10.5 2.8 18.8 5.5 29.7 6.6 3.6.4 7.4.5 10.5-1.1s5.1-5.5 3.3-8.3c-.9-1.3-2.4-2.2-3.8-3-8.4-4.5-14.5-9-22.8-13.5h-.1c-1.1-1.1-2.2-1-3.5 0-.1 0-.2.2-.3.3-1 .9-1.6 2.2-2.2 3.3-.7 1.3-1.3 3.1-2.9 3.4-3.1.5-5.4-2.9-7-3.3Z" class="cls-8"/><path d="M97 38.2c-1.3 0-4.8 1.2-4.7 1.4 0 .1 2.5-.5 4.1-.3 2.8.3 3.7 2.2 4.5 2.5.9.4.8-.9-.4-2.2-.9-1-2.7-1.3-3.6-1.3Z" class="cls-3"/><path d="M95.8 248c-2.2 7.6-2.6 19-2.5 29.3 4.2 2.8 9.7 3.6 14.6 2.2h.2c2.7-9.5 5-20.1 7.2-29.2 2.7-11.4 3.6-15.9 4.9-28.1.4-8.7-1.7-13.1-4.5-23.2-3 2.9-6.9 5-10.6 7.1-4.6 2.7-9.2 5.9-11.2 10.8 2.1 4 3 6 3.5 7.8 1.6 3.7 2 6.9 1.4 11-.5 4-1.7 8.5-2.9 12.3Z" class="cls-4"/><path d="M93.4 61c-1.3 3.7 8 12.4 12.1 4.9-2.7 0-6.6-1.7-12.1-4.9" style="stroke-width:0;fill:#fff"/><path d="M93.3 277.3c0 5 .2 9.7.3 13.6 1.7.4 3.9 3.8 7 3.3 1.5-.2 2.2-2.1 2.9-3.4.6-1.2 1.2-2.4 2.2-3.3.8-2.5 1.6-5.3 2.4-8h-.2c-4.9 1.4-10.3.5-14.6-2.2" class="cls-9"/><path d="M95 47.9c-.3 1.5 0 2.8.8 3s1.7-.8 2-2.3 0-2.8-.8-3-1.7.8-2 2.3" class="cls-3"/><path d="M114.6 84.6c-.8-.7-1.6-1.4-2.5-2l-.3.4c-1.5 2.4-2.7 6.3-2.9 9.6-.3 6.1-.4 10 1.6 17.2.5-1.4 2.1-2.9 3.4-3.5 1.4-.6 3.1-1.1 4.5-1.5s2.5-.7 3.8-.7h.2c0-1.6.2-3.1 0-4.8-.4-3.5-1.7-6.8-3.7-9.7-1.1-1.6-2.6-3.4-4.3-4.9Z" class="cls-5"/><path d="M111.3 43.7c-1.5.4-2.3 1.3-1.6 1.5.6.2 2.2-.7 3.9.5.9.7 2 1.7 2.1 1.7.2 0-1-2.1-1.7-2.7-.5-.5-1.6-1.2-2.7-.9Zm-1.6 8.5c-.3 1.5 0 2.9.7 3.1s1.6-.9 2-2.4 0-2.9-.8-3.1-1.6.9-2 2.4Z" class="cls-3"/><path d="M110.6 109.7c0 .2 0 .3.1.5.3 1.1.6 2.2 1 3.4h.2c2.8-3.4 7-5.5 11.4-5.6-.4-1-.7-2.1-.7-3.2v-.8h-.2c-1.3 0-2.4.2-3.8.7-1.4.4-3.1.9-4.5 1.5-1.3.6-2.9 2.1-3.4 3.5Z" class="cls-7"/><path d="M120.3 191.5h.2c7.2.4 4.4-.9 15.1 1.4 11.5 12.1 19.7 5.2 37.7 12.6l.2-.4c.4-4.3 2.1-8.6 4.9-12l.2-.4c-11.7-5-21.5-10.4-34-15.2-6.9-4.5-9.4-5.6-12.3-6.7-4.8 1.7-7.5 6.7-9.1 11.5-1 3.1-1.7 6.3-2.9 9.3Z" class="cls-4"/><path d="M176.2 206.8c2 1.6 5.6 1.1 7-1.1.8-1.3.9-2.9.8-4.4 0-1.5-.2-3 .4-4.4.3-.6.6-1.1 1-1.4-2.4-.9-4.6-1.9-6.8-2.8l-.2.4c-2.7 3.4-4.5 7.6-4.9 12l-.2.4c.4.2.8.3 1.3.5s1.1.5 1.6.7Z" class="cls-9"/><path d="M174.6 206c.5 4 1.5 8.6 2.9 12.2.3.8 3.5 2 4.2 2.5 1.1.6 2.5.3 3.7 0 10.5-2.9 16.3-5 26.2-9.5 3.3-1.5 6.6-3.3 8.5-6.2s1.7-7.3-1.3-8.8c-1.4-.7-3.1-.7-4.8-.6-9.5.3-17-.5-26.5-.3h-.1c-.8-.2-1.5 0-2 .3-.4.3-.7.8-1 1.4-.6 1.4-.5 2.9-.4 4.4 0 1.5 0 3.1-.8 4.4-1.4 2.2-5 2.7-7 1.1-.5-.3-1.1-.5-1.6-.8Z" class="cls-8"/><path d="M79.7 77.7c0-.2.2-.5.3-.8.9-2.8 2.4-9.1 2.7-12.1m15.1 11.1c0 .3.2 1 .3 2.2m-.3-2.2c-.2 0-.1-.6 0 0Zm.3-.3c-.1.2-.2.3-.2.3m-31.2 3.7v.9m43.8 29.7c0 .6-.2 1.2-.3 1.7-.5 2.6-.9 2.9-1.6 6.6-.8 4.2-1.6 6.8-1.6 12.4m-41.2-13.8c.4 4.7 1.1 10.9.9 14.8-.1 2-2.4 24.8-2.7 26.4m45-65.8c.1-3.2 1.4-7.2 2.9-9.6" class="cls-2"/><path d="M109 93.8v-1.3" class="cls-1"/><path d="M65.8 117.1c-.8-2.6-1.2-5.5-1.5-8.3q-.3-3.15-.3-6.3c0-10.2 1.9-19.7 2.7-22.8v-.1m40.6 64c.5 4.7 6.6 13.6 8.5 20.5" class="cls-2"/><path d="M80.2 76.8H80c-1.2.3-2.5.5-3.7.8-3.2.7-6.4 1.3-9.5 2.1h-.1q0 0 0 0c-.3 0-.7.2-1 .3-3.2 1-6.3 2.6-8.8 4.8-3 2.6-4.2 5.8-6.3 8.8 0 .1-.2.3-.3.4-.7.9-1.4 1.9-2.2 2.8-1.6 1.9-3.4 3.8-4.9 5.7-2.3 3-4.6 6.1-6.8 9.3-8.3 11.9-10.2 19.3-13.2 33.4M64 102.5c-1.1.8-2.5 2.4-4.2 4.1-.8.8-1.6 1.7-2.5 2.7-3.1 3.4-6.7 7.1-9.6 9.3-.9.7-1.7 1.6-2.3 2.6-5 8.9-8.8 13.5-12.6 21.2l-.3.6" class="cls-1"/><path d="M32.8 142.5c2.8.8 5.4 11.1 3.6 13.3-2 2.4-13.2 3.4-15 2.2-2.2-1.5.2-10.5 1.7-12.7m106.6-13.6c-8.5 6.5-14.6 9.7-22.4 11.9-3.9 1.1-8.3 2-13.6 2.9h-.3m26.4-22c-1.2.7-2.2 1.3-3.3 1.9-3.8 2.1-6.6 3.4-9.4 4.5-3.4 1.4-6.5 2.6-10.9 4.8-.2.1-.4.2-.7.4" class="cls-1"/><path d="M96.2 135.6c-1-3.1-12.8-5.5-15.2-3.4-2.6 2.3-3 14.9-1.5 16.9 1.9 2.4 11.7-.8 14.2-2.6m11.8-67.2c2.2.5 4.5 1.7 6.6 3.2.9.6 1.7 1.3 2.5 2 1.7 1.5 3.2 3.3 4.3 4.9 1.9 2.9 3.2 6.3 3.7 9.7.2 1.6 0 3.2 0 4.8v.8c0 1.1.3 2.1.7 3.2.2.5.5 1.1.7 1.6 3.3 6.8 8.4 18.5 5.7 22.1m-20.8-39.1c-.3 6.1-.4 10 1.6 17.2 0 .2 0 .3.1.5.3 1.1.6 2.2 1 3.4 1.1 3.5 2.7 7.6 4.8 12.9" class="cls-1"/><path d="M98.1 78.1c1 0 2.9.4 4.6.8 1.1.2 2.2.4 2.9.4" class="cls-2"/><path d="M76.4 77.8c-3 10.7 1.4 13.4 7.7 19.9 5.7-1 10.4-4.2 15.4-10.9 1.6-2.2 3.2-6.7 3.2-7.9v-.2" class="cls-2"/><path d="M124.7 167.7c-1.3-.5-4.8-2-8.9-3.6-7.2-2.9-16.3-6.5-19-7.4m23.4 65.5c.4-8.7-1.7-13.1-4.5-23.2m-21.9 17.9s0 0 0 0c2.1 4 3 6 3.5 7.8m22.9-2.5c-1.3 12.2-2.2 16.7-4.9 28.1-2.1 9.1-4.5 19.7-7.2 29.2-.8 2.8-1.6 5.5-2.4 8v.2m-8.4-63c1.6 3.7 2 6.9 1.4 11-.5 4-1.7 8.5-2.9 12.3-2.2 7.6-2.6 19-2.5 29.3 0 5 .2 9.7.3 13.6h0m31.1-123.2c3.6 1.5 5.6 2.2 7.5 3 2.9 1.1 5.4 2.3 12.3 6.7m-24 14.2c7.2.3 4.4-1 15.1 1.3m0 0c11.5 12.1 19.7 5.2 37.7 12.6.4.2.8.3 1.3.5s1.1.5 1.6.7h.2m9-11.2c-2.4-.9-4.6-1.9-6.8-2.8-11.7-5-21.5-10.4-34-15.2" class="cls-1"/><path d="M92.6 291.1c.3-.3.6-.3 1-.2 1.7.4 3.9 3.8 7 3.3 1.5-.2 2.2-2.1 2.9-3.4.6-1.2 1.2-2.4 2.2-3.3.1 0 .2-.2.3-.3 1.2-.9 2.4-1.1 3.5 0" class="cls-1"/><path d="M92.5 291.2c-1.5 3.6-2.6 7.3-3.2 11.1-.1.9-.2 1.8.2 2.6.6 1.1 2 1.5 3.3 1.8 10.5 2.8 18.8 5.5 29.7 6.6 3.6.4 7.4.5 10.5-1.1s5.1-5.5 3.3-8.3c-.9-1.3-2.4-2.2-3.8-3-8.4-4.5-14.5-9-22.8-13.5m66.5-80.6c2 1.5 5.6 1.1 7-1.1.8-1.3.9-2.9.8-4.4 0-1.5-.2-3 .4-4.4.3-.6.6-1.1 1-1.4q0 0 0 0c.5-.4 1.2-.5 2-.3" class="cls-1"/><path d="M174.5 206.2c.5 3.9 1.5 8.5 2.9 12.1.3.8 3.5 2 4.2 2.5 1.1.6 2.5.3 3.7 0 10.5-2.9 16.3-5 26.2-9.5 3.3-1.5 6.6-3.3 8.5-6.2s1.7-7.3-1.3-8.8c-1.4-.7-3.1-.7-4.8-.6-9.5.3-17-.5-26.5-.3M114 44.6c.7.6 1.9 2.6 1.7 2.7-.1 0-1.2-1-2.1-1.7-1.7-1.2-3.3-.3-3.9-.5-.7-.2.1-1.1 1.6-1.5 1.1-.3 2.2.4 2.7.9Zm-17-6.4c-1.3 0-4.8 1.2-4.7 1.4 0 .1 2.5-.5 4.1-.3 2.8.3 3.7 2.2 4.5 2.5.9.4.8-.9-.4-2.2-.9-1-2.7-1.3-3.6-1.3Z" class="cls-1"/><path d="M117.5 42.9v.5c-.3 3-1 3.8-2.1 7.3 0 0-.4 7-2.8 11.9-2 4.1-8 12.4-14.5 12.8h-.4c-3 0-7.1-2.1-10.7-6" class="cls-1"/><path d="M106.6 56.8c.7.8-.2 7.1-5.5 3.2m8.6-7.8c-.3 1.5 0 2.9.7 3.1s1.6-.9 2-2.4 0-2.9-.8-3.1-1.6.9-2 2.4ZM95 47.9c-.3 1.5 0 2.8.8 3s1.7-.8 2-2.3 0-2.8-.8-3-1.7.8-2 2.3M105.4 66c-2.7 0-6.6-1.7-12.1-4.9" class="cls-1"/><path d="M105.4 66c-4 7.4-13.4-1.3-12.1-4.9M78.4 50.3c0 4.9 1.4 9.9 4.3 14.4 1.1 1.7 2.5 3.4 4.1 4.9" class="cls-1"/><path d="M81.2 41.4c-.4-.8-1.2-1.4-2-1.5-.9-.1-1.8.3-2.3 1-.8 1-.9 2.4-.8 3.8 0 1.5.3 3.1 1 4.4.3.6.8 1.1 1.4 1.4.7.4 1.5.6 2.2.3m37-6.5c0-.3-.1-.5-.2-.8-.5-1.8-1-3.5-1.6-5.3-.6-1.6-1.2-4.1-2.3-5.3-1.9-2-6.4-4.1-9.2-3.8-1.3.1-2.5.7-3.6 1.2-6.7 3.2-13.1 6.9-19.1 11.1" class="cls-1"/><path d="M112.4 23.1c-6-5-16-6.6-23.9-4.5q-3.15.75-5.7 2.4c-7 4.4-8.5 11.4-11 18.7-1.3 3.8-1.2 8.2-1.4 12.3 0 .6 0 1.2-.1 1.8-.5 5.1-1 10.2-1.7 15.4-.5 3.7-2.1 7.8-3.1 10.8m46.9-56.9c5.8 4.1 7.1 8.9 7.3 13.6 0 1.4.1 2.7 0 4-.6 15.3-3.3 28.7-5.2 43.9q0 0 0 0" class="cls-1"/><path d="M88.5 18.6c-1.9-1.9-5.1-2.3-7.6-1.3s-4.4 3.3-5.4 5.8c-.7 1.8-1 3.8-1.8 5.6-.7 1.7-1.7 3.2-2.3 4.9S60.9 50.4 70.3 52" class="cls-1"/><path d="M64 109.2c0-.1.2-.3.3-.4 2.2-3.2 4.9-4.2 10.1-4.9 9.2-1.3 11.4-.8 19.1 0 2.3.3 6.4.7 8.7 1.8 2 1 6.7 2.4 8.1 6.2 0 .1 0 .2.1.4" class="cls-2"/><path d="M50.7 93.7c.7 1.6 1.5 3.3 2.2 4.9s1.5 3.3 2.5 4.7c1.1 1.4 2.5 2.7 4.2 3.2M48 96.3v.4c.8 5.3 4.3 10.1 9.1 12.4m65.3-5.1c-1.3 0-2.4.2-3.8.7-1.4.4-3.1.9-4.5 1.5-1.3.6-2.9 2.1-3.4 3.5v.2m12.7-1.9h-.1c-4.3 0-8.6 2.2-11.4 5.5" class="cls-1"/><path d="M63.8 157.9v.4c-.6 6.3.4 12.2 2.6 18.1 2.1 5.6 5.2 10.8 8.2 15.9 3.7 6.2 7.3 12.4 11 18.7 2 3.4 4 6.8 6.7 9.6 1-1 .9-2.1 1.4-3.4v-.2c2-4.9 6.6-8.1 11.2-10.8 3.7-2.2 7.6-4.2 10.6-7.2.8-.7 1.4-1.5 2.1-2.4 1.1-1.5 1.9-3.2 2.6-5 1.1-3 1.9-6.2 2.9-9.3 1.6-4.8 4.3-9.8 9.1-11.5h.1m-39 106.5c4.2 2.8 9.7 3.6 14.6 2.2m70.5-86.4c-2.7 3.4-4.5 7.6-4.9 12" class="cls-2"/></svg>')}`;
export default image;