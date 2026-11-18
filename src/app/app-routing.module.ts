import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('~/app/cursos/cursos.module').then((m) => m.CursosModule)
  },
  {
    path: 'browse',
    loadChildren: () => import('~/app/browse/browse.module').then((m) => m.BrowseModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule)
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
