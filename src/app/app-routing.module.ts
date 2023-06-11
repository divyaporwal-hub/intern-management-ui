import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternListComponent } from './components/Interns/intern-list/intern-list.component';

const routes: Routes = [
  //  {
  //   path:'',
  //   component: InternListComponent
  //  },
   {
    path:'interns',
    component: InternListComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
