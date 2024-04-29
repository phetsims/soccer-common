/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="oceania" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#3b2310}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-8{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#17baac}.cls-3{fill:#c27557}.cls-4{fill:#af52c2}.cls-5{fill:#fff}.cls-6{fill:none}</style></defs><path d="M18.9 142.9v.1m59.5-49.7c0 .2 0 .3-.2.5" class="cls-6"/><path d="M78.2 93.8c-1.9 5.8-5.7 8.4-11.8 8.4-12.6 0-15.3-5-16.9-8.9 1.3-.4 2.3-.7 2.8-.7v-.8c.2 0 .6-5.6.6-5.6l.5-.6c10.1 8.5 16 8.1 20.4 5.1h.5l-.3 2.4c.3.1 1.9.4 4.1.9Z" class="cls-3"/><path d="M90 96.6c-1.6 5.5-3.3 18.9-21.6 18.7-13.2-.2-24.9-4.9-32-17 3.3-1.3 9.4-3.8 13.2-5 1.6 3.9 4.2 8.8 16.9 8.9 6.1 0 9.9-2.6 11.8-8.4 3.5.7 8.4 1.6 11.8 2.8Z" class="cls-2"/><path d="M52.6 92.5h-.2" class="cls-6"/><path d="M101 246.8h-.3c-20.1 7.6-56.7 11.1-79.8 1.4.2-2.8.4-5.8.7-8.8 25.7 6.7 53.2 6 78.5-1.9.3 3.2.6 6.4.9 9.4Z" class="cls-2"/><path d="M102.2 259.4h-.3c-8.1 4.6-17.7 5.7-26.9 6.5s-18.6 1.4-27.8.6-18.5-2.9-26.6-7.2c0-3.3.2-7.1.5-11.2 23 9.8 59.7 6.2 79.8-1.3h.3q.6 7.05 1.2 12.6Z" class="cls-4"/><path d="M103 271.7c-.2.9-4.5 2.5-10.6 4.1-4.9 1.2-10.9 2.5-16.8 3.4-4.5.7-9 1.1-12.8 1.2-5.7.1-10.7 0-15.1-.4-6.3-.5-11.4-1.5-15.5-2.7-4.4-1.3-7.5-2.8-9.7-4.4-1.6-1.1-2.1-6.2-2-13.5 8.2 4.4 17.4 6.5 26.6 7.2 9.2.8 18.6.2 27.8-.6 9.3-.8 18.9-1.9 26.9-6.5h.3c.5 5.9.8 10.2.8 12.2Z" class="cls-2"/><path d="M92.5 112.9c.7 3.3.7 8.2.3 13.6m-55-2.1s-.1-.2-.2-.2m78.1 29.1c-.1.2-.3.5-.5.7" class="cls-6"/><path d="M120 148.3c-.8 2.8-2.2 5.5-3.6 7.7-.3-.7-.7-1.4-1.1-2-2.5-3.9-7.2-7.7-11.4-7.9.1-.2.3-.4.4-.6.8-1.1 1.7-2.1 2.8-3.1 4.9-.4 10 1.9 12.9 5.9" class="cls-2"/><path d="M119.2 139.4c-1.9-3-14.9-26.6-17-30.3-2.1-4.1-7.8-10.6-10.2-11.7-.6-.3-1.2-.5-2-.8-1.6 5.5-3.3 18.9-21.6 18.7-13.2-.2-24.9-4.9-32-17q-1.5.6-2.1.9c-4 1.8-12 11-12 11-5.6 5.6-18.7 25-21.4 29.9-1.9 3.4-.6 7.5 1.7 11.3.4-3.2 2-6.2 4.6-8.2s6-2.9 9.3-2.4h0c.6 1.1 1 1.9 1.5 2.6.2.3.4.6.5.8 2-2 7.6-8.1 9-9.5s6.4-6.3 10.3-10.2c1.3 2.3 1.4 6.2 1.9 9 .8 4.8-3.2 26.4-3.6 31.3h0v.5c3.6.7 7.2 1.8 6.4 5.7 2.2 2.2 4.1 5-.7 6.2.9 2.3-.7 3.9-2.2 4.1 1.4 1.8-1.2 3.2-2.4 3.2.2 4.9-7.8 0-9.4-1.6.5 1-3.9 31.2-6.1 56.4 25.7 6.7 53.2 6 78.5-1.9-1.7-16.6-3.8-36.4-5.6-52.9-.9-8.4-1.7-16-2.4-21.9-.6-5.6-1-9.7-1.2-11.4-.3-3.2 1.3-14.6 1.9-24.8h.1c2.4 2.8 10.4 19.4 11.1 18.8l.3.2h0c.8-1.1 1.7-2.1 2.8-3.1 4.9-.4 10 1.9 12.9 5.9.9-3.1.9-6.3-.8-8.9Zm-64.8 13.9c.4 2.4 1.8 4.5 2.5 6.8 1.5 5.1-.5 13.3-2.6 18.2s-4.4 7.4-3 12.6c1 3.8 1.1 14.9 2.4 18.6 1.3 3.8 1.3 7.9.2 11.8-1.1 3.8-1.4 6-3.3 9.5-.7 1.3-1.7 2.9-3.2 3-1.8.1-3.1-1.9-3-3.7s1.1-3.4 1.9-5c1.8-3.7 2.6-8 2.1-12.1-.4-4-1-14.5-2.2-18.4-1.1-3.9-1.9-8.1-.7-12 1.2-4 4.4-7.1 5.8-11.1 3-8.4-2.8-17.6-1.6-26.5.5-3.3 1.9-6.4 2.6-9.6.7-2.8 0-5.2.2-8 0-2.1.8-3.2 2.4-1.4 3.2 3.7 3.6 5.5 2.5 10.1-1.1 4.5-3.7 12.8-2.9 17.4Zm31.8 78.2c-3.8-3.1-4.5-4.8-4.1-9.5.3-4.7 1.5-13.2-.1-17.6-.8-2.3-1.6-10.8-2.7-12.9-2.3-4.8-1.7-13.2-.5-18.3 1.3-5.2 3.1-8.1.9-12.9-1.6-3.6-3.4-7.8-5.3-11.2-2-3.5-2.6-7.6-2.1-11.6.5-3.9.4-6.1 1.7-9.9.5-1.4 1.2-3.1 2.7-3.5 1.7-.4 3.3 1.4 3.5 3.1.2 1.8-.5 3.5-1 5.2-1.2 4-1.2 8.3 0 12.3 1.1 3.9 3.3 7.4 5.1 11s3.2 7.7 2.7 11.7c-.5 4.1-3.1 7.8-3.8 11.9-1.5 8.8 4.8 23.6 5.1 32.5.1 3.3-.8 6.6-1 9.9-.2 2.9.8 5.2 1.2 7.9.3 2.1-.3 3.3-2.1 1.8Z" class="cls-4"/><path d="M104.1 145.2s0 0 0 0" class="cls-6"/><path d="M115.3 154c-1.8 2.6-3.9 5.1-5.9 7.3-4.3 4.7-8.2 7.9-10.1 13.7-.8 2.5-2.4 7-3.3 9.5l-1.4.2c-.9-8.4-1.7-16-2.4-21.9h.7c0-.2 2.3-2.1 3.3-3.3 1.5-1.9 2.9-3.5 4-5.7 1.3-2.7 2.3-5.2 3.8-7.5 4.2.1 8.9 3.9 11.4 7.9Z" class="cls-3"/><path d="M92.9 162.7s0 0 0 0m16-21.6c-.6.4-1.2.9-1.8 1.3M18.5 144l-.4.4m24.5-24.5c-.9.8-2.6 2.5-4.7 4.5" class="cls-6"/><path d="M41.7 177.1c.9 2.3-.7 3.9-2.2 4.1 1.4 1.8-1.2 3.2-2.4 3.2.2 4.9-7.8 0-9.4-1.6-2.2-2.2-5.7-7-4.2-10.3-2.9-4.2-11.6-12.9-14.7-16.6h0c1.4-5.4 4.5-11.1 9.3-12.8.2.3.4.6.5.8 1.1 1.7 2 2.7 3.7 6.3 2 4.1 3.3 11.5 8.8 14.1h0c1.3.3 3.1.5 4.8.8 3.6.7 7.3 1.8 6.5 5.7 2.2 2.2 4.1 5-.7 6.2Z" class="cls-3"/><path d="M18 143.2c-4.8 1.7-7.9 7.5-9.3 12.8l-.6 2.7c-1.8-2.1-3.9-4.7-5.5-7.4.4-3.2 2-6.2 4.6-8.2s6-2.9 9.3-2.4h0c.6 1.1 1 1.9 1.5 2.6Z" class="cls-2"/><path d="M16.5 140.6c-.1-.2-.2-.5-.4-.7m15.8 24.8c-.3-.1-.6-.2-.8-.3m11.3 6.5c-.9-1-1.9-1.9-2.4-2.5m2.4 2.5s0 0 0 0" class="cls-6"/><path d="M89.3 45.4c0-3.2-2.9-5-4.1-5.9-1.8-1.3-2.5-4-4.6-4.7-2.8-.9-5.3 2.4-8.2 2.4-2.7 0-4.8-2.9-7.5-2.9s-4.6 2.9-7.2 3.5c-1.7.4-3.4-.2-5.2-.3-1.7-.1-3.8.5-4.3 2.2-.4 1.6.8 3.3.1 4.8-.6 1.5-2.8 1.9-3.6 3.3-.7 1.2-.4 2.8.4 3.9.7 1 1.3 3.1.6 5.7-.4 1.3-2.7.6-3.6-.4-2.2-1.1-4.5.9-5.7 3.2-.6 1.2-.9 2.5-.8 3.5.6 3.9 4.7 9.3 7.7 8.2 1.6 5.7 1.2 4.2 4.5 8.4h0c2 2 3.9 3.7 5.6 5.2q0 0 0 0c10.1 8.5 16 8.1 20.4 5.1 0 0 .2-.1.3-.2 3.1-2.3 5.5-6 8.1-8.8 3.1-3.3 4.8-7.2 5.8-10.8 1.7-6.2 1-11.5 1-11.5.1-.7.2-1.3.3-2 .5-4 0-8.3-.2-11.8Zm-38 5.3c-.7 0-1-.4-.8-1 .5-1 1.9-2 4.2-2.7 1.9-.5 8.1-.6 7.2 2.3-.2.7-.8 1.2-1.6 1.3s-2.7-.4-3.4-.4c-2 0-3.4.2-5.7.4Zm6.6 13.8c-1.2 0-2.1-1.9-2.1-4.2s.9-4.1 2.1-4.1 2.1 1.9 2.1 4.1-.9 4.2-2.1 4.2m13.4 19.1c-2.1.3-5.5-.6-7.6-1.9-2-1.4-1.9-.5-4.4-4.3 1.2 1.2 12.7 4 18.4 1.4-1.5 2.8-3.1 4.3-6.5 4.8Zm10.2-19.8c-1 0-1.8-1.6-1.8-3.7s.8-3.7 1.8-3.7 1.8 1.7 1.8 3.7-.8 3.7-1.8 3.7m3.9-13.1c-.2.2-.6.3-.9.2-.3 0-5.2.4-5.9.4-1 0-1.8-.9-1.7-1.8 0-.9.7-1.7 1.6-2.1 2.3-1 4.9.1 6.5 1.6.2.2.5.4.6.7s0 .6-.1.9Z" class="cls-3"/><path d="M52.3 91.7s0 0 0 0" class="cls-6"/><path d="M83.3 60.1c0 2.1-.8 3.7-1.8 3.7s-1.8-1.6-1.8-3.7.8-3.7 1.8-3.7 1.8 1.7 1.8 3.7m-23.3.3c0 2.3-.9 4.2-2.1 4.2s-2.1-1.9-2.1-4.2.9-4.1 2.1-4.1 2.1 1.9 2.1 4.1" class="cls-8"/><path d="M76.8 70.1c-.6 5.2-5.3 3.7-9.1 3.7" class="cls-6"/><path d="M77.8 78.8c-1.5 2.8-3.1 4.3-6.5 4.8-2.1.3-5.5-.6-7.6-1.9-2-1.4-1.9-.5-4.4-4.3 1.2 1.2 12.7 4 18.4 1.4Z" class="cls-5"/><path d="M48.3 80.8c-.1-.2-.3-.3-.4-.5" class="cls-6"/><path d="M61.9 49.3c-.2.7-.8 1.2-1.6 1.3s-2.7-.4-3.4-.4c-2 0-3.4.2-5.7.4-.7 0-1-.4-.8-1 .5-1 1.9-2 4.2-2.7 1.9-.5 8.1-.6 7.2 2.3Zm23.5 1.4c-.2.2-.6.3-.9.2-.3 0-5.2.4-5.9.4-1 0-1.8-.9-1.7-1.8 0-.9.7-1.7 1.6-2.1 2.3-1 4.9.1 6.5 1.6.2.2.5.4.6.7s0 .6-.1.9Z" class="cls-1"/><path d="M92.3 67.7c-.3.8-.7 1.6-1.3 2.2s-1.4 1-2.3 1h-.5c1.7-6.3 1-11.6 1-11.6.1-.7.2-1.3.3-2 .4-.2 1.4-.3 2.2-.2.5 0 1 .2 1.1.4.4.6.6 1.3.6 2 .3 2.8-.1 5.7-1.2 8.4Zm7 234.6c-1 1.3-2.9 1.3-4.6 1.3-4.1-.1-9.9-.9-14.1-2-1.5-1.7-2.4-3.7-2.7-5.9v-.1c-.3-7.2-1-11.3-2.4-16.4 5.9-.9 11.9-2.1 16.8-3.4 0 8.8.3 15.7.7 17.7 1.5.7 3.1 1.4 4.7 2.2v.2c.7.8 1.3 2.4 1.8 3.4.4 1 .5 2.2-.2 3.1Zm-52.5-7.5c.4.7.6 1.5.5 2.3q0 0 0 0c0 .8-.3 1.5-.7 2.2-.4.8-1.4 1.6-2.5 2.4-5.1.9-11.6 2.1-16.7 2.6-.9 0-1.9.2-2.7-.3-1-.5-1.4-1.7-1.3-2.7 0-1 .6-2 1.1-2.9l-.2-.3c2.1-1.5 4.2-3 7-4.4.6-5.8.9-10.2.9-16.3 4.1 1.2 9.2 2.2 15.5 2.7-.9 5.5-1.4 10-1 14.9Z" class="cls-3"/><path d="M78 295.5v-.7" class="cls-6"/><path d="M107.6 309.4c-.9.2-1.8.4-2.8.5-4-2.3-10-3.4-14.5-2-3.9-1.5-7.4-3.6-9.7-6.3 4.2 1.1 10 1.9 14.1 2 1.7 0 3.6 0 4.6-1.3.7-.9.6-2.1.2-3.1s-1.1-2.6-1.8-3.4v-.2c2.1 1 4.2 2.1 6.2 3.1v.3c-.8.3-1.1 1-1 1.6 0 .6.4 1.2.7 1.8l3.9 6.6v.3Z" class="cls-8"/><path d="M112.3 305.9c.1 2.2-2.3 3-4.6 3.5q0 0 0 0v-.3c-1.4-2.2-2.6-4.4-3.9-6.6-.3-.6-.7-1.1-.7-1.8 0-.6.2-1.4.8-1.6v-.3c1.9.9 3.6 1.8 5.2 2.7s3.1 2.7 3.2 4.4" class="cls-3"/><path d="M44.1 301.6s0 0 0 0c-.8.6-1.7 1.2-2.2 1.6-2.4 1.9-4.7 3.4-7.1 4.5v-.2c-2.8 0-5.6-.1-8.2.6-2.5.7-4.9 2.1-6.1 4.4-.7 0-1.4.1-2.1 0-.8 0-1.7-.3-2.4-.7h0c.4-1.3 1.3-2.2 2.1-3.3.8-1 1.5-2.2 1.4-3.4 0-1.1-.7-2.2-.6-3.3 2.1-1.4 3.8-2.7 5.4-3.9l.2.3c-.5.9-1 1.9-1.1 2.9 0 1.1.3 2.2 1.3 2.7.8.4 1.8.3 2.7.3 5.1-.5 11.6-1.7 16.7-2.6Z" class="cls-8"/><path d="M34.7 307.7c-3.4 1.7-7 2.8-11.3 4.1-1 .3-2 .5-3 .7 1.1-2.2 3.6-3.7 6.1-4.4 2.6-.7 5.4-.6 8.1-.6v.2Zm-15.2-2.6c0 1.2-.6 2.4-1.4 3.4s-1.7 2-2.1 3.2h0c-.8-.3-1.4-.9-1.8-1.6-.7-1.3-.4-2.9.3-4.2.1-.2.2-.4.4-.6 1-1.4 2.5-2.4 4-3.4l.1-.1c-.1 1.1.5 2.2.6 3.3Z" class="cls-3"/><path d="M44.1 301.6h-.3m-24.8-.4c0 .2-.1.4-.1.6m1.5 10.6s0 .2-.1.3m60.4-11.1c-.4-.1-.8-.2-1.1-.3m25.3 8.6s0 0 0 0m-14.5-2c-.1 0-.3 0-.4.1" class="cls-6"/><path d="M38.7 310.1c-3.8 2-7.1 3.6-13.4 4.8-2.6.5-7.1.6-9.3-.8-3.1-1.9-4.1-5.7-1.6-8.3h0c-.7 1.3-.9 2.9-.3 4.2.4.7 1 1.3 1.8 1.7.7.4 1.6.7 2.4.7h2.1c1-.1 2-.4 3-.7 4.4-1.3 7.9-2.4 11.3-4.1 2.4-1.2 4.7-2.6 7.1-4.5.6-.4 1.4-1 2.2-1.6.2 0 .4 0 .5-.1-.2 0-.3 0-.5.1 1-.8 2.1-1.6 2.5-2.4.4-.7.6-1.4.7-2.2 1.2 5-3.7 10.5-8.6 13Z" class="cls-8"/><path d="M47 296.3c0 .2.2.5.2.8q0 0 0 0" class="cls-6"/><path d="M104.8 309.9c-4.6.5-9.8-.3-14.5-2 4.5-1.4 10.4-.3 14.5 2" class="cls-3"/><path d="M111.4 312.2c-2 1.5-4.8 1.6-7.3 1.5-6-.4-12.1-2-17.4-4.6-2.4-1.2-6.2-3.7-7.8-5.7s-2.2-4.9-.8-7.1v-.6c.3 2.2 1.2 4.2 2.7 5.9 2.3 2.7 5.8 4.9 9.7 6.3 4.6 1.7 9.9 2.4 14.5 2 1-.1 1.9-.2 2.8-.5q0 0 0 0c2.3-.5 4.7-1.2 4.6-3.5 1.9 1.6 1.1 4.8-.9 6.3Z" class="cls-8"/><path d="M18.9 143c-.3 0-.6.2-.9.3m85.9 2.8h-.4M90.1 96.3v.2m-53.7 1.8c-.1-.2-.2-.4-.3-.5M2.6 151.3v.2m117.6-2.9s-.1-.2-.2-.3m-12.9-5.9h-.2m-86 105.8h-.2m79.7-10.9c-.1 0-.2 0-.3.1m-78.5 1.9s0 0 0 0" class="cls-6"/><path d="M54.3 178.3c-2.1 4.9-4.4 7.4-3 12.6 1 3.8 1.1 14.9 2.4 18.6 1.3 3.8 1.3 7.9.2 11.8-1.1 3.8-1.4 6-3.3 9.5-.7 1.3-1.7 2.9-3.2 3-1.8.1-3.1-1.9-3-3.7s1.1-3.4 1.9-5c1.8-3.7 2.6-8 2.1-12.1-.4-4-1-14.5-2.2-18.4-1.1-3.9-1.9-8.1-.7-12 1.2-4 4.4-7.1 5.8-11.1 3-8.4-2.8-17.6-1.6-26.5.5-3.3 1.9-6.4 2.6-9.6.7-2.8 0-5.2.2-8 0-2.1.8-3.2 2.4-1.4 3.2 3.7 3.6 5.5 2.5 10.1-1.1 4.5-3.7 12.8-2.9 17.4.4 2.4 1.8 4.5 2.5 6.8 1.5 5.1-.5 13.3-2.6 18.2Zm31.9 53.2c-3.8-3.1-4.5-4.8-4.1-9.5.3-4.7 1.5-13.2-.1-17.6-.8-2.3-1.6-10.8-2.7-12.9-2.3-4.8-1.7-13.2-.5-18.3 1.3-5.2 3.1-8.1.9-12.9-1.6-3.6-3.4-7.8-5.3-11.2-2-3.5-2.6-7.6-2.1-11.6.5-3.9.4-6.1 1.7-9.9.5-1.4 1.2-3.1 2.7-3.5 1.7-.4 3.3 1.4 3.5 3.1.2 1.8-.5 3.5-1 5.2-1.2 4-1.2 8.3 0 12.3 1.1 3.9 3.3 7.4 5.1 11s3.2 7.7 2.7 11.7c-.5 4.1-3.1 7.8-3.8 11.9-1.5 8.8 4.8 23.6 5.1 32.5.1 3.3-.8 6.6-1 9.9-.2 2.9.8 5.2 1.2 7.9.3 2.1-.3 3.3-2.1 1.8Z" class="cls-2"/><path d="M93.3 47c-.5 4.2-1 5.8-1.6 10-.8 0-1.9 0-2.2.2.5-4 0-8.3-.2-11.8 0-3.2-2.9-5-4.1-5.9-1.8-1.3-2.5-4-4.6-4.7-2.8-.9-5.3 2.4-8.2 2.4-2.7 0-4.8-2.9-7.5-2.9s-4.6 2.9-7.2 3.5c-1.7.4-3.4-.2-5.2-.3-1.7-.1-3.8.5-4.3 2.2-.4 1.6.8 3.3.1 4.8-.6 1.5-2.8 1.9-3.6 3.3-.7 1.2-.4 2.8.4 3.9.7 1 1.3 3.1.6 5.7-.4 1.3-2.7.6-3.6-.4-2.2-1.1-4.5.9-5.7 3.2h-.3c-2.4-.9-3.1-4.5-2.5-7.3s2-5.3 2.2-8.1c.3-3.2-.9-6.7.7-9.3 1.7-2.7 5.4-2.6 7.5-4.9 2-2.3 2-6.4 4.3-8.3 2.1-1.7 4.9-.8 7.4-1.3 3.4-.6 6.3-3.7 9.7-3.5 4.4.2 7.4 5.4 11.7 6.5 3.4.8 7.5-.9 9.9 1.9 1.8 2 1.6 5.2 2.6 7.8.9 2.2 2.6 3.8 3.4 6 .8 2.3.5 4.8.2 7.3Z" class="cls-1"/><path d="M51.7 57.2c-.3 1.4-2 2-4.1 1.3-1.1-.4-3.1-.2-4.1 1.5-.7 1.3-1.9 4.8-3.2 4.6s-1.4-1.9-1.5-3.3c0-1.6-.4-2.7-.4-3.9 0-1.3-.2-2.1-3.5-2.8-.9-.2-2.1-.4-3-.9-.9-.4-1.4-1.6-.9-2.5.4-.6 2.8-1.2 3.5-1.5 2.3-1.1 3.7-3.8 3.7-6 0-.8 0-1.7.8-2 1.7-.7 3.8 3.6 5.4 3.7.9 0 4.2-1.5 5-1.8s1.8-.2 2.3.5c.5.9 0 2-.6 2.8-.9 1.3-1.2 1.8-2.1 3.1-.5.8-1.5 2.1 1.2 4.6.7.7 1.8 1.6 1.7 2.7Z" class="cls-5"/><path d="M44.3 51.7c-.5-2.2-2.5-1.7-3.2-1.1s-.7 1.7 0 2.4 1.6.8 2.4.3c.6-.3 1-1 .8-1.7" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#f8ad3b"/><path d="M36.5 48.7c1.1-.1 2.2.2 2.9 1m4.7-4.2c.8.6 1.2 1.7 1 2.7m3.1 2.6c-.5.8-1.3 1.3-2.1 1.5m.6 6c-1.4-.6-2.6-1.3-3.8-2.3m-4.2.5c0-.9.3-1.8.8-2.5-.1 0-.2.2-.3.3" class="cls-6"/></svg>')}`;
export default image;