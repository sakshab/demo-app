import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../Models/cars';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input()
  cars: Car[] = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2022, color: 'Black', price: 50000,},
    { id: 2, make: 'Toyota', model: 'Corolla', year: 2022, color: 'White', price: 30000,},
    { id: 3, make: 'Toyota', model: 'Land Cruiser', year: 2022, color: 'Silver', price: 80000,},
  ];

  constructor() { }

  ngOnInit(): void {
    

  }

}
