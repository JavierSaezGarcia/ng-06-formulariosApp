import { FormControl } from '@angular/forms';

export const nombreApellidoPattern: string = "([A-ZÀ-ÿa-z]+) ([A-ZÀ-ÿa-z]+)"; 
export const emailPattern:          string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


export const noPuedeSerBanbleac = ( control: FormControl ) => {
    const valor = control.value?.trim().toLowerCase();
    if( valor === 'banbleac'){
      return{
        noBanbleac: true
      };
    }
    console.log(valor);
    return null;
  }
