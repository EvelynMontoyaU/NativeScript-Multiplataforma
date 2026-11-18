import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso, CursosState, seleccionarCurso, agregarCurso } from '../store/cursos.reducer';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursosDefault: Curso[] = [
    {
      id: 1,
      titulo: 'Ecosistema NativeScript y CLI',
      modulo: 'Módulo 1',
      duracion: '2 semanas',
      completado: true
    },
    {
      id: 2,
      titulo: 'Layouts y Widgets Nativos en XML',
      modulo: 'Módulo 2',
      duracion: '2 semanas',
      completado: true
    },
    {
      id: 3,
      titulo: 'Arquitectura Angular, Módulos y Rutas',
      modulo: 'Módulo 3',
      duracion: '3 semanas',
      completado: false
    },
    {
      id: 4,
      titulo: 'Gestión de Estado con Redux (NgRx)',
      modulo: 'Módulo 4',
      duracion: '2 semanas',
      completado: false
    }
  ];

  constructor(private store: Store<{ cursos: CursosState }>) {}

  obtenerCursos(): Curso[] {
    return this.cursosDefault;
  }

  obtenerCursosObservable(): Observable<CursosState> {
    return this.store.select('cursos');
  }

  elegirCurso(curso: Curso): void {
    this.store.dispatch(seleccionarCurso({ curso }));
  }

  registrarNuevoCurso(titulo: string, modulo: string, duracion: string): void {
    const nuevo: Curso = {
      id: this.cursosDefault.length + 1,
      titulo,
      modulo,
      duracion,
      completado: false
    };
    this.cursosDefault.push(nuevo);
    this.store.dispatch(agregarCurso({ curso: nuevo }));
  }
}
