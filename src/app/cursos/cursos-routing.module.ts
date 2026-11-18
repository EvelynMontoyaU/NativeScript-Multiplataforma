import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { CursosComponent } from './cursos.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'detalle/:id', component: CursoDetalleComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CursosRoutingModule {}
