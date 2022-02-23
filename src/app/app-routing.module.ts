import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './configs/route.config';

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
