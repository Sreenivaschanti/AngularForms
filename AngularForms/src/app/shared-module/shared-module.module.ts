import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { ColorChangerDirective } from './color-changer.directive';



@NgModule({
  declarations: [FilterPipe, ColorChangerDirective],
  imports: [
    CommonModule
  ],
  exports:[FilterPipe,ColorChangerDirective]
})
export class SharedModuleModule { }
