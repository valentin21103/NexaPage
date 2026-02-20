import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // <-- Cambiamos el import

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(
      routes, 
      // Esta función activa el scroll a los IDs y restaura la posición al cambiar de página
      withInMemoryScrolling({ 
        anchorScrolling: 'enabled', 
        scrollPositionRestoration: 'enabled' 
      }) 
    )
  ]
};