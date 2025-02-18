import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IniciarSessioFraderaComponent } from '../iniciar-sessio-fradera/iniciar-sessio-fradera.component';

const routes: Routes = [
  {
    path: 'issesioFradera',
    component: IniciarSessioFraderaComponent
  },
  {
    path: 'issesioFradera',
    component: HomeComponent
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: '**',
    redirectTo: 'issesioFradera'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
