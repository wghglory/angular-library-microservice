# AngularLibraryMicroservice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

```bash
ng new angular-library-microservice --style=scss --routing

# generate lib projects
ng generate library store --prefix str
ng generate library inventory --prefix inv
ng generate library generator --prefix gen

# generate components for store lib
ng generate component Home --project store --inline-style true
ng generate component BookList --project store --inline-style true
ng generate component CdList --project store --inline-style true
ng generate component DvdList --project store --inline-style true

# build store lib to use it
ng build store
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
