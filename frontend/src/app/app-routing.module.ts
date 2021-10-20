import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'materials',
    pathMatch: 'full'
  },
  {
  path: 'materials',
  loadChildren: () => import('./materials/materials.module').then(m => m.MaterialsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
