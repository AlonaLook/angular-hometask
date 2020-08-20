import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

// Services
import {AuthGuard} from './shared/services/guards/auth-guard.service';

// Components
import {NotFoundComponent} from './not-found/not-found.component';
import {ContainerComponent} from './shared/components/container/container.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent}
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'shopping',
    component: ContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./shopping/shopping.module').then(module => module.ShoppingModule)
      }
    ],
  },
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
