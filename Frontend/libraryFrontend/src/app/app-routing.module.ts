import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DependentDetailsComponent } from './dependent-details/dependent-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { GuestDetailsComponent } from './guest-details/guest-details.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { InventoryComponent } from './inventory/inventory.component';
import { IssuedBookDetailsComponent } from './issued-book-details/issued-book-details.component';
import { LoginComponent } from './login/login.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { StaffComponent } from './staff/staff.component';
import { VisitorDetailsComponent } from './visitor-details/visitor-details.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component: LoginComponent},
    {path:'staff', component: StaffComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'member', component: MemberDetailsComponent},
    {path:'employee', component: EmployeeDetailsComponent},
    {path:'guest', component: GuestDetailsComponent},
    {path:'visitor', component: VisitorDetailsComponent},
    {path:'issuedBook', component: IssuedBookDetailsComponent},
    {path:'inventory', component: InventoryDetailsComponent},
    {path:'dependent', component:DependentDetailsComponent}

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
