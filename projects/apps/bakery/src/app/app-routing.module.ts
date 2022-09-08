import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'bakery',
    loadChildren: () =>
      import('@bakery/shell').then((module) => module.ShellModule),
  },
  {
    path: '**',
    redirectTo: 'bakery'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
