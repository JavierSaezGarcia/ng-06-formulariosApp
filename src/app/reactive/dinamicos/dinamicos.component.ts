import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  
  // inyectamos FormBuilder en el constructor
  constructor( private fb: FormBuilder ) { }
  

  // Forma con FormBuilder con validadores sincronos y asincronos
  miFormulario: FormGroup = this.fb.group({
    // [ valor  por defecto del campo, validadores sincronos(si hay mas de uno van en un array), validadores asincronos]
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      [ 'New World', Validators.required ],
      [ 'Lost Ark', Validators.required ]
    ] , Validators.required )

  });

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  agregarFavorito() {
    if( this.nuevoFavorito.invalid ){
      return;
    }
    // Una forma
    // this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required));
    // Otra forma, creo que la mejor
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset();
  }
  borrar(index: number) {
    this.favoritosArr.removeAt(index);
  }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo]?.errors
            && this.miFormulario.controls[campo].touched
  }

  ngOnInit() {   
    //this.miFormulario.reset();
  }
  
  guardar(){
    if( this.miFormulario.invalid ){
      // el metodo markAllAsTouched como su nombre indica es como si tocaramos cada campo del formulario antes de enviar el return vacio
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    // reseteamos el formulario desoues de mostrar el console o enviar a la BD
    //this.miFormulario.reset();
  }
  
  
}
