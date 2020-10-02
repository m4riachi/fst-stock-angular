import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HeroesComponent } from './heroes/heroes.component';
import { ClientsComponent } from './clients/clients.component';
import { BatsComponent } from './bats/bats.component';
const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
  { path: '', component: ClientsComponent },
  { path: 'bat/:reference/client', component: BatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
