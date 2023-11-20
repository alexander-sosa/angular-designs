import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AngularDefComponent } from './components/angular-def/angular-def.component';
import { NavPillsComponent } from './components/nav-pills/nav-pills.component';
import { HomeComponent } from './components/home/home.component';
import { PuntosComponent } from './components/puntos/puntos.component';

const routes: Routes = [
  {path: "", component: AngularDefComponent},
  {path: "toolbar", component: ToolbarComponent},
  {path: "nav-pills",  component: NavPillsComponent},
  {path: "home", component: HomeComponent},
  {path: "puntos", component: PuntosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
