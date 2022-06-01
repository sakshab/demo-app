import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarListComponent } from './components/car-list/car-list.component';


@NgModule({
  declarations: [
    CarHomeComponent,
    CarListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CarHomeComponent,] 
})
export class CarToolModule { }
