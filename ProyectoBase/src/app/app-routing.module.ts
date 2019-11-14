import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistrarPage } from './auth/registrar/registrar.page';
import { LoginPage } from './auth/login/login.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'registro', component: RegistrarPage },
  { path: 'registrar', component: RegistrarPage  },
  { path: 'login', component: LoginPage },
/*{ path: 'modal-mov', loadChildren: './modal-mov/modal-mov.module#ModalMovPageModule' },*/

/*{ path: 'movimientos', loadChildren: './movimientos/movimientos.module#MovimientosPageModule' },*/
/*{ path: 'resumen', loadChildren: './resumen/resumen.module#ResumenPageModule' },*/

/*{ path: 'home', loadChildren: './home/home.module#HomePageModule' },*/
/*{ path: 'cuenta', loadChildren: './cuenta/cuenta.module#CuentaPageModule' }*/
/*{ path: 'modal-add', loadChildren: './modal-add/modal-add.module#ModalAddPageModule' },*/


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}