import { Component, OnInit } from '@angular/core';
import { isAndroid } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { CursosService } from '../services/cursos.service';
import { DrawerService } from '../services/drawer.service';
import { Curso } from '../store/cursos.reducer';

@Component({
  selector: 'ns-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  mensajePlataforma: string = 'Ejecutando en plataforma iOS / General';
  esSoloAndroid: boolean = false;
  nuevoTitulo: string = '';

  constructor(
    private cursosService: CursosService,
    private routerExtensions: RouterExtensions,
    private drawerService: DrawerService
  ) {}

  ngOnInit(): void {
    // Requisito 10: Asigna valor a una variable cuando se está en Android solamente
    if (isAndroid) {
      this.esSoloAndroid = true;
      this.mensajePlataforma = '¡Dispositivo Android detectado! Estilos y lógica nativa Android activos.';
    }

    this.cursos = this.cursosService.obtenerCursos();
  }

  onDrawerButtonTap(): void {
    this.drawerService.toggle();
  }

  verDetalle(curso: Curso): void {
    this.cursosService.elegirCurso(curso);
    this.routerExtensions.navigate(['/cursos/detalle', curso.id], {
      transition: { name: 'slide' }
    });
  }

  agregarCursoRapido(): void {
    if (this.nuevoTitulo && this.nuevoTitulo.trim().length > 0) {
      this.cursosService.registrarNuevoCurso(
        this.nuevoTitulo.trim(),
        'Módulo Extra',
        '1 semana'
      );
      this.nuevoTitulo = '';
    }
  }
}
