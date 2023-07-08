import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AflFormComponent } from './afl-form/afl-form.component';
import { AflTwoComponent } from './afl-two/afl-two.component';

@NgModule({
  declarations: [
    AppComponent,
    AflFormComponent,
    AflTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
