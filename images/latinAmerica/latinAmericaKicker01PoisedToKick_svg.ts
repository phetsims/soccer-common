/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;fill:none;stroke:#000}.cls-10,.cls-11,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-4{fill:#29a4db}.cls-5{fill:#39ae4a}.cls-6{fill:#3c4048}.cls-7{fill:#dadada}.cls-8{fill:#bd957d}.cls-10{fill:#ec85b2}.cls-11{fill:#e4b972}</style></defs><path d="M97.4 293.6c1.1 2.3 5.4 3.8 7.6 2.6 1.3-.7 2.1-2.1 2.8-3.4.5-1.1.3-2.2.9-3.1.1-.2.3-.4.5-.5 1.2-.9 1.7-1.1 2.8 0 7.3 3.9 14.6 7.9 22 11.8 1.3.7 2.6 1.4 3.4 2.6 1.6 2.5-.1 5.8-2.8 7.2s-6 1.2-9.2.9c-9.5-1-18.7-3.4-27.9-5.8-1.1-.3-2.3-.7-2.9-1.6-.4-.7-.3-1.5-.2-2.2q.75-4.95 2.7-9.6h.5v1.3Z" class="cls-7"/><path d="M131.1 169.5c1.3 2.9-1.9 5.8-4.5 7.7-2.5 1.9-4.1 2.6-6.7.9-1.3-.9-2.3-2.1-2.7-3.6v-.3c-.5-2.6 1.1-5.3 3.2-6.9 2.3-1.6 0-.9 2.8-1.5 3-.9 6.5.8 7.8 3.6Z" class="cls-8"/><path d="M106.1 145.9c4.3 7.4 12.6 16.8 17.2 19.9-2.7.6-.5-.2-2.8 1.5-2.2 1.6-3.7 4.3-3.2 6.9h-.1c-6.3-6.1-19.4-17.2-21-22.6.6-4.5 1.1-8.9 1.2-13.6 2 .2 4 .1 5.9-.2 1 3.5 1.8 5.8 3 8Z" class="cls-10"/><path d="M113.4 231.1c.2 12.4-.6 23.7-1.8 35.2-4.6 3.1-9.4 4.9-14.4 5.7-8.8 1.5-18.3.3-28.9-1-3.3-.4-9.5-.9-15.6-1.8-5.7-.9-11.5-2.1-15.1-4-1.1-.6-1.9-1.2-2.5-1.9 1-2 12-33.2 12.1-37.5.2-7.2-1.2-24.1 3.1-40 6.8 2.3 13.6 4.7 20.8 5.5 7.3.8 14.9 0 21.2-3.8h.3v.6c8.7 8.5 19.8 30.5 21 43.1Z" class="cls-11"/><path d="M111.5 266.3c-.8 7.6-1.8 15.2-2.9 23.3-.6.9-.3 2-.9 3.1-.7 1.3-1.4 2.7-2.8 3.4-2.2 1.2-6.5-.3-7.6-2.6.4-7.8.5-14.4-.3-21.5 5-.9 9.8-2.7 14.4-5.8Z" class="cls-8"/><path d="M106.9 90c.5.4.8 2.3.6 3.2-.3 1.3-.4 1.9-1.4 2.5-.4.2-.8.4-1.2.5-1.2.3-2.5 0-3.1-.9.4-1.4.7-2.8.8-4 0-.6.1-1.2.2-1.9 1.3-.8 2.4 0 3.8.5h.2Z" class="cls-11"/><path d="M108.2 69.3c1.3 6-1 14-1.5 20.5v.2c-1.5-.5-2.6-1.3-3.9-.5.4-3.9.8-9 0-13.4.4.2.8.3 1.3.3 1.1-.2 1.4-1.5 1.8-2.5.8-1.7 1.2-5.9.4-8.2l.9-.3c.4 1.2.7 2.5 1.1 3.9Z" class="cls-6"/><path d="m107.2 65.4-.9.3c-.2-.5-.4-.8-.6-1.1-.3.8-2 4.6-2.6 5.4-.5.6-1 1.2-1.4 1.9-.3-.8-.5-1.2-.9-1.8-.4-.5-.5-.6-.9-1.1.2-.2.5-.3.7-.5 1-.8.9-2.3 1-3.6.3-2.4.3-7.4-1.3-5.5-.7.9-2.9 4.2-3.7 6.3-2.4-2-4.9-3.2-8.4-5 .5-3.2-.8-8.5-2.1-11.5 5.3.8 11.2 2.6 14.5 5.7 3.4 3.2 5.4 6.4 6.7 10.4ZM105 96.5c-2.1 19.2 11.3 36.6-1.5 41.3h-.4c-1.9.3-3.9.3-5.9 0-2.2-.3-4.4-.9-6.4-2-4.2-2.3-3.4-11.6-2-21.2.1-1 .3-2 .5-3 1.6-1 3.2-2.3 5-3.8 3.8-3.3 6.1-7.6 7.6-12.6.6.9 1.9 1.2 3.1.9v.2Z" class="cls-6"/><path d="M102.8 76.1s-.2-.1-.2-.2c-1.1-.8-1.5-2.3-1.1-3.5 0-.2.1-.3.2-.5.4-.7.9-1.3 1.4-1.9.6-.8 2.3-4.6 2.6-5.4.3.3.5.6.6 1.1.8 2.2.4 6.5-.4 8.2-.5 1-.7 2.4-1.8 2.5-.4 0-.9 0-1.3-.3" class="cls-5"/><path d="M62.8 94.8c0-.4 0-.8-.1-1.1 0-1.3.2-2.6.4-4 .8-6.1 2.7-13 6.8-17.7.2 0 .5.1.8.2 1.5.2 3.1-.9 3.2-2.3 0-.4 0-.8-.2-1.2 2.4-1.7 3.3-2.3 4.9-3.3.3.2.6.4 1 .5.7.2 1.6.1 2.1-.4s.6-1.3.4-2c2.2-1.2 3.7-1.7 5.9-2.6 3.5 1.8 5.9 3 8.4 5-.2.5-.3.9-.2 1.2.1.9.8 1.7 1.6 2 .6.2 1.3.2 1.9 0 .4.5.5.6.9 1.1.4.6.6.9.9 1.7 0 .2-.2.4-.2.5-.4 1.2 0 2.7 1.1 3.5 0 0 .2.1.2.2.7 4.4.4 9.5 0 13.4 0 .7-.1 1.3-.2 1.9-.1 1.2-.4 2.6-.8 4-1.5 4.9-3.8 9.3-7.6 12.6-1.8 1.5-3.4 2.8-5 3.8-5.6 3.3-10.7 2.6-20.9-5.5-1.3-1-2.6-2.1-4.1-3.4-.6-1.9-1.2-5.1-1.5-8.1Zm29.7 7.1c-5.5 1.8-16.8-2.3-17.7-3.6 1.9 3.9 2.6 4.5 4.3 6s5.5 2.3 7.3 2.1c3.1-.3 4.6-1.7 6.1-4.4Zm7.6-21.7c2.5.9 2.2-1.7.4-2.4-1.7-.7-4.4-.5-6.1-.2-.5 0-.9.2-1.3.5-.3.3-.5.8-.3 1.2.3.6 1.2.5 1.9.4 1.8-.3 3.7-.1 5.4.5m-1.3 6.2c.1-1.6-.5-2.9-1.4-2.9s-1.7 1.1-1.8 2.7.5 2.9 1.4 2.9 1.7-1.1 1.8-2.7M82 77.6c2.8-2-2.8-2.5-3.8-2.5-1.5 0-3 .2-4.2 1-.4.2-.8.5-.9 1s0 1 .4 1.2c.3.2.7 0 1.1 0 1.8-.6 3.7-.7 5.5-.4.7.1 1.4.3 1.9-.1Zm-2.3 7.3c.1-1.6-.5-2.9-1.4-3s-1.7 1.2-1.8 2.7.5 2.9 1.4 3 1.7-1.2 1.8-2.7" class="cls-8"/><path d="M100.4 77.7c1.8.7 2.1 3.4-.4 2.4-1.7-.6-3.6-.8-5.4-.5-.7.1-1.5.2-1.9-.4-.2-.4 0-.9.3-1.2s.8-.4 1.3-.5c1.7-.3 4.4-.5 6.1.2" class="cls-6"/><path d="M100.2 59.5c1.6-1.9 1.6 3.1 1.3 5.5-.2 1.3 0 2.7-1 3.6-.2.2-.4.3-.7.4-.6.2-1.3.3-1.9 0-.9-.3-1.5-1.2-1.6-2 0-.3 0-.7.2-1.2.7-2 2.9-5.4 3.7-6.3" class="cls-4"/><path d="M56.7 172.4c-1.1-1.6-2-3-2.9-4.4l.4-.2c1.1-10.6 2.4-23.4 1.4-30.1.3-.5.6-1 .8-1.4 3.1 3.4 8.4 4.2 17.2-.6 3.7-1.6-1.1-13.7-5.1-22.8h.2c.9 1.9 2.4 2.7 3.5 3.4 2.2 1.5 6.6 2.9 9.3 2.9 3.8 0 6.2-1.6 6.6-4.5h.6c-1.5 9.7-2.2 19 2 21.3 2 1.1 4.2 1.7 6.4 2-.2 4.7-.6 9.2-1.2 13.7-1.4 10.8-3.5 21.6-3.6 35.7H92c-6.3 3.8-13.9 4.6-21.2 3.8-7.1-.8-14-3.1-20.8-5.5q.6-2.4 1.5-4.8h.1c.3.2.7.5 1 .8h.2c0-.6 0-1.4.1-2.3 1.4 2.2 8.6 8.6 10.5 7.6 1.7-.9 5.5-9.5 4.5-11.9-.9-2.2-9.5-4.4-11.2-2.7h-.1v-.1Z" class="cls-10"/><path d="M97.4 83.5c.9 0 1.5 1.4 1.4 2.9-.1 1.6-.9 2.8-1.8 2.7s-1.5-1.4-1.4-2.9c.1-1.6.9-2.8 1.8-2.7" class="cls-3"/><path d="M92.5 101.9c-1.5 2.8-3 4.3-6.1 4.5-1.9.2-5.6-.6-7.3-2.1s-2.4-2-4.3-6c.9 1.3 12.2 5.4 17.7 3.6" style="stroke-width:0;fill:#fff"/><path d="M88.2 114.6c-.4 2.9-2.9 4.5-6.6 4.5-2.7 0-7.1-1.5-9.3-2.9-1.1-.7-2.6-1.5-3.5-3.5-.6-1.4-.9-3.4-.5-6.4 10.1 8 15.3 8.7 20.9 5.4-.2 1-.3 2-.5 3h-.6Z" class="cls-8"/><path d="M86 49.3c1.4 2.9 2.7 8.3 2.1 11.5-2.2.9-3.7 1.4-5.9 2.6s0-.1 0-.2c-.3-.8-.9-1.4-1.4-1.9-1.6-1.5-5-3.8-7.3-5.7-.4 2.4 2.9 7.2 4.5 8.9s.5.5.8.7c-1.6 1-2.5 1.7-4.9 3.3-.2-.3-.4-.7-.6-1-.5-.6-4.8-5.6-5.2-8.8-1.1.3-.6 9-.2 10.4.3 1.2 1.2 2.2 2.3 2.7-4.1 4.8-6 11.7-6.8 17.8-1.4-.3-2.5-.5-3.9-.5s-3.9-.2-4.8.9l-.2-.2C51.3 80 52 69.5 56.2 61.7s16.2-13.5 25-13.1c1.6 0 3.4.3 5.3.6Z" class="cls-6"/><path d="M78.3 75.1c.9 0 6.6.5 3.8 2.5-.5.4-1.3.2-1.9.1-1.8-.3-3.7-.2-5.5.4-.4.1-.7.2-1.1 0s-.5-.8-.4-1.2.5-.7.9-1c1.2-.8 2.7-1 4.2-1Z" class="cls-6"/><path d="M82.2 63.4c.2.7 0 1.5-.4 2-.5.5-1.4.6-2.1.4-.4-.1-.7-.3-1-.5s-.6-.5-.8-.7c-1.6-1.7-4.9-6.6-4.5-8.9 2.3 1.9 5.7 4.2 7.3 5.7.6.5 1.2 1.1 1.4 1.9v.2Z" class="cls-4"/><path d="M78.3 81.9c.9 0 1.5 1.4 1.4 3s-.9 2.8-1.8 2.7-1.5-1.4-1.4-3 .9-2.8 1.8-2.7" class="cls-3"/><path d="M64.3 102.9c.1.5.3.9.4 1.1.7 1.7 2.2 5 3.9 8.8 4 9.1 8.7 21.2 5.1 22.8-8.8 4.8-14 4-17.2.6-4.3-4.6-4.6-13.9-4.4-19.9 0-2.2.1-4 .1-4.9-.1-5.7-.3-11.2 3.1-17.5h.2c1.6.5 5.7 1.3 7.3.9.3 2.9 1 6.1 1.5 8.1" class="cls-6"/><path d="M73.6 68.6c.2.4.2.8.2 1.2 0 1.5-1.7 2.6-3.2 2.3-.3 0-.5-.1-.8-.2-1.1-.5-1.9-1.5-2.3-2.7-.4-1.4-.9-10.1.2-10.4.4 3.2 4.7 8.1 5.2 8.8.3.3.5.7.6 1.1Z" class="cls-5"/><path d="M32.1 287.5c1.3 2 7.9 2.1 8.8 1.1 1-1.1.6-2.6 2-3.2.6-.2 1-.3 1.3-.3.5 0 .8.4 1.2 1.1 5.6 5.6 11.2 11.1 16.9 16.7 1 1 2 2 2.4 3.3.9 2.8-1.7 5.5-4.6 6.1s-5.9-.4-8.7-1.5c-8.5-3.4-16.4-8.1-24.3-12.8-.9-.6-2-1.2-2.2-2.3-.2-.7.1-1.5.4-2.2 1.3-3 3.9-7.9 6.8-8.7h.5c-.2 1-.4 1.8-.6 2.6Z" class="cls-7"/><path d="M68.1 175.2c1 2.4-2.8 11-4.5 11.9-1.9 1-9.1-5.4-10.5-7.6.4-2.6 1.5-5.7 3.6-7.1h.1c1.7-1.7 10.3.5 11.2 2.7Z" class="cls-8"/><path d="M68.7 112.7h-.2c-1.7-3.8-3.2-7-3.9-8.7-.1-.3-.3-.7-.4-1.1 1.4 1.3 2.8 2.4 4.1 3.4-.5 3.1-.2 5.1.5 6.5Z" class="cls-6"/><path d="M63 89.7c-.2 1.4-.3 2.7-.4 4 0 .4 0 .7.1 1.1-1.6.4-5.8-.3-7.3-.9h-.2c-1.4-.6-1.8-2-1.2-3.4 0-.1.1-.3.2-.4.9-1 3.4-.9 4.8-.9s2.6.2 3.9.5Z" class="cls-11"/><path d="M52.7 269.2c-2.9 6-5.3 11.5-8.4 15.9-.4 0-.8 0-1.3.3-1.4.6-1 2.1-2 3.2-.9 1-7.5.9-8.8-1.1.2-.8.4-1.6.6-2.5 1.3-5.5 2.8-12.6 4.7-19.7 3.6 1.8 9.3 3 15.1 3.9Z" class="cls-8"/><path d="M53.1 179.5c-.1.8-.2 1.6-.1 2.3h-.2c-.3-.3-.7-.6-1-.9-8.3-7.4-10.7-12.8-15.8-23.2-1.6-3.2-.5-8 2-14.7 1.1-2.6 4.7-10 6.9-14.6 3.7-7.7 3.4-9.1 7.2-11.9-.1 6 .2 15.3 4.4 19.9-.3.4-.5.9-.8 1.4-3.2 5.3-8.2 13.9-9.7 15.6l-.2.5c3.9 6.1 5.6 10 8.2 14.3.8 1.4 1.8 2.9 2.9 4.4-2.1 1.3-3.3 4.5-3.6 7.1Z" class="cls-10"/><path d="M68.3 106.3c-.5 3-.2 5 .5 6.4.9 1.9 2.4 2.7 3.5 3.5 2.2 1.5 6.6 2.9 9.3 2.9 3.8 0 6.2-1.6 6.6-4.5v-1.9m-50.3 30.4v-.2c1.1-2.5 4.7-10 6.9-14.6 3.7-7.7 3.4-9.1 7.2-11.9 0 0 .2-.1.2-.2m4.4 19.8s-.1.2-.2.3c-.3.4-.5.9-.8 1.4-3.2 5.3-8.2 13.9-9.7 15.6M97.2 138c-.2 4.7-.6 9.1-1.2 13.6-1.4 10.8-3.5 21.6-3.6 35.7v.6" class="cls-1"/><path d="M55.6 137.6c1 6.7-.3 19.5-1.4 30.1M38 142.9c-2.5 6.7-3.6 11.6-2 14.7 5.1 10.4 7.6 15.8 15.8 23.2.3.3.7.6 1 .9m3.9-9.3s0 0 0 0m-11-18.8c3.9 6.1 5.6 10 8.2 14.3.8 1.4 1.8 2.9 2.9 4.4m46.3-34.4s0 0 0 0c1 3.5 1.8 5.8 3 8m-49.2 26.6c1.7-1.7 10.3.4 11.2 2.7 1 2.4-2.8 11-4.5 11.9-1.9 1-9.1-5.4-10.5-7.6 0 0 0-.1-.1-.2m43.1-27.6c1.6 5.3 14.7 16.5 21 22.6M106 145.8s0 .1.1.2c4.3 7.4 12.6 16.8 17.2 19.9" class="cls-1"/><path d="M123.3 165.9c-2.7.6-.5-.2-2.8 1.5-2.2 1.6-3.7 4.3-3.2 6.9v.3c.4 1.5 1.4 2.7 2.7 3.6 2.6 1.8 4.1 1 6.7-.9 2.5-1.9 5.7-4.8 4.5-7.7-1.3-2.9-4.8-4.6-7.8-3.6m-71.7 15c-.6 1.6-1 3.2-1.5 4.8-4.3 15.9-2.9 32.9-3.1 40-.1 4.3-11.1 35.5-12.1 37.5.6.7 1.5 1.3 2.5 1.9 3.6 1.9 9.3 3.1 15.1 4 6.2.9 12.3 1.4 15.6 1.8 10.5 1.3 20.1 2.5 28.9 1 5-.9 9.8-2.6 14.4-5.7q0 0 0 0m-58.9 2.9c-2.9 6-5.3 11.5-8.4 15.9q0 0 0 0m-6.7-19.8c-2 7.1-3.4 14.2-4.7 19.7-.2.9-.4 1.7-.6 2.5m81.2-56.4c-1.2-12.7-12.3-34.6-21-43.1m5 105.6v-2.3m-.2-19.2c.8 7.1.7 13.8.3 21.5" class="cls-1"/><path d="M113.4 231.1c.2 12.4-.6 23.7-1.8 35.2-.8 7.6-1.8 15.2-2.9 23.3v.3" class="cls-1"/><path d="M97.4 293.5v.2c1.1 2.3 5.4 3.8 7.6 2.6 1.3-.7 2.1-2.1 2.8-3.4.5-1.1.3-2.2.9-3.1.1-.2.3-.4.5-.5 1.2-.9 1.7-1.1 2.8 0h0" class="cls-1"/><path d="M97 292.3c-1.3 3.1-2.3 6.3-2.7 9.6-.1.8-.2 1.6.2 2.2.5.9 1.8 1.3 2.9 1.6 9.2 2.4 18.4 4.8 27.9 5.8 3.1.3 6.4.4 9.2-.9s4.5-4.8 2.8-7.2c-.8-1.2-2.1-1.9-3.4-2.6-7.3-3.9-14.6-7.9-22-11.8m-80-2.1c0 .2 0 .4.2.6 1.3 2 7.9 2.1 8.8 1.1 1-1.1.6-2.6 2-3.2.6-.2 1-.3 1.3-.3.5 0 .8.4 1.2 1.1v.2" class="cls-1"/><path d="M32.3 284.8c-3 .8-5.5 5.7-6.8 8.7-.3.7-.6 1.4-.4 2.2.2 1 1.3 1.7 2.2 2.3 7.9 4.7 15.8 9.4 24.3 12.8 2.8 1.1 5.8 2.1 8.7 1.5s5.4-3.4 4.6-6.1c-.4-1.3-1.4-2.3-2.4-3.3-5.6-5.6-11.2-11.1-16.9-16.7l-.3-.3M57 172.3s-.1 0-.2.1c-2.1 1.3-3.3 4.5-3.6 7.1-.1.8-.2 1.6-.1 2.3v.2" class="cls-1"/><path d="M92.1 187.4c-6.3 3.8-13.9 4.6-21.2 3.8-7.1-.8-14-3.1-20.8-5.5-.1 0-.2 0-.4-.1" style="fill:none;stroke:#000;stroke-miterlimit:10"/><path d="M102.6 91.4c-.1 1.2-.4 2.6-.8 4-1.5 4.9-3.8 9.3-7.6 12.6-1.8 1.5-3.4 2.8-5 3.8-5.6 3.3-10.7 2.6-20.9-5.5-1.3-1-2.6-2.1-4.1-3.4q0 0 0 0" class="cls-1"/><path d="M92.3 95.4c-1.3 3.1-6.4 3-9.6.7m12.9-9.9c-.1 1.6.5 2.9 1.4 2.9s1.7-1.1 1.8-2.7-.5-2.9-1.4-2.9-1.7 1.1-1.8 2.7m-15.9-1.3c-.1 1.6-.9 2.8-1.8 2.7s-1.5-1.4-1.4-3 .9-2.8 1.8-2.7 1.5 1.4 1.4 3m13.2 16.9c-.1 0-.3.1-.5.2-5.5 1.8-16.8-2.3-17.7-3.6 1.9 3.9 2.6 4.5 4.3 6s5.5 2.3 7.3 2.1c3.1-.3 4.6-1.7 6.1-4.4M69.9 72c-4.1 4.7-6 11.7-6.8 17.7-.2 1.4-.3 2.7-.4 4m15.9-28.4c-1.6 1-2.5 1.6-4.9 3.3m22.8-2.8c-2.4-2-4.9-3.2-8.4-5q0 0 0 0c-2.2.9-3.7 1.4-5.9 2.6m19.4 8.5c-.3-.8-.5-1.1-.9-1.7-.4-.5-.5-.6-.9-1.1m2.8 22.3c0-.6.1-1.2.2-1.9.4-3.9.8-9 0-13.4h0" class="cls-1"/><path d="M106.7 89.8c.5-6.5 2.9-14.6 1.5-20.5-.3-1.4-.7-2.7-1.1-3.9-1.3-4-3.3-7.2-6.7-10.4-3.3-3.1-9.2-4.9-14.5-5.7-1.9-.3-3.7-.5-5.3-.6-8.8-.4-20.8 5.3-25 13.1s-4.9 18.3-1.7 28.1" class="cls-1"/><path d="M63 89.7c-1.4-.3-2.5-.5-3.9-.5s-3.9-.2-4.8.9c0 .1-.2.2-.2.4-.6 1.5-.2 2.8 1.2 3.4h.2c1.6.5 5.7 1.3 7.3.9h0m39 .6c.6.9 1.9 1.2 3.1.9.4 0 .9-.3 1.2-.5 1-.6 1.1-1.2 1.4-2.5.2-.9 0-2.8-.6-3.2q0 0 0 0m0-.1h-.2c-1.4-.6-2.6-1.4-3.8-.5" class="cls-1"/><path d="M73.7 135.6c3.7-1.6-1.1-13.7-5.1-22.8-1.7-3.8-3.2-7.1-3.9-8.8-.1-.3-.3-.7-.4-1.1-.6-1.9-1.2-5.1-1.5-8.1 0-.4 0-.8-.1-1.1m-7.5.2c-3.4 6.2-3.2 11.8-3.1 17.5 0 .9 0 2.7-.1 4.9-.1 6 .2 15.3 4.4 19.9 3.1 3.4 8.4 4.2 17.2-.6m29.9 2.3c12.9-4.7-.6-22.1 1.5-41.3m-15.7 15.2c-.2 1-.3 2-.5 3-1.5 9.6-2.2 18.9 2 21.2 2 1.1 4.2 1.7 6.4 2 2 .2 4 .2 5.9 0q0 0 0 0M86 49.3c1.4 2.9 2.7 8.3 2.1 11.5M82 77.6c-.5.4-1.3.2-1.9.1-1.8-.3-3.7-.2-5.5.4-.4.1-.7.2-1.1 0s-.5-.8-.4-1.2.5-.7.9-1c1.2-.8 2.7-1 4.2-1 .9 0 6.6.5 3.8 2.5Zm12.3-.1c-.5 0-.9.2-1.3.5-.3.3-.5.8-.3 1.2.3.6 1.2.5 1.9.4 1.8-.3 3.7-.1 5.4.5 2.5.9 2.2-1.7.4-2.4-1.7-.7-4.4-.5-6.1-.2M82.2 63.4s0 0 0 0v-.2c-.3-.8-.9-1.4-1.4-1.9-1.6-1.5-5-3.8-7.3-5.7-.4 2.4 2.9 7.2 4.5 8.9s.5.5.8.7.6.4 1 .5c.7.2 1.6.1 2.1-.4s.6-1.3.4-2m14.2 2.5c-.2.5-.3.9-.2 1.2.1.9.8 1.7 1.6 2 .6.2 1.3.2 1.9 0 .2-.1.5-.2.7-.4 1-.8.9-2.3 1-3.6.3-2.4.3-7.4-1.3-5.5-.7.9-2.9 4.2-3.7 6.3m-26.6 6.1c-1.1-.5-1.9-1.5-2.3-2.7-.4-1.4-.9-10.1.2-10.4.4 3.2 4.7 8.1 5.2 8.8.3.3.5.7.6 1.1.2.4.2.8.2 1.2 0 1.5-1.7 2.6-3.2 2.3-.3 0-.5-.1-.8-.2Zm36.4-6.2c-.2-.5-.4-.8-.6-1.1-.3.8-2 4.6-2.6 5.4-.5.6-1 1.2-1.4 1.9 0 .2-.2.3-.2.5-.4 1.2 0 2.7 1.1 3.5 0 0 .2.1.2.2.4.2.8.3 1.3.3 1.1-.2 1.4-1.5 1.8-2.5.8-1.7 1.2-5.9.4-8.2" class="cls-1"/></svg>')}`;
export default image;