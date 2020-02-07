import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductComponent } from './product/product.component';
import { FeaturesComponent } from './features/features.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyValueComponent } from './company-value/company-value.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { ParticlesModule } from 'angular-particle';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarHeaderComponent,
    OurTeamComponent,
    PortfolioComponent,
    ProductComponent,
    FeaturesComponent,
    AboutUsComponent,
    ContactUsComponent,
    TestimonialComponent,
    FooterComponent,
    CompanyValueComponent,
    OurservicesComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    ROUTING,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
