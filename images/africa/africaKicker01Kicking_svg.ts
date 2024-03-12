/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-5,.cls-7,.cls-8{stroke-width:0}.cls-4{fill:#4f4f4f}.cls-5{fill:gray}.cls-7{fill:#d36749}.cls-8{fill:#ae8a6b}</style></defs><path d="M182.8 226c.4-1.2.9-2.5 1.4-3.7 1.1-2.7 2.3-5.2 3.5-7.1 7.7-.7 14.5-1.5 22.2-2.2 1.3-.1 2.7-.2 3.9.3 2.5 1.1 3 4.6 1.6 7.1s-4 4.1-6.6 5.5c-7.8 4.2-16.3 7.1-24.6 9.9-1 .3-2.1.7-3 .2h-.4c-.1-2.6.7-6.3 2-10" class="cls-4"/><path d="M190 212.2c-.7.6-1.5 1.7-2.3 3-1.2 1.9-2.4 4.4-3.5 7.1-20.3-9.4-35.5-14.8-51.7-22.9-16.9-8.4-43.8-7.8-61.2-15.4v-1.4c1.5-9.6 15-6.4 31.3-2.8 8.7 1.9 10.5 4.1 15.2 5 4 1.2 9.3 2.9 12 4.1 1.3.6 60.4 23 60.1 23.3Z" class="cls-5"/><path d="M71.3 186.5V184c17.4 7.6 44.3 7 61.2 15.4 16.2 8.1 31.4 13.4 51.7 22.9-.5 1.2-1 2.5-1.4 3.7-19.7-9.1-34.6-14.4-50.5-22.3-16.8-8.4-43.5-7.8-60.9-15.3 0-.6 0-1.2-.1-1.9" class="cls-7"/><path d="M180.9 235.9c0 .3-53.7-21.3-55.5-21.5-.4 0-.9-.1-1.4-.2-8.3-1.1-28-4.4-36.6-6.1q-3.3-.9-5.1-1.5c-4.3-2.2-10-7.9-10.9-18.2 17.4 7.4 44.1 6.9 60.9 15.3 15.9 7.9 30.8 13.2 50.5 22.3-1.3 3.7-2.1 7.4-2 9.9Z" class="cls-5"/><path d="M136.5 303.8c1.8 2.1.7 5.5-1.6 7.2s-5.4 2-8.2 2.1c-8.8.4-18.3-3.1-27.1-4.1-1-.1-2.2-.3-2.8-1.1-.5-.6-.5-1.4-.5-2.1 0-3.2.2-5.4.9-8.5 10.6 1.1 15.2.4 23.9-1.1 4.1 2.1 8 4.2 11.9 5.6 1.3.5 2.6 1 3.4 1.9Zm-5.2-149.7v1.9c-.2.2-.8.1-1.7-.2-3.3-1-10.3-4.3-14.7-3.4-.2 0-.3 0-.5.1-.1-1-.3-1.9-.4-3 6.1-.7 12.3 1 17.3 4.6" class="cls-4"/><path d="M128.8 80.7q.6.3.9.6c.3.6.4 1.2.5 1.9.3 1.9.6 3.8.3 5.7-.3 2.5-2.1 6.1-3.5 5.1h-.4c.5-2.8.8-5.9.8-9.6v-3.8h.1c.3 0 .8 0 1.2.2Zm-32.4 74.9c8.6-1.8 7.5-.2 18.5-3.2 4.4-.9 11.5 2.4 14.7 3.4v.3c-.3 1.6-.6 3.1-1.2 4.4-1 2-2.1 2.2-3 2.8-3.7 1.4-6.8 2.3-9.7 2.7-7.7 1.2-13.6-.5-24.2-1.7-2.6.9-11.9 1.2-13-1.3-.8-2.2 2.7-13 5.5-14.3 2.6-1.3 12.2 3.8 12.3 6.8Z" class="cls-8"/><path d="M127.4 77.1c-2-11.1-9.8-14.2-18.4-14.7-6.1-.3-13.2 1.7-18.5 10.8-1.9 3.2-3.1 7.7-3.7 8.9s-2.7 1.1-2.7-.4c-.5-1.2-1.6-1.8-2.6-1.5-.6-7.8.4-12.3 3.5-17.5 4.5-7.6 10-11.4 17.9-11.7 7-.3 19.6 1.3 23.5 10 2.9 6.6 2.3 14.8 2.3 19.6-.5-.2-1-.3-1.2-.2h-.1V77Z" style="stroke-width:0;fill:#1e160d"/><path d="M97.2 297.3c-.4 0-.7 0-1.1-.1-.5-1.3 8.1-62.4 7.1-65.1-2.4-6.4-10.5-16.7-15.8-23.9 8.5 1.7 28.2 5.1 36.6 6.1 2.6 9.4 4.3 11.7 4.3 19 0 1.1-5.5 61.6-5.6 62.7-.5 0-1 .2-1.5.3-8.8 1.5-13.3 2.3-23.9 1.1Z" class="cls-5"/><path d="M116.7 104.5c-3.7.9-10.3-1-13.9-2.6-.8-.3 2.6 4.4 7.5 5 2.9.4 4.9 0 6.4-2.3ZM85 94c-.7.2-1.5 0-2.2-.4-1.1-.7-1.8-2.1-2.4-3.5-.7-1.5-1.2-3.3-1.2-5.1s.6-3.6 1.8-4.4l.6-.3c1-.3 2.1.3 2.6 1.5 0 1.4 2 1.6 2.7.4.6-1.2 1.8-5.7 3.7-8.9 5.3-9 12.4-11.1 18.5-10.8 8.6.4 16.4 3.6 18.4 14.7v7.2c0 3.7-.3 6.8-.8 9.5-1.1 5.9-3.3 9.7-5.9 12.9-3.2 4-6.4 8.2-10.8 9.3-3.8 1-8.6-.3-15.2-6.1-.3-.3-.6-.6-1-.9-2.8-2.7-7.7-8.4-8.8-15Zm35.4-4.7c.7 0 1.2-1.2 1.2-2.7s-.6-2.7-1.2-2.7c-.7 0-1.2 1.2-1.2 2.7s.6 2.7 1.2 2.7m-17 .8c.8 0 1.5-1.4 1.4-3.1 0-1.7-.7-3.1-1.5-3.1s-1.5 1.4-1.4 3.1c0 1.7.7 3.1 1.5 3.1" class="cls-8"/><path d="M114 149.6c.1 1 .3 2 .4 3 .1 0 .3 0 .5-.1-11 3-9.9 1.4-18.5 3.2-.1-3.1-9.7-8.1-12.3-6.9-2.8 1.4-6.4 12.2-5.5 14.3 1 2.6 10.4 2.3 13 1.3 10.6 1.2 16.5 2.9 24.2 1.7-.8 3 1.2 13.6 1.3 18.5.3.1.7.2 1 .3-4.7-.9-6.6-3.1-15.2-5-16.2-3.5-29.8-6.8-31.3 2.8v3.9c-2.9-11.5-.6-28.9 1.4-49.3h-.4c-3.3 3-7.6 6.7-10.6 9.2l-.2-.4c-2.1-1.7-4.2-3.4-5.9-5.5s-3-4.5-3.4-7.2c3.9-4.4 11.3-12.2 11.9-12.7 4-3.7 7-6.6 12.3-7.7 1.6-.3 9.8-1.7 15.5-1.2-1.5 3.5-.8 7.8 1.7 10.7s6.7 4.1 10.4 3 6.6-4.3 7.2-8.1v-.2c4.3 2.2 13.2 6.4 14.5 9.8 3.4 8.4 5.3 22.2 5.6 27.1-4.9-3.6-11.2-5.2-17.3-4.6Z" class="cls-7"/><path d="M121.5 86.6c0 1.5-.5 2.7-1.2 2.7s-1.2-1.2-1.2-2.7.5-2.7 1.2-2.7 1.2 1.2 1.2 2.7" class="cls-3"/><path d="M116.7 104.5c-1.5 2.4-3.5 2.8-6.4 2.4-4.9-.6-8.3-5.4-7.5-5 3.6 1.6 10.2 3.6 13.9 2.6" style="stroke-width:0;fill:#fff"/><path d="M111.3 117.2v.2c-.7 3.8-3.7 7-7.3 8.1s-7.9-.2-10.4-3-3.2-7.2-1.7-10.7c.5 0 .9 0 1.4.1h.3c-.4 3.1-.7 6.8 1.9 8.9 4 3.1 14.6 4.3 14.6-4.3.3.2.8.4 1.3.7Z" class="cls-4"/><path d="M110 116.2v.4c0 8.6-10.5 7.5-14.5 4.3-2.7-2.1-2.3-5.8-1.9-8.9.1-1.1.3-2.1.3-2.9.4.4.7.7 1 .9 6.5 5.8 11.3 7.1 15.2 6.1Z" class="cls-8"/><path d="M104.8 87c0 1.7-.6 3.1-1.4 3.1s-1.5-1.4-1.5-3.1.6-3.1 1.4-3.1 1.5 1.4 1.5 3.1" class="cls-3"/><path d="m61.5 146.1.2.4c-1.2 1-2.2 1.8-2.9 2.3-.4-.2-.8-.5-1.2-.7-3.9-2.7-6.7-7.7-7.6-10.2-.2-.6-.3-1.1-.3-1.3s1-1.4 2.3-3c.3 2.7 1.7 5.1 3.4 7.2s3.8 3.8 5.9 5.5Z" class="cls-4"/><path d="M43.1 169.5c2.4.7 4.6 9.4 3.1 11.3-1.7 2-11.2 2.9-12.7 1.8-1.9-1.3.2-8.8 1.5-10.7 2.6-11.9 5.1-17.6 11.2-28.2 1.4-2.4 2.7-4.5 3.9-5.9.8 2.5 3.6 7.6 7.6 10.2-3.1 2.5-1.9 1.3-3.2 2.4-4.6 8.3-8 12.3-11.4 19.1" class="cls-8"/><path d="M50.1 137.7c-.2-.6-.3-1.1-.3-1.3s1-1.4 2.3-3C56 129 63.4 121.2 64 120.7c4-3.7 7-6.6 12.3-7.7 1.6-.3 9.8-1.7 15.5-1.2.5 0 .9 0 1.4.2m-20.9 25.2c-3.3 3.1-7.6 6.8-10.6 9.2-1.2 1-2.2 1.8-2.9 2.3-.4-.2-.8-.5-1.2-.7-3.9-2.7-6.7-7.7-7.6-10.2" class="cls-1"/><path d="M50.1 137.7c-1.2 1.4-2.5 3.5-3.9 5.9-6.1 10.6-8.6 16.2-11.2 28.2M57.7 148c-3.1 2.5-1.9 1.3-3.2 2.4-4.6 8.3-8 12.3-11.4 19.1 0 .2-.2.3-.3.5" class="cls-1"/><path d="M43.2 169.5c2.4.6 4.6 9.3 3.1 11.2-1.7 2-11.2 2.9-12.7 1.8-1.9-1.3.2-8.8 1.5-10.7m78.3-29.3c0 3.1.3 5.2.6 7.1.1 1 .3 2 .4 3 .1 0 .3 0 .5-.1 4.4-.9 11.5 2.4 14.7 3.4.9.3 1.5.4 1.7.2v-1.9c-.3-5-2.2-18.7-5.6-27.1-1.4-3.4-10.2-7.6-14.4-9.8-.5-.3-.9-.5-1.3-.7m15.4 46.7c-3.7 1.4-6.8 2.3-9.7 2.7-7.7 1.2-13.6-.5-24.2-1.7" class="cls-1"/><path d="M114.9 152.4c-11 3-9.9 1.4-18.5 3.2-.2 0-.4 0-.7.1" class="cls-1"/><path d="M96.4 155.4c-.1-2.9-9.7-8-12.3-6.8-2.8 1.4-6.4 12.2-5.5 14.3 1 2.6 10.4 2.3 13 1.3m37.9-8.1c-.2 1.6-.5 3.1-1.1 4.4-1 2-2.1 2.2-3 2.8m-51.9-33.8c-.2 2.6-.5 5.2-.7 7.8-2 20.4-4.3 37.8-1.4 49.3 0 .3.2.6.3 1m44-21.6s0 0 0 0c-.8 3 1.2 13.6 1.3 18.5h0" class="cls-1"/><path d="M124 214.2c.5 0 1 .1 1.4.2 1.9.2 55.5 21.8 55.5 21.5-.1-2.5.7-6.2 2-9.9.4-1.2.9-2.5 1.4-3.7 1.1-2.7 2.3-5.2 3.5-7.1.8-1.3 1.6-2.3 2.3-3 .3-.3-58.8-22.7-60.1-23.3-2.7-1.2-7.9-2.9-12-4.1-.3-.1-.7-.2-1-.3-1.4-.4-2.5-.8-3.3-1m-26.3 24.6c8.5 1.7 28.2 5.1 36.6 6.1m-41.7-7.6c1.1.5 2.9 1 5.1 1.5" class="cls-1"/><path d="M87.4 208.1c5.3 7.2 13.5 17.6 15.8 23.9 1 2.8-7.6 63.8-7.1 65.1.4 0 .7 0 1.1.1 10.6 1.1 15.2.4 23.9-1.1.5 0 1-.2 1.5-.3 0-1.1 5.6-61.6 5.6-62.7 0-7.3-1.6-9.6-4.3-19h0m-52.5-31.5v3.9c0 .6 0 1.3.1 1.9.9 10.2 6.6 16 10.9 18.2m98.9 29.4c.9.5 2 .1 3-.2 8.4-2.9 16.8-5.8 24.6-9.9 2.6-1.4 5.2-3 6.6-5.5s1-6.1-1.6-7.1c-1.2-.5-2.6-.4-3.9-.3-7.7.7-14.5 1.5-22.2 2.2" class="cls-1"/><path d="M118.3 184.9h-.4c-4.7-.9-6.6-3.1-15.2-5-16.2-3.5-29.8-6.8-31.3 2.8m22.4-73.6v-.5m-.3 3.4c.1-1.1.3-2.1.3-2.9m16.3 7.4c0 8.6-10.6 7.5-14.6 4.3-2.7-2.1-2.3-5.8-1.9-8.9m3.6 185.4c-.8 3.1-1 5.3-.9 8.5 0 .7 0 1.5.5 2.1.6.8 1.8 1 2.8 1.1 8.8 1 18.3 4.5 27.1 4.1 2.9-.1 5.9-.5 8.2-2.1 2.3-1.7 3.4-5.1 1.6-7.2-.9-1-2.2-1.5-3.4-1.9-4-1.5-7.8-3.5-11.9-5.6" class="cls-1"/><path d="M71 183.9h.3c17.4 7.7 44.3 7.1 61.2 15.5 16.2 8.1 31.4 13.4 51.7 22.9" class="cls-2"/><path d="M70.8 188.2c.2 0 .4.2.6.3 17.4 7.4 44.1 6.9 60.9 15.3 15.9 7.9 30.8 13.2 50.5 22.3l1.2.6M91.9 111.9c-1.5 3.5-.8 7.8 1.7 10.7s6.7 4.1 10.4 3 6.6-4.3 7.2-8.1m-59 15.9c.3 2.7 1.7 5.1 3.4 7.2s3.8 3.8 5.9 5.5m52.5 3.5c6.1-.6 12.3 1 17.3 4.6 0 0 .2.1.3.2" class="cls-2"/><path d="M127.5 73.7v10.6c0 3.7-.3 6.8-.8 9.5-1.1 5.9-3.3 9.7-5.9 12.9-3.2 4-6.4 8.2-10.8 9.3-3.8 1-8.6-.3-15.2-6.1-.3-.3-.6-.6-1-.9-2.8-2.7-7.7-8.4-8.8-15" class="cls-1"/><path d="M123.1 78.9c-.9-.8-4.5-.8-5.4-.4m-11 0c-1.7-.9-6.2-.2-6.5.5m18.9 7.7c0 1.5.6 2.7 1.2 2.7.7 0 1.2-1.2 1.2-2.7s-.6-2.7-1.2-2.7c-.7 0-1.2 1.2-1.2 2.7m-17.2.3c0 1.7.7 3.1 1.5 3.1s1.5-1.4 1.4-3.1c0-1.7-.7-3.1-1.5-3.1s-1.5 1.4-1.4 3.1m14.4 7.3c1 2.9-.3 5.1-3.8 4.9m4.6 5.1c-.1 0-.3 0-.4.1-3.7.9-10.3-1-13.9-2.6-.8-.3 2.6 4.4 7.5 5 2.9.4 4.9 0 6.4-2.3" class="cls-1"/><path d="M128.8 80.7c0-4.8.6-13-2.3-19.6-3.9-8.8-16.5-10.3-23.5-10-7.9.3-13.4 4-17.9 11.7-3.1 5.3-4.2 9.7-3.5 17.5" class="cls-1"/><path d="M84.3 82v-.2c-.5-1.2-1.6-1.8-2.6-1.5q-.3 0-.6.3c-1.1.8-1.8 2.7-1.8 4.4 0 1.8.5 3.5 1.2 5.1.6 1.4 1.4 2.8 2.4 3.5.7.5 1.4.6 2.2.4.4-.1.8-.4 1.1-.8m41.4-12.7c.3 0 .8 0 1.2.2q.6.3.9.6c.3.6.4 1.2.5 1.9.3 1.9.6 3.8.3 5.7-.3 2.5-2.1 6.1-3.5 5.1" class="cls-1"/><path d="M84.2 81.8c0 1.4 2 1.6 2.7.4.6-1.2 1.8-5.7 3.7-8.9 5.3-9 12.4-11.1 18.5-10.8 8.6.4 16.4 3.6 18.4 14.7 0 .2 0 .4.1.6" class="cls-1"/></svg>')}`;
export default image;