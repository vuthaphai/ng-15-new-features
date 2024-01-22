
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './app/app-route';




  bootstrapApplication(AppComponent, { providers: [provideRouter(APP_ROUTE)]})
