import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { ShoppingService } from './services/shopping.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';



@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingFormComponent,
    HomeComponent,
    NotFoundComponent,
    PurchaseDetailsComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   AppRoutingModule
  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
