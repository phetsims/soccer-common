/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{stroke-width:0}.cls-4{fill:#7599bb}.cls-5{fill:#231f1d}.cls-6{fill:#dbdbdb}.cls-7{fill:#a0796a}</style></defs><path d="M223.4 200.9c2.9 1.2 3.3 5.2 1.8 8-1.6 2.8-4.5 4.6-7.4 6.1-8.8 4.7-18.2 7.9-27.6 11.1-1.1.4-2.4.8-3.4.3h-.4c-.3-5.9 4-17.3 7.7-23.4 8.7-.8 16.3-1.7 24.9-2.5 1.5-.1 3.1-.3 4.4.3Z" class="cls-6"/><path d="M63.5 171c0-1.4 0-2.9.1-4.4 1.7-10.7 16.9-7.1 35.1-3.2 9 2 11.5 4.3 16 5.3.3 0 .7.2 1.1.2 4.5 1.4 10.4 3.2 13.5 4.6 1.5.7 67.7 25.8 67.4 26.1-.8.7-1.6 1.9-2.5 3.3-3.8 6.1-8 17.5-7.7 23.3 0 .3-60.2-23.9-62.2-24.1-.5 0-1-.1-1.6-.2-9.3-1.2-31.5-4.9-41-6.8-2.4-.6-4.4-1.2-5.7-1.7-5.1-2.6-12-9.7-12.3-22.5Z" class="cls-4"/><path d="M136.6 302.4c2.1 2.3.8 6.2-1.8 8-2.6 1.9-6 2.3-9.3 2.4-9.9.5-20.6-3.4-30.4-4.6-1.2-.1-2.5-.3-3.2-1.2-.5-.7-.5-1.5-.6-2.3 0-3.5.2-6.1 1.1-9.5 11.9 1.3 17 .4 26.9-1.3 4.6 2.4 9 4.7 13.4 6.3 1.4.5 2.9 1.1 3.8 2.2Z" class="cls-6"/><path d="M133.1 37.2c.7 2.5 2.1 7.6 1 12.9v.4h-.1c-.4-1.6-2.9-8.3-4.4-9.2-4.4-2.4-12.1-4-14.3-4.6-5.5-1.6-10.5.5-15.2 7.6-2.3 3.4-5.1 6.8-7.3 10.2-.8 1.2-1.8 2.4-3.1 2.7-1.4.4-2.6-.9-3.1-2.2-.7-1.7-2.9-2.1-4.4-1.2-1.5 1-2.2 2.9-2.4 4.8q-.15 1.95.3 3.9l-.8.2c-.7-2.9-1.1-5.9-1.2-9.1-.4-9.5 4.9-26 17.5-29.3 20.9-5.5 35.2 5 37.6 12.7Z" class="cls-5"/><path d="M108.7 93v.4c-3.5 2.1-5.8 5.9-9.9 7.3-3.3 1.1-8.7-1.1-11-3.7s-3.2-6.3-2.9-9.8V87h.5c.8-2 .8-7.8.4-12.9-.2-2.4-.4-4.7-.7-6.4-.5 0-1.1-.2-1.5-.4-1.7-.9-2.8-2.6-3.3-4.6-.3-1.2-.5-2.6-.3-3.9.2-1.9.9-3.8 2.4-4.8s3.7-.6 4.4 1.2c.5 1.3 1.8 2.5 3.1 2.2 1.4-.4 2.4-1.5 3.1-2.7 2.2-3.5 5-6.8 7.3-10.2 4.7-7.1 9.7-9.1 15.2-7.6 2.1.6 9.9 2.2 14.3 4.6 1.5.9 4 7.5 4.4 9.1h.1c-.9 4.6-.7 5.3-1.8 8.8-1.4 4.6-2.1 4.7-2.8 7.2-.6 2.1-1 10.5-8.9 19.3 0 0-5.5 7-9.6 7.6l-.5-.2c-.3 0-.7 0-1.2-.2-.2 0-.4-.1-.7-.2Zm-2.6-16.5-.2.3c-1.6 8.3 9.2 12.9 12 4.8-4.6-.5-7.7-2.3-11.8-5.1M127 65.2c.4-1.5 0-2.9-.9-3.1s-1.8.9-2.2 2.4 0 2.9.9 3.1 1.9-.9 2.2-2.4m-16.8-3.9c.3-1.5-.1-2.8-1-3s-1.9.9-2.2 2.3c-.3 1.5.1 2.8 1 3s1.9-.9 2.2-2.3M85 130.1c2.9 1.5 5.6 3.5 6.4 5.2.1.3.2.5.2.7v.2c9.2-.8 11.6-1 21.5-3.7v-.5c-.3-1.9-1-4-1.5-6.6-.4-1.8-.7-3.8-.7-6 0-4 1.1-7.4 2.9-11 1.8-3.4 4.8-6.3 8.5-7.2 1 .9 1.8 1.8 2.1 2.8 5.2 14.7 3.7 36.2 3.2 36.8l-.2.7c-1.1 2.3-2.4 2.5-3.4 3.1-4.1 1.6-7.6 2.6-10.8 3.1-8.6 1.3-15.2-.6-27.1-1.9-2.9 1-13.4 1.4-14.5-1.5-.5-1.2.2-4.6 1.4-8 1.3-3.7 3.1-7.3 4.8-8.1 1.4-.7 4.4.2 7.3 1.7Z" class="cls-7"/><path d="M122.5 202c2.9 10.5 4.8 13.1 4.8 21.3 0 1.3-6.2 69.1-6.3 70.3-.6 0-1.1.2-1.7.3-9.8 1.7-15 2.6-26.9 1.3-.4 0-.8 0-1.2-.1-.5-1.5 9.1-70 8-73.1-2.6-7.1-11.8-18.7-17.8-26.8 9.5 1.9 31.6 5.7 41 6.8Z" class="cls-4"/><path d="M126.1 62.1c.9.2 1.3 1.6.9 3.1s-1.3 2.6-2.2 2.4-1.3-1.6-.9-3.1 1.3-2.6 2.2-2.4" class="cls-3"/><path d="M119.4 99.2c1.1.7 2.1 1.4 3 2.2-3.7.9-6.7 3.8-8.5 7.2-1.9 3.6-3 7-2.9 11 0 2.2.3 4.2.7 6h-.6c-2.5-4.3-3.1-9.8-1.5-14.6 1.5-4.9 5.2-9 9.8-11.2v-.5Z" class="cls-6"/><path d="M114.7 168.6c-4.5-1-7-3.3-16-5.2-18.2-4-33.4-7.6-35.1 3.2-.1 1.5-.2 3-.1 4.4-3.7-14-1.9-26.8.4-53.4 0-.7.2-1.7.4-3 .4-2.6 1.2-6.3 2.2-10.2 2.8-5.8 6.1-11.2 9.9-16.4v-.7c1.8-.2 3.8-.3 5.8-.3v.3c-2.4 14.7 10.6 17.1 14.3 16.3h.7c1-.3 3.2-1 4-1.6 3.4-2.1 6.5-6.5 9-7.4v-.2c2.4 1.2 6.1 2.8 9.2 4.7v.5c-4.7 2.2-8.4 6.3-9.9 11.2s-1 10.3 1.5 14.8h.6c.5 2.5 1.2 4.6 1.4 6.5v.5c-9.8 2.6-12.2 2.8-21.4 3.7v-.2c0-.2 0-.5-.2-.7s2.7-14.8 2.7-14.8l-16.5 7.7-12.2 5.7 7.1 2.5h.3c-1.2 3.5-1.9 6.9-1.4 8.1 1.1 2.9 11.6 2.6 14.5 1.5 11.9 1.3 18.5 3.3 27.1 1.9-.9 3.3 1.3 15.3 1.5 20.7Z" style="stroke-width:0;fill:#67b96a"/><path d="M117.9 81.6c-2.7 8.1-13.5 3.4-12-4.8l.2-.3c4.1 2.7 7.1 4.6 11.8 5.1" style="stroke-width:0;fill:#fff"/><path d="M109.2 58.3c.9.2 1.3 1.5 1 3s-1.3 2.5-2.2 2.3-1.4-1.5-1-3c.3-1.5 1.3-2.5 2.2-2.3" class="cls-3"/><path d="M110.3 94.5v.2c-2.6.8-5.6 5.2-9 7.4-.8.7-3 1.3-4 1.5h-.7c-3.7.9-16.6-1.5-14.3-16.2v-.3h2.6v.2c-.3 3.5.6 7.2 2.9 9.8s7.7 4.9 11 3.7c4.2-1.4 6.5-5.1 9.9-7.3v-.4c.3 0 .6.1.8.2l-.2.8c.3.2.7.4 1.1.6ZM85 130.1c-2.9-1.5-5.9-2.3-7.3-1.7v-.2c-.1 0 16.4-7.7 16.4-7.7l-2.7 14.8c-.7-1.6-3.5-3.7-6.4-5.1Z" class="cls-6"/><path d="M85.7 74.1h-.1c-3.3-3.2-5.3-7-6.3-11.2l.8-.2c.5 2 1.7 3.7 3.3 4.6.5.2 1 .4 1.5.4.3 1.7.6 3.9.7 6.4Z" class="cls-5"/><path d="M77.6 128.2v.2c-1.5.8-3.4 4.4-4.7 8.1h-.3c0-.1-7.1-2.6-7.1-2.6l12.2-5.7Zm-1.2-40.9v.7c-3.8 5.1-7.1 10.6-9.8 16.4 1.6-5.9 3.8-12.2 6.7-16.3v-.4c.9-.1 2-.2 3.1-.3Z" class="cls-6"/><path d="M31.8 151.8h.1c2.6.8 5.2 10.5 3.4 12.6-1.9 2.3-12.5 3.2-14.3 2-2.1-1.4.2-9.9 1.7-12 2.9-13.4 5.7-19.7 12.6-31.6 1.5-2.7 3-5 4.4-6.6l.3-.2c.2-1.1 14.5-18.1 15.3-18.8 4.5-4.1 8.8-8.2 14.9-9.1.9-.1 1.9-.3 3-.4v.4c-2.8 4.1-5.1 10.5-6.6 16.3-1 3.9-1.8 7.6-2.2 10.2h-.5c-5.1 4.7-12.6 10.9-15.3 12.9l-.4.2c-3.5 2.8-2.1 1.5-3.6 2.6-5.1 9.4-9 13.8-12.8 21.4Z" class="cls-7"/><path d="M40 116c.2-1.1 14.5-18.1 15.3-18.8 4.5-4.1 8.8-8.2 14.9-9.1.9-.1 1.9-.3 3-.4 1-.1 2.1-.2 3.2-.3 1.8-.2 3.8-.3 5.8-.3H85m-21.2 27.4c-5.1 4.8-12.6 11-15.3 12.9m-8.8-11.2c-1.4 1.6-2.8 3.9-4.4 6.6-6.9 11.9-9.7 18.2-12.6 31.6m25.4-26.7c-3.5 2.8-2.1 1.5-3.6 2.6-5.1 9.4-9 13.8-12.8 21.4 0 .2-.2.4-.3.6" class="cls-1"/><path d="M31.9 151.8c2.6.7 5.2 10.5 3.4 12.6-1.9 2.3-12.5 3.2-14.3 2-2.1-1.4.2-9.9 1.7-12m105-13.4c.5-.6 2-22.1-3.2-36.8-.3-1-1.1-1.9-2.1-2.8-.9-.7-1.9-1.5-3-2.2-3.1-1.9-6.8-3.5-9.1-4.7-.4-.2-.8-.4-1.1-.6" class="cls-1"/><path d="M123 101.2c-.2 0-.4 0-.6.1-3.7.9-6.7 3.8-8.5 7.2-1.9 3.6-3 7-2.9 11 0 2.2.3 4.2.7 6 .5 2.6 1.2 4.8 1.4 6.6m11 12.8c-4.1 1.6-7.6 2.6-10.8 3.1-8.6 1.3-15.2-.6-27.1-1.9m29.7-14.2c-1 .3-1.9.5-2.8.8-9.9 2.6-12.3 2.8-21.5 3.7h-.8" class="cls-1"/><path d="M91.6 136.1c0-.2 0-.5-.2-.7-.7-1.7-3.5-3.7-6.4-5.2s-5.9-2.3-7.3-1.7c-1.7.8-3.5 4.4-4.8 8.1-1.2 3.4-1.9 6.8-1.4 8 1.1 2.9 11.6 2.6 14.5 1.5m41.5-4.4c-1.1 2.3-2.4 2.5-3.4 3.1m-60.2-27.2c-2.3 26.6-4.1 39.4-.4 53.4 0 .3.2.7.3 1m49.4-24.1s0 0 0 0c-.9 3.3 1.3 15.3 1.5 20.7h0m-33.2 26.5c9.5 1.9 31.6 5.7 41 6.8.6 0 1.1.1 1.6.2 2.1.2 62.3 24.5 62.2 24.1-.3-5.7 4-17.2 7.7-23.3.9-1.5 1.8-2.6 2.5-3.3.4-.3-65.9-25.5-67.4-26.1-3-1.4-9-3.2-13.5-4.6-.4-.1-.7-.2-1.1-.3-1.5-.5-2.8-.9-3.7-1.2m-35 26c1.3.5 3.2 1.1 5.7 1.7" class="cls-1"/><path d="M81.5 195.1c6 8.1 15.1 19.7 17.8 26.8 1.1 3.1-8.5 71.6-8 73.1.4 0 .8 0 1.2.1 11.9 1.3 17 .4 26.9-1.3.5 0 1.1-.2 1.7-.3 0-1.3 6.3-69 6.3-70.3 0-8.2-1.8-10.8-4.8-21.3m-59-35.4c-.1 1.5-.2 3-.1 4.4.3 12.8 7.2 19.9 12.3 22.5m110.9 33c1 .5 2.3.1 3.4-.3 9.4-3.2 18.8-6.5 27.6-11.1 2.9-1.5 5.8-3.3 7.4-6.1s1.1-6.8-1.8-8c-1.3-.6-2.9-.4-4.4-.3-8.7.8-16.3 1.7-24.9 2.5" class="cls-1"/><path d="M116.2 169h-.4c-.4 0-.7-.1-1.1-.2-4.5-1.1-7-3.4-16-5.3-18.2-4-33.4-7.6-35.1 3.2" class="cls-1"/><path d="M63.9 118.4v-.7c0-.7.2-1.7.4-3 .4-2.6 1.2-6.3 2.2-10.2 1.6-5.9 3.8-12.2 6.7-16.3" class="cls-2"/><path d="M92.5 295.2c-.9 3.5-1.1 6-1.1 9.5 0 .8 0 1.7.6 2.3.7.9 2 1.1 3.2 1.2 9.8 1.1 20.5 5 30.4 4.6 3.2-.1 6.7-.5 9.3-2.4s3.8-5.7 1.8-8c-1-1.1-2.4-1.7-3.8-2.2-4.4-1.6-8.8-3.9-13.4-6.3m-23-190.3c-3.7.7-16.6-1.6-14.3-16.3m28 7.4c-2.5.8-5.5 5.2-9 7.4-.8.7-3 1.3-4 1.5m-5.8 31.7 2.7-14.8-16.5 7.7-12.1 5.7 7.1 2.5" class="cls-1"/><path d="M85 130.2v-.1l4.3-3.4-3.4 3.9m33.4-30.9c-4.6 2.2-8.2 6.3-9.8 11.2-1.5 4.9-1 10.3 1.5 14.8M76.4 88c-3.8 5.1-7.1 10.6-9.9 16.4 0 0 0 .2-.1.3m44.4-11.4h-.3c-.3 0-.7 0-1.2-.2-.2 0-.4-.1-.7-.2-4.1-1.3-12-6.1-19.2-13.8m42.9-19.8c-1.4 4.6-2.1 4.7-2.8 7.2-.6 2.1-1 10.5-8.9 19.3 0 0-5.5 7-9.6 7.6m18.8-34.3c-1.2-1.9-4-3.1-5.5-2m-19.4-4.6c3.8-1.1 7.5-.4 8.8 1.5m7.8 20.1c-.2 4.4-9.3 1.7-10.5.2m12.9-9.8c-.4 1.5 0 2.9.9 3.1s1.9-.9 2.2-2.4 0-2.9-.9-3.1-1.8.9-2.2 2.4M107 60.6c-.3 1.5.1 2.8 1 3s1.9-.9 2.2-2.3c.3-1.5-.1-2.8-1-3s-1.9.9-2.2 2.3m10.9 21c-4.6-.5-7.7-2.3-11.8-5.1l-.9-.6" class="cls-1"/><path d="M117.9 81.6c-2.7 8.1-13.5 3.4-12-4.8M85 67.7c.3 1.6.6 3.9.7 6.4.4 5.1.4 10.9-.4 12.9" class="cls-1"/><path d="M132.3 59.3c1.1-3.5.9-4.1 1.8-8.7v-.4c1-5.4-.3-10.5-1-12.9-2.3-7.8-16.7-18.2-37.6-12.7C82.9 27.9 77.6 44.4 78 53.9c.1 3.2.5 6.3 1.2 9.1 1.1 4.2 3 8 6.3 11.2" class="cls-1"/><path d="M87 66.6c-.4.8-1.2 1.1-2 1.1-.5 0-1.1-.2-1.5-.4-1.7-.9-2.8-2.6-3.3-4.6-.3-1.2-.5-2.6-.3-3.9.2-1.9.9-3.8 2.4-4.8s3.7-.6 4.4 1.2c.5 1.3 1.8 2.5 3.1 2.2 1.4-.4 2.4-1.5 3.1-2.7 2.2-3.5 5-6.8 7.3-10.2 4.7-7.1 9.7-9.1 15.2-7.6 2.1.6 9.9 2.2 14.3 4.6 1.5.9 4 7.5 4.4 9.1" class="cls-1"/><path d="M84.8 87.2c-.3 3.5.6 7.2 2.9 9.8s7.7 4.9 11 3.7c4.2-1.4 6.5-5.1 9.9-7.3" class="cls-2"/></svg>')}`;
export default image;