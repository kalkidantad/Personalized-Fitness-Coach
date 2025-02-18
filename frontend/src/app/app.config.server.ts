import { ApplicationConfig } from '@angular/core';
import { provideServerRouting } from '@angular/ssr'; // Import provideServerRouting
import { serverRoutes } from './app.routes.server'; // Import server-side routes

export const appConfigServer: ApplicationConfig = {
  providers: [
    provideServerRouting(serverRoutes) // Provide server-side routes
  ]
};