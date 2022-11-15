import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { nombreApellidoPattern, emailPattern, noPuedeSerBanbleac } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit{

 
  miFormulario: FormGroup = this.fb.group({

    nombre: ['', [Validators.required,  Validators.pattern( this.VS.nombreApellidoPattern )]],
    email: ['', [Validators.required, Validators.pattern( this.VS.emailPattern )]],
    username: ['', [Validators.required, this.VS.noPuedeSerBanbleac]],

  }); 

  constructor( private fb: FormBuilder,
               private VS: ValidatorService ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Javier Sáez',
      email: 'javiersaez1205@gmail.com',
      username: 'javiersaez'
    }) 

    
  }

  campoNoValido( campo:string ){
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
  


  

}


