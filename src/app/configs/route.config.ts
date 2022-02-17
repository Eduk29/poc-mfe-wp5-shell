import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
  // { path: 'dashboard', loadChildren: () => import('dashboard/Module').then(m => m.DashboardModule) },
  // { path: 'product', loadChildren: () => import('product/Module').then(m => m.ProductModule) },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        exposedModule: './Module'
      })
        .then(m => m.DashboardModule)
        .catch(error => alert('This MFE has an error, please return later!'))
  },
  {
    path: 'product',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        exposedModule: './Module'
      })
        .then(m => m.ProductModule)
        .catch(error => alert('This MFE has an error, please return later!'))
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
