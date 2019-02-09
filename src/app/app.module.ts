import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { GtagModule } from 'angular-gtag';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './shared/material.module';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormSubmissionComponent } from './shared/form-submission.component';
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
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AngularFirestore } from 'angularfire2/firestore';
import { AddToCartComponent } from './shared/add-to-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    AddToCartComponent,
    NavBarComponent,
    ContactComponent,
    FormSubmissionComponent,
    CustomerComponent,
    FooterComponent,
    HomeComponent,
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
    AdminModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    GtagModule.forRoot({ trackingId: 'UA-132076132-1', trackPageviews: true })
  ],
  entryComponents: [FormSubmissionComponent, AddToCartComponent],
  providers: [DataService,
              AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
