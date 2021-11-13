# Todo List

This page is intended to be used as a temporary placeholder (like a prioritized *"Backlog list"*) of most relevant things that need to be addressed/implemented/fixed within the project's codebase. Its intended to be used as a guideline for contributers when working on the codebase.

## Features

1. Images baseUrl's are scattered all around the codebase. Move them to the spree mappers. **Making sure all 3rd party code is a part of 3rd party package!**
2. Add Mocked Spree responses - making sure app can be bootstraped with MockedSpreeServiceSdk replacing real calls with shuffeled mocked data respnoses (**enabling apps FE to be deployed on Github Pages W/O BE**).
3. Gallery Images Component - make it work for multiple images (not only 3). **Home page SideBySide section type will be presented noramlly than.**
4. Enable better Contribution flows:
   1. Provide [Contribution](./Contribution.md) page with relevant information.
   2. Add suport for usage of [standard-verion](https://github.com/conventional-changelog/standard-version) -  auto-generation of changelogs, determin sematic version, structured commit history and all the goodies.
5. Add Component store to all the necessary components (pages components).
6. Cart initialization logic on app load.
7. Docker support
   1. Make dev docker/docker-compose flow work.
   2. Make prod docker/docker-compose flow work.
8. Implement Product Carousel type of cms-section. Have a look at [cms-section.component.html](libs/shared/ui/cms/src/lib/components/sections/cms-section/cms-section.component.html)'s <ng-container *ngSwitchDefault> section. We should add one more case block there handling above mentioned type.
9. Category page show subcategories
10. Category page - implement additional filters and search
11. PWA optimizations
12. Rethinking models (properties, ...). Affects entire app (breaking changes)
13. Performance optimizations - Server Side rendering and SEO
14. 
15. Deployment Build Pipeline (consider [Git Actions](https://github.com/features/actions))
