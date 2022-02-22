import { Routes } from '@angular/router';

import { WrapperComponent } from './../wrapper/wrapper.component';
import { startsWith } from './router.utils';

export const appRoutes: Routes = [
  { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
  { matcher: startsWith('dashboard'), component: WrapperComponent, data: { importName: 'dashboard', elementName: 'dashboard' } },
  { matcher: startsWith('product'), component: WrapperComponent, data: { importName: 'product', elementName: 'product' } },
  { matcher: startsWith('user'), component: WrapperComponent, data: { importName: 'user', elementName: 'user' } },
  { matcher: startsWith('payment'), component: WrapperComponent, data: { importName: 'payment', elementName: 'payment' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
