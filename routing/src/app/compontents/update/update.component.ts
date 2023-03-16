import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { CarResource } from 'src/app/inferfaces/car-resource';
import { CarApiService } from 'src/app/services/car-api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  carsSubject$ = new BehaviorSubject<CarResource[]>([]);
  cars$: Observable<CarResource[]> | undefined

  carFormGroup: FormGroup = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^([0-9]*)$'),
    ]),
    rank: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^([0-9]*)$'),
    ]),
    model: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z, 0-9]*$'),
    ]),
    quantity: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^([0-9]*)$'),
    ]),
    changeQuantityPercent: new FormControl('', [
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

  getErrorMessageRank(): string | void {
    if(this.carFormGroup.get('rank')?.hasError('required')) {
      return 'Rank must be entered';
    }
    else if (this.carFormGroup.get('rank')?.hasError('pattern')) {
      return 'Rank must be a number';
    }
  }

  getErrorMessageModel(): string | void {
    if(this.carFormGroup.get('model')?.hasError('required')) {
      return 'Model of the car must be entered';
    }
    else if (this.carFormGroup.get('model')?.hasError('pattern')) {
      return 'You can insert letter and number';
    }
  }

  getErrorMessageQuantity(): string | void {
    if(this.carFormGroup.get('quantity')?.hasError('required')) {
      return 'Rank must be entered';
    }
    else if (this.carFormGroup.get('quantity')?.hasError('pattern')) {
      return 'Rank must be a number';
    }
  }

  getErrorMessageChangeQuantityPercent(): string | void {
    if(this.carFormGroup.get('changeQuantityPercent')?.hasError('required')) {
      return 'Change Quantity Percent must be entered';
    }
    else if (this.carFormGroup.get('changeQuantityPercent')?.hasError('pattern')) {
      return 'Change Quantity Percent must be a number';
    }
  }


  
  constructor(private carsServiceApi: CarApiService, private snackBar: MatSnackBar) {
  }

  private regValid(): boolean | undefined {
    return  this.carFormGroup.get('id')?.valid &&
            this.carFormGroup.get('rank')?.valid &&
            this.carFormGroup.get('model')?.valid &&
            this.carFormGroup.get('quantity')?.valid &&
            this.carFormGroup.get('changeQuantityPercent')?.valid
  }


  onSubmit(){
    if(this.regValid()){
      const car = {} as CarResource
      car.id = this.carFormGroup.get("id")?.value;  
      car.rank = this.carFormGroup.get("rank")?.value;  
      car.model = this.carFormGroup.get("model")?.value;  
      car.quantity = this.carFormGroup.get("quantity")?.value;  
      car.changeQuantityPercent = this.carFormGroup.get("changeQuantityPercent")?.value;  

      this.carsServiceApi.updateCar(car).subscribe((resp) => {
        next: {
          console.log(resp);
          this.snackBar.open("Car has been updated")._dismissAfter(3000);
        }
      })
    }
  }
}
