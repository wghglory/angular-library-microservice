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

<img src="screenshots/structure.jpg" width="600">

## Reference

- <https://antoniogoncalves.org/2018/08/13/angular-libraries-and-microservices/>
