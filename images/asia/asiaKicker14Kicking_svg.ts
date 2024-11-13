/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="asia" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;fill:none;stroke:#000}.cls-3,.cls-4,.cls-5,.cls-6,.cls-8{stroke-width:0}.cls-4{fill:#f9f9f9}.cls-5{fill:#886553}.cls-6{fill:#372d25}.cls-8{fill:#cca285}</style></defs><path d="M78.1 63.4c-3.7-7.3-4.9-13.4-4.8-18.9h.2c5-3.7 11.1-5.9 17.3-6.2l.2.2.1.1c-.3.3-.6.7-.8 1.2-2.4 4.7-4.1 10.7-4.5 10.5-1.1-.5-1.1.5-2.6-3-.7-1.5-4.6-3.5-6.7-2-1.2.9-2.2 4.7-2.1 6.4 0 1.7 1.5 6.3 2.8 7-.3 3 .7 3.8 1 4.8Z" class="cls-6"/><path d="M188.1 216.9h.4c0 .1-.1.3-.2.5 0-.2-.1-.3-.2-.5" style="stroke-width:0;fill:#404a61"/><path d="M100.3 305.4c.1 0 4.1-2.6 4.2-2.7 2.6-2.5 4.3-6 4.7-9.6.1-1.2 0-2.7-1-3.4l13.4 6.7c1 .8 1.5 2.2 1.4 3.6-.1 1.6-1 3.1-2.2 4.2s-4.1 4.2-5.5 5c-5.1-.8-10.2-2-15.2-3.5v-.4Z" class="cls-5"/><path d="M194.4 195.9c2.8 0 5.5-.2 8-.3v.2c1.3 0 2.2 1.3 2.7 2.5 1.4 3.4 1.8 6.2.7 9.7 0 .2-1.4 4-1.6 5v.2c-5.2 1.5-10.5 2.8-15.8 3.7 2.4-7.2 4.5-16.5 5.8-21Z" class="cls-8"/><path d="M75.6 136.3c5.9.5 10.9 1.2 14.7 1.2h.2c-.3-4.2-1.2-9.1 1-12.4-2.8.1-4.7-.2-10.3 1v-.2c-.2-3.4-11.3-9.3-14.4-7.9-3.3 1.6-7.4 14.2-6.5 16.7 1.2 3 12.1 2.6 15.1 1.6zm28 1.7v.3c-.8 3.4 1.4 15.8 1.6 21.4-1.7-.5-3-.8-3.8-1.1-3-1.2-6.2-2.8-12.8-4.2-18.9-4.1-34.8-7.9-36.5 3.3-.3 4.1 0 7.8.6 10.9h-.4c-4.3-14.9-1.2-20.1 1.3-48.4.3-6.9.5-11.6-.7-17.4-1.8 1.2-15.8 15-17.4 16.3-2.5 4.5-4.5 7.5-6.5 10.8l-.3-.2c-.2-.2-.5-.4-.8-.7-2.7-2.3-7.7-6.1-11.3-6.2 2.8-6.7 6.3-13.1 10.4-19 .2-1.2 15.7-17.5 16.6-18.3 4.7-4.3 8.2-7.7 14.4-9 2.1-.4 17.3.1 20.9.1-.2 1.3-.6 2.4-.9 3.2-1.9 6.2 1.2 8.9 4.8 10.5 1.1.5 2.1.8 3.2 1.1 6.2 1.9 12.8-.9 12.9-6.3 1 .3 1.9.4 2.9.3 1.1-.1 2.1-.4 3.1-.8 1.1.3 9.4 5.5 9.8 6.7 1.1 3.3 2.7 8.2 3.2 12.1 2.2 18.8 1.3 27.7-1.5 29.1-5.2 2.8-9.1 4.4-12.6 5.3Z" class="cls-4"/><path d="M202.4 195.8v-.2c5.2-.2 10-.3 15.2-.5 1.4 0 2.8 1.1 3.4 2.4.7 1.5.6 3.2.1 4.7s-1.9 4.4-2.8 5.8c-4.6 2.1-9.3 3.7-14.1 5.1v-.2c.1-1 1.5-4.9 1.5-5 1.1-3.5.7-6.3-.7-9.7-.5-1.2-1.4-2.5-2.7-2.5Z" class="cls-5"/><path d="M96.4 47.6c.3-3.4 5.8-2.5 8.6-1.6 2.7.8.9 3.2.3 3-1.9-.5-8.9-1.2-8.9-1.4" class="cls-6"/><path d="M98.5 68.9c4.1 3.3 6.4 4.5 10.9 5.1-2.5 8.6-12.5 1.4-10.9-5.1" style="stroke-width:0;fill:#fff"/><path d="M22.7 155.4c-1.9 2.4-13 3.4-14.9 2.1-2.2-1.5.7-11.9 2.2-14.2 1.5-7 3.7-13.9 6.5-20.6 3.6 0 8.6 3.8 11.3 6.2l-.4.2c-2.4 3.9-5.2 9-7.4 13.6v.2c2.6.9 4.5 10.3 2.7 12.4Zm44.1-37.3c3.1-1.5 14.2 4.5 14.4 7.9v.2c5.6-1.1 7.5-.8 10.3-1-2.1 3.2-1.3 8.2-1 12.3h-.2c-3.8 0-8.8-.7-14.7-1.2h-.2c-3 1.1-13.9 1.5-15.1-1.5-1-2.5 3.1-15.1 6.5-16.7" class="cls-8"/><path d="M76.1 24.6c12.5-8.6 42.6-5.9 48.8 1.6 1.3 4 1.7 7.8 1.5 12h-1.6c-3.3-1.8-7-2.8-10.7-2.9.6-1 1.4-1.9 2.4-2.4-4.6-.5-9.4-.2-13.9.8.4-1.2.8-2.3 1.3-3.5-5 1.5-9.5 4.4-13.1 8.2l-.2-.2c-6.2.3-12.4 2.5-17.3 6.2h-.2v-.6c.2-5.4 1.6-13.9 3-19.1v-.2Z" class="cls-4"/><path d="M78.8 76.7c.6-3.3.6-7.8-.4-12.2 1.2 4.2 3.1 6.4 6.1 9.4 3.6 3.6 9 9.9 14.4 11.3-.2 5.4-6.8 8.2-12.9 6.3-1-.3-2.1-.7-3.2-1.1-3.6-1.6-6.7-4.3-4.8-10.5.4-.9.7-2 .9-3.2Z" class="cls-8"/><path d="M98.5 68.9c-1.6 6.5 8.4 13.7 10.9 5.1-4.6-.6-6.8-1.8-10.9-5.1m20.1-13.3c.7.3 1.5-.4 1.6-1.2 0-.8-3.3-4-4.5-3.8-1.1.2-2.3 2.3-.9 3.1.5.3 3.3 1.7 3.8 1.9m-17.1 1.2c.3-1.6-.1-3-.9-3.2s-1.7.9-2.1 2.5c-.3 1.6.1 3 .9 3.2s1.7-.9 2-2.5Zm3.5-10.7c-2.8-.9-8.3-1.8-8.6 1.6 0 .3 7 .9 8.9 1.4.7.2 2.5-2.2-.3-3m-13.9-7.6c4.7-4.8 21.1-1.4 23.9 0 2.9 1.6 9.7 5 9.5 8.5-1 6.1-4.4 10.5-4.4 13.6s-2.1 9-6.5 16.3c0 0-3.7 5.7-8.8 7.9-1 .4-2 .7-3.1.8-1 0-1.9 0-2.9-.3-5.4-1.5-10.7-7.7-14.4-11.3-3-3-4.9-5.2-6.1-9.4-.1-.3-.2-.7-.3-1.1-.2-1-1.3-1.8-1-4.8-1.3-.7-2.7-5.2-2.8-7-.1-1.7.9-5.6 2.1-6.4 2.2-1.5 6.1.4 6.7 2 1.5 3.5 1.5 2.5 2.6 3 .4.2 2.1-5.8 4.5-10.4.2-.6.5-.9.8-1.3Zm25.7 22.4c.3-1.6 0-3.1-.9-3.3-.8-.2-1.7 1-2 2.6s0 3.1.8 3.3 1.7-1 2-2.6Z" class="cls-8"/><path d="M100.6 53.6c.8.2 1.2 1.6.9 3.2s-1.2 2.7-2 2.5-1.2-1.6-.9-3.2 1.2-2.7 2.1-2.5Z" class="cls-3"/><path d="M132.8 310.4c-5.9.3-11.7-.2-17.4-1.1 1.4-.8 4.3-4 5.5-5.1s2.1-2.6 2.2-4.2c.1-1.3-.4-2.7-1.4-3.6 2 1 4.1 2.1 6.6 3.4 1.7.9 3.5 1.6 4.6 3.1 1.9 2.9 2.3 5.5 0 7.4Z" class="cls-8"/><path d="M116 57.6c.8.2 1.2 1.7.9 3.3s-1.2 2.8-2 2.6-1.2-1.7-.8-3.3 1.2-2.8 2-2.6Z" class="cls-3"/><path d="M102.7 33.6c4.6-1 9.3-1.3 13.9-.8-1 .6-1.9 1.4-2.4 2.4 3.7.1 7.4 1.1 10.7 2.9-.9.2-1.8.5-2.7.7 1.3.9 2.6 1.9 3.8 3 1.5 1.4 2.9 3 4 4.7-1.7 0-3.3 0-5 .1h-.4v.4c.2-3.4-6.6-6.9-9.5-8.5-2.9-1.4-19.3-4.8-23.9 0h-.1c3.5-3.9 8.1-6.8 13.1-8.4-.4 1.2-.9 2.3-1.3 3.5Z" class="cls-6"/><path d="M190.3 220.6c-.9-.5-1.4-1.6-1.8-2.5 0-.2-.2-.5-.3-.7 0-.2.1-.4.2-.6 5.2-.9 10.6-2.1 15.8-3.7 4.8-1.4 9.5-3.1 14.1-5q8.7-3.6 16.5-8.4c.1 1-.2 2.2-1 3.5-2.3 3.5-6.2 5.7-10.1 7.4-11.8 5.4-16.5 6.4-29 9.9-1.5.4-3.2.8-4.5 0Z" class="cls-5"/><path d="M87.1 292.8c8.6.2 10.7-2.9 17.4-5 1.3.7 2.6 1.3 3.7 1.9 1 .7 1.1 2.1 1 3.4-.4 3.6-2.1 7.1-4.7 9.6-.1.1-4.1 2.6-4.2 2.7v.4c-5.3-1.5-10.3-3.2-15.4-5 .4-3.4.7-4.3 2.2-8" class="cls-8"/><path d="M104.5 287.8c-6.7 2.1-8.8 5.2-17.4 5q-1.8 0-3.9-.3c-.1-.4 8.5-63.9 8.1-65.4-2.6-8.7-12.8-28.9-20.5-39.7 7.9 1.6 25.9 2.8 39 4.3 2.9 10.6 9.5 25.3 9.5 34.4 0 1.8-10.2 59.1-10.3 60.7-1.7.3-3.1.6-4.4 1Z" class="cls-5"/><path d="M234.9 199.8q-7.8 4.8-16.5 8.4c.8-1.5 2.3-4.4 2.8-5.9s.6-3.3-.1-4.7c-.6-1.3-1.9-2.4-3.4-2.4 2.5 0 5.1-.2 7.8-.3 2 0 3.8-.3 5.5.5 2.3 1.1 3.7 2.6 3.9 4.4" class="cls-8"/><path d="M105.2 159.7v.2c-1.4-.3-2.6-.8-3.8-1.3.8.3 2.1.6 3.8 1.1" class="cls-4"/><path d="M84.9 300.7c5 1.8 10.1 3.5 15.3 5 5 1.4 10.1 2.7 15.2 3.5 5.8.9 11.6 1.4 17.4 1.1-.4.4-.8.6-1.3.9-3.7 2-8.2 1.9-12.4 1.6-12.9-1.1-17.5-2.5-30.1-5.6-1.5-.4-3.2-.8-3.9-2.1-.5-.9-.5-2-.3-3.1 0-.5.1-.9.2-1.3Z" class="cls-5"/><path d="M115.6 50.6c1.3-.2 4.6 3 4.5 3.8 0 .8-.9 1.5-1.6 1.2-.5-.2-3.3-1.6-3.8-1.9-1.4-.8-.2-2.9.9-3.1" class="cls-6"/><path d="M120.5 193.2c-2.7-.6-6.5-1.1-10.8-1.6-13-1.5-31.1-2.7-39-4.3-2.5-.7-4.6-1.3-5.9-1.8-4.4-2.2-10.1-7.6-12.1-17-.7-3.2-.9-6.8-.6-10.9 1.7-11.2 17.5-7.4 36.5-3.3 6.6 1.4 9.8 3 12.8 4.3 1.2.5 2.4 1 3.8 1.3v-.2c5.4 1.5 14.4 3.8 19.9 5.6 3.2 1 70 28 69.8 28.6-.2.5-.4 1.1-.6 1.9-1.3 4.5-3.4 13.8-5.8 21h-.4c0 .2.1.4.2.6l-.9 2.4c-.1.3-64.2-26-66.9-26.5Z" class="cls-5"/><path d="M26.9 103.8c.2-1.2 15.7-17.5 16.6-18.3 4.7-4.3 8.2-7.7 14.4-9 2.1-.4 17.3.1 20.9.1m-51.9 27.2c-4.1 5.8-7.6 12.3-10.4 19s-5 13.7-6.5 20.6m17.4-14.2c-2.4 3.9-5.2 9-7.4 13.6m32.9-40c-1.8 1.2-15.8 15-17.4 16.3-2.5 4.5-4.5 7.5-6.5 10.8h0" class="cls-1"/><path d="M19.8 143s0 0 0 0c2.7.9 4.6 10.3 2.8 12.4-1.9 2.4-13 3.4-14.9 2.1-2.2-1.5.7-11.9 2.2-14.2M116 132.7h.2c2.8-1.4 3.7-10.3 1.5-29.1-.5-3.9-2.1-8.8-3.2-12.1-.4-1.3-8.7-6.4-9.8-6.7q0 0 0 0m-3.7 17c0 5.6.7 18.1 1.1 21.4 2.3-.6 4.2-.8 5.8-.6m-17.6 14.9c-3.8 0-8.8-.7-14.7-1.2" class="cls-1"/><path d="M116.5 132.6s-.1 0-.2.1c-5.2 2.7-9.1 4.3-12.6 5.2-4.3 1.1-8.1 1.3-12.9 1.2m11.3-15.9c-5.6 1.5-8.4 1.9-10.6 2-2.8.1-4.7-.2-10.3 1-.3 0-.5.1-.8.2" class="cls-1"/><path d="M81.2 126c-.1-3.4-11.3-9.3-14.4-7.9-3.3 1.6-7.4 14.2-6.5 16.7 1.2 3 12.1 2.6 15.1 1.6m-21.8-16.2c-2.5 28.3-5.5 33.5-1.3 48.5m51.4-30.4c-.9 3.4 1.3 15.8 1.5 21.4v.2" class="cls-1"/><path d="M51.5 97.4c.6 1.9 1 3.7 1.4 5.4 1.2 5.8 1 10.5.7 17.4m17.1 67.2c7.9 1.6 25.9 2.8 39 4.3 4.3.5 8.1 1 10.8 1.6s66.8 26.9 66.9 26.5l.9-2.4c0-.2.1-.4.2-.6 2.4-7.2 4.5-16.5 5.8-21 .2-.8.4-1.5.6-1.9.2-.6-66.6-27.6-69.8-28.6-5.5-1.8-14.5-4.1-19.9-5.6-1.7-.5-3-.8-3.8-1.1m-36.6 27c1.3.5 3.4 1.1 5.9 1.8" class="cls-1"/><path d="M70.7 187.4c7.7 10.8 18 31 20.5 39.7.5 1.6-8.2 65-8.1 65.4q2.1.3 3.9.3c8.6.2 10.7-2.9 17.4-5 1.3-.4 2.7-.7 4.4-1 0-1.6 10.3-58.9 10.3-60.7 0-9.1-6.5-23.9-9.5-34.4m-57.5-34.1c-.3 4.1 0 7.8.6 10.9 2 9.3 7.7 14.8 12.1 17m42-25.3c-.6 0-1.1-.2-1.6-.3-1.4-.3-2.6-.8-3.8-1.3-3-1.2-6.2-2.8-12.8-4.3-18.9-4.1-34.8-7.9-36.5 3.3" class="cls-1"/><path d="M98.8 85v.2c-.2 5.4-6.8 8.2-12.9 6.3-1-.3-2.1-.7-3.2-1.1-3.6-1.6-6.7-4.3-4.8-10.5" style="fill:none;stroke:#000;stroke-miterlimit:10"/><path d="M16.6 122.8c3.6 0 8.6 3.8 11.3 6.2.3.2.5.5.8.7m62.9-4.8s0 .1-.1.2c-2.1 3.2-1.3 8.2-1 12.3v1.6m-7.8-48.6c-3.1 5.5-4.6 11.7-4.7 18m9.2 184.1v.2c-1.5 3.6-1.7 4.6-2.2 8 0 .4-.1.8-.2 1.3-.1 1-.2 2.2.3 3.1.7 1.3 2.4 1.7 3.9 2.1 12.6 3 17.2 4.5 30.1 5.6 4.2.3 8.7.4 12.4-1.6.5-.3.9-.6 1.3-.9 2.3-1.9 2-4.5 0-7.4-1.1-1.6-2.8-2.2-4.6-3.1-2.5-1.3-4.7-2.4-6.6-3.4-4.7-2.4-8.3-4.1-13.4-6.7-1.2-.6-2.4-1.2-3.7-1.9 0 0-.2 0-.3-.1" class="cls-1"/><path d="M84.7 300.7h.2c5 1.8 10.1 3.5 15.3 5 5 1.4 10.1 2.7 15.2 3.5 5.8.9 11.6 1.4 17.4 1.1" class="cls-1"/><path d="M107.9 289.5c.1 0 .2.1.3.2 1 .7 1.1 2.1 1 3.4-.4 3.6-2.1 7.1-4.7 9.6-.1.1-4.1 2.6-4.2 2.7m20.6-9.4c.3.1.5.3.7.4 1 .8 1.5 2.2 1.4 3.6-.1 1.6-1 3.1-2.2 4.2s-4.1 4.2-5.5 5m72.6-92.9c0 .2.1.4.2.6 0 .2.1.3.2.5 0 .2.2.5.3.7.4 1 .9 2 1.8 2.5 1.3.7 3 .3 4.5 0 12.4-3.5 17.2-4.5 29-9.9 3.9-1.8 7.8-3.9 10.1-7.4.8-1.3 1.1-2.4 1-3.5-.2-1.8-1.6-3.3-3.9-4.4-1.7-.8-3.6-.6-5.5-.5-2.8 0-5.3.2-7.8.3-5.2.2-10 .3-15.2.5-2.6 0-5.2.2-8 .3" class="cls-1"/><path d="M187.8 216.9h.6c5.2-1 10.6-2.2 15.8-3.7 4.8-1.4 9.5-3.1 14.1-5q8.7-3.6 16.5-8.4h.1" class="cls-1"/><path d="M202.2 195.8h.2c1.3 0 2.2 1.3 2.7 2.5 1.4 3.4 1.8 6.2.7 9.7 0 .2-1.4 4-1.6 5m13-17.9h.4c1.4 0 2.8 1.1 3.4 2.4.7 1.5.6 3.2.1 4.7s-1.9 4.4-2.8 5.8M73.3 43.9v.6c0 5.6 1.1 11.6 4.8 18.9" class="cls-1"/><path d="M76.3 24.8c-1.4 5.2-2.9 13.7-3 19.1m5.1 20.5c-.1-.3-.2-.7-.3-1.1-.2-1-1.3-1.8-1-4.8m47.5-12.2v.7c-1 6.1-4.4 10.5-4.4 13.6s-2.1 9-6.5 16.3c0 0-3.7 5.7-8.8 7.9-1 .4-2 .7-3.1.8-1 0-1.9 0-2.9-.3-5.4-1.5-10.7-7.7-14.4-11.3-3-3-4.9-5.2-6.1-9.4" class="cls-1"/><path d="M111.6 67c-.2 2.8-2.8 2.6-5.8 1.2m8.1-8c-.3 1.6 0 3.1.8 3.3s1.7-1 2-2.6 0-3.1-.9-3.3c-.8-.2-1.7 1-2 2.6Zm-15.4-4.1c-.3 1.6.1 3 .9 3.2s1.7-.9 2-2.5-.1-3-.9-3.2-1.7.9-2.1 2.5Zm10.9 17.8c-4.6-.6-6.8-1.8-10.9-5.1" class="cls-1"/><path d="M109.4 73.9c-2.5 8.6-12.5 1.4-10.9-5.1m-20.4-5.4c.1.4.2.7.3 1.1q0 0 0 0c1.1 4.4 1.1 8.9.4 12.2-.2 1.3-.6 2.4-.9 3.2v.2m12.3-40.5c.2-.4.5-.8.8-1.2 4.7-4.8 21.1-1.4 23.9 0 2.9 1.6 9.7 5 9.5 8.5v.2m-34.2-7.3c-2.4 4.6-4.1 10.5-4.5 10.4-1.1-.5-1.1.5-2.6-3-.7-1.5-4.6-3.5-6.7-2-1.2.9-2.2 4.7-2.1 6.4 0 1.7 1.5 6.3 2.8 7s2.2 1 3.5 0m45.7-17.2c.1-1.1.2-2.2.2-3.2.2-4.2-.2-8-1.5-12-6.2-7.5-36.4-10.2-48.8-1.6 0 0-.2.1-.3.2m20.5 22.8c0 .3 7 .9 8.9 1.4.7.2 2.5-2.2-.3-3-2.8-.9-8.3-1.8-8.6 1.6m18.3 6.1c.5.3 3.3 1.7 3.8 1.9.7.3 1.5-.4 1.6-1.2 0-.8-3.3-4-4.5-3.8-1.1.2-2.3 2.3-.9 3.1" class="cls-1"/><path d="M90.9 38.4s0 0 0 0c3.5-3.8 8.1-6.7 13.1-8.2-.4 1.2-.9 2.3-1.3 3.5 4.6-1 9.3-1.3 13.9-.8-1 .6-1.9 1.4-2.4 2.4 3.7.1 7.4 1.1 10.7 2.9-.9.2-1.8.5-2.7.7 1.3.9 2.6 1.9 3.8 3 1.5 1.4 2.9 3 4 4.7-1.7 0-3.3 0-5 .1m-34.2-8.5c-6.2.3-12.4 2.5-17.3 6.2" class="cls-1"/></svg>')}`;
export default image;