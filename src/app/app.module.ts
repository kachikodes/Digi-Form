import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AflFormComponent } from './afl-form/afl-form.component';
import { AflTwoComponent } from './afl-two/afl-two.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmailTemplateComponent } from './email-template/email-template.component';

@NgModule({
  declarations: [
    AppComponent,
    AflFormComponent,
    AflTwoComponent,
    EmailTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
