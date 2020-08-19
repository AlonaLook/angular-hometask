import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Services
import {PurchaseResolverService} from '../shared/services/purchase-resolver.service';
import {CanDeactivateGuardService} from '../shared/services/guards/can-deactivate-guard.service';

// Components
import {ShoppingComponent} from './components/shopping/shopping.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {EditDetailsComponent} from './components/edit-details/edit-details.component';
import {PurchaseDetailsComponent} from './components/purchase-details/purchase-details.component';
import {ShoppingFormComponent} from './components/shopping-form/shopping-form.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
    children: [
      { path: 'add', component: ShoppingFormComponent },
      {
        path: '',
        component: ShoppingListComponent,
        children: [
          { path: ':id', component: PurchaseDetailsComponent, resolve: { purchase: PurchaseResolverService } },
          {
            path: ':id/edit',
            component: EditDetailsComponent,
            canDeactivate: [CanDeactivateGuardService],
            resolve: {purchase: PurchaseResolverService}
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShoppingRoutingModule {
}
