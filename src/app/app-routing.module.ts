import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposMovimientoComponent } from './tipos-movimiento/tipos-movimiento.component';
import { EntidadesComponent } from './entidades/entidades.component';
import { GastosComponent } from './gastos/gastos.component';
import { GastosMesComponent } from './gastos-mes/gastos-mes.component';
import { GastosResumenComponent } from './gastos-resumen/gastos-resumen.component';
import { CsvProcessComponent } from './csv-process/csv-process.component';
import { GastosMesActualComponent } from './gastos-mes-actual/gastos-mes-actual.component';
import { ResultanteComponent } from './resultante/resultante.component';
import { ConfigFijosMesComponent } from './config-fijos-mes/config-fijos-mes.component';

// { path: '/user/:id', component: User, name: 'User' },
// { path: '/user', component: User, name: 'Usernew' }

const routes: Routes = [
  { path: 'gastos', 
    component: GastosComponent,
    data: {
      name: 'Gastos',
      activo: 1,
      submenu: false
    } 
  },
  { path: 'gastosMes', 
    component: GastosMesComponent,
    data: {
      name: 'Gastos Mes',
      activo: 1,
      submenu: false
    } 
  },
  { path: 'siguiente', 
    component: GastosMesActualComponent,
    data: {
      name: 'Siguiente Mes',
      activo: 1,
      submenu: false
    } 
  },
  { path: 'resumen', 
    component: GastosResumenComponent,
    data: {
      name: 'Resumen',
      activo: 1,
      submenu: false
    } 
  },
  { path: 'resultante', 
    component: ResultanteComponent,
    data: {
      name: 'Resultante',
      activo: 1,
      submenu: false
    } 
  },
  { path: '', 
    // component: ResultanteComponent,
    data: {
      name: 'Configuracion',
      activo: 1,
      submenu: true
    },
    children: [
      { 
        path: 'tiposMov', 
        component: TiposMovimientoComponent,
        data: {
          name: 'Tipos Movimiento',
          activo: 1,
          submenu: false
        } 
      },
      {
        path: 'entidades', 
        component: EntidadesComponent,
        data: {
          name: 'Entidades',
          activo: 1,
          submenu: false
        } 
      },
      {
        path: 'configuracionFijosMes', 
        component: ConfigFijosMesComponent,
        data: {
          name: 'Config FijosMes',
          activo: 1,
          submenu: false
        } 
      },
      { 
        path: 'subida', 
        component: CsvProcessComponent,
        data: {
          name: 'Subida',
          activo: 1,
          submenu: false
        } 
      }
    ],
  },
  { path: '', redirectTo: 'menu', pathMatch: 'full',
    data: {
      name: 'Menu',
      activo: 0,
      submenu: false
    } 
  }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
