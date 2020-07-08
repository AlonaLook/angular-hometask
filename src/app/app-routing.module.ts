import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShoppingFormComponent} from './shopping-form/shopping-form.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {EditDetailsComponent} from './edit-details/edit-details.component';
import {PurchaseDetailsComponent} from './purchase-details/purchase-details.component';
import {AuthGuard} from './guards/auth-guard.service';
import {PurchaseResolverService} from './services/purchase-resolver.service';
import {CanDeactivateGuardService} from './guards/can-deactivate-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-purchase', component: ShoppingFormComponent, canActivate: [AuthGuard]},
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard], children: [
      { path: ':id', component: PurchaseDetailsComponent, resolve: { purchase: PurchaseResolverService}},
      {
        path: ':id/edit',
        component: EditDetailsComponent,
        canDeactivate: [CanDeactivateGuardService],
        resolve: { purchase: PurchaseResolverService}
      }
    ]},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
