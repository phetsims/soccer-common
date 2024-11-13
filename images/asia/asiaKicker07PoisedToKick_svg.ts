/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="asia" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;fill:none;stroke:#000}.cls-10,.cls-12,.cls-3,.cls-4,.cls-5,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-4{fill:#faac8e}.cls-5{fill:#fd0243}.cls-7{fill:#3a3f45}.cls-8{fill:#1a2636}.cls-9{fill:#07bab5}.cls-10{fill:#cbaa99}.cls-12{fill:#e3c357}</style></defs><path d="M137.3 303.5c1.9 2.2.8 5.8-1.7 7.6-2.4 1.8-5.7 2.1-8.7 2.3-9.3.4-19.4-3.3-28.6-4.3-1.1-.1-2.4-.3-3-1.2-.5-.6-.5-1.4-.5-2.2 0-1.7 0-3.4.3-5.1 7.2.9 16.4-2.2 21.4-7.5 5.8 2.8 11.7 6.2 17.2 8.3 1.3.5 2.7 1 3.6 2.1" class="cls-7"/><path d="M135.1 166.7c1.5 3.7-2.3 7.5-5.3 10s-4.8 3.4-7.9 1.1c-1.5-1.1-2.7-2.7-3.1-4.6v-.4c-.3-3.6 5.9-10.5 7.1-10.8 3.6-1.2 7.7 1 9.2 4.7" class="cls-10"/><path d="M72.2 215.2c-5.3 17.1-7 24.2-9.2 29.4-.8 1.9-13.6 45.7-15.4 46.6-.5.3-1.2.5-2.1.7-2.4.6-6 .9-9.7.9-4.6 0-9.1-.6-13.6-1.2-.5 0-1-.1-1.6-.2 11.6-30.1 17.6-48 20.2-62.2 2.2-12.2 1.6-28.9 4.4-42.7 17 6.4 36.2 9.2 49 5.4v-.4c4.9 8.4 16.1 30.2 19.8 42 .8 2.6 3.6 47.5 4 57.8q-.6.9-1.5 1.8c-5 5.2-14.2 8.4-21.4 7.5-.8 0-1.5-.2-2.2-.4-.2-10.8-1.7-19.9-1.5-37.3 0-6.7-3.7-23.7-5.8-27.5-3.9-7-8-14.3-13.5-20.1Z" style="stroke-width:0;fill:#052936"/><path d="M125.9 162.1c-1.3.3-7.4 7.2-7.1 10.8h-.2c-2.7-7.9-18-18.8-21.2-25.9l.4-.2c2.6-4.6 6.1-6.5 10.2-7.7 4.2 6.2 10.9 17.7 17.9 23" class="cls-10"/><path d="M80 36c-.2-5.1 9.5-3.1 13.6-2.5 11.7 1.9 19.5 8.9 22.8 20.3s.4 24.1-6.7 33.6c-.3.4-.7.9-1.2 1.1-1 .3-2.1-.6-2.3-1.7s.1-2.1.4-3.2c.4-1.5.5-3.1.4-4.6-.1-4.7-2-9.4-4.6-13.4-3.5-5.3-12-11-16.3-15.7l-1.5-1.8c-2.5-3.3-3.6-6.9-4.5-11.5v-.7Z" class="cls-8"/><path d="M108 139.1c-4.1 1.2-7.7 3.1-10.2 7.7l-.4.2q-.6-1.35-.6-2.4H96v-1.3h.2c2.8-3.4 6.5-6 10.6-7.5h.6c.6 1.1 1.2 2.1 1.9 2.9-.4.1-.9.2-1.3.4" class="cls-9"/><path d="M107.4 135.6h-.6c-4.1 1.6-7.8 4.3-10.6 7.6H96c.1-3.1.1-6.1 0-9.2 2.9-1.2 5.8-2.5 8.7-3.7h.4c.7 1.9 1.4 3.7 2.2 5.3Z" class="cls-5"/><path d="M105.2 130.2h-.4c-2.9 1.4-5.8 2.6-8.7 3.9v-2.5c0-2.2-.2-4.4-.3-6.5h.2c2.3-.5 4.4-1.6 6.1-3.2h.3c1 2.8 1.9 5.7 2.8 8.3" class="cls-12"/><path d="M83.8 86c.3 6.9 11.2 10.4 12.3 5.2-4.9-.5-7.7-2.2-12.1-5.2h-.1Zm1.2 14c0 1-3.6 8-4.7 7.9-5.2-.3-11.9-6-15.5-9.7s-.3-.5-.3-.5c.8-1.9.6-7.9.2-13.2 0 0 .2-.1.3-.2 5.9-5.7 7.6-26 9-29.1.9-2.1 2.2-4.1 4.2-5.2s3.9-1.5 6.1-1.6l.3-.2q.6.9 1.5 1.8c4.3 4.6 12.8 10.4 16.3 15.7 2.6 4 4.5 8.7 4.6 13.4-.6 3.5-1.9 9.9-7.8 16.4 0 0-4.4 5.3-8.5 5.9-.7.1-2.1-.1-3.9-.7-.5-.2-1.1-.4-1.7-.6Zm19.9-24.5c.3-1.5 0-2.8-.9-3-.8-.2-1.8.9-2.1 2.3s0 2.8.9 3c.8.2 1.8-.9 2.2-2.3Zm-16.3-3.7c.3-1.4-.1-2.7-1-2.9s-1.9.8-2.2 2.2 0 2.7 1 2.9c.9.2 1.9-.8 2.2-2.2" class="cls-10"/><path d="M104 72.6c.8.2 1.3 1.5.9 3s-1.3 2.5-2.2 2.3c-.8-.2-1.2-1.5-.9-3s1.3-2.5 2.1-2.3Z" class="cls-3"/><path d="M102.4 121.8h-.3c-1.7 1.7-3.8 2.8-6.1 3.3h-.2q-.3-3.9-.9-7.8l-1.1-.2c2.7-1.2 4.4-2.9 4.4-5.2 1.7 3.1 3 6.6 4.2 10Z" class="cls-4"/><path d="M98.2 111.8c0 2.3-1.7 4-4.4 5.2-7 3.2-20.6 3-27.4 2.2-9.6-1.1-14.2-8.9-23.3-11.6 2.7-3.4 5.3-6 7.5-6.7.2 0 .5 0 .7-.1v.5c3.6 3.3 8.5 5.1 13.3 4.9h.1c.5 2 1.3 4 2.3 5.8.5.8 1 1.7 1.8 2.1 1.3.6 2.9 0 4-.8s3.4-2.6 4.5-3.5c1.3-1 2.2-1.5 3-1.4s2.1.9 3.6 2.4c.8.8 3.4 2.8 4.6 2.7.9 0 1.6-.8 1.8-1.6s0-1.7-.2-2.5-.5-1.7-.8-2.5h.2c.9-1 1.9-1.8 2.8-2.7 2.4 2 4.3 4.7 5.9 7.7Z" class="cls-9"/><path d="M96.1 134.1v10.5c0 1 0 2.1-.1 3.1h-.5c-5.1 2.6-26.9 1-46.5-2.5h-.3c.2-5.7.5-10.9.5-15.2 0 0 .1-.1.1-.2l.5.3c14.9 1.9 31.7 4.9 46.3 1.6h.1v2.5Z" class="cls-12"/><path d="M95.3 147.6h.5c-.2 4.7-.5 9.5-.8 14.2-8 3.8-32.3.5-44.4-2.7h-.2c-.8-1-1.6-2.2-2.3-3.4 0-3.7.1-7.2.3-10.6h.3c19.6 3.5 41.5 5.1 46.5 2.4Zm-50.2 39c-.4-.1-.7-.3-1.1-.4 1.5-4.4 2.1-8.6 2.7-13h.2c2.4 1.4 4.3 2 6.9 2.5 2.7 2.6 7.3 5.8 9.2 5 .6-.3 1.5-1.3 2.4-2.7 9.6 1 19 1.9 28.5.6-.1 4.3-.2 8.7 0 13v.4c-12.8 3.9-32 1-49-5.4Z" class="cls-5"/><path d="m50.9 127.1-.8-.5c-3.4-4.4-8.7-7.3-14.3-8 2.2-3.7 4.8-7.6 7.4-10.9 9.1 2.7 13.7 10.5 23.3 11.6 6.7.8 20.3 1 27.4-2.2l1.1.2q.6 3.9.9 7.8c.2 2.2.3 4.3.3 6.5h-.1c-14.6 3.3-31.5.3-46.3-1.6l-.5-.3c.6-.9 1.1-1.7 1.7-2.6Z" class="cls-4"/><path d="M95 161.8c-.4 5.6-.7 11.2-.9 16.7-9.5 1.3-19 .4-28.5-.6 2.1-3.3 4.2-8.6 3.3-10.5-1.2-2.5-12.3-5-14.4-3.1-1.5-1.7-2.7-3.4-3.9-5.1h.2c12.1 3.1 36.4 6.3 44.4 2.6Z" class="cls-9"/><path d="M92.3 104.1c-.9.9-1.9 1.7-2.8 2.6h-.2c-.8-1.9-1.8-3.8-3.1-5.4l.5-.4c2.1.7 4 1.8 5.6 3.2" class="cls-5"/><path d="M96.1 91.1c-1 5.2-11.9 1.7-12.3-5.2h.1c4.4 2.9 7.2 4.7 12.1 5.2Z" style="stroke-width:0;fill:#fff"/><path d="m86.7 100.9-.5.4c1.3 1.7 2.3 3.6 3.1 5.5.3.8.6 1.6.8 2.5.2.8.4 1.7.2 2.5s-.9 1.6-1.8 1.6c-1.2 0-3.7-1.9-4.6-2.7-1.6-1.6-2.6-2.4-3.6-2.4v-.4c1 0 4.7-6.9 4.7-7.9.6.2 1.2.4 1.7.6z" class="cls-5"/><path d="M87.6 69c.9.2 1.3 1.5 1 2.9s-1.3 2.4-2.2 2.2-1.3-1.5-1-2.9 1.3-2.4 2.2-2.2" class="cls-3"/><path d="M64.8 84.6c-.6.6 0 0-1.2-.1h-.3c-8.2-3-8.1-11.7-8.5-19.2-.4-9.1 4.8-24.8 17-27.9 2.8-.7 5.5-1.2 8.1-1.3v.7c.9 4.6 2 8.2 4.5 11.5l-.3.2c-2.2.1-4.1.5-6.1 1.6s-3.2 3.1-4.2 5.2c-1.4 3-3.1 23.4-9 29.1 0 0-.2.2-.3.2Z" class="cls-8"/><path d="M80.4 108v.4c-.8 0-1.7.4-3 1.4-1.1.9-3.4 2.6-4.5 3.5s-2.7 1.5-4 .8c-.8-.4-1.4-1.3-1.8-2.1-1-1.9-1.8-3.8-2.3-5.9-.6-2.4-1-5-.9-7.5.2 0 .5 0 .7-.1l.3-.3c3.6 3.7 10.3 9.4 15.5 9.7Z" class="cls-5"/><path d="M65.6 178c-.9 1.4-1.8 2.4-2.4 2.7-2 .9-6.5-2.4-9.2-5-.9-.8-1.6-1.6-1.9-2.2-1.7-1.3-3.3-2.5-4.7-3.6-7.4-5.7-12.3-10.2-17.2-17.6.9-3.4 3.4-6.1 6.5-7.6q1.65-.75 2.7-1.5h.5c3.7 5 6 8.8 8.3 12.5.8 1.2 1.5 2.4 2.3 3.5 1.2 1.7 2.4 3.4 3.9 5.2 2.1-2 13.2.5 14.4 3 .9 1.9-1.2 7.2-3.3 10.5Z" class="cls-10"/><path d="M60.8 307.3c1.6 7.4-4.2 9.3-10.2 8-9.5-2.2-14.5-5.2-28.8-15.1-.9-.7-2.1-1.3-2.3-2.4-.2-.8.1-1.7.5-2.4.6-1.4 1.2-2.4 2.2-3.7 4.5.7 9.1 1.2 13.6 1.2 3.8 0 7.3-.3 9.7-.9 3.4 6.7 4.7 8.4 12.1 12.6 1.3.7 2.9 1.2 3.2 2.6Z" class="cls-7"/><path d="M64.7 106.2h-.1c-4.8.2-9.7-1.6-13.2-4.9v-.5c4.7-.8 9-1.5 12.4-2.2 0 2.5.2 5 .9 7.5Z" class="cls-5"/><path d="M52 173.5c.3.6 1 1.3 1.9 2.2-2.7-.5-4.5-1.1-6.9-2.4h-.2c.2-1.1.3-2.2.5-3.4 1.5 1.2 3.1 2.3 4.7 3.6" style="stroke-width:0;fill:#6cb8ea"/><path d="m49 129.9-2.7 4.2c-4.7-3.3-10.3-5-16-5 .6-1.6 2.8-5.8 5.6-10.5 5.6.6 10.8 3.5 14.3 8l.8.5c-.6.9-1.1 1.7-1.7 2.6 0 0 0 .1-.1.2Z" class="cls-12"/><path d="M30 129.6c0-.1 0-.3.2-.5 5.7 0 11.3 1.7 16 4.9-1.2 1.9-2.5 3.8-3.7 5.7-.2.3-.4.5-.5.8-5.3-1.3-11.2 0-15.3 3.5h-.3c-.2-3.8 1.2-9.1 3.5-14.4z" class="cls-5"/><path d="M42 140.5c-.9 1.3-1.7 2-2.6 2.7-.7.5-1.6.9-2.7 1.5-3.1 1.5-5.6 4.2-6.5 7.6-1-1.4-1.9-2.9-2.9-4.6-.6-.9-.8-2.2-.9-3.6h.3c4.2-3.5 10.1-4.9 15.3-3.6" class="cls-9"/><path d="M30 129.8v-.2c0-.1 0-.3.2-.5.6-1.6 2.8-5.8 5.6-10.5 2.2-3.7 4.8-7.6 7.4-10.9 2.7-3.4 5.3-6 7.5-6.7m4 20.1c-1.3 2-2.5 4-3.8 6-.6.9-1.1 1.7-1.7 2.6 0 0 0 .1-.1.2l-2.7 4.2c-1.2 1.9-2.5 3.7-3.7 5.6-.2.3-.4.5-.5.8-.9 1.3-1.7 2-2.6 2.7-.7.5-1.6.9-2.7 1.5-3.1 1.5-5.6 4.2-6.5 7.6m16.9 17.6c-.2 1.1-.4 2.2-.5 3.3-.7 4.4-1.3 8.7-2.7 13 .4.1.7.3 1.1.4 17 6.4 36.2 9.2 49 5.4v-.4c-.1-4.3-.1-8.7 0-13 .2-5.6.5-11.2.9-16.7.3-4.7.6-9.5.8-14.2 0-1 0-2.1.1-3.1s0-.9 0-1.3c.1-3.1.1-6.1 0-9.2v-2.5c0-2.2-.2-4.4-.3-6.5q-.3-3.9-.9-7.8" class="cls-1"/><path d="M49 129.4v.5c0 4.4-.3 9.5-.5 15.2-.1 3.3-.2 6.9-.3 10.5m-18.3-26c-2.3 5.4-3.7 10.6-3.5 14.4 0 1.4.3 2.7.9 3.6 1 1.7 1.9 3.2 2.9 4.6 4.9 7.4 9.8 11.9 17.2 17.6 1.5 1.2 3.1 2.3 4.7 3.6" class="cls-1"/><path d="M39.8 143.3c3.7 4.9 6 8.8 8.3 12.5.8 1.2 1.5 2.4 2.3 3.5 1.2 1.7 2.4 3.4 3.9 5.2.1.2.3.3.4.5M86 100.7c.2 0 .5.1.7.2 2.1.7 4 1.8 5.6 3.2 2.4 2 4.3 4.7 5.9 7.7 1.7 3.1 3 6.6 4.2 10 1 2.9 1.9 5.8 2.8 8.4.7 2 1.4 3.8 2.2 5.4.6 1.2 1.2 2.3 1.9 3.1-.4.1-.9.2-1.3.4-4.1 1.2-7.7 3.1-10.2 7.7" class="cls-1"/><path d="M54.5 164.4c2.1-1.9 13.2.5 14.4 3.1.9 1.9-1.2 7.2-3.3 10.5-.9 1.4-1.8 2.4-2.4 2.7-2 .9-6.5-2.4-9.2-5-.9-.8-1.6-1.6-1.9-2.2m44.7-28.9q0 1.05.6 2.4c3.2 7.1 18.5 18 21.2 25.9m-10.7-34s0 .1.1.2c4.2 6.2 10.9 17.7 17.9 23" class="cls-1"/><path d="M125.9 162.1c-1.3.3-7.4 7.2-7.1 10.8v.4c.4 1.9 1.6 3.5 3.1 4.6 3.1 2.3 4.9 1.3 7.9-1.1s6.8-6.3 5.3-10-5.7-5.9-9.2-4.7M50.6 101c.2 0 .5 0 .7-.1 4.8-.8 9.1-1.5 12.5-2.2.2 0 .5 0 .7-.1m-19.3 87.8v.2c-2.8 13.7-2.2 30.5-4.4 42.7-2.6 14.1-8.6 32.1-20.2 62.2.5 0 1 .1 1.6.2 4.5.7 9.1 1.2 13.6 1.2 3.8 0 7.3-.3 9.7-.9.9-.2 1.6-.4 2.1-.7 1.8-1 14.6-44.8 15.4-46.6 2.1-5.3 3.9-12.3 9.2-29.4 1.4-4.5 3-9.7 4.9-15.7" class="cls-1"/><path d="m71.7 214.7.5.5c5.5 5.8 9.6 13.1 13.5 20.1 2.1 3.8 5.9 20.8 5.8 27.5-.3 17.4 1.3 26.5 1.5 37.3.7.2 1.4.3 2.2.4 7.2.9 16.4-2.2 21.4-7.5q.9-.9 1.5-1.8c-.4-10.3-3.2-55.2-4-57.8-3.7-11.8-14.9-33.6-19.8-42-.1-.2-.2-.3-.3-.5" style="fill:none;stroke:#000;stroke-miterlimit:10"/><path d="M85 100c0 1-3.6 8-4.7 7.9-5.2-.3-11.9-6-15.5-9.7h0M22.1 291.7c-1 1.3-1.6 2.3-2.2 3.7-.3.8-.6 1.6-.5 2.4.2 1.1 1.4 1.8 2.3 2.4 14.3 9.9 19.3 12.9 28.8 15.1 6 1.4 11.8-.6 10.2-8s-1.9-1.9-3.2-2.6c-7.4-4.3-8.7-5.9-12.1-12.6m49.7 8.5q-.3 2.55-.3 5.1c0 .8 0 1.6.5 2.2.7.8 1.9 1 3 1.2 9.3 1 19.3 4.7 28.6 4.3 3.1-.1 6.3-.5 8.7-2.3s3.6-5.4 1.7-7.6c-.9-1-2.3-1.6-3.6-2.1-5.5-2.1-11.5-5.5-17.2-8.3M90.7 101.3c-.7.1-2.1-.1-3.9-.7-.5-.2-1.1-.4-1.7-.6-4.7-1.8-11.2-5.4-16.7-11.2m39-12c-.1.4-.2 1.2-.4 2.2-.6 3.5-1.9 9.9-7.8 16.4 0 0-4.4 5.3-8.5 5.9m-7.3-37.9c3.7-1.1 7.3-.4 8.6 1.4m5.9 20.7c-3.3 2.3-7.4.1-8.6-1.3m12.6-9.3c-.3 1.5 0 2.8.9 3 .8.2 1.8-.9 2.2-2.3.3-1.5 0-2.8-.9-3-.8-.2-1.8.9-2.1 2.3Zm-16.5-3.7c-.3 1.4 0 2.7 1 2.9.9.2 1.9-.8 2.2-2.2s-.1-2.7-1-2.9-1.9.8-2.2 2.2m10.7 19.9c-4.9-.5-7.7-2.2-12.1-5.2" class="cls-1"/><path d="M96.1 91.1c-1 5.2-11.9 1.7-12.3-5.2v-.2m-19-1.6v.5c.4 5.3.6 11.3-.2 13.2M80.1 36s0 0 0 0c-2.6.2-5.3.6-8.1 1.3-12.2 3.1-17.4 18.8-17 27.9.3 7.5.3 16.2 8.5 19.2m1.6 0c5.9-5.7 7.6-26 9-29.1.9-2.1 2.2-4.1 4.2-5.2s3.9-1.5 6.1-1.6" class="cls-1"/><path d="M63.6 84.5c1.2 0 .5.7 1.2.1 0 0 .2-.1.3-.2m-1.2 13.2v1.1c0 2.5.2 5 .9 7.5.5 2 1.3 4 2.3 5.9.5.8 1 1.7 1.8 2.1 1.3.6 2.9 0 4-.8s3.4-2.6 4.5-3.5c1.3-1 2.2-1.5 3-1.4s2.1.9 3.6 2.4c.8.8 3.4 2.8 4.6 2.7.9 0 1.6-.8 1.8-1.6s0-1.7-.2-2.5-.5-1.7-.8-2.5c-.8-2-1.8-3.8-3.1-5.5 0-.1-.2-.3-.3-.4m-34.6.2c3.5 3.3 8.4 5.1 13.2 4.9m24.9.5c.9-.9 1.9-1.7 2.8-2.6h0" class="cls-1"/><path d="M43.1 107.7c9.1 2.7 13.7 10.5 23.3 11.6 6.7.8 20.3 1 27.4-2.2 2.7-1.2 4.4-2.9 4.4-5.2v-.7M49.6 130c14.9 1.9 31.7 4.9 46.3 1.6m-60.2-13s0 0 0 0c5.6.6 10.8 3.5 14.3 8m-3.8 7.4c-4.7-3.2-10.3-4.9-16-4.9m11.9 11.4s0 0 0 0c-5.3-1.3-11.2 0-15.3 3.5m69.1-18.9c2.3-.4 4.4-1.6 6.1-3.2m4.8 13.9c-4.1 1.5-7.8 4.1-10.6 7.5m8.6-12.9c-2.9 1.2-5.8 2.5-8.7 3.7H96m-47.2 11.1c19.6 3.5 41.5 5.1 46.5 2.4m-44.6 11.5c12.1 3.2 36.4 6.4 44.4 2.7h.1m-29.8 16.1h.2c9.6 1 19 1.9 28.5.6m-40-2.8H54c-2.7-.5-4.5-1.1-6.9-2.5m37.5-125q.6.9 1.5 1.8c4.3 4.6 12.8 10.4 16.3 15.7 2.6 4 4.5 8.7 4.6 13.4 0 1.5 0 3.1-.4 4.6-.3 1-.6 2.1-.4 3.2s1.3 2 2.3 1.7c.5-.2.9-.6 1.2-1.1 7-9.5 10-22.2 6.7-33.6s-11.1-18.4-22.8-20.3c-4.1-.7-13.8-2.6-13.6 2.5v.7c.9 4.6 2 8.2 4.5 11.5Z" class="cls-1"/></svg>')}`;
export default image;