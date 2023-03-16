import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { CarResource } from 'src/app/inferfaces/car-resource';
import { CarApiService } from 'src/app/services/car-api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{

  carsSubject$ = new BehaviorSubject<CarResource[]>([]);
  
  constructor(private carsServiceApi: CarApiService) {
  }

  ngOnInit(): void {
    this.featchCars();
  }

  featchCars():void{
    this.carsServiceApi.getCars(true).subscribe((cars: CarResource[]) => {
      next: {
        this.carsSubject$.next(cars);
      }
    });
    complete:{() => console.log("Obserable closed for new values")}
    error: {(err: any) => console.log(err);}
  }
}
