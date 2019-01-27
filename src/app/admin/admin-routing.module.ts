import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageContactsComponent } from './manage-contacts/manage-contacts.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AuthGuard } from '../auth/auth.guard';
import { CanDeactivateGuard } from '../can-deactivate.guard';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'customers', component: ManageCustomersComponent },
          { path: 'contacts', component: ManageContactsComponent },
          { path: 'products', component: ManageProductsComponent, canDeactivate: [CanDeactivateGuard] },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
