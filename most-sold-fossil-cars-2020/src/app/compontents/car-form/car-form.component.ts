import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarResource } from 'src/app/interfaces/car-resource';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})

export class CarFormComponent {

  carFormGroup: FormGroup = new FormGroup({
    rank: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^([0-9])$'),
    ]),
    model: new FormControl('', [
      Validators.required,
      Validators.pattern('^([A-ZÆØÅ]){1}([a-zøæå]{1,})$'),
    ]),
    quantity: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^([0-9])$'),
    ]),
    changeQuantityPercent: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^([0-9])$'),
    ]),
  })


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

  private regValid(): boolean | undefined {
    return  this.carFormGroup.get('rank')?.valid &&
            this.carFormGroup.get('model')?.valid &&
            this.carFormGroup.get('quantity')?.valid &&
            this.carFormGroup.get('changeQuantityPercent')?.valid
  }


  onSubmit(){
    if(this.regValid()){
      const car = {} as CarResource
      car.rank = this.carFormGroup.get("rank")?.value;  
      car.model = this.carFormGroup.get("model")?.value;  
      car.quantity = this.carFormGroup.get("quantity")?.value;  
      car.changeQuantityPercent = this.carFormGroup.get("changeQuantityPercent")?.value;  


    }
  }
}

