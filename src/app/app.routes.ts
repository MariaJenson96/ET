import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { tabsRoutes } from './routes/tabs.routes';

export const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: tabsRoutes,
      },
];
