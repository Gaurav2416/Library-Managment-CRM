import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddnewissuedComponent } from '../addnewissued/addnewissued.component';
import { IssuedreportComponent } from '../issuedreport/issuedreport.component';
import { ReturnedBookComponent } from '../returned-book/returned-book.component';
import { SharedServiceService } from '../shared/shared-service.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
var ELEMENT_DATA: any
@Component({
  selector: 'app-issued-book-details',
  templateUrl: './issued-book-details.component.html',
  styleUrls: ['./issued-book-details.component.css']
})
export class IssuedBookDetailsComponent implements OnInit {

  constructor(private http: HttpClient, private dialog: MatDialog,private Shared:SharedServiceService) { }
  displayedColumns: string[] = ['staffid', 'bookid', 'visitorid', 'booktitle', 'author', 'noofbooks', 'issueddate', 'noticedate', 'enddate','action'];
  dataSource: any;
  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails() {
    this.http.get(environment.apiUrl + 'issuedbookDetails').subscribe(element => {
      var data = JSON.parse(JSON.stringify(element))
      if (data.staus = 200) {
        ELEMENT_DATA = data.value
        this.dataSource = ELEMENT_DATA;
      }
    })
  }
  dialogModalNavigate() {
    this.dialog.open(AddnewissuedComponent)
  }
  noOfIsseuedBook() {
    this.dialog.open(IssuedreportComponent)
  }
  getElement(data: any) {
    let demo={returnedDate:new Date()}
    let finalData= Object.assign(data,demo)
    this.Shared.setMessage(finalData)
    this.dialog.open(ReturnedBookComponent)
  }
}
