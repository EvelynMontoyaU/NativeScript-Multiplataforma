import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppWebComponent } from './app.web.component';
import { cursosReducer } from './store/cursos.reducer';

@NgModule({
  declarations: [AppWebComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ cursos: cursosReducer })
  ],
  bootstrap: [AppWebComponent]
})
export class AppWebModule {}
