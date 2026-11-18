import { Component } from '@angular/core';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html'
})
export class BrowseComponent {
  constructor(private drawerService: DrawerService) {}

  onDrawerButtonTap(): void {
    this.drawerService.toggle();
  }
}
