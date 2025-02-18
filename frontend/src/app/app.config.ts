import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Import client-side routes
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient
import { Nl2brPipe } from './nl2br.pipe'; // Import the custom pipe


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Provide client-side routes
    provideHttpClient(), // Provide HttpClient
    Nl2brPipe // Register the custom pipe
  ]
};