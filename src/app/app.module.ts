import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { LogoComponent } from './home-page/header/logo/logo.component';
import { MenuComponent } from './home-page/header/menu/menu.component';
import { ContentComponent } from './home-page/content/content.component';
import { TodosComponent } from './home-page/content/todos/todos.component';
import { TodoListComponent } from './home-page/content/todos/todo-list/todo-list.component';
import { TodoInputComponent } from './home-page/content/todos/todo-input/todo-input.component';
import { TodoItemComponent } from './home-page/content/todos/todo-list/todo-item/todo-item.component';
import { FooterComponent } from './home-page/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    ContentComponent,
    TodosComponent,
    TodoListComponent,
    TodoInputComponent,
    TodoItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
