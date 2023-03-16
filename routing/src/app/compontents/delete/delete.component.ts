import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { CarResource } from 'src/app/inferfaces/car-resource';
import { CarApiService } from 'src/app/services/car-api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  carsSubject$ = new BehaviorSubject<CarResource[]>([]);
  cars$: Observable<CarResource[]> | undefined

  carFormGroup: FormGroup = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^([0-9]*)$'),
    ]),
  })

  getErrorMessageId(): string | void {
    if(this.carFormGroup.get('rank')?.hasError('required')) {
      return 'Id must be entered';
    }
    else if (this.carFormGroup.get('rank')?.hasError('pattern')) {
      return 'Id must be a number';
    }
  }

  constructor(private carsServiceApi: CarApiService, private snackBar: MatSnackBar) {
  }

  private regValid(): boolean | undefined {
    return  this.carFormGroup.get('id')?.valid;
  }


  onSubmit(){
    if(this.regValid()){
      const car = {} as CarResource
      car.id = this.carFormGroup.get("id")?.value;  

      console.log(car.id);
      

      this.carsServiceApi.deleteCar(car).subscribe((resp) => {
        next: {
          console.log(resp);
          this.snackBar.open("Car has been deleted")._dismissAfter(3000);
        }
      })
    }
  }
}
