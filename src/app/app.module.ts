import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './shared/material.module';
import { ContactComponent, NotificationComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UxComponent } from './ux/ux.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DataService } from './services/data.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { TodoComponent } from './dasboard/todo/todo.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    NotificationComponent,
    CustomerComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PortfolioComponent,
    UxComponent,
    ShoppingCartComponent,
    WebDesignComponent,
    ProfileComponent,
    PageNotFoundComponent,
    DashboardComponent,
    TodoComponent,
    DashboardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    DashboardRoutingModule,
    AdminModule
  ],
  entryComponents: [NotificationComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
