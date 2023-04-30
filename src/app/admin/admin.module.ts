import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
