import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CustomInterceptorService} from './services/custom-interceptor.service';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [AngularFireDatabase, {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
