import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { nombreApellidoPattern, emailPattern, noPuedeSerBanbleac } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit{

 
  miFormulario: FormGroup = this.fb.group({
    // nombre del campo html: ['valor por defecto del campo', [Validaciones sincronas], [ Validaciones Asincronas] ]
    nombre: ['', [Validators.required,  Validators.pattern( this.validatorService.nombreApellidoPattern )]],
    email: ['', [Validators.required, Validators.pattern( this.validatorService.emailPattern )], [this.emailValidator] ],
    username: ['', [Validators.required, this.validatorService.noPuedeSerBanbleac]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmar: ['', [Validators.required]],
  },{
    validators: [this.validatorService.camposIguales('password','confirmar')]
  }); 

  

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;
    if( errors?.['required'] ){
      return 'El email es obligatorio'
    }else if(errors?.['pattern']){
      return 'Escribe un email válido'
    }
    if(errors?.['emailTomado']){
      return 'Este email ya está en uso'
    }
    return '';
  }

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Javier Sáez',
      email: 'test1@test.com',
      username: 'javiersaez',
      password: '123456',
      confirmar: '123456'
    }) 

    
  }

  campoNoValido( campo:string ){
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched
  }
  emailRequired() {
    return this.miFormulario.get('email')?.errors?.['required']
      && this.miFormulario.get('email')?.touched
  }
  emailFormato() {
    return this.miFormulario.get('email')?.errors?.['pattern']
      && this.miFormulario.get('email')?.touched
  }
  emailTomado() {
    return this.miFormulario.get('email')?.errors?.['emailTomado']
      && this.miFormulario.get('email')?.touched
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
  


  

}


