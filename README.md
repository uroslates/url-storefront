# Url Storefront

```Url Storefront``` is a simple headless e-commerce web application.

## Running the application

To run the application locally execute the following commands:

- ```npm run serve:url-storefront-api``` for starting the Back-End app
- ```npm run serve:url-storefront-api``` for starting the Front-End app

## Documentation

This project was generated using [Nx](https://nx.dev). Find out more about using the tool within the project [here](./docs/Nx.md).

### Architecture

The application represents a **mono-repo** consiting of 2 main applications:

- [api](./apps/api/src/main.ts) - Back-End application (used for development purposes) which provides an Endpoint serving as a Proxy to an online Spree Demo Application (allowing usage of online demo application locally by bypassing the Cors issues).
- [url-storefront](./apps/url-storefront/src/main.ts) - Front-End Angular Headless Storefront application.

And couple of (npm publishable) libraries:

- [@url/pages/cart](./libs/pages/cart/src/index.ts)
- [@url/pages/category](./libs/pages/category/src/index.ts)
- [@url/pages/home](./libs/pages/home/src/index.ts)
- [@url/pages/product](./libs/pages/product/src/index.ts)
- [@url/sdk/spree](./libs/sdk/spree/src/index.ts)
- [@url/sdk/storefront](./libs/sdk/storefront/src/index.ts)
- [@url/shared/types](./libs/shared/types/src/index.ts)
- [@url/shared/ui/cms](./libs/shared/ui/cms/src/index.ts)
- [@url/shared/ui/storefront](./libs/shared/ui/storefront/src/index.ts)

For seeing the entire **applications architecture** and **depnendecy graph** run ```npm run dep-graph``` command and navigate to [http://127.0.0.1:4211](http://127.0.0.1:4211).
