import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
 var ELEMENT_DATA: any;
 
@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['ID', 'firstname', 'lastname', 'Phone','generatedate','expiredate'];
  dataSource :any;
  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails() {
    this.http.get(environment.apiUrl + 'guestDetails').subscribe(element => {
      let data = JSON.parse(JSON.stringify(element))
      ELEMENT_DATA = data.value
      console.log(ELEMENT_DATA);
      this.dataSource = [...ELEMENT_DATA];
    })
  }
}
