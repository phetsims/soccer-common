/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#3a3a3a}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#302926}.cls-3{fill:#9bc1d5}.cls-4{fill:#a0715e}.cls-5{fill:#b2d4e4}.cls-6{fill:#fff}.cls-7{fill:none}</style></defs><path d="M63.8 112.8c-.3.8-5 2.8-5.2 3.1 0 0 .2 1.1 1.2 3 .7 3 1 5.5 1.1 7.9h0c.2 3.8 0 7.3-.1 12.1h.3c-1 8.5-2.1 14.5-2.6 19.6h0c-3.4 13.8-5.2 30.4-6.2 43.8-2.7-22.4-.8-53.2 6.2-74.7-3.8 2.8-11.7 7.7-16.4 11.4-2.5 4.4-4.2 7.1-6.2 10.2h0c-.2 0-.5-.2-.8-.3-3.2-1.3-6.6-1.5-10-1 1.7-5.3 4.1-10 8.3-16 3.3-4.8 9.9-13.4 13.2-16.8 2.3-2.8 7.3-10.4 13.5-14 .7.8 1.6.7 2.2 1.5 0 0 .1.2.2.3h0c-1.4.1-2.7.8-3.7 1.7 2.4 1.3 5.1 7.4 5 8Zm46.6 63.2c-1.2-.4-2.3-.9-3.4-1.3q0 0 0 0c-1.1-.4-2.2-.8-3-1.1q0 0 0 0c-1.8-.7-3.6-1.6-6.3-2.4-2.5-4-4.2-8.6-4.8-13.3v-.4c.8 0 1.6.1 2.4.2v-2.1h0c4.1.4 7.6.5 11.8-.3 0 4.2 1.9 15.4 3.3 20.7" class="cls-3"/><path d="M119.4 149.7c-1.1 2.1-2.2 2.3-3.2 2.9-3.5 1.3-6.4 2.2-9.1 2.7-4.2.8-7.7.7-11.8.3h0c0-4.2 0-8.4-.3-12.7 0-.7 0-1.4-.1-2.1 0 .3-1.1.6-2.3 1h0c0-2.7.4-5.3.8-7.8h0c3.2-4.9 6.5-7.8 10.1-11.1.6-.6 1.2-1.1 1.5-1.9.6-1.8-.8-3.5-2.2-4.8 3.4-1.3 7.2-1.8 10.8-1.5-.2-2.4-1.4-4.8-3.3-6.4h.2c3.4 1.9 5.6 5.1 7.1 9.1 2 5.4 1.8 12.6 2.4 17.9.3 3.5 1.1 11.1-.6 14.5Z" class="cls-3"/><path d="M124 64.4c-4.7-2.4-6.5-6.1-7.5-11.2v-.1c-9 5.4-20 7.6-30.4 5.9-2.5 7.2-5.4 28.2.5 33 4.6 3.9 14.9 8.2 17.5 7.8 4.2-.7 10.2-6.3 10.2-6.3 8.2-6.6 6.5-20.7 7.6-22.6.9-1.6 1.8-3.6 2.4-6.4h-.5Zm-26 5.5c.3-1.5 1.3-2.5 2.3-2.3.9.2 1.4 1.5 1 3-.3 1.5-1.4 2.5-2.3 2.4-.9-.2-1.4-1.5-1-3Zm.3 13.9c4.6 3.1 7.8 3.6 12.8 4.1-3.5 6.1-11.6 5.7-12.8-4.1m19.9-9.3c-.4 1.5-1.4 2.6-2.2 2.5-.9-.2-1.3-1.6-.9-3.1s1.4-2.6 2.2-2.5c.9.2 1.3 1.6.9 3.1m-84.7 96.4c-1.7 2.1-11.7 3-13.3 1.9-2-1.4.2-9.2 1.5-11.2.5-2.3 1.3-3.6 1.8-5.5 2.6.6 5.2.8 7.9.9-.5.9-.8 1.4-1.2 2.2h0c2.5.7 4.8 9.8 3.2 11.8Z" class="cls-4"/><path d="M25.1 148s0 0 0 0m5.1 11.1c0 .2-.2.4-.3.6M59.4 127c-3.3 2.6-12.2 8.1-17.3 12.1-2.4 4.4-4.2 7.1-6.2 10.2m50-4.8c-.2 0-.4 0-.7.1m25-4c-7.1 1.9-10.9 2-15.2 2.4m-35.3 33.1s0 0 0 0" class="cls-7"/><path d="M87.7 144.2v.6c-.1 3.2-.1 6.5-.2 9.7h0c-2.1-.3-4.1-.6-6.6-.9-2.7 1-12.5 1.3-13.5-1.4-.9-2.2 2.8-13.5 5.8-15 2.8-1.3 12.8 4 12.9 7.1h0c.6 0 1.1 0 1.8-.2Z" class="cls-4"/><path d="M117.9 228.7c-1.3 10.9-2.3 14.9-5 25-2.8 10.5-5.8 21.2-9.5 31.3l.2.2c-.4.3-.7.7-1 1.1-3.6 1.8-7.8 2.4-11.8 1.9-.3-10.8-.9-27 2.3-36.5 1.2-3.4 2.4-7.4 2.9-11 .5-3.7.2-6.4-1.5-9.8-1.3-3.8-11.4-12.8-17.6-24.9q-1.8-3.45-3-7.2c.8.2 1.7.5 2.6.7 13 3.2 24 4.3 35.5 5.4v1.1c3.1 11.3 6.3 14.1 5.9 22.8Z" class="cls-1"/><path d="M172.2 217h-.1" class="cls-7"/><path d="M172.3 216.7s0 .2-.2.3c-20.4-8.4-23.1-.2-35.5-11.5-10.9-2-12.3.1-19.7-.1h-.4c-1.5-.1-3.1-.3-4.6-.4-11.5-1.1-22.5-2.2-35.5-5.4-1-.2-1.8-.5-2.6-.7q-1.65-.45-2.7-.9c-4.9-2.5-11.5-9.3-11.5-21.8h0c0-1.1 0-2.2.1-3.3 1.5-10 15.7-6.7 32.7-2.9 2 .4 3.7.9 5.1 1.4 2.8.9 4.6 1.7 6.3 2.4q0 0 0 0c1 .4 1.9.8 3 1.1q0 0 0 0c1 .4 2.2.8 3.4 1.3 4.7 1.8 10 3.9 12.3 4.8 9.3 3.8 8.6 2.3 20.2 9.4 13.1 4.8 21 7.9 32.7 12.2.2 4.9-1 9.9-3.4 14.2Z" class="cls-1"/><path d="M172.4 216.7h-.1c2.4-4.3 3.6-9.3 3.4-14.2 1.9.7 3.9 1.5 6.1 2.2 0 1.5.5 2.4 1.1 3.8s-9.5 12.2-10.5 8.2" class="cls-4"/><path d="M218.1 210.6c-1.7 3-4.8 4.9-7.8 6.5-9.3 4.9-19.3 8.4-29.3 11.8-1.2.4-2.5.8-3.6.3h-.3c-.4-.4-.6-.9-.9-1.4-1.7-3.5-3-7.3-3.8-11.1 1 4 11.1-6.9 10.5-8.2s-1.1-2.2-1.1-3.8h1.2c9-.8 19.9-2 28.7-2.8 1.6-.1 3.3-.3 4.7.3 3 1.3 3.5 5.5 1.9 8.5ZM97.7 171.2c-1.4-.5-3.1-.9-5.1-1.4-17-3.7-31.2-7.1-32.7 2.9 0 1.1-.1 2.2-.1 3.3-1.8-6.4-1.9-11.3-1.2-17.4h0c.6-5.2 1.6-11.2 2.6-19.6.3-2.6.6-5.4.9-8.5 1.1-6 2.1-8.8 4.3-14.4 1.1 5.4 3.1 10.2 10.2 11.3 9.7 2.7 15.9-.6 19.5-4.2h0c-1.2 3.5-2.1 7.1-2.7 10.7h0c-.4 2.6-.7 5.2-.8 7.8h0c-1.2.4-2.4.7-2.7.7-1.6.4-2.1.4-2.2 1.8-.7.1-1.1.2-1.8.3h0c-.1-3.2-10.1-8.5-12.9-7.2-3 1.4-6.7 12.7-5.8 15 1 2.7 10.9 2.4 13.5 1.4 2.6.3 4.5.6 6.6.9h0v2.5c1.8.2 3.6.3 5.5.5v.4c.6 4.7 2.2 9.3 4.8 13.3Z" class="cls-6"/><path d="M108.9 175.2c-.7-.1-1.2-.2-1.8-.4m-1.1-51.1c.1.9 2.2 16.7 2.3 17.7m4.8-61.4c.4 2.4 0 6-8.3 2.1" class="cls-7"/><path d="M126.4 46.6c-3.2-5.9-5.3-6.5-10.9-10.1-14-9.1-33.3-4.8-42.2 6.8-2.8 3.6-5.1 7.6-6.8 11.8-5.4 13-6.2 27.4-6.4 41.5 0 1-.6 4.1.1 4.8.7.8 1.6.7 2.2 1.5 0 0 .1.2.2.3 2.4 3.3 2.8 8.3 3.8 13h0c1.1 5.4 3.1 10.3 10.2 11.4 9.7 2.7 15.9-.6 19.5-4.2 2.8-2.8 4-5.6 4.2-6 1.6-4 6.2-6.6 10.1-8.9h.2c2.4-1.4 4.5-2.8 5.3-4.3 5.4-9.5 9.8-15.4 11.8-26.1 2.6-13.8 1.3-26.8-1.1-31.2Zm-1.9 17.9c-.6 2.8-1.5 4.7-2.4 6.4-1.1 1.9.6 16-7.6 22.6 0 0-6.1 5.6-10.2 6.3-2.6.4-12.8-3.9-17.5-7.8-5.9-4.8-3-25.8-.5-33 4.1-11.8 13.8-13.8 17.5-14.6 7.2-1.6 19.1 0 21.2 16.1 0 1.6-.3 2.9-.5 4.2Z" class="cls-1"/><path d="M111.2 87.9c-3.5 6.1-11.6 5.7-12.8-4.1 4.6 3.1 7.8 3.6 12.8 4.1" class="cls-6"/><path d="M125 60.3c0 1.6-.3 2.9-.5 4.2h-.5c-4.7-2.5-6.5-6.2-7.5-11.3v-.1h.1-.1c-9 5.4-20 7.6-30.4 5.9 4.1-11.8 13.8-13.8 17.5-14.6 7.2-1.6 19.1 0 21.2 16.1Z" class="cls-2"/><path d="M95.3 155.6v2.1c-.8 0-1.6-.1-2.3-.2-1.8-.2-3.7-.3-5.5-.5v-2.5c0-3.2 0-6.5.2-9.7v-.6c.2-1.3.6-1.4 2.2-1.8.3 0 1.5-.3 2.7-.7 1.2-.3 2.3-.7 2.3-1 0 .7 0 1.4.1 2.1.2 4.2.3 8.4.3 12.7ZM37 152.8c-.2 1.2-.4 2.6-1.4 3.4-.7.5-1.6.6-2.4.6h-1.9c-2.6 0-5.3-.3-7.9-.9-.2 0-.4 0-.6-.1-.5-.1-1.1-.3-1.4-.7s-.3-1-.2-1.5c.3-2.8.9-5.1 3.8-5.6h.2c3.4-.5 6.8-.4 10 1 .3.1.5.2.8.4s.6.4.9.8c.5.8.4 1.8.3 2.7Z" class="cls-5"/><path d="M66.3 116s0 0 0 0" class="cls-7"/><path d="M76.9 206c-3.5 2.1-20.5-3.2-24.7-3.6 1-13.3 2.9-30 6.2-43.7-.6 6.1-.6 11 1.2 17.4h0c0 12.5 6.6 19.3 11.5 21.8q1.05.45 2.7.9 1.2 3.75 3 7.2Z" class="cls-3"/><path d="M97.8 171.5v-.2" class="cls-7"/><path d="M102.7 116.1c1.3 1.3 2.8 3.1 2.2 4.8-.3.8-.9 1.4-1.5 1.9-3.5 3.3-6.9 6.2-10.1 11.1.6-3.6 1.5-7.2 2.7-10.7h0c2.8-2.8 4-5.7 4.2-6.1 1.6-4 6.2-6.6 10.1-8.9 1.9 1.6 3.1 3.9 3.3 6.4-3.7-.3-7.4.2-10.8 1.5Z" class="cls-5"/><path d="M110.3 108.2s0 0 0 0" class="cls-7"/><path d="M66.3 116.1c-2.2 5.7-3.2 8.5-4.3 14.5-.3 3.1-.6 5.9-.9 8.5h-.3c0-4.9.3-8.4.1-12.1h0c-.1-2.4-.5-4.9-1.1-7.9-1-1.9-1.2-3-1.2-3 .1-.3 4.9-2.3 5.2-3.1.2-.6-2.5-6.7-5-8 1-1 2.3-1.6 3.7-1.7h0c2.4 3.3 2.8 8.3 3.8 13Z" class="cls-5"/><path d="M118.2 74.5c-.4 1.5-1.4 2.6-2.2 2.5-.9-.2-1.3-1.6-.9-3.1s1.4-2.6 2.2-2.5c.9.2 1.3 1.6.9 3.1m-17-3.9c-.3 1.5-1.4 2.5-2.3 2.4-.9-.2-1.4-1.5-1-3 .3-1.5 1.3-2.5 2.3-2.3.9.2 1.4 1.5 1 3Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M116.5 53.1s0 0 0 0" class="cls-7"/><path d="M105 61.9c0 .3.2.7 0 1s-.4.7-.8.8c-.7.2-1.4-.2-2-.5-2-1-4.6-1.4-7-1 .1-.1.2-.3.4-.4l.5-.2c3.8-2.2 7.2-1.6 9 .3h0Zm15.9 6c.2-2.5-3.4-3.1-5.2-2h-.2c-.5.2-.4.9 0 1.2s1.2.4 1.9.5 1.3 0 1.9.3c.4.2.7.4 1.1.4s.9-.2.7-.5h-.3Z" class="cls-2"/><path d="M102.5 286.3c-.6.8-1 1.7-1.5 2.5-.8 1.4-1.6 2.9-3.2 3.7-2.6 1.3-6.1-.2-7.2-2.7h0v-1.6c4 .5 8.2-.1 11.8-1.9Z" class="cls-4"/><path d="M90.7 289.8v-.1" class="cls-7"/><path d="M133.3 312.1c-3.4 1.7-7.6 1.6-11.5 1.2-11.9-1.2-21-4.2-32.5-7.2-1.4-.4-2.9-.8-3.6-2-.5-.9-.4-1.9-.2-2.8.6-4.2 1.8-8.3 3.5-12.2l.4-1.1c.4 0 .9.2 1.3.2v1.6h0c1.1 2.5 4.6 4 7.2 2.7 1.5-.8 2.4-2.3 3.2-3.7.5-.9.9-1.8 1.5-2.5.3-.4.6-.8 1-1.1.1-.1.2-.2.4-.3 1.3-1 2.6-1.2 3.8 0h.1c9.2 5 15.8 9.9 25 14.9 1.6.9 3.2 1.8 4.2 3.2 2 3.1-.2 7.4-3.6 9.1Z" class="cls-6"/><path d="M58.5 158.6s0 0 0 0m113.6 58.3s0 0 0 0" class="cls-7"/></svg>')}`;
export default image;