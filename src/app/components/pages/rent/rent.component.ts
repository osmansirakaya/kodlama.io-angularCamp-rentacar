import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  constructor() { }
  car: Car

 
    carPropForm: UntypedFormGroup
    isCheck: boolean = false
    carId:Car;


  ngOnInit(): void {
  }

}
