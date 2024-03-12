/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-10,.cls-3,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-7{fill:#8d352e}.cls-8{fill:#b62026}.cls-9{fill:#684c45}.cls-10{fill:#fff}</style></defs><path d="M137.8 303.9c2.1 3.3-.2 7.9-3.6 9.8-3.5 1.9-7.7 1.7-11.7 1.3-12.1-1.3-19.2-4-30.9-7.2-1.4-.4-3-.9-3.6-2.2-.5-.9-.4-2-.3-3.1.6-4.4.1-4.7 1.7-8.7 15.8 2.6 15.1-.6 20.7-9h.1c9.3 5.4 14 10.2 23.3 15.5 1.6.9 3.3 1.9 4.3 3.5Z" class="cls-7"/><path d="M130.3 154.2c1.5 3.3-4.3 11.2-7.2 13.4s-4.7 3-7.7 1c-1.5-1-2.8-5.2-3.2-6.9-.2-.8-.1-1.6.2-2.5.9-2.8 3.7-6 5.7-7.4 2.6-1.9 0-1 3.2-1.7 3.5-1.1 7.6.9 9 4.2Z" class="cls-9"/><path d="M121.3 149.9c-3.1.7-.6-.2-3.2 1.7-2 1.4-4.8 4.6-5.7 7.4h-.4c-3-8.1-15.2-9.6-21.2-25.8 0-.8.1-1.7.2-2.6 3.3-4.2 7.7-2.2 12.1-4 6.5 6.2 13.8 20.3 18.2 23.3" class="cls-10"/><path d="M12.7 283.6c-.5-.3-.9-.6-1.4-.9 0-.8 19.8-55.1 19.9-55.8 1-18.3-1.7-33.3 5.3-54.4v-.2c18.4 5.5 32 8.3 51.3 6.4 7.6 11 20.6 35.1 21.6 45.9 0 .7.8 59.7.7 60.3-5.7 8.4-4.9 11.6-20.7 9-.5 0-1.1-.2-1.7-.3-.2-.9-5.7-56.8-6-57.7-4.1-12.6-13-26.5-15.7-31.1h-.2c-3.8 11.8-8 25.8-11.6 37.3-.3.9-15.8 43.3-16.1 44.2-12.2-1.7-16.2 2.9-25.4-2.7" style="stroke-width:0;fill:#414a61"/><path d="M103.1 126.7c-4.5 1.7-8.8-.2-12.1 4 .3-3.8.6-8.1.9-13.2.2-3.3 1.3-16.2-5.8-26.1-1.2-1.7-2.6-3.2-4.3-4.7 16.7 7.5 19 31.1 23.1 39.1q-.9.6-1.8.9" class="cls-8"/><path d="M106.5 26.7c2.7 8.1-1.7 16.6-5.1 23.7.9-2.4 1.6-4.9 1.6-7.3.5-3.5-7-5.3-10-7-3.1-1.5-14.4-5.4-17.9-4.3-3.3 1.4-6.3 1.5-7.2 6.2S63.2 54.8 63 54.5c-1.6-2.3-.9-5.4-2.1-8-.7-1.5-4.6-3.5-6.7-2-1.2.8-2.2 4.7-2.1 6.4s1.5 6.3 2.8 7c-.3 3 .7 3.8 1 4.8-7.4-14.6-4.8-24.2-1.9-35 2-7.6 5.9-11.3 7.6-12.2 11.5-6.8 39 4.8 45.1 11.2Z" style="stroke-width:0;fill:#181817"/><path d="M101.3 50.3c-1.5 4-3.6 7.5-3.6 9.5 0 2.3-2.1 9-6.5 16.2 0 0-5.7 8.3-11.9 8.7h-1.4C72.1 84 66 77.1 62 73.2c-3.1-3.1-5-5.4-6.2-9.9v-.1c0-.2-.1-.4-.2-.6-.2-1-1.3-1.8-1-4.8-1.3-.7-2.7-5.2-2.8-7s.9-5.6 2.1-6.4c2.1-1.5 6 .5 6.7 2 1.2 2.6.5 5.7 2.1 8 .2.3 4-11.8 4.9-16.5s3.9-4.8 7.2-6.2c3.5-1.1 14.8 2.8 17.9 4.3 3 1.6 10.5 3.4 10 7 0 2.4-.7 4.9-1.6 7.3Zm-3.5 3.4c0-.8-3.3-4-4.5-3.8-1.1.2-2.3 2.3-.9 3.1.5.3 3.3 1.6 3.8 1.9.7.3 1.5-.4 1.6-1.2m-3.4 6.5c.3-1.6 0-3.1-.8-3.3s-1.7 1-2 2.6 0 3.1.8 3.3 1.7-1 2-2.6m-18.2 8c-1.6 6.5 8.4 13.6 10.9 5.1-4.6-.6-6.8-1.8-10.9-5.1m6.7-19.8c.7.2 2.4-2.2-.3-3-2.8-.9-8.3-1.8-8.6 1.6 0 .3 7 .9 8.9 1.4m-3.7 7.7c.3-1.6-.1-3-.9-3.2s-1.7.9-2 2.5 0 3 .9 3.2c.8.2 1.7-.9 2-2.5" class="cls-9"/><path d="M93.2 49.9c1.3-.2 4.6 3 4.5 3.8 0 .8-.9 1.5-1.6 1.2-.5-.2-3.3-1.6-3.8-1.9-1.4-.8-.2-2.9.9-3.1m.4 7.1c.8.2 1.2 1.7.8 3.3-.3 1.6-1.2 2.8-2 2.6s-1.2-1.6-.8-3.3c.3-1.6 1.2-2.8 2-2.6" class="cls-3"/><path d="M41.7 160.6c1.1.7 2.2 1.3 3 2-.4 3.9 4.5 7.7 7.4 9.2 2.1 1.1 11.6 3.3 9.9-1.7 1.2-.4 3.4-2.8 1.4-4.2 1.4-.8 2.6-3 .9-5.1 4.5-2.9 1.7-5.1-1.2-6.7-.6-6.6-9-3.1-13.3-3v.2c-1.2-.2-2.4-.6-3.4-1.3-2.2-1.4-4.1-3.6-5.7-5.8 1.3-12.3 2.2-20.7 1.1-28.5 4.1-10.3 7.8-22 6.6-25-.2-.6-.5-1.2-.8-1.7a28 28 0 0 0 6.9-2.3c7.8 7.7 16.7 12.3 23.6 10.5 2.9-.8 4.3-3 3.9-6.1h.2c1.4 0 2.4.1 3.8.2h.1c7.1 9.8 6 22.7 5.8 26q-.45 7.5-.9 13.2c0 .9-.1 1.8-.2 2.6-1.3 17.7-2.3 24.3-3 45.4-19.3 1.9-32.9-.9-51.3-6.4l-1.1-.3c1.9-5.9 2.4-6.9 3.4-13 1 .5 2 1.1 2.9 1.6Zm41.4-41q.3-3.75-1.5-6c-1.3-1.5-3.1-2.3-5.6-2.6-3.2-.3-6 1.1-8.5 4.2l3.5 4.2c1.5-1.9 3-2.8 4.3-2.7 1.5.1 2.1 1.2 1.9 3.1-.2 2.1-1.2 3.1-2.9 3l-2.2-.2-.5 5.7 2.2.2c1.2.1 2 .5 2.4 1.1s.6 1.7.5 3.2c-.2 2.3-1.2 3.3-3 3.2-1.6-.1-2.9-1.5-3.9-3.9l-4.5 3.3c1.8 4 4.4 6.2 7.8 6.5q4.05.45 6.6-1.8c1.7-1.5 2.7-3.7 3-6.8.4-3.8-.7-6.3-3.1-7.5 2.2-1.1 3.5-3.1 3.8-6.3Z" style="stroke-width:0;fill:#d14752"/><path d="M86.1 91.3H86c-1.4 0-2.4 0-3.8-.2H82c-.2-1.6-.9-3.4-2.2-5.3.7.2 1.4.5 2 .8 1.7 1.4 3.1 3 4.3 4.7m-4.5 22.3q1.95 2.25 1.5 6c-.3 3.1-1.6 5.2-3.8 6.3 2.5 1.2 3.5 3.6 3.1 7.5-.3 3.1-1.3 5.3-3 6.8s-3.9 2-6.6 1.8c-3.4-.3-6-2.5-7.8-6.5l4.5-3.3q1.5 3.75 3.9 3.9c1.8.2 2.8-.9 3-3.2.1-1.5 0-2.5-.5-3.2s-1.2-1-2.4-1.1l-2.2-.2.5-5.7 2.2.2c1.7.2 2.7-.8 2.9-3 .2-1.9-.5-2.9-1.9-3.1-1.3-.1-2.7.8-4.3 2.7l-3.5-4.2c2.4-3.1 5.3-4.5 8.5-4.2 2.5.2 4.3 1.1 5.6 2.6Zm5.5-40.4c-2.5 8.6-12.5 1.4-10.9-5.1 4.1 3.3 6.3 4.5 10.9 5.1" class="cls-10"/><path d="M82 91.2c.4 3.1-1 5.3-3.9 6.1-6.9 1.8-15.9-2.7-23.6-10.5-1.2-1.2-2.3-2.4-3.4-3.7 1.5-.3 2.8-.5 3.6-.7 4 5.7 12.8 8.4 15.4 9.1 2.7.7 6.1.5 7.7-1.8.5-.8.3-3.8.2-4.5l1.8.6c1.3 1.9 2 3.8 2.2 5.4" class="cls-10"/><path d="M82.6 45.4c2.7.8.9 3.2.3 3C81 47.9 74 47.3 74 47c.3-3.4 5.7-2.4 8.6-1.6m-4.3 7.5c.8.2 1.2 1.6.9 3.2s-1.2 2.7-2 2.5-1.2-1.6-.9-3.2 1.2-2.6 2-2.5" class="cls-3"/><path d="M78 85.3c0 .7.3 3.7-.2 4.5-1.6 2.3-5 2.5-7.7 1.8s-11.4-3.4-15.4-9.1c2.2-1.3 3-12.4 1.3-19.1 1.2 4.5 3.1 6.8 6.2 9.9 4 3.9 10 10.9 15.9 11.5v.5Zm-28.2 66.1v-.2c4.3-.1 12.8-3.6 13.3 3 2.8 1.6 5.6 3.8 1.2 6.7 1.6 2.1.4 4.3-.9 5.1 2 1.4-.2 3.8-1.4 4.2 1.7 5-7.8 2.8-9.9 1.7-2.9-1.5-7.8-5.3-7.4-9.2-.8-.7-1.8-1.3-3-2 0-3.8 1.7-7.5 4.6-9.9v-.6c1.1.7 2.2 1.1 3.5 1.3Z" class="cls-9"/><path d="M58.6 308.3c1.1 3.8-2.3 7.6-6.2 8.4-3.9.9-6.8.9-10.5-.6-11.3-4.5-21.8-10.9-32.2-17.2-1.2-.8-2.6-1.7-2.9-3.1-.2-1 .2-2.1.6-3 1.8-4.1 2.5-5.7 5.2-9.3 9.2 5.5 13.2.9 25.4 2.7 7.5 7.7 9.9 9.8 17.4 17.5 1.3 1.3 2.7 2.7 3.2 4.5Z" class="cls-7"/><path d="M51 83.1c1.1 1.3 2.2 2.5 3.4 3.7-2.3 1.1-4.4 1.7-6.9 2.3-1.6-3-3.7-4-7.9-3.7 1.7-.4 7.3-1.5 11.4-2.3m-20 50.2c1.6 1.1 3.2 2.6 5.2 4.8 1.3 1.5 2.8 3.8 4.5 6.2 1.6 2.2 3.5 4.5 5.7 5.8v.6c-3 2.4-4.7 6.2-4.7 9.9-.9-.5-1.9-1.1-2.9-1.6-4.2-2.2-9-4.4-11.8-6.2-5.8-3.8-14.5-13.5-13-20.8 1-1.9 2.8-6.5 3.8-8.6 3.1 1.6 10.1 4.2 14.3 7.6-1.1 2.1 0 .2-1.1 2.1Z" class="cls-10"/><path d="M17.8 123.5c-.9-.5-1.4-.8-1.5-1.2-.4-1.1 14-36.2 23.4-37 4.2-.4 6.3.7 7.9 3.7.3.5.5 1.1.8 1.7 1.2 3.1-2.5 14.7-6.6 25-3.1 7.9-6.5 14.9-8.2 16.8-.4-.5-.9-1-1.5-1.4-4.2-3.5-11.2-6-14.3-7.6" class="cls-8"/><path d="M54.7 82.5c4 5.7 12.8 8.4 15.4 9.1 2.7.7 6.1.5 7.7-1.8.5-.8.3-3.8.2-4.5v-.1m-45.9 45.9c-4.2-3.5-11.2-6-14.3-7.6-.9-.5-1.4-.8-1.5-1.2-.4-1.1 14-36.2 23.4-37 4.2-.4 6.3.7 7.9 3.7.3.5.5 1.1.8 1.7 1.2 3.1-2.5 14.7-6.6 25-3.1 7.9-6.5 14.9-8.2 16.8-.4-.5-.9-1-1.5-1.4m6.7 27.9c-1 6.1-1.4 7.1-3.4 13l1.1.3c18.4 5.5 32 8.3 51.3 6.4.8-21.1 1.7-27.7 3-45.4 0-.8.1-1.7.2-2.6.3-3.8.6-8.1.9-13.2.2-3.3 1.3-16.2-5.8-26.1-1.2-1.7-2.6-3.2-4.3-4.7m-40 29.1c1.1 7.7.2 16.2-1.1 28.5" class="cls-1"/><path d="M77.9 85.3s0 0 0 0l1.8.6c.7.2 1.4.5 2 .8 16.7 7.5 19 31.1 23.1 39.1q-.9.6-1.8.9c-4.5 1.7-8.8-.2-12.1 4m-.1 2.6C96.7 149.5 109 151 112 159" class="cls-1"/><path d="M102.9 126.5s.2.1.2.2c6.5 6.2 13.8 20.3 18.2 23.3" class="cls-1"/><path d="M121.3 149.9c-3.1.7-.6-.2-3.2 1.7-2 1.4-4.8 4.6-5.7 7.4-.3.9-.4 1.8-.2 2.5.4 1.7 1.8 6 3.2 6.9 3 2 4.8 1.2 7.7-1s8.7-10.1 7.2-13.4-5.6-5.3-9-4.2m-84.8 22.7c-7.1 21.1-4.4 36-5.3 54.4 0 .8-19.8 55.1-19.9 55.8.5.3.9.6 1.4.9 9.2 5.5 13.2.9 25.4 2.7.3-.9 15.8-43.3 16.1-44.2 3.6-11.5 7.8-25.5 11.6-37.3 1.9-5.8 3.7-11.1 5.3-15.4" class="cls-1"/><path d="M66 204.8c2.7 4.6 11.6 18.4 15.7 31.1.3.9 5.8 56.8 6 57.7.6.1 1.2.2 1.7.3 15.8 2.6 15.1-.6 20.7-9 0-.6-.7-59.6-.7-60.3-1-10.7-14-34.9-21.6-45.9M39.7 85.4c1.7-.4 7.3-1.5 11.4-2.3 1.5-.3 2.8-.5 3.6-.7" class="cls-1"/><path d="M89.5 293.7v.2c-1.6 4-1.1 4.3-1.7 8.7-.1 1-.2 2.1.3 3.1.7 1.3 2.2 1.8 3.6 2.2 11.7 3.2 18.8 5.9 30.9 7.2 4 .4 8.2.6 11.7-1.3s5.7-6.5 3.6-9.8c-1-1.6-2.7-2.6-4.3-3.5-9.3-5.3-14-10.1-23.3-15.4m-97.6-1.5s0 0 0 0c-2.8 3.6-3.4 5.2-5.2 9.3-.4 1-.8 2-.6 3 .3 1.4 1.7 2.3 2.9 3.1 10.4 6.3 20.9 12.6 32.2 17.2 3.7 1.5 6.6 1.4 10.5.6s7.2-4.7 6.2-8.4c-.5-1.8-1.9-3.2-3.2-4.5-7.5-7.7-9.9-9.9-17.4-17.5M51 83.1c1.1 1.3 2.2 2.5 3.4 3.7 7.8 7.7 16.7 12.3 23.6 10.5 2.9-.8 4.3-3 3.9-6.1-.2-1.6-.9-3.4-2.2-5.4m-47.6 45.3c-1.1 2.1 0 .2-1.1 2.1m-17-1.1c-1.5 7.3 7.2 17 13 20.8 2.8 1.8 7.6 4 11.8 6.2 1 .5 2 1.1 2.9 1.6 1.1.7 2.2 1.3 3 2m6-11.3h-.9c-1.2-.2-2.3-.6-3.4-1.3-2.2-1.4-4.1-3.6-5.7-5.8-1.7-2.3-3.2-4.7-4.5-6.2-2-2.2-3.5-3.7-5.2-4.8-2-1.4-4.2-2.1-7.6-2.7M60 152.4c.7.5 1.9 1 3.2 1.7 2.8 1.6 5.6 3.8 1.2 6.7 1.6 2.1.4 4.3-.9 5.1 2 1.4-.2 3.8-1.4 4.2 1.7 5-7.8 2.8-9.9 1.7-2.9-1.5-7.8-5.3-7.4-9.2" class="cls-1"/><path d="M49.8 151.2c4.3-.1 12.7-3.6 13.3 3q0 0 0 0m-45.3-30.7s0 0 0 0c-1.1 2.1-2.8 6.6-3.8 8.6m33.5-43s0 0 0 0a28 28 0 0 0 6.9-2.3m27.8 4.4c1.4 0 2.4.2 3.8.2" class="cls-1"/><path d="M46.3 150.7c-2.9 2.4-4.7 6.2-4.6 9.9v.1m40.7-27.4c-.3 3.1-1.3 5.3-3 6.8s-3.9 2-6.6 1.8c-3.4-.3-6-2.5-7.8-6.5l4.5-3.3q1.5 3.75 3.9 3.9c1.8.2 2.8-.9 3-3.2.1-1.5 0-2.5-.5-3.2s-1.2-1-2.4-1.1l-2.2-.2.5-5.7 2.2.2c1.7.2 2.7-.8 2.9-3 .2-1.9-.5-2.9-1.9-3.1-1.3-.1-2.7.8-4.3 2.7l-3.5-4.2c2.4-3.1 5.3-4.5 8.5-4.2 2.5.2 4.3 1.1 5.6 2.6q1.95 2.25 1.5 6c-.3 3.1-1.6 5.2-3.8 6.3 2.5 1.2 3.5 3.6 3.1 7.5Z" style="fill:none;stroke:#000;stroke-miterlimit:10"/><path d="M61.4 15.5c-1.7.9-5.6 4.7-7.6 12.2-2.8 10.7-5.5 20.4 1.9 35" class="cls-1"/><path d="M55.9 63.3c0-.2-.1-.4-.2-.6-.2-1-1.3-1.8-1-4.8M103 43c0 2.4-.7 4.9-1.6 7.3-1.5 4-3.6 7.5-3.6 9.5 0 2.3-2.1 9-6.5 16.2 0 0-5.7 8.3-11.9 8.7H78c-5.8-.7-11.9-7.6-15.9-11.5-3.1-3.1-5-5.4-6.2-9.9" class="cls-1"/><path d="M89.2 66.3c.8 4.2-5.4 2.3-8.5.9m10.9-7.7c-.3 1.6 0 3.1.8 3.3s1.7-1 2-2.6 0-3.1-.8-3.3-1.7 1-2 2.6m-15.4-4.1c-.3 1.6 0 3 .9 3.2.8.2 1.7-.9 2-2.5s-.1-3-.9-3.2-1.7.9-2 2.5m10.9 17.8c-4.6-.6-6.8-1.8-10.9-5.1" class="cls-1"/><path d="M87.1 73.2c-2.5 8.6-12.5 1.4-10.9-5.1m-20.4-5.4c0 .2.1.4.2.6v.1c1.7 6.7.9 17.8-1.3 19.1m20.4-50.7c3.5-1.1 14.8 2.8 17.9 4.3 3 1.6 10.5 3.4 10 7M75.1 31.8c-3.3 1.4-6.3 1.5-7.2 6.2S63.2 54.8 63 54.5c-1.6-2.3-.9-5.4-2.1-8-.7-1.5-4.6-3.5-6.7-2-1.2.8-2.2 4.7-2.1 6.4s1.5 6.3 2.8 7 2.2 1 3.5 0" class="cls-1"/><path d="M100.7 51.7c.2-.4.4-.9.7-1.4 3.4-7.1 7.8-15.6 5.1-23.7-6.1-6.4-33.6-18-45.1-11.2M74.1 47c0 .3 7 .9 8.9 1.4.7.2 2.4-2.2-.3-3-2.8-.9-8.3-1.8-8.6 1.6m18.3 6c.5.3 3.3 1.6 3.8 1.9.7.3 1.5-.4 1.6-1.2 0-.8-3.3-4-4.5-3.8-1.1.2-2.3 2.3-.9 3.1" class="cls-1"/></svg>')}`;
export default image;