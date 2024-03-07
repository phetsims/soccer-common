/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#2b388d}.cls-1,.cls-3,.cls-4,.cls-5,.cls-7,.cls-8{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-3{fill:#604131}.cls-4{fill:#c48f6f}.cls-5{fill:#724e2b}.cls-7{fill:#fff}.cls-8{fill:none}</style></defs><path d="M108.3 233c-.5.2-1 .3-1.5.5-8 2.6-14.1 7.8-20.3 11.9-.6.4-1.1.8-1.7 1.1-2.5-4.2-12-20.4-14.6-24.6-1.7 7.3-3.2 14.9-7.2 23.9-.6 0-1.1-.2-1.6-.2-9-1.3-10.4-1.9-19-3.9-.6-.1-1.2-.3-1.9-.4 1-16.7-3-28.4 3.4-47.5h0c16 4.6 27.9 7.1 44.7 5.4 8.7 8.6 19.1 24.4 19.7 33.9Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#b39b68"/><path d="M79.8 121.9c-1.6 1.8-4.4 2.2-6.7 1.5-1.5-.4-5.5-2.1-8.4-4.3-1.6-1.1-2.8-2.4-3.3-3.7v-.2s0 0 0 0c1.1-2.8 1.5-5.1 1.5-7.8l-.8-.3c.3-.8.6-1.6 1-2.4l.6-.6c4.5 4.8 11 8.4 16.1 10.5-.1.7-.1 1.4 0 2 .1 1.2.5 2.2.6 3.1 0 .8 0 1.4-.6 2.1Z" class="cls-4"/><path d="M107 82.3c-.4 1.1-.7 1.7-.8 1.5-1.5-2.9-2.5-4.9-4.8-7.5-.6-.7-4 3.2-5.1 5-.5.9-1.4-6.2-4.5-9.8-.5-.6-6.2 3.9-6.6 3.2-1.3-2-4-3.8-4.5-3.8-1.7-.2-2.1 2.1-3.6 4.5-.5.8-4-3.3-4.6-2.7-3.5 3.2-4.9 4.6-5.9 10.1-.2 1.2-3.1-5.3-6.3-.9-2.6 3.6.9 7 1.3 13.2 0 .2 0 .4-.2.4.1 2 .4 4.5.8 6.4.1.5.3 1.1.8 1.4h0c.2.3.5.6.8.9 4.5 4.8 11 8.4 16.1 10.5 4 1.7 7.2 2.5 8.2 2.3 3.7-.6 7.8-5.8 7.8-5.8 1.8-2.1 3.1-4.3 4.1-6.5 3.1-6.6 3.5-13.1 3.9-14.6.7-2.3 2.2-3.3 3.4-7.6h-.3Zm-24.5 6.9c.3-1.4 1.2-2.4 2-2.2s1.2 1.4.9 2.8-1.2 2.4-2 2.2-1.2-1.4-.9-2.9Zm1 12.3.2-.2c3.6 2.6 6.4 4.3 10.5 4.8-2.5 7.7-10.8 7.3-10.7-4.5Zm16.9-8c-.3 1.4-1.2 2.5-2 2.3s-1.1-1.5-.8-2.9 1.2-2.5 2-2.3 1.2 1.5.8 2.9" class="cls-4"/><path d="M114.1 81.8c-.3-.5-1.6-2.1-2.8-3.4-1-1.1-1.9-2.1-2.2-2.2-.4.4-1.4 4-2.2 6.2-.4 1.1-.7 1.7-.8 1.5-1.5-2.9-2.5-4.9-4.8-7.5-.6-.7-4 3.2-5.1 5-.5.9-1.4-6.2-4.5-9.8-.5-.6-6.2 3.9-6.6 3.2-1.3-2-4-3.8-4.5-3.8-1.7-.2-2.1 2.1-3.6 4.5-.5.8-4-3.3-4.6-2.7-3.5 3.2-4.9 4.6-5.9 10.1-.2 1.2-3.1-5.3-6.3-.9-2.6 3.6.9 7 1.3 13.2 0 .2 0 .4-.2.4-.7.3-2.5-.7-2.8-.9.2 1.5-.9 5.8-1.6 4.7-.8-1.3-1.4-2.6-1.9-3.8-.8 1.3-.3 1.2-.5 3.8 0 .2-.1.4-.2.6-.6.7-2.1.6-2.5-.4-5-10.1-5.4-20.8-2.8-30.5 1.1-4.1 2.8-8 4.9-11.5h-.5c-.9 0-1.4-1-1-1.7 4.8-6.9 16.3-9.7 24.1-8.7 1.2.1-6.2-3.7-4.4-4.4 3.2-1.2 18.1.5 21.2 4.4 1.2.8 2.8 2.4 4.5 4.4l.4-.3c11.4 3.9 17.2 18.2 15.7 30.9Z" class="cls-3"/><path d="m63.8 104.1-.6.6c-.4.8-.7 1.6-1 2.4-.3 1-.5 2.1-.6 3.1-3-3-5.5-6.6-7.2-10.5.1-.2.2-.4.2-.6.2-2.6-.3-2.4.5-3.8.5 1.2 1.1 2.5 1.9 3.8.7 1.1 1.7-3.2 1.6-4.7.2.2 2.1 1.2 2.8.9.1 2 .4 4.5.8 6.4.1.5.3 1.1.8 1.4h0c.2.3.5.6.8.9Z" class="cls-3"/><path d="M101.3 86.9c-.1-2.4-2.3-2.4-3.3-1.1m-11.6-4c-1.1-1.8-3.4-2.4-5.8-.3m13.5 14.2c4.3 4.5 1.1 5.6-.9 6.3" class="cls-8"/><path d="M100.4 93.5c-.3 1.4-1.2 2.5-2 2.3s-1.1-1.5-.8-2.9 1.2-2.5 2-2.3 1.2 1.5.8 2.9m-15-3.7c-.3 1.4-1.2 2.4-2 2.2s-1.2-1.4-.9-2.9c.3-1.4 1.2-2.4 2-2.2s1.2 1.4.9 2.8Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M83.7 101.2c-.3-.2-.6-.4-.8-.6" class="cls-8"/><path d="M94.2 106c-2.5 7.7-10.8 7.3-10.7-4.5l.2-.2c3.6 2.6 6.4 4.3 10.5 4.8Z" class="cls-7"/><path d="M58 124.1c-1 5.2-5.5 14.8-9.3 21.7-2 3.6-3.8 6.5-4.8 7.6-.7-.3-1.4-.5-2.1-.9-4.4-1.9-8.9-4.5-11.1-6.1-.7-.6-1.2-1-1.3-1.3-.3-1 5.8-13.2 6.4-14.5 3.3-6.4 7.7-10.9 14.6-13.2q.75-.15 1.2-.3 0 0 0 0c3.2-.7 5 .8 6.3 4.1.3.7.2 1.7 0 3Z" class="cls-1"/><path d="m51.6 117.1-1.2.3c.4-.1.8-.3 1.2-.3" class="cls-8"/><path d="M91 129.4c-.2-1.3-.5-2.5-1-3.7h0c-1.2-1.5-2.5-3.1-4.1-4.2-1.6-1.2-3.6-1.9-5.5-1.7h0c0 .8 0 1.4-.6 2.1-1.6 1.8-4.4 2.2-6.7 1.5-1.5-.4-5.5-2.1-8.4-4.3-2.7.6-5.2 2.5-6.3 5H58c-1 5.2-5.5 14.8-9.3 21.6h.1c1 6.8-.6 16.3-1.7 27l-.4.2c.9 1.5 1.8 3 3 4.6h0c1.7-1.8 10.3.4 11.2 2.6 1 2.4-2.8 11.1-4.5 12-2 1-7.6-4.4-8.6-6.4-.8-.7-1.5-1.4-2.3-2h0c-.9 5.4-.9 4.3-2.6 9.4.3 0 .6.2 1 .3 16 4.8 27.9 7.2 44.7 5.5.5-13.6 2.5-27.6 3.2-41.5h0s0 0 0 0c0-.6 0-1.3.1-1.9.4-8.8.3-17.6-.9-26.2Zm-6.1 35.1h-14c0-4 .7-7.3 1.8-9.8.9-2.1 2.5-4.1 4.8-6.2.9-.8 1.5-1.5 1.9-2.1.3-.6.5-1.3.5-2s-.2-1.2-.5-1.6-.7-.6-1.1-.6q-1.05 0-1.8.6c-.6.4-1.3 1.2-2 2.5l-3.4-3.5c1-1.7 2-3 3.1-3.7 1.2-.9 2.6-1.3 4.2-1.3s3.7.6 4.8 1.9 1.7 3 1.7 5.2-.3 3.1-.8 4.2q-.9 1.95-3 3.9c-1.6 1.5-2.7 2.7-3.4 3.8-.6 1-1 2.1-1.1 3.2h8.5v5.4Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#4a62ba"/><path d="M56.5 192.2c-2 1-7.6-4.4-8.6-6.4-.8-.7-1.5-1.4-2.3-2-7.7-6.8-12-11.3-16.9-21.2-1.6-3.2-.1-10.5 2-16.1 2.2 1.7 6.6 4.2 11.1 6.1-.7 1.2-1.9 3.6-3.3 6 3.8 5.9 5.7 10.1 8.2 14.4.9 1.5 1.8 3 3 4.6h0c1.7-1.8 10.3.4 11.2 2.6 1 2.4-2.8 11.1-4.5 12Z" class="cls-4"/><path d="M50.1 178.1c-.1-.2-.2-.3-.3-.5" class="cls-8"/><path d="M102.4 150.6c-.7.5-1.4.9-2 1.3-3.3 2.2-5.8 3.7-8.5 3.7h0c.4-8.8.3-17.6-.9-26.2-.2-1.3-.5-2.5-1-3.7-.7-2-1.8-3.8-2.9-5.5q-.75-.9-1.5-1.5c7.6 3.6 12.9 24.4 16.8 31.9" class="cls-1"/><path d="M116.6 170.9c-2.7.6-.5-.1-2.8 1.5-2.2 1.6-3.8 4.3-3.3 6.9h-.1c-2.5-6.8-17.9-16.3-18.6-21.7h0s0 0 0 0c0-.6 0-1.3.1-1.9h0c2.6 0 5.1-1.5 8.5-3.7 3.5 6 10.2 14.8 16.2 19Z" class="cls-4"/><path d="M91.8 157.2v.4m8.6-5.7v-.1" class="cls-8"/><path d="M120 182.3c-2.5 1.9-4.1 2.7-6.7.9-1.3-.9-2.3-2.1-2.7-3.6v-.3c-.5-2.6 1.1-5.3 3.3-6.9 2.3-1.6 0-.9 2.8-1.5 3-.9 6.6.8 7.9 3.7s-2 5.9-4.5 7.8Z" class="cls-4"/><path d="M74 208.3c-1.7 4.6-2.8 9-3.9 13.5h0" class="cls-8"/><path d="M61.3 245.5v.2c-2.7 8.7-4.1 7.6-8.8 16.3-4.9 9.1-10.5 20.6-16.7 28.8h0c0 .1-.1.2-.2.3-1 1.1-8.8 1-9.1-1.6H26c0-.4.1-.7.2-1 1.9-9.9 4.4-24.1 9.5-32.4 1.8-2.9 5.1-10.9 6.4-14.1v-.5c8.8 2.1 10.1 2.6 19.1 3.9Z" class="cls-4"/><path d="M26.1 289.4v.2m65.8 4v-.4" class="cls-8"/><path d="M102.5 287.2c-1 1.1-1.4 2.5-1.9 3.9-.4 1.4-1 2.8-2.2 3.7-2 1.5-5.3.6-6.6-1.6h0v-.4h0c-.2-3.8-1.2-20-3.9-30.4-.8-3.2-1.8-10.2-1.3-13.5.4-2.8-.2-3.6-.2-3.6 6.2-4.2 12.3-9.3 20.3-11.9.3 20.8-1.5 33.1-4.2 53.7Z" class="cls-4"/><path d="M64.7 119.1c-2.7.6-5.2 2.5-6.3 5H58c.2-1.3.3-2.3 0-3-1.3-3.3-3.1-4.8-6.3-4.1 4.2-1.2 4.6-1 9.7-1.9v.2c.5 1.3 1.7 2.5 3.3 3.7Z" class="cls-7"/><path d="M134.4 310.6c-2.7 2-6.3 2.4-9.6 2.6-10.3.4-21.5-3.8-31.7-5.1-1.2-.1-2.6-.4-3.3-1.4-.5-.7-.6-1.6-.6-2.5 0-3.8.4-7.6 1.3-11.4h1.4v.4h0c1.2 2.2 4.5 3.1 6.6 1.6 1.2-.9 1.8-2.3 2.2-3.7.5-1.4.9-2.8 1.9-3.9s2-1.4 3.2-.5h.1c8.5 3.3 17.8 9.6 26.3 12.9 1.5.6 3 1.2 4 2.4 2.2 2.5.9 6.7-1.8 8.7Z" class="cls-5"/><path d="M42.4 289c0-.1-.1-.2-.2-.3" class="cls-8"/><path d="M50.1 318.7c-9.8-2.2-15-5.4-29.8-15.6-1-.7-2.1-1.3-2.4-2.5-.2-.8.1-1.7.5-2.5 1.5-3.5 4.7-6.6 6.9-9.7l1 .2c0 .3-.1.6-.2.9h.5c.3 2.6 8.1 2.8 9.1 1.7l.2-.2c.9-1.1 1.9-2.2 3.2-2.7s2.3-.5 3.1.6l-.2.2c6.1 12.1 6 13.4 15.4 18.9 1.3.8 2.8.2 3.1 1.7 1.7 7.6-4.1 10.6-10.3 9.2Z" class="cls-5"/><path d="M65.2 52.9C56.3 60.9 50 65 51 79.1c.3-2.1 1.1-4.3 2.3-5.7-.4 9.2-1 15.2 1.8 21.9m-1.1-38c1.3.2 2.2.4 3.1-.7M98 51.2c4.1 4.8 8.9 11.8 10.4 15.1.5 1-8.1-1.4-10.3-3" class="cls-8"/><path d="M54.4 56.6c-.1.2-.3.5-.4.7m1.3 37.8c0 .1-.1.2-.2.3m-.7 4.3v-.1m7-4.2s0 0 0 0" class="cls-8"/><path d="M106.8 99.8c-.3-1.3-.7-2.6-1.1-3.9-1.5 3.6-2.2 6.6-5.4 8.8h-.4c3.1-6.7 3.5-13.2 3.9-14.7.7-2.3 2.2-3.3 3.4-7.6h-.3c.8-2.2 1.8-5.9 2.2-6.3.3.1 1.2 1.1 2.2 2.2 1.6 7.8-1 14.2-4.5 21.4Z" class="cls-3"/><path d="M64.9 119.1h-.1" class="cls-8"/><path d="M90 125.7c-1.2-1.5-2.5-3.1-4.1-4.2-1.6-1.2-3.6-1.9-5.5-1.7h0c0-.9-.5-1.9-.6-3.1h0c1.8 1 3.9.9 5.7 2q0 0 0 0c.5.4 1 .8 1.5 1.5 1.2 1.7 2.2 3.6 2.9 5.5ZM84.9 159v5.4h-14c0-4 .7-7.3 1.8-9.8.9-2.1 2.5-4.1 4.8-6.2.9-.8 1.5-1.5 1.9-2.1.3-.6.5-1.3.5-2s-.2-1.2-.5-1.6-.7-.6-1.1-.6q-1.05 0-1.8.6c-.6.4-1.3 1.2-2 2.5l-3.4-3.5c1-1.7 2-3 3.1-3.7 1.2-.9 2.6-1.3 4.2-1.3s3.7.6 4.8 1.9 1.7 3 1.7 5.2-.3 3.1-.8 4.2q-.9 1.95-3 3.9c-1.6 1.5-2.7 2.7-3.4 3.8-.6 1-1 2.1-1.1 3.2h8.5Z" class="cls-7"/></svg>')}`;
export default image;