import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// path de LAZY LOAD para cargar hijos
const routes: Routes = [
  {
    path: 'template', 
    // esto carga los modulos hijos de template
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule)
  },
  {
    path: 'reactive', 
    // esto carga los modulos hijos de reactive
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule)
  },
  {
    path: 'auth', 
    // esto carga los modulos hijos de auth
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path:'**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
