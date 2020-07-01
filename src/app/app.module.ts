import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import {ShoppingService} from './services/shopping.service';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-purchase', component: ShoppingFormComponent},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'shopping-list-item/:id/:title/:count', component: ShoppingListItemComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
