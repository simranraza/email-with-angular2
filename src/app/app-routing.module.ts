import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailComposeComponent } from './email/email-compose/email-compose.component';
const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: EmailComposeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
