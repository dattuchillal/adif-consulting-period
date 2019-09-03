import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultantPeriodHomeComponent } from './consultant-period-home/consultant-period-home.component';

const routes: Routes = [
  {
    path: '', component: ConsultantPeriodHomeComponent, children: [
      { path: '', component: ConsultantPeriodHomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantPeriodRoutingModule { }
