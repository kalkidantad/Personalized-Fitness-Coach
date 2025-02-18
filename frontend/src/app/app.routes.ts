import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Root URL
  { path: 'recommendations', component: RecommendationsComponent }
];