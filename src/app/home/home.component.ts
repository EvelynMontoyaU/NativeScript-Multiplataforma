import { Component } from '@angular/core';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private drawerService: DrawerService) {}

  onDrawerButtonTap(): void {
    this.drawerService.toggle();
  }
}
