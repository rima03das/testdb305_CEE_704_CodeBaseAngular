import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WfeStepComponent } from './wfe-step/wfe-step.component';
import { WfeStepNotFoundComponent } from './wfe-step-not-found/wfe-step-not-found.component';
import { WfeAccessDeniedComponent } from './wfe-access-denied/wfe-access-denied.component';


const routes: Routes = [
  { path: '', component: WfeStepComponent },
  { path: 'wfe/step/404',redirectTo: '/', pathMatch: 'full' },
  { path: 'wfe/step/403', redirectTo: '/', pathMatch: 'full' },
  //  { path: '/home', redirectTo: '/', },
  { path: 'wfe/step/:stepId', component: WfeStepComponent },
  { path: ':stepId', component: WfeStepComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' // Add options right here
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
