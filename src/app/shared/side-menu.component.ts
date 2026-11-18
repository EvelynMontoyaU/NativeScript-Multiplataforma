import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'ns-side-menu',
  template: `
    <GridLayout *ngIf="visible" rows="*" columns="*" width="100%" height="100%" backgroundColor="rgba(0,0,0,0.45)" (tap)="cerrar()">
      <GridLayout row="0" col="0" rows="auto, *" width="265" horizontalAlignment="left" backgroundColor="#ffffff" (tap)="noCerrar($event)">
        <StackLayout row="0" backgroundColor="#1976D2" padding="20">
          <Image src="res://ic_curso_custom" width="60" height="60" horizontalAlignment="left"></Image>
          <Label text="Curso NativeScript" color="#ffffff" fontWeight="bold" fontSize="18" marginTop="8"></Label>
          <Label text="Entregable Módulo 1-2" color="#E3F2FD" fontSize="13"></Label>
        </StackLayout>

        <ScrollView row="1">
          <StackLayout>
            <GridLayout columns="auto, *" class="nt-drawer__list-item" [class.-selected]="esRuta('/home')" (tap)="navegar('/home')">
              <Label col="0" text="🏠" class="nt-icon"></Label>
              <Label col="1" text="Inicio"></Label>
            </GridLayout>

            <GridLayout columns="auto, *" class="nt-drawer__list-item" [class.-selected]="esRuta('/cursos')" (tap)="navegar('/cursos')">
              <Label col="0" text="📚" class="nt-icon"></Label>
              <Label col="1" text="Módulos del Curso"></Label>
            </GridLayout>

            <GridLayout columns="auto, *" class="nt-drawer__list-item" [class.-selected]="esRuta('/browse')" (tap)="navegar('/browse')">
              <Label col="0" text="📰" class="nt-icon"></Label>
              <Label col="1" text="Explorar"></Label>
            </GridLayout>

            <GridLayout columns="auto, *" class="nt-drawer__list-item" [class.-selected]="esRuta('/settings')" (tap)="navegar('/settings')">
              <Label col="0" text="⚙️" class="nt-icon"></Label>
              <Label col="1" text="Configuración"></Label>
            </GridLayout>
          </StackLayout>
        </ScrollView>
      </GridLayout>
    </GridLayout>
  `
})
export class SideMenuComponent implements OnInit {
  visible = false;

  constructor(
    private drawerService: DrawerService,
    private router: Router,
    private routerExtensions: RouterExtensions,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.drawerService.abierto$.subscribe((estado) => {
      this.ngZone.run(() => {
        this.visible = estado;
        this.cdr.detectChanges();
      });
    });
  }

  esRuta(url: string): boolean {
    return this.router.url === url;
  }

  noCerrar(event: any): void {
    // Evita que el toque dentro del menú cierre el overlay
  }

  cerrar(): void {
    this.drawerService.cerrar();
  }

  navegar(ruta: string): void {
    this.drawerService.cerrar();
    this.ngZone.run(() => {
      this.routerExtensions.navigate([ruta], { transition: { name: 'fade' } });
    });
  }
}