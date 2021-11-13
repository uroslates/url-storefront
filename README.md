# Url Storefront

```Url Storefront``` is an Angular based Headless E-Commerce web application.

## Running the application

To run the application locally execute the following commands:

- ```npm run serve:url-storefront-api``` for starting the Back-End app
- ```npm run serve:url-storefront-api``` for starting the Front-End app

## Documentation

This project was generated using [Nx](https://nx.dev). Find out more about using the tool within the project [here](./docs/Nx.md).

### Architecture

The application represents a **mono-repo** consiting of 2 main applications:

- [api](./apps/api/src/main.ts) - Back-End application (used for development purposes). Its main purpose is providing an [Endpoint](./apps/api/src/app/app.controller.ts) serving as a Proxy to an online Spree Demo Application (allowing usage of online demo application locally by bypassing the Cors issues).
- [url-storefront](./apps/url-storefront/src/main.ts) - Front-End Angular Headless Storefront application.

And couple of (npm publishable) libraries:

- [@url/pages/home](./libs/pages/home/src/index.ts) - ```Home``` library encapsulating home features/components
- [@url/pages/category](./libs/pages/category/src/index.ts) - ```Category``` library encapsulating category features/components
- [@url/pages/product](./libs/pages/product/src/index.ts) - ```Product``` library encapsulating product features/components
- [@url/pages/cart](./libs/pages/cart/src/index.ts) - ```Cart``` library encapsulating cart features/components
- [@url/sdk/spree](./libs/sdk/spree/src/index.ts) - library warpper arround 3rd party [Spree Commerce API](https://api.spreecommerce.org/). It encapsulates [spree-storefront-api-v2-js-sdk](https://github.com/spree/spree-storefront-api-v2-js-sdk) making it conformable to ```url-storefront``` internal pluggable specification (internal [SDK Service api/interface](libs/sdk/storefront/src/lib/services/abstract-storefront-sdk.service.ts)).
- [@url/sdk/storefront](./libs/sdk/storefront/src/index.ts) - this is **main application SDK library** (ng modulel). It exposes the main SDK Service [SdkService](./lib/sdk/../../libs/sdk/storefront/src/lib/services/sdk.service.ts) intended to be used within the application (this is a proxy service around [StorefrontSdkService](./lib/sdk/../../libs/sdk/storefront/src/lib/servicee/../services/storefront-sdk.service.ts) which is an actual internal url-storefront BackEnd service implementation, retrieving all the data from internal url-storefront BackEnd).
  - You can provide your own 3rd party storefront service, like it is done in [@url/sdk/spree library](./libs/sdk/spree/src/index.ts) in [SpreeStorefontSdkService](libs/sdk/spree/src/lib/services/spree-storefront-sdk.service.ts). To do that all you need to do is expose new ```3rdPartySdkService``` whcih conforms to internal [SDK Service api/interface](libs/sdk/storefront/src/lib/services/abstract-storefront-sdk.service.ts) and then configure the ```url-storefront``` application easily to use that ```3rdPartySdkService``` (instead of default one) by overriding base SDK Servcie provider ```providers: [{ provide: StorefrontSdkService, useClass: SpreeStorefrontSdkService }]``` (check [main app.module.ts](./apps/url-storefront/src/app/app.module.ts) for an example)
- [@url/shared/types](./libs/shared/types/src/index.ts) - this is where all internal application types/model definitions are defined
- [@url/shared/ui/cms](./libs/shared/ui/cms/src/index.ts)
- [@url/shared/ui/storefront](./libs/shared/ui/storefront/src/index.ts)

Here is Application's dependency-graph:

![url-storefront Depenency Graph](./docs/images/url-storefront-dependency-graph.png "url-storefront Dependency Graph")

For seeing the entire **applications architecture** and **depnendecy graph** run ```npm run dep-graph``` command and navigate to [http://127.0.0.1:4211](http://127.0.0.1:4211).

## Contribution

This project is in **early development phase**. You are more than welcome to contribute. Please make sure to read the [Contribution](./docs/Contribution.md) if deciding to do so.

There is an extensive list of ```things to be done``` in the project, some of which are categoriized and listed on [Todo](./docs/Todo.md) page.
