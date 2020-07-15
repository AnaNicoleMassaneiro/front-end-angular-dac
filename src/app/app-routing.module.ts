import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { IntimacaoComponent } from './intimacao/intimacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'intimacao', component: IntimacaoComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
