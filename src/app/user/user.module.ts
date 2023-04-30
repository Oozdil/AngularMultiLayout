import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class UserModule { }
