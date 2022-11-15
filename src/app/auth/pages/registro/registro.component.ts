import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit{

  nombreApellidoPattern: string = "([A-ZÀ-ÿa-z]+) ([A-ZÀ-ÿa-z]+)"; 
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group({

    nombre: ['', [Validators.required,  Validators.pattern( this.nombreApellidoPattern )]],
    email: ['', [Validators.required, Validators.pattern( this.emailPattern )]]

  }); 

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Javier Sáez',
      email: 'javiersaez1205@gmail.com'
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


