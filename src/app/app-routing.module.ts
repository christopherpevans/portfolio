import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UxComponent } from './ux/ux.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'portfolio', component: PortfolioComponent },
  // { path: 'dashboard', component: DashboardComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'customer', component: CustomerComponent },
  // { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'ux', component: UxComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'pricing/webdesign', component: WebDesignComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
