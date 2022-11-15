import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

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
  camposIguales( campo1: string, campo2: string) {

    return ( formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      console.log(pass1, pass2);
      if( pass1 !== pass2 ){
        formGroup.get(campo2)?.setErrors({  noIguales: true })
        return { noIguales: true }
      }

      formGroup.get(campo2)?.setErrors(null)
      return null

    }

  }

}
