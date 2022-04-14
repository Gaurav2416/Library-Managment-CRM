import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
var ELEMENT_DATA: any;
@Component({
  selector: 'app-dependent-details',
  templateUrl: './dependent-details.component.html',
  styleUrls: ['./dependent-details.component.css']
})
export class DependentDetailsComponent implements OnInit {

  constructor(private http: HttpClient, private dialog: MatDialog) { }
  displayedColumns: string[] = ['ID', 'First Name', 'Last Name', 'Relation','MemberID'];
  dataSource: any;
  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {

    this.http.get(environment.apiUrl + 'getAllDependent').subscribe(element => {
      let data = JSON.parse(JSON.stringify(element))
      ELEMENT_DATA = data.value
      console.log(ELEMENT_DATA);
      this.dataSource = [...ELEMENT_DATA];

    })
  }

}
