/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-4{fill:#2e2e2e}.cls-5{fill:#414141}.cls-6{fill:#bdcae8}.cls-7{fill:#8ea3d6}.cls-8{fill:#7d574c}</style></defs><path d="M223.6 203c3 1.4 3.7 5.7 2.1 8.7s-4.7 4.9-7.7 6.5c-9.2 4.9-19.1 8.1-29 11.4-1.2.4-2.5.8-3.6.2l-.2-.4c-1.8-3.7-5.4-8.3-5.5-12.3.2 0 .3.1.5.2 1 4.3 11.6-7.1 11-8.5-.3-.8-2.9-1.8-3-3.3 0-.6.1-1 .4-1.4.4-.6 1.1-.9 2-1.1h.6c9.1 1.8 18.6.3 27.7-.4 1.6-.1 3.3-.2 4.7.4" class="cls-5"/><path d="M191.2 208.7c.6 1.4-9.9 12.8-11 8.6-.2-.1-.3-.2-.5-.3-21.1-8.6-26.7-1.4-39.5-13.1.4-2.6.8-5.2 1.6-7.3 1.3-3.3 3.3-6.5 6.4-8.2.4.2.8.5 1.2.7 16 5.9 23.1 8.9 39 14.8-.3.4-.4.8-.4 1.4 0 1.6 2.6 2.6 3 3.3Z" class="cls-8"/><path d="M66.1 163.3c2.8-.5 6.4-.3 10.6.4 3.1.5 6.6 1.2 10.3 2 1.6.4 3.3.7 5 1.1 1.5.3 3.1.7 4.7 1 3.6.8 6 1.5 7.9 2.2 3 1.1 4.6 2.1 7.7 3.1v-.1c9.4 3.9 23.9 8.4 35.9 15.4-3.1 1.7-5.2 4.9-6.4 8.2-.8 2.1-1.2 4.7-1.6 7.3-.3 1.6-.5 3.3-.9 4.7-2.6 9.4-8.3 17.1-15.8 23-1.9 1.5-3.8 2.8-5.9 4.1-3.8 2.3-7.8 4-11.5 6.4-2.9 1.9-5.1 2.3-6.7 4.4.4-1.5.7-3 .9-4.4.6-3.8.2-6.8-1.5-10.3-6.8-11.3-15.7-23.3-24.5-33-5-4.6-14-16-13.6-30.3 0-.8-.1-1.6-.2-2.3h.3c1.2-1.6 3-2.5 5.3-3Z" class="cls-6"/><path d="M110.1 288.9c7.6 4.1 15.3 8.2 22.9 12.3 1.3.7 2.7 1.5 3.5 2.7 1.7 2.6-.1 6.1-3 7.5s-6.3 1.3-9.6 1c-9.9-1-19.6-3.5-29.2-6-1.2-.3-2.4-.7-3-1.7-.4-.7-.3-1.6-.2-2.4.5-3.4 1.5-6.8 2.9-10.1h.3v1.2c1 2.5 5.7 4.1 8 2.8 1.4-.8 2.2-2.2 2.9-3.6s.2-2.8 1.4-3.8c0 0 .2-.1.2-.2 1.1-.8 1.6-.9 2.6.2Z" class="cls-5"/><path d="M130.4 44.5c.2 3.1-1.7 3.3-3.4 4 2.6 2.1.6 5.4-2.3 3.8.2.9-.3 1.5-.5 2.4h-.1c-.8-4.6-2.8-9-5.9-12.5-1.2-1.3-2.5-2.4-4-3.3h.5c.7-.8 2.7-.7 3.6-.4 0-1.3 1.1-3 2.3-2.7 1.2.2 2 1.4 2.2 2.7.9-1.2 2.8-1.5 4-.5 1.1.9 1.4 2.9.4 4.1 1 .2 2.8-.2 3.3 2.4Z" class="cls-4"/><path d="M125.8 143.8c-2.1-1.6-6.8-6.8-13.6-6.4-5.7 1.6-8.9 2.1-11.7 2.4 1.1-1.1 2.1-2.4 2.6-3.3 2-3.6 2-6.3 1.7-10.3 0 .7-13.3-1.5-13.8-1-2 2.2-1 9.5 0 11.6.5.9 2.6 2.6 4.3 3.6-1.6.2-3.3.5-5.6 1 0-1.9-3.2-4.3-6.5-6l.2-.3c0-6.2 1.4-12.3 4.3-17.8v-.3c.2 0 .2 0 .3.1.2.1.6 0 1.2-.2 6.5-2.6 13.3-4.5 20.3-5.4.7-.8-.3-1.9-1.3-2.4-.9-.5-2-1.6-1.3-2.4.3-.3.8-.4 1.2-.4 2.2 0 4.4-.2 6.6-.3-.1-.8-.4-1.5-.7-2.2h.1c3 1.3 6.1 2 7.8 6.2 4.5 11.3 5.5 33.5 4.9 34.1-.2.2-.6 0-1.1-.4Z" class="cls-7"/><path d="M110.9 152.8c-8.4 1.3-14.9-.6-26.5-1.9q-.45.15-1.2.3c-2.1.4-5.6.6-8.4.2-2.3-.3-4.1-.9-4.5-2-.8-2 2-11.1 4.7-14.5.5-.6.9-1 1.3-1.2 1.3-.6 4.2.2 6.9 1.6 3.3 1.6 6.5 4.1 6.5 5.8 2.3-.3 4-.6 5.6-.8 1.9-.3 3.4-.4 5.1-.6 2.8-.3 6-.9 11.7-2.4 6.8-.4 11.5 4.8 13.6 6.4-.2 1.1-.5 2.1-1 3-1.1 2.2-2.3 2.4-3.3 3.1-4 1.6-7.4 2.5-10.6 3Z" class="cls-8"/><path d="M124.4 58c.4 5.8-.7 11.5-2.4 17.1h-.4c.1-1.2.3-2.4.4-3.6.2-2.2.5-4.5.4-6.7-.5-9.7-5.9-20.9-12.8-21.3h-1.1v-.2c-.2-2.9-2.3-5.3-4.9-6.5-.3-.1-.5-.2-.8-.3 4-.6 8 .5 11.4 2.6 1.5.9 2.8 2 4 3.3 3.2 3.4 5.1 7.9 5.9 12.5.2 1.1.3 2.2.4 3.3Z" class="cls-4"/><path d="M123.6 231.8c1.9 5.8-2.7 13.3-5.6 23.9-3 11-6.7 22.3-10.6 32.8v.2l-.2.2c-1.2 1-.7 2.4-1.4 3.8s-1.5 2.8-2.9 3.6c-2.4 1.3-7-.4-8-2.8v-1.2c-.3-11.2-1.2-28.3 2.3-38.7.8-2.2 1.5-4.6 2.2-7.1 1.6-2 3.9-2.5 6.7-4.4 3.7-2.4 7.7-4.1 11.5-6.4 2.1-1.2 4-2.6 5.9-4.1h.1Zm-1.3-167.1c.1 2.2-.1 4.5-.4 6.7-.1 1.2-.3 2.4-.4 3.5-.2 1.6-.4 3.2-.5 4.9-.4 3.3-1.8 5.6-3.1 7.6h-.2c-2.2 3.9-3.3 4.7-4.8 6.2-1.9 2-3.9 4-6.1 5.3-4.8 2.9-10.8 2.8-20.2-6.8-.7-.8-1.5-1.6-2.3-2.5-.8-1.3-1.6-2.5-2.2-3.7-1.5-2.8-2.6-5.6-3.3-9.3-2.8.8-4.8-4.4-4.1-7.2 2.3-8.4 5.4-2.6 7.9-5.2s3.4-9.3 5.9-12c7.4-7.9 12.4-9.3 19.8-8.9h1.1c6.8.5 12.3 11.6 12.8 21.3Zm-2.1-2.4c.4-.3.1-1-.2-1.4-.9-.9-2.1-1.4-3.4-1.5-1.3 0-2.6 0-3.8.2-1 .2-1.8.8-1.9 1.4 0 .7.7 1.5 1.8 1.6.4 0 .8 0 1.2-.1 1.8-.4 3.8 0 5.6 0 .3 0 .5 0 .8-.2Zm-3.4 8.8c.2-2-.5-3.7-1.6-3.8-1 0-2 1.5-2.2 3.5s.5 3.7 1.6 3.8c1 0 2-1.5 2.2-3.5M104 91.3c3.2-.2 4.8-1.4 6.3-3.9-5.5 1.9-15.8-1.5-16.8-2.7 1.9 3.6 1.9 2.8 3.7 4.2s4.9 2.5 6.8 2.4m-3-30.5c1.2-2.9-5.2-3.2-7.1-3-1.3.2-2.6.6-3.5 1.4-.4.3-.7.6-1 .9-.5.5 0 1.3.7 1.1 2.1-.7 5-.4 7 .2.7.2 1.5.6 2.2.5.8 0 1.5-.5 1.7-1.2Zm-3.7 8.8c.2-2.1-.6-3.9-1.6-4-1.1 0-2.1 1.5-2.3 3.7-.2 2.1.6 3.9 1.6 4 1.1 0 2.1-1.6 2.3-3.7" class="cls-8"/><path d="M120 60.9c.4.4.6 1.1.2 1.4-.2.2-.5.2-.8.2-1.8 0-3.9-.4-5.6 0-.4 0-.8.1-1.2.1-1.1 0-1.9-.9-1.8-1.6 0-.7.9-1.2 1.9-1.4 1.2-.3 2.6-.3 3.8-.2 1.3 0 2.5.5 3.4 1.5Zm-4.8 6.4c1 0 1.7 1.8 1.6 3.8-.2 2-1.2 3.6-2.2 3.5-1 0-1.7-1.8-1.6-3.8.2-2 1.2-3.6 2.2-3.5" class="cls-3"/><path d="M114.8 106.1c-2.2 0-4.4.2-6.6.3-.4 0-.9 0-1.2.4-.7.8.3 1.9 1.3 2.4.9.5 2 1.6 1.3 2.4-7 .9-13.8 2.7-20.3 5.4 3.8-1.7 14.6-10.3 17-14.3 0-.2.3-.2.7-3.5h.2c2.9.3 5.6 2.2 6.9 4.8.4.7.6 1.4.7 2.2Z" class="cls-6"/><path d="M105.6 157.9c0 .7-13.3.4-13.8 1.1-1.1 1.6-.6 5.1.2 7.9-1.7-.4-3.4-.8-5-1.1-1.2-2.8-3.7-11.3-3.8-14.5.5 0 .9-.2 1.2-.3 11.7 1.3 18.1 3.2 26.5 1.9-.8 3.3 1.3 15.1 1.4 20.3s0 .1 0 .1c-3.1-1-4.7-2-7.7-3.1.3-.7.6-1.2.8-1.7 1.4-3.8 1-6.5.2-10.5Z" class="cls-7"/><path d="M102.7 36.3c.3 0 .5.2.8.3 2.6 1.2 4.8 3.6 4.9 6.5v.2c-7.4-.4-12.4 1-19.8 8.9-2.5 2.7-3.4 9.4-5.9 12s-5.7-3.1-7.9 5.2c-.8 2.8 1.3 8 4.1 7.2.7 3.7 1.7 6.5 3.3 9.3H82c-8.7-6.6-12.9-18.7-10.1-29.4.5-2 1-3.1 1.9-4.9 1.3 1.9 3.1 0 4-1.6h.1q-.45.75-.3 1.5c.4 1.5.8.6 2.3.7 3.5-3.3 3.6-5.5 5.3-7.2-.8-.7 0-2.3-.9-2.9 1.8-.7 3.2-1.7 2.7-3.9 2.7-1.4 5.3-2 8.2-2.4 2.5-.4 5.2-.4 7.6.5Z" class="cls-4"/><path d="M110.3 87.5c-1.6 2.4-3.2 3.7-6.3 3.9-2 .1-5-.9-6.8-2.4-1.8-1.4-1.7-.6-3.7-4.2 1 1.2 11.3 4.6 16.8 2.7" style="stroke-width:0;fill:#fff"/><path d="M87.4 116.2c-1.6-3.2-2.5-14.4-1.6-19.2v-.2c.3-1.8.3-1.3.6-3.9v-.6l.3-.3c9.4 9.6 15.4 9.7 20.2 6.8-.4 3.5-.7 3.4-.7 3.7-2.5 4-13.2 12.6-17 14.2-.6.2-1 .3-1.2.2l-.1-.1c-.2-.1-.3-.4-.5-.7Z" class="cls-8"/><path d="M105.6 157.9c.8 4 1.2 6.7-.2 10.5-.2.5-.4 1.1-.8 1.7-1.8-.6-4.2-1.4-7.9-2.1-1.6-.4-3.2-.7-4.7-1-.9-2.8-1.3-6.3-.2-7.9.4-.6 13.8-.3 13.8-1.1Zm-.8-31.8c.2 4 .2 6.8-1.7 10.3-.5 1-1.5 2.3-2.6 3.3-1.7.3-3.3.4-5.1.6-1.7-1-3.8-2.7-4.3-3.6-1.1-2.1-2.1-9.4 0-11.6.5-.6 13.8 1.7 13.8 1Z" class="cls-7"/><path d="M93.8 57.8c2-.3 8.3 0 7.1 3-.3.6-1 1.1-1.7 1.2-.8 0-1.5-.3-2.2-.5-2-.7-4.9-.9-7-.2-.7.2-1.2-.6-.7-1.1.3-.3.7-.6 1-.9.9-.8 2.2-1.2 3.5-1.4Zm1.9 7.8c1.1 0 1.8 1.9 1.6 4s-1.2 3.8-2.3 3.7c-1.1 0-1.8-1.9-1.6-4s1.2-3.8 2.3-3.7" class="cls-3"/><path d="M63.2 121.5c-4.9 4.6-9.5 8.6-12.1 10.4-.4-.2-.8-.4-1.2-.7-4.4-2.9-7.9-8.2-9-11-.3-.7-.4-1.2-.4-1.5.2-1.1 13-14.8 13.8-15.5 4.4-4 7.7-7.2 13.5-8.4 1.9-.4 5.2-.9 11.3-.9-1.5 1-2.8 2.3-3.6 3.9 2.1 1.2 4.3 2.4 6.5 3.5-1.3.8-2.7 1.6-4 2.4-.3.2-.7.5-.8.9 0 .5.4.9.8 1.2 3.9 2.7 7 6.4 9 10.7 0 0 .2-.1.3-.2.1.3.3.5.5.7v.3c-3 5.5-4.5 11.6-4.4 17.8l-.2.3c-2.8-1.4-5.6-2.2-6.9-1.6-.4.2-.9.6-1.3 1.2l-1.9-.5c.4-.4.7-.9 1-1.3 2.2-3.2 2.7-5.9 3.3-9.9-.1.8-10.5-3.5-11.1-3-1.5 1.4-2.2 5.9-2.2 9h-.5c0-2.7 0-5.2-.4-7.8" class="cls-7"/><path d="M87.4 116.2s-.2.1-.3.2c-2-4.3-5.1-8-9-10.7-.4-.3-.9-.7-.8-1.2 0-.4.4-.6.8-.9 1.3-.8 2.7-1.6 4-2.4-2.1-1.2-4.3-2.3-6.5-3.5.8-1.6 2-2.9 3.6-3.8 2-1.2 4.4-1.6 6.6-1h.5c-.2 2.6-.3 2.1-.6 3.9v.2c-.9 4.8 0 16 1.6 19.2Z" class="cls-6"/><path d="M87 165.7c-3.7-.8-7.2-1.5-10.3-2 .1-.6.2-1.2.3-1.6.3-3.9-.6-6.5-2.2-10.2v-.4c2.9.4 6.4.2 8.5-.2.1 3.1 2.6 11.7 3.8 14.4Z" class="cls-7"/><path d="M77.7 50.1c-.9 1.7-2.7 3.5-4 1.6-.2-.3-.4-.7-.6-1.3-.9.6-2.5 1.7-3.4 1.1-1-.5-1.4-2.7-1.4-3.7-1.4.4-3.5-.3-3.6-1.6s.9-2.6 2.2-3.1c-1.6-.6-2.4-2.5-1.7-4s2.7-2.3 4.2-1.7c-.1-1.1-1-2.9 1.6-4.1 3.3-1.2 4 .8 5.2 2.4 1.5-3.4 5.5-2.3 4.6 1.4.9-.5 2-.9 3-.8 1.1 0 2.3.5 2.6 1.5 0 .2.1.4.2.6.5 2.2-.9 3.2-2.7 3.9-.6.2-2.7 3.5-3.8 5.1-.6.9-1.9 1.9-2.5 2.9h-.1Z" class="cls-4"/><path d="M84.2 42.2c.9.6.1 2.2.9 2.9-1.7 1.7-1.8 3.8-5.3 7.2-1.4 0-1.9.8-2.3-.7-.1-.5 0-1 .3-1.4.6-1 1.9-1.9 2.5-2.9 1.1-1.7 3.2-4.9 3.8-5.1Z" class="cls-6"/><path d="M66.3 120.3c.5-.5 11 3.7 11.1 3-.5 4-1 6.7-3.3 9.9-.3.4-.6.8-1 1.3-1.4 1.6-3.4 3.2-4.7 2.5-1.1-.5-3.8-3.9-4.1-5.3-.1-.5-.2-1.4-.2-2.4 0-3.1.7-7.6 2.2-9m8.4 31.6c1.6 3.7 2.5 6.3 2.2 10.2 0 .5-.1 1-.3 1.6-4.2-.7-7.8-.9-10.6-.4-1.5-2.7-3-6.6-2.4-8.5.2-.7 11.1-2.3 11.1-3Z" class="cls-7"/><path d="M63.5 134.7v-5.4h.5c0 1 0 1.9.2 2.4.3 1.4 3 4.7 4.1 5.3 1.3.6 3.3-1 4.7-2.5l1.9.5c-2.8 3.4-5.5 12.5-4.7 14.5.4 1.1 2.3 1.7 4.5 2v.4c0 .7-10.8 2.3-11.1 3-.6 1.9.9 5.8 2.4 8.5-2.3.4-4.1 1.4-5.3 3h-.3c-.5-8.3.9-10.7 2.9-31.6Z" class="cls-7"/><path d="M31.4 156.6c2.6.7 5 10.3 3.4 12.3-1.8 2.2-12.2 3.2-14 2-2.1-1.4.2-9.7 1.6-11.8 2.9-13.1 4.6-19.9 12.3-30.8 1.6-2.3 3.7-5 6.1-8 1.1 2.8 4.6 8.1 9 11-2 1.4-4.1 2.9-6 4.3-5 9.1-8.8 13.4-12.5 20.9Z" class="cls-8"/><path d="m63.5 121.3-.3.3c-4.9 4.6-9.5 8.6-12.1 10.4-.4-.2-.8-.4-1.2-.7-4.4-2.9-7.9-8.2-9-11-.3-.7-.4-1.2-.4-1.5.2-1.1 13-14.8 13.8-15.5 4.4-4 7.7-7.2 13.5-8.4 1.9-.4 5.2-.9 11.3-.9" class="cls-1"/><path d="M40.9 120.2s0 0 0 0c-2.4 3-4.5 5.8-6.1 8-7.7 11-9.4 17.8-12.3 30.8M50 131.3s0 0 0 0c-2 1.4-4.1 2.9-6 4.3-5 9.1-8.8 13.4-12.5 20.9 0 .2-.2.4-.3.6" class="cls-1"/><path d="M31.5 156.6c2.6.7 5 10.2 3.4 12.3-1.8 2.2-12.2 3.2-14 2-2.1-1.4.2-9.7 1.6-11.8m86-32.1c0 5.3.7 7.7 1.1 10.7.9-.3 1.8-.4 2.7-.4 6.8-.4 11.5 4.8 13.6 6.4.5.4.9.6 1.1.4.5-.6-.4-22.8-4.9-34.1-1.7-4.2-4.9-4.9-7.8-6.2m7.2 46c-4 1.6-7.4 2.5-10.6 3-8.4 1.3-14.9-.6-26.5-1.9" class="cls-1"/><path d="M112.2 137.4c-5.7 1.5-8.9 2.1-11.7 2.4-1.7.2-3.3.4-5.1.6-1.6.2-3.3.5-5.6 1-.2 0-.5.1-.7.2" class="cls-1"/><path d="M89.8 141.2c0-1.8-3.2-4.2-6.5-5.8-2.8-1.4-5.6-2.2-6.9-1.6-.4.2-.9.6-1.3 1.2-2.8 3.4-5.5 12.5-4.7 14.5.4 1.1 2.3 1.7 4.5 2 2.8.4 6.3.2 8.4-.2.5 0 .9-.2 1.2-.3m41.4-8c0 .3 0 .5-.1.8-.2 1.1-.5 2.1-1 3-1.1 2.2-2.3 2.4-3.3 3.1m-60.8 18.7c0 .9.2 2 .3 3.1m2.4-37c-2 20.9-3.4 23.3-2.9 31.6 0 .7 0 1.5.2 2.3m50.2-15.8s0 0 0 0c-.8 3.3 1.3 15.1 1.4 20.3h0m-50.4-58.7c.6 2.7 1 5 1.2 7.1.3 2.6.4 5.1.4 7.8v6.3m60.1 96.2c1.9 5.8-2.7 13.3-5.6 23.9-3 11-6.7 22.3-10.6 32.8m-8.6-56.7c1.7 3.5 2.1 6.4 1.5 10.3-.2 1.4-.5 2.9-.9 4.4-.6 2.4-1.4 4.9-2.2 7.1-3.5 10.4-2.7 27.5-2.3 38.7v.4" class="cls-1"/><path d="M60.8 166.7c0 .6 0 1.2-.1 1.9h0c-.4 14.3 8.7 25.7 13.6 30.3q0 0 0 0m38.2-25.8c9.4 3.9 23.9 8.4 35.9 15.4.4.2.8.5 1.2.7m-9.5 14.7h.1c12.8 11.6 18.4 4.5 39.5 13.1.2 0 .3.1.5.2m8.4-13.2c-16-5.9-23.1-8.9-39-14.8m30.7 28.1c1 4.2 11.6-7.2 11-8.6-.3-.8-2.9-1.8-3-3.3 0-.6.1-1 .4-1.4.4-.6 1.1-.9 2-1.1h.3" class="cls-1"/><path d="M185.4 229.8c1.1.6 2.4.2 3.6-.2 9.9-3.3 19.8-6.6 29-11.4 3-1.6 6.1-3.5 7.7-6.5s1-7.3-2.1-8.7c-1.4-.6-3.1-.5-4.7-.4-9.2.6-18.7 2.2-27.7.4m-11.5 14.1c0 4 3.7 8.6 5.5 12.3m-72.5-56.1h-.3c-3.1-1.1-4.7-2.1-7.7-3.2-1.8-.7-4.2-1.4-7.9-2.2-1.6-.4-3.2-.7-4.7-1-1.7-.4-3.4-.8-5-1.1-3.7-.8-7.2-1.5-10.3-2-4.2-.7-7.8-.9-10.6-.4-2.3.4-4.1 1.4-5.3 3" class="cls-1"/><path d="M107 99.1c-.4 3.3-.7 3.3-.7 3.5-2.5 4-13.2 12.6-17 14.2-.6.2-1 .3-1.2.2l-.1-.1c-.2-.1-.3-.4-.5-.7-1.6-3.2-2.5-14.4-1.6-19.2m22.1 20.4c0 3 .4 6.1.4 9.7" class="cls-2"/><path d="M94.9 293.5c1 2.5 5.6 4.1 8 2.8 1.4-.8 2.2-2.2 2.9-3.6s.2-2.8 1.4-3.8c0 0 .2-.1.2-.2 1.1-.8 1.6-.9 2.6.2h0" class="cls-1"/><path d="M94.5 292.3c-1.4 3.2-2.4 6.6-2.9 10.1-.1.8-.2 1.6.2 2.4.6 1 1.8 1.4 3 1.7 9.6 2.5 19.3 5 29.2 6 3.2.3 6.7.5 9.6-1 2.9-1.4 4.7-5 3-7.5-.8-1.2-2.2-2-3.5-2.7-7.6-4.1-15.3-8.2-22.9-12.4m38.5-100.6c-.1 0-.3.1-.4.2-3.1 1.7-5.2 4.9-6.4 8.2-.8 2.1-1.2 4.7-1.6 7.3-.3 1.6-.5 3.3-.9 4.7-2.6 9.4-8.3 17.1-15.8 23-1.9 1.5-3.8 2.8-5.9 4.1-3.8 2.3-7.8 4-11.5 6.4-2.9 1.9-5.1 2.3-6.7 4.4-.5.6-.9 1.3-1.2 2.2m-24-49.9c8.8 9.7 17.7 21.7 24.5 32.9m-24.6-33.1.1.1M85.8 97v-.2c.3-1.8.3-1.3.6-3.9v-.6m31.4-4.8c-2.2 3.9-3.3 4.6-4.8 6.1-1.9 2-3.9 4-6.1 5.3-4.8 2.9-10.8 2.8-20.2-6.8-.7-.8-1.5-1.6-2.3-2.5m9-20.4c-.2 2.1.6 3.9 1.6 4 1.1 0 2.1-1.6 2.3-3.7s-.6-3.9-1.6-4c-1.1 0-2.1 1.5-2.3 3.7m17 9.9c-.5 4.6-4.7 3.6-8.9 3" class="cls-1"/><path d="M110.3 87.5c-5.5 1.9-15.8-1.5-16.8-2.7 1.9 3.6 1.9 2.8 3.7 4.2s4.9 2.5 6.8 2.4c3.2-.2 4.8-1.4 6.3-3.9" class="cls-1"/><path d="M118 87.5c1.2-2.1 2.7-4.3 3.1-7.6.2-1.6.4-3.2.5-4.9.1-1.2.3-2.4.4-3.5.2-2.2.5-4.5.4-6.7-.5-9.7-5.9-20.9-12.8-21.3h-1.1c-7.4-.4-12.4 1-19.8 8.9-2.5 2.7-3.4 9.4-5.9 12s-5.7-3.1-7.9 5.2c-.8 2.8 1.3 8 4.1 7.2.7 3.7 1.7 6.5 3.3 9.3.6 1.2 1.4 2.4 2.2 3.7.1.2.2.3.3.5" class="cls-1"/><path d="M101 60.8c-.3.6-1 1.1-1.7 1.2-.8 0-1.5-.3-2.2-.5-2-.7-4.9-.9-7-.2-.7.2-1.2-.6-.7-1.1.3-.3.7-.6 1-.9.9-.8 2.2-1.2 3.5-1.4 2-.3 8.3 0 7.1 3Zm12.9 1.7c-.4 0-.8.1-1.2.1-1.1 0-1.9-.9-1.8-1.6 0-.7.9-1.2 1.9-1.4 1.2-.3 2.6-.3 3.8-.2 1.3 0 2.5.5 3.4 1.5.4.4.6 1.1.2 1.4-.2.2-.5.2-.8.2-1.8 0-3.9-.4-5.6 0Zm-.9 8.3c-.2 2 .5 3.7 1.6 3.8 1 0 2-1.5 2.2-3.5s-.5-3.7-1.6-3.8c-1 0-2 1.5-2.2 3.5m11.2-16.1c.3-.9.8-1.5.5-2.4 3 1.6 4.9-1.6 2.3-3.8 1.7-.7 3.6-.9 3.4-4-.4-2.6-2.3-2.3-3.3-2.4.9-1.2.7-3.2-.4-4.1s-3-.7-4 .5c-.2-1.2-1-2.4-2.2-2.7-1.2-.2-2.3 1.5-2.3 2.7-.9-.3-2.9-.4-3.6.3M73.7 51.7c-1 1.8-1.4 2.9-1.9 4.9-2.8 10.7 1.4 22.8 10.1 29.5m26.5-42.9c-.2-2.9-2.3-5.3-4.9-6.5-.3-.1-.5-.2-.8-.3-2.4-.9-5.1-.9-7.6-.5-3 .4-5.6 1-8.2 2.4" class="cls-1"/><path d="M102.5 36.4h.2c4-.6 8 .5 11.4 2.6 1.5.9 2.8 2 4 3.3 3.2 3.4 5.1 7.9 5.9 12.5.2 1.1.3 2.2.4 3.3.4 5.8-.7 11.5-2.4 17.1m-37.8-33c1.8-.7 3.2-1.7 2.7-3.9 0-.2-.1-.4-.2-.6-.4-1-1.6-1.4-2.6-1.5-1.1 0-2.1.3-3 .8.8-3.6-3.1-4.7-4.6-1.4-1.2-1.6-2-3.6-5.2-2.4-2.7 1.2-1.7 3.1-1.6 4.1-1.6-.6-3.6.2-4.2 1.7-.7 1.5.2 3.4 1.7 4-1.3.5-2.3 1.8-2.2 3.1s2.2 2 3.6 1.6c0 1 .4 3.2 1.4 3.7s2.5-.6 3.4-1.1c.2.5.4.9.6 1.3 1.3 1.9 3.1.1 4-1.6.3-.5.5-1 .5-1.4" class="cls-1"/><path d="M83.1 42.5c.3-.1.7-.2 1-.3m-6.2 8c.6-1 1.9-1.9 2.5-2.9 1.1-1.7 3.2-4.9 3.8-5.1q0 0 0 0t0 0c.9.6.1 2.2.9 2.9-1.7 1.7-1.8 3.8-5.3 7.2-1.4 0-1.9.8-2.3-.7-.1-.5 0-1 .3-1.4Z" class="cls-1"/><path d="M85.9 92.9c-2.2-.6-4.7-.1-6.6 1-1.5.9-2.8 2.2-3.6 3.8 2.1 1.2 4.3 2.4 6.5 3.5-1.3.8-2.7 1.6-4 2.4-.3.2-.7.5-.8.9 0 .5.4.9.8 1.2 3.9 2.7 7 6.4 9 10.7 0 0 .2-.1.3-.2.1 0 .3-.2.4-.3m19.3-16.8c2.9.3 5.6 2.2 6.9 4.8.4.7.6 1.4.7 2.2-2.2 0-4.4.2-6.6.3-.4 0-.9 0-1.2.4-.7.8.3 1.9 1.3 2.4.9.5 2 1.6 1.3 2.4-7 .9-13.8 2.7-20.3 5.4-.1 0-.3.1-.4.2m-1.2 0c-2.8 5.5-4.3 11.6-4.3 17.8m-.2 16.2v.1c.1 3.1 2.6 11.7 3.8 14.4" class="cls-2"/><path d="M104.8 126.1c.2 4 .2 6.8-1.7 10.3-.5 1-1.5 2.3-2.6 3.3" class="cls-1"/><path d="M95.9 140.6c-.1 0-.3-.2-.4-.3-1.7-1-3.8-2.7-4.3-3.6-1.1-2.1-2.1-9.4 0-11.6.5-.6 13.8 1.7 13.8 1m.6 31.8c.8 4 1.2 6.7-.2 10.5-.2.5-.4 1.1-.8 1.7" class="cls-1"/><path d="M92.2 167.3c0-.1 0-.3-.1-.4-.9-2.8-1.3-6.3-.2-7.9.4-.6 13.8-.3 13.8-1.1m-41.6-28.6c0-3.1.7-7.6 2.2-9 .5-.5 11 3.7 11.1 3-.5 4-1 6.7-3.3 9.9-.3.4-.6.8-1 1.3-1.4 1.6-3.4 3.2-4.7 2.5-1.1-.5-3.8-3.9-4.1-5.3-.1-.5-.2-1.4-.2-2.4m10.6 22.5s0 0 0 0c1.6 3.7 2.5 6.3 2.2 10.2 0 .5-.1 1-.3 1.6v.2" class="cls-1"/><path d="M66.1 163.4s0 0 0 0c-1.5-2.7-3-6.6-2.4-8.5.2-.7 11.1-2.3 11.1-3" class="cls-1"/></svg>')}`;
export default image;