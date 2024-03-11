/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#2d231c}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#469bdb}.cls-3{fill:#c98028}.cls-4{fill:#976a38}.cls-5{fill:#dda833}.cls-6{fill:#fff}.cls-7{fill:none}</style></defs><path d="M93.1 141.8v2.1h0c-3.1 1.3-6 2.4-10 4.5h0c-.3-1-1.7-1.9-3.5-2.6.7 0 1.4 0 2-.1.4.4.8.8 1.4 1.2v-1.3c4.2-.5 7-1.6 10.2-3.7Zm78.5 75.9h-.1c-8.1-.9-14.4 2.6-19.8 8-2.1 2.1-4 4.5-5.8 7.1-6.5 9.3-11.2 20-19.9 27.3-4.7 4-10.3 6.7-16 9.2-6.4 2.8-12.9 5.4-18.5 9.3-2.2 1.5-4.2 3.2-6 5.2-.1 0-.3 0-.4.1.3-25 .2-52.8-13.1-73.9-4.4-7-10.1-13.1-14.3-20.2s-6.8-17-4.3-24.9c.3-1.5 2.3-18.2 2.4-20v-1.8h.2c3.8 1.8 8 2.7 12.2 2.7h.3c-1.9 3.2-2.2 13.2-.8 15 1.7 2.2 10.8-.7 13-2.4h0c.6-.1.6-.1 1.3-.2l.7-.2c.9 3.3 2.7 6.4 5.4 8.4 1.8 1.3 3.9 1.7 5.9 1 1.5-.5 2.6-1.9 3.6-3.2 1.5 3.8 2.1 6.1 3 9 17.7 8.8 34 20.9 37.1 23 6.6 4.4 29.9 19.5 33.7 21.5Z" class="cls-3"/><path d="M81.6 145.7c-.6 0-1.3.1-2 .1h0c-3.7-1.4-9-2-10.5-.6-.2.2-.4.4-.5.6h-.3c-4.2 0-8.4-.9-12.2-2.8h-.2c0-2.4-.3-5.3-.5-8.1h.1c5.3 4.1 8.1 3.5 14.8 4.1 2.6.2 6 0 9.2 0 .2 2.4.7 4.9 2.1 6.6Z" class="cls-2"/><path d="M55.1 131.5v-.2m-3.3-11.2c-.2-1.7-.2-3.3 0-5.1m3.3 16.7v-.2" class="cls-7"/><path d="M79.4 137.1v2c-3.2 0-6.6.2-9.2 0-6.7-.6-9.5 0-14.8-4.1h-.1c-.1-1.2-.2-2.4-.3-3.5-1.4-3.7-2.7-7.5-3.2-11.4h0c-2.6 2.1-2.8 2.3-7.4 6.6-4.8 6.5-8 14.2-9.5 22.7-.4 2.1-.6 4.3-1.9 6-1.4 1.8-3.8 2.7-6.1 2.8s-4.6-.5-6.9-1c-1.2-.3-2.5-.7-3.4-1.4-.5-.4-.9-.8-1.2-1.4-.7-1.6 0-3.4.7-5 2-4.4 7.2-15.1 9.5-19.3.7-1.2 1.6-2.4 2.5-3.7 3.1-4.4 8.8-12 12.4-16.1.5-.5 11.9-12.7 15.5-13.5 4.7-.8 6.4-1 6.8-1h.2c-3 1.4-5.4 19.7 1.2 19.3.6 0 9.7.3 15.5.2 0 .9-.1 1.9-.2 2.8-.1 2-.1 4-.2 6.1v12.9Z" class="cls-5"/><path d="M62.7 95.7h-1m7.7-.8c-.3 0-.6.1-.8.1m32.2 78.1c-8.1-4-16.4-7.3-23.9-8.7m24 9.2c0-.2-.1-.3-.2-.5" class="cls-7"/><path d="M28 166.9c-2.3 1.7-12.1 3.2-13.8 2-2.1-1.4 1-11 2.4-13.1 1 .7 2.3 1.1 3.4 1.4 2.2.6 4.5 1.1 6.9 1 1.2.9 2.5 7.7 1.1 8.7" class="cls-4"/><path d="M80.8 158.4h-.3m24.2-20.4q-1.65.9-3 1.8" class="cls-7"/><path d="m82.8 157.9-.7.2c-.7.1-.8.1-1.3.2h0c-2.3 1.6-11.3 4.6-13 2.4-1.3-1.7-1.1-11.7.8-14.9.2-.3.3-.5.5-.6 1.5-1.3 6.8-.8 10.5.6h0c1.8.7 3.2 1.5 3.5 2.5h0c-.2.2-.4.3-.6.4-.5 3-.4 6.2.4 9.2Z" class="cls-4"/><path d="M93.6 118.2c1.3 3.9 1.7 4.5 2.6 6.7M85.6 283.7l-.4.4m76.4-55.5s0 0 0 0m-76.4 55.6v-.3" class="cls-7"/><path d="M113.8 144.7c-5.2 6.6-10.9 12.7-16 19.4-1 1.3-2.1 2.6-3.6 3.2-2.1.7-4.2.4-5.9-1-2.7-2-4.5-5-5.4-8.4-.8-3-.9-6.2-.4-9.2l.6-.3c4-2.1 6.9-3.2 10-4.5h0c2.5-1 5.2-2.2 8.6-4.1-3.2-9.3-4.6-12.8-5.5-14.9-.6 4-1 3.6-1.7 7.6-.2 1-.4 1.9-.6 2.9-3.1 1.6-6.5 2.5-10.8 3 .1-1 .2-2.1.4-3.1.2-1.5.5-3 .8-4.5.4-1.6.8-3.3 1.2-4.9 1-3.6 2.4-7.2 4-10.7h0s0 0 0 0c.8-1.9 1.8-3.8 2.8-5.6 1-1.9 2-4.8 2.3-7.9.1-1 .2-2 .2-3.1h1c2 1.2 3.4 2.5 4.7 4.2 2.1 2.6 5.6 16.8 8 21.7 3.1 6.2 7.7 17 5.2 20.4Z" class="cls-5"/><path d="M107.9 276.9c-1 3.4-2.1 6.6-3.5 10.4h0l-.8.8c-1 1-1.4 2.4-1.8 3.7s-1 2.7-2.1 3.6c-1.9 1.5-6.5.2-7.7-1.9 0-3.7-.4-7-.4-11.5v-3.5c5.5-3.9 12.1-6.4 18.5-9.3-.8 2.8-1.5 5.2-2.2 7.6Z" class="cls-4"/><path d="M161.6 228.6c-6.8 18.9-34.1 44.3-53.7 48.3h0c.7-2.4 1.4-4.9 2.2-7.6 5.7-2.5 11.3-5.2 16-9.2 8.6-7.3 13.4-18 19.9-27.3 1.8-2.6 3.7-5 5.8-7.1 3 1.4 5.8 1.6 9.9 3Z" class="cls-3"/><path d="M173 234v.2h-.2c-4.8-3.1-8.4-4.6-11.2-5.6-4.1-1.4-6.8-1.6-9.9-3 5.3-5.4 11.7-8.9 19.8-8 11.2 6.5-.7-.4 11.9 7-.2 1.4 0 2.3.4 3.6s-10.6 9.6-10.8 5.8" class="cls-4"/><path d="M171.5 217.7c-.3-.2-.7-.4-1-.6" class="cls-7"/><path d="M215.5 235.8c-2 2.4-5.1 3.7-8.2 4.6-9.3 3-18.9 4.5-28.5 6-1.2.2-2 .6-3.1.4-.7-.5-.9-1.4-1.2-2.1-1-3.4-1.5-6.9-1.6-10.5v-.2c.3 3.8 11.2-4.5 10.8-5.8s-.7-2.2-.4-3.6c8.5.7 19.1 1.4 27.5 2.1 1.5.1 3 .3 4.2 1.1 2.5 1.7 2.3 5.6.3 8Z" class="cls-6"/><path d="M83.2 138.4h-.3m10.3 3.3h-.1" class="cls-7"/><path d="M134 310.5c-2.6 1.9-6 2.3-9.2 2.4-9.9.4-20.5-3.6-30.3-4.8-1.2-.1-2.5-.4-3.2-1.3-.5-.7-.6-1.6-.6-2.4 0-3.6.4-7.3 1.3-10.9 1.2 2.1 5.7 3.3 7.7 1.9 1.1-.9 1.7-2.2 2.1-3.6.4-1.3.8-2.7 1.8-3.7.3-.3.6-.5.8-.7.5-.3 1.1-.1 2.3.2h0c8.1 3.2 17 9.2 25.1 12.4 1.4.5 2.9 1.1 3.8 2.3 2.1 2.4.8 6.4-1.7 8.3Z" class="cls-6"/><path d="M91.6 278.5v3.5c-1.8.5-4.1 1.2-6 1.7 1.8-2 3.9-3.7 6-5.2" class="cls-3"/><path d="M91.7 282h-.1m-6.4 1.8H85m7.4-194.3v-.1" class="cls-7"/><path d="M94 135.4c-.4 2-.7 3.8-.8 6.4-3.2 2.1-6 3.2-10.2 3.7 0-2.4 0-4.8.3-7.1 4.2-.5 7.6-1.4 10.8-3Z" class="cls-2"/><path d="M101.6 46.4c-.5-.4-1.2-.8-1.9-1.1-7.1-3.9-24.1.6-32.2 13.2-.4-.8-1.3-1.4-2.2-1.5s-1.9.3-2.5 1c-.8 1-.9 2.4-.9 3.7 0 1.5.3 3.1 1.1 4.3.4.6.9 1.1 1.5 1.4 0 5 1.6 10.2 5.2 14.8 1.1 1.4 2.4 2.8 3.8 4.1 3.9 3.9 7.5 6.7 10.7 6.6 2.7 0 5.5-1.5 8-3.4 1-.8 1.9-1.6 2.8-2.5 2.7-2.6 4.7-5.6 5.7-7.5 2.5-4.9 3-11.8 3-11.8 1.3-3.7 2.6-5.9 2.8-9.3-.6-6.5-1.2-9.4-5.1-12Zm-21.7 8.7c-.1-.2 3.6-1.4 5-1.4 1 0 2.9.3 3.8 1.3 1.3 1.3 1.4 2.6.4 2.2-.9-.3-1.8-2.1-4.8-2.5-1.7-.2-4.3.5-4.4.3Zm5.8 9c-.3 1.5-1.3 2.5-2.1 2.2-.8-.2-1.2-1.5-.9-3 .3-1.4 1.3-2.4 2.1-2.2s1.2 1.5.9 3m-3.2 12.7c5.9 3.4 9.1 5.4 11.9 5.4-4.3 7.8-12.8 2.6-11.9-5.4m18.7-8.6c-.4 1.5-1.3 2.6-2.1 2.4s-1.2-1.6-.8-3c.4-1.5 1.3-2.6 2.1-2.4s1.2 1.6.8 3.1Zm1.3-7.2c-1.8-1.2-3.5-.3-4.2-.5-.8-.2.1-1.1 1.7-1.5 1.2-.3 2.3.4 2.9.9.7.6 2 2.6 1.8 2.7-.1 0-1.2-1-2.2-1.6" class="cls-4"/><path d="M94.5 82.2c-4.3 7.8-12.8 2.6-11.9-5.4 5.9 3.4 9.1 5.4 11.9 5.4" class="cls-6"/><path d="M104.7 62.7c-.1 0-1.2-1-2.2-1.6-1.8-1.2-3.5-.3-4.2-.5-.8-.2.1-1.1 1.7-1.5 1.2-.3 2.3.4 2.9.9.7.6 2 2.6 1.8 2.7m-15.6-5.5c-.9-.3-1.8-2.1-4.8-2.5-1.7-.2-4.3.5-4.4.3s3.6-1.4 5-1.4c1 0 2.9.3 3.8 1.3 1.3 1.3 1.4 2.6.4 2.2Z" class="cls-1"/><path d="M68.5 95.1v.2m27.2-22.7c1.9 2.8-.9 7.1-7.3 2.8" class="cls-7"/><path d="M101.2 68.2c-.4 1.5-1.3 2.6-2.1 2.4s-1.2-1.6-.8-3c.4-1.5 1.3-2.6 2.1-2.4s1.2 1.6.8 3.1Zm-15.5-4.1c-.3 1.5-1.3 2.5-2.1 2.2-.8-.2-1.2-1.5-.9-3 .3-1.4 1.3-2.4 2.1-2.2s1.2 1.5.9 3" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M64.6 67.3c.7.4 1.6.5 2.4.3" class="cls-7"/><path d="M101.6 46.3c-.5-.3-1.2-.7-1.9-1.1-7.1-3.9-24.1.6-32.2 13.2-.4-.8-1.3-1.4-2.2-1.5s-1.9.3-2.5 1c-.8 1-.9 2.4-.9 3.7 0 1.5.3 3.1 1.1 4.3.4.6.9 1.1 1.5 1.4 0 5 1.6 10.2 5.2 14.8 0 2-.1 3.9-.3 5.6h0c-1.8-.4-10.7-7.9-11.9-13.6-1.2-5.8-1.4-11.5 0-17.2 2-7.9 5-19.1 12.1-23.2 8.6-5 28.2-6 31.3 2.2 1 2.7 2.4 8.2.5 10.4Z" class="cls-1"/><path d="M95.1 87c2.7-2.6 4.7-5.6 5.7-7.5 2.5-4.9 3-11.8 3-11.8 1.3-3.7 2.6-5.9 2.8-9.3-.6-6.5-1.2-9.4-5.1-12h0c1.9-2.2.5-7.8-.5-10.5 6.5 1.3 9.6 10.5 9.8 15.1.7 21.1-11.9 36.1-15.7 36m-.2 11.5c0 1 0 2.1-.2 3.1-.4 3.1-1.3 6-2.3 7.9-1 1.8-1.9 3.7-2.8 5.6q0 0 0 0t0 0c-1.6 3.5-2.9 7.1-4 10.7-.5 1.6-.9 3.3-1.2 4.9-.3 1.5-.6 3-.8 4.5-.2 1-.3 2.1-.4 3.1-.2 2.4-.3 4.8-.3 7.1v1.3c-.5-.3-1-.7-1.4-1.2-1.5-1.7-2-4.2-2.1-6.6V124c0-2 0-4.1.2-6.1 0-.9.1-1.9.2-2.8h0c0-.4 0-.7.1-1.1.2-2.7.6-5.4 1.2-8 .3-1.6.8-3.1 1.3-4.7h0c.7-2.1 1.5-4.1 2.6-6.1q0 0 0 0c-.1-1.5-.4-1.5-.5-2.5 2.7 0 5.5-1.5 8-3.4 1.1 1.6 1.8 3.5 2.2 5.5.2 1.2.3 2.4.4 3.6Z" class="cls-1"/><path d="M84.8 95.4s0 0 0 0c-1.1 2-1.9 4-2.6 6.1h0c-.5 1.5-1 3.1-1.3 4.7-.6 2.6-1 5.3-1.2 8 0 .4 0 .7-.1 1.1h0c-5.8 0-14.9-.3-15.5-.2-6.5.4-4.2-17.9-1.2-19.3 1.9 0 3.8-.3 5.7-.6.3-1.4.7-4.1 1-7.3h0c.1-1.7.3-3.6.3-5.6 1.1 1.4 2.4 2.8 3.8 4.1 3.9 3.9 7.5 6.7 10.7 6.6 0 1 .3 1 .5 2.5Z" class="cls-4"/><path d="M94.4 94.9c-3.1-1-6.6-.8-9.6.5-.1 0-.2 0-.3.1m-1.1 39.7c-1.3 1-2.5 2-3.8 3m15-43.3c-4.7 1.2-9 3.5-12.6 6.8m-2.8 30.9c1.1.9 2.9 2.2 4.3 2.6" class="cls-7"/><path d="M94.9 101.6c-3.5-1.9-7.8-2.3-11.6-.9m-3.9 30.5c1.1.9 3.7 0 5-.4m-3.6-24.6c2.3-.6 5.2-.9 7.4-.3 1 .2 2.1.6 2.8 1.3s1.7 1.3 1.3 2.3m-12.9 15.2c1.4 1.5 4.3 1.6 6.3 1.2" class="cls-7"/><path d="M81.9 105.9h.9c1.5 0 2.9 1 3.9 2.2 1.1 1.4 3.2 5.7 2.9 7.1" class="cls-7"/><path d="M89.6 115.1c-2.8-.8-6.9-2.2-9.8-.9m-.4 3.9c2.5 1.6 4.7 4.5 7.1 2.7.1 0 .2-.2.3-.2-2.3 1.7-4.9 2.9-7.6 3.5" class="cls-7"/></svg>')}`;
export default image;