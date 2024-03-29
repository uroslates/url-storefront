// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  storeName: 'url-storefront',
  spree: {
    // Local api app proxy
    host: '//localhost:3333',
    imagePrefix: 'https://demo.spreecommerce.org',
    noImagePlaceholder: './assets/images/product-placeholder-1.jpeg',
    isUseApiMock: false,
    // host: 'https://demo.spreecommerce.org',
    // Mocked server
    // host: 'https://stoplight.io/mocks/spark-solutions/api-v2/3124958'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
