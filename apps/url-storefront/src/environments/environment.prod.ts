export const environment = {
  production: true,
  storeName: 'url-storefront',
  spree: {
    // Local api app proxy
    host: '//localhost:3333',
    imagePrefix: 'https://demo.spreecommerce.org',
    noImagePlaceholder: './assets/images/product-placeholder-1.jpeg',
    // Mock the data (GitHub Pages demo)
    isUseApiMock: true,
    // host: 'https://demo.spreecommerce.org',
    // Mocked server
    // host: 'https://stoplight.io/mocks/spark-solutions/api-v2/3124958'
  }
};
