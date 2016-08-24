import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);


//Now we need something to tell Angular to load the app module.
//We import the two things we need to launch the application:
//Angular's browser platformBrowserDynamic function
//The application module, AppModule.

//Then we call platformBrowserDynamic().bootstrapModule with AppComponent.

//Bootstrapping is platform-specific

//Notice that we import the platformBrowserDynamic function from @angular/platform-browser-dynamic, not @angular/core. 
//Bootstrapping isn't core because there isn't a single way to bootstrap the app. 



//When Angular calls the bootstrapModule function in main.ts, it reads the AppModule metadata, 
//sees that AppComponent is the bootstrap component, finds the my-app selector, 
//locates an element tag named my-app, and renders our application's view between those tags.