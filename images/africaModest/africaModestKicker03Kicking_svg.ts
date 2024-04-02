/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africaModest" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-11,.cls-12,.cls-3,.cls-5,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-5{fill:#54a880}.cls-7{fill:#dea339}.cls-8{fill:#ac847b}.cls-9{fill:#d5d5d4}.cls-11{fill:#ffcc69}.cls-12{fill:#e880a9}</style></defs><path d="M210.4 213c2.8 1.2 3.2 5 1.7 7.7s-4.4 4.5-7.2 5.9c-8.5 4.5-17.7 7.7-26.7 10.8-1.1.4-2.3.7-3.3.3h-.3c-.3-.3-.6-.8-.8-1.3-1.5-3.1-2.7-6.5-3.4-9.9v-.2c.9 3.6 10.2-6.3 9.5-7.5-.6-1.2-1-2-1-3.4h1c8.2-.8 18.1-1.9 26.2-2.6 1.5-.1 3-.3 4.3.3Z" class="cls-9"/><path d="M179.9 218.8c.6 1.2-8.6 11.1-9.5 7.5v.2h-.2c-18.8-7.8-21.2-.2-32.5-10.5-10.1-1.9-12.6.9-18.3.9 5.1-4.4 10.2-9.9 12.4-20.8 8.5 3.5 1-.5 11.6 6 13.9 5.1 21.4 8.1 35.4 13.2 0 1.4.4 2.2 1 3.4Z" class="cls-5"/><path d="M137 302.7c1.9 2.3.8 6-1.6 7.8s-5.6 2.2-8.7 2.3c-9.3.4-19.3-3.4-28.6-4.6-1.1-.1-2.3-.3-3-1.2-.5-.6-.5-1.5-.5-2.3 0-3.2.3-6.4 1-9.5 0-.3.1-.5.2-.8 1.1 2 5.4 3.1 7.2 1.7 1.1-.8 1.6-2.1 2-3.4s.8-2.6 1.7-3.5c.3-.3.5-.5.8-.6.5-.2 1.1-.1 2.1.2h.1c7.7 3 16.1 8.7 23.7 11.7 1.3.5 2.7 1.1 3.6 2.1Z" class="cls-9"/><path d="M110.4 155c-.9.1-1.6.3-1.9.3-.2-1.9-.5-2.5-.6-4.4 5.5.2 10.6-.3 16-1.4.2 2.3.3 3.8.1 3.9 0 0-.5.2-1 .2-1.7.3-5.2.5-6.2.6-1 0-3.4.3-5.4.6-.3 0-.6 0-.9.1Z" class="cls-7"/><path d="M64.7 146.2v-.2c-3.9-4.6-6.1-10.5-6.1-16.4 2-1.9 4.4-3.9 5.2-4.6 0 .4.1.7.2 1 .9 2.5 7.2 4 8.8 6.2 2.9 3.8 5.7 5.6 9.3 8.7 3.7 3.2 8.3 5.6 13.1 6s10.1-1.5 12.9-5.5c1.7-2.4 6.8-3.1 7.6-6 .6-2.3 1-4.4 1.3-6.4 4.4 5.6 6.2 15.3 6.8 20.7-5.4 1.1-10.5 1.6-16 1.4.2 1.9.4 2.5.6 4.4.3 0 1-.2 1.9-.3 0 1.1-.1 1.5-.2 2.6-7.9 1.8-11.3 1.3-18.8 2.8-.1-2.9-9.2-7.8-11.7-6.6-1.5.7-3.3 4.3-4.3 7.7h-.1c-2.2-.3-4.5-.4-6.8-.2h-.1c0-1.8 0-3.7.1-5.9 0-4.9.2-8.3-.2-12.2-3.4 3.2-3.5 3-4.7 3.9.4-.3.8-.6 1.1-.8Z" class="cls-11"/><path d="M109.9 170.4c-7.1 1.1-12.6-.4-22.3-1.5v-.3c.1-2.9 1.2-5.9 3-8.2h.8c7.4-1.5 10.8-1 18.8-2.8.5-.1 1-.2 1.6-.4-.1-.8-.4-1.6-.5-2.3 2-.3 4.4-.5 5.4-.6 1 0 4.5-.3 6.2-.6.3 3.3.5 8.3-1 11.3-1 1.9-2 2.1-2.9 2.7-3.5 1.4-6.5 2.2-9.2 2.6Z" class="cls-12"/><path d="M63.7 125c-.6-4.2 3.8-10.7 4.2-14.7.9-8.2 1.8-16.5 2.7-24.7.6-5.4 1.3-11.1 4.4-15.6 3.2-4.6 8.5-7.2 14-8.4 5.5-1.1 11.1-.8 16.6-.5 4.9.3 8.7 4.2 11.7 8 2.5 3.3 4.1 10.6 4.5 14.8.3 3.4-.9 16-2.2 24.2-1.4 9.1-1.5 14.4-2.6 20.8-.3 2-.8 4.1-1.3 6.4-.7 2.9-5.8 3.5-7.6 6-2.8 4-8 5.9-12.9 5.5s-9.4-2.8-13.1-6c-3.6-3.1-6.5-4.9-9.3-8.7-1.6-2.1-7.9-3.7-8.8-6.2-.1-.3-.2-.7-.2-1Zm55.8-33.2C121 74.3 108.6 70.1 94.7 77c-7.8 3.9-18.2 24.1-6.3 37.2 6.3 4.7 13.1 6.4 15.5 5.9 3.9-.8 9.4-6.5 9.4-6.5 7.5-6.7 5.6-19.8 6.1-21.9Z" class="cls-7"/><path d="M121.2 240.1c1 4.6-2.9 11.8-5.1 19.9-2.6 9.6-5.3 19.4-8.7 28.6-.3.2-.5.4-.8.8-.9 1-1.3 2.3-1.7 3.5s-.9 2.6-2 3.4c-1.8 1.4-6.1.2-7.2-1.7 0 .3-.1.5-.2.8-.3-9.8-.7-27.9 2.5-37.1 1.1-3.1 2.2-6.7 2.7-10s.8-1.5-.7-4.6c3.1-4.7 6.7-12 7.4-13.8 1.6-3.6 4.1-6.2 7-8.7.4.6 6.7 18.3 6.8 19Z" class="cls-5"/><path d="M67.2 189.2c1.1-9.3.9-10.6 1.1-23.2h6v1.4c1 2.4 9.9 2.2 12.4 1.3h.8c9.6 1.1 15.2 2.6 22.3 1.5-.7 2.8 1.1 13.1 1.2 17.7h.2c5.9 2 16.3 5.7 20.6 8-2.2 10.9-7.3 16.4-12.4 20.8-1.7 1.5-3.5 2.8-5.1 4.2-2.9 2.5-5.4 5.1-7 8.7-.8 1.7-4.3 9.1-7.4 13.8-1.6 2.5-3.2 4.2-4.2 4-8.9-14.7-32.6-26-28.5-58.4Z" class="cls-11"/><path d="m98.3 104.4-.2.3c.5 12 9.5 12 11.8 4-4.5-.2-7.6-1.8-11.6-4.3m-3.6-27.3c13.9-6.9 26.3-2.7 24.8 14.8-.5 2.1 1.4 15.2-6.1 21.9 0 0-5.5 5.6-9.4 6.5-2.4.5-9.3-1.3-15.5-5.9-11.9-13.1-1.4-33.3 6.3-37.2ZM116 95.6c.3-1.5-.2-2.8-1.1-2.9s-1.7 1-2 2.5.2 2.8 1 2.9 1.7-1 2-2.5Zm-16.4-2.9c.3-1.4-.2-2.7-1.1-2.8s-1.8.9-2 2.3c-.3 1.4.2 2.7 1.1 2.8s1.8-.9 2-2.4Z" class="cls-8"/><path d="M114.9 92.7c.8.1 1.3 1.4 1.1 2.9-.3 1.5-1.2 2.6-2 2.5s-1.3-1.4-1-2.9 1.2-2.6 2-2.5Z" class="cls-3"/><path d="M111.1 188.1h.2z" style="stroke-width:0;fill:#face0b"/><path d="M110 108.7c-2.2 8-11.2 8-11.8-4l.2-.3c4 2.4 7.1 4 11.6 4.3" style="stroke-width:0;fill:#fff"/><path d="M98.5 89.8c.9.1 1.4 1.4 1.1 2.8s-1.2 2.5-2 2.4c-.9-.1-1.4-1.4-1.1-2.8s1.2-2.5 2-2.3Z" class="cls-3"/><path d="M91.5 160.3c-.2.2-.4.2-.6.3h-.2c-1.8 2.2-2.9 5.1-3 8.1v.3h-.8c-2.4.9-11.4 1.2-12.4-1.3-.1-.3-.1-.8 0-1.4.1-1.2.5-2.8 1-4.5 1.1-3.4 2.8-7 4.3-7.7 2.5-1.2 11.6 3.7 11.7 6.5Z" class="cls-8"/><path d="M75.3 161.5h.1c-.6 1.7-.9 3.4-1 4.6h-5.9v-4.8h.1c2.3-.1 4.5 0 6.8.2ZM64.6 146v.2c-.3.3-.6.5-1 .8-.2.1-.3.2-.6.4-.1 0-.2.1-.3.2-1.2-.6-4.6-5.6-5.2-7-.4-1-1.4-5-1.7-6.9-.1-.6-.2-1-.2-1.1 0-.4 1.4-1.7 2.9-3.1 0 6 2.2 11.9 6 16.5Z" class="cls-7"/><path d="M63.6 147c-.2.1-.4.3-.6.4.2-.2.4-.3.6-.4" style="stroke-width:0;fill:#ddbca1"/><path d="M57.5 140.7c.6 1.4 4 6.4 5.2 7-3.2 2.2-7.5 4.9-11.2 7.8-4.4 8-7.6 11.7-10.9 18.2 0 0 0 .1-.1.2q-4.05.75-7.8 2.4c0-.2.2-.3.3-.4 2.5-11.4 4-17.3 10.7-26.9 3-4.3 9-12.2 12.1-15.3h.1c.4 2 1.3 5.9 1.7 6.9Z" class="cls-12"/><path d="M40.5 173.9s0-.1.1-.2c2.3.6 4.4 8.9 2.9 10.7-1.6 1.9-10.6 2.8-12.2 1.7-1.7-1.1 0-7.5 1.2-9.8 2.5-1.1 5.1-1.9 7.8-2.5Z" class="cls-8"/><path d="M62.7 147.7c-1.2-.6-4.6-5.6-5.2-7-.4-1-1.4-5-1.7-6.9-.1-.6-.2-1-.2-1.1 0-.4 1.4-1.7 2.9-3.1 2-1.8 4.4-3.8 5.2-4.5.1 0 .2-.2.2-.2m-.3 22.1c-.2.1-.3.2-.6.4m5.5-4.5-.2.2c-3.4 3.2-3.5 3-4.7 3.9m-7.9-13.3c-3 3.1-9 11-12.1 15.3-6.7 9.6-8.2 15.5-10.7 26.9" class="cls-1"/><path d="M65 146s-.2.1-.3.2c-.3.3-.7.5-1.1.8q0 0 0 0c-.2.1-.4.3-.6.4-.1 0-.2.1-.3.2-3.2 2.2-7.5 4.9-11.2 7.8-4.4 8-7.6 11.7-10.9 18.2 0 0 0 .1-.1.2 0 0 0 .2-.1.3m-7.8 2.3c0-.2.2-.3.3-.4" class="cls-1"/><path d="M40.7 173.7c2.3.6 4.4 8.9 2.9 10.7-1.6 1.9-10.6 2.8-12.2 1.7-1.7-1.1 0-7.5 1.2-9.8m75.1-28.3c0 1.3 0 2.3.1 3 .2 1.9.4 2.5.6 4.4.3 0 1-.2 1.9-.3.3 0 .6 0 .9-.1 2-.3 4.4-.5 5.4-.6 1 0 4.5-.3 6.2-.6.5 0 .9-.2 1-.2.1-.1.1-1.7-.1-3.9-.6-5.4-2.5-15-6.8-20.7m2.2 38.8c-3.5 1.4-6.5 2.2-9.2 2.6-7.1 1.1-12.6-.4-22.3-1.5h-.8m26.9-12.1c-.6.2-1.2.3-1.8.5-.6.1-1.1.3-1.6.4-7.9 1.8-11.3 1.3-18.8 2.8-.2 0-.4 0-.6.1" class="cls-1"/><path d="M91.5 160.3c-.1-2.8-9.2-7.6-11.7-6.5-1.5.7-3.3 4.3-4.3 7.7-.6 1.7-.9 3.4-1 4.5v1.4c1 2.4 9.9 2.2 12.4 1.3m36.1-14.8c.3 3.2.5 8.1-1 11.2-1 1.9-2 2.1-2.9 2.7m-50.6-12.4c0 2.2-.1 4.1-.1 5.9v4.8c-.2 12.6 0 13.8-1.1 23.2m42.6-18.9s0 0 0 0c-.7 2.8 1.1 13.1 1.2 17.7h0m-43.9-51.2c.5 2.3.9 4.3 1.1 6.2.4 3.9.3 7.4.2 12.2" class="cls-1"/><path d="M131.9 196.1c-4.3-2.2-14.7-5.9-20.6-8h-.2c-1.3-.5-2.4-.8-3.1-1.1m6.4 34.2c.4.6 6.7 18.3 6.8 19 1 4.6-2.9 11.8-5.1 19.9-2.6 9.6-5.3 19.4-8.7 28.6m-7.5-45.1c1.5 3 1.2 1.2.7 4.6-.5 3.3-1.6 6.9-2.7 10-3.1 9.2-2.7 27.3-2.5 37.1M67.7 186.2c-.2 1-.3 2-.4 3-4.1 32.4 19.6 43.7 28.5 58.4m36.1-51.5c8.5 3.5 1-.5 11.6 6m-24 14.8c5.7 0 8.2-2.8 18.3-.9m0 0c11.3 10.3 13.7 2.7 32.5 10.5m8.6-11.1c-13.9-5.1-21.4-8.1-35.4-13.2" class="cls-1"/><path d="M170.4 226.3c.9 3.6 10.2-6.3 9.5-7.5-.6-1.2-1-2-1-3.4s-.3 0 1 0" class="cls-1"/><path d="M174.9 237.7c1 .5 2.2.1 3.3-.3 9.1-3.1 18.2-6.3 26.7-10.8 2.8-1.5 5.6-3.2 7.2-5.9s1-6.6-1.7-7.7c-1.3-.6-2.8-.4-4.3-.3-8.1.7-18 1.8-26.2 2.6h0-1" class="cls-1"/><path d="M170.4 226.3v.2c.7 3.4 1.9 6.8 3.4 9.9.2.5.5.9.8 1.3.2.2.4.4.7.6m-62.9-49.9c-.4 0-.8-.1-1.1-.2h-.2c-3.8-.9-5.9-2.9-13.6-4.6-4.1-.9-8-1.8-11.6-2.4" class="cls-1"/><path d="M111.4 154.9c0 .8.4 1.6.5 2.3v.2" class="cls-2"/><path d="M110.4 155s0 0 0 0c0 1.1-.1 1.5-.2 2.6m21.7 38.5c-2.2 10.9-7.3 16.4-12.4 20.8h0c-1.7 1.5-3.5 2.8-5.1 4.2-2.9 2.5-5.4 5.1-7 8.7-.8 1.7-4.3 9.1-7.4 13.8-1.6 2.5-3.2 4.2-4.2 4m0 46.9c1.1 2 5.4 3.1 7.2 1.7 1.1-.8 1.6-2.1 2-3.4s.8-2.6 1.7-3.5c.3-.3.5-.5.8-.6.5-.2 1.1-.1 2.1.2" class="cls-1"/><path d="M95.8 294.5c0 .3-.1.5-.2.8-.7 3.1-1 6.3-1 9.5 0 .8 0 1.6.5 2.3.7.9 1.9 1.1 3 1.2 9.2 1.1 19.3 5 28.6 4.6 3-.1 6.3-.5 8.7-2.3s3.6-5.5 1.6-7.8c-.9-1.1-2.3-1.6-3.6-2.1-7.7-3-16.1-8.7-23.7-11.6M58.6 129.6c0 5.9 2.2 11.8 6 16.4m43.3 5c5.5.2 10.6-.3 16-1.4m-33.3 10.9c-1.8 2.3-2.9 5.2-3 8.2m-19.1-7.4c2.3-.1 4.5 0 6.8.2m-6.9 4.6h5.9m-33.9 7.8c-2.7.6-5.3 1.4-7.8 2.5q0 0 0 0c-.1 0-.2 0-.3.1m87.2-84.7C121 74.3 108.6 70.1 94.7 77c-7.8 3.9-18.2 24.1-6.3 37.2m31.1-22.4c-.5 2.1 1.4 15.2-6.1 21.9 0 0-5.5 5.6-9.4 6.5-2.4.5-9.3-1.3-15.5-5.9" class="cls-1"/><path d="M116.6 88.8c-.3-2.4-2.6-2.3-3.6-.9m-12.7-3.4c-1.3-1.8-3.7-2.2-6.3 0m17 15.9c.5 2.2-2.4 3-4.6 3.8m6.5-9.1c-.3 1.5.2 2.8 1 2.9s1.7-1 2-2.5-.2-2.8-1.1-2.9-1.7 1-2 2.5Zm-16.5-2.9c-.3 1.4.2 2.7 1.1 2.8s1.8-.9 2-2.4c.3-1.4-.2-2.7-1.1-2.8s-1.8.9-2 2.3Zm13.6 16.5c-4.5-.2-7.6-1.8-11.6-4.3l-.9-.6" class="cls-1"/><path d="M110 108.7c-2.2 8-11.2 8-11.8-4" class="cls-1"/><path d="M119.6 108.1c-1.4 9.1-1.5 14.4-2.6 20.8-.3 2-.8 4.1-1.3 6.4-.7 2.9-5.8 3.5-7.6 6-2.8 4-8 5.9-12.9 5.5s-9.4-2.8-13.1-6c-3.6-3.1-6.5-4.9-9.3-8.7-1.6-2.1-7.9-3.7-8.8-6.2-.1-.3-.2-.7-.2-1-.6-4.2 3.8-10.7 4.2-14.7.9-8.2 1.8-16.5 2.7-24.7.6-5.4 1.3-11.1 4.4-15.6 3.2-4.6 8.5-7.2 14-8.4 5.5-1.1 11.1-.8 16.6-.5 4.9.3 8.7 4.2 11.7 8 2.5 3.3 4.1 10.6 4.5 14.8.3 3.4-.9 16-2.2 24.2" class="cls-1"/><path d="M82.6 122.7c3.7 3 7.4 6.1 11.9 7.7s9.9 1.5 13.5-1.6" class="cls-2"/></svg>')}`;
export default image;