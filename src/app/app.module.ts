import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cursosReducer } from './store/cursos.reducer';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    StoreModule.forRoot({ cursos: cursosReducer })
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
