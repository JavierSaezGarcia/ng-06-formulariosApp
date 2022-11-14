import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{
  
  // Forma redundante y poco efectiva pero hay quien lo hace de esta manera es decir con FormControl
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 3060ti'), // nombre puede ir con comillas o sin comillas. Funciona bien igual
  //   'precio': new FormControl(399),
  //   'stock':  new FormControl(50)
  // })
  // inyectamos FormBuilder en el constructor
  constructor( private fb: FormBuilder) { }


  // Forma con FormBuilder con validadores sincronos y asincronos
  miFormulario: FormGroup = this.fb.group({
    // [ valor  por defecto del campo, validadores sincronos(si hay mas de uno van en un array), validadores asincronos]
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.minLength(0)] ],
    stock: [, [Validators.required, Validators.minLength(0)] ]
  })

  // SI QUEREMOS INICIALIZAR CON UNOS VALORES DE INICIO SE HARIA ASI
  ngOnInit() {
    // this.miFormulario.setValue({
    //   nombre: 'Producto',
    //   precio: 0,
    //   stock: 0

    // })
    // de inicio reseteo todo
    this.miFormulario.reset();

  }


  campoValido(campo: string) {
    return this.miFormulario.controls[campo]?.errors
            && this.miFormulario.controls[campo].touched
  }
  guardar(){

    if( this.miFormulario.invalid ){
      // el metodo markAllAsTouched como su nombre indica es como si tocaramos cada campo del formulario antes de enviar el return vacio
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    // reseteamos el formulario desoues de mostrar el console o enviar a la BD
    this.miFormulario.reset();

  }


  
}
