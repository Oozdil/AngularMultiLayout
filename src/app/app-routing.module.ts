import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { StandartUserComponent } from './user/standart-user/standart-user.component';
import { LoggedUserComponent } from './user/logged-user/logged-user.component';
import { SalesComponent } from './admin/sales/sales.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';

const routes: Routes = [

  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '', component: StandartUserComponent
      },
      {
        path: 'user', component: LoggedUserComponent
      }
    ]
  },

  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "users", component: UsersComponent
      },
      {
        path: "products", component: ProductsComponent
      },
      {
        path: "sales", component: SalesComponent
      },
      {
        path: "", component: UsersComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
