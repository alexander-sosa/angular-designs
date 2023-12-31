import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AngularDefComponent } from './components/angular-def/angular-def.component';
import { NavPillsComponent } from './components/nav-pills/nav-pills.component';
import { HomeComponent } from './components/home/home.component';
import { PuntosComponent } from './components/puntos/puntos.component';
import { DeleteAlertComponent } from './components/delete-alert/delete-alert.component';
import { InvokerComponent } from './components/popup/invoker/invoker.component';
import { PopupComponent } from './components/popup/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AngularDefComponent,
    NavPillsComponent,
    HomeComponent,
    PuntosComponent,
    DeleteAlertComponent,
    InvokerComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
