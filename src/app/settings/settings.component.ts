import { Component } from '@angular/core';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  constructor(private drawerService: DrawerService) {}

  onDrawerButtonTap(): void {
    this.drawerService.toggle();
  }
}
