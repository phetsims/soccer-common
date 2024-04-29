/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#423b38}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-8,.cls-9{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#6f80a3}.cls-3{fill:#a37c66}.cls-4{fill:#92a4c9}.cls-5{fill:#7396ce}.cls-8{fill:none}</style></defs><path d="M44.3 165.1h-.1m-2.5-56.8v.2" class="cls-8"/><path d="M107.1 148.4c-4 4.4-7.7 7.6-9.4 13.1-.8 2.4-1.2 4.5-2 6.9-1.1 3.1-3.1 3.3-4.9 3.8h-.2c-.3-1.8-.7-3.4-1-4.6-.8-4.3-1.5-8.4-2.1-12.2 1.6-1.8 6.4-7.5 7.3-8.7 1.4-1.8 2.7-3.4 3.7-5.5 1.3-2.8 2.4-5.4 4-7.8l-.3-.2c-.6.6-10.6-19.5-12.8-22.2h0c.6-9.2-2.4-19.3-5.3-24.7 1.3.2 2.4.4 3.1.7 5.7 1.3 24.4 39.4 26.2 42.2 4.7 7.5-.8 13.2-6.2 19.2Z" class="cls-3"/><path d="M102.2 133.1s0 0 0 0m4.4-4q-2.7 1.8-4.2 4.2M22 129.9s0 0 0 0m20.5-22.7c-.2.2-.6.5-1 1" class="cls-8"/><path d="M44 163.5c.9 2.2-.7 3.7-2 3.9 1.3 1.7-1.1 3.1-2.2 3.1 0 1.6-.8 2.1-2 2-2.3-.2-5.8-2.5-6.8-3.5-2.1-2.1-5.3-6.7-4-9.8-2.7-4-7.1-9.5-10.1-13.1-4-4.8-11.4-15.6-8.4-21.2 2.5-4.6 27.7-38.7 32.2-37.7h0v.7c2.2 5.5 3.9 10.5 4 16.4 0 1.2-.1 7.8-1.3 8h-.5c-.6-2.3-1.2-4.2-1.3-4l-.2-.2c-3 3-9.5 11.2-11.2 13-1.4 1.4-6.9 7.4-8.2 8.8h0c1.3 1.7 2.2 3 3.8 6.6 1.9 4.1 2.5 12.7 8.3 14.8 2.2.7 5.9.8 8.3 2 1.7.8 2.7 2.1 2.3 4.4 2 2.1 3.8 4.8-.7 5.9Z" class="cls-3"/><path d="M22 129.9c-.7-.9-1.6-2-2.7-3.5m25.3 31.2c-.9-.9-1.8-1.8-2.2-2.4m2.2 2.4s0 0 0 0" class="cls-8"/><path d="M93.3 195.2H93c-7.8 3.2-16.5 4.4-24.9 3.4h-.2c-1.4-9.1-2.4-15.8-2.4-15.8-.4 2.6-1.4 8.2-2.6 15h-.2c-9 2.4-19.1.5-26.6-5.2.6-8.8 1.2-16.3 1.6-20.2 1.2.1 2.1-.4 2-2 1.1 0 3.6-1.4 2.2-3.1 4.4 3.3 16.8 7.2 23 7.9 9.3 1 22-3.2 24.5-7.8.3 1.2.7 2.8 1 4.7 1 5.6 1.9 13.9 2.7 23.1Z" class="cls-2"/><path d="M62.9 197.9c-1.4 8.1-3.2 18-4.8 27-8.2 1.1-16.7-.6-23.8-4.9.5-8.7 1.2-18.6 1.8-27.3 7.4 5.6 17.6 7.6 26.6 5.1h.2Z" class="cls-4"/><path d="M58.1 224.9c-1.8 10.4-3.4 19.4-3.8 22.7-6 1.4-12.1 2.2-19-2.2-.8-.5-1.6-1-2.4-1.7 0 0 .6-10.6 1.4-23.7 7.1 4.2 15.6 6 23.8 4.9" class="cls-2"/><path d="M72.6 116.3c-9.2-3.1-19.1-23.2-20.8-30.4 1.3-.1 2.5-.3 3.3-.4h0c1.1-3.7 1.2-9.7 1-13 7 9.3 12.1 11.4 16.3 9.6-.2.8-.4 1.7-.3 2.7 1.1.2 3 .4 5.1.6 2.6 10.9.6 24.1-4.8 30.8Z" class="cls-3"/><path d="M89.5 167.5c-2.5 4.7-15.2 8.8-24.5 7.8-6.3-.6-18.6-4.5-23-7.9 1.3-.2 2.9-1.8 2-3.9 4.5-1.1 2.7-3.7.7-5.9.5-2.3-.6-3.6-2.3-4.4l.2-.5c.3-3.9 2.9-8.9 3.3-16.7.2-3.8-.6-9.9-1-14.5 0-.8-.6-3.2-1.2-5.8 1.7-.9 2.8-2.7 3.4-4.5.6-2 .5-4.1.3-6.1-.5-6.4-1.7-12.2-4.1-18.2h0c1.6-.3 3.1-.5 4.6-.6h.2l.2 1.6c3.3 12.7 11.3 24.2 22.1 31.7-.6 2-1.6 3.9-3.1 5.4 1.7.7 2 .8 3.7 1.5 8.7-11.5 12.6-26.8 7.8-40.4v-.4h0c1.1.1 2.2.3 3.3.4h0c4.4 8.4 5.5 17 6.9 26.3h0c-.4 3.7-1.4 7.1-3.2 10.1-1.7 5.5-1.1 17.1 1.4 32.9.6 3.8 1.3 7.9 2.1 12.2Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#d16a71"/><path d="M95.2 221c-7.4 3.1-15.6 4.1-23.6 3.1-1.2-8.5-2.6-17.8-3.7-25.3h.2c8.4.9 17-.3 24.9-3.5h.3c.7 8.2 1.4 17.2 2 25.7Z" class="cls-4"/><path d="M97 248.7c-1 .2-1.9.4-2.8.6-6.2 1.4-11.3 2.1-19.1-.6-.3-3-1.8-13.2-3.4-24.6 7.9 1 16.2 0 23.6-3.1.7 11.1 1.3 21.3 1.8 27.7Z" class="cls-2"/><path d="M47.9 298.5c.3.6.4 1.2.4 1.8s-.2 1.2-.5 1.8c-.4.7-.9 1.3-1.6 1.9h0c-4.2.7-8.5 1.3-12.8 1.7-.7 0-1.5.1-2.1-.2-.8-.4-1.1-1.4-1-2.2 0-.8.5-1.6.9-2.3 2.3-1.3 4.6-2.6 7.1-3.8.3-17.3-6.4-35.1-2.8-51.7 6.9 4.3 13 3.5 19 2.2.1 14.1-6.3 36.1-6.3 50.5v.4Z" class="cls-3"/><path d="M35.3 245.4v-.1M51.8 85.9" class="cls-8"/><path d="M89.3 111c0 .5 0 .9-.1 1.4h0c-1.4-9.4-2.5-18-6.9-26.3.6 0 1.3.2 1.9.3 2.8 5.4 5.8 15.5 5.3 24.7Zm-42.1.2c-.5 1.9-1.7 3.6-3.4 4.5-.3-1.1-.5-2.2-.8-3.3h.5c1.2-.3 1.3-6.9 1.3-8.1-.2-5.9-1.8-10.9-3.9-16.4v-.7c.8-.2 1.7-.3 2.6-.4h0c2.3 6 3.6 11.9 4.1 18.3.2 2 .2 4.1-.3 6.1Z" class="cls-5"/><path d="M97 304.4c-.8 1-2.4 1.1-3.7 1-3.6-.1-6.3-.3-9.7-1.4h0c-.9-1.2-1.4-2.5-1.7-4 0-.3 0-.7-.1-1h-.2c0-14.5-5.6-36.3-6.5-50.2 7.8 2.7 12.9 2 19.1.6 1.5 19.7-3.3 30.3-3 47.5 1.4.6 3 1.4 4.6 2.2h0c.6.8 1.1 2 1.5 2.9.3.8.4 1.8-.2 2.5Z" class="cls-3"/><path d="M81.6 299.2v-.3m12.6-49.6v-.3" class="cls-8"/><path d="M87.4 51.6c.6-2.7.6-2.9.8-4.6 0-6.2-3.1-9-6-11-1.9-1.2-4.2 2.4-6.7 2-3.4-.5-5.3-5.9-12-3.4-5.5 2-11 6.1-13.9 12.8h0c-.1 1.6-.2 3.1 0 4.7.1 3.3.7 6.5 1.3 9.3.8 3.2 1.8 5.7 2.7 7.2.9 1.4 1.8 2.6 2.7 3.7 7 9.3 12.1 11.4 16.3 9.6s7.7-7.3 11.3-13.3c1.2-1.9 2-3.9 2.5-5.8 1.7-5.6 1.1-10.3.8-10.4 0-.4.2-.7.2-1Zm-30.5-4.1c-.2-.2 3.5-2.4 5-2.8 1.1-.3 3.2-.6 4.5 0 1.8.9 2.2 2.1 1 2-1 0-2.5-1.5-5.9-1-1.9.3-4.6 1.7-4.7 1.6Zm4.2 6.6c0-1.6.7-2.9 1.5-2.9s1.5 1.3 1.5 2.9-.7 2.9-1.5 2.9-1.5-1.3-1.5-2.9m9.2 19.8c-1.6 0-3.9-1.2-5.2-2.6-1.3-1.3-1.3-.7-2.5-3.9.7 1.1 8.6 4.8 13.1 3.7-1.5 1.9-2.9 2.9-5.4 2.8m10.3-17.3c-.7 0-1.2-1.1-1.2-2.5s.6-2.5 1.2-2.5 1.2 1.1 1.2 2.5-.6 2.5-1.2 2.5M81.8 46c-2.5-.6-3.9.8-4.7.8-.9 0-.4-1.1 1.1-1.9 1.1-.6 2.7-.3 3.5 0 1.1.4 3.5 2.7 3.4 2.8 0 0-1.9-1.3-3.3-1.7" class="cls-3"/><path d="M75.7 71.1c-1.5 1.9-2.9 2.9-5.4 2.8-1.6 0-3.9-1.2-5.2-2.6-1.3-1.3-1.3-.7-2.5-3.9.7 1.1 8.6 4.8 13.1 3.7" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M81.8 54.1c0 1.4-.6 2.5-1.2 2.5s-1.2-1.1-1.2-2.5.6-2.5 1.2-2.5 1.2 1.1 1.2 2.5" class="cls-9"/><ellipse cx="62.6" cy="54.1" class="cls-9" rx="1.5" ry="2.9"/><path d="M76.6 61.8c.6 2.5-.7 3.1-1 3.3-2.6.7-5.4 0-6.8-.9M49.7 46c0 .5-.1 1-.2 1.5" class="cls-8"/><path d="M88.8 52.6c-.4-.3-.9-.6-1.5-1 .6-2.7.6-2.9.8-4.6 0-6.2-3.1-9-6-11-1.9-1.2-4.2 2.4-6.7 2-3.4-.5-5.3-5.9-12-3.4-5.5 2-11 6.1-13.9 12.8h0c-.1 1.6-.2 3.1 0 4.7h-.2c-.6-.8-1.5-1-2.3-.9h0c-1.1-6.9-.1-13.6 3.1-18.8 3.4-5.4 9.3-9 18.2-9 1.3 0 2.5 0 3.6.1 16.1 1.1 20 10.2 17 28.9Z" class="cls-1"/><path d="M55.2 85.5c-.1.5-.3.9-.5 1.2m19 2.7c-1-1.5-1.4-3.2-1.5-4.6" class="cls-8"/><path d="M50.8 61.5c-3.2 2.3-7.4-5-6.3-8.2.3-1.1 1.4-1.8 2.5-2 .9-.1 1.8.1 2.3.9h.2c.1 3.3.7 6.5 1.3 9.3" class="cls-3"/><path d="m51 61.3-.2.2" class="cls-8"/><path d="M89.9 55.2c-.2 2-1.7 7.1-3.5 7.7h0c1.7-5.6 1.1-10.3.8-10.4 0-.4.2-.7.2-1 .6.3 1.1.6 1.5 1 .8.6 1.2 1.4 1.1 2.7Z" class="cls-3"/><path d="M87.4 51.6s0 0 0 0" class="cls-8"/><path d="M85.2 47.7s-1.9-1.3-3.3-1.7c-2.5-.6-3.9.8-4.7.8-.9 0-.4-1.1 1.1-1.9 1.1-.6 2.7-.3 3.5 0 1.1.4 3.5 2.7 3.4 2.8m-17.7-.9c-1 0-2.5-1.5-5.9-1-1.9.3-4.6 1.7-4.7 1.6-.2-.2 3.5-2.4 5-2.8 1.1-.3 3.2-.6 4.5 0 1.8.9 2.2 2.1 1 2Z" class="cls-1"/><path d="M107.5 307.3c0 1.8-1.8 2.4-3.7 2.8q0 0 0 0v-.3c-1.1-1.8-2.1-3.6-3.2-5.3-.3-.4-.5-.9-.6-1.4 0-.5.2-1.1.7-1.3v-.2c1.6.8 3 1.5 4.2 2.2 1.3.7 2.5 2.2 2.6 3.6Zm-80.5-.9c0 1-.5 2-1.1 2.8s-1.4 1.6-1.7 2.6h0q0 0 0 0c-.6-.3-1.1-.8-1.4-1.4-.6-1.1-.4-2.3.2-3.4 0-.2.2-.3.3-.5.8-1.1 2-2 3.2-2.7h.1c-.1.9.4 1.8.5 2.6Z" class="cls-3"/><path d="M46.1 303.9c-.2 0-.4 0-.7.1m-14.3-3.2s0 0 0 0" class="cls-8"/><path d="M46.2 303.9c-.4.3-.7.6-1.1.9-1.9 1.5-3.7 2.6-5.6 3.6-2.2 0-5.5-.3-7.6.2-2.1.6-4.2 1.5-5 3.4v.4h-.8c-.7 0-1.4-.3-2-.6h0c.4-1 1.1-1.8 1.7-2.6s1.2-1.8 1.1-2.8c0-.9-.6-1.8-.5-2.6h0c1.5-1 3-1.9 4.5-2.8-.4.7-.8 1.5-.9 2.3 0 .9.2 1.8 1 2.2.6.3 1.4.3 2.1.2 4.3-.4 8.6-1 12.8-1.7h0Z" class="cls-2"/><path d="M26.6 303.3v.4" class="cls-8"/><path d="M39.5 308.5c-2.8 1.4-5.7 2.3-9.3 3.4-1.1.3-2.2.6-3.3.6v-.4c.9-1.9 2.9-2.8 5-3.4s5.4-.3 7.6-.2" class="cls-3"/><path d="M42.5 310.1c-2.9 1.8-8.2 3.6-11.5 4-2.2.3-5.1.6-6.9-.5-2.5-1.6-3.3-4.5-1.3-6.6h0c-.6 1.1-.8 2.4-.2 3.4.3.6.8 1.1 1.4 1.4h0c.6.3 1.3.5 2 .6h.8c1.1 0 2.2-.3 3.3-.6 3.6-1 6.5-2 9.3-3.4 1.9-.9 3.7-2.1 5.6-3.6.4-.3.8-.6 1.1-.9.6-.5 1.1-1.2 1.6-1.9.3-.5.5-1.2.5-1.8 1.1 3.9-2 7.4-5.8 9.8Z" class="cls-2"/><path d="M48.3 300.3c0-.2-.1-.4-.2-.6" class="cls-8"/><path d="M103.7 310.1c-.7.2-1.5.3-2.2.4-2.8-3.4-7.4-2.8-11.1-1.4h0c-2.9-1.1-5.3-2.8-6.9-5h0c3.4 1 6.1 1.3 9.7 1.4 1.4 0 2.9 0 3.7-1 .5-.7.5-1.7.2-2.5-.4-.8-.9-2.1-1.5-2.7h0c1.7.7 3.4 1.6 5 2.4v.2c-.6.2-.8.8-.8 1.3s.3 1 .6 1.4c1 1.8 2.1 3.6 3.1 5.3v.3Z" class="cls-2"/><path d="M101.5 310.5c-3.7.4-7.7 0-11.1-1.4 3.6-1.3 8.2-2 11.1 1.4" class="cls-3"/><path d="M106.8 312.4c-1.6 1.2-3.9 1.3-5.9 1.2-4.8-.4-9.4-1.4-13.7-3.5-1.9-1-3.9-2.7-5.2-4.3s-1.8-4-.7-5.7h.5c.2 1.4.8 2.8 1.7 4 1.6 2.2 4 3.9 6.9 5h0c3.4 1.3 7.4 1.8 11.1 1.4.8 0 1.5-.2 2.2-.4q0 0 0 0c1.9-.4 3.8-1 3.7-2.8 1.5 1.3.9 3.9-.7 5.1Z" class="cls-2"/><path d="M71.8 23.7c-1.2 0-2.4-.1-3.6-.1-8.9 0-14.8 3.6-18.2 9-2.9-3.3-2.7-6.4-.5-10.1 2.8-4.7 8.7-5.8 13-6.2 6.2-.5 9.5 3 9.2 7.4Zm0 0v.1" class="cls-1"/><path d="M36.1 192.7s-.2-.1-.3-.2m22.5 32.3h-.2M34.4 220c-.1 0-.2-.1-.3-.2m61.6 1c-.1 0-.3.1-.4.2m-23.6 3h-.4" class="cls-8"/><path d="M71.1 126.4c-1.7-.7-2-.8-3.7-1.5 1.5-1.5 2.6-3.4 3.1-5.4-10.8-7.5-18.8-19-22.1-31.7l-.2-1.6c1.3-.1 2.5-.2 3.6-.4 1.6 7.2 11.5 27.3 20.8 30.4 5.3-6.8 7.4-20 4.8-30.8.5 0 1 .1 1.5.2v.4c4.8 13.6.9 28.9-7.8 40.4" class="cls-5"/><path d="m48.4 87.8-.3-1.2m-4.3 29.1h-.3M82.2 86" class="cls-8"/></svg>')}`;
export default image;