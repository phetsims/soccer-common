/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="africa" width="235" height="321.866" viewBox="0 0 235 321.866"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-11,.cls-3,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-6{fill:#19a4d1}.cls-7{fill:#1b2f60}.cls-8{fill:#068db3}.cls-9{fill:#1e1e1e}.cls-11{fill:#805530}</style></defs><path d="M39.362 304.15c.381-.998.639-2.161.8-3.576-1.213 4.034-7.614 4.718-10.949 5.819-6.297 2.079-24.157 3.446-23.86-2.386-1.355 1.545-.813 2.714.587 4.533 6.026 7.808 22.757 3.207 26.68 1.443 3.587-1.607 5.659-3.022 6.743-5.832Z" class="cls-7"/><path d="M5.352 304.006c-.297 5.832 17.563 4.465 23.86 2.386 3.336-1.101 9.736-1.785 10.949-5.819l-.039-.971c-8.136.301-16.356-1.45-23.66-5.149-2.091 1.306-.819.732-3.2 1.504-5.807 1.901-5.859 1.176-7.749 7.186-.09.301-.148.588-.161.862Z" class="cls-7"/><path d="M21.264 152.425c2.058-2.195 9.259-10.496 10.633-11.856-3.665-3.925-7.239-7.938-11.046-11.699-5.426 5.532-11.988 12.882-14.595 17.702-3.149 5.812-1.523 13.504 2.613 18.516a98527 98527 0 0 1 16.627 27.952c.245-.998.51-1.99.787-2.974a91 91 0 0 1 6.291-16.13c-3.994-2.749-7.736-14.085-11.311-21.511Z" class="cls-6"/><path d="m39.536 101.745-.006.007c-8.414 6.776-16.001 14.81-22.654 23.378a102 102 0 0 1 3.975 3.74c3.807 3.761 7.381 7.774 11.046 11.699 2.239 2.414 4.517 4.793 6.904 7.063 7.575 7.214 16.634 13.463 26.906 14.803 9.53 1.244 20.157-2.749 24.989-11.077.374-.636.71-1.306 1.013-1.997 1.207-2.783 1.768-5.805 2.42-8.793.561-2.605 1.187-5.19 2.368-7.555 1.484-2.995 3.8-5.559 4.846-8.738.187-.574.329-1.149.426-1.737.729-4.26-.807-8.807-3.349-12.335-2.891-4.014-6.943-6.961-10.917-9.839q-.734.738-1.516 1.415c-5.742 5.019-13.311 7.815-20.866 7.651-4.736-.103-9.44-1.368-13.646-3.597-2.245-1.183-4.149-2.714-6.149-4.26-2.826-2.181-2.903-2.14-5.788.171Z" style="stroke-width:0;fill:#028b44"/><path d="M31.31 223.74c-5.91 23.152-11.343 47.049-14.847 70.714 7.304 3.699 15.524 5.45 23.66 5.149a47.3 47.3 0 0 0 9.93-1.422c2.129-22.851 3.284-45.606 5.407-68.457l.006-.116c-12.414-.574-19.434-3.152-24.157-5.867Z" class="cls-8"/><path d="M43.653 180.514c.8-3.918-2.71-4.998-6.246-5.655-1.716-.315-3.433-.54-4.665-.937h-.006l-.045.089c-.039-.027-.077-.048-.116-.075a91 91 0 0 0-6.291 16.13h.006c.826.841 4.265 3.22 7.291 4.567 2.703 1.19 5.065 1.566 4.962-.711 1.155 0 3.691-1.415 2.316-3.214 1.387-.239 3.013-1.812 2.103-4.096 4.658-1.149 2.781-3.884.69-6.099Z" class="cls-11"/><path d="M92.283 195.508c-.316-7.405-.536-14.865-.729-21.593-.277-10.058-.497-18.461-.858-22.557-4.833 8.328-15.459 12.321-24.989 11.077-10.272-1.34-19.331-7.59-26.906-14.803.51 3.309-.303 6.297-.548 10.243-.355 5.579-.4 11.706-.761 16.513h.006l-.09.472c3.536.656 7.046 1.737 6.246 5.655 2.091 2.215 3.968 4.95-.69 6.099.91 2.284-.716 3.856-2.103 4.096 1.374 1.798-1.161 3.214-2.316 3.214.103 2.277-2.258 1.901-4.962.711l-.148.383c.839 1.662-5.439 26.577-5.439 26.577a41 41 0 0 0 3.316 2.147c4.723 2.714 11.743 5.292 24.157 5.867 2.549.116 5.323.15 8.356.082a52 52 0 0 0 5.517-.431c12.13-1.586 21.944-6.892 24.789-6.988-.871-7.665-1.439-17.162-1.845-26.762Z" class="cls-6"/><path d="M44.124 84.993c1.271 4.629 1.123 3.562 4.246 7.521 1.89 1.915 3.658 3.569 5.317 4.985 14.008 12 20.073 7.22 25.073 1.265 1.426-1.696 2.762-3.487 4.168-5.012 3.097-3.357 4.839-7.275 5.801-10.899 1.039-3.911 1.174-7.467 1.129-9.593-.032-1.272-.123-2.031-.123-2.031.968-4.554 1.065-6.003.89-10.126-1.032-4.458-6.826-15.931-19.899-15.931-12.214 0-27.725 8.861-28.119 23.808-1.69-.848-3.445.15-4.697 1.737-1.194 1.518-1.936 3.576-1.723 5.067.561 3.945 4.723 9.381 7.678 8.26.09.342.181.656.258.95Zm7.678-22.447c-.684.068-1.052-.376-.755-1.012.458-.971 1.871-2.072 4.233-2.694 1.871-.492 8.065-.615 7.188 2.352-.194.656-.852 1.19-1.6 1.306s-2.658-.376-3.407-.383c-1.987 0-3.458.212-5.659.431m4.516 9.846c0-2.311.948-4.185 2.103-4.185 1.161 0 2.103 1.873 2.103 4.185s-.942 4.198-2.103 4.198c-1.155 0-2.103-1.88-2.103-4.198m7.898 21.511c-2.02-1.381-1.929-.52-4.362-4.308 1.181 1.251 12.672 4.048 18.428 1.422-1.484 2.824-3.071 4.369-6.491 4.868-2.11.301-5.504-.568-7.575-1.983Zm14.827-30.632c-.961-.007-1.755-.93-1.729-1.846s.729-1.737 1.607-2.113c2.271-.985 4.865.123 6.517 1.655.239.212.465.451.581.745.116.287.097.643-.116.882-.232.239-.619.294-.955.226-.336-.062-5.168.458-5.904.451Zm1.226 8.84c0-2.072.794-3.754 1.768-3.754s1.761 1.682 1.761 3.754-.787 3.754-1.761 3.754-1.768-1.675-1.768-3.754" class="cls-11"/><path d="M46.627 36.344c-10.24 7.884-14.105 22.249-8.949 34.256l.232.116c1.252-1.586 3.007-2.585 4.697-1.737.394-14.947 15.905-23.808 28.119-23.808 13.072 0 18.866 11.473 19.899 15.931.174 4.123.077 5.573-.89 10.126 0 0 .09.759.123 2.031l.219-.007a62 62 0 0 0 1.103-4.472c2.407-11.603 1.058-22.789-7.381-30.516-9.549-8.745-26.938-9.798-37.171-1.921Z" class="cls-6"/><path d="M48.369 92.515c-3.123-3.959-2.974-2.892-4.246-7.521-2.787 5.108-4.368 10.899-4.588 16.752 2.884-2.311 2.962-2.352 5.788-.171 3.594-.007 5.336-2.079 8.362-4.075-1.658-1.415-3.426-3.07-5.317-4.985Z" style="stroke-width:0;fill:#1182ae"/><path d="M53.686 97.499c-3.026 1.997-4.768 4.068-8.362 4.075 2 1.545 3.904 3.077 6.149 4.26 4.207 2.229 8.911 3.494 13.646 3.597 7.556.164 15.124-2.632 20.866-7.651a26.3 26.3 0 0 1-7.226-3.015c-5 5.955-11.066 10.735-25.073-1.265Z" class="cls-6"/><path d="M51.047 61.534c-.297.636.071 1.08.755 1.012 2.2-.219 3.671-.431 5.659-.431.748.007 2.658.499 3.407.383s1.407-.65 1.6-1.306c.878-2.967-5.317-2.844-7.188-2.352-2.362.622-3.775 1.723-4.233 2.694" class="cls-9"/><path d="M58.422 68.207c-1.155 0-2.103 1.873-2.103 4.185s.948 4.198 2.103 4.198c1.161 0 2.103-1.88 2.103-4.198s-.942-4.185-2.103-4.185" class="cls-3"/><path d="M59.854 89.595c2.432 3.788 2.342 2.926 4.362 4.308 2.071 1.415 5.465 2.284 7.575 1.983 3.42-.499 5.007-2.044 6.491-4.868-5.755 2.626-17.247-.171-18.428-1.422Z" style="stroke-width:0;fill:#fff"/><path d="M84.437 295.343c8.143-1.395 17.453-3.193 18.763-5.121 2.161-3.193-5.884-44.69-9.072-67.951-2.845.096-12.659 5.402-24.789 6.988l.058.465c-.748 21.08 3.516 46.304 5.052 67.343 2.349-.458 6.033-1.039 9.988-1.723Z" class="cls-8"/><path d="M77.314 61.424c-.026.916.768 1.839 1.729 1.846.736.007 5.568-.513 5.904-.451.336.068.723.014.955-.226.213-.239.232-.595.116-.882-.116-.294-.342-.533-.581-.745-1.652-1.532-4.246-2.639-6.517-1.655-.878.376-1.581 1.197-1.607 2.113Z" class="cls-9"/><path d="M82.037 68.358c-.974 0-1.768 1.682-1.768 3.754s.794 3.754 1.768 3.754 1.761-1.675 1.761-3.754-.787-3.754-1.761-3.754" class="cls-3"/><path d="M121.299 303.698c.019-5.108-8.317-10.632-18.098-13.477-1.31 1.928-10.62 3.726-18.763 5.121.077 2.475-.961 3.884.213 6.468.168.376.361.684.587.937 1.8 2.133 5.078.397 7.743 1.456 3.478 1.388 6.781 3.289 10.343 4.622 3.381 1.265 5.652 1.867 7.523 1.791 3.329-.137 5.388-2.42 10.182-6.906v-.007l.265.007h.006v-.014Z" class="cls-7"/><path d="M85.237 302.748c-.135.636-.071 1.299.174 2.038 1.245 3.685 5.53 1.88 8.723 3.152 4.736 1.894 5.581 3.084 10.465 4.506 1.716.506 4.091.465 6.536.034l-.29-1.86c-1.871.075-4.142-.526-7.523-1.791-3.562-1.333-6.865-3.234-10.343-4.622-2.665-1.06-5.942.677-7.743-1.456Z" class="cls-7"/><path d="m88.728 82.853.523.15c.845.068 1.678-.362 2.278-.978.594-.615.987-1.409 1.31-2.209a17.8 17.8 0 0 0 1.194-8.465c-.071-.704-.2-1.436-.626-1.99-.432-.554-1.245-.855-1.839-.485l-.387-.096a63 63 0 0 1-1.103 4.472l-.219.007c.045 2.126-.09 5.682-1.129 9.593Zm3.342 91.042-.516.021c.194 6.728.413 14.188.729 21.593 1.103-.465 2.742-2.12 4.078-4.171l.555-.007c-.006-6.414-1.426-12.82-4.142-18.598-.419.595-.703 1.046-.703 1.162Z" style="stroke-width:0;fill:#774d24"/><path d="m103.2 155.126.265.191c-1.658 2.4-2.742 5.121-4.123 8.034-1.052 2.215-2.368 3.802-3.826 5.682-.613.8-1.929 2.53-2.742 3.699 2.716 5.778 4.136 12.184 4.142 18.598 0 .595-.006 1.183-.032 1.778-.019.492.077 1.156.555 1.217.342.048.619-.267.826-.547 6.788-9.347 13.414-22.078 17.518-32.943 1.665-3.597 2.007-7.398-.439-11.302-1.852-2.947-11.304-23.282-13.395-26.96l-.181-.034a12 12 0 0 1-.426 1.737c-1.045 3.179-3.362 5.744-4.846 8.738-1.181 2.366-1.807 4.95-2.368 7.555 2.284 2.762 8.575 15.46 9.072 14.557" class="cls-6"/><path d="M121.299 303.712h-.006l-.265-.007v.007c-4.794 4.485-6.852 6.769-10.182 6.906l.29 1.86c6.53-1.142 13.614-5.046 10.356-8.766v-.007l-.194-.007v.014Z" style="stroke-width:0;fill:#074e75"/><path d="m20.915 152.787-.039.028m11.86 21.107-.046.089-.019.048m4.826.328-.09.472m2.058 129.38-.103-.089-.49-.424m46.965-13.962-.096.006m14.743-168.073h-.007m2.988 33.62-.265-.191m7.936 157.352-.29-1.86m10.446-6.906-.264-.007h-.007m.471 0-.193-.007h-.007M31.31 223.74a41 41 0 0 1-3.316-2.147s6.278-24.916 5.439-26.577" class="cls-2"/><path d="M90.696 151.358c.361 4.096.581 12.499.858 22.557.194 6.728.413 14.188.729 21.593.406 9.6.974 19.097 1.845 26.762-2.845.096-12.659 5.402-24.789 6.988-1.794.232-3.639.39-5.517.431a123 123 0 0 1-8.356-.082c-12.414-.574-19.434-3.152-24.157-5.867m7.492-76.108c.51 3.309-.303 6.297-.548 10.243-.355 5.579-.4 11.706-.761 16.513" class="cls-2"/><path d="M96.361 191.337c-1.336 2.051-2.974 3.706-4.078 4.171a2 2 0 0 1-.174.068m9.839-73.004c2.091 3.679 11.543 24.013 13.395 26.96 2.445 3.904 2.103 7.706.439 11.302m-21.654-20.265c2.284 2.762 8.575 15.46 9.072 14.557a.1.1 0 0 0 .026-.048m4.633-4.137c-1.903 1.285-3.278 2.756-4.394 4.376-1.658 2.4-2.742 5.121-4.123 8.034-1.052 2.215-2.368 3.802-3.826 5.682-.613.8-1.929 2.53-2.742 3.699-.419.595-.703 1.046-.703 1.162q0 .039.039.027m-60.213-33.352c-1.374 1.361-8.575 9.661-10.633 11.856-.142.15-.258.274-.348.362m-.065-23.917c-5.426 5.532-11.988 12.882-14.595 17.702-3.149 5.812-1.523 13.504 2.613 18.516" class="cls-2"/><path d="M33.432 174.387a3.6 3.6 0 0 1-.742-.376c-.039-.027-.077-.048-.116-.075-3.994-2.749-7.736-14.085-11.311-21.511-1.497-3.118-2.962-5.545-4.407-6.352m24.468 31.986c.458.595 1.419 1.477 2.329 2.455 2.091 2.215 3.968 4.95-.69 6.099.91 2.284-.716 3.856-2.103 4.096 1.374 1.798-1.161 3.214-2.316 3.214.103 2.277-2.258 1.901-4.962.711-3.026-1.347-6.465-3.726-7.291-4.567" class="cls-2"/><path d="M32.742 173.922c1.232.397 2.949.622 4.665.937 3.536.656 7.046 1.737 6.246 5.655 0 .027-.006.048-.013.075m77.652 123.321q.007-.094.006-.198v-.014c.019-5.108-8.317-10.632-18.098-13.477m17.828 13.491c-4.794 4.485-6.852 6.769-10.182 6.906-1.871.075-4.142-.526-7.523-1.791-3.562-1.333-6.865-3.234-10.343-4.622-2.665-1.06-5.942.677-7.743-1.456a3.6 3.6 0 0 1-.587-.937c-1.174-2.585-.135-3.993-.213-6.468 0-.226-.019-.458-.045-.704m-44.23 5.934c-1.213 4.034-7.614 4.718-10.949 5.819-6.297 2.079-24.157 3.446-23.86-2.386.013-.274.071-.561.161-.862 1.89-6.01 1.942-5.285 7.749-7.186 2.381-.773 1.11-.198 3.2-1.504" class="cls-2"/><path d="M121.492 303.712c3.258 3.72-3.826 7.624-10.356 8.766-2.445.431-4.82.472-6.536-.034-4.884-1.422-5.73-2.612-10.465-4.506-3.194-1.272-7.478.533-8.723-3.152-.245-.738-.31-1.402-.174-2.038q.037-.248.123-.485m-45.199-1.689c-.161 1.415-.419 2.578-.8 3.576-1.084 2.81-3.155 4.226-6.743 5.832-3.923 1.764-20.654 6.366-26.68-1.443-1.4-1.819-1.942-2.988-.587-4.533q.263-.299.632-.629" class="cls-2"/><path d="M90.625 61.103c.174 4.123.077 5.573-.89 10.126 0 0 .09.759.123 2.031.045 2.126-.09 5.682-1.129 9.593-.961 3.624-2.703 7.542-5.801 10.899-1.407 1.525-2.742 3.316-4.168 5.012-5 5.955-11.066 10.735-25.073-1.265-1.658-1.415-3.426-3.07-5.317-4.985" class="cls-1"/><path d="M80.269 72.111c0 2.079.794 3.754 1.768 3.754s1.761-1.675 1.761-3.754-.787-3.754-1.761-3.754-1.768 1.682-1.768 3.754m-23.951.281c0 2.318.948 4.198 2.103 4.198 1.161 0 2.103-1.88 2.103-4.198s-.942-4.185-2.103-4.185c-1.155 0-2.103 1.873-2.103 4.185m20.996 9.846c-.626 5.306-5.336 3.767-9.078 3.733m10.046 5.046c-5.755 2.626-17.247-.171-18.428-1.422 2.432 3.788 2.342 2.926 4.362 4.308 2.071 1.415 5.465 2.284 7.575 1.983 3.42-.499 5.007-2.044 6.491-4.868Z" class="cls-1"/><path d="M90.625 61.103c-1.032-4.458-6.826-15.931-19.899-15.931-12.214 0-27.725 8.861-28.119 23.808-1.69-.848-3.445.15-4.697 1.737-1.194 1.518-1.936 3.576-1.723 5.067.561 3.945 4.723 9.381 7.678 8.26.09.342.181.656.258.95 1.271 4.629 1.123 3.562 4.246 7.521.116.157.252.328.387.506" class="cls-1"/><path d="M37.678 70.6c-5.155-12.007-1.29-26.372 8.949-34.256 10.233-7.877 27.622-6.824 37.171 1.921 8.439 7.726 9.788 18.913 7.381 30.516a63 63 0 0 1-1.103 4.472" class="cls-1"/><path d="M62.467 61.192c-.194.656-.852 1.19-1.6 1.306s-2.658-.376-3.407-.383c-1.987 0-3.458.212-5.659.431-.684.068-1.052-.376-.755-1.012.458-.971 1.871-2.072 4.233-2.694 1.871-.492 8.065-.615 7.188 2.352m16.454-1.88c-.878.376-1.581 1.197-1.607 2.113s.768 1.839 1.729 1.846c.736.007 5.568-.513 5.904-.451.336.068.723.014.955-.226.213-.239.232-.595.116-.882-.116-.294-.342-.533-.581-.745-1.652-1.532-4.246-2.639-6.517-1.655Zm12.646 9.565c.594-.369 1.407-.068 1.839.485.426.554.555 1.285.626 1.99a17.8 17.8 0 0 1-1.194 8.465c-.323.8-.716 1.593-1.31 2.209-.6.615-1.432 1.046-2.278.978" class="cls-1"/><path d="M31.31 223.74c-5.91 23.152-11.343 47.049-14.847 70.714 7.304 3.699 15.524 5.45 23.66 5.149a47.3 47.3 0 0 0 9.93-1.422c2.129-22.851 3.284-45.606 5.407-68.457m13.937-.001c-.748 21.08 3.516 46.304 5.052 67.343 2.349-.458 6.033-1.039 9.988-1.723 8.143-1.395 17.453-3.193 18.763-5.121 2.161-3.193-5.884-44.69-9.072-67.951M39.536 101.745l-.006.007c-8.414 6.776-16.001 14.81-22.654 23.378a102 102 0 0 1 3.975 3.74c3.807 3.761 7.381 7.774 11.046 11.699 2.239 2.414 4.517 4.793 6.904 7.063 7.575 7.214 16.634 13.463 26.906 14.803 9.53 1.244 20.157-2.749 24.989-11.077.374-.636.71-1.306 1.013-1.997 1.207-2.783 1.768-5.805 2.42-8.793.561-2.605 1.187-5.19 2.368-7.555 1.484-2.995 3.8-5.559 4.846-8.738.187-.574.329-1.149.426-1.737.729-4.26-.807-8.807-3.349-12.335-2.891-4.014-6.943-6.961-10.917-9.839q-.734.738-1.516 1.415c-5.742 5.019-13.311 7.815-20.866 7.651-4.736-.103-9.44-1.368-13.646-3.597-2.245-1.183-4.149-2.714-6.149-4.26-2.826-2.181-2.903-2.14-5.788.171Z" class="cls-2"/><path d="M46.898 122.107a106.5 106.5 0 0 0 24.286-.506c5.936-.807 12.511-2.612 15.479-7.938m-32.977 22.776c8.285 3.275 18.195 1.805 25.228-3.754M32.826 173.43c-.084.171-.174.335-.252.506a91 91 0 0 0-6.291 16.13 92 92 0 0 0-.787 2.974 98527 98527 0 0 0-16.627-27.952m83.782 7.385c.039.089.084.171.123.26 2.716 5.778 4.136 12.184 4.142 18.598 0 .595-.006 1.183-.032 1.778-.019.492.077 1.156.555 1.217.342.048.619-.267.826-.547 6.788-9.347 13.414-22.078 17.518-32.943m-70.459-59.262c3.594-.007 5.336-2.079 8.362-4.075m32.371 4.301-.071-.021a26.3 26.3 0 0 1-7.226-3.015c-.032-.021-.071-.041-.103-.062M44.253 84.754c-.045.082-.09.157-.129.239-2.787 5.108-4.368 10.899-4.588 16.752 0 .055-.006.109-.006.164" class="cls-2"/></svg>')}`;
export default image;