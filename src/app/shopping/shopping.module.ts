import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Modules
import { ShoppingRoutingModule } from './shopping-routing.module';

// Components
import {ShoppingComponent} from './components/shopping/shopping.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {EditDetailsComponent} from './components/edit-details/edit-details.component';
import {PurchaseDetailsComponent} from './components/purchase-details/purchase-details.component';
import {ShoppingFormComponent} from './components/shopping-form/shopping-form.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingListComponent,
    EditDetailsComponent,
    PurchaseDetailsComponent,
    ShoppingFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule {
}
