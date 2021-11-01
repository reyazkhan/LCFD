import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPageModule } from '../tabs/tabs.module';
import { TabsPage } from '../tabs/tabs.page';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
