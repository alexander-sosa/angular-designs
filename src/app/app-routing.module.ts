import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AngularDefComponent } from './components/angular-def/angular-def.component';
import { NavPillsComponent } from './components/nav-pills/nav-pills.component';

const routes: Routes = [
  {path: "", component: AngularDefComponent},
  {path: "toolbar", component: ToolbarComponent},
  {path: "nav-pills",  component: NavPillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
