import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResource } from '../inferfaces/car-resource';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  url: string = "http://localhost:3000"
  endpointRead: string = "cars";
  create: string = "create/car";
  update: string = "update/car";
  delete: string = "delete/car";

  constructor(private httpClient: HttpClient) {
  }

  getCars(init: Boolean) : Observable<CarResource[]> {
    const cars$ = this.httpClient.get<CarResource[]>(this.url + "/" + this.endpointRead)
    if (cars$ && init) {
      
    }
    return cars$;
  }

  createCar(carResource: CarResource): Observable<CarResource>{
    const cars$ = this.httpClient.post<CarResource>(this.url + "/" + this.create, carResource)
    return cars$;
  }

  updateCar(carResource: CarResource): Observable<CarResource>{
    const cars$ = this.httpClient.put<CarResource>(this.url + "/" + this.update, carResource)
    return cars$;
  }

  deleteCar(carResource: CarResource): Observable<CarResource>{
    //Look into this
    const cars$ = this.httpClient.delete<CarResource>(this.url + "/" + this.delete)
    return cars$;
  }
}
