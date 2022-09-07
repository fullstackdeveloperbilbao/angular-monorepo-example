# Project description

This monorepo has 2 applications (projects/apps):
- bakery application
- fruit-store application

Each application has the minimum needed code and depends on libraries (projects/libs):
- bakery/shell: Is the main layout shown in bakery app. Is lazy loaded on bakery app with the module. Depends on shared/product-card and shared/util-interfaces.
- fruit-store/layout: Is the main layout shown in fruit-store app. Is lazy loaded on fruit-store app with the module. Depends on shared/product-card and shared/util-interfaces.
- shared/util-interfaces: Contains the Product interface used in mentioned libraries.
- shared/product-card Contains the component that shows a product.

## Install dependencies (On root folder)
```
npm install
```
## Bakery run

```
npm run start:bakery
```

## Fruit-store run

```
npm run start:fruit-store
```
