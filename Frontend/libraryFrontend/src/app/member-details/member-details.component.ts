import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddmemberComponent } from '../addmember/addmember.component';
import { SharedServiceService } from '../shared/shared-service.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
var ELEMENT_DATA: any

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})

export class MemberDetailsComponent implements OnInit {
  constructor(private http: HttpClient, private dialog: MatDialog, private shared: SharedServiceService) { }
  displayedColumns: string[] = ['ID', 'Firstname', 'Lastname', 'type', 'phone', 'homemail', 'campusmail', 'generatedate', 'noticedate', 'enddate', 'employeeid', 'action'];
  dataSource: any;
  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails() {
    this.http.get(environment.apiUrl + 'memberDetails').subscribe(element => {
      let data = JSON.parse(JSON.stringify(element))
      ELEMENT_DATA = data.value
      console.log(ELEMENT_DATA);
      this.dataSource = [...ELEMENT_DATA];
    })
  }
  dialogModalNavigate() {
    this.dialog.open(AddmemberComponent)
  }
  getElement(req: any) {
    this.shared.setMessage(req)
    this.dialog.open(AddmemberComponent)

  }
}
