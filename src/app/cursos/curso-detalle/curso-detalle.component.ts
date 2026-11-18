import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../store/cursos.reducer';

@Component({
  selector: 'ns-curso-detalle',
  templateUrl: './curso-detalle.component.html'
})
export class CursoDetalleComponent implements OnInit {
  curso: Curso | undefined;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.curso = this.cursosService.obtenerCursos().find(c => c.id === id);
  }

  volver(): void {
    this.routerExtensions.back();
  }
}
