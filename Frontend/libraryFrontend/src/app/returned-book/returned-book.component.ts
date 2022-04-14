import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SharedServiceService } from '../shared/shared-service.service';

@Component({
  selector: 'app-returned-book',
  templateUrl: './returned-book.component.html',
  styleUrls: ['./returned-book.component.css']
})
export class ReturnedBookComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router,private Shared:SharedServiceService) { }

  ngOnInit(): void {
    this.AddIssuedForm.setValue(this.Shared.getMessage());
  }

  AddIssuedForm = new FormGroup({
    staffid: new FormControl(),
    bookid: new FormControl(),
    visitorid: new FormControl(),
    booktitle: new FormControl(),
    author: new FormControl(),
    noofbooks: new FormControl(),
    issueddate: new FormControl(),
    noticedate: new FormControl(),
    enddate: new FormControl(),
    returnedDate: new FormControl(new Date())
  })
  onsubmit() {
    this.http.post(environment.apiUrl + 'deleteIssuedBook', this.AddIssuedForm.value).subscribe(response => {
      if (JSON.parse(JSON.stringify(response)).status = '200')
        this.router.navigateByUrl('/isseudBook')

    })
  }

}
