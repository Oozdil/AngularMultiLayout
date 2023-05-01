import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';



@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    UsersComponent,
    ProductsComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ]
})
export class AdminModule { }
