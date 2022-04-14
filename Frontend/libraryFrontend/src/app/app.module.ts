import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './anguar-material/anguar-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { GuestDetailsComponent } from './guest-details/guest-details.component';
import { VisitorDetailsComponent } from './visitor-details/visitor-details.component';
import { IssuedBookDetailsComponent } from './issued-book-details/issued-book-details.component';
import { DependentDetailsComponent } from './dependent-details/dependent-details.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { IssuedreportComponent } from './issuedreport/issuedreport.component';
import { AddnewissuedComponent } from './addnewissued/addnewissued.component';
import { ReturnedBookComponent } from './returned-book/returned-book.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    InventoryComponent,
    LoginComponent,
    DashboardComponent,
    MemberDetailsComponent,
    EmployeeDetailsComponent,
    GuestDetailsComponent,
    VisitorDetailsComponent,
    IssuedBookDetailsComponent,
    DependentDetailsComponent,
    InventoryDetailsComponent,
    AddmemberComponent,
    IssuedreportComponent,
    AddnewissuedComponent,
    ReturnedBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddmemberComponent]
})
export class AppModule { }
