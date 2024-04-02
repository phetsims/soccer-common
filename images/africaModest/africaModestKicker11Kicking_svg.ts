/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africaModest" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-4{fill:#3a3a3a}.cls-5{fill:#afd1e1}.cls-6{fill:#9d715e}.cls-7{fill:#98bed2}.cls-8{fill:#fff}</style></defs><path d="M216.5 201.8c3 1.3 3.6 5.5 1.9 8.5s-4.8 4.9-7.9 6.5c-9.4 5-19.4 8.4-29.4 11.9-1.2.4-2.6.8-3.6.3h-.3c-.4-.4-.6-.9-.9-1.4-1.7-3.5-2.9-7.1-3.7-10.9v-.3c1 4 11.2-6.9 10.5-8.3-.7-1.3-1.1-2.3-1.2-3.8.4 0 .7 0 1.1-.1 9-.8 19.9-2 28.8-2.8 1.6-.1 3.3-.3 4.7.3Z" class="cls-8"/><path d="M97.6 170.8c4.3 1.4 6.4 2.7 9.4 3.5 1 .4 2.2.8 3.4 1.3 4.7 1.8 10 3.9 12.4 4.8 9.3 3.8 8.6 2.3 20.3 9.4 15.3 5.6 23.6 8.9 38.9 14.5 0 1.5.5 2.4 1.2 3.8.7 1.3-9.5 12.3-10.5 8.3v.3h-.2c-20.6-8.5-23.3-.2-35.7-11.5-10.9-2.1-12.4 0-19.7-.2h-.4c-1.5-.1-3.1-.3-4.6-.4-11.5-1.1-22.5-2.2-35.6-5.4-1-.2-1.9-.5-2.7-.7q-1.65-.45-2.7-.9c-4.9-2.5-11.5-9.3-11.5-21.8 0-1.1 0-2.2.1-3.3 1.6-10 15.8-6.7 32.8-3 2 .4 3.7.9 5.1 1.4Z" class="cls-4"/><path d="M90.6 289.8c1.1 2.5 4.7 4 7.2 2.7 1.5-.8 2.4-2.3 3.2-3.7.7-1.3 1.3-2.6 2.3-3.6.1-.1.3-.3.5-.4 1.3-1 2.6-1.2 3.8 0h.1c9.2 5 15.9 10 25.1 14.9 1.6.9 3.2 1.8 4.2 3.2 2 3.1-.1 7.4-3.6 9.1s-7.6 1.6-11.5 1.2c-11.9-1.2-21-4.2-32.6-7.2-1.4-.4-2.9-.8-3.6-2-.5-.9-.4-1.9-.2-2.8.6-4.2 1.8-8.3 3.5-12.2h1.7v.7Z" class="cls-8"/><path d="M110.2 107.6c-3.3 2-7.1 4.2-9.2 7.2-.4.6-.7 1.1-.9 1.7-.2.4-1.4 3.3-4.2 6.1-3.6 3.6-9.9 7-19.6 4.2-7.1-1.1-9.1-6-10.3-11.4-.3-1.3-.5-2.6-.7-3.9-.6-3.4-1.3-6.8-3-9.2l-.2-.3c-.6-.8-1.5-.8-2.2-1.5s-.1-3.8 0-4.8c.2-14.1.9-28.6 6.4-41.7 1.8-4.2 4.1-8.2 6.9-11.8 9-11.6 28.3-16 42.4-6.8 5.6 3.7 7.7 4.3 11 10.2 2.4 4.4 3.8 17.5 1.1 31.3-2.1 10.8-6.5 16.6-11.8 26.1-.9 1.5-2.9 2.9-5.3 4.3h-.1ZM85.9 58.7c-2.5 7.7-5.1 27.8.7 32.5 4.6 3.9 14.9 8.3 17.5 7.9 4.2-.7 10.3-6.3 10.3-6.3 8.2-6.6 6.5-20.8 7.7-22.7 1.2-2 2.3-4.5 2.8-8.5 0-.7.1-1.3.2-2.1-2.1-16.1-14-17.7-21.3-16.1-3.7.8-13.5 2.8-17.6 14.7 0 .2-.1.4-.2.5Z" class="cls-4"/><path d="M125 59.5c0 .7-.1 1.4-.2 2.1.3-4.8-9.8-9-14.4-9.8C103 50.4 91 53 85.9 58.7c0-.2.1-.4.2-.5 4.1-11.8 13.9-13.9 17.6-14.7 7.2-1.6 19.1 0 21.3 16.1Z" class="cls-4"/><path d="M105 61.2c-1.8-1.9-5.2-2.5-9-.3v.5c2.2-.2 4.4.2 6.1 1.1.6.3 1.3.7 2 .5.5-.1.7-.5.8-.8v-1Zm5.4-9.4c4.6.8 14.7 5.1 14.4 9.8-.5 3.9-1.6 6.5-2.8 8.5-1.1 1.9.6 16.1-7.7 22.7 0 0-6.1 5.6-10.3 6.3-2.6.4-12.9-3.9-17.5-7.9-5.8-4.7-3.1-24.9-.7-32.5 5.1-5.6 17.1-8.2 24.5-6.9Zm10.1 15.9c.4 0 .9-.2.7-.5h-.3c.2-2.6-3.4-3.2-5.2-2.1h-.2c-.5.2-.4.9 0 1.2.5.3 1.2.4 1.9.5.7 0 1.3 0 1.9.3.4.1.7.4 1.1.4Zm-2.3 6.1c.4-1.6 0-3-.9-3.1-.9-.2-1.9.9-2.2 2.5-.4 1.6 0 3 .9 3.1.9.2 1.9-.9 2.2-2.5m-19.9 9.3c1.3 9.8 9.4 10.2 12.9 4.1-5.1-.5-8.3-1-12.9-4.1m2.9-13.2c.3-1.5-.1-2.9-1-3-.9-.2-1.9.9-2.3 2.4-.3 1.5.1 2.9 1 3.1s1.9-.9 2.3-2.4Z" class="cls-6"/><path d="M121.2 67.2c.2.3-.3.5-.7.5s-.8-.3-1.1-.4c-.6-.2-1.3-.3-1.9-.3-.7 0-1.4-.2-1.9-.5s-.6-1 0-1.2h.2c1.8-1.1 5.4-.6 5.2 2h.3Z" class="cls-3"/><path d="M95 142.4c0-.7 0-1.4-.1-2.1 0 .3-1.1.6-2.3 1 .1-2.7.4-5.3.8-7.9 3.2-5 6.6-7.9 10.1-11.2.6-.6 1.2-1.2 1.5-1.9.6-1.8-.8-3.5-2.2-4.8 3.4-1.3 7.2-1.8 10.8-1.5-.2-2.4-1.4-4.8-3.3-6.4h.1c3.4 1.9 5.6 5.1 7.2 9.1 2 5.5 1.8 12.7 2.4 18 .3 3.5 1.1 11.2-.6 14.6-1.1 2.1-2.2 2.3-3.2 3-3.5 1.4-6.4 2.2-9.1 2.7-4.2.8-7.8.7-11.8.3 0-4.2 0-8.5-.3-12.7Z" class="cls-7"/><path d="M117.2 70.7c.9.2 1.3 1.6.9 3.1s-1.4 2.7-2.2 2.5c-.9-.2-1.3-1.6-.9-3.1s1.4-2.7 2.2-2.5" class="cls-3"/><path d="M111.8 205.6c3.2 11.4 6.5 14.1 6 22.8-1.3 10.9-2.3 14.9-5 25.1-2.9 10.6-5.8 21.3-9.6 31.4v.3c-1 1-1.6 2.3-2.3 3.6-.8 1.4-1.6 2.9-3.2 3.7-2.6 1.3-6.1-.2-7.2-2.7v-.8c-.3-10.8-1-27.7 2.3-37.5 1.2-3.4 2.4-7.4 3-11 .5-3.7.2-6.5-1.5-9.8-1.3-3.8-11.4-12.9-17.7-25q-1.8-3.45-3-7.2c.8.2 1.7.5 2.7.7 13 3.2 24 4.3 35.6 5.4v1.1Z" class="cls-4"/><path d="M110.2 107.6c1.9 1.6 3.1 3.9 3.3 6.4-3.7-.3-7.4.2-10.8 1.5l-1.6-.6c2.1-3 5.9-5.2 9.2-7.2Z" class="cls-5"/><path d="M107 174.4c-3-.8-5.1-2.2-9.4-3.5-2.5-4.1-4.2-8.6-4.8-13.4v-.4c.8 0 1.6.1 2.4.2v-2.1c4.1.4 7.7.5 11.8-.3 0 4.2 1.9 15.4 3.3 20.8-1.2-.5-2.3-.9-3.4-1.3Z" class="cls-7"/><path d="M111.1 87.3c-3.5 6.1-11.6 5.7-12.9-4.1 4.6 3.1 7.8 3.6 12.9 4.1" class="cls-8"/><path d="M105 61.2c0 .3.1.7 0 1 0 .3-.4.7-.8.8-.7.2-1.4-.2-2-.5-1.8-.9-4-1.3-6.1-1.1v-.5c3.7-2.2 7.1-1.6 8.9.3" class="cls-3"/><path d="M102.7 115.5c1.3 1.3 2.8 3.1 2.2 4.8-.3.8-.9 1.4-1.5 1.9-3.5 3.3-6.9 6.2-10.1 11.2.6-3.6 1.5-7.2 2.7-10.7 2.8-2.8 4.1-5.7 4.2-6.1.2-.6.6-1.2.9-1.7z" class="cls-5"/><path d="M100.2 66.8c.9.2 1.4 1.5 1 3-.3 1.5-1.4 2.6-2.3 2.4s-1.4-1.5-1-3.1c.3-1.5 1.4-2.5 2.3-2.4Z" class="cls-3"/><path d="M95.9 122.6q-1.8 5.25-2.7 10.8c-.4 2.6-.7 5.2-.8 7.8-1.2.4-2.4.7-2.7.7-1.6.4-2.1.4-2.2 1.8-.7.1-1.2.2-1.8.3-.1-3.2-10.2-8.5-12.9-7.2-3 1.4-6.7 12.7-5.8 15 1.1 2.7 10.9 2.4 13.6 1.4 2.6.3 4.5.5 6.7.8v2.5c1.8.2 3.7.3 5.5.5v.4c.6 4.7 2.2 9.3 4.8 13.4-1.4-.5-3.1-.9-5.1-1.4-17-3.7-31.3-7.1-32.8 3 0 1.2-.1 2.3-.1 3.3-1.8-6.5-1.9-11.4-1.2-17.6C59 153 60 147 61 138.5c.3-2.6.6-5.4.9-8.5 1.1-6 2.1-8.8 4.4-14.5 1.1 5.4 3.1 10.3 10.3 11.4 9.7 2.8 15.9-.6 19.6-4.2Z" class="cls-8"/><path d="M95 142.4c.2 4.2.3 8.5.3 12.7v2.1c-.8 0-1.6-.1-2.4-.2-1.8-.2-3.7-.3-5.5-.5V154c0-3.3 0-6.5.2-9.8v-.6c.1-1.3.6-1.4 2.2-1.8.3 0 1.5-.3 2.7-.7 1.2-.3 2.3-.7 2.3-1 0 .7 0 1.4.1 2.1Z" class="cls-5"/><path d="M85.8 144c.6-.1 1.1-.2 1.8-.3v.6c-.2 3.2-.2 6.5-.2 9.8-2.1-.3-4.1-.6-6.7-.8-2.7 1-12.5 1.3-13.6-1.4-.9-2.3 2.8-13.6 5.8-15 2.8-1.3 12.8 4 12.9 7.1" class="cls-6"/><path d="M76.7 205.6c-3.6 2.1-20.6-3.3-24.7-3.6 1-13.4 2.9-30.2 6.3-44-.7 6.2-.6 11.1 1.2 17.6 0 12.5 6.6 19.3 11.5 21.8q1.05.45 2.7.9c.8 2.5 1.9 4.9 3 7.2Z" class="cls-7"/><path d="M65.4 111.6c.2 1.3.5 2.6.7 3.9-2.2 5.7-3.2 8.5-4.4 14.5-.3 3.1-.6 5.9-.9 8.5h-.3c0-4.9.3-8.4.1-12.2-.1-2.4-.5-4.9-1.2-7.9-1-1.9-1.2-3-1.2-3 .1-.3 4.9-2.3 5.2-3.1v-.3l1.8-.3Zm0 0-1.8.3c-.3-1.4-2.8-6.6-4.9-7.8 1-1 2.3-1.6 3.7-1.7 1.8 2.4 2.4 5.7 3 9.1Z" class="cls-5"/><path d="M63.6 111.9v.3c-.3.8-5 2.8-5.2 3.1 0 0 .2 1.1 1.2 3 .7 3 1 5.5 1.2 7.9h-1.5c-.3.3-.6.5-.9.8-3.8 2.8-11.7 7.7-16.4 11.4-2.5 4.5-4.2 7.2-6.2 10.2-.2 0-.5-.2-.8-.3-3.2-1.3-6.6-1.5-10-1 1.8-5.3 4.1-10 8.3-16 3.3-4.8 9.9-13.4 13.3-16.8 2.3-2.8 7.4-10.4 13.5-14 .7.8 1.6.7 2.2 1.5l.2.3c-1.4.2-2.7.8-3.7 1.7 2.2 1.2 4.7 6.4 4.9 7.8Z" class="cls-7"/><path d="M60.6 138.5h.3c-1 8.5-2 14.5-2.6 19.6-3.4 13.8-5.2 30.6-6.3 44-2.7-22.5-.8-53.4 6.3-74.9.3-.3.7-.5.9-.7h1.5c.2 3.7 0 7.2-.1 12.1Z" class="cls-7"/><path d="M24.8 147.6c3.4-.5 6.8-.4 10 1 .3.1.5.2.8.4s.6.4.9.8c.5.8.4 1.8.3 2.7-.2 1.3-.4 2.7-1.4 3.4-.7.5-1.6.6-2.4.6h-1.9c-2.7 0-5.3-.3-7.9-.9-.2 0-.4 0-.6-.1-.5-.1-1.1-.3-1.4-.7s-.3-1-.2-1.5c.3-2.8.9-5.2 3.8-5.6h.2Z" class="cls-5"/><path d="M29.9 158.6c2.5.7 4.8 9.8 3.2 11.8-1.7 2.1-11.7 3-13.4 1.9-2-1.4.2-9.3 1.5-11.3.5-2.3 1.3-3.6 1.8-5.5 2.6.6 5.2.8 7.9.9-.5.9-.8 1.4-1.2 2.2Z" class="cls-6"/><path d="M23.2 155.5c-.5 2-1.3 3.2-1.8 5.5m25-46.3c-3.3 3.4-9.9 12.1-13.3 16.8-4.2 6-6.6 10.7-8.3 16q0 0 0 0m6.3 8.9c-.5.9-.8 1.4-1.2 2.2h0c0 .2-.2.3-.3.5m29.6-32.7c-.3.2-.6.5-.9.7-3.8 2.8-11.7 7.7-16.4 11.4-2.5 4.5-4.2 7.2-6.2 10.2" class="cls-1"/><path d="M30 158.7c2.5.7 4.8 9.8 3.2 11.8-1.7 2.1-11.7 3-13.4 1.9-2-1.4.2-9.3 1.5-11.3m98.7-26.5c-.6-5.3-.4-12.5-2.4-18-1.5-4.1-3.7-7.2-7.2-9.1m-23.1 46.6c-2.1-.3-4.1-.6-6.7-.8m35.6-1.2c-3.5 1.4-6.4 2.2-9.1 2.7-4.2.8-7.8.7-11.8.3m-7.7-11.4c-.7.1-1.2.2-1.8.3-.2 0-.4 0-.7.1m25.1-4.1c-.7.2-1.4.4-2 .5-5.9 1.4-9.4 1.5-13.3 1.9" class="cls-1"/><path d="M85.8 143.9c-.1-3.1-10.2-8.4-12.9-7.1-3 1.4-6.7 12.7-5.8 15 1.1 2.7 10.9 2.4 13.6 1.4m39.3-18.6c.3 3.5 1.1 11.2-.6 14.6-1.1 2.1-2.2 2.3-3.2 3M61.7 130c-.3 3.1-.6 5.9-.9 8.5-1 8.4-2 14.4-2.6 19.6-.7 6.2-.6 11.1 1.2 17.6m47.7-20.8c0 4.2 1.9 15.4 3.3 20.8m-50.9-57.3c.7 3 1 5.5 1.2 7.9.2 3.8 0 7.3-.1 12.2m46.4 35.8c-1.2-.4-2.2-.8-3-1.1" class="cls-1"/><path d="M122.7 180.4c-2.3-.9-7.7-3-12.4-4.8-1.2-.5-2.3-.9-3.4-1.3m-30.5 24.9c13 3.2 24 4.3 35.6 5.4 1.5.1 3.1.3 4.6.4m-45.5-7.5q1.05.45 2.7.9c.8.2 1.7.5 2.7.7m41.4 29.4c.4-8.7-2.8-11.4-6-22.8m-35.2-.1c6.2 12.1 16.3 21.2 17.7 25m-20.7-32.2c.8 2.5 1.9 4.9 3 7.2m41.2 22.9c-1.3 10.9-2.3 14.9-5 25.1-2.9 10.6-5.8 21.3-9.6 31.4m-8.9-54.3c1.7 3.3 2 6.1 1.5 9.8-.5 3.6-1.8 7.6-3 11-3.3 9.9-2.6 26.7-2.3 37.5v.8M59.7 172.4c0 1.2-.1 2.3-.1 3.3 0 12.5 6.6 19.3 11.5 21.8m51.6-17.1c9.3 3.8 8.6 2.3 20.3 9.4M116.9 205c7.4.3 8.8-1.9 19.7.2m-20.1-.2h.4m19.8.1c12.4 11.3 15.1 3 35.7 11.6m9.5-12.3c-15.3-5.6-23.6-8.9-38.9-14.5m38.8 13.8s0 0 0 0c0 .1.3.6 1.2.5" class="cls-1"/><path d="M172.5 216.4c1 4 11.2-6.9 10.5-8.3-.7-1.3-1.1-2.3-1.2-3.8v-.6" class="cls-1"/><path d="M177.5 228.9c1.1.5 2.4.1 3.6-.3 10-3.4 20-6.9 29.4-11.9 3.1-1.6 6.2-3.6 7.9-6.5 1.7-3 1.1-7.2-1.9-8.5-1.4-.6-3.1-.5-4.7-.3-8.8.8-19.8 2-28.8 2.8h0c-.4 0-.7 0-1.1.1" class="cls-1"/><path d="M172.5 216.4v.3c.8 3.8 2 7.4 3.7 10.9.2.5.5 1 .9 1.4.2.3.5.5.8.6m-69.1-54.9c-.7-.1-1.2-.2-1.8-.4q0 0 0 0c-3-.8-5.1-2.2-9.4-3.5-1.4-.5-3.1-.9-5.1-1.4-17-3.7-31.3-7.1-32.8 3" class="cls-1"/><path d="M106 123.1c.1.9 2 15.1 2.3 17.4v.3" class="cls-2"/><path d="M125 59.5c0 .7-.1 1.4-.2 2.1-.5 3.9-1.6 6.5-2.8 8.5-1.1 1.9.6 16.1-7.7 22.7 0 0-6.1 5.6-10.3 6.3-2.6.4-12.9-3.9-17.5-7.9" class="cls-1"/><path d="M113.1 79.3c.4 2.4 0 6-8.4 2.2m6.4 5.8c-5.1-.5-8.3-1-12.9-4.1" class="cls-1"/><path d="M111.1 87.3c-3.5 6.1-11.6 5.7-12.9-4.1" class="cls-1"/><path d="M76.4 126.9c9.7 2.8 15.9-.6 19.6-4.2 2.8-2.8 4.1-5.7 4.2-6.1.2-.6.6-1.2.9-1.7 2.1-3 5.9-5.2 9.2-7.2h.1c2.4-1.5 4.5-2.8 5.3-4.3 5.4-9.5 9.8-15.4 11.8-26.1 2.7-13.8 1.3-26.9-1.1-31.3-3.2-5.9-5.3-6.5-11-10.2-14-9.2-33.4-4.8-42.4 6.8-2.8 3.6-5.1 7.6-6.9 11.8-5.5 13-6.2 27.5-6.4 41.7 0 1-.6 4.1 0 4.8.7.8 1.6.7 2.2 1.5l.2.3c1.8 2.4 2.4 5.7 3 9.2.2 1.3.5 2.6.7 3.9 1.1 5.4 3.1 10.3 10.3 11.4" class="cls-1"/><path d="M59.9 100.7c-6.1 3.6-11.2 11.2-13.5 14M125 59.5c-2.1-16.1-14-17.7-21.3-16.1-3.7.8-13.5 2.8-17.6 14.7 0 .2-.1.4-.2.5-2.5 7.7-5.1 27.8.7 32.5m8.2 49.2c0 .3-1.1.6-2.3 1-1.2.3-2.4.6-2.7.7-1.6.4-2.1.4-2.2 1.8v.6c-.2 3.2-.2 6.5-.2 9.8v2.5c1.8.2 3.7.3 5.5.5.8 0 1.6.1 2.4.2v-2.1c0-4.2 0-8.5-.3-12.7 0-.7 0-1.4-.1-2.1h0m-70.1 7.1h-.2c-2.9.4-3.5 2.8-3.8 5.6 0 .5 0 1.1.2 1.5.3.4.9.6 1.4.7.2 0 .4 0 .6.1 2.6.6 5.2.8 7.9.9h1.9c.8 0 1.7-.1 2.4-.6 1-.7 1.3-2.1 1.4-3.4.1-.9.2-1.9-.3-2.7-.2-.3-.5-.6-.9-.8-.2-.1-.5-.3-.8-.4-3.2-1.3-6.6-1.5-10-1Zm41.3-32.1s0 0 0 0c-2.2 5.7-3.2 8.5-4.4 14.5m-3.4-2.8c-7.1 21.5-9 52.4-6.3 74.9 4.1.3 21.2 5.7 24.7 3.6h0" class="cls-1"/><path d="M93.3 133.4c-.4 2.6-.7 5.2-.8 7.8m3.5-18.5c-1.2 3.5-2.1 7.1-2.7 10.7m-.5 24c.6 4.7 2.3 9.3 4.8 13.4l.2.3m12.4-63.5s0 0 0 0c1.9 1.6 3.1 3.9 3.3 6.4-3.7-.3-7.4.2-10.8 1.5 1.3 1.3 2.8 3.1 2.2 4.8-.3.8-.9 1.4-1.5 1.9-3.5 3.3-6.9 6.2-10.1 11.2h0m-31-30.9c-1.4.1-2.7.7-3.7 1.7 2.2 1.2 4.7 6.4 4.9 7.8v.3c-.3.8-5 2.8-5.2 3.1 0 0 .2 1.1 1.2 3m61.4-51.2c.2-2.6-3.4-3.1-5.2-2M105 61.3s0 0 0 0c-1.8-1.9-5.2-2.5-9-.3m19 12.2c-.4 1.6 0 3 .9 3.1.9.2 1.9-.9 2.2-2.5.4-1.6 0-3-.9-3.1-.9-.2-1.9.9-2.2 2.5m-17.1-4c-.3 1.5.1 2.9 1 3.1s1.9-.9 2.3-2.4c.3-1.5-.1-2.9-1-3-.9-.2-1.9.9-2.3 2.4Z" class="cls-1"/><path d="M105 61.2s0 0 0 0c0 .3.1.7 0 1 0 .3-.4.7-.8.8-.7.2-1.4-.2-2-.5-1.8-.9-4-1.3-6.1-1.1h-.9c.1-.1.2-.3.4-.4m19.9 4.2c-.5.2-.4.9 0 1.2.5.3 1.2.4 1.9.5.7 0 1.3 0 1.9.3.4.1.7.4 1.1.4s.9-.2.7-.5M90.6 289.7s0 0 0 0c1.1 2.5 4.7 4 7.2 2.7 1.5-.8 2.4-2.3 3.2-3.7.7-1.3 1.3-2.6 2.3-3.6.1-.1.3-.3.5-.4 1.3-1 2.6-1.2 3.8 0" class="cls-1"/><path d="M88.9 289c-1.7 3.9-2.8 8-3.5 12.2-.1 1-.2 2 .2 2.8.7 1.2 2.2 1.6 3.6 2 11.5 3 20.6 6 32.6 7.2 3.9.4 8.1.5 11.5-1.2s5.6-6 3.6-9.1c-1-1.5-2.6-2.4-4.2-3.2-9.2-5-15.9-9.9-25.1-14.9M58.3 158.1c-3.4 13.8-5.2 30.6-6.3 44" class="cls-1"/><path d="M85.7 58.9s.1-.2.2-.3c5.1-5.6 17.1-8.2 24.5-6.9 4.6.8 14.7 5.1 14.4 9.8v.5" class="cls-2"/></svg>')}`;
export default image;