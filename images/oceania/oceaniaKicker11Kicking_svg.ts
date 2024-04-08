/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="oceania" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1{fill:#3b2310}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-8{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#17baac}.cls-3{fill:#c27557}.cls-4{fill:#af52c2}.cls-5{fill:#fff}.cls-6{fill:none}</style></defs><path d="m135 179.3-.2.4c-4.2 1-7.5 4.4-9.5 8.2s-2.9 8.1-3.7 12.3c-.9 4.2-1.7 8.5-3.8 12.3-3.5 6.5-11 9.3-17.2 13.4l-.3.2C94 215.8 86.1 205 78.2 196.2q0 0 0 0c-5-4.8-14.1-16.7-12.9-31.6h0c1.1-12.4.2-7.3 2.4-30.7h.1c.5-4.7 1.6-9.8 1.6-15-1.8 1.2-14.9 10.9-19.3 14.2h0c-2.5-3.1-6.1-5.1-10-5.6l-.3-.2c.1-.2.2-.3.4-.5 1.5-2.2 3.6-4.9 5.9-8h0c1.2-1.5 13.9-15.5 14.7-16.3 4.3-4 7.4-7.1 13-8.3.5 0 1.3-.3 2.4-.5h.5c.3 10.6 3.5 18.4 13.6 21.4s26.1 1 32.2-7.6l.6-.6c.6.6 1 1.2 1.3 1.9 4.3 10.9 4.3 31 3.8 32.4h0c0 .6-.2 1.1-.4 1.5-.8-2.3-2.7-4.1-4.9-5.3-2.4-1.3-5.1-1.8-7.8-2.2v.4c-.7.2-1.3.3-1.8.5-3.5.9-5.9 1.4-7.9 1.7h0v-.3c-1.3-1.8-1.9-4.1-1.8-6.3 0-1.3.4-2.5.3-3.8-.2-2-1.8-3.8-3.8-4.2-1.5.9-2.2 2.8-2.2 4.6s.4 3.5.7 5.2c.3 1.8.4 3.6-.3 5.2v.4c-1.3.2-2.7.4-4.6.8-.2-2.4-7.1-6.2-11.1-7v-.2c.3-2.3.6-4.7.8-7 0-.8.2-1.6 0-2.3-.2-.9-.2-2-1-2.4-1.6-.9-3.7.3-4.4 2s-.5 3.6-.2 5.4.6 3.7 0 5.4c-1 2.6-2.9 3.5-3 6.3 0 1.5 0 3.2.3 4.9v.4c0 .5.2 1 .3 1.4.5 1.9.2 3.9-.2 5.9-.3 1.9-.6 4 0 5.9.6 1.7 2.2 3.2 3.9 3.2l1.3.2c1 .2 2.1.3 3.2.5.4 0 .7.1 1.1.2 4.3.8 9.2 1.8 14.4 3.2.3 0 .5.1.8.2 1.6.5 3 .9 4.2 1.3 4.7 1.5 6.9 2.7 10.8 3.9h.1c5.5 2.3 12.4 5.1 19.8 8.3Z" class="cls-4"/><path d="M46.1 118.8s0 0 0 0" class="cls-6"/><path d="M40.3 166.8c-1.8 2.2-11.8 3.1-13.5 2-2-1.4.2-9.5 1.6-11.6 2.2-10.4 3.8-16.7 8.1-24.4l.4.2c3.1.3 6.1 1.7 8.4 3.8.5.4.9 1 .8 1.6l.4.2c-3.6 6.1-6.5 10-9.5 16.1h.1c2.5.7 4.9 10.1 3.2 12.2Z" class="cls-3"/><path d="m36.9 154.7-.3.6" class="cls-6"/><path d="M50.2 133.1c-.6.4-1 .8-1.2.9-.9 1.7-1.8 3.2-2.6 4.6l-.4-.2c.1-.6-.3-1.2-.8-1.6-2.3-2.1-5.3-3.5-8.4-3.8l-.4-.2c1-1.7 2.1-3.5 3.4-5.5l.3.2c3.9.5 7.5 2.5 10 5.5h0Z" class="cls-2"/><path d="M69.5 118.9s0 0 0 0" class="cls-6"/><path d="m113.8 101-.5.9c-.4 3.3-8.5 7.1-17.3 5.2-9.2-2-12-7.7-10-14.2v-.4c1.2 0 2.4 0 3.5.2h.4v-4.1l.3-.2c8.5 8.5 14.6 11 19.6 10.5 1 .5 2.4 1.2 3.9 2Z" class="cls-3"/><path d="M109.8 99s0 0 0 0" class="cls-6"/><path d="m123.1 107-.6.6c-6 8.6-22.1 10.7-32.2 7.6S77 104.3 76.7 93.8h-.5c.2 0 .3-.1.5-.2 2.5-.5 6-1 9.3-1.1v.4c-2 6.5.8 12.2 10 14.2 8.8 1.9 16.9-2 17.3-5.2l.5-.9c3.2 1.6 7.2 3.7 9.3 5.9Z" class="cls-2"/><path d="M128.2 141.3s0 0 0 0m-14.9-5.4c-.3-3-.5-11-1.1-16.7" class="cls-6"/><path d="M119.6 148v.2c-2.2.7-4.2 1.1-6.1 1.3-.7 0-1.4.2-2 .2-2.8.2-5.3 0-8.1-.4-1.7-.2-3.4-.5-5.2-.8-2.6-.5-5.5-1-8.9-1.5-1.6.5-5.7.7-8.9.1-2-.4-3.6-1-4-2 0 0 0-.2-.1-.3v-.4c-.4-2.9 1.6-10.6 4.1-11.8.5-.2 1.3-.2 2.2 0 4 .8 11 4.6 11.1 7 1.8-.4 3.3-.6 4.6-.8 2.6-.4 4.6-.5 7.1-.9h0c2-.3 4.4-.8 7.9-1.7v.5c2.5.9 4.5 2.6 5.7 4.8 1.3 2.3 1.4 3.8.7 6.5Z" class="cls-3"/><path d="M127.8 142.8c-.2.6-.5 1.1-.8 1.7-1.1 2.2-2.6 2-3.6 2.6h-.4c-1.1.4-2.2.8-3.2 1.1v-.2c.6-2.6.5-4.1-.8-6.5-1.2-2.2-3.2-4-5.5-4.8v-.5c.4-.1 1-.3 1.6-.5v-.4c2.8.4 5.5.9 7.9 2.2 2.2 1.2 4.1 3 4.9 5.3Z" class="cls-2"/><path d="M93.6 139.6c-.3 0-.7.1-1 .2m-24.8-6.7v.8m.9-22.1c.6 2.4.8 4.8.8 7.1m40.5 167c0 .1 0 .2-.1.3m12.9-41.4s0 0 0 0" class="cls-6"/><path d="M120.6 252.4c-2.8 10.8-6.8 23.2-10.6 33.5l.6.2c3.3 2.4 6.1 4.4 8.8 6.3v.2c.9.6.9 2.2.6 3.3-.8 3.2-2.8 6.1-5.5 8-.1 0-.6.4-.7.4l-.2.7c-7-2.2-13.9-5-20.3-8.5 1-3.9 2-7.8 4.5-9.9l.6-.3c-.2-8.8-.9-19.8.6-29.2h.1c1.5-4 6.1-6.6 9.9-8.4 2.7-1.3 9.1-2.6 13.9-4.1-1 2.8-1.2 4-2.2 7.5Z" class="cls-3"/><path d="m78.5 196.4-.1-.1" class="cls-6"/><path d="M143.2 183v.2c-5.9 2.2-8.9 8.7-10.3 14.8s-1.9 12.6-5.3 17.8c-5.6 8.6-16.5 11-23.8 17.3h-.3c-.3-1.4-.7-2.8-1.5-4.3h0c-.5-.9-1-1.8-1.6-2.7l.3-.2c6.1-4.1 13.7-6.9 17.2-13.4 2-3.8 2.9-8.1 3.8-12.3.8-4.2 1.7-8.5 3.7-12.3s5.3-7.2 9.5-8.2l.2-.4c2.7 1.2 5.4 2.4 8.2 3.7Z" class="cls-2"/><path d="M153.1 207.6s-.2 0-.3-.1" class="cls-6"/><path d="M162.2 191.1v.2c-3.3 1.6-6.2 5.9-7.5 9.3-.8 2-1.2 4.6-1.6 7-.3 1.7-.5 3.4-.9 4.8-3.1 11.5-14.6 24.4-24.6 30.6-1.1.6-2.8 1.3-4.8 1.9-4.8 1.4-11.2 2.8-13.9 4.1-3.7 1.8-8.4 4.3-9.9 8.4h-.1c.4-2.5.9-4.9 1.6-7.1.9-2.8 1.9-6 2.6-9h0c5.5-2.6 10.5-5.4 16-8 6.8-3.2 13.9-6.7 17.7-13.2 3.1-5.3 3.5-11.7 4.7-17.8 1.2-6 4-12.5 9.7-14.8l.2-.5c4.1 1.5 7.5 2.9 10.7 4.1Z" class="cls-2"/><path d="m151.5 187-.2.5c-5.7 2.4-8.5 8.8-9.7 14.8s-1.6 12.4-4.7 17.8c-3.8 6.4-11 10-17.7 13.2-5.5 2.6-10.5 5.4-16 8h0c.2-.8.3-1.6.4-2.3.3-2.1.3-3.9 0-5.7h.3c7.3-6.4 18.2-8.8 23.8-17.4 3.4-5.2 3.9-11.8 5.3-17.8 1.4-6.1 4.4-12.6 10.2-14.8v-.2c2.7 1.2 5.3 2.5 7.9 3.8.2 0 .3.1.5.2Zm-36.4-16s0 0 0 0c-3.9-1.3-6.1-2.4-10.8-3.9l.2-.6c-.6-1.6-1.8-3-2.7-4.5s-1.7-3.3-1.3-5c.3-1.3 1.1-2.4 1.9-3.5.7-1.1 1.3-2.4 1-3.7v-.5c2.8.4 5.4.6 8.2.4h2.2c-.8 3.2 1.3 16 1.4 21.2Z" class="cls-4"/><path d="m104.5 166.5-.2.6c-1.2-.4-2.6-.8-4.2-1.3-.3 0-.5-.1-.8-.2l.2-.9c-.8-1.7-1.5-3.4-2.3-5-.6-1.4-1.2-2.8-1.1-4.3.2-2.5 2.6-4.6 2.1-7 1.8.3 3.5.6 5.2.8v.5c.2 1.3-.4 2.6-1.1 3.7s-1.6 2.2-1.9 3.5c-.4 1.7.4 3.5 1.3 5s2.1 2.9 2.7 4.5Z" class="cls-2"/><path d="M115.4 171.2c-.1 0-.2 0-.3-.1M90 92.9c0 .9-.2 1.8-.5 3.1m23.8 40.7c-.1 0-.3-.1-.5-.2m2.2-1.2h-.4" class="cls-6"/><path d="m99.5 164.8-.2.9c-5.2-1.4-10.1-2.5-14.4-3.2l.2-.9c-1.3-1.4-2.6-2.8-4-4.2-.6-.6-1.2-1.4-1.3-2.2 0-.8.3-1.5.6-2.2.7-1.7.7-3.7 0-5.5v-.3c3.3.6 7.4.4 9-.1 3.4.5 6.3 1 8.9 1.5.5 2.4-1.9 4.5-2.1 7-.2 1.5.5 2.9 1.1 4.3.8 1.7 1.5 3.4 2.3 5Z" class="cls-4"/><path d="m84.9 161.5-.2.9c-.4 0-.8-.1-1.1-.2-1.1-.2-2.2-.4-3.2-.5l-1.3-.2c-1.8 0-3.3-1.5-3.9-3.2-.6-1.9-.3-3.9 0-5.9.3-1.9.7-4 .2-5.9-.1-.4-.2-.9-.3-1.4v-.4c-.3-1.6-.4-3.4-.3-4.9.2-2.8 2.1-3.7 3-6.3.6-1.7.3-3.6 0-5.4s-.5-3.7.2-5.4 2.8-2.9 4.4-2c.8.5.8 1.5 1 2.4.2.7.1 1.5 0 2.3-.3 2.3-.5 4.7-.8 7v.2c-1-.2-1.8-.2-2.3 0-2.5 1.2-4.5 8.9-4.1 11.8v.4c0 .1 0 .2.1.3.4 1 2 1.6 4 2v.3c.6 1.7.6 3.7 0 5.5-.3.7-.6 1.4-.6 2.2 0 .9.7 1.6 1.3 2.2 1.3 1.4 2.6 2.8 4 4.2Z" class="cls-2"/><path d="M79.6 161.4h-.5" class="cls-6"/><path d="M105.3 137.9c-2.5.4-4.4.5-7.1.9v-.4c.7-1.6.6-3.5.3-5.2s-.8-3.5-.7-5.2.8-3.6 2.2-4.6c2 .4 3.5 2.2 3.8 4.2.1 1.3-.2 2.5-.3 3.8-.2 2.2.5 4.5 1.7 6.3v.3Z" class="cls-2"/><path d="M98.2 148.5s0 0 0 0" class="cls-6"/><path d="m136.4 310.1-.9-.5c-4.9-.5-9.8-1.3-14.6-2.5l.2-.7c1.4-.5 2.7-1 3.9-1.9 1.2-.8 2.2-2 2.5-3.5.3-1.2 0-2.6-.9-3.5 1.7 1.2 3.6 2.6 5.6 4 1.4 1 3 1.9 3.7 3.4 1 2 1.2 3.8.5 5.1Z" class="cls-3"/><path d="M136.4 310.1c-.5.9-1.4 1.6-2.8 2.1-3.6 1.3-7.6.6-11.3-.2-11.5-2.6-15.4-4.6-26.3-9-1.3-.5-2.7-1.2-3.2-2.4-.4-.9-.1-1.9.1-2.8 0-.4.2-.8.3-1.2 6.5 3.5 13.3 6.3 20.3 8.5 2.5.8 4.9 1.4 7.4 2 4.8 1.1 9.7 2 14.6 2.5z" class="cls-8"/><path d="M127.5 301.1c-.3 1.4-1.3 2.6-2.5 3.5-1.2.8-2.6 1.4-3.9 1.9l-.2.7c-2.5-.6-5-1.2-7.4-2l.2-.7c.1 0 .6-.3.7-.4 2.7-1.9 4.7-4.8 5.5-8 .3-1.2.3-2.7-.7-3.3v-.2c2.5 1.7 4.8 3.4 7.4 5.2.9.9 1.2 2.3.9 3.5Z" class="cls-8"/><path d="M93.1 296.7H93m33.6.9c-.1-.1-.3-.3-.5-.4" class="cls-6"/><path d="m204.2 212.4.3.7c-6.5 3.5-13.2 6.3-20.3 8.5-1.3-2.3-2.2-4.7-3-7.2h-.6c-15.4-6.4-19.9-3.6-27.5-6.8.4-2.4.8-5 1.6-7 1.3-3.4 4.2-7.7 7.4-9.3v-.2c8.7 3.4 15.4 6.1 26.5 10.3l.2.4c4-.7 7.4-1.3 10.7-1.8v.2c1.2-.3 2.3.8 2.9 1.8 1.7 2.8 2.4 6.3 1.8 9.6 0 .2-.1.7-.2.8Zm20-12.1-1 .2c-3.8 3.1-7.8 6-12.1 8.7l-.4-.6c.6-1.3 1.2-2.7 1.4-4.1s.1-3-.7-4.2c-.7-1.1-1.9-1.8-3.2-1.8 2.1-.4 4.3-.7 6.8-1.2 1.8-.3 3.4-.8 5-.2 2.1.7 3.5 1.8 4 3.2Z" class="cls-3"/><path d="M223.7 203.8c-1.6 3.4-4.9 5.8-8.2 7.9-10 6.3-14.1 7.7-24.9 12.3-1.3.6-2.8 1.1-4 .6-.9-.4-1.4-1.2-1.9-2.1-.2-.3-.4-.7-.6-1.1 7-2.2 13.8-5 20.3-8.5 2.2-1.2 4.5-2.5 6.6-3.9q0 0 0 0c4.2-2.6 8.2-5.5 12.1-8.7l1-.2c.3 1 .2 2.1-.5 3.5Z" class="cls-8"/><path d="M212.1 204.5c-.2 1.4-.8 2.8-1.4 4.1l.4.6s0 0 0 0c-2.2 1.4-4.4 2.6-6.6 3.9l-.3-.7c0-.1.2-.7.2-.8.5-3.3-.1-6.7-1.8-9.6-.6-1-1.7-2.1-2.9-1.8v-.2c2.9-.5 5.6-1 8.7-1.5q0 0 0 0c1.2 0 2.5.7 3.2 1.8.8 1.2.9 2.8.7 4.2Z" class="cls-8"/><path d="M181.2 214.4c-.3-1-.6-1.9-.9-2.9m3.9 10.1h-.2m24.3-23.1h-.5" class="cls-6"/><path d="M130.1 47.1c-2.8-1.2-5.2 0-7.8-1.8-1.7-1.2-2.4-3.3-4.3-4.1-2.7-1.1-4.6 2-7.5 2.1-3.5.2-5.4-3.4-8.7-2.4-2.9.9-3.1 3.9-5.5 5.8-1.8 1.6-4.9 1.2-6.5 3-1.4 1.6-1 4-.8 6.1s-.5 5.4-2.5 6v-.2c-2.4-2.2-6.8-.9-7.7 2.3s2.6 9 5.7 8.3c.7 6.3 2.3 10.2 5.2 15.7h0l.5.5h0c8.5 8.5 14.6 11 19.6 10.5 3.8-.4 7.1-2.5 10.4-5.2 2.4-2 4.6-3.5 8.6-11 1-2 1.7-4.1 2.1-6.4.2-.9.3-1.8.4-2.6.2-2 .3-4.1.5-6.1.2-1.9 1.2-6.9 1.8-8.1v-.2c.7-1.3.6-10.6-3.5-12.4Zm-32.7 7.3c-.8.2-1.3-.8-.7-1.4.4-.4.8-.7 1.2-1.1 1.1-1 2.6-1.4 4-1.6 2.2-.2 9.2.7 7.7 4.3-.3.8-1.2 1.4-2 1.4s-1.7-.5-2.5-.8c-2.2-1-5.4-1.5-7.8-.8Zm3.2 10.7c.4-2.5 1.7-4.3 3-4.1s2 2.3 1.7 4.8c-.4 2.5-1.7 4.3-3 4.1s-2-2.4-1.7-4.8m11.3 25.7c-2 0-5-1.3-6.7-3.1-1.6-1.7-1.7-.8-3.4-5 .9 1.4 11 5.9 16.7 4-1.8 2.7-3.5 4-6.7 4.1Zm15.2-22.3c-.3 2.2-1.4 3.8-2.5 3.6-1-.2-1.6-2-1.3-4.2s1.4-3.8 2.5-3.6c1 .1 1.6 2 1.3 4.2m1.8-9.6c-.7 0-4.5.4-5.4.2-1.1-.2-1.9-1.4-1.7-2.5s1.2-2 2.3-2.3c.4-.1.2-.2.6-.2 2 0 3.5.8 5 2.1.5.4.9 1 .8 1.6-.1.7-.9 1.1-1.6 1.1" class="cls-3"/><path d="M127.1 68.5c-.3 2.2-1.4 3.8-2.5 3.6-1-.2-1.6-2-1.3-4.2s1.4-3.8 2.5-3.6c1 .1 1.6 2 1.3 4.2m-21.8-2.7c-.4 2.5-1.7 4.3-3 4.1s-2-2.4-1.7-4.8 1.7-4.3 3-4.1 2 2.3 1.7 4.8" class="cls-8"/><path d="M120 78.3c.3 4.8-4.4 2.5-7.9 2.4" class="cls-6"/><path d="M118.6 86.7c-1.8 2.7-3.5 4-6.7 4.1-2 0-5-1.3-6.7-3.1-1.6-1.7-1.7-.8-3.4-5 .9 1.4 11 5.9 16.7 4Z" class="cls-5"/><path d="M135.4 65.4c-.5 1.5.5 5.7-.2 7.1-1 2-2.1 3-4.1 4.1h-.2c.2-.9.3-1.8.4-2.7.2-2 .3-4.1.5-6.1.2-1.9 1.2-6.9 1.8-8.1v-.2c.7-1.3.6-10.6-3.5-12.4-2.8-1.2-5.2 0-7.8-1.8-1.7-1.2-2.4-3.3-4.3-4.1-2.7-1.1-4.6 2-7.5 2.1-3.5.2-5.4-3.4-8.7-2.4-2.9.9-3.1 3.9-5.5 5.8-1.8 1.6-4.9 1.2-6.5 3-1.4 1.6-1 4-.8 6.1s-.5 5.4-2.5 6v-.2c-2.4-2.2-6.8-.9-7.7 2.3s2.6 9 5.7 8.3c.7 6.3 2.3 10.2 5.2 15.7l-.5-.5h-.1c-3-2.2-6.6.7-9.1-3.4-1.4-2.2-1.8-5-3.1-7.3-2.2-3.9-4.6-7.7-5.6-12-1.4-6.1 3-9.9 3.7-16.1.4-3.5.1-7.1 2.2-10 2.5-3.4 5.9-4.1 9.6-6.3 2.2-1.3 3.1-3.7 4.9-5.5 2-2 5.1-3.5 9-2.4 1.9.5 4.5 1.4 6.4 1.1 1.9-.4 3.9-1 5.7-.1 1.6.8 4.2 2.4 5.7 3.3 2.7 1.6 5-.1 7.7 1.4 2.1 1.2 3.6 4.2 5.3 5.9 2 2.1 4.3 2.1 5.7 4.7 1.2 2.2-.6 6.2-.2 8.8.6 3.5 2.3 4.6 1.8 8.1-.4 2.9-2.2 5-3.3 7.7Z" class="cls-1"/><path d="M109.8 54.6c-.3.8-1.2 1.4-2 1.4s-1.7-.5-2.5-.8c-2.2-1-5.4-1.5-7.8-.8-.8.2-1.3-.8-.7-1.4.4-.4.8-.7 1.2-1.1 1.1-1 2.6-1.4 4-1.6 2.2-.2 9.2.7 7.7 4.3Zm20.7 3.2c-.1.7-.9 1.1-1.6 1.1s-4.5.4-5.4.2c-1.1-.2-1.9-1.4-1.7-2.5s1.2-2 2.3-2.3c.4-.1.2-.2.6-.2 2 0 3.5.8 5 2.1.5.4.9 1 .8 1.6" class="cls-1"/><path d="M86.8 43.1c-.6.3-.7 1.4-.7 2.2 0 2.5-1.2 5.5-3.1 6.8s-2.6 1-2.9 1.7c-.5.9 0 2.3.7 2.8s1.7.8 2.5 1c2.8.8 2.9 1.6 2.9 3.1s.3 2.7.3 4.4c0 1.5.2 3.4 1.2 3.7 1.1.3 2.1-3.7 2.7-5.1.8-1.9 2.5-2.1 3.4-1.6 1.8.8 3.2.1 3.4-1.5 0-1.1-.8-2.2-1.4-3-2.2-2.8-1.4-4.3-1-5.2.7-1.5 1-2 1.7-3.5.5-1 1-2.2.5-3.2-.4-.8-1.2-1-1.9-.6s-3.4 2.1-4.1 2c-1.3 0-3-5-4.4-4.1Z" class="cls-5"/><path d="M92.6 54.8c-.4-2.5-1.9-1.9-2.4-1.2s-.5 1.9 0 2.7c.4.7 1.2.9 1.8.4.4-.4.7-1.1.6-1.9" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#f8ad3b"/></svg>')}`;
export default image;