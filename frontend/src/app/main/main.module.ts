import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [MainComponent, HomeComponent, OurServicesComponent, PortfolioComponent, ContactusComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
