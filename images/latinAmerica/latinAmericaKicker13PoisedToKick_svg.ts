/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{stroke-width:0}.cls-4{fill:#231c19}.cls-5{fill:#a4b4ee}.cls-6{fill:#8c624d}.cls-7{fill:#736b46}</style></defs><path d="M136.1 303.7c1.1 1.7 1.5 3.2 1.1 4.5l-.9-.3c-4.6.1-9.2 0-13.7-.6v-.7c1.3-.6 2.5-1.3 3.5-2.2s1.8-2.1 1.9-3.5c.1-1.2-.4-2.4-1.3-3.1 1.7.9 3.6 1.9 5.6 3 1.4.8 2.9 1.4 3.8 2.7Z" class="cls-6"/><path d="m136.3 307.9.9.3q-.45 1.35-2.4 2.4c-3.1 1.6-6.9 1.5-10.4 1.1-10.8-1.1-14.6-2.4-25.1-5.2-1.3-.3-2.6-.8-3.3-1.8-.4-.8-.4-1.7-.2-2.6 0-.4.1-.7.2-1.1 6.3 2.4 12.9 4.2 19.6 5.3 2.3.4 4.7.7 7 1 4.6.5 9.1.7 13.7.6" class="cls-7"/><path d="M134.8 170.5c1.5 3.6-2.3 7.3-5.2 9.7s-4.7 3.3-7.7 1.1c-1.4-1.1-2.6-2.6-3-4.5v-.4c-.3-3.5 5.7-10.2 6.9-10.5 3.5-1.2 7.6.9 9 4.6" class="cls-6"/><path d="M126.7 298c.9.7 1.4 1.9 1.3 3.1-.1 1.3-.9 2.5-1.9 3.5s-2.2 1.6-3.4 2.2v.7c-2.4-.2-4.7-.6-7.1-1s.1-.7.1-.7c.1 0 .5-.4.6-.5 2.2-2.1 3.7-5 4.1-8 .1-1.1 0-2.5-1.1-3v-.2c2.5 1.3 4.8 2.5 7.3 3.9Z" class="cls-7"/><path d="M109.8 289.2h.9c3.3 1.9 6.1 3.4 8.8 4.9v.2c.9.5 1.1 1.9 1 3-.4 3-1.9 5.9-4.1 8 0 0-.5.4-.6.5v.7c-6.8-1.1-13.4-2.9-19.7-5.3.6-3.4 1.5-6.4 2.9-9.6-.5-6.2-1.6-18.7-3.5-26.3-1.1-6.3-3.6-16.1-2.4-25.9l-.2-.3c6.2-3.5 13-4.1 20.3-3.7 1.6 4-.4 18.2-1 25.8l-.2.3c-.7 7-.9 18.9-2.2 27.8Zm16-123.3c-1.2.3-7.2 7-6.9 10.5h-.2c-3-8.7-21.4-20.9-21.2-27.6h-.6v-2.4h.5c3.7-1 5.7-2.8 9-5.2l.6.2c4.1 6.1 11.8 19.3 18.7 24.4Z" class="cls-6"/><path d="M46.7 239.1c-1-.5-2-1.1-3-1.7.4-1.7.8-3.3 1.1-4.8 2.2-11.9 0-33.7 2.8-47.2v-.2c16.7 5 29 7.5 46.4 5.8 4.5 7.8 16.3 32.3 20.1 44.2h-.8c-7.2-.4-14 .2-20.3 3.7-.4.2-.8.5-1.2.7-.2-1.2-.5-2.2-.8-2.8-3.9-7-10.8-16.3-16.4-22.1h-.1c-4.7 14.9-6.7 22.7-8.5 27.9v.4h-.6c-5.3 0-12.6-1.1-18.6-4Z" class="cls-7"/><path d="M86.5 103.2v.2c-2.2 1.9-4.1 3-7.2 2.4s-7.5-2.9-9.6-5.3c-.5-.5-2.2-2.6-2.9-2.5l.2-.2c.8-1.8.6-6 .1-10.1-.2-2.2-.5-4.3-.8-5.9-.5 0-1-.2-1.5-.4-1.6-.8-2.7-2.6-3.2-4.5-.3-1.1-.4-2.3-.2-3.4.2-1.8.9-3.6 2.3-4.5s3.5-.5 4.2 1.1c.5 1.2 1.1 1.3 2.4 1s4.2-10.1 5.8-13.6c.9-2 3.3-4.8 5.3-5.8 2-1.1 5.1-1.4 6.9-.2 2 1.3 5.6 3.9 7.6 5.4 1.5 1.1 7.2 4.2 12 3.8 4.4-.4 5.2-1 5.5 0 0 1.5 0 3.1-.3 4.7-.9 4.6-.7 5.2-1.7 8.5-1.3 4.2-2 4.4-2.7 6.7-.6 2-.6 10-8.1 18.1 0 0-4.3 5.1-8.2 5.8-.7.1-2-.1-3.8-.7-.5-.2-1.1-.4-1.7-.6h-.2Zm19.6-23.7c.3-1.4 0-2.7-.9-2.9-.8-.2-1.8.8-2.1 2.3-.3 1.4 0 2.7.9 2.9.8.2 1.8-.8 2.1-2.3m-20.8 9.9c-1.5 6 8 10.5 12.2 5.2-4.7-.5-7.9-2.4-12.2-5.2m4.9-13.6c.3-1.4-.1-2.6-1-2.8s-1.8.8-2.1 2.2.1 2.6 1 2.8c.8.2 1.8-.8 2.1-2.2" class="cls-6"/><path d="M113.3 60.8c-.3-1-1.1-.4-5.5 0-4.8.4-10.5-2.7-12-3.8-2-1.5-5.6-4.1-7.6-5.4-1.8-1.2-4.9-.9-6.9.2-1.9 1.1-4.4 3.8-5.3 5.8-1.6 3.5-4.5 13.3-5.8 13.6s-1.9.3-2.4-1c-.7-1.6-2.8-2-4.2-1.1s-2.1 2.7-2.3 4.5c-.1 1.1 0 2.3.2 3.4l-.8.2c-.7-2.6-1-5.4-1.1-8.3-.4-8.9 4.7-24.2 16.6-27.2 19.8-5.1 33.5 4.6 35.7 11.8.5 1.5 1.2 4.2 1.3 7.3Z" class="cls-4"/><path d="M94 191.1c-17.4 1.7-29.7-.8-46.3-5.8-.3 0-.6-.2-.8-.3 1.8-5.3 1.5-5.9 2.4-11.4 1.4 1.1 3 2.3 4.6 3.5 1.3 2.2 8.3 8.1 10.9 7 2.1-.9 6.8-10.3 5.6-12.9-1.2-2.4-12-4.9-14.1-3-2.1-2.5-3.8-4.9-5.3-7.3 1.1-11.1 2.2-19 2.3-25.8h-.1c-2.4 4.7-4.8 8.7-6.2 10.3-.6-.7-1.3-1.3-2-1.9-4.7-4-12.1-7.6-12.5-8.8v-.3c.9-3.2 14-27.8 20.9-30.1 4.7-.7 7-1.4 12.1-2.3h.1c.5 4.6 10.5 10 13.9 10.2 1 0 5-1.1 5.8-1.6 3.8-2.5 2.7-6 1.6-7.2.6.2 1.2.4 1.7.6v.3c14.6 4.9 16 28.2 20 35.8-.7.5-1.4.9-2 1.4-3.3 2.4-5.3 4.2-9 5.2h-.5v2.4c-.4 13.9-2.2 27.6-2.7 42.2h-.2Zm-3.3-25.3c1.7-11.5 1.9-22.4 1.9-35.3 0-1.1-.1-2.3-.7-3.3-1.3-2.1-5.3-1.5-9.1-1.1-3.7.3-6.1.4-9.8.6-.5 0-1 0-1.5.4-.8.5-1.2 1.5-1.2 2.5-.4 12.5.2 22.3 1.1 35.6 0 1.3.4 2.8 1.4 3.6.8.7 2 .8 3.1.8h9.9c1 0 2.2 0 3.1-.6 1.1-.7 1.7-2.1 1.9-3.4Z" style="stroke-width:0;fill:#fbfbfd"/><path d="M105.2 76.6c.8.2 1.2 1.5.9 2.9s-1.3 2.4-2.1 2.3c-.8-.2-1.2-1.4-.9-2.9.3-1.4 1.3-2.4 2.1-2.3" class="cls-3"/><path d="M92.5 130.5c0 12.8-.2 23.8-1.9 35.3-.2 1.3-.9 2.7-1.9 3.4-.9.6-2 .6-3.1.6h-9.9c-1.1 0-2.2 0-3.1-.8-1-.8-1.3-2.3-1.4-3.6-.9-13.3-1.5-23.1-1.1-35.6 0-1 .5-2 1.2-2.5.4-.3 1-.3 1.5-.4 3.7-.3 6.1-.3 9.8-.6 3.8-.4 7.8-1 9.1 1.1.6.9.7 2.1.7 3.3Z" class="cls-5"/><path d="M97.5 94.7c-4.2 5.3-13.7.8-12.2-5.2 4.3 2.9 7.5 4.7 12.2 5.2" style="stroke-width:0;fill:#fff"/><path d="M89.2 73c.8.2 1.3 1.4 1 2.8s-1.3 2.3-2.1 2.2c-.9-.2-1.3-1.4-1-2.8s1.3-2.3 2.1-2.2" class="cls-3"/><path d="M86.7 103.3c1.1 1.2 2.2 4.7-1.6 7.2-.8.5-4.8 1.7-5.8 1.6-3.3-.2-13.4-5.6-13.9-10.2v-1.1c.2-.7.6-2.9 1.3-2.9s2.4 2 2.9 2.5c2.1 2.4 6.5 4.7 9.6 5.3s5.1-.5 7.2-2.4v-.2h.3Z" class="cls-5"/><path d="M49.2 173.6c-8.6-6.7-13.7-11.6-19.5-21.7-1.9-3.4-.5-10.4 2.6-17.6v.3c.4 1.2 7.8 4.8 12.5 8.8-1.3 1.9-1.3 2-2.9 4.2 3.9 5.3 6.3 9.4 8.8 13.2 1.6 2.4 3.2 4.8 5.3 7.4 2.1-2 12.9.5 14.1 2.9 1.2 2.6-3.4 12-5.6 12.9-2.5 1.1-9.5-4.8-10.9-7-1.7-1.2-3.2-2.4-4.6-3.5Zm-6.4 116.3c3.6 3.5 6.3 6.4 9.2 9.4 0 2.5-1.8 4.7-3.9 5.9-2.3 1.2-4.9 1.6-7.5 1.9l-.3.7c-5.9-2.9-10.9-6-14.3-9.9.4-1.4 1.1-2.9 1.9-4 1.4-2.1 1.9-3.5 3.5-4.6h.7c2-8.8 5.9-24.6 10.8-31.6 3.4-4.9 2.5-12.6 3.9-18.5 6 2.9 13.3 4.1 18.6 4-2 7.4-3 15.3-7.3 21.6v.2c-4 6.5-10.2 18.3-15.2 25Z" class="cls-6"/><path d="M62.7 312.5c.3 2.1-.3 3.5-2.9 4-3.4.7-5.9.7-9.2-.5-9.6-3.6-15.3-7.6-24-12.6-.9-1-1.1-2.4-1-4 0-.5.2-1.1.3-1.6 3.4 3.9 8.4 7 14.3 9.9 2.4 1.2 4.9 2.3 7.5 3.5 1.1.5 2.3 1 3.5 1.5 1.6.7 5.2 1.5 6.9 1.7s3.6-.4 4.4-1.9h.1Z" class="cls-7"/><path d="M62.7 312.5h-.1c-.8 1.5-2.7 2.1-4.4 1.9s-5.3-1.1-6.9-1.7c-1.2-.5-2.3-1-3.5-1.5l.4-1c3.5-.8 6.7-2.8 8.9-5.6l2.3 2.3c1.1 1.1 2.3 2.3 2.8 3.8.2.7.4 1.4.5 2Z" class="cls-6"/><path d="M67.1 87.7h-.2c-3.2-3-5.1-6.6-6.1-10.6l.8-.2c.5 1.9 1.6 3.7 3.2 4.5.4.2 1 .4 1.5.4.3 1.7.6 3.8.8 5.9" class="cls-4"/><path d="m48.2 310.2-.4 1c-2.6-1.2-5.2-2.3-7.5-3.5l.3-.7c2.6-.3 5.2-.6 7.5-1.9 2.2-1.2 4-3.4 3.9-5.9 1.6 1.7 3.3 3.4 5.1 5.3-2.2 2.8-5.4 4.9-8.9 5.6Z" class="cls-7"/><path d="M58.4 122.4c-1.3 3.9-3.3 8.5-5.4 12.6-2.4 4.7-4.8 8.8-6.2 10.3-.6-.7-1.3-1.3-2-1.9-4.7-4-12.1-7.6-12.5-8.8v-.3c.9-3.2 14-27.8 20.9-30.1m-4 69.4c-.9 5.5-.7 6.1-2.4 11.4.3 0 .6.2.8.3 16.6 5 28.9 7.5 46.3 5.8h.2c.5-14.6 2.3-28.3 2.7-42.2v-2.4c.2-7.9-.1-16-1.4-24.2m-42.3 12.8c0 6.8-1.1 14.6-2.3 25.7" class="cls-1"/><path d="M32.3 134.3c-3 7.2-4.5 14.2-2.6 17.6 5.8 10.1 10.9 15 19.5 21.7 1.4 1.1 3 2.3 4.6 3.5m-8.9-33.9s0 .1-.1.2c-1.3 1.9-1.3 2-2.9 4.2 3.9 5.3 6.3 9.4 8.8 13.2 1.6 2.4 3.2 4.8 5.3 7.4.1.2.3.3.4.5M87.6 104c.2 0 .5.1.7.2 14.7 4.9 16.1 28.2 20.1 35.8-.7.5-1.4.9-2 1.4-3.3 2.4-5.3 4.2-9 5.2" class="cls-1"/><path d="M56.2 168.2c2.1-1.9 12.9.5 14.1 3 1.2 2.6-3.4 12-5.6 12.9-2.5 1.1-9.5-4.8-10.9-7m43.6-28.2c-.1 6.6 18.3 18.9 21.2 27.6m-11.5-35c4.1 6.1 11.8 19.3 18.7 24.4" class="cls-1"/><path d="M125.8 165.9c-1.2.3-7.2 7-6.9 10.5v.4c.4 1.8 1.6 3.4 3 4.5 3 2.2 4.8 1.3 7.7-1.1s6.7-6.1 5.2-9.7-5.5-5.7-9-4.6m-72.6-61.6c4.7-.7 7-1.4 12.1-2.3m.6 140.8c1.8-5.3 3.8-13 8.5-28q1.65-5.4 3.9-12.3" class="cls-1"/><path d="M47.6 185.5c-2.8 13.4-.7 35.2-2.8 47.2-.3 1.6-.6 3.2-1.1 4.8.9.6 1.9 1.2 3 1.7 6 2.9 13.3 4.1 18.6 4h.8" class="cls-1"/><path d="M114.2 235.6c0-.1 0-.2-.1-.4-3.8-11.9-15.5-36.4-20.1-44.2m-19.5 23.8c5.6 5.7 12.5 15 16.4 22.1.3.6.6 1.6.8 2.8.4-.2.8-.5 1.2-.7 6.2-3.5 13-4.1 20.3-3.7h.8" class="cls-2"/><path d="M86.7 103.3c1.1 1.2 2.2 4.7-1.6 7.2-.8.5-4.8 1.7-5.8 1.6-3.3-.2-13.4-5.6-13.9-10.2v-1.1c.2-.7.6-2.9 1.3-2.9s2.4 2 2.9 2.5c2.1 2.4 6.5 4.7 9.6 5.3s5.1-.5 7.2-2.4" class="cls-1"/><path d="M92.2 104.6c-.7.1-2-.1-3.8-.7-.5-.2-1.1-.4-1.7-.6h-.2c-4.5-1.8-10.8-5.3-16-10.8M111.2 74c-1.3 4.2-2 4.4-2.7 6.7-.6 2-.6 10-8.1 18.1 0 0-4.3 5.1-8.2 5.8m16.1-31.2c-1.1-1.8-3.4-2.4-4.8-1.5m-18.4-4.2c3.6-1 7.1-.4 8.4 1.4m6.5 19.3c-.7 2-8.8.1-10-1.3m13.1-8.2c-.3 1.4 0 2.7.9 2.9.8.2 1.8-.8 2.1-2.3s0-2.7-.9-2.9c-.8-.2-1.8.8-2.1 2.3m-16-3.7c-.3 1.4.1 2.6 1 2.8.8.2 1.8-.8 2.1-2.2s-.1-2.6-1-2.8-1.8.8-2.1 2.2m10.4 19.5c-4.7-.5-7.9-2.4-12.2-5.2" class="cls-1"/><path d="M97.5 94.7c-4.2 5.3-13.7.8-12.2-5.2m-19.1-7.7c.3 1.6.6 3.7.8 5.9.4 4 .6 8.3-.1 10.1" class="cls-1"/><path d="M111.2 74c1.1-3.3.8-3.9 1.7-8.5.3-1.6.4-3.2.3-4.7-.1-3.1-.8-5.7-1.3-7.3-2.2-7.2-15.9-16.9-35.7-11.8-11.9 3.1-17 18.4-16.6 27.2.1 2.9.4 5.7 1.1 8.3 1 4 2.8 7.6 6.1 10.6" class="cls-1"/><path d="M68.2 80.8c-.4.8-1.1 1.1-1.9 1-.5 0-1-.1-1.5-.4-1.6-.8-2.7-2.6-3.2-4.5-.3-1.1-.4-2.3-.2-3.4.2-1.8.9-3.6 2.3-4.5s3.5-.5 4.2 1.1c.5 1.2 1.1 1.3 2.4 1s4.2-10.1 5.8-13.6c.9-2 3.3-4.8 5.3-5.8 2-1.1 5.1-1.4 6.9-.2 2 1.3 5.6 3.9 7.6 5.4 1.5 1.1 7.2 4.2 12 3.8 4.4-.4 5.2-1 5.5 0" class="cls-1"/><path d="M72.9 126.8c-.5 0-1 0-1.5.4-.8.5-1.2 1.5-1.2 2.5-.4 12.5.2 22.3 1.1 35.6 0 1.3.4 2.8 1.4 3.6.8.7 2 .8 3.1.8h9.9c1 0 2.2 0 3.1-.6 1.1-.7 1.7-2.1 1.9-3.4 1.7-11.5 1.9-22.4 1.9-35.3 0-1.1-.1-2.3-.7-3.3-1.3-2.1-5.3-1.5-9.1-1.1-3.7.3-6.1.4-9.8.6Z" class="cls-2"/><path d="M57.9 264.9c-3.9 6.5-10.1 18.3-15.1 25-.5.7-1 1.4-1.5 1.9m5.5-53.1v.4c-1.4 5.9-.4 13.6-3.9 18.5-4.9 7-8.8 22.9-10.8 31.8-.1.5-.2 1-.3 1.4m63.6-25.6c1.9 7.5 3 20 3.5 26.3.2 2.5.3 3.9.3 3.8m12.8-33.9c-.7 7-.9 18.9-2.2 27.8v.5m-44.5-46.4c-2 7.3-3 15.2-7.3 21.4m35-25.4c-1.2 9.8 1.3 19.6 2.4 25.8m17.7-29.8c1.6 4-.4 18.2-1 25.8m-85.5 42.4c.2.2.4.4.7.6m4.1-14.8c-1.6 1-2.1 2.4-3.5 4.6-.8 1.1-1.5 2.6-1.9 4-.2.6-.3 1.1-.3 1.6-.2 1.6 0 3 1 4" class="cls-1"/><path d="M98.9 291.5c-1.4 3.2-2.3 6.2-2.9 9.6 0 .4-.1.7-.2 1.1-.1.9-.2 1.8.2 2.6.6 1.1 2 1.5 3.3 1.8 10.5 2.7 14.3 4.1 25.1 5.2 3.5.4 7.3.5 10.4-1.1 1.3-.7 2-1.5 2.4-2.4.5-1.3 0-2.9-1.1-4.5-.9-1.3-2.3-1.9-3.8-2.7-2-1.1-3.9-2.1-5.6-3-2.5-1.4-4.8-2.6-7.2-3.9-2.7-1.4-5.5-2.9-8.8-4.8M25.8 303c.3.2.6.3.8.5q0 0 0 0c8.6 5 14.4 8.9 24 12.6 3.2 1.2 5.8 1.2 9.2.5 2.6-.6 3.2-2 2.9-4 0-.6-.3-1.2-.5-2-.4-1.5-1.6-2.6-2.8-3.8l-2.3-2.3c-1.9-1.9-3.5-3.6-5.1-5.3-2.8-3-5.6-5.9-9.2-9.4 0 0-.2-.2-.3-.2" class="cls-1"/><path d="M25.8 297.7s0 .1.1.2c3.4 3.9 8.4 7 14.3 9.9 2.4 1.2 4.9 2.3 7.5 3.5 1.1.5 2.3 1 3.5 1.5 1.6.7 5.2 1.5 6.9 1.7s3.6-.4 4.4-1.9" class="cls-1"/><path d="M52 298.9v.3c0 2.5-1.8 4.7-3.9 5.9-2.3 1.2-4.9 1.6-7.5 1.9m16.5-2.5c-2.2 2.8-5.4 4.8-8.9 5.6-.2 0-.5.1-.7.1m48.3-9.2h.2c6.3 2.4 12.9 4.2 19.6 5.3h0c2.3.4 4.7.7 7 1 4.6.5 9.1.7 13.7.6" class="cls-1"/><path d="M119.3 294.3c1 .5 1.2 1.9 1.1 3-.4 3-1.9 5.9-4.1 8 0 0-.5.4-.6.5m10.5-8.1c.2 0 .3.2.5.3.9.7 1.4 1.9 1.3 3.1-.1 1.3-.9 2.5-1.9 3.5s-2.2 1.6-3.4 2.2" class="cls-1"/></svg>')}`;
export default image;