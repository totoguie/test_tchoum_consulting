import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListecontinentComponent } from './continents/listecontinent/listecontinent.component';

const routes: Routes = [{
  path: '',
  component: ListecontinentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
