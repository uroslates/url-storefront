# Todo List

This page is intended to be used as a temporary placeholder (like a prioritized *"Backlog list"*) of most relevant things that need to be addressed/implemented/fixed within the project's codebase. Its intended to be used as a guideline for contributers when working on the codebase.

## Features

1. ~~Images baseUrl's are scattered all around the codebase. Move them to the spree mappers. **Making sure all 3rd party code is a part of 3rd party package!**~~
2. ~~Add Mocked Spree responses - making sure app can be bootstraped with MockedSpreeServiceSdk replacing real calls with shuffeled mocked data respnoses (**enabling apps FE to be deployed on Github Pages W/O BE**).~~
3. Gallery Images Component - make it work for multiple images (not only 3). **Home page SideBySide section type will be presented noramlly than.**
4. Enable better Contribution flows:
   1. Provide [Contribution](./Contribution.md) page with relevant information.
   2. ~~Add suport for usage of [standard-verion](https://github.com/conventional-changelog/standard-version) -  auto-generation of changelogs, determin sematic version, structured commit history and all the goodies.~~
5. Add Component store to all the necessary components (pages components).
6. Cart initialization logic on app load.
7. Implement Product Carousel type of cms-section. Have a look at [cms-section.component.html](libs/shared/ui/cms/src/lib/components/sections/cms-section/cms-section.component.html)'s <ng-container *ngSwitchDefault> section. We should add one more case block there handling above mentioned type.
8. Category page show subcategories
9. Category page - implement additional filters and search
10. Rethinking models (properties, ...). Affects entire app (breaking changes)
11. Deployment:
    1. Build Pipeline (consider [Git Actions](https://github.com/features/actions))
       1. Github Actions [example](https://github.com/fs/flatstack-warsaw/blob/b7c0428bf0e36065affe17b7b375f31ebc63da81/.github/workflows/ci.yml)
       2. Lighthouse CI - prepare a list of technical requirements:
          1. Time to interactive — 2 seconds or less.
          2. Total Blocking Time — 199 ms or less.
          3. Total size of loaded resources after opening the page — less than 300 kb. Size of JS — less than 50 kb.
          4. Images in modern formats: AVIF, WEBP, fallback to JPEG.
          5. Lazy Loading for all non-critical images.
          6. Inline critical CSS.
          7. No custom fonts.
    2. Docker Support:
       1. ~~Make dev docker/docker-compose flow work.~~
       2. Make prod docker/docker-compose flow work.
12. Performance Optimizations:
    1. PWA optimizations
    2. [Server Side](https://angular.io/guide/universal) rendering and SEO. Example [repo](https://github.com/mgechev/hybrid-rendering)
    3. Optimize for mobile/tablet (use yarn add [ngx-device-detector](https://koderlabs.github.io/ngx-device-detector/)) to provide a service for detecting device and loading images in sizes appropriate for the device
       1. Add placeholder images in variants xl, lg, md. xs (use https://i.picsum.photos/id/0/720/320.jpg?hmac=0qnh_S9b1L3gPEdTpdMhE-3Q3M1cKzVw8K_hsuSr_5s to generate and save them in assets/images)
       2. Use the service in app (to show image pro device)
    4. Go through lighthouse report and optimize
13. ...
