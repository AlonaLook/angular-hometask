import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShoppingFormComponent} from './shopping-form/shopping-form.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {EditDetailsComponent} from './edit-details/edit-details.component';
import {PurchaseDetailsComponent} from './purchase-details/purchase-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-purchase', component: ShoppingFormComponent},
  { path: 'shopping-list', component: ShoppingListComponent, children: [
      { path: ':id', component: PurchaseDetailsComponent},
      { path: ':id/edit', component: EditDetailsComponent}
    ]},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
