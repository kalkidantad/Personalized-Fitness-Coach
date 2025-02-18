import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

export default function main() {
    return bootstrapApplication(AppComponent, {
      providers: [
        provideServerRendering(),
        ...(appConfig.providers || []) // Merge providers safely
      ],
      ...Object.fromEntries(
        Object.entries(appConfig).filter(([key]) => key !== 'providers') // Avoid duplicate providers
      )
    });
  }
