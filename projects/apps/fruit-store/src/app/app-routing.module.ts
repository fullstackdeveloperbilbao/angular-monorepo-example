import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'fruit-store',
    loadChildren: () =>
      import('@fruit-store/layout').then((module) => module.LayoutModule),
  },
  {
    path: '**',
    redirectTo: 'fruit-store'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
