# AllianzSeed
**Ahora mismo el proyecto utiliza un template de css para la barra lateral (sb-admin.min.css) y bootstrap (bootstrap.min.css), ambos ficheros se encuentran en la carpeta assets**


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

This project is a proof of concept.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Src directory layout
    .
    ├── app                  
    │   ├── dashboard             # Application modules loaded with lazy load
    │   ├── interfaces            # Application interfaces 
    │   ├── app.component.html         
    │   ├── app.component.scss 
    │   ├── app.component.spec.ts         
    │   ├── app.component.ts          
    │   ├── app.module.ts 
    │   └── app.routing.ts 
    ├──shared
    │   ├── services          
    │   ├── interfaces 
    │   ├── components          
    │   └── shared.module.ts 
    ├──assets
    ├──envionments
    ├──index.html
    ├──...                         # etc.

### Lazy modules directory layout
    .
    ├── dashboard                   
    │   ├── first-view                       
    │   │   ├── bar-chart                       
    │   │   ├── pie-chart                 # dumb application components.  
    │   │   ├── firts-view.component.html
    │   │   ├── firts-view.component.scss
    │   │   ├── firts-view.component.spec.ts
    │   │   ├── firts-view.component.ts
    │   │   ├── firts-view.module.ts
    │   │   └── first-view.routing.ts
    │   ├── second-view                         
    │   ├── dashboard.component.html
    │   ├── dashboard.component.scss
    │   ├── dashboard.component.spec.ts
    │   ├── dashboard.component.ts
    │   ├── dashboard.module.ts
    │   └── dashboard.routing.ts                                
    └── ...                                   # etc.

### Shared directory layout
    .
    ├── shared                   
    │   ├── services            # All services
    │   ├── interfaces          # Interfaces made to receive data from services
    │   ├── components          # Dumb components
    │   └── shared.module.ts           
    └── ...                     # etc.

### Lazy Modules

An advantage of using modules to group related pieces of functionality of our application is the ability to load those pieces on demand. Lazy loading modules helps us decrease the startup time. With lazy loading our application does not need to load everything at once, it only needs to load what the user expects to see when the app first loads. Modules that are lazily loaded will only be loaded when the user navigates to their routes.

### Dumb Components

Components without logic that can be used in several places like cards, alerts, popups, etc.

### Interfaces

In this project we use two types of interfaces:
- The first type of interfaces are those that we will use for this particular application.
- The second type, are those we will use for receive data from services.

### Shared.Module.ts

When you write a shared module for your application, that contains stuff you use in other modules in the same app, you typically want all the services in that module shared only once.

If you just put the services in the providers property of the shared module’s NgModule() decorators, you might get weird cases, especially with lazy loading, when it feels like there’s more than one instance of the service. This is bad if you want to have shared state.

So in this application we use a way to write our shared module in which we use ModuleWithProviders, forRoot(), etc

# AllianzTest

This project use a test environment for e2e and unit testing. Currently has two simple e2e tests and two unit test for services.
Download dependencies with `npm install`.
Serve project with `ng serve`.
Tests with default environment will fail.
Tests with 'test' environment need json-server started. To start it, navigate to json-server folder and run `json-server --watch db.json --routes routes.json`.
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io) with the default environment.
Run `ng test -e test` or `npm test` to execute the unit test with the environment 'test' (src/environments/environment.test.ts). 
You can include a new environment adding a new file in that folder and changing .angular-cli.json.
You can modify the behaviour of the script 'npm test' in packaje.json.
Add `--code-coverage` option for export result to the coverage folder.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/) with the default environment.
Run `ng e2e -e test` or `npm e2e` to execute the unit test with the environment 'test'.