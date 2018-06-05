import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HerosComponent } from './heros/heros.component'
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { UserInfoEditComponent } from "./user-info-edit/user-info-edit.component";

const routes: Routes = [
  { path: 'heroes', component: HerosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hero/detail/:id', component: HeroDetailComponent },
  { path: 'users/:id', component: UserInfoEditComponent },
  { path: '', redirectTo: '/users/FIKVIZS30007', pathMatch: 'full' },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
