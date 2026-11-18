import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SideMenuComponent } from './side-menu.component';

@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
