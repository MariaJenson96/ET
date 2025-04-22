import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { ProfileComponent } from '../pages/profile/profile.component';

export const tabsRoutes: Routes = [
  {
    path: 'tabs',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'tabs', pathMatch: 'full' }
];
