/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africaModest" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-10,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{stroke-width:0}.cls-4{fill:#f8e7d7}.cls-5{fill:#7080a9}.cls-6{fill:#899bcf}.cls-7{fill:#c6a893}.cls-10{fill:#fff}</style></defs><path d="M45.5 165.1c.5 1.4 0 2.6-2.7 3.3.2.6.3 1.2.2 1.7-.2 1.4-1.3 2.4-2.3 2.5 1.4 1.8-1.2 3.3-2.3 3.3.1 2.5-1.8 2.5-3.9 1.7-.8 4.7-2.6 10.5-3.4 21.7.2.4 1.5.8 3.4 1.1 5.5.9 16.6 1.3 26.7 1.6 1.4 0 2.7 0 4 .1.3 0 1.2-1.4 2-2.8.9-1.4 1.7-2.8 2-2.8 1.7-18.2.6-66.9 0-85.6-14.3-.2-22.8-8.8-36.3-16.5 0-.2.1-.5.2-.7h-.3c-13.4 10.4-24.5 29.7-26.5 33.5-3.1 6 1.4 17.2 5.5 22.3 3 3.8 1.6 2.1 4.4 6.3l.9-.9c2.8-2.9 5.5-5.8 8.2-8.6.5-.6 1.1-1.1 1.6-1.7q-2.4-5.25-5.4-9.9c1.8-1.8 8.3-8.8 9.7-10.2 1.3-1.3 4.8-6.6 7.8-10.8.7 3.5 0 17.8-.2 21.8-.5 8.2-.3 9.6-1.3 21 3.5.5 7 1.1 6.2 5.4.9.9 1.7 1.9 2 2.9Zm18.6-47.6c0-1 .5-1.8 1.2-1.8s1.2.8 1.2 1.8-.5 1.8-1.2 1.8-1.2-.8-1.2-1.8m1.1 38.5c-.6 0-1.2-.8-1.2-1.8s.5-1.8 1.2-1.8 1.2.8 1.2 1.8-.5 1.8-1.2 1.8m0 18.4c-.6 0-1.2-.8-1.2-1.8s.5-1.8 1.2-1.8 1.2.8 1.2 1.8-.5 1.8-1.2 1.8m-1-38.6c0-1 .5-1.8 1.2-1.8s1.2.8 1.2 1.8-.5 1.8-1.2 1.8-1.2-.8-1.2-1.8m0 50.5c0-1 .5-1.8 1.2-1.8s1.2.8 1.2 1.8-.5 1.8-1.2 1.8-1.2-.8-1.2-1.8" class="cls-4"/><path d="M43.5 162.2c.9-4.3-2.7-4.9-6.2-5.4-1.3-.2-2.6-.4-3.7-.7-3-2.9-5.9-6-8.3-9.4l-.2-.2c-2.7 2.9-5.5 5.7-8.2 8.6 3.1 4.1 5.9 8.3 8.3 12.8.3 3.1 1.9 4.1 4.1 6.4.8.8 3.1 2.4 5.2 3.2s4 .8 3.9-1.7c1.2 0 3.7-1.4 2.3-3.3 1-.2 2.2-1.1 2.3-2.5 0-.5 0-1.1-.2-1.7 2.7-.7 3.2-2 2.7-3.3-.3-1-1.2-2-2-2.9Z" class="cls-7"/><path d="M21.2 300.7c-.4 1.4-.3 5.1.8 6.2 1.3 1.3 3.4 1.4 5.4 1.4 6.1 0 10.4.4 16.5.3 2.2 0 6.5.3 8-1.1 1.9-1.7.6-9.1-.7-11.1-1.4-2.1-2.7-2.8-4.6-3.4v.2c-6-1.5-8.6-2.2-14.6-1.1q0 .15 0 0c-1.1.3-2.2.7-3.3 1.3-3.1 1.3-6.7 4.2-7.5 7.1Z" class="cls-10"/><path d="M32 292.2c6-1.1 8.6-.4 14.6 1.1v-.2c-.9-.3-1.9-.5-3.1-.7-3.1-.7-7.3-1.3-11.5-.1Z" style="stroke-width:0;fill:#919eb2"/><path d="M32.1 279.6v12.6c4.3-1.2 8.4-.5 11.5.1 1.2.3 2.2.5 3.1.7.2-3.4.6-7.6 1.3-12.5-6.4.6-9.5.3-15.8-1Z" class="cls-6"/><path d="M37.2 70.4h-.1c-.9 10.3-1.5 13.9-4.1 23.5 0 .2-.1.4-.2.7 13.5 7.7 22 16.3 36.3 16.5 1.3 0 2.6 0 3.9-.1 4.6-.4 17-3.6 20-7.2 1.5-1.8 2.4-2.9 2.8-4.2.3-1 .3-2.1.1-3.8-.4-4-2.9-7.7-4.4-11.5C94 77.4 95 71 96.1 62.5c1.4-11.8-1.6-27.5-10.7-35.1-7.8-6.4-17.4-8.7-27-5.6-6.5 2.1-13.1 7-17 12.7s-5.6 13.9-5.7 20.9c0 5.8.4 10.6 1.5 14.8Zm9.4-12.9C45 32.6 65 30.3 73.9 31.3c9.4 1.1 13.3 8 14.6 16 1 6.1.5 12.9-.4 18.3-1.3 6.2-4.2 10.5-6 12.6-5.8 6.7-15.8 15-30.1-2.3-3.1-4.5-4.7-7.5-5.4-18.4" style="stroke-width:0;fill:#ffb5b2"/><path d="M33 222.9c-.7 23.8-.8 44.3-.9 56.7 6.2 1.3 9.4 1.6 15.8 1 1.9-14.6 5.5-34.5 7.3-51.8 0-.3 2.2-15.4 6-26.8-10.1-.3-21.2-.7-26.7-1.6-.8 11.1-1.5 22.4-1.5 22.4Z" class="cls-5"/><path d="M73.9 31.3C65 30.2 45 32.5 46.6 57.5c1-6.7 3.7-11.6 8.6-14.1 7.3-3.7 13.9-4.1 22.9-2.2 5.2 1.1 7.9 2.3 10.4 6.2-1.3-8-5.3-14.9-14.6-16Z" style="stroke-width:0;fill:#d98f8f"/><path d="M46.6 57.5c.8 10.9 2.4 14 5.4 18.4 14.4 17.3 24.3 9 30.1 2.3 1.7-2 4.7-6.4 6-12.6.8-5.4 1.4-12.1.4-18.3-2.5-3.9-5.2-5-10.4-6.2-9-1.9-15.6-1.5-22.9 2.2-4.9 2.5-7.6 7.4-8.6 14.1Zm11.2-2c0-1.7.7-3 1.6-3s1.6 1.3 1.6 3-.7 3-1.6 3-1.6-1.3-1.6-3m6.4 20c-1.8-1.2-1.8-.4-4-3.6 1.1 1.1 11.5 3.4 16.7 1.2-1.4 2.4-2.8 3.7-5.9 4.1-1.9.3-5-.5-6.9-1.7Zm15.9-20.3c0-1.4.6-2.6 1.3-2.6s1.3 1.2 1.3 2.6-.6 2.6-1.3 2.6-1.3-1.2-1.3-2.6" class="cls-7"/><path d="M59.4 52.5c-.9 0-1.6 1.3-1.6 3s.7 3 1.6 3 1.6-1.3 1.6-3-.7-3-1.6-3" class="cls-3"/><path d="M60.2 71.8c2.2 3.2 2.1 2.5 4 3.6 1.9 1.2 5 1.9 6.9 1.7 3.1-.4 4.5-1.7 5.9-4.1-5.2 2.2-15.7-.1-16.7-1.2Z" class="cls-10"/><path d="M65.2 115.7c-.6 0-1.2.8-1.2 1.8s.5 1.8 1.2 1.8 1.2-.8 1.2-1.8-.5-1.8-1.2-1.8m-1.1 38.5c0 1 .5 1.8 1.2 1.8s1.2-.8 1.2-1.8-.5-1.8-1.2-1.8-1.2.8-1.2 1.8m0 18.4c0 1 .5 1.8 1.2 1.8s1.2-.8 1.2-1.8-.5-1.8-1.2-1.8-1.2.8-1.2 1.8m1.3-38.6c-.6 0-1.2.8-1.2 1.8s.5 1.8 1.2 1.8 1.2-.8 1.2-1.8-.5-1.8-1.2-1.8m0 50.5c-.6 0-1.2.8-1.2 1.8s.5 1.8 1.2 1.8 1.2-.8 1.2-1.8-.5-1.8-1.2-1.8" style="stroke-width:0;fill:#e4dcd3"/><path d="M69 205.8c.9 5.7 4.6 18.3 3.8 24-.9 6.9 1.4 36.2 3.4 52.5 7.2 1.5 9.7 1.1 16.8.2.8-14.2 2.2-35.5 1.3-57.4-.6-16.5-.8-14.7-1.3-22.1-4.8 0-12.4-.8-19.2-.9-.9 0-3.9-5.5-4.8-5.5-.3 0-1.1 1.4-2 2.8.8 2.3 1.4 4.5 1.8 6.3Z" class="cls-5"/><path d="M92.5 155.8c-1.2-11.3-2.1-21.2-2.1-26v-12.3c2.3 2.9 11 18.7 11.9 20.4-1.2 2.1-2.1 4.4-3.2 6.8-1 2.3-3.7 5-5.2 6.9.3.4.7.8 1 1.1 2.3 2.4 5.1 4.6 8 6.3.7.4 1.5.8 2.2 1.2 3.4-7.2 7.2-11.5 10.6-18.7 1-2.9.8-6-1.3-9.4-1.8-3-13.7-26.8-18.6-32.4-.4 1.4-1.3 2.4-2.8 4.2-3 3.6-15.3 6.8-20 7.2-1.4.1-2.7.2-3.9.1.7 18.7 1.7 67.4 0 85.6.9 0 3.9 5.5 4.8 5.5 6.7 0 14.3.9 19.2.9 2.4 0 4.2-.3 4.7-1-.7-5.9-1.9-15.7-3.1-26.3-.8-6.6-1.6-13.6-2.3-20.1Z" class="cls-4"/><path d="M75 298.1c-1.2 2.1-1.8 8.9.5 10.2 1.6.9 19.6.9 25.2.6 1.3 0 3.8-.2 4.3-.4 1.7-.7.9-6.9 0-8.3-2-3.6-7.9-6.3-12.4-7.4-3.2.3-6.8.7-9.9.8-1.3.1-2.4.3-3 .4-2.7.6-3.6 2-4.8 4.1Z" class="cls-10"/><path d="M76.3 282.3c.8 6.6 1.6 11.1 2.1 11.1 1.1.2 2.7.2 4.5 0 3.9-.4 9.5-.8 9.9-.8 0-2.7.2-6.2.4-10.2-7.2.9-9.6 1.2-16.8-.2Z" class="cls-6"/><path d="M81.4 52.6c-.7 0-1.3 1.2-1.3 2.6s.6 2.6 1.3 2.6 1.3-1.2 1.3-2.6-.6-2.6-1.3-2.6" class="cls-3"/><path d="M82.8 293.5c3-.1 6.6-.5 9.9-.8-.4 0-6 .4-9.9.8" class="cls-10"/><path d="M92.5 155.8c.7 6.5 1.5 13.5 2.3 20.1 1-1.1.6-.4 1.5-2.2s3-12.2 6.7-14.7c-3-1.7-5.7-3.8-8-6.3l-.2.2c-1.6 2.2-.9 1.3-2.2 2.9Z" class="cls-7"/><path d="M88.2 65.6c-1.3 6.2-4.2 10.5-6 12.6-5.8 6.7-15.8 15-30.1-2.3m31.5-26.4c-1-2.2-2.9-2-3.9-.8m-18.9.3c-1.9-1.8-4.3-.9-4.7.5m24 5.7c0 1.4.6 2.6 1.3 2.6s1.3-1.2 1.3-2.6-.6-2.6-1.3-2.6-1.3 1.2-1.3 2.6Zm-22.3.3c0 1.7.7 3 1.6 3s1.6-1.3 1.6-3-.7-3-1.6-3-1.6 1.3-1.6 3Zm17.6 7c1.5 3.7-1.5 4.3-5.3 4.3" class="cls-2"/><path d="M76.9 73c-5.2 2.2-15.7-.1-16.7-1.2 2.2 3.2 2.1 2.5 4 3.6 1.9 1.2 5 1.9 6.9 1.7 3.1-.4 4.5-1.7 5.9-4.1Zm13.5 40.4v4.1c0 5.5-.1 9.6 0 12.3 0 4.8.9 14.7 2.1 26 .7 6.5 1.5 13.5 2.3 20.1 1.2 10.6 2.4 20.4 3.1 26.3-.6.7-2.3 1-4.7 1-4.8 0-12.4-.8-19.2-.9-.9 0-3.9-5.5-4.8-5.5-.3 0-1.1 1.4-2 2.8-.8 1.4-1.7 2.8-2 2.8-1.3 0-2.7 0-4-.1-10.1-.3-21.2-.7-26.7-1.6-2-.3-3.2-.7-3.4-1.1m7.7-85.6c.7 3.5 0 17.8-.2 21.8-.5 8.2-.3 9.6-1.3 21v.2" class="cls-2"/><path d="M102.9 158.9c-3.7 2.5-5.8 12.9-6.7 14.7s-.5 1.1-1.5 2.2c-.2.2-.4.5-.7.9m1.8-77.2c4.9 5.6 16.8 29.4 18.6 32.4 2.1 3.4 2.2 6.5 1.3 9.4m-25.3-23.8c2.3 2.9 11 18.7 11.9 20.4" class="cls-2"/><path d="M107.5 131.9c-2.4 1.7-4 3.7-5.3 5.9-1.2 2.1-2.1 4.4-3.2 6.8-1 2.3-3.7 5-5.2 6.9m-50.9-42.6c-.8.6-2.3 2.6-4.1 5.1-2.9 4.2-6.5 9.4-7.8 10.8-1.4 1.4-7.9 8.4-9.7 10.2l-.2.2" class="cls-2"/><path d="M32.7 93.8c-13.4 10.5-24.5 29.8-26.5 33.6-3.1 6 1.4 17.2 5.5 22.3 3 3.8 1.6 2.1 4.4 6.3" class="cls-2"/><path d="M26.8 144.9q-2.4-5.25-5.4-9.9c-1.3-2.1-2.7-4.1-4.1-6m17.2 48.6c-2.1-.8-4.4-2.4-5.2-3.2-2.2-2.3-3.7-3.3-4.1-6.4m16-8.3c.5.6 1.4 1.5 2.3 2.5.9.9 1.7 1.9 2 2.9.5 1.4 0 2.6-2.7 3.3.2.6.3 1.2.2 1.7-.2 1.4-1.3 2.4-2.3 2.5 1.4 1.8-1.2 3.3-2.3 3.3.1 2.5-1.8 2.5-3.9 1.7" class="cls-2"/><path d="M33.7 156.1c1 .3 2.4.5 3.7.7 3.5.5 7 1.1 6.2 5.4m26 46.5c-.2-.9-.4-1.8-.6-2.9q-.6-2.85-1.8-6.3m-36.1-.1c.8-11.2 2.6-17 3.4-21.7M33 222.9s.7-11.4 1.5-22.4v-.2m26.7 1.8c-3.8 11.3-5.9 26.5-6 26.8m49.9-68.8c3.4-7.2 7.2-11.5 10.6-18.7m-46.5-30.3c.7 18.6 1.7 67.3 0 85.6M32 292.2c6-1.1 8.6-.4 14.6 1.1v-.2c.2-3.4.6-7.6 1.3-12.5 1.9-14.6 5.5-34.5 7.3-51.8M32 292.2q0 .15 0 0Z" class="cls-2"/><path d="M33 222.9c-.7 23.8-.8 44.3-.9 56.7v12.6m60.6.5c0-2.7.2-6.2.4-10.2.8-14.2 2.2-35.5 1.3-57.4-.6-16.5-.8-14.7-1.3-22.1m-10.3 90.5c3-.1 6.6-.5 9.9-.8M69 205.8c.9 5.7 4.6 18.3 3.8 24-.9 6.9 1.4 36.2 3.4 52.5.8 6.6 1.6 11.1 2.1 11.1 1.1.2 2.7.2 4.5 0" class="cls-2"/><path d="M31.8 279.5h.3c6.2 1.3 9.4 1.6 15.8 1h.2m27.8 1.7h.3c7.2 1.5 9.7 1.1 16.8.2M26.8 144.9c-.5.6-1.1 1.1-1.6 1.7-2.7 2.9-5.5 5.7-8.2 8.6l-.9.9m77.8-4.6c.3.4.7.8 1 1.1 2.3 2.4 5.1 4.6 8 6.3.7.4 1.5.8 2.2 1.2M46.6 57.5c.8 10.9 2.4 14 5.4 18.4" class="cls-2"/><path d="M28.8 293.5c-3.1 1.3-6.7 4.2-7.5 7.1-.4 1.4-.3 5.1.8 6.2 1.3 1.3 3.4 1.4 5.4 1.4 6.1 0 10.4.4 16.5.3 2.2 0 6.5.3 8-1.1 1.9-1.7.6-9.1-.7-11.1-1.4-2.1-2.7-2.8-4.6-3.4-.9-.3-1.9-.5-3.1-.7-3.1-.7-7.3-1.3-11.5-.1-1.1.3-2.2.7-3.3 1.3m54 .1s0 0 0 0" class="cls-1"/><path d="M92.7 292.7c-.4 0-6 .4-9.9.8" class="cls-2"/><path d="M82.8 293.5c-1.3.1-2.4.3-3 .4-2.7.6-3.6 2-4.8 4.1s-1.8 8.9.5 10.2c1.6.9 19.6.9 25.2.6 1.3 0 3.8-.2 4.3-.4 1.7-.7.9-6.9 0-8.3-2-3.6-7.9-6.3-12.4-7.4h0" class="cls-1"/><path d="M94.7 152.8c-1.6 2.2-.9 1.3-2.2 2.9-.1.1-.3.3-.4.5m-58.4-.1c-3-2.9-5.9-6-8.3-9.4m-8.4 8.5c3.1 4 5.9 8.3 8.3 12.8 0 0 0 .2.1.3" class="cls-2"/><path d="M88.5 47.4c-2.5-3.9-5.2-5-10.4-6.2-9-1.9-15.6-1.5-22.9 2.2-4.9 2.5-7.6 7.4-8.6 14.1" class="cls-1"/><path d="M46.6 57.5C45 32.6 65 30.3 73.9 31.3c9.4 1.1 13.3 8 14.6 16 1 6.1.5 12.9-.4 18.3" class="cls-1"/><path d="M87.9 92.7q2.1-4.5 3.6-8.4C94 77.4 95 71 96.1 62.5c1.4-11.8-1.6-27.5-10.7-35.1-7.8-6.4-17.4-8.7-27-5.6-6.5 2.1-13.1 7-17 12.7s-5.6 13.9-5.7 20.9c0 5.8.4 10.6 1.5 14.8 1.9 7.7 5.8 13.6 11.6 21" class="cls-1"/><path d="M37.1 70.4c-.9 10.3-1.5 13.9-4.1 23.5 0 .2-.1.4-.2.7 13.5 7.7 22 16.3 36.3 16.5 1.3 0 2.6 0 3.9-.1 4.6-.4 17-3.6 20-7.2 1.5-1.8 2.4-2.9 2.8-4.2.3-1 .3-2.1.1-3.8-.4-4-2.9-7.7-4.4-11.5" class="cls-1"/><path d="M66.4 117.5c0 1-.5 1.8-1.2 1.8s-1.2-.8-1.2-1.8.5-1.8 1.2-1.8 1.2.8 1.2 1.8Zm.2 18.3c0 1-.5 1.8-1.2 1.8s-1.2-.8-1.2-1.8.5-1.8 1.2-1.8 1.2.8 1.2 1.8Zm-.2 18.4c0 1-.5 1.8-1.2 1.8s-1.2-.8-1.2-1.8.5-1.8 1.2-1.8 1.2.8 1.2 1.8Zm0 18.4c0 1-.5 1.8-1.2 1.8s-1.2-.8-1.2-1.8.5-1.8 1.2-1.8 1.2.8 1.2 1.8Zm.2 13.7c0 1-.5 1.8-1.2 1.8s-1.2-.8-1.2-1.8.5-1.8 1.2-1.8 1.2.8 1.2 1.8Z" class="cls-2"/></svg>')}`;
export default image;