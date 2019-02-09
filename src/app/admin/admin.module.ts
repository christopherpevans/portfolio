import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageContactsComponent } from './manage-contacts/manage-contacts.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { TodoComponent } from './admin/dashboard-todo/admin-todo.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageCustomersComponent,
    ManageContactsComponent,
    ManageProductsComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
