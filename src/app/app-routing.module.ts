import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./paginas/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./paginas/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'appsmoviles',
    loadChildren: () => import('./paginas/appsmoviles/appsmoviles.module').then( m => m.AppsmovilesPageModule)
  },
  {
    path: 'paginasweb',
    loadChildren: () => import('./paginas/paginasweb/paginasweb.module').then( m => m.PaginaswebPageModule)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./paginas/soporte/soporte.module').then( m => m.SoportePageModule)
  },
  {
    path: 'menuinicio',
    loadChildren: () => import('./paginas/menuinicio/menuinicio.module').then( m => m.MenuinicioPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./paginas/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'aplicaciones-web',
    loadChildren: () => import('./paginas/aplicaciones-web/aplicaciones-web.module').then( m => m.AplicacionesWebPageModule)
  },
  {
    path: 'politicas',
    loadChildren: () => import('./paginas/politicas/politicas.module').then( m => m.PoliticasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
