import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './configs/route.config';

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
