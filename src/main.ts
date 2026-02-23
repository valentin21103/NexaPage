import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { injectSpeedInsights } from '@vercel/speed-insights';

bootstrapApplication(AppComponent)
  .then(() => {
    injectSpeedInsights();
  })
  .catch(err => console.error(err));