/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="usa" width="235" height="321.866" viewBox="0 0 235 321.866"><defs><style>.cls-1{fill:#3a6793}.cls-1,.cls-2,.cls-3,.cls-5,.cls-7{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#35221e}.cls-3{fill:#cc915a}.cls-5{fill:#bc6c29}.cls-7{fill:none}</style></defs><path d="M116.475 101.732a79 79 0 0 0-4.41-4.13c-.81-.7-1.66-1.4-2.53-2.08-5.74-4.52-12.53-8.28-18.62-7.95-.54-4.97-1.34-10.95-.94-15.86-1.74 5.22-2.11 10.12-4.13 15.02-3.07.17-5.61.09-8.18.01-1.9.76-4.56 4.93-6.42 10.21-.2-.97-1.19-1.66-2.18-1.67s-1.93.57-2.52 1.37-.87 1.79-.97 2.78c-.19 1.71.15 3.55 1.27 4.86.27.31.58.58.93.8.03 4-.62 5.7.03 9.68.27 1.66 1.41 4.45 3 6.11-4.18 0-5.28.43-8.93.47-3.68-5.35-16.37-26.05-3.57-47.6 3.6-6.05 12.79-16.43 22.71-12.44 0 0 3.11-2.78 5.95-1.88 21.94 4.82 33.93 23.7 29.51 42.3m-50.37 68.92c-.17.31 4.17-31.61-2.45-44.16-.38-.74-.81-1.42-1.28-2.01.62.83 7.82-.66 8.64-.92a26.9 26.9 0 0 1 3.76 9.06c2.88 13.14-3.35 27.93-8.67 38.03" class="cls-2"/><path d="M109.025 234.122c-9.01 2.53-12.95 8.28-19.74 12.63-2.36-3.96-12.49-17.41-14.88-21.44-1.91 6.51-3.72 13.09-7.6 21.86-.26-.04-.51-.07-.75-.11-9.66-1.45-8.57-2.94-18.75-4.39 0-.15 0-.3-.01-.46.87-15.44-3.55-24.43 2.44-42.23l.04-.14c15.1 4.52 26.29 6.82 42.13 5.23 8.24 8.11 12.61 18.41 17.12 29.05" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#636567"/><path d="M83.255 64.532c-8.28 4.28-11.78 16.22-10.73 22.13 1.82-.02 3.49.03 5.14.08" class="cls-7"/><path d="M90.915 87.572c-.54-4.97-1.34-10.95-.94-15.86-1.74 5.22-2.11 10.12-4.13 15.02-3.07.17-5.61.09-8.18.01-1.9.76-4.56 4.93-6.42 10.21-.2-.97-1.19-1.66-2.18-1.67s-1.93.57-2.52 1.37-.87 1.79-.97 2.78c-.19 1.71.15 3.55 1.27 4.86.27.31.58.58.93.8.03 4-.62 5.7.03 9.68.27 1.66 1.41 4.45 3 6.11h.47c.77.4.56 2.42-.26 2.68a26.9 26.9 0 0 1 3.76 9.06c1.32.62 1.9.93 2.56 1.11 2.18.59 4.75.2 6.3-1.45 1.1-1.18.26-2.88-.08-4.85v-.01c-.15-.79-.21-1.61-.04-2.47l.13-.24c3.61 1.88 6.84 3.12 7.75 2.97 3.48-.58 8.55-5.51 8.55-5.51 3.44-2.92 4.91-7.44 5.58-11.46s.55-7.55.81-8.48c.62-2.21 1.5-2.78 3.2-6.71-5.74-4.52-12.53-8.28-18.62-7.95m-4.72 13.85c.28-1.31 1.13-2.23 1.89-2.07.76.17 1.14 1.36.85 2.68s-1.14 2.24-1.89 2.08c-.76-.17-1.14-1.36-.85-2.69m.94 11.6.16-.23c3.42 2.44 6.02 4.07 9.94 4.51-2.32 7.25-10.19 6.85-10.1-4.28m15.96-7.51c-.29 1.36-1.13 2.34-1.86 2.18-.74-.16-1.08-1.4-.78-2.76s1.13-2.33 1.86-2.17 1.08 1.39.78 2.75" class="cls-3"/><path d="M97.235 117.302c-2.32 7.25-10.19 6.85-10.1-4.28l.16-.23c3.42 2.44 6.02 4.07 9.94 4.51" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M83.645 124.712c-4.94-2.57-10.61-6.34-12.07-9.37m37.96-19.82v-.01m-5.589 3.792c-.135-2.24-2.212-2.218-3.102-1.021m-10.937-3.784c-1.084-1.694-3.177-2.228-5.471-.298m12.712 13.446c.299 2.074.429 3.421 2.802 3.07-1.043 1.992-1.729 2.256-3.684 2.837" class="cls-7"/><path d="M103.095 105.512c-.29 1.36-1.13 2.34-1.86 2.18-.74-.16-1.08-1.4-.78-2.76s1.13-2.33 1.86-2.17 1.08 1.39.78 2.75m-14.16-3.48c-.29 1.32-1.14 2.24-1.89 2.08-.76-.17-1.14-1.36-.85-2.69.28-1.31 1.13-2.23 1.89-2.07.76.17 1.14 1.36.85 2.68" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M87.295 112.792c-.26-.18-.52-.37-.79-.56" class="cls-7"/><path d="M56.545 152.342c-.48-.54-1.06-1.04-1.72-1.53-3.83-2.81-10.15-4.73-12.37-5.96-.44-.24-.72-.45-.79-.64-.32-.89-.03-1.87.3-2.76 2.35-6.39 7.4-11.16 13.95-13.37 1.05-.2 1.89-.35 2.57-.49h.01c2.2 0 3.53 1.39 4.56 4.01 1.74 4.42-3.37 17.22-6.51 20.74" class="cls-1"/><path d="M58.485 127.592c-.68.14-1.52.29-2.57.49.97-.33 1.83-.49 2.57-.49" class="cls-7"/><path d="M95.285 157.142c-.03 2.92-.14 5.86-.32 8.8v.02c-.74 13.09-2.59 26.29-3.06 39.11-15.84 1.59-27.03-.71-42.13-5.23l-.91-.27c1.6-4.81 1.64-3.8 2.47-8.8l.07-.08c.68.6 1.4 1.22 2.14 1.87 1 1.9 6.25 7.02 8.16 6.04 1.6-.81 5.17-8.99 4.24-11.28-.86-2.12-9.01-4.19-10.59-2.53l-.07.05a57 57 0 0 1-2.8-4.38l.32-.19c1.04-10.08 2.91-22.58 1.98-28.92l.04-.54c.66.49 1.24.99 1.72 1.53 3.14-3.52 8.25-16.32 6.51-20.74-1.03-2.62-2.36-4.01-4.56-4.01 3.35-.65 2.89-.63 5.16-1.1 6.62 12.55 2.28 44.47 2.45 44.16 5.32-10.1 11.55-24.89 8.67-38.03 1.32.62 1.9.93 2.56 1.11 2.18.59 4.75.2 6.3-1.45 1.1-1.18.26-2.88-.08-4.85v-.01l.17-.02c1.66.93 3.69.83 5.36 1.92q.57.465 1.11.99l.06.06c.08.1.17.21.25.33 1.82 2.63 3.21 5.53 3.68 8.69.88 5.84 1.16 11.77 1.1 17.75" class="cls-1"/><path d="M90.195 130.312c-.34-.42-.72-.74-1.11-.99" class="cls-7"/><path d="M61.705 198.602c-1.91.98-7.16-4.14-8.16-6.04-.74-.65-1.46-1.27-2.14-1.87-7.25-6.4-11.31-10.63-15.95-20.01-2.3-4.65 2.71-19.2 6.87-25.6l.13-.23c2.22 1.23 8.54 3.15 12.37 5.96l-.04.54c-4.1 5.13-6.77 9.99-10.09 15.53 3.55 5.57 5.39 9.52 7.79 13.58a57 57 0 0 0 2.8 4.38l.07-.05c1.58-1.66 9.73.41 10.59 2.53.93 2.29-2.64 10.47-4.24 11.28" class="cls-3"/><path d="M55.595 185.292c-.11-.15-.21-.3-.31-.45" class="cls-7"/><path d="M101.475 151.102c-.92.6-1.59 1.04-2.09 1.4-1.79 1.28-1.65 1.6-4.04 4.64h-.06c.06-5.98-.22-11.91-1.1-17.75-.47-3.16-1.86-6.06-3.68-8.69-.08-.12-.17-.23-.25-.33 5.31 5.22 7.78 14.19 11.22 20.73" class="cls-1"/><path d="M118.325 178.502c-2.58.59-.49-.14-2.64 1.4-2.06 1.48-3.55 4.05-3.08 6.52l-.11.03c-2.39-6.4-16.87-15.41-17.53-20.49v-.02c.18-2.94.29-5.88.32-8.8h.06c2.39-3.04 2.25-3.36 4.04-4.64l.03.04c1.55 6.71 13.24 22.04 18.91 25.96" class="cls-3"/><path d="M94.945 165.562c0 .12 0 .25.02.38" class="cls-7"/><path d="M121.515 189.302c-2.39 1.79-3.84 2.49-6.32.82-1.19-.81-2.16-2-2.52-3.4-.03-.1-.05-.2-.07-.3-.47-2.47 1.02-5.04 3.08-6.52 2.15-1.54.06-.81 2.64-1.4 2.85-.87 6.22.74 7.43 3.47 1.22 2.73-1.85 5.53-4.24 7.33" class="cls-3"/><path d="M78.175 213.812c-1.56 4.07-2.68 7.77-3.77 11.5m-27.1 17.36c-.01-.01-.03-.01-.04-.01l.03-.45" class="cls-7"/><path d="m66.055 247.062-.11.75c-3.11 8.01-5.08 8.7-10.07 16.6-5.19 8.21-13.04 15.53-19.43 22.84l.08.08c-.06.05-.12.11-.18.17-1.01.99-8.39.33-8.47-2.09l-.48-.14c.06-.25.14-.51.22-.77 2.57-8.93 7.54-19.29 12.91-26.68 1.89-2.6 4.02-5.65 5.4-8.56 1-2.12 1.44-4.33 1.38-6.59 10.18 1.45 9.09 2.94 18.75 4.39" class="cls-3"/><path d="M27.395 285.272c-.03.08-.05.15-.07.23m19.97-43.29c-.04-.76-.13-1.53-.28-2.3m48.01 54.35v-.02c-.01-.05-.02-.16-.03-.34" class="cls-7"/><path d="M105.085 288.162c-.95 1.02-1.34 2.39-1.76 3.7s-.95 2.67-2.07 3.51c-1.91 1.44-5.02.57-6.18-1.48l-.08.01c-.01-.11-.02-.24-.03-.41v-.01c-.21-3.59-1.09-18.86-3.7-28.68-.81-3.02-1.71-9.6-1.24-12.69.41-2.64-.74-5.36-.74-5.36 6.79-4.35 10.73-10.1 19.74-12.63.25 19.62-1.38 34.59-3.94 54.04" class="cls-3"/><path d="M135.115 310.292c-2.53 1.89-5.9 2.27-9.08 2.41-9.73.42-20.23-3.6-29.89-4.77-1.16-.14-2.45-.35-3.14-1.27-.49-.66-.54-1.55-.55-2.37-.03-3.61.39-7.22 1.24-10.74l1.27-.06c.01.17.02.3.03.41l.08-.01c1.16 2.05 4.27 2.92 6.18 1.48 1.12-.84 1.65-2.2 2.07-3.51s.81-2.68 1.76-3.7c.95-1.01 1.94-1.29 3.05-.46l.1.04c8.01 3.1 16.81 9.05 24.82 12.15 1.38.54 2.83 1.12 3.79 2.23 2.03 2.38.81 6.28-1.73 8.17" class="cls-5"/><path d="M42.705 286.012c-.05-.1-.1-.19-.16-.28" class="cls-7"/><path d="M47.975 314.452c-9.08-2.76-13.74-6.05-26.99-16.71-.88-.71-1.92-1.41-2.08-2.53-.12-.81.24-1.6.61-2.33 1.63-3.18 4.83-5.94 7.16-8.65l.94.27c-.08.26-.16.52-.22.77l.48.14c.08 2.42 7.46 3.08 8.47 2.09.06-.06.12-.12.18-.17.95-.93 1.92-1.91 3.19-2.35 1.24-.43 2.22-.28 2.83.75l-.24.13c4.92 11.82 4.72 12.99 13.18 18.77 1.18.81 2.63.4 2.84 1.83 1.07 7.28-4.6 9.74-10.35 7.99" class="cls-5"/><path d="M112.065 97.602c-1.35 5.51-3.32 8.53-6.54 13.11.67-4.02.55-7.55.81-8.48.62-2.21 1.5-2.78 3.2-6.71.87.68 1.72 1.38 2.53 2.08" class="cls-2"/><path d="M105.525 110.712c-.05.07-.11.15-.16.23" class="cls-7"/><path d="M71.015 123.562c-.82.26-8.02 1.75-8.64.92s-1.34-2.52-.5-3.13c3.65-.04 4.75-.47 8.93-.47h.47c.77.4.56 2.42-.26 2.68" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#f9ce0d"/><path d="M71.575 104.922c-.03.17-.05.33-.08.5-1.17.6-2.61.38-3.72-.33" class="cls-7"/></svg>')}`;
export default image;