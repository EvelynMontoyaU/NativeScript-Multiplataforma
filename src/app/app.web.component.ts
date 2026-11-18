import { Component, OnInit } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { Curso } from './store/cursos.reducer';

@Component({
  selector: 'app-root',
  template: `
    <div style="display:flex; min-height:100vh;">
      <aside style="width:260px; background:#1976D2; color:#fff; padding:24px 16px; display:flex; flex-direction:column; gap:12px;">
        <h2 style="margin:0 0 4px 0; font-size:20px;">Curso NativeScript</h2>
        <p style="margin:0 0 16px 0; font-size:13px; color:#E3F2FD;">Versión Web + Mobile (Code-Sharing)</p>
        <button (click)="vista='home'" [style.background]="vista==='home' ? '#1565C0' : 'transparent'" style="color:#fff; border:none; text-align:left; padding:12px; border-radius:6px; cursor:pointer; font-size:15px;">🏠 Inicio</button>
        <button (click)="vista='cursos'" [style.background]="vista==='cursos' ? '#1565C0' : 'transparent'" style="color:#fff; border:none; text-align:left; padding:12px; border-radius:6px; cursor:pointer; font-size:15px;">📚 Módulos del Curso</button>
        <button (click)="vista='browse'" [style.background]="vista==='browse' ? '#1565C0' : 'transparent'" style="color:#fff; border:none; text-align:left; padding:12px; border-radius:6px; cursor:pointer; font-size:15px;">📰 Explorar</button>
        <button (click)="vista='settings'" [style.background]="vista==='settings' ? '#1565C0' : 'transparent'" style="color:#fff; border:none; text-align:left; padding:12px; border-radius:6px; cursor:pointer; font-size:15px;">⚙️ Configuración</button>
      </aside>

      <main style="flex:1; padding:32px; max-width:860px;">
        <div *ngIf="vista==='home'">
          <h1>Inicio - Proyecto Multiplataforma Coursera</h1>
          <p>Esta aplicación comparte el mismo <strong>CursosService</strong> y el mismo <strong>Store Redux (NgRx)</strong> entre la versión Web (Angular) y la versión Móvil Nativa (NativeScript Android/iOS).</p>
          <button (click)="vista='cursos'" style="background:#1976D2; color:#fff; border:none; padding:12px 20px; border-radius:6px; cursor:pointer; font-size:15px;">Ver Módulos del Curso ➔</button>
        </div>

        <div *ngIf="vista==='cursos'">
          <h1>Módulos del Curso (Vista Web compartida)</h1>
          <div style="background:#E3F2FD; color:#0D47A1; padding:12px 16px; border-radius:8px; margin-bottom:20px; font-weight:600;">
            🌐 Ejecutando en Navegador Web (compartiendo estado Redux con Mobile)
          </div>

          <div style="display:flex; gap:10px; margin-bottom:20px;">
            <input [(ngModel)]="nuevoTitulo" placeholder="Agregar nuevo tema de estudio..." style="flex:1; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:15px;" />
            <button (click)="agregar()" style="background:#1976D2; color:#fff; border:none; padding:10px 18px; border-radius:6px; cursor:pointer; font-weight:600;">+ Agregar</button>
          </div>

          <div *ngFor="let item of cursos" (click)="seleccionado = item" style="background:#fff; border:1px solid #e2e8f0; border-left:5px solid #1976D2; padding:16px; border-radius:8px; margin-bottom:12px; cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-weight:bold; font-size:17px; color:#0f172a;">{{ item.titulo }}</div>
              <div style="font-size:14px; color:#64748b; margin-top:4px;">{{ item.modulo }} • Duración: {{ item.duracion }}</div>
            </div>
            <span style="font-size:18px;">{{ item.completado ? '✔' : '➔' }}</span>
          </div>

          <div *ngIf="seleccionado" style="margin-top:24px; background:#fff; border:1px solid #93c5fd; padding:20px; border-radius:8px;">
            <h3 style="margin-top:0;">Detalle seleccionado: {{ seleccionado.titulo }}</h3>
            <p><strong>Sección:</strong> {{ seleccionado.modulo }} | <strong>Duración:</strong> {{ seleccionado.duracion }}</p>
            <button (click)="seleccionado = null" style="background:#64748b; color:#fff; border:none; padding:8px 14px; border-radius:6px; cursor:pointer;">Cerrar detalle</button>
          </div>
        </div>

        <div *ngIf="vista==='browse'">
          <h1>Explorar</h1>
          <p>Sección Explorar de la navegación SideDrawer.</p>
        </div>

        <div *ngIf="vista==='settings'">
          <h1>Configuración</h1>
          <p>Configuración de la aplicación multiplataforma.</p>
        </div>
      </main>
    </div>
  `
})
export class AppWebComponent implements OnInit {
  vista: string = 'cursos';
  cursos: Curso[] = [];
  nuevoTitulo: string = '';
  seleccionado: Curso | null = null;

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.obtenerCursos();
  }

  agregar(): void {
    if (this.nuevoTitulo && this.nuevoTitulo.trim().length > 0) {
      this.cursosService.registrarNuevoCurso(this.nuevoTitulo.trim(), 'Módulo Extra', '1 semana');
      this.nuevoTitulo = '';
    }
  }
}
