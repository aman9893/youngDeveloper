import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FeaturesComponent } from './features/features.component';

import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const  AppRoutes: Routes = [
 
    { path:'features', component: FeaturesComponent},
    { path:'product', component: ProductComponent},
    { path:'about', component: AboutUsComponent},
    { path:'portfolio', component: PortfolioComponent},
    
    { path:'contact', component: ContactPageComponent},
 
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: DashboardComponent }
    ]

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes , { useHash: true });
