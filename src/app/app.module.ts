import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefComponent } from './def/def.component';
import { PushComponent } from './push/push.component';

@NgModule({
  declarations: [
    AppComponent,
    DefComponent,
    PushComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
