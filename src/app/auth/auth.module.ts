import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Components
import {AuthComponent} from './components/auth/auth.component';
import {LoginPageComponent} from './components/login-page/login-page.component';

// Modules
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: '/auth/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent }
    ]
  }
];
@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthModule {

}
