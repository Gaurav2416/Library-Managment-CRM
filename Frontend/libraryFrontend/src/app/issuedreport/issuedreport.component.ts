import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
var ELEMENT_DATA: any;

@Component({
  selector: 'app-issuedreport',
  templateUrl: './issuedreport.component.html',
  styleUrls: ['./issuedreport.component.css']
})
export class IssuedreportComponent implements OnInit {
  displayedColumns: string[] = ['count', 'visitorid', 'issueddate'];
  dataSource: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDetails()
  }
  getDetails() {
    this.http.get(environment.apiUrl + 'countBooks').subscribe(element => {
      var data = JSON.parse(JSON.stringify(element))
      if (data.staus = 200) {
        ELEMENT_DATA = data.value
        this.dataSource = ELEMENT_DATA;
      }
    })
  }
}
