import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public nombreApellidoPattern: string = "([A-ZÀ-ÿa-z]+) ([A-ZÀ-ÿa-z]+)"; 
  public emailPattern:          string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerBanbleac = ( control: FormControl ) : ValidationErrors | null => {
    const valor = control.value?.trim().toLowerCase();
    if( valor === 'banbleac'){
      return{
        noBanbleac: true
      };
    }
    console.log(valor);
    return null;
  }

}
