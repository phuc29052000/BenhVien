import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

import { CavetBoardComponent } from './cavet/cavet-board/cavet-board.component';

import { AuthGuard } from '../guard/auth.guard';
import { RoleGuard } from '../guard/role.guard';
import { ROLES } from '../constant/var';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { InformationComponent } from './information/information.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'cavet',
        component: CavetBoardComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: [ROLES.ADMIN_CN, ROLES.SUPER_ADMIN, ROLES.CV_CHI_NHANH],
        },
      },
      {
        path:'infor',
        component:InformationComponent
      },

      {
        path: 'not-authorized',
        component: NotAuthorizedComponent,
      },

      // { path: 'transaction', component: TransactionComponent },
      // { path: 'transaction/report/:id', component: TransactionEditComponent },
      // { path: 'transaction-edit/:id', component: TransactionEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
