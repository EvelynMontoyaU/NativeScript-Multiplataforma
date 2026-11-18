import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    CursosRoutingModule,
    SharedModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalleComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CursosModule {}
