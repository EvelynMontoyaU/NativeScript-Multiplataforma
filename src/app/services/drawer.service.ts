import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private abiertoSubject = new BehaviorSubject<boolean>(false);
  abierto$ = this.abiertoSubject.asObservable();

  constructor(private ngZone: NgZone) {}

  abrir(): void {
    this.ngZone.run(() => this.abiertoSubject.next(true));
  }

  cerrar(): void {
    this.ngZone.run(() => this.abiertoSubject.next(false));
  }

  toggle(): void {
    this.ngZone.run(() => this.abiertoSubject.next(!this.abiertoSubject.value));
  }
}