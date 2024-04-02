/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africa" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-4{fill:#d5723a}.cls-5{fill:#bc4343}.cls-6{fill:#946a38}.cls-7{fill:#fff}.cls-8{fill:#f67e2e}</style></defs><path d="M55 129.7c0 1.1.2 2.3.3 3.5 5.3 4.1 8.2 3.5 15 4.1 2.7.2 6.1 0 9.3 0v-2c-.2-12.5-1-25.4 3.1-36.9-4.5 0-11.7-2.6-13.4-4.4-.5-.6-1.3-.9-2-1-1.5.2-3 .4-4.5.4-2.2.3-4.7.6-7 1-3.6.8-15.2 13.1-15.7 13.7-3.7 4.2-9.5 11.9-12.6 16.4-.9 1.3-1.7 2.6-2.5 3.8-2.3 4.3-7.6 15.1-9.6 19.5-.7 1.6-1.4 3.5-.7 5.1.3.6.7 1.1 1.2 1.4 1 .7 2.3 1.1 3.5 1.4 2.3.6 4.6 1.1 7 1s4.8-1 6.2-2.9c1.3-1.7 1.6-3.9 1.9-6 1.5-8.5 4.7-16.4 9.6-23 4.7-4.3 4.9-4.5 7.5-6.7.5 4 1.9 7.8 3.3 11.6Z" class="cls-4"/><path d="M26.4 156.8c-2.3.1-4.7-.5-7-1-1.2-.3-2.5-.7-3.5-1.4-1.4 2.1-4.5 11.8-2.4 13.3 1.7 1.2 11.7-.3 14-2 1.4-1 0-7.9-1.2-8.8Z" class="cls-6"/><path d="M108.7 53.1c0 .7-.2 1.4-.3 2.1l-.2.2c-.2 3.5-1.6 5.7-2.9 9.4 0 0-.5 7-3 11.9-2.2 4.2-9.6 13.4-16.7 13.5h-.4c-.5.7-.3-1.1 0 2.8 4.7.4 8.5 0 11.6-1.3 5.6-2.2 8.8-6.9 10.8-13 3-8.9 4.9-17 5-26.4 0-7.5 0-12.3-5.5-17.7-6.9-6.7-16.8-11.5-30.8-8.8-9.7 1.9-12.9 5.7-17.9 14.2s-8.9 16.5-9.1 26.4c-.1 6.4-.5 9.6 3.2 14.8 3.6 5.1 11.7 12.5 17.3 10 .4-2.6 1.1-7.1 1.1-11.9-3.6-4.7-5.3-10-5.2-15-.6-.3-1.1-.8-1.5-1.4-.8-1.3-1-2.9-1.1-4.4 0-1.3 0-2.8.9-3.8.6-.7 1.6-1.1 2.5-1 .7 0 1.3.4 1.8.9 2.2-4 4.5-7.8 7.1-11 5.3-6.5 12.1-10.5 22.4-8.7 3.6.6 6.4 2.4 8.8 5.1 3 3.4 3 8.3 2.4 12.9Z" class="cls-5"/><path d="M173.1 217.1c-3.8-2-27.5-17.4-34.2-21.8-3.2-2.1-19.7-14.4-37.6-23.3-3.8-1.9-7.7-3.6-11.5-5.1l.3-.9c-.6-.2-1.1-.5-1.6-.9-2.8-2-4.6-5.1-5.5-8.5l-.7.2c-.7.1-.8.1-1.4.2-2.3 1.7-11.5 4.7-13.2 2.4-1.3-1.7-1.1-11.9.8-15.1h-.3c-4.2 0-8.5-1-12.3-2.8h-.2v1.8c-.1 1.8-2.2 18.8-2.4 20.3-2.5 8 .1 18 4.4 25.2s10 13.4 14.5 20.4c13.5 21.4 13.6 49.6 13.2 74.9.1 0 .3 0 .4-.1 1.8-2 3.9-3.8 6.1-5.3 5.6-3.9 12.2-6.5 18.7-9.4 5.8-2.6 11.4-5.3 16.2-9.3 8.8-7.4 13.6-18.3 20.2-27.7 1.8-2.6 3.8-5 5.9-7.2 5.4-5.5 11.9-9 20.1-8.1h.1ZM66.4 93c-1.1.1-2.3.3-3.6.5 1.5 0 3-.2 4.5-.4h-.9Z" class="cls-4"/><path d="M56 141.4c3.8 1.8 8.1 2.8 12.3 2.7h.3c.2-.2.3-.4.5-.6 1.5-1.3 6.9-.8 10.6.6.7 0 1.4 0 2-.1-1.5-1.7-2-4.2-2.1-6.7-3.2 0-6.7.2-9.3 0-6.7-.6-9.6 0-15-4.1.3 2.8.5 5.8.5 8.2z" class="cls-7"/><path d="M81 156.9c.6-.1.6-.1 1.4-.2l.7-.2c-.8-3-.9-6.3-.4-9.3l.6-.3c-.3-1.1-1.7-1.9-3.5-2.6-3.7-1.4-9.1-2-10.6-.6-.2.2-.4.4-.5.7-2 3.2-2.2 13.4-.8 15.1 1.7 2.3 11-.8 13.2-2.4Z" class="cls-6"/><path d="M75.1 43.8h.7c5.7-3 18.2-3.8 23.7-1s5.9 4.8 9.1 10.3c.6-4.6.6-9.5-2.4-12.9-2.4-2.7-5.2-4.4-8.8-5.1-10.3-1.8-17 2.2-22.4 8.7Z" class="cls-7"/><path d="M83.5 136.7c1-10.2 4.4-20.2 9.3-29.3 1.7-3.2 3.2-7.2 3.8-11 .2-1.6.3-3.1 0-4.6-3.1 1.2-6.9 1.7-11.6 1.3-.9 1.8-1.7 3.5-2.4 5.4-4.1 11.5-3.3 24.4-3.1 36.9v2c.2 2.5.7 5 2.1 6.7.5 0 .9 0 1.4-.1 0-2.4 0-4.8.3-7.2Z" class="cls-5"/><path d="M102.2 138.1c-3.5 2-6.2 3.1-8.7 4.2-3.1 1.3-6.1 2.4-10.2 4.5l-.6.3c-.5 3-.4 6.3.4 9.3.9 3.4 2.7 6.4 5.5 8.5.5.4 1.1.7 1.6.9 1.4.5 2.9.6 4.4 0 1.6-.5 2.7-1.9 3.7-3.2 5.2-6.7 11.1-12.9 16.3-19.6 2.5-3.4-2.2-14.4-5.3-20.7-2.4-4.9-6-19.3-8.1-22-1.3-1.6-2.6-2.9-4.5-4.1-.5 3.9-2.1 7.8-3.8 11-4.9 9.1-8.3 19.1-9.3 29.3 4.3-.5 7.7-1.4 10.9-3 .2-.9.4-1.9.6-2.9.7-4.1 1.1-3.7 1.7-7.7.9 2.1 2.3 5.7 5.6 15.1Z" class="cls-4"/><path d="M81.8 144.1c.4.5.9.9 1.4 1.2V144c-.4 0-.9.1-1.4.1" class="cls-8"/><path d="M83.5 136.7q-.3 3.6-.3 7.2c4.2-.5 7.1-1.6 10.4-3.8 0-2.6.4-4.5.9-6.5-3.2 1.7-6.6 2.5-10.9 3Zm.2-62.7C82 82.3 92 87.9 95.8 79.5c-2.9 0-6.1-2.1-12.1-5.5" class="cls-7"/><path d="M83.8 60.3c-.4 1.5 0 2.8.9 3 .8.2 1.8-.8 2.2-2.3s0-2.8-.9-3-1.8.8-2.2 2.3" class="cls-3"/><path d="M69.4 92.7c-.7.1-1.4.2-2.2.4.8 0 1.5.5 2 1 1.7 1.9 9 4.4 13.4 4.4.7-1.8 1.4-3.6 2.4-5.4-.3-3.9-.4-2.1 0-2.8-3.1-.1-6.7-2.9-10.5-6.7q-2.25-1.95-3.9-4.2c0 4.8-.6 9.3-1.1 11.9 0 .5-.2 1-.3 1.4Z" class="cls-6"/><path d="M85.4 51.7c3 .3 4 2.2 4.9 2.5 1 .4.9-.9-.4-2.2-1-1-2.9-1.3-3.9-1.3-1.4 0-5.1 1.2-5 1.4 0 .1 2.7-.5 4.4-.3Z" class="cls-3"/><path d="M83.3 146.8c4.1-2.1 7-3.2 10.2-4.5v-2.2c-3.2 2.1-6.1 3.3-10.4 3.8v1.3c-.5-.3-1-.7-1.4-1.2-.7 0-1.3 0-2 .1 1.8.7 3.2 1.6 3.5 2.5Z" class="cls-8"/><path d="M92.4 293.9c-.9 3.6-1.3 7.3-1.3 11 0 .9 0 1.8.6 2.4s2 1.2 3.2 1.3c9.9 1.2 20.7 5.3 30.7 4.9 3.3-.1 6.7-.5 9.3-2.5s3.9-5.9 1.8-8.4c-1-1.1-2.5-1.7-3.9-2.3-8.2-3.2-17.3-9.3-25.5-12.5h-.1c-1.1-.4-1.7-.5-2.3-.2-.3.1-.5.3-.9.7-1 1-1.4 2.5-1.8 3.8s-1 2.7-2.1 3.6c-2 1.5-6.6.2-7.8-1.9Z" class="cls-7"/><path d="M89.8 166.8c3.8 1.5 7.7 3.2 11.5 5.1-.9-2.9-1.5-5.3-3.1-9.2-1 1.3-2.1 2.7-3.7 3.2-1.5.5-3 .5-4.4 0z" class="cls-4"/><path d="M92 282.3c0 4.6.3 7.9.4 11.6 1.2 2.1 5.8 3.3 7.8 1.9 1.1-.9 1.7-2.3 2.1-3.6s.8-2.8 1.8-3.8c.3-.3.6-.6.9-.7 1.4-4 2.5-7.2 3.6-10.7.7-2.4 1.5-4.9 2.3-7.7-6.5 2.9-13.1 5.5-18.7 9.4v3.6Z" class="cls-5"/><path d="M99.7 64.6c-.4 1.5 0 2.9.8 3.1s1.8-.9 2.1-2.4c.4-1.5 0-2.9-.8-3.1s-1.8.9-2.1 2.4m4.6-7.6c-.5-.5-1.7-1.2-2.9-.9-1.6.4-2.5 1.3-1.7 1.5.7.2 2.4-.7 4.2.5 1 .7 2.1 1.7 2.3 1.7s-1.1-2.1-1.9-2.7Z" class="cls-3"/><path d="M106.1 59.7c-.1 0-1.3-1-2.3-1.7-1.8-1.2-3.5-.3-4.2-.5-.8-.2.1-1.1 1.7-1.5 1.2-.3 2.4.4 2.9.9.7.6 2.1 2.6 1.9 2.7ZM85.5 90.3c7.1-.2 14.5-9.3 16.7-13.5 2.6-5 3-11.9 3-11.9 1.3-3.7 2.6-6 2.9-9.4l.2-.2.3-2.1c-3.2-5.5-3.6-7.5-9.1-10.3-5.6-2.8-18.1-2.1-23.7 1h-.7c-2.6 3.1-4.9 6.9-7.1 10.9q-.75-.75-1.8-.9c-.9-.1-1.9.3-2.5 1-.9 1-.9 2.4-.9 3.8 0 1.5.3 3.1 1.1 4.4.4.6.9 1.1 1.5 1.4 0 5.1 1.7 10.4 5.2 15 1.1 1.5 2.4 2.8 3.9 4.2 3.8 3.8 7.3 6.5 10.5 6.7h.4ZM81 52c-.1-.2 3.6-1.4 5-1.4 1 0 2.9.3 3.9 1.3 1.3 1.4 1.4 2.6.4 2.2-.9-.3-1.9-2.1-4.9-2.5-1.7-.2-4.4.5-4.4.3Zm14.8 27.4C92 87.8 82 82.2 83.7 73.9c6 3.4 9.2 5.5 12.1 5.5M84.7 63.3c-.9-.2-1.2-1.5-.9-3 .4-1.5 1.3-2.5 2.2-2.3.8.2 1.2 1.5.9 3-.4 1.5-1.3 2.5-2.2 2.3m15.8 4.4c-.8-.2-1.2-1.6-.8-3.1s1.3-2.6 2.1-2.4 1.2 1.6.8 3.1-1.3 2.6-2.1 2.4" class="cls-6"/><path d="M108.4 277c19.9-4 47.5-29.8 54.5-48.9-4.1-1.4-6.9-1.6-10-3-2.1 2.1-4 4.6-5.9 7.2-6.6 9.4-11.4 20.3-20.2 27.7-4.8 4-10.4 6.8-16.2 9.3-.8 2.8-1.5 5.3-2.3 7.7Z" class="cls-4"/><path d="M162.9 228.1c2.9 1 6.5 2.6 11.4 5.7h.2v-.3c.3 3.8 11.4-4.5 11-5.9s-.7-2.2-.4-3.6c-12.7-7.5-.7-.4-12.1-7.1-8.2-.9-14.6 2.6-20.1 8.1 3.1 1.4 5.9 1.6 10 3Z" class="cls-5"/><path d="M185.5 227.7c.4 1.3-10.7 9.7-11 5.9v.3c.1 3.6.7 7.1 1.6 10.6.2.8.5 1.7 1.2 2.2 1.1.3 1.9-.2 3.1-.4 9.7-1.5 19.5-3 28.9-6.1 3.1-1 6.3-2.3 8.3-4.7 2-2.5 2.2-6.4-.4-8.1-1.2-.8-2.8-.9-4.3-1.1-8.6-.7-19.3-1.4-27.9-2.2-.2 1.4 0 2.3.4 3.6Z" class="cls-7"/><path d="M104.3 57c.7.6 2.1 2.6 1.9 2.7-.1 0-1.3-1-2.3-1.7-1.8-1.2-3.5-.3-4.2-.5-.8-.2.1-1.1 1.7-1.5 1.2-.3 2.4.4 2.9.9ZM86 50.6c-1.4 0-5.1 1.2-5 1.4 0 .1 2.7-.5 4.4-.3 3 .3 4 2.2 4.9 2.5 1 .4.9-.9-.4-2.2-1-1-2.9-1.3-3.9-1.3Z" class="cls-1"/><path d="M108.1 55.3c-.2 3.5-1.6 5.7-2.9 9.4 0 0-.5 7-3 11.9-2.2 4.2-9.6 13.4-16.7 13.5h-.4c-3.1-.1-6.7-2.9-10.5-6.7m-5.2 9.3c0-.4.2-.8.3-1.4.4-2.6 1.1-7.1 1.1-11.9" class="cls-2"/><path d="M85.2 90.1v.2c-.5.7-.3-1.1 0 2.8m114.3 155h-.3M96.6 123c-.6 4-1 3.6-1.7 7.7-.2 1-.4 2-.6 2.9-.4 2-.8 3.9-.9 6.5v2.2m-38.5-12.8v.3c0 1.1.2 2.3.3 3.5.3 2.8.5 5.8.5 8.2v1.8c-.1 1.8-2.2 18.8-2.4 20.3" class="cls-2"/><path d="M55 129.9v-.2c-1.4-3.8-2.8-7.6-3.3-11.6-.2-1.7-.3-3.4 0-5.1m11-19.5c-2.2.3-4.7.6-7 1m27 4c-4.5 0-11.7-2.6-13.4-4.4-.5-.6-1.3-.9-2-1h-.9c-1.1.1-2.3.3-3.6.5" class="cls-2"/><path d="M69.4 92.7c-.7.1-1.4.2-2.2.4-1.5.2-3 .4-4.5.4h-1.1" class="cls-2"/><path d="M97 69.7c1.9 2.8-.9 7.2-7.4 2.8m10.1-7.9c-.4 1.5 0 2.9.8 3.1s1.8-.9 2.1-2.4c.4-1.5 0-2.9-.8-3.1s-1.8.9-2.1 2.4m-15.9-4.3c-.4 1.5 0 2.8.9 3 .8.2 1.8-.8 2.2-2.3s0-2.8-.9-3-1.8.8-2.2 2.3m12 19.1c-2.9 0-6.1-2.1-12.1-5.5" class="cls-1"/><path d="M95.8 79.4C92 87.8 82 82.2 83.7 73.9" class="cls-1"/><path d="M173.1 217.1c-3.8-2-27.5-17.4-34.2-21.8-3.2-2.1-19.7-14.4-37.6-23.3-3.8-1.9-7.7-3.6-11.5-5.1-4.4-1.7-8.7-3-12.8-3.7" class="cls-2"/><path d="M98.2 162.7c1.5 3.9 2.1 6.2 3.1 9.2 0 .2.1.3.2.5" class="cls-2"/><path d="M55.8 94.5c-3.6.8-15.2 13.1-15.7 13.7-3.7 4.2-9.5 11.9-12.6 16.4-.9 1.3-1.7 2.6-2.5 3.8m26.7-10.2c-2.7 2.1-2.8 2.4-7.5 6.7m-17.8 31.9c1.2.9 2.6 7.8 1.2 8.8-2.3 1.7-12.3 3.2-14 2-2.1-1.4 1-11.1 2.4-13.3m66.3 2.4c-.7.1-.8.1-1.4.2h-.3m24.7-20.5c-1.1.7-2.1 1.2-3 1.8-3.5 2-6.2 3.1-8.7 4.2-3.1 1.3-6.1 2.4-10.2 4.5l-.6.3" class="cls-1"/><path d="M68.6 144.2c-2 3.2-2.2 13.4-.8 15.1 1.7 2.3 11-.8 13.2-2.4" class="cls-1"/><path d="M79.8 144.2c-3.7-1.4-9.1-2-10.6-.6-.2.2-.4.4-.5.7" class="cls-2"/><path d="M83.3 146.7c-.3-.9-1.7-1.8-3.5-2.5m16.5-48s.2 0 .2.1c2 1.2 3.3 2.5 4.5 4.1 2.1 2.6 5.6 17 8.1 22 3.1 6.3 7.8 17.2 5.3 20.7M94 116.3c1.3 3.9 1.7 4.6 2.7 6.8.9 2.1 2.3 5.7 5.6 15.1" class="cls-1"/><path d="M110.7 269.3c-6.5 2.9-13.1 5.5-18.7 9.4-2.2 1.5-4.3 3.3-6.1 5.3l-.4.4" class="cls-2"/><path d="M173.1 217.1h-.1c-8.2-.9-14.6 2.6-20.1 8.1-2.1 2.1-4 4.6-5.9 7.2-6.6 9.4-11.4 20.3-20.2 27.7-4.8 4-10.4 6.8-16.2 9.3m52.3-41.3c-6.9 19.1-34.5 44.9-54.5 48.9M53.3 163.6c-2.5 8 .1 18 4.4 25.2s10 13.4 14.5 20.4c13.5 21.4 13.6 49.6 13.2 74.9v.3m-59-127.6c-2.3.1-4.7-.5-7-1-1.2-.3-2.5-.7-3.5-1.4-.5-.4-.9-.8-1.2-1.4-.7-1.6 0-3.5.7-5.1 2-4.4 7.3-15.3 9.6-19.5m19.1-3.6c-4.9 6.6-8.1 14.4-9.6 23-.4 2.1-.6 4.3-1.9 6-1.4 1.9-3.8 2.8-6.2 2.9m56.3-9.5c-.5 3-.4 6.3.4 9.3.9 3.4 2.7 6.4 5.5 8.5.5.4 1.1.7 1.6.9 1.4.5 2.9.6 4.4 0 1.6-.5 2.7-1.9 3.7-3.2 5.2-6.7 11.1-12.9 16.3-19.6" class="cls-2"/><path d="M110.7 269.3c-.8 2.8-1.5 5.3-2.3 7.7-1 3.4-2.1 6.7-3.6 10.5M92 278.7v3.6c0 4.6.3 7.9.4 11.6m60.5-68.7c3.1 1.4 5.9 1.6 10 3 2.9 1 6.5 2.6 11.4 5.7m10.7-9.8c-12.7-7.5-.7-.4-12.1-7.1-.3-.2-.7-.4-1.1-.6m2.7 17.2c.3 3.8 11.4-4.5 11-5.9s-.7-2.2-.4-3.6" class="cls-1"/><path d="M177.3 246.6c1.1.3 1.9-.2 3.1-.4 9.7-1.5 19.5-3 28.9-6.1 3.1-1 6.3-2.3 8.3-4.7 2-2.5 2.2-6.4-.4-8.1-1.2-.8-2.8-.9-4.3-1.1-8.6-.7-19.3-1.4-27.9-2.2m-10.5 9.6v.3c.1 3.6.7 7.1 1.6 10.6.2.8.5 1.7 1.2 2.2" class="cls-1"/><path d="M83.2 136.7h.3c4.3-.5 7.7-1.4 10.9-3m-39-.4c5.3 4.2 8.2 3.5 15 4.1 2.7.2 6.1 0 9.3 0m-23.7 4c3.8 1.8 8.1 2.8 12.3 2.7m11.5.1c.7 0 1.4 0 2-.1.5 0 .9 0 1.4-.1 4.2-.5 7.1-1.6 10.4-3.8h.1M65.5 64.3c0 5.2 1.7 10.5 5.2 15.1 1.1 1.5 2.4 2.8 3.9 4.2m33.8-28.4.3-2.1c.6-4.6.6-9.5-2.4-12.9-2.4-2.7-5.2-4.4-8.8-5.1-10.3-1.8-17 2.2-22.4 8.7-2.6 3.2-4.9 7-7.1 11 0 0-.1.2-.2.3" class="cls-2"/><path d="M85.1 93.1c4.7.4 8.5 0 11.6-1.3 5.6-2.2 8.8-6.9 10.8-13 3-8.9 4.9-17 5-26.4 0-7.5 0-12.3-5.5-17.7-6.9-6.7-16.8-11.5-30.8-8.8-9.7 1.9-12.9 5.7-17.9 14.2s-8.9 16.5-9.1 26.4c-.1 6.4-.5 9.6 3.2 14.8 3.6 5.1 11.7 12.5 17.3 10 .1 0 .2 0 .3-.2" class="cls-2"/><path d="M68.5 55.4c-.1-.2-.3-.4-.4-.6q-.75-.75-1.8-.9c-.9-.1-1.9.3-2.5 1-.9 1-.9 2.4-.9 3.8 0 1.5.3 3.1 1.1 4.4.4.6.9 1.1 1.5 1.4.7.4 1.6.6 2.4.3m40.8-11.6c-3.2-5.5-3.6-7.5-9.1-10.3-5.6-2.8-18.1-2.1-23.7 1-.1 0-.2.1-.3.2" class="cls-2"/><path d="m107.2 287.9.1.1m-14.9 5.9c1.2 2.1 5.8 3.3 7.8 1.9 1.1-.9 1.7-2.3 2.1-3.6s.8-2.8 1.8-3.8c.3-.3.6-.6.9-.7.6-.3 1.1-.1 2.3.2" class="cls-1"/><path d="M92.4 293.9c-.9 3.6-1.3 7.3-1.3 11 0 .9 0 1.8.6 2.4s2 1.2 3.2 1.3c9.9 1.2 20.7 5.3 30.7 4.9 3.3-.1 6.7-.5 9.3-2.5s3.9-5.9 1.8-8.4c-1-1.1-2.5-1.7-3.9-2.3-8.2-3.2-17.3-9.3-25.5-12.5" class="cls-1"/><path d="M85.3 284.2h.2c.1 0 .3 0 .4-.1 1.9-.5 4.3-1.2 6.1-1.7h.1m-7-189.3c-.9 1.8-1.7 3.5-2.4 5.4-4.1 11.5-3.3 24.4-3.1 36.9v2c.2 2.5.7 5 2.1 6.7.4.5.9.9 1.4 1.2V144c0-2.4 0-4.8.3-7.2 1-10.2 4.4-20.2 9.3-29.3 1.7-3.2 3.2-7.2 3.8-11 .2-1.6.3-3.1 0-4.6v-.2" class="cls-2"/></svg>')}`;
export default image;