import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { HoverDirective } from './directives/hover.directive';
import { IfVisibleDirective } from './directives/if-visiblel.directive';



@NgModule({
  declarations: [
    AppComponent,
    AutoFocusDirective,
    HoverDirective,
    IfVisibleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
