import { Routes } from '@angular/router';

import { WrapperComponent } from './../wrapper/wrapper.component';
import { startsWith } from './routes.utils';

export const appRoutes: Routes = [
  { matcher: startsWith('dashboard'), component: WrapperComponent, data: { importName: 'dashboard', elementName: 'dashboard-element' } },
  { matcher: startsWith('product'), component: WrapperComponent, data: { importName: 'product', elementName: 'product-element' } },
  { matcher: startsWith('user'), component: WrapperComponent, data: { importName: 'user', elementName: 'user-element' } },
  { matcher: startsWith('payment'), component: WrapperComponent, data: { importName: 'payment', elementName: 'payment-element' } },
  { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
