import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { InventoryComponent } from '../inventory/inventory.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
var ELEMENT_DATA: any
@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {

  constructor(private http: HttpClient, private dialog: MatDialog) { }
  displayedColumns: string[] = ['ID', 'title', 'author', 'type', 'subject', 'desription'];
  dataSource: any;
  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails() {
    this.http.get(environment.apiUrl + 'bookDetails').subscribe(element => {
      var data = JSON.parse(JSON.stringify(element))
      if (data.staus = 200) {
        ELEMENT_DATA = data.value
        this.dataSource = ELEMENT_DATA;
      }
    })
  }
  dialogModalNavigate() {
    this.dialog.open(InventoryComponent)
  }
}
