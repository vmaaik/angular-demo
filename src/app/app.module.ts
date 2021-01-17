import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import {WarningComponent} from './warning/warning-component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import { AssignmentSecondComponent } from './assignment-second/assignment-second.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    WarningComponent,
    ServerComponent,
    ServersComponent,
    AssignmentSecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
