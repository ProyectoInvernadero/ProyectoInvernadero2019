import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/nologin.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './componentes/registro/registro.module#RegistroPageModule', canActivate: [NoLoginGuard] },
  { path: 'procesos', loadChildren: './pages/procesos/procesos.module#ProcesosPageModule' },
  { path: 'recuperacion', loadChildren: './componentes/recuperacion/recuperacion.module#RecuperacionPageModule' },
  { path: 'add-cultivo', loadChildren: './pages/add-cultivo/add-cultivo.module#AddCultivoPageModule' },
  { path: 'cultivo', loadChildren: './pages/cultivo/cultivo.module#CultivoPageModule' },
  { path: 'details/:id', loadChildren: './pages/cultivo-details/cultivo-details.module#CultivoDetailsPageModule' },
  { path: 'sensores', loadChildren: './pages/sensores/sensores.module#SensoresPageModule' },
  { path: 'notificaciones', loadChildren: './pages/notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'estadisticas', loadChildren: './pages/estadisticas/estadisticas.module#EstadisticasPageModule' },
  { path: 'details', loadChildren: './pages/cultivo-details/cultivo-details.module#CultivoDetailsPageModule' },
  { path: 'monitoreo', loadChildren: './pages/monitoreo/monitoreo.module#MonitoreoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
