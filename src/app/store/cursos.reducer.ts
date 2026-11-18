import { createAction, createReducer, on, props } from '@ngrx/store';

export interface Curso {
  id: number;
  titulo: string;
  modulo: string;
  duracion: string;
  completado: boolean;
}

export interface CursosState {
  lista: Curso[];
  seleccionado: Curso | null;
}

export const seleccionarCurso = createAction(
  '[Cursos] Seleccionar Curso',
  props<{ curso: Curso }>()
);

export const agregarCurso = createAction(
  '[Cursos] Agregar Curso',
  props<{ curso: Curso }>()
);

export const initialState: CursosState = {
  lista: [
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
  ],
  seleccionado: null
};

export const cursosReducer = createReducer(
  initialState,
  on(seleccionarCurso, (state, { curso }) => ({
    ...state,
    seleccionado: curso
  })),
  on(agregarCurso, (state, { curso }) => ({
    ...state,
    lista: [...state.lista, curso]
  }))
);
