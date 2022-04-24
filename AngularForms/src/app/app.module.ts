import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RFormsComponent } from './rforms/rforms.component';
import { FilterPipe } from './shared-module/filter.pipe';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent,
    RFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModuleModule,
    ReactiveFormsModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
