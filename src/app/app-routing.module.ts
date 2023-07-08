import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AflFormComponent } from './afl-form/afl-form.component';
import { AflTwoComponent } from './afl-two/afl-two.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'afl-form',
    pathMatch: 'full'
  },

  {
    path: 'afl-two',
    component: AflTwoComponent
  }, 

  {
    path: 'afl-form',
    component: AflFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
