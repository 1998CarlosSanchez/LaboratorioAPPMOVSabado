import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cuenta',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cuenta/cuenta.module').then(m => m.CuentaPageModule)
          }
        ]
      },
      {
        path: 'movimientos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../movimientos/movimientos.module').then(m => m.MovimientosPageModule)
          }
        ]
      },
      {
        path: 'resumen',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../resumen/resumen.module').then(m => m.ResumenPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/cuenta',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cuenta',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}