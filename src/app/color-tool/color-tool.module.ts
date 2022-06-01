import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorHomeComponent } from './components/color-home/color-home.component';



@NgModule({
  // register a component in the declaration so
  // I can call it from a template
  declarations: [
    ColorHomeComponent
  ],
  imports: [
    CommonModule
  
  ],
  exports:[
    ColorHomeComponent,
  ]

})
export class ColorToolModule { }
