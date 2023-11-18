import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AngularDefComponent } from './components/angular-def/angular-def.component';

const routes: Routes = [
  {path: "", component: AngularDefComponent},
  {path: "toolbar", component: ToolbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
