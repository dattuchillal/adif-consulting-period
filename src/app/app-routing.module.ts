import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PATHS } from './core/contants/paths.const';
import { Page404Component } from './shared/errorTemplate/page404/page404.component';

const routes: Routes = [
  {
    path: PATHS.consultantPeriods,
    loadChildren: './adif-features/consultant-period/consultant-period.module#ConsultantPeriodModule'
  },
  {
    path: '',
    redirectTo: PATHS.consultantPeriods, pathMatch: 'full', canActivate: []
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
