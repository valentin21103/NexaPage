import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; 
import { injectSpeedInsights } from '@vercel/speed-insights';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    injectSpeedInsights();
  })
  .catch(err => console.error(err));