import {NgModule} from '@angular/core';
import {ContainerComponent} from './components/container/container.component';
import {HeaderComponent} from './components/header/header.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    ContainerComponent,
    HttpClientModule
  ]
})
export class SharedModule {

}
