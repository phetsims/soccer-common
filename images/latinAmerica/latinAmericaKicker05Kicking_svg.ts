/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="latinAmerica" width="235" height="321.9" viewBox="0 0 235 321.9"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-4{fill:#4e7495}.cls-5{fill:#241b1b}.cls-6{fill:#bc8c75}.cls-7{fill:#64a9d2}.cls-8{fill:#fff}.cls-9{fill:#ecc95a}</style></defs><path d="M216.7 209c2.7 1.1 3.1 4.8 1.7 7.4-1.5 2.6-4.2 4.3-6.9 5.7-8.2 4.3-16.9 7.3-25.7 10.3-1 .4-2.2.7-3.2.2h-.4c-.3-5.4 3.7-16 7.2-21.7 8-.7 15.1-1.6 23.1-2.3 1.4-.1 2.9-.2 4.1.3Z" class="cls-8"/><path d="M68.2 181.3c0-1.3 0-2.7.1-4.1.3-2 1.2-3.5 2.4-4.6 1.1-.9 2.6-1.5 4.4-1.8 2-.3 4.4-.3 7.1 0 2.5.2 5.4.7 8.3 1.3 2.6.5 5.3 1.1 8.1 1.7.7.2 1.4.3 2.2.5 3.3.7 5.7 1.5 7.5 2.2 2.9 1.1 4.8 2.1 7.3 2.8.3 0 .7.2 1 .2 4.2 1.3 9.7 3 12.5 4.3 1.3.6 62.9 24 62.6 24.3-.7.6-1.5 1.7-2.4 3.1-3.5 5.7-7.5 16.3-7.2 21.6 0 .3-55.9-22.2-57.8-22.4-.4 0-.9-.1-1.5-.2-8.7-1.1-29.2-4.6-38.1-6.4-2.3-.6-4.1-1.1-5.3-1.6-4.8-2.4-11.1-8.9-11.4-20.8Z" class="cls-4"/><path d="M140.2 61.9c3.2 14.8-5.3 30.6-14.6 40.3-1.1 1.5-5.4 5.1-9.3 6.9-1.9.8-2.1.7-3.7-.6 4.1-1.1 8.4-6.1 8.4-6.1 8-8.7 7.7-14.9 8.3-17.1.7 2.7 1 5.9 1 7.3 2.5-1.7 4.8-7.3 5.8-10.2 3.1-8.8 5.1-13.4 4.2-20.4Z" class="cls-5"/><path d="M89 103.6c-.1 0-.2-.1-.3-.2-4.7-3.1-12.1-10.5-13.9-14.2-3.4-7.2-2.7-20.8-.9-28.5 1.8-7.8 8.3-16.6 14.9-20.9 6.9-4.5 11.9-4.4 20.1-4.2 5.4.1 12.5 3.5 17.6 5.4 5.1 1.8 10.4 8.8 12 14 .8 2.6 1.3 4.9 1.6 7 .9 7-1.1 11.7-4.2 20.4-1 2.8-3.3 8.5-5.8 10.2 0-1.4-.3-4.6-1-7.3-.2-.8-.5-1.6-.8-2.2q-.45-.9-1.2-1.8-1.05-1.2-2.4-2.4c-1.9-1.6-3.9-3.2-5.4-4.5-1.9-1.8-18.9-18.9-17.2-20.9-5.7 6.7-11.1 31.4-11.8 44.4-.2 2.9-.1 5.3.2 6.7-.5-.2-1-.5-1.6-.8Z" class="cls-5"/><path d="M136.1 303.3c1.9 2.2.7 5.7-1.7 7.5-2.4 1.7-5.6 2.1-8.6 2.2-9.2.4-19.1-3.2-28.2-4.2-1.1-.1-2.3-.3-3-1.1-.5-.6-.5-1.4-.5-2.2 0-3.3.2-5.6 1-8.8 11 1.2 15.8.4 24.9-1.2 4.3 2.2 8.3 4.4 12.4 5.9 1.3.5 2.7 1 3.6 2Z" class="cls-8"/><path d="M124.9 119.2c4.3 10.7 4.4 29.5 3.9 30.1v.2c0 .7-.2 1.5-.4 2.2h-.3c-3.3-4.8-9.5-7.3-15.1-6.2-.3-2.8-.9-5.3-1-10.1h-.1c.2-4.7.4-9.3.6-13.9v-.5c0-.6 0-1.1-.2-1.7-.4-.9-1.2-1.5-2.1-1.9-.9-.3-1.9-.4-2.9-.5l-.5-.2c2.6-2.4 5-4.9 7-5.5 4 2 9.7 4.9 11 8Z" class="cls-7"/><path d="m105.5 92.7-.2.3c-1.6 8.3 9.5 13.1 12.4 4.9-4.8-.5-8-2.4-12.2-5.1Zm7.1 15.8c-.2 0-.4 0-.6.1h-.9c-3.5 0-12.5-2.4-20.7-10.9.8-13 6.1-37.7 11.8-44.4-1.7 2 15.3 19.1 17.2 20.9 1.5 1.4 3.6 2.9 5.4 4.5-.4.4-.7 1.1-.9 1.8-.4 1.5 0 3 1 3.1.9.2 1.9-.9 2.3-2.5q.75.9 1.2 1.8c.3.6.6 1.4.8 2.2-.6 2.3-.3 8.5-8.3 17.1 0 0-4.3 5.1-8.4 6.1Zm.5-38.1c.1-.4.1-1.5.2-1.9-1.3-1.9-5.1-2.6-9.1-1.5-.5 1-.8 2-.4 3.1 3.1-.6 6.3-.5 9.3.4Zm-3.3 6.9c.4-1.5-.1-2.8-1-3s-2 .9-2.3 2.4c-.4 1.5.1 2.9 1 3.1s2-.9 2.3-2.4Z" class="cls-6"/><path d="M114.4 159.9c-1.1.2-2.2.3-3.2.4-2.1.1-4.2 0-6.3-.1-2.6-.2-5.3-.6-8.3-1.1-1.6-.2-3.4-.5-5.3-.7v-.2c-1.2-3.1-.1-6.9 2.5-9 .2 0 .4 0 .5-.1 1-.2 1.8-.4 2.5-.5 4-.7 5.5-.5 8.7-1 1.8-.3 4.1-.8 7.6-1.7v-.3c5.7-1.1 11.8 1.4 15.1 6.2h.3c-.2.9-.5 1.7-.8 2.4-1.1 2.1-2.2 2.3-3.2 2.9-3.8 1.5-7.1 2.4-10.1 2.9Z" class="cls-9"/><path d="M95.1 296.6c-.4 0-.7 0-1.1-.1-.5-1.4 7-63.5 5.9-66.4-2.5-6.6-9.5-18.8-15-26.4 8.9 1.8 29.4 5.3 38.1 6.4 2.7 9.8 4.5 12.2 4.4 19.8 0 1.2-5.8 64.1-5.8 65.3-.5 0-1 .2-1.5.3-9.1 1.6-13.9 2.4-24.9 1.2Z" class="cls-4"/><path d="M127.2 81.3c-.4 1.6-1.4 2.7-2.3 2.5s-1.3-1.6-1-3.1c.2-.7.5-1.4.9-1.8q1.35 1.2 2.4 2.4" class="cls-3"/><path d="M115.7 179.1v.1c-2.5-.6-4.4-1.6-7.3-2.8-2.7-5-3.9-10.7-3.6-16.3 2.1.2 4.2.3 6.3.1-.3 8.2 2.7 13.1 4.1 16.4h.3c0 .9.1 1.7.2 2.5" class="cls-7"/><path d="M115.6 176.6h-.3c-1.4-3.2-4.4-8.2-4.1-16.4 1 0 2.1-.2 3.2-.4-.7 2.6.7 11.2 1.2 16.7ZM103.9 119c-.9.6-1.9 1.2-2.9 1.5-1.4.4-3.7.5-5.8.3-1.1-.1-2.2-.3-2.9-.5-1.1-.4-2.2-.9-3.2-1.6-1.9-1.3-3.4-3.2-4.3-5.3v-.1c-.6-1.5-1-3.1-1-4.6 0-1.8.4-3.6 1.5-5.3 1.2-.1 2.3 0 3.4.1.1 0 .2.1.3.2-3 8.2 3.5 16.3 12.7 12.7 3.2-2 7.4-5.6 9.7-6.3q1.05.45 2.4 1.2c-2 .6-4.4 3.1-7 5.5-.9.8-1.9 1.6-2.9 2.3Z" class="cls-9"/><path d="M113.4 68.5c-.1.4-.1 1.5-.2 1.9-3-.9-6.2-1-9.3-.4-.4-1-.1-2.1.4-3.1 4-1.1 7.8-.4 9.1 1.5Z" class="cls-5"/><path d="M113 145.5v.3c-3.5 1-5.8 1.4-7.6 1.7.7-9.2 2.9-18.2 6.4-26.6h.6v.6l-.6 13.8h.1c0 4.9.6 7.4 1 10.2Z" class="cls-7"/><path d="M117.7 97.9c-2.8 8.2-14 3.5-12.4-4.9l.2-.3c4.2 2.8 7.4 4.6 12.2 5.1Z" class="cls-8"/><path d="M112.3 119.3c.2.5.3 1.1.2 1.7h-.6c-3.5 8.4-5.7 17.3-6.4 26.4-3.1.6-4.7.4-8.7 1.1 1.4-10.1 3.7-19.9 7.1-29.5 1-.7 2-1.5 2.9-2.3l.5.2c1 0 1.9.2 2.9.5.9.3 1.7 1 2.1 1.9" class="cls-9"/><path d="M111.3 109.9h.1c-2.3.8-6.5 4.4-9.7 6.4-9.2 3.6-15.7-4.5-12.7-12.7.6.4 1.1.6 1.6.8-.4-1.4-.4-3.7-.2-6.7 8.2 8.5 17.2 10.9 20.7 10.9 0 .3-.1.6-.2.8l.4.4Z" class="cls-6"/><path d="M108.7 74.3c.9.2 1.4 1.5 1 3s-1.4 2.6-2.3 2.4-1.4-1.5-1-3.1c.4-1.5 1.4-2.5 2.3-2.4Z" class="cls-3"/><path d="M108.5 176.3c-1.9-.6-4.3-1.4-7.5-2.1-.7-.2-1.4-.3-2.2-.5v-.2c-1.6-4.5-1.9-9.3-2.2-14.2v-.3c3.1.4 5.8.8 8.4 1.1-.3 5.6.9 11.3 3.6 16.2Z" class="cls-9"/><path d="M101 120.5c1-.3 2-.9 2.9-1.5-3.3 9.7-5.7 19.4-7.1 29.5-.7.1-1.6.3-2.5.5 0-1.6-2.2-3.5-4.9-5l.2-.4c1-7.7 2.4-15.4 5.6-22.5v-.3c2.1.2 4.4.1 5.8-.3m-2.2 53v.2c-2.9-.6-5.6-1.2-8.1-1.7v-.2c-1.7-4.1-2.6-9.2-1.9-13.6.2 0 .3-.1.4-.2.7 0 1.4.2 2.1.2 1.9.2 3.6.5 5.3.7v.3c.3 4.8.6 9.6 2.2 14.2Z" class="cls-7"/><path d="M95.2 120.8v.3c-3.2 7.1-4.6 14.8-5.6 22.5l-.2.4c-2-1.2-4.3-2.1-6-2.3v-.4c1.1-7.5 2.9-15 5.4-22.2l.3-.4c1 .7 2 1.2 3.2 1.6.7.3 1.8.4 2.9.5" class="cls-9"/><path d="M93.8 149.1c-2.6 2.1-3.6 5.9-2.5 9v.2c-.7 0-1.4-.2-2.1-.2-.1 0-.3 0-.4.1-1.7.4-4.9.7-7.7.5-2.6-.2-4.8-.8-5.3-2-.1-.3-.1-.7-.1-1.3.2-3.7 3.3-12.4 5.9-13.6.5-.2 1.1-.3 1.9-.1 1.7.2 4 1.2 6 2.3 2.6 1.5 4.8 3.4 4.9 4.8-.2.2-.3.2-.5.2Z" class="cls-6"/><path d="M90.7 171.9v.2c-3-.6-5.8-1-8.4-1.3v-.4c-1.2-3.6-1.7-7.4-1.4-11.2v-.5c2.9.2 6.1 0 7.8-.5-.7 4.5.2 9.5 1.9 13.6Z" class="cls-9"/><path d="m89.2 118.6-.3.4q-3.9 10.8-5.4 22.2v.4c-.9-.1-1.5 0-2 .1-2.6 1.2-5.7 9.9-5.9 13.6H74c.4-14.2 4.7-28.7 10.5-41.9l.4-.2c.9 2.1 2.4 4 4.3 5.3Zm-42.4 11.2c0-.4-.1-.8 0-1 .1-1 13.1-15.4 13.9-16.1 4.2-3.8 7.3-6.9 12.8-8 1.5-.3 6.8-1.5 11.9-1.5-1.1 1.7-1.5 3.5-1.5 5.4h-.4c-.7-.1-1.3-.2-2-.1-2.6.2-5.1 1.9-6.7 4.1-1.9 2.7-3.1 6.1-3.8 9.4-.9 2.9-1.7 5.9-2 8.2h-.4c-4.8 4.4-11.4 8-13.9 9.8-.3-.2-.7-.4-1-.6-4.2-2.7-6.3-7.2-6.7-9.5Z" class="cls-7"/><path d="M84.7 113.2v.1l-.4.2c-5.8 13.2-10 27.7-10.5 41.9-.2 5.1.2 10.2 1.1 15.2v.3c-1.7.3-3.2.9-4.4 1.8-2.9-13.7-.7-27.4 2-41 1.6-8.1 3.5-16.5 8.8-22.8v-.4c.7 0 1.3 0 2 .2h.4c0 1.5.4 3.1 1 4.6Z" class="cls-9"/><path d="M82.3 170.4v.4q-4.05-.45-7.2 0v-.3c-1-5-1.3-10.1-1.2-15.2h1.6c0 .6 0 1 .1 1.3.5 1.2 2.7 1.8 5.3 2v.5c-.4 3.8 0 7.6 1.4 11.2Zm-11.4-48.5c.8-3.2 1.9-6.7 3.8-9.4 1.6-2.2 4.1-3.9 6.7-4.1v.4c-5.3 6.3-7.2 14.7-8.8 22.8-2.6 13.6-4.8 27.3-2 40.9-1.3 1.2-2.1 2.6-2.4 4.7-.1 1.4-.2 2.8-.1 4.1-3.5-13-1.8-24.9.4-49.6 0-.5.1-1 .2-1.6.4-2.3 1.1-5.3 2-8.2Z" class="cls-7"/><path d="m53.5 139.3-.5.3c-4.9 8.9-10.4 16.4-14.1 23.9h-.2c-2.6-.9-6.1-.1-8.1 1.8h-.1c2.8-12.4 8.8-31.4 16.4-35.4.4 2.2 2.5 6.8 6.7 9.5Z" class="cls-9"/><path d="M39 163.5c2.4.9 4.7 9.7 3.1 11.7-1.7 2.1-11.6 3-13.3 1.9-2-1.3.2-9.2 1.5-11.2 0-.2 0-.4.1-.6h.1c2-1.9 5.5-2.7 8.1-1.9h.2v.2Z" class="cls-6"/><path d="M68.4 130c-4.8 4.4-11.4 8-13.9 9.9-.3-.2-.7-.4-1-.6-4.2-2.7-6.3-7.2-6.7-9.5 0-.4-.1-.8 0-1 .1-1 13.1-15.4 13.9-16.1 4.2-3.8 7.3-6.9 12.8-8 1.5-.3 6.8-1.5 11.9-1.5 1.2 0 2.3 0 3.4.2h.3" class="cls-1"/><path d="M47 129.7s-.1 0-.2.1c-7.5 4.1-13.6 23-16.4 35.4 0 .2 0 .4-.1.6M53 139.6c-4.9 8.9-10.4 16.4-14.1 23.9m0 0s0 0 0 0c2.4.9 4.7 9.7 3.1 11.7-1.7 2.1-11.6 3-13.3 1.9-2-1.3.2-9.2 1.5-11.2m98.6-16.6c.5-.5.4-19.3-3.9-30.1-1.3-3.2-7-6.1-11-8.1-.9-.5-1.8-.9-2.4-1.3h-.1m.6 25.6c0 4.8.6 7.3 1 10.1v.3m11.4 11.2c-3.8 1.5-7.1 2.4-10.1 2.9-1.1.2-2.2.3-3.2.4-2.1.1-4.2 0-6.3-.1-2.6-.2-5.3-.6-8.3-1.1-1.6-.2-3.4-.5-5.3-.7-.7 0-1.4-.2-2.1-.2" class="cls-1"/><path d="M113.5 145.7c-.2 0-.3 0-.5.1-3.5.9-5.8 1.4-7.6 1.7-3.1.5-4.7.3-8.7 1-.7.1-1.6.3-2.5.5-.2 0-.3 0-.5.1h-.2" class="cls-1"/><path d="M94.3 148.8c0-1.4-2.2-3.3-4.9-4.8-2-1.2-4.3-2.1-6-2.3-.8-.1-1.5 0-1.9.1-2.6 1.2-5.7 9.9-5.9 13.6 0 .6 0 1 .1 1.3.5 1.2 2.7 1.8 5.3 2 2.8.2 6.1 0 7.7-.5h0c.2 0 .3 0 .4-.1m39.7-8.6c0 .7-.2 1.5-.4 2.2-.2.9-.5 1.7-.8 2.4-1.1 2.1-2.2 2.3-3.2 2.9m-55.8-25.3c-2.2 24.7-3.8 36.6-.4 49.6 0 .3.2.6.3.9m45.9-22.4s0 0 0 0c-.7 2.6.7 11.2 1.2 16.7 0 .9.1 1.8.2 2.5v.1" class="cls-1"/><path d="M123 210.1c.5 0 1 .1 1.5.2 1.9.2 57.8 22.7 57.8 22.4-.3-5.3 3.7-15.9 7.2-21.6.8-1.4 1.6-2.4 2.4-3.1.3-.3-61.2-23.7-62.6-24.3-2.8-1.3-8.3-3-12.5-4.3-.4-.1-.7-.2-1-.3-1.4-.4-2.6-.8-3.4-1.1m-27.5 25.7c8.9 1.8 29.4 5.3 38.1 6.4m-43.4-8c1.2.5 3 1 5.3 1.6" class="cls-1"/><path d="M84.9 203.7c5.5 7.5 12.5 19.7 15 26.4 1.1 2.9-6.4 65-5.9 66.4.4 0 .8 0 1.1.1 11 1.2 15.8.4 24.9-1.2.5 0 1-.2 1.5-.3 0-1.2 5.8-64.1 5.8-65.3 0-7.6-1.7-10-4.4-19.8h0m-54.6-32.9c-.1 1.4-.2 2.8-.1 4.1.3 11.9 6.7 18.4 11.4 20.8m103 30.7c.9.5 2.1.1 3.2-.2 8.7-3 17.5-6 25.7-10.3 2.7-1.4 5.4-3.1 6.9-5.7 1.4-2.6 1-6.3-1.7-7.4-1.2-.5-2.7-.4-4.1-.3-8 .7-15.1 1.6-23.1 2.3m-72.4-31.6h-.4c-.4 0-.7-.1-1-.2-2.5-.6-4.4-1.6-7.3-2.8-1.9-.7-4.3-1.5-7.5-2.2-.7-.2-1.4-.3-2.2-.5-2.8-.6-5.5-1.2-8.1-1.7-3-.6-5.8-1-8.3-1.3-2.7-.3-5.1-.3-7.1 0-1.8.3-3.3.9-4.4 1.8-1.3 1-2.1 2.5-2.4 4.6" class="cls-1"/><path d="M68.6 132.4v-.7c0-.5.1-1 .2-1.6.4-2.3 1.1-5.3 2-8.2" class="cls-2"/><path d="M95.1 296.6c-.8 3.2-1 5.6-1 8.9 0 .8 0 1.6.5 2.2.6.8 1.9 1 3 1.1 9.1 1 19 4.7 28.2 4.2 3-.1 6.2-.5 8.6-2.2s3.6-5.3 1.7-7.5c-.9-1-2.3-1.5-3.6-2-4.1-1.5-8.1-3.6-12.4-5.9M111.4 110c-2.3.8-6.5 4.3-9.7 6.3-9.2 3.6-15.7-4.5-12.7-12.7q0 0 0 0m23.9 41.9h.1c5.7-1.1 11.8 1.4 15.1 6.2" class="cls-1"/><path d="M38.7 163.4c-2.6-.8-6.1 0-8.1 1.9m63.2-16.2c-2.6 2.1-3.6 5.9-2.5 9" class="cls-2"/><path d="M85.3 103.3c-1.1 1.6-1.5 3.4-1.5 5.3 0 1.5.4 3.1 1 4.6v.1c.9 2.1 2.4 4 4.3 5.3 1 .7 2 1.2 3.2 1.6.7.3 1.8.4 2.9.5 2.1.2 4.4.1 5.8-.3 1-.3 2-.9 2.9-1.5 1-.7 2-1.5 2.9-2.3 2.6-2.4 5-4.9 7-5.5m-6.5 5.8c1 0 1.9.2 2.9.5.9.3 1.7 1 2.1 1.9.2.5.3 1.1.2 1.7v.5l-.6 13.8m-28.5-26.7c-.7-.2-1.3-.2-2-.2-2.6.2-5.1 1.9-6.7 4.1-1.9 2.7-3.1 6.1-3.8 9.4v.2m17.9-3q-3.9 10.8-5.4 22.2m11.8-20.2c-3.1 7.1-4.5 14.8-5.6 22.5m-8.7 15.6c-.4 3.8.1 7.6 1.4 11.2m6.4-12.1c-.7 4.4.2 9.5 1.9 13.6m-6.1-58.4c-5.8 13.2-10 27.7-10.5 41.9-.2 5.1.2 10.2 1.1 15.2m28.8-51.7s0 0 0 0c-3.3 9.7-5.7 19.4-7.1 29.5q0 0 0 0m-.3 10.9c.3 4.8.6 9.6 2.3 14.2" class="cls-1"/><path d="M81.4 108.8c-5.3 6.3-7.2 14.7-8.8 22.8-2.6 13.6-4.8 27.3-2 40.9m41.3-51.6c-3.5 8.4-5.7 17.4-6.4 26.4m-.6 12.8c-.3 5.6.9 11.3 3.6 16.3m2.7-16.2c-.3 8.2 2.7 13.1 4.1 16.4m-3.4-67.9h-.9c-3.5 0-12.5-2.4-20.7-10.9l-.4-.4m39.4-12.3v.1c-.6 2.3-.3 8.5-8.3 17.1 0 0-4.3 5.1-8.4 6.1-.2 0-.4 0-.6.1m1.4-40c-1.3-1.9-5.1-2.6-9.1-1.5-.5 1-.8 2-.4 3.1 3.1-.6 6.3-.5 9.3.4.1-.4.1-1.5.2-1.9Zm8 21.8c-1 2.7-6.8 3.2-8.1 1.6m11.9-13.5c-.2.1-.3.3-.5.4-.4.4-.7 1.1-.9 1.8-.4 1.5 0 3 1 3.1.9.2 1.9-.9 2.3-2.5m-20.7-4.6c-.4 1.5.1 2.9 1 3.1s2-.9 2.3-2.4c.4-1.5-.1-2.8-1-3s-2 .9-2.3 2.4Zm11.3 21.3c-4.8-.5-8-2.4-12.2-5.1l-.9-.6" class="cls-1"/><path d="M117.7 97.9c-2.8 8.2-14 3.5-12.4-4.9" class="cls-1"/><path d="M88.7 103.4c-4.7-3.1-12.1-10.5-13.9-14.2-3.4-7.2-2.7-20.8-.9-28.5 1.8-7.8 8.3-16.6 14.9-20.9 6.9-4.5 11.9-4.4 20.1-4.2 5.4.1 12.5 3.5 17.6 5.4 5.1 1.8 10.4 8.8 12 14 .8 2.6 1.3 4.9 1.6 7 .9 7-1.1 11.7-4.2 20.4-1 2.8-3.3 8.5-5.8 10.2 0-1.4-.3-4.6-1-7.3-.2-.8-.5-1.6-.8-2.2q-.45-.9-1.2-1.8-1.05-1.2-2.4-2.4c-1.9-1.6-3.9-3.2-5.4-4.5-1.9-1.8-18.9-18.9-17.2-20.9-5.7 6.7-11.1 31.4-11.8 44.4-.2 2.9-.1 5.3.2 6.7-.5-.2-1-.5-1.6-.8-.1 0-.2-.1-.3-.2Z" class="cls-1"/><path d="M112.6 108.5c1.6 1.3 1.8 1.4 3.7.6 4-1.8 8.2-5.4 9.3-6.9 9.3-9.7 17.8-25.5 14.6-40.3m-29.3 47.6c0-.2.1-.5.2-.7" class="cls-1"/></svg>')}`;
export default image;